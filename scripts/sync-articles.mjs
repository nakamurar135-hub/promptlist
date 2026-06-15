#!/usr/bin/env node
/**
 * sync-articles.mjs
 *
 * GitHub の manus/next-migration ブランチから新規記事ファイル（.tsx）を検出し、
 * ローカルプロジェクトへ反映するスクリプト。
 *
 * 処理フロー:
 *  1. git fetch origin manus/next-migration
 *  2. ブランチ版 App.tsx のRouteと、ローカル App.tsx のRouteを比較して未登録を検出
 *  3. 未登録の記事ファイルをブランチから取得（存在しない場合のみ）
 *  4. App.tsx に import と Route を追加
 *  5. BeginnerPrompts.tsx の beginnerPrompts 配列に追加
 *  6. Home.tsx の beginnerArticles 配列に追加（ブランチ版に存在する場合のみ）
 *  7. TypeScript エラーチェック（記事関連ファイルのみ）
 *  8. Vitest テスト実行（既存の subscription.test.ts 失敗は除外）
 *  9. 全て通過した場合のみ終了コード 0 で完了
 */

import { execSync, spawnSync } from "child_process";
import { readFileSync, writeFileSync, existsSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const PROJECT_ROOT = join(__dirname, "..");
const BRANCH = "origin/manus/next-migration";
const ARTICLES_DIR = "client/src/pages/articles";
const APP_TSX = join(PROJECT_ROOT, "client/src/App.tsx");
const BEGINNER_TSX = join(PROJECT_ROOT, "client/src/pages/BeginnerPrompts.tsx");
const HOME_TSX = join(PROJECT_ROOT, "client/src/pages/Home.tsx");

// ─── ユーティリティ ──────────────────────────────────────────────────────────

function run(cmd, opts = {}) {
  return execSync(cmd, {
    cwd: PROJECT_ROOT,
    encoding: "utf8",
    stdio: opts.silent ? "pipe" : ["inherit", "pipe", "inherit"],
    ...opts,
  }).trim();
}

function runWithStatus(cmd) {
  const result = spawnSync("sh", ["-c", cmd], {
    cwd: PROJECT_ROOT,
    encoding: "utf8",
    stdio: "pipe",
  });
  return {
    code: result.status,
    stdout: result.stdout || "",
    stderr: result.stderr || "",
  };
}

function log(msg) {
  console.log(`[sync-articles] ${msg}`);
}

function logError(msg) {
  console.error(`[sync-articles] ERROR: ${msg}`);
}

// ─── Step 1: git fetch ────────────────────────────────────────────────────────

log("Step 1: git fetch origin manus/next-migration ...");
try {
  const token = run("gh auth token", { silent: true });
  run(
    `git remote set-url origin "https://${token}@github.com/nakamurar135-hub/promptlist.git"`,
    { silent: true }
  );
  run("git fetch origin manus/next-migration", { silent: true });
  log("fetch 完了");
} catch (e) {
  logError(`git fetch 失敗: ${e.message}`);
  process.exit(1);
}

// ─── ブランチ版ファイルを読み込む ─────────────────────────────────────────────

log("ブランチ版ファイルを読み込み中 ...");
let branchAppTsx = "";
let branchBeginnerTsx = "";
let branchHomeTsx = "";
try {
  branchAppTsx = run(`git show ${BRANCH}:client/src/App.tsx`, { silent: true });
  branchBeginnerTsx = run(
    `git show ${BRANCH}:client/src/pages/BeginnerPrompts.tsx`,
    { silent: true }
  );
  branchHomeTsx = run(`git show ${BRANCH}:client/src/pages/Home.tsx`, {
    silent: true,
  });
} catch (e) {
  logError(`ブランチファイル読み込み失敗: ${e.message}`);
  process.exit(1);
}

// ─── Step 2: 未登録記事の検出 ─────────────────────────────────────────────────

log("Step 2: 未登録記事を検出 ...");

// ブランチ版 App.tsx から articles Route の一覧を抽出
const branchRoutes = [
  ...branchAppTsx.matchAll(
    /Route path="(\/articles\/[^"]+)"\s+component=\{(\w+)\}/g
  ),
].map((m) => ({ path: m[1], component: m[2] }));

