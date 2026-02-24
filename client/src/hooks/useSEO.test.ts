import { describe, expect, it, afterEach } from "vitest";
import { renderHook } from "@testing-library/react";
import { useSEO } from "./useSEO";

describe("useSEO", () => {
  const originalTitle = document.title;

  afterEach(() => {
    document.title = originalTitle;
    document
      .querySelectorAll('meta[name="description"], meta[name="keywords"]')
      .forEach((el) => el.remove());
  });

  it("document.title を設定する", () => {
    renderHook(() =>
      useSEO({
        title: "テスト用タイトル（30文字以上の長さのタイトル）",
        description: "テスト用ディスクリプション。50文字以上の説明文をここに記載します。",
        keywords: "テスト,SEO,キーワード",
      })
    );

    expect(document.title).toBe(
      "テスト用タイトル（30文字以上の長さのタイトル）"
    );
  });

  it("meta description を設定する", () => {
    renderHook(() =>
      useSEO({
        title: "タイトル",
        description: "テスト用ディスクリプション。50文字以上の説明文をここに記載します。",
        keywords: "テスト,SEO",
      })
    );

    const meta = document.querySelector<HTMLMetaElement>(
      'meta[name="description"]'
    );
    expect(meta).not.toBeNull();
    expect(meta!.content).toBe(
      "テスト用ディスクリプション。50文字以上の説明文をここに記載します。"
    );
  });

  it("meta keywords を設定する", () => {
    renderHook(() =>
      useSEO({
        title: "タイトル",
        description: "説明文",
        keywords: "ChatGPT,質問テンプレート,プロンプト,AI",
      })
    );

    const meta = document.querySelector<HTMLMetaElement>(
      'meta[name="keywords"]'
    );
    expect(meta).not.toBeNull();
    expect(meta!.content).toBe("ChatGPT,質問テンプレート,プロンプト,AI");
  });

  it("アンマウント時にタイトルを元に戻す", () => {
    document.title = "元のタイトル";

    const { unmount } = renderHook(() =>
      useSEO({
        title: "新しいタイトル",
        description: "説明文",
        keywords: "キーワード",
      })
    );

    expect(document.title).toBe("新しいタイトル");

    unmount();

    expect(document.title).toBe("元のタイトル");
  });
});
