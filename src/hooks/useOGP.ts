import { useEffect } from "react";

interface OGPConfig {
  title: string;
  description: string;
  image?: string;
  url?: string;
  type?: "website" | "article" | "profile";
}

/**
 * SNS共有時のOGPタグを設定するカスタムフック
 * og:title、og:description、og:image、og:urlをメタタグとして追加
 *
 * @param config - OGP設定オブジェクト
 * @example
 * useOGP({
 *   title: "AIプロンプト活用ガイド",
 *   description: "ChatGPTなどのAIツールを効果的に活用するためのプロンプト集",
 *   image: "https://example.com/og-image.png",
 *   url: "https://promptlist.jp",
 *   type: "website"
 * });
 */
export function useOGP(config: OGPConfig): void {
  useEffect(() => {
    // og:title
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement("meta");
      ogTitle.setAttribute("property", "og:title");
      document.head.appendChild(ogTitle);
    }
    ogTitle.setAttribute("content", config.title);

    // og:description
    let ogDescription = document.querySelector('meta[property="og:description"]');
    if (!ogDescription) {
      ogDescription = document.createElement("meta");
      ogDescription.setAttribute("property", "og:description");
      document.head.appendChild(ogDescription);
    }
    ogDescription.setAttribute("content", config.description);

    // og:image（オプション）
    if (config.image) {
      let ogImage = document.querySelector('meta[property="og:image"]');
      if (!ogImage) {
        ogImage = document.createElement("meta");
        ogImage.setAttribute("property", "og:image");
        document.head.appendChild(ogImage);
      }
      ogImage.setAttribute("content", config.image);
    }

    // og:url（オプション）
    if (config.url) {
      let ogUrl = document.querySelector('meta[property="og:url"]');
      if (!ogUrl) {
        ogUrl = document.createElement("meta");
        ogUrl.setAttribute("property", "og:url");
        document.head.appendChild(ogUrl);
      }
      ogUrl.setAttribute("content", config.url);
    }

    // og:type（オプション、デフォルト: website）
    const ogType = config.type || "website";
    let ogTypeTag = document.querySelector('meta[property="og:type"]');
    if (!ogTypeTag) {
      ogTypeTag = document.createElement("meta");
      ogTypeTag.setAttribute("property", "og:type");
      document.head.appendChild(ogTypeTag);
    }
    ogTypeTag.setAttribute("content", ogType);

    // クリーンアップ：アンマウント時にOGPタグをデフォルト値にリセット
    return () => {
      const defaultTitle = "AIプロンプト活用ガイド";
      const defaultDescription = "ChatGPTなどのAIツールを効果的に活用するためのプロンプト集・スキルガイド";

      const ogTitleTag = document.querySelector('meta[property="og:title"]');
      if (ogTitleTag) {
        ogTitleTag.setAttribute("content", defaultTitle);
      }

      const ogDescTag = document.querySelector('meta[property="og:description"]');
      if (ogDescTag) {
        ogDescTag.setAttribute("content", defaultDescription);
      }
    };
  }, [config.title, config.description, config.image, config.url, config.type]);
}
