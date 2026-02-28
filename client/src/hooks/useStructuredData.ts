import { useEffect } from "react";

export interface ArticleSchemaProps {
  title: string;
  description: string;
  author?: string;
  datePublished?: string;
  dateModified?: string;
  image?: string;
  url?: string;
}

/**
 * useStructuredData - Article スキーマの構造化データを設定
 * Google検索結果での表示を改善するため、JSON-LD形式のArticleスキーマをheadに追加
 */
export function useStructuredData(props: ArticleSchemaProps) {
  const {
    title,
    description,
    author = "AIプロンプト活用ガイド",
    datePublished = new Date().toISOString(),
    dateModified = new Date().toISOString(),
    image = `${window.location.origin}/og-image.png`,
    url = window.location.href,
  } = props;

  useEffect(() => {
    // 既存のスクリプトを削除
    const existingScript = document.querySelector(
      'script[type="application/ld+json"]'
    );
    if (existingScript) {
      existingScript.remove();
    }

    // Article スキーマを作成
    const schema = {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: title,
      description: description,
      author: {
        "@type": "Organization",
        name: author,
      },
      datePublished: datePublished,
      dateModified: dateModified,
      image: {
        "@type": "ImageObject",
        url: image,
        width: 1200,
        height: 630,
      },
      url: url,
      publisher: {
        "@type": "Organization",
        name: "AIプロンプト活用ガイド",
        logo: {
          "@type": "ImageObject",
          url: `${window.location.origin}/logo.png`,
          width: 250,
          height: 60,
        },
      },
    };

    // JSON-LD スクリプトを作成してheadに追加
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);

    // クリーンアップ: コンポーネントがアンマウントされるときにスクリプトを削除
    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, [title, description, author, datePublished, dateModified, image, url]);
}
