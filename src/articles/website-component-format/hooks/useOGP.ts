import { useEffect } from "react";

export interface OGPProps {
  title: string;
  description: string;
  type?: "website" | "article";
  image?: string;
  url?: string;
}

/**
 * useOGP - Open Graph Protocolタグを設定
 * SNS共有時のプレビュー表示を最適化
 */
export function useOGP(props: OGPProps) {
  const {
    title,
    description,
    type = "website",
    image = `${window.location.origin}/og-image.png`,
    url = window.location.href,
  } = props;

  useEffect(() => {
    // og:titleを設定
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement("meta");
      ogTitle.setAttribute("property", "og:title");
      document.head.appendChild(ogTitle);
    }
    ogTitle.setAttribute("content", title);

    // og:descriptionを設定
    let ogDescription = document.querySelector('meta[property="og:description"]');
    if (!ogDescription) {
      ogDescription = document.createElement("meta");
      ogDescription.setAttribute("property", "og:description");
      document.head.appendChild(ogDescription);
    }
    ogDescription.setAttribute("content", description);

    // og:typeを設定
    let ogType = document.querySelector('meta[property="og:type"]');
    if (!ogType) {
      ogType = document.createElement("meta");
      ogType.setAttribute("property", "og:type");
      document.head.appendChild(ogType);
    }
    ogType.setAttribute("content", type);

    // og:imageを設定
    let ogImage = document.querySelector('meta[property="og:image"]');
    if (!ogImage) {
      ogImage = document.createElement("meta");
      ogImage.setAttribute("property", "og:image");
      document.head.appendChild(ogImage);
    }
    ogImage.setAttribute("content", image);

    // og:urlを設定
    let ogUrl = document.querySelector('meta[property="og:url"]');
    if (!ogUrl) {
      ogUrl = document.createElement("meta");
      ogUrl.setAttribute("property", "og:url");
      document.head.appendChild(ogUrl);
    }
    ogUrl.setAttribute("content", url);

    // クリーンアップ: コンポーネントがアンマウントされるときにOGPタグを削除
    return () => {
      // OGPタグは削除せず、次のページのタグで上書きされる
    };
  }, [title, description, type, image, url]);
}