// ローカル App.tsx を読み込む
const localAppTsx = readFileSync(APP_TSX, "utf8");

// ローカルに未登録のRouteを検出
const unregisteredRoutes = branchRoutes.filter(
  ({ path, component }) =>
    !localAppTsx.includes(`path="${path}"`) &&
    !localAppTsx.includes(`import ${component} from`)
);

if (unregisteredRoutes.length === 0) {
  log("未登録の記事なし。処理を終了します。");
  process.exit(0);
}

log(`未登録記事を検出: ${unregisteredRoutes.length} 件`);
unregisteredRoutes.forEach(({ path, component }) =>
  log(`  - ${component} -> ${path}`)
);

// ─── Step 3: 記事ファイルをブランチから取得 ───────────────────────────────────

log("Step 3: 記事ファイルをブランチから取得 ...");
for (const { component } of unregisteredRoutes) {
  const filePath = `${ARTICLES_DIR}/${component}.tsx`;
  const localPath = join(PROJECT_ROOT, filePath);

  // ローカルに存在しない場合のみ取得
  if (!existsSync(localPath)) {
    try {
      const content = run(`git show ${BRANCH}:${filePath}`, { silent: true });
      writeFileSync(localPath, content, "utf8");
      log(`  取得: ${filePath}`);
    } catch (e) {
      logError(`ファイル取得失敗 ${filePath}: ${e.message}`);
      process.exit(1);
    }
  } else {
    log(`  既存: ${filePath}（スキップ）`);
  }
}

// ─── ヘルパー: ブランチ版から特定 href のエントリを抽出 ───────────────────────

/**
 * 指定した href を持つオブジェクトリテラルを抽出する
 * { href: "...", ... } の形式を想定
 */
function extractEntryByHref(href, source) {
  // href を含む { ... } ブロックを抽出（ネストなし想定）
  const escapedHref = href.replace(/\//g, "\\/");
  // 配列内のオブジェクトエントリを探す
  // { から始まり、href: "..." を含み、} で終わるブロック
  let startIdx = -1;
  let depth = 0;
  let inEntry = false;

  for (let i = 0; i < source.length; i++) {
    if (source[i] === "{") {
      depth++;
      if (depth === 2) {
        // 配列内のオブジェクト開始
        const slice = source.substring(i);
        if (slice.includes(`href: "${href}"`)) {
          startIdx = i;
          inEntry = true;
        }
      }
    } else if (source[i] === "}") {
      if (inEntry && depth === 2) {
        return source.substring(startIdx, i + 1);
      }
      depth--;
    }
  }
  return null;
}

// ─── Step 4: App.tsx への追加 ─────────────────────────────────────────────────

log("Step 4: App.tsx に import と Route を追加 ...");
let appTsx = readFileSync(APP_TSX, "utf8");
let appModified = false;

for (const { path: routePath, component } of unregisteredRoutes) {
  // すでに import されている場合はスキップ
  if (appTsx.includes(`import ${component} from`)) {
    log(`  スキップ（import 既登録）: ${component}`);
    continue;
  }

  log(`  追加: ${component} -> ${routePath}`);

  // import 追加: 最後の articles import の後に挿入
  const importLine = `import ${component} from "./pages/articles/${component}";`;
  const articleImportRegex = /^import \w+ from "\.\/pages\/articles\/[^"]+";$/gm;
  const allArticleImports = [...appTsx.matchAll(articleImportRegex)];

  if (allArticleImports.length > 0) {
    const lastImport = allArticleImports[allArticleImports.length - 1][0];
    appTsx = appTsx.replace(lastImport, `${lastImport}\n${importLine}`);
  } else {
    appTsx = appTsx.replace(
      'import Home from "./pages/Home";',
      `import Home from "./pages/Home";\n${importLine}`
    );
  }

  // Route 追加: 最後の通常記事 Route の後に挿入（プレミアムRouteの前）
  const routeLine = `      <Route path="${routePath}" component={${component}} />`;
  const articleRouteRegex =
    /^      <Route path="\/articles\/[^"]*" component=\{\w+\} \/>$/gm;
  const allArticleRoutes = [...appTsx.matchAll(articleRouteRegex)];

  if (allArticleRoutes.length > 0) {
    const lastRoute = allArticleRoutes[allArticleRoutes.length - 1][0];
    appTsx = appTsx.replace(lastRoute, `${lastRoute}\n${routeLine}`);
  } else {
    // フォールバック: プレミアムコースコメントの前に追加
    const premiumComment = "      {/* 中級者向けコース";
    if (appTsx.includes(premiumComment)) {
      appTsx = appTsx.replace(
        premiumComment,
        `${routeLine}\n\n${premiumComment}`
      );
    } else {
      // 最終フォールバック: </Switch> の前に追加
      appTsx = appTsx.replace(
        "      <Route path=\"/404\"",
        `${routeLine}\n      <Route path="/404"`
      );
    }
  }

  appModified = true;
}

