import { useEffect } from "react";

interface SEOParams {
  title: string;
  description: string;
  keywords: string;
}

/**
 * ページごとのSEOメタ情報を設定するカスタムフック
 * - document.title を設定
 * - meta[name="description"] を設定
 * - meta[name="keywords"] を設定
 *
 * アンマウント時にデフォルト値へ戻す
 */
export function useSEO({ title, description, keywords }: SEOParams) {
  useEffect(() => {
    const prevTitle = document.title;

    // タイトル設定
    document.title = title;

    // description メタタグ
    let metaDesc = document.querySelector<HTMLMetaElement>(
      'meta[name="description"]'
    );
    const prevDesc = metaDesc?.getAttribute("content") ?? "";
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.name = "description";
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = description;

    // keywords メタタグ
    let metaKeywords = document.querySelector<HTMLMetaElement>(
      'meta[name="keywords"]'
    );
    const prevKeywords = metaKeywords?.getAttribute("content") ?? "";
    if (!metaKeywords) {
      metaKeywords = document.createElement("meta");
      metaKeywords.name = "keywords";
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.content = keywords;

    return () => {
      document.title = prevTitle;
      const descTag = document.querySelector<HTMLMetaElement>(
        'meta[name="description"]'
      );
      if (descTag) descTag.content = prevDesc;
      const kwTag = document.querySelector<HTMLMetaElement>(
        'meta[name="keywords"]'
      );
      if (kwTag) kwTag.content = prevKeywords;
    };
  }, [title, description, keywords]);
}
