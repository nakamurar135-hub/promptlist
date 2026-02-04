# Webサイトコンポーネント フォーマット指示書

このドキュメントは、ChatGPT/AIプロンプト活用ブログサイトのUIコンポーネントを統一的に作成するためのフォーマット指示書です。
AIモデルに本ドキュメントを参照させることで、統一されたReactコンポーネントを生成できます。

---

## 基本設計

### 技術スタック
| 項目 | 設定値 |
|------|--------|
| フレームワーク | React |
| CSS管理 | Tailwind CSS |
| ファイル構成 | コンポーネント単位で分割 |
| 対応デバイス | PC / スマートフォン（レスポンシブ） |

### カラーパレット

背景色を除き、記事内で使用する色は4色以内に制限してください。

| 用途 | カラーコード | 説明 |
|------|-------------|------|
| プライマリ（水色） | `#5B9BD5` | 落ち着いた水色。ヘッダー背景、ボタン、リンクなど |
| プライマリホバー | `#4A8BC4` | ボタンホバー時など |
| テキスト（メイン） | `#333333` | 本文テキスト |
| テキスト（サブ） | `#666666` | 補足テキスト、日付など |
| 背景（メイン） | `#FFFFFF` | ページ背景 |
| 背景（セカンダリ） | `#F5F9FC` | セクション背景、カード背景など |
| 背景（コードブロック） | `#F3F4F6` | プロンプト、コード表示部分（グレー） |
| ボーダー | `#E5E7EB` | 区切り線、カード枠線 |
| アクセント | `#FF9800` | 目立たせたい要素（CTAボタン、アフィリエイトボックスなど） |

### フォント設定

```css
font-family: 'MS Gothic', 'ＭＳ ゴシック', 'Hiragino Kaku Gothic ProN', 'ヒラギノ角ゴ ProN W3', Meiryo, メイリオ, sans-serif;
```

| 要素 | スタイル |
|------|----------|
| タイトル（H1） | 太字（font-bold） |
| 見出し（H2/H3） | 太字（font-bold） |
| 本文 | 通常（font-normal） |

### 共通スタイルルール

- 角丸コンポーネント: ボタン、カード、プロンプトブロック、入力フォームなどの四角い要素には `rounded-lg`（8px）を適用
- 余白: セクション間は `py-8` または `py-12`、要素間は `gap-4` または `gap-6`

---

## ページレイアウト構成

### 全体構成図

```
+------------------------------------------------------------------+
|                         ヘッダー                                   |
|  [ロゴ + サイト名]              [記事一覧] [問い合わせ] [プライバシーポリシー] |
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

| デバイス | 幅 | 広告枠の表示 |
|----------|-----|-------------|
| PC | 1024px以上 | 左右に縦長広告（160x600） |
| タブレット | 768px〜1023px | 非表示または縮小 |
| スマートフォン | 767px以下 | 記事の上下に横長広告 |

---

## ファイル構成

```
src/
├── components/
│   ├── layout/
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── PageLayout.jsx
│   │   └── SideAd.jsx
│   ├── article/
│   │   ├── ArticleHeader.jsx
│   │   ├── TableOfContents.jsx
│   │   ├── PromptBlock.jsx
│   │   ├── ResponseExample.jsx
│   │   └── ArticleContent.jsx
│   ├── common/
│   │   ├── Button.jsx
│   │   ├── Card.jsx
│   │   └── CopyButton.jsx
│   ├── cta/
│   │   ├── AffiliateBox.jsx
│   │   └── RelatedArticles.jsx
│   └── index.js
├── styles/
│   └── globals.css
├── hooks/
│   └── useScrollToHeading.js
└── utils/
    └── generateToc.js