if (appModified) {
  writeFileSync(APP_TSX, appTsx, "utf8");
  log("App.tsx を更新しました");
} else {
  log("App.tsx: 追加対象なし");
}

// ─── Step 5: BeginnerPrompts.tsx への追加 ─────────────────────────────────────

log("Step 5: BeginnerPrompts.tsx に記事エントリを追加 ...");
let beginnerTsx = readFileSync(BEGINNER_TSX, "utf8");
let beginnerModified = false;

for (const { path: routePath } of unregisteredRoutes) {
  // すでに登録されている場合はスキップ
  if (beginnerTsx.includes(`href: "${routePath}"`)) {
    log(`  スキップ（既登録）: ${routePath}`);
    continue;
  }

  // ブランチ版 BeginnerPrompts.tsx からエントリを抽出
  const entry = extractEntryByHref(routePath, branchBeginnerTsx);
  if (!entry) {
    log(`  警告: BeginnerPrompts.tsx にエントリなし: ${routePath}`);
    continue;
  }

  // beginnerPrompts 配列の末尾（];の前）に追加
  const arrayEnd = beginnerTsx.lastIndexOf("];\n");
  if (arrayEnd !== -1) {
    const before = beginnerTsx.substring(0, arrayEnd);
    const after = beginnerTsx.substring(arrayEnd);
    beginnerTsx = `${before}  ${entry.trim()},\n${after}`;
    log(`  追加: ${routePath}`);
    beginnerModified = true;
  } else {
    logError(`BeginnerPrompts.tsx の配列末尾が見つかりません`);
  }
}

