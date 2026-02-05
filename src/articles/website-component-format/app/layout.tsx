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
  title: '会議議事録をChatGPTで自動作成するプロンプト4選【コピペOK】 | AIプロンプト活用ガイド',
  description: 'ChatGPTを使って会議の議事録を効率的に作成する方法を解説。コピペで使えるプロンプト4選と実際の回答例を紹介。初心者でも簡単に議事録作成の時間を大幅短縮できます。',
  keywords: 'ChatGPT, 議事録, プロンプト, 会議, 自動作成, AI',
  openGraph: {
    title: '会議議事録をChatGPTで自動作成するプロンプト4選【コピペOK】',
    description: 'ChatGPTを使って会議の議事録を効率的に作成する方法を解説。コピペで使えるプロンプト4選と実際の回答例を紹介。',
    type: 'article',
    images: ['/images/meeting-minutes-eyecatch.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: '会議議事録をChatGPTで自動作成するプロンプト4選【コピペOK】',
    description: 'ChatGPTを使って会議の議事録を効率的に作成する方法を解説。',
    images: ['/images/meeting-minutes-eyecatch.jpg'],
  },
    generator: 'v0.app'
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