```

---

## コンポーネント仕様

### 1. Header（ヘッダー）

**ファイル**: `src/components/layout/Header.jsx`

**機能**:
- ロゴ画像 + サイト名の表示
- ナビゲーションリンク（記事一覧、問い合わせ、プライバシーポリシー）
- ページと一緒にスクロール（固定しない）
- ナビゲーション項目は将来的に追加可能な設計

**Props**:
```typescript
interface HeaderProps {
  logoSrc: string;           // ロゴ画像のパス
  siteName: string;          // サイト名
  navItems: NavItem[];       // ナビゲーション項目の配列
}

interface NavItem {
  label: string;             // 表示テキスト
  href: string;              // リンク先URL
}
```

**実装例**:
```jsx
// src/components/layout/Header.jsx
import React from 'react';

const Header = ({ logoSrc, siteName, navItems }) => {
  return (
    <header className="bg-[#5B9BD5] text-white">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* ロゴ + サイト名 */}
        <a href="/" className="flex items-center gap-3">
          <img 
            src={logoSrc} 
            alt={`${siteName} ロゴ`} 
            className="h-10 w-auto"
          />
          <span className="text-xl font-bold">{siteName}</span>
        </a>
        
        {/* ナビゲーション */}
        <nav>
          <ul className="flex items-center gap-6">
            {navItems.map((item, index) => (
              <li key={index}>
                <a 
                  href={item.href}
                  className="hover:opacity-80 transition-opacity"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
```

**使用例**:
```jsx
<Header 
  logoSrc="/images/logo.png"
  siteName="AIプロンプト活用ガイド"
  navItems={[
    { label: '記事一覧', href: '/articles' },
    { label: '問い合わせ', href: '/contact' },
    { label: 'プライバシーポリシー', href: '/privacy' }
  ]}
/>
```

---

### 2. Footer（フッター）

**ファイル**: `src/components/layout/Footer.jsx`

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
interface FooterProps {
  categories: Category[];
  copyright: string;
}

interface Category {
  name: string;              // カテゴリ名
  articles: ArticleLink[];   // 記事リンク（最大5件、閲覧上位順）
}

interface ArticleLink {
  title: string;             // 記事タイトル
  href: string;              // リンク先URL
}
```

**実装例**:
```jsx
// src/components/layout/Footer.jsx
import React from 'react';

const Footer = ({ categories, copyright }) => {
  return (
    <footer className="bg-[#5B9BD5] text-white mt-12">
      {/* カテゴリ別記事リンク */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {categories.map((category, index) => (
            <div key={index}>
              <h3 className="font-bold text-lg mb-4 border-b border-white/30 pb-2">
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
      
      {/* コピーライト */}
      <div className="border-t border-white/30">
        <div className="max-w-7xl mx-auto px-4 py-4 text-center text-sm">
          {copyright}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
```

---

### 3. PageLayout（ページレイアウト）

**ファイル**: `src/components/layout/PageLayout.jsx`

**機能**:
- ヘッダー、フッター、サイド広告を含む全体レイアウト
- 記事コンテンツを中央80%に配置
- 左右に広告枠（スクロール追従）

**実装例**:
```jsx
// src/components/layout/PageLayout.jsx
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import SideAd from './SideAd';

const PageLayout = ({ 
  headerProps, 
  footerProps, 
  children,
  topAdSlot,      // スマホ用上部広告
  bottomAdSlot    // スマホ用下部広告
}) => {
  return (
    <div className="min-h-screen flex flex-col font-['MS_Gothic','ＭＳ_ゴシック','Hiragino_Kaku_Gothic_ProN',sans-serif]">
      <Header {...headerProps} />
      
      {/* スマホ用上部広告 */}
      <div className="lg:hidden px-4 py-4 flex justify-center bg-[#F5F9FC]">
        {topAdSlot}
      </div>
      
      <div className="flex-1 flex justify-center">
        <div className="flex w-full max-w-7xl">
          {/* 左サイド広告（PC） */}
          <aside className="hidden lg:block w-[160px] flex-shrink-0">
            <SideAd position="left" />
          </aside>
          
          {/* メインコンテンツ（中央80%） */}
          <main className="flex-1 px-4 lg:px-8 py-8 bg-white">
            {children}
          </main>
          
          {/* 右サイド広告（PC） */}
          <aside className="hidden lg:block w-[160px] flex-shrink-0">
            <SideAd position="right" />
          </aside>
        </div>
      </div>
      
      {/* スマホ用下部広告 */}
      <div className="lg:hidden px-4 py-4 flex justify-center bg-[#F5F9FC]">
        {bottomAdSlot}
      </div>
      
      <Footer {...footerProps} />
    </div>
  );
};

export default PageLayout;
```

---

### 4. SideAd（サイド広告）

**ファイル**: `src/components/layout/SideAd.jsx`

**機能**:
- 縦長広告（160x600）の表示
- スクロール追従（sticky）

**実装例**:
```jsx
// src/components/layout/SideAd.jsx
import React from 'react';

const SideAd = ({ position, adSlot }) => {
  return (
    <div className="sticky top-4 p-2">
      <div className="w-[160px] h-[600px] bg-[#F3F4F6] rounded-lg flex items-center justify-center">
        {adSlot || (
          <span className="text-[#666666] text-xs">広告枠 160x600</span>
        )}
      </div>
    </div>
  );
};

export default SideAd;
```

---

### 5. TableOfContents（目次）

**ファイル**: `src/components/article/TableOfContents.jsx`

**機能**:
- 記事内の見出し（H2/H3）から自動生成
- クリックでスムーズスクロール
- 角丸のカードスタイル

**Props**:
```typescript
interface TableOfContentsProps {
  headings: Heading[];
}

interface Heading {
  id: string;                // 見出しのID
  text: string;              // 見出しテキスト
  level: 2 | 3;              // 見出しレベル
}
```

**実装例**:
```jsx
// src/components/article/TableOfContents.jsx
import React from 'react';

const TableOfContents = ({ headings }) => {
  const scrollToHeading = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="bg-[#F5F9FC] rounded-lg p-6 my-8">
      <h2 className="font-bold text-lg text-[#333333] mb-4">目次</h2>
      <ul className="space-y-2">
        {headings.map((heading, index) => (
          <li 
            key={index}
            className={heading.level === 3 ? 'ml-4' : ''}
          >
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
  );
};

export default TableOfContents;
```

**目次自動生成ユーティリティ**:
```jsx
// src/utils/generateToc.js
export const generateToc = (contentRef) => {
  if (!contentRef.current) return [];
  
  const headings = contentRef.current.querySelectorAll('h2, h3');
  return Array.from(headings).map((heading, index) => {
    const id = `heading-${index}`;
    heading.id = id;
    return {
      id,
      text: heading.textContent,
      level: parseInt(heading.tagName.charAt(1))
    };
  });
};
```

---

### 6. PromptBlock（プロンプトブロック）

**ファイル**: `src/components/article/PromptBlock.jsx`

**機能**:
- プロンプトテキストの表示
- コピーボタン付き
- グレー背景、角丸スタイル

**Props**:
```typescript
interface PromptBlockProps {
  prompt: string;            // プロンプトテキスト
  title?: string;            // ブロックのタイトル（任意）
}
```

**実装例**:
```jsx
// src/components/article/PromptBlock.jsx
import React from 'react';
import CopyButton from '../common/CopyButton';

const PromptBlock = ({ prompt, title = 'プロンプト' }) => {
  return (
    <div className="my-6">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-bold text-[#333333]">{title}</span>
      </div>
      <div className="relative bg-[#F3F4F6] rounded-lg p-4">
        <pre className="whitespace-pre-wrap text-sm text-[#333333] font-['MS_Gothic','ＭＳ_ゴシック',monospace] pr-12">
          {prompt}
        </pre>
        <div className="absolute top-3 right-3">
          <CopyButton text={prompt} />
        </div>
      </div>
    </div>
  );
};

export default PromptBlock;
```

---

### 7. CopyButton（コピーボタン）

**ファイル**: `src/components/common/CopyButton.jsx`

**機能**:
- クリックでテキストをクリップボードにコピー
- コピー成功時のフィードバック表示

**実装例**:
```jsx
// src/components/common/CopyButton.jsx
import React, { useState } from 'react';

const CopyButton = ({ text }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('コピーに失敗しました', err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="px-3 py-1 text-xs bg-[#5B9BD5] text-white rounded-lg hover:bg-[#4A8BC4] transition-colors"
    >
      {copied ? 'コピー完了!' : 'コピー'}
    </button>
  );
};

export default CopyButton;
```

---

### 8. ResponseExample（回答例ブロック）

**ファイル**: `src/components/article/ResponseExample.jsx`

**機能**:
- ChatGPTの回答例を表示
- プロンプトブロックと同様のスタイル

**実装例**:
```jsx
// src/components/article/ResponseExample.jsx
import React from 'react';

const ResponseExample = ({ response, title = '回答例' }) => {
  return (
    <div className="my-6">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-bold text-[#333333]">{title}</span>
      </div>
      <div className="bg-[#F3F4F6] rounded-lg p-4 border-l-4 border-[#5B9BD5]">
        <pre className="whitespace-pre-wrap text-sm text-[#333333] font-['MS_Gothic','ＭＳ_ゴシック',monospace]">
          {response}
        </pre>
      </div>
    </div>
  );
};

export default ResponseExample;
```

---

### 9. Button（汎用ボタン）

**ファイル**: `src/components/common/Button.jsx`

**機能**:
- プライマリ/セカンダリ/アクセントの3種類
- 角丸スタイル

**Props**:
```typescript
interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'accent';
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;             // リンクボタンの場合
  fullWidth?: boolean;
}
```

**実装例**:
```jsx
// src/components/common/Button.jsx
import React from 'react';

const Button = ({ 
  variant = 'primary', 
  children, 
  onClick, 
  href, 
  fullWidth = false 
}) => {
  const baseStyles = 'px-6 py-3 rounded-lg font-bold transition-colors text-center';
  
  const variantStyles = {
    primary: 'bg-[#5B9BD5] text-white hover:bg-[#4A8BC4]',
    secondary: 'bg-white text-[#5B9BD5] border-2 border-[#5B9BD5] hover:bg-[#F5F9FC]',
    accent: 'bg-[#FF9800] text-white hover:bg-[#E68900]'
  };
  
  const widthStyle = fullWidth ? 'w-full' : '';
  const className = `${baseStyles} ${variantStyles[variant]} ${widthStyle}`;
  
  if (href) {
    return (
      <a href={href} className={`inline-block ${className}`}>
        {children}
      </a>
    );
  }
  
  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
};

export default Button;
```

---

### 10. Card（汎用カード）

**ファイル**: `src/components/common/Card.jsx`

**機能**:
- 角丸、影付きのカードコンテナ
- 画像、タイトル、説明を含むレイアウト

**実装例**:
```jsx
// src/components/common/Card.jsx
import React from 'react';

const Card = ({ 
  imageSrc, 
  imageAlt, 
  title, 
  description, 
  href,
  highlighted = false 
}) => {
  const CardWrapper = href ? 'a' : 'div';
  
  return (
    <CardWrapper 
      href={href}
      className={`
        block rounded-lg overflow-hidden bg-white 
        border-2 transition-all
        ${highlighted 
          ? 'border-[#FF9800] shadow-lg shadow-[#FF9800]/20' 
          : 'border-[#E5E7EB] hover:border-[#5B9BD5] hover:shadow-md'
        }
      `}
    >
      {imageSrc && (
        <div className="aspect-video overflow-hidden">
          <img 
            src={imageSrc} 
            alt={imageAlt || title}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <div className="p-4">
        <h3 className="font-bold text-[#333333] mb-2 line-clamp-2">{title}</h3>
        {description && (
          <p className="text-sm text-[#666666] line-clamp-2">{description}</p>
        )}
      </div>
    </CardWrapper>
  );
};

export default Card;
```

---

### 11. AffiliateBox（アフィリエイト訴求ボックス）

**ファイル**: `src/components/cta/AffiliateBox.jsx`

**機能**:
- 目立つデザイン（アクセントカラー使用）
- 角丸カードスタイル
- CTA（行動喚起）ボタン付き

**Props**:
```typescript
interface AffiliateBoxProps {
  title: string;
  description: string;
  buttonText: string;
  buttonHref: string;
  features?: string[];       // 特徴リスト（任意）
}
```

**実装例**:
```jsx
// src/components/cta/AffiliateBox.jsx
import React from 'react';
import Button from '../common/Button';

const AffiliateBox = ({ 
  title, 
  description, 
  buttonText, 
  buttonHref, 
  features = [] 
}) => {
  return (
    <div className="my-8 p-6 bg-gradient-to-r from-[#FF9800]/10 to-[#FF9800]/5 border-2 border-[#FF9800] rounded-lg">
      <h3 className="text-xl font-bold text-[#333333] mb-3">{title}</h3>
      <p className="text-[#666666] mb-4">{description}</p>
      
      {features.length > 0 && (
        <ul className="mb-4 space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2 text-sm text-[#333333]">
              <span className="text-[#FF9800]">✓</span>
              {feature}
            </li>
          ))}
        </ul>
      )}
      
      <Button variant="accent" href={buttonHref}>
        {buttonText}
      </Button>
    </div>
  );
};

export default AffiliateBox;
```

**使用例**:
```jsx
<AffiliateBox
  title="ChatGPT Plusでさらに高精度な回答を"
  description="月額20ドルでGPT-4が使い放題。より複雑な指示も正確に理解してくれます。"
  buttonText="ChatGPT Plusを試してみる"
  buttonHref="https://example.com/chatgpt-plus"
  features={[
    'GPT-4モデルが使い放題',
    '混雑時も優先アクセス',
    '新機能への早期アクセス'
  ]}
/>
```

---

### 12. RelatedArticles（関連記事セクション）

**ファイル**: `src/components/cta/RelatedArticles.jsx`

**機能**:
- カード形式で関連記事を表示
- サムネイル画像付き
- 目立つデザイン

**Props**:
```typescript
interface RelatedArticlesProps {
  articles: RelatedArticle[];
}

interface RelatedArticle {
  title: string;
  description: string;
  href: string;
  imageSrc: string;
}
```

**実装例**:
```jsx
// src/components/cta/RelatedArticles.jsx
import React from 'react';
import Card from '../common/Card';

const RelatedArticles = ({ articles }) => {
  return (
    <section className="my-12">
      <h2 className="text-2xl font-bold text-[#333333] mb-6 pb-2 border-b-2 border-[#5B9BD5]">
        関連記事
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article, index) => (
          <Card
            key={index}
            imageSrc={article.imageSrc}
            title={article.title}
            description={article.description}
            href={article.href}
            highlighted={index === 0}
          />
        ))}
      </div>
    </section>
  );
};

export default RelatedArticles;
```

---

### 13. ArticleHeader（記事ヘッダー）

**ファイル**: `src/components/article/ArticleHeader.jsx`

**機能**:
- 記事タイトル（H1）
- アイキャッチ画像
- 作成日・更新日

**実装例**:
```jsx
// src/components/article/ArticleHeader.jsx
import React from 'react';

const ArticleHeader = ({ 
  title, 
  eyecatchSrc, 
  createdAt, 
  updatedAt 
}) => {
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
          <img 
            src={eyecatchSrc} 
            alt={title}
            className="w-full h-auto"
          />
        </div>
      )}
    </header>
  );
};

export default ArticleHeader;
```

---

## Tailwind CSS 設定

**ファイル**: `tailwind.config.js`

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#5B9BD5',
          hover: '#4A8BC4',
        },
        accent: {
          DEFAULT: '#FF9800',
          hover: '#E68900',
        },
        text: {
          main: '#333333',
          sub: '#666666',
        },
        bg: {
          main: '#FFFFFF',
          secondary: '#F5F9FC',
          code: '#F3F4F6',
        },
        border: '#E5E7EB',
      },
      fontFamily: {
        sans: ['MS Gothic', 'ＭＳ ゴシック', 'Hiragino Kaku Gothic ProN', 'ヒラギノ角ゴ ProN W3', 'Meiryo', 'メイリオ', 'sans-serif'],
        mono: ['MS Gothic', 'ＭＳ ゴシック', 'monospace'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
```

---

## グローバルCSS

**ファイル**: `src/styles/globals.css`

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

/* ベースリセット */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* 本文のベーススタイル */
body {
  font-family: 'MS Gothic', 'ＭＳ ゴシック', 'Hiragino Kaku Gothic ProN', 'ヒラギノ角ゴ ProN W3', Meiryo, メイリオ, sans-serif;
  color: #333333;
  background-color: #FFFFFF;
  line-height: 1.8;
}

/* 見出しスタイル */
h1, h2, h3, h4, h5, h6 {
  font-weight: bold;
  line-height: 1.4;
}

/* リンクスタイル */
a {
  color: #5B9BD5;
  text-decoration: none;
}

a:hover {
  color: #4A8BC4;
}

/* 記事本文内のスタイル */
.article-content h2 {
  font-size: 1.5rem;
  margin-top: 2.5rem;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #5B9BD5;
}

.article-content h3 {
  font-size: 1.25rem;
  margin-top: 2rem;
  margin-bottom: 0.75rem;
}

.article-content p {
  margin-bottom: 1rem;
}

.article-content ul,
.article-content ol {
  margin-bottom: 1rem;
  padding-left: 1.5rem;
}

.article-content li {
  margin-bottom: 0.5rem;
}

/* スムーズスクロール */
html {
  scroll-behavior: smooth;
}

/* 選択時のハイライト色 */
::selection {
  background-color: #5B9BD5;
  color: white;
}
```

---

## コンポーネントインデックス

**ファイル**: `src/components/index.js`

```javascript
// Layout
export { default as Header } from './layout/Header';
export { default as Footer } from './layout/Footer';
export { default as PageLayout } from './layout/PageLayout';
export { default as SideAd } from './layout/SideAd';

// Article
export { default as ArticleHeader } from './article/ArticleHeader';
export { default as TableOfContents } from './article/TableOfContents';
export { default as PromptBlock } from './article/PromptBlock';
export { default as ResponseExample } from './article/ResponseExample';

// Common
export { default as Button } from './common/Button';
export { default as Card } from './common/Card';
export { default as CopyButton } from './common/CopyButton';

// CTA
export { default as AffiliateBox } from './cta/AffiliateBox';
export { default as RelatedArticles } from './cta/RelatedArticles';
```

---

## 使用方法

1. 本フォーマットをAIモデル（Google AI Studio、Claude等）に読み込ませる
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

### 機能
- [ ] 目次がH2/H3から自動生成される
- [ ] 目次クリックでスムーズスクロールする
- [ ] プロンプトブロックにコピーボタンがある
- [ ] コピーボタンが正常に動作する

### コード品質
- [ ] コンポーネント単位でファイルが分割されている
- [ ] Tailwind CSSでスタイリングされている
- [ ] Propsが適切に型定義されている
- [ ] 再利用可能な設計になっている

---

## 更新履歴

| 日付 | 内容 |
|------|------|
| {作成日} | 初版作成 |
