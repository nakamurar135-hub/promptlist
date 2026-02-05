# Webサイトコンポーネント フォーマット指示書

このドキュメントは、ChatGPT/AIプロンプト活用ブログサイトのUIコンポーネントを統一的に作成するためのフォーマット指示書です。
AIモデルに本ドキュメントを参照させることで、統一されたReactコンポーネントを生成できます。

**リファレンス実装**: `src/articles/website-component-format/`

---

## 基本設計

### 技術スタック

| 項目 | 設定値 |
|------|--------|
| フレームワーク | Next.js 16 (App Router) |
| 言語 | TypeScript |
| React | React 19 |
| CSS管理 | Tailwind CSS v4 |
| UIライブラリ | shadcn/ui (Radix UI ベース) |
| アイコン | lucide-react |
| ユーティリティ | clsx + tailwind-merge (cn関数) |
| ファイル構成 | コンポーネント単位で分割 (.tsx) |
| 対応デバイス | PC / スマートフォン（レスポンシブ） |

### カラーパレット

背景色を除き、記事内で使用する色は4色以内に制限してください。

**CSS変数定義** (`app/globals.css`):

```css
:root {
  --background: #FFFFFF;
  --foreground: #333333;
  --primary: #5B9BD5;
  --primary-hover: #4A8BC4;
  --primary-foreground: #FFFFFF;
  --secondary: #F5F9FC;
  --secondary-foreground: #333333;
  --muted: #F3F4F6;
  --muted-foreground: #666666;
  --accent: #FF9800;
  --accent-hover: #E68900;
  --accent-foreground: #FFFFFF;
  --border: #E5E7EB;
  --radius: 0.5rem;
}
```

| 用途 | CSS変数 | カラーコード | 説明 |
|------|---------|-------------|------|
| プライマリ（水色） | `var(--primary)` | `#5B9BD5` | ヘッダー背景、ボタン、リンクなど |
| プライマリホバー | `var(--primary-hover)` | `#4A8BC4` | ボタンホバー時など |
| テキスト（メイン） | `var(--foreground)` | `#333333` | 本文テキスト |
| テキスト（サブ） | `var(--muted-foreground)` | `#666666` | 補足テキスト、日付など |
| 背景（メイン） | `var(--background)` | `#FFFFFF` | ページ背景 |
| 背景（セカンダリ） | `var(--secondary)` | `#F5F9FC` | セクション背景、カード背景など |
| 背景（コードブロック） | `var(--muted)` | `#F3F4F6` | プロンプト、コード表示部分 |
| ボーダー | `var(--border)` | `#E5E7EB` | 区切り線、カード枠線 |
| アクセント | `var(--accent)` | `#FF9800` | CTAボタン、アフィリエイトボックス |

### フォント設定

```css
@theme inline {
  --font-sans: 'MS Gothic', 'Hiragino Kaku Gothic ProN', 'Meiryo', sans-serif;
  --font-mono: 'MS Gothic', 'Hiragino Kaku Gothic ProN', monospace;
}
```

| 要素 | スタイル |
|------|----------|
| タイトル（H1） | 太字（font-bold） |
| 見出し（H2/H3） | 太字（font-bold） |
| 本文 | 通常（font-normal） |

### 共通スタイルルール

- 角丸コンポーネント: ボタン、カード、プロンプトブロック等には `rounded-lg`（8px）を適用
- 余白: セクション間は `py-8` または `py-12`、要素間は `gap-4` または `gap-6`
- クライアントコンポーネント: インタラクティブなコンポーネントには `"use client"` ディレクティブを付与

---

## ページレイアウト構成

### 全体構成図

```
+------------------------------------------------------------------+
|                         ヘッダー                                   |
|  [AI ロゴ + サイト名]           [記事一覧] [問い合わせ] [プライバシー] |
|                              (モバイル: ハンバーガーメニュー)        |
+------------------------------------------------------------------+
|        |                                              |          |
|        |                  記事コンテンツ                |          |
|  広告枠 |                   （中央80%）                 |  広告枠   |
| (160px)|                                              | (160px)  |
|        |  +------------------------------------------+  |          |
| スクロール|  | タイトル                                |  | スクロール |
|  追従   |  | 目次                                    |  |  追従    |
|        |  | 本文...                                  |  |          |
|        |  +------------------------------------------+  |          |
|        |                                              |          |
+------------------------------------------------------------------+
|                         フッター                                   |
|  [カテゴリ別記事リンク（5カテゴリ×各5件）]                            |
|  [コピーライト]                                                    |
+------------------------------------------------------------------+
```

