import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { renderHook } from "@testing-library/react";
import { useOGP } from "./useOGP";

describe("useOGP", () => {
  beforeEach(() => {
    // テスト前にOGPタグをクリア
    const ogTags = document.querySelectorAll('meta[property^="og:"]');
    ogTags.forEach((tag) => tag.remove());
  });

  afterEach(() => {
    // テスト後にOGPタグをクリア
    const ogTags = document.querySelectorAll('meta[property^="og:"]');
    ogTags.forEach((tag) => tag.remove());
  });

  it("og:title、og:description、og:typeメタタグを設定する", () => {
    renderHook(() =>
      useOGP({
        title: "テストタイトル",
        description: "テスト説明",
      })
    );

    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDescription = document.querySelector('meta[property="og:description"]');
    const ogType = document.querySelector('meta[property="og:type"]');

    expect(ogTitle?.getAttribute("content")).toBe("テストタイトル");
    expect(ogDescription?.getAttribute("content")).toBe("テスト説明");
    expect(ogType?.getAttribute("content")).toBe("website");
  });

  it("og:image、og:urlが指定された場合、それらのメタタグも設定する", () => {
    renderHook(() =>
      useOGP({
        title: "テストタイトル",
        description: "テスト説明",
        image: "https://example.com/image.png",
        url: "https://example.com/page",
      })
    );

    const ogImage = document.querySelector('meta[property="og:image"]');
    const ogUrl = document.querySelector('meta[property="og:url"]');

    expect(ogImage?.getAttribute("content")).toBe("https://example.com/image.png");
    expect(ogUrl?.getAttribute("content")).toBe("https://example.com/page");
  });

  it("og:typeをカスタム値に設定できる", () => {
    renderHook(() =>
      useOGP({
        title: "テストタイトル",
        description: "テスト説明",
        type: "article",
      })
    );

    const ogType = document.querySelector('meta[property="og:type"]');
    expect(ogType?.getAttribute("content")).toBe("article");
  });

  it("フックのアンマウント時にOGPタグをデフォルト値にリセットする", () => {
    const { unmount } = renderHook(() =>
      useOGP({
        title: "テストタイトル",
        description: "テスト説明",
      })
    );

    const ogTitle = document.querySelector('meta[property="og:title"]');
    expect(ogTitle?.getAttribute("content")).toBe("テストタイトル");

    unmount();

    expect(ogTitle?.getAttribute("content")).toBe("AIプロンプト活用ガイド");
  });

  it("複数回呼び出された場合、最新の値で上書きされる", () => {
    const { rerender } = renderHook(
      ({ title, description }) =>
        useOGP({
          title,
          description,
        }),
      {
        initialProps: {
          title: "初回タイトル",
          description: "初回説明",
        },
      }
    );

    const ogTitle = document.querySelector('meta[property="og:title"]');
    expect(ogTitle?.getAttribute("content")).toBe("初回タイトル");

    rerender({
      title: "更新後タイトル",
      description: "更新後説明",
    });

    expect(ogTitle?.getAttribute("content")).toBe("更新後タイトル");
  });
});
