import { useEffect } from "react";

export interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
}

/**
 * useSEO - ページのSEOメタタグを設定
 * document.title、meta description、meta keywordsを動的に設定
 */
export function useSEO(props: SEOProps) {
  const { title, description, keywords } = props;

  useEffect(() => {
    // document.titleを設定
    document.title = title;

    // meta descriptionを設定
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute("content", description);

    // meta keywordsを設定
    if (keywords) {
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (!metaKeywords) {
        metaKeywords = document.createElement("meta");
        metaKeywords.setAttribute("name", "keywords");
        document.head.appendChild(metaKeywords);
      }
      metaKeywords.setAttribute("content", keywords);
    }

    // クリーンアップ: コンポーネントがアンマウントされるときにデフォルト値に復元
    return () => {
      document.title = "AIプロンプト活用ガイド"; // デフォルトタイトルに変更
    };
  }, [title, description, keywords]);
}
