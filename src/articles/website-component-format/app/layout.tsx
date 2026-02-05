import React from "react"
import type { Metadata } from 'next'
import { Noto_Sans_JP } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['400', '700'],
})

export const metadata: Metadata = {
  title: {
    default: 'AIプロンプト活用ガイド｜コピペで使えるChatGPTプロンプト集',
    template: '%s | AIプロンプト活用ガイド',
  },
  description: 'ChatGPTやAIを活用したプロンプト集。ビジネスメール、議事録作成、敬語文章など、コピペで使える実践的なプロンプトを無料で提供しています。',
  keywords: 'ChatGPT, プロンプト, AI, ビジネス, 無料, 使い方',
  openGraph: {
    title: 'AIプロンプト活用ガイド｜コピペで使えるChatGPTプロンプト集',
    description: 'ChatGPTやAIを活用したプロンプト集。ビジネスメール、議事録作成、敬語文章など、コピペで使える実践的なプロンプトを無料で提供しています。',
    type: 'website',
    siteName: 'AIプロンプト活用ガイド',
    locale: 'ja_JP',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AIプロンプト活用ガイド｜コピペで使えるChatGPTプロンプト集',
    description: 'ChatGPTやAIを活用したプロンプト集。コピペで使える実践的なプロンプトを無料で提供。',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja">
      <body className={`${notoSansJP.className} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