### レスポンシブブレークポイント

| デバイス | 幅 | 広告枠の表示 | ナビゲーション |
|----------|-----|-------------|---------------|
| PC | 1024px以上 (lg:) | 左右に縦長広告（160x600） | 横並び |
| タブレット | 768px〜1023px (md:) | 非表示 | 横並び |
| スマートフォン | 767px以下 | 記事の上下に横長広告（320x100） | ハンバーガーメニュー |

---

## ファイル構成

```
project-root/
├── app/
│   ├── globals.css           # グローバルスタイル（CSS変数定義）
│   ├── layout.tsx            # ルートレイアウト（メタデータ・フォント）
│   └── page.tsx              # ページコンポーネント
├── components/
│   ├── article/
│   │   ├── ArticleContent.tsx    # 記事本文
│   │   ├── ArticleHeader.tsx     # タイトル・日付・アイキャッチ
│   │   ├── PromptBlock.tsx       # プロンプト表示（コピーボタン付き）
│   │   ├── PromptInfoCard.tsx    # プロンプト説明カード【新規】
│   │   ├── ResponseExample.tsx   # 回答例表示
│   │   └── TableOfContents.tsx   # 目次
│   ├── layout/
│   │   ├── Header.tsx            # ヘッダー（モバイルメニュー対応）
│   │   ├── Footer.tsx            # フッター
│   │   ├── PageLayout.tsx        # 全体レイアウト
│   │   └── SideAd.tsx            # サイド広告
│   ├── common/
│   │   ├── Button.tsx            # 汎用ボタン
│   │   ├── Card.tsx              # 汎用カード
│   │   └── CopyButton.tsx        # コピーボタン（lucide-react対応）
│   ├── cta/
│   │   ├── AffiliateBox.tsx      # アフィリエイト訴求
│   │   └── RelatedArticles.tsx   # 関連記事
│   ├── ui/                       # shadcn/ui コンポーネント
│   └── theme-provider.tsx        # テーマプロバイダー
├── lib/
│   └── utils.ts                  # cn() ユーティリティ
├── hooks/
│   └── use-mobile.ts             # モバイル判定フック
├── public/
│   └── images/                   # 画像ファイル
├── components.json               # shadcn/ui 設定
├── package.json
├── tsconfig.json
└── next.config.mjs
```

---

## コンポーネント仕様

### 1. Header（ヘッダー）

**ファイル**: `components/layout/Header.tsx`

**機能**:
- ロゴ + サイト名の表示
- ナビゲーションリンク（記事一覧、問い合わせ、プライバシーポリシー）
- モバイル時はハンバーガーメニュー（Menu/X アイコン）
- ページと一緒にスクロール（固定しない）

**Props**:
```typescript
interface NavItem {
  label: string
  href: string
}

interface HeaderProps {
  logoSrc: string
  siteName: string
  navItems: NavItem[]
}
```

**実装例**:
```tsx
"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

interface NavItem {
  label: string
  href: string
}

interface HeaderProps {
  logoSrc: string
  siteName: string
  navItems: NavItem[]
}

export default function Header({ logoSrc, siteName, navItems }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-[#5B9BD5] text-[#FFFFFF]">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo + Site Name */}
        <a href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#FFFFFF] rounded-lg flex items-center justify-center">
            <span className="text-[#5B9BD5] font-bold text-lg">AI</span>
          </div>
          <span className="text-xl font-bold">{siteName}</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-6">
            {navItems.map((item, index) => (
              <li key={index}>
                <a href={item.href} className="hover:opacity-80 transition-opacity">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="メニューを開く"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden border-t border-[#FFFFFF]/30">
          <ul className="px-4 py-4 space-y-4">
            {navItems.map((item, index) => (
              <li key={index}>
                <a href={item.href} className="block hover:opacity-80 transition-opacity">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
```

---

### 2. Footer（フッター）

**ファイル**: `components/layout/Footer.tsx`

**機能**:
- カテゴリ別記事リンク（5カテゴリ×各5件）
- コピーライト表示

**カテゴリ一覧**:
1. ビジネス文書
2. 日常・カジュアル文書
3. 基礎・入門
4. キャリア
5. コンテンツ作成

