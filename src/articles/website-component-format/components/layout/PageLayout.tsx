import React from "react"
import Header from "./Header"
import Footer from "./Footer"
import SideAd from "./SideAd"

interface NavItem {
  label: string
  href: string
}

interface ArticleLink {
  title: string
  href: string
}

interface Category {
  name: string
  articles: ArticleLink[]
}

interface HeaderProps {
  logoSrc: string
  siteName: string
  navItems: NavItem[]
}

interface FooterProps {
  categories: Category[]
  copyright: string
}

interface PageLayoutProps {
  headerProps: HeaderProps
  footerProps: FooterProps
  children: React.ReactNode
  topAdSlot?: React.ReactNode
  bottomAdSlot?: React.ReactNode
}

export default function PageLayout({
  headerProps,
  footerProps,
  children,
  topAdSlot,
  bottomAdSlot,
}: PageLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header {...headerProps} />

      {/* Mobile Top Ad */}
      <div className="lg:hidden px-4 py-4 flex justify-center bg-[#F5F9FC]">
        {topAdSlot || (
          <div className="w-full max-w-[320px] h-[100px] bg-[#F3F4F6] rounded-lg flex items-center justify-center">
            <span className="text-[#666666] text-xs">広告枠 320x100</span>
          </div>
        )}
      </div>

      <div className="flex-1 flex justify-center">
        <div className="flex w-full max-w-7xl">
          {/* Left Side Ad (PC) */}
          <aside className="hidden lg:block w-[160px] flex-shrink-0">
            <SideAd position="left" />
          </aside>

          {/* Main Content */}
          <main className="flex-1 px-4 lg:px-8 py-8 bg-[#FFFFFF]">
            {children}
          </main>

          {/* Right Side Ad (PC) */}
          <aside className="hidden lg:block w-[160px] flex-shrink-0">
            <SideAd position="right" />
          </aside>
        </div>
      </div>

      {/* Mobile Bottom Ad */}
      <div className="lg:hidden px-4 py-4 flex justify-center bg-[#F5F9FC]">
        {bottomAdSlot || (
          <div className="w-full max-w-[320px] h-[100px] bg-[#F3F4F6] rounded-lg flex items-center justify-center">
            <span className="text-[#666666] text-xs">広告枠 320x100</span>
          </div>
        )}
      </div>

      <Footer {...footerProps} />
    </div>
  )
}