// 記事数カウントを更新
if (beginnerModified) {
  const hrefCount = (beginnerTsx.match(/href:\s*"\/articles\//g) || []).length;
  beginnerTsx = beginnerTsx.replace(/全\d+記事/g, `全${hrefCount}記事`);
  writeFileSync(BEGINNER_TSX, beginnerTsx, "utf8");
  log(`BeginnerPrompts.tsx を更新しました（${hrefCount}記事）`);
} else {
  log("BeginnerPrompts.tsx: 追加対象なし");
}

// ─── Step 6: Home.tsx への追加 ────────────────────────────────────────────────

log("Step 6: Home.tsx に記事エントリを追加 ...");
let homeTsx = readFileSync(HOME_TSX, "utf8");
let homeModified = false;

if (!homeTsx.includes("beginnerArticles")) {
  log("  Home.tsx に beginnerArticles 配列なし。スキップ。");
} else {
  for (const { path: routePath } of unregisteredRoutes) {
    // すでに登録されている場合はスキップ
    if (homeTsx.includes(`href: "${routePath}"`)) {
      log(`  スキップ（既登録）: ${routePath}`);
      continue;
    }

    // ブランチ版 Home.tsx からエントリを抽出
    const entry = extractEntryByHref(routePath, branchHomeTsx);
    if (!entry) {
      log(`  情報: Home.tsx にエントリなし（追加不要）: ${routePath}`);
      continue;
    }

    // beginnerArticles 配列の末尾（skillGuides の前）に追加
    const skillGuidesMarker = "];\n\n// 中級者向けスキルガイドデータ";
    if (homeTsx.includes(skillGuidesMarker)) {
      homeTsx = homeTsx.replace(
        skillGuidesMarker,
        `  ${entry.trim()},\n${skillGuidesMarker}`
      );
      log(`  追加: ${routePath}`);
      homeModified = true;
    } else {
      // フォールバック: beginnerArticles の最後の }; の前に追加
      const lastArrayEnd = homeTsx.lastIndexOf("];\n");
      if (lastArrayEnd !== -1) {
        const before = homeTsx.substring(0, lastArrayEnd);
        const after = homeTsx.substring(lastArrayEnd);
        homeTsx = `${before}  ${entry.trim()},\n${after}`;
        log(`  追加（フォールバック）: ${routePath}`);
        homeModified = true;
      }
    }
  }

  if (homeModified) {
    writeFileSync(HOME_TSX, homeTsx, "utf8");
    log("Home.tsx を更新しました");
  } else {
    log("Home.tsx: 追加対象なし");
  }
}

// ─── Step 7: TypeScript エラーチェック ───────────────────────────────────────

log("Step 7: TypeScript エラーチェック（記事関連ファイル）...");
const tscResult = runWithStatus("npx tsc --noEmit 2>&1");
// 既存の既知エラーパターンを除外（stripe/subscription/Account 等）
const KNOWN_ERROR_PATTERNS = [
  "server/stripe.ts",
  "subscription",
  "pages/account/Upgrade.tsx",
  "pages/account/Account.tsx",
  "pages/skills/SkillsList.tsx",
  "pages/skills/MultiAgentSystems.tsx",
  "pages/skills/PromptEngineering.tsx",
  "pages/skills/RagImplementation.tsx",
  "contexts/useTheme.test.tsx",
  "@testing-library/react",
];
const articleErrors = tscResult.stdout.split("\n").filter((line) => {
  if (!line.includes("error TS")) return false;
  return !KNOWN_ERROR_PATTERNS.some((p) => line.includes(p));
});
if (articleErrors.length > 0) {
  logError("記事関連ファイルに TypeScript エラーが検出されました:");
  articleErrors.forEach((l) => console.error(l));
  logError("チェックポイントを保存せずに終了します。");
  process.exit(2);
}
log("記事関連ファイルの TypeScript エラーなし ✓");

// ─── Step 8: Vitest テスト ────────────────────────────────────────────────────

log("Step 8: Vitest テスト実行 ...");
const testResult = runWithStatus("pnpm test 2>&1");
// subscription.test.ts は既存の未実装ルーターによる失敗のため除外
const testOutput = testResult.stdout + testResult.stderr;
const newTestFailures = testOutput
  .split("\n")
  .filter(
    (line) =>
      line.includes(" FAIL ") && !line.includes("subscription.test.ts")
  );
if (newTestFailures.length > 0) {
  logError("新規テスト失敗が検出されました:");
  newTestFailures.forEach((l) => console.error(l));
  logError("チェックポイントを保存せずに終了します。");
  process.exit(3);
}
if (!testOutput.includes("PASS") && !testOutput.includes("passed")) {
  logError("テストが通過していません。");
  console.error(testOutput);
  process.exit(3);
}
log("テスト確認完了 ✓（既存の subscription.test.ts の失敗は除外）");

// ─── 完了 ─────────────────────────────────────────────────────────────────────

log("=== 同期完了 ===");
log(`追加した記事: ${unregisteredRoutes.length} 件`);
unregisteredRoutes.forEach(({ path, component }) =>
  log(`  - ${component} -> ${path}`)
);
log("チェックポイントを保存してください。");
process.exit(0);