**Props**:
```typescript
interface ArticleLink {
  title: string
  href: string
}

interface Category {
  name: string
  articles: ArticleLink[]
}

interface FooterProps {
  categories: Category[]
  copyright: string
}
```

**実装例**:
```tsx
interface ArticleLink {
  title: string
  href: string
}

interface Category {
  name: string
  articles: ArticleLink[]
}

interface FooterProps {
  categories: Category[]
  copyright: string
}

export default function Footer({ categories, copyright }: FooterProps) {
  return (
    <footer className="bg-[#5B9BD5] text-[#FFFFFF] mt-12">
      {/* Category Links */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {categories.map((category, index) => (
            <div key={index}>
              <h3 className="font-bold text-lg mb-4 border-b border-[#FFFFFF]/30 pb-2">
                {category.name}
              </h3>
              <ul className="space-y-2">
                {category.articles.slice(0, 5).map((article, articleIndex) => (
                  <li key={articleIndex}>
                    <a
                      href={article.href}
                      className="text-sm hover:opacity-80 transition-opacity line-clamp-2"
                    >
                      {article.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-[#FFFFFF]/30">
        <div className="max-w-7xl mx-auto px-4 py-4 text-center text-sm">
          {copyright}
        </div>
      </div>
    </footer>
  )
}
```

---

### 3. PageLayout（ページレイアウト）

**ファイル**: `components/layout/PageLayout.tsx`

**機能**:
- ヘッダー、フッター、サイド広告を含む全体レイアウト
- 記事コンテンツを中央80%に配置
- 左右に広告枠（スクロール追従）
- モバイル時は上下に広告

**Props**:
```typescript
interface PageLayoutProps {
  headerProps: HeaderProps
  footerProps: FooterProps
  children: React.ReactNode
  topAdSlot?: React.ReactNode
  bottomAdSlot?: React.ReactNode
}
```

**実装例**:
```tsx
import Header from "./Header"
import Footer from "./Footer"
import SideAd from "./SideAd"

export default function PageLayout({
  headerProps,
  footerProps,
  children,
  topAdSlot,
  bottomAdSlot,
}: PageLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header {...headerProps} />

      {/* Mobile Top Ad */}
      <div className="lg:hidden px-4 py-4 flex justify-center bg-[#F5F9FC]">
        {topAdSlot || (
          <div className="w-full max-w-[320px] h-[100px] bg-[#F3F4F6] rounded-lg flex items-center justify-center">
            <span className="text-[#666666] text-xs">広告枠 320x100</span>
          </div>
        )}
      </div>

      <div className="flex-1 flex justify-center">
        <div className="flex w-full max-w-7xl">
          {/* Left Side Ad (PC) */}
          <aside className="hidden lg:block w-[160px] flex-shrink-0">
            <SideAd position="left" />
          </aside>

          {/* Main Content */}
          <main className="flex-1 px-4 lg:px-8 py-8 bg-[#FFFFFF]">
            {children}
          </main>

          {/* Right Side Ad (PC) */}
          <aside className="hidden lg:block w-[160px] flex-shrink-0">
            <SideAd position="right" />
          </aside>
        </div>
      </div>

      {/* Mobile Bottom Ad */}
      <div className="lg:hidden px-4 py-4 flex justify-center bg-[#F5F9FC]">
        {bottomAdSlot || (
          <div className="w-full max-w-[320px] h-[100px] bg-[#F3F4F6] rounded-lg flex items-center justify-center">
            <span className="text-[#666666] text-xs">広告枠 320x100</span>
          </div>
        )}
      </div>

      <Footer {...footerProps} />
    </div>
  )
}
```

---

### 4. SideAd（サイド広告）

**ファイル**: `components/layout/SideAd.tsx`

**機能**:
- 縦長広告（160x600）の表示
- スクロール追従（sticky）

**実装例**:
```tsx
interface SideAdProps {
  position: "left" | "right"
  adSlot?: React.ReactNode
}

export default function SideAd({ position, adSlot }: SideAdProps) {
  return (
    <div className="sticky top-4 p-2">
      <div className="w-[160px] h-[600px] bg-[#F3F4F6] rounded-lg flex items-center justify-center">
        {adSlot || (
          <span className="text-[#666666] text-xs">広告枠 160x600</span>
        )}
      </div>
    </div>
  )
}
```

