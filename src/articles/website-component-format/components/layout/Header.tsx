"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

interface NavItem {
  label: string
  href: string
}

interface HeaderProps {
  logoSrc: string
  siteName: string
  navItems: NavItem[]
}

export default function Header({ logoSrc, siteName, navItems }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-[#5B9BD5] text-[#FFFFFF]">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo + Site Name */}
        <a href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#FFFFFF] rounded-lg flex items-center justify-center">
            <span className="text-[#5B9BD5] font-bold text-lg">AI</span>
          </div>
          <span className="text-xl font-bold">{siteName}</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
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

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="メニューを開く"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden border-t border-[#FFFFFF]/30">
          <ul className="px-4 py-4 space-y-4">
            {navItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className="block hover:opacity-80 transition-opacity"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