---

### 5. PromptInfoCard（プロンプト説明カード）【新規】

**ファイル**: `components/article/PromptInfoCard.tsx`

**機能**:
- プロンプトの説明を3種類のタイプで表示
- 色分けとlucide-reactアイコンで視覚的に区別

**タイプ定義**:

| タイプ | 用途 | 背景色 | ボーダー色 | アイコン |
|--------|------|--------|-----------|----------|
| response | どんな回答が返ってくるか | #EBF5FF | #5B9BD5 | MessageCircle |
| usecase | こんなときに使おう | #FFF8E6 | #FF9800 | Lightbulb |
| tips | ポイント解説 | #E8F5E9 | #4CAF50 | CheckCircle |

**Props**:
```typescript
interface PromptInfoCardProps {
  type: "response" | "usecase" | "tips"
  title: string
  children: React.ReactNode
}
```

**実装例**:
```tsx
"use client"

import { MessageCircle, Lightbulb, CheckCircle } from "lucide-react"

interface PromptInfoCardProps {
  type: "response" | "usecase" | "tips"
  title: string
  children: React.ReactNode
}

export default function PromptInfoCard({ type, title, children }: PromptInfoCardProps) {
  const config = {
    response: {
      icon: MessageCircle,
      bgColor: "bg-[#EBF5FF]",
      borderColor: "border-[#5B9BD5]",
      iconColor: "text-[#5B9BD5]",
      titleColor: "text-[#5B9BD5]",
    },
    usecase: {
      icon: Lightbulb,
      bgColor: "bg-[#FFF8E6]",
      borderColor: "border-[#FF9800]",
      iconColor: "text-[#FF9800]",
      titleColor: "text-[#FF9800]",
    },
    tips: {
      icon: CheckCircle,
      bgColor: "bg-[#E8F5E9]",
      borderColor: "border-[#4CAF50]",
      iconColor: "text-[#4CAF50]",
      titleColor: "text-[#4CAF50]",
    },
  }

  const { icon: Icon, bgColor, borderColor, iconColor, titleColor } = config[type]

  return (
    <div className={`${bgColor} border-l-4 ${borderColor} rounded-r-lg p-4 mb-4`}>
      <div className="flex items-center gap-2 mb-2">
        <Icon className={`w-5 h-5 ${iconColor}`} />
        <h4 className={`font-bold ${titleColor}`}>{title}</h4>
      </div>
      <div className="text-[#333333] leading-relaxed">{children}</div>
    </div>
  )
}
```

**使用例**:
```tsx
<PromptInfoCard type="response" title="どんな回答が返ってくるか">
  <p>会議メモを入力すると、整理された議事録フォーマットで出力されます。</p>
</PromptInfoCard>

<PromptInfoCard type="usecase" title="こんなときに使おう">
  <p>会議後にメモを議事録として共有したいときに最適です。</p>
</PromptInfoCard>

<PromptInfoCard type="tips" title="ポイント解説">
  <ul className="list-disc list-inside space-y-2">
    <li>会議情報を正確に入力すると完成度が上がります</li>
    <li>出力形式をカスタマイズ可能です</li>
  </ul>
</PromptInfoCard>
```

---

### 6. PromptBlock（プロンプトブロック）

**ファイル**: `components/article/PromptBlock.tsx`

**機能**:
- プロンプトテキストの表示
- CopyButtonコンポーネント付き
- グレー背景、角丸スタイル

**Props**:
```typescript
interface PromptBlockProps {
  prompt: string
  title?: string
}
```

**実装例**:
```tsx
import CopyButton from "../common/CopyButton"

interface PromptBlockProps {
  prompt: string
  title?: string
}

export default function PromptBlock({ prompt, title = "プロンプト" }: PromptBlockProps) {
  return (
    <div className="my-6">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-bold text-[#333333]">{title}</span>
      </div>
      <div className="relative bg-[#F3F4F6] rounded-lg p-4">
        <pre className="whitespace-pre-wrap text-sm text-[#333333] font-mono pr-20">
          {prompt}
        </pre>
        <div className="absolute top-3 right-3">
          <CopyButton text={prompt} />
        </div>
      </div>
    </div>
  )
}
```

---

### 7. CopyButton（コピーボタン）

**ファイル**: `components/common/CopyButton.tsx`

**機能**:
- クリックでテキストをクリップボードにコピー
- lucide-reactのCopy/Checkアイコンを使用
- コピー成功時のフィードバック表示

**Props**:
```typescript
interface CopyButtonProps {
  text: string
}
```

**実装例**:
```tsx
"use client"

import { useState } from "react"
import { Copy, Check } from "lucide-react"

interface CopyButtonProps {
  text: string
}

export default function CopyButton({ text }: CopyButtonProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("コピーに失敗しました", err)
    }
  }

  return (
    <button
      onClick={handleCopy}
      className="px-3 py-1.5 text-xs bg-[#5B9BD5] text-[#FFFFFF] rounded-lg hover:bg-[#4A8BC4] transition-colors flex items-center gap-1.5"
    >
      {copied ? (
        <>
          <Check size={14} />
          コピー完了!
        </>
      ) : (
        <>
          <Copy size={14} />
          コピー
        </>
      )}
    </button>
  )
}
```

---

### 8. ResponseExample（回答例ブロック）

**ファイル**: `components/article/ResponseExample.tsx`

**機能**:
- ChatGPTの回答例を表示
- 左ボーダー付きでプロンプトと区別

**実装例**:
```tsx
interface ResponseExampleProps {
  response: string
  title?: string
}

export default function ResponseExample({ response, title = "回答例" }: ResponseExampleProps) {
  return (
    <div className="my-6">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-bold text-[#333333]">{title}</span>
      </div>
      <div className="bg-[#F3F4F6] rounded-lg p-4 border-l-4 border-[#5B9BD5]">
        <pre className="whitespace-pre-wrap text-sm text-[#333333] font-mono">
          {response}
        </pre>
      </div>
    </div>
  )
}
```

---

### 9. TableOfContents（目次）

**ファイル**: `components/article/TableOfContents.tsx`

**機能**:
- 記事内の見出し（H2/H3）から生成
- クリックでスムーズスクロール
- 角丸のカードスタイル

**Props**:
```typescript
interface Heading {
  id: string
  text: string
  level: 2 | 3
}

interface TableOfContentsProps {
  headings: Heading[]
}
```

**実装例**:
```tsx
"use client"

interface Heading {
  id: string
  text: string
  level: 2 | 3
}

interface TableOfContentsProps {
  headings: Heading[]
}

export default function TableOfContents({ headings }: TableOfContentsProps) {
  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <nav className="bg-[#F5F9FC] rounded-lg p-6 my-8">
      <h2 className="font-bold text-lg text-[#333333] mb-4">目次</h2>
      <ul className="space-y-2">
        {headings.map((heading, index) => (
          <li key={index} className={heading.level === 3 ? "ml-4" : ""}>
            <button
              onClick={() => scrollToHeading(heading.id)}
              className="text-[#5B9BD5] hover:text-[#4A8BC4] text-left transition-colors"
            >
              {heading.text}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}
```

---

### 10. ArticleHeader（記事ヘッダー）

**ファイル**: `components/article/ArticleHeader.tsx`

**機能**:
- 記事タイトル（H1）
- アイキャッチ画像
- 作成日・更新日

**実装例**:
```tsx
interface ArticleHeaderProps {
  title: string
  eyecatchSrc?: string
  createdAt: string
  updatedAt?: string
}

export default function ArticleHeader({
  title,
  eyecatchSrc,
  createdAt,
  updatedAt,
}: ArticleHeaderProps) {
  return (
    <header className="mb-8">
      <h1 className="text-2xl md:text-3xl font-bold text-[#333333] mb-4">
        {title}
      </h1>

      <div className="flex items-center gap-4 text-sm text-[#666666] mb-6">
        <time>作成日: {createdAt}</time>
        {updatedAt && <time>更新日: {updatedAt}</time>}
      </div>

      {eyecatchSrc && (
        <div className="rounded-lg overflow-hidden">
          <img src={eyecatchSrc} alt={title} className="w-full h-auto" />
        </div>
      )}
    </header>
  )
}
```

---

### 11. AffiliateBox（アフィリエイト訴求ボックス）

**ファイル**: `components/cta/AffiliateBox.tsx`

**機能**:
- 目立つデザイン（アクセントカラー使用）
- lucide-reactのCheckアイコンで特徴リスト表示
- CTAボタン付き

**Props**:
```typescript
interface AffiliateBoxProps {
  title: string
  description: string
  buttonText: string
  buttonHref: string
  features?: string[]
}
```

**実装例**:
```tsx
import { Check } from "lucide-react"

interface AffiliateBoxProps {
  title: string
  description: string
  buttonText: string
  buttonHref: string
  features?: string[]
}

export default function AffiliateBox({
  title,
  description,
  buttonText,
  buttonHref,
  features = [],
}: AffiliateBoxProps) {
  return (
    <div className="my-8 p-6 bg-gradient-to-r from-[#FF9800]/10 to-[#FF9800]/5 border-2 border-[#FF9800] rounded-lg">
      <h3 className="text-xl font-bold text-[#333333] mb-3">{title}</h3>
      <p className="text-[#666666] mb-4">{description}</p>

      {features.length > 0 && (
        <ul className="mb-4 space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2 text-sm text-[#333333]">
              <Check className="w-4 h-4 text-[#FF9800]" />
              {feature}
            </li>
          ))}
        </ul>
      )}

      <a
        href={buttonHref}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-6 py-3 bg-[#FF9800] text-[#FFFFFF] rounded-lg font-bold hover:bg-[#E68900] transition-colors"
      >
        {buttonText}
      </a>
    </div>
  )
}
```

---

### 12. RelatedArticles（関連記事セクション）

**ファイル**: `components/cta/RelatedArticles.tsx`

**機能**:
- リスト形式で関連記事を表示
- lucide-reactのArrowRightアイコン付き

**Props**:
```typescript
interface RelatedArticle {
  title: string
  description: string
  href: string
}

interface RelatedArticlesProps {
  articles: RelatedArticle[]
}
```

**実装例**:
```tsx
import { ArrowRight } from "lucide-react"

interface RelatedArticle {
  title: string
  description: string
  href: string
}

interface RelatedArticlesProps {
  articles: RelatedArticle[]
}

export default function RelatedArticles({ articles }: RelatedArticlesProps) {
  return (
    <section className="my-12">
      <h2 className="text-2xl font-bold text-[#333333] mb-6 pb-2 border-b-2 border-[#5B9BD5]">
        関連記事
      </h2>
      <div className="space-y-4">
        {articles.map((article, index) => (
          <a
            key={index}
            href={article.href}
            className="block p-4 bg-[#F5F9FC] rounded-lg hover:bg-[#EBF5FF] transition-colors group"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-bold text-[#333333] group-hover:text-[#5B9BD5] transition-colors">
                  {article.title}
                </h3>
                <p className="text-sm text-[#666666] mt-1">{article.description}</p>
              </div>
              <ArrowRight className="w-5 h-5 text-[#5B9BD5] flex-shrink-0" />
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
```

---

### 13. Card（汎用カード）

**ファイル**: `components/common/Card.tsx`

**機能**:
- 角丸、影付きのカードコンテナ
- 画像、タイトル、説明を含むレイアウト
- ホバー時のボーダー変化

**Props**:
```typescript
interface CardProps {
  imageSrc?: string
  imageAlt?: string
  title: string
  description?: string
  href?: string
  highlighted?: boolean
}
```

**実装例**:
```tsx
interface CardProps {
  imageSrc?: string
  imageAlt?: string
  title: string
  description?: string
  href?: string
  highlighted?: boolean
}

export default function Card({
  imageSrc,
  imageAlt,
  title,
  description,
  href,
  highlighted = false,
}: CardProps) {
  const CardWrapper = href ? "a" : "div"

  return (
    <CardWrapper
      href={href}
      className={`
        block rounded-lg overflow-hidden bg-[#FFFFFF]
        border-2 transition-all
        ${highlighted
          ? "border-[#FF9800] shadow-lg shadow-[#FF9800]/20"
          : "border-[#E5E7EB] hover:border-[#5B9BD5] hover:shadow-md"
        }
      `}
    >
      {imageSrc && (
        <div className="aspect-video overflow-hidden">
          <img src={imageSrc} alt={imageAlt || title} className="w-full h-full object-cover" />
        </div>
      )}
      <div className="p-4">
        <h3 className="font-bold text-[#333333] mb-2 line-clamp-2">{title}</h3>
        {description && (
          <p className="text-sm text-[#666666] line-clamp-2">{description}</p>
        )}
      </div>
    </CardWrapper>
  )
}
```

---

## ユーティリティ

### cn() 関数

**ファイル**: `lib/utils.ts`

```typescript
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

**用途**: 条件付きクラス名の結合、Tailwindクラスの重複解消

---

## shadcn/ui 設定

**ファイル**: `components.json`

```json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "new-york",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "config": "",
    "css": "app/globals.css",
    "baseColor": "neutral",
    "cssVariables": true
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui",
    "lib": "@/lib",
    "hooks": "@/hooks"
  },
  "iconLibrary": "lucide"
}
```

---

## グローバルCSS

**ファイル**: `app/globals.css`

```css
@import 'tailwindcss';
@import 'tw-animate-css';

@custom-variant dark (&:is(.dark *));

:root {
  --background: #FFFFFF;
  --foreground: #333333;
  --primary: #5B9BD5;
  --primary-hover: #4A8BC4;
  --primary-foreground: #FFFFFF;
  --secondary: #F5F9FC;
  --muted: #F3F4F6;
  --muted-foreground: #666666;
  --accent: #FF9800;
  --accent-hover: #E68900;
  --accent-foreground: #FFFFFF;
  --border: #E5E7EB;
  --radius: 0.5rem;
}

@theme inline {
  --font-sans: 'MS Gothic', 'Hiragino Kaku Gothic ProN', 'Meiryo', sans-serif;
  --font-mono: 'MS Gothic', 'Hiragino Kaku Gothic ProN', monospace;
  --color-primary: var(--primary);
  --color-primary-hover: var(--primary-hover);
  --color-accent: var(--accent);
  --color-accent-hover: var(--accent-hover);
}

@layer base {
  * {
    @apply border-border;
  }
  body {
    @apply bg-background text-foreground;
  }
}

/* Custom scrollbar for code blocks */
pre::-webkit-scrollbar {
  height: 6px;
}

pre::-webkit-scrollbar-track {
  background: #E5E7EB;
  border-radius: 3px;
}

pre::-webkit-scrollbar-thumb {
  background: #5B9BD5;
  border-radius: 3px;
}
```

---

## 使用方法

1. 本フォーマットをAIモデル（Claude、ChatGPT等）に読み込ませる
2. 以下のプロンプトでコンポーネント生成を依頼する

```
上記のフォーマット指示書に従って、以下のコンポーネントを作成してください。

コンポーネント名: {コンポーネント名}
追加要件: {必要に応じて追加要件を記載}
```

または、ページ全体を生成する場合：

```
上記のフォーマット指示書に従って、以下の記事ページを作成してください。

記事タイトル: {記事タイトル}
記事内容: {記事フォーマットに従った記事内容}

※全コンポーネントを組み合わせた完全なページとして出力してください。
```

---

## チェックリスト

コンポーネント完成時に以下を確認してください：

### デザイン
- [ ] カラーパレットに従った色使いになっている
- [ ] 記事内の色数が背景色を除き4色以内である
- [ ] MSゴシックが優先フォントになっている
- [ ] ボタン、カード等の四角い要素が角丸になっている
- [ ] タイトル・見出しが太字、本文が通常になっている

### レイアウト
- [ ] 記事コンテンツが中央80%に配置されている
- [ ] 左右の広告枠がスクロール追従する
- [ ] スマホ表示時に広告が上下に移動する
- [ ] ヘッダーがスクロールで消える（固定でない）
- [ ] モバイル時はハンバーガーメニューが表示される

### 機能
- [ ] 目次がH2/H3から生成される
- [ ] 目次クリックでスムーズスクロールする
- [ ] プロンプトブロックにコピーボタンがある
- [ ] コピーボタンが正常に動作する
- [ ] CopyButtonにlucide-reactアイコンを使用している

### TypeScript/Next.js
- [ ] 全コンポーネントが.tsx拡張子になっている
- [ ] インターフェースが適切に定義されている
- [ ] "use client"ディレクティブが必要なコンポーネントに付与されている
- [ ] Metadataがapp/layout.tsxで設定されている

### 新規コンポーネント
- [ ] PromptInfoCardを3タイプ（response/usecase/tips）で使用している
- [ ] 各プロンプトにPromptInfoCard 3種類が含まれている

---

## 更新履歴

| 日付 | 内容 |
|------|------|
| 2026-02-05 | v0実装に基づき全面改訂（Next.js 16 + TypeScript + shadcn/ui対応） |
| {作成日} | 初版作成 |
