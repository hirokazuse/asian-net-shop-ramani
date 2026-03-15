"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-cream/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex flex-col">
            <span className="font-serif text-lg md:text-xl font-semibold text-deep-green leading-tight">
              アジアンネットショップラマニ
            </span>
            <span className="text-xs text-muted-foreground font-thai">
              Asian Net Shop Ramani
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#products" className="text-sm font-medium text-foreground hover:text-mango transition-colors">
              商品
            </a>
            <a href="#story" className="text-sm font-medium text-foreground hover:text-mango transition-colors">
              私たちのストーリー
            </a>
            <a href="#testimonials" className="text-sm font-medium text-foreground hover:text-mango transition-colors">
              お客様の声
            </a>
            <a
              href="https://www.facebook.com/groups/2538260863273895"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-deep-green text-cream font-medium text-sm rounded-full hover:bg-deep-green/90 transition-colors"
            >
              グループに参加
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-foreground"
            aria-label="メニューを開く"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <a 
                href="#products" 
                className="text-base font-medium text-foreground hover:text-mango transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                商品
              </a>
              <a 
                href="#story" 
                className="text-base font-medium text-foreground hover:text-mango transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                私たちのストーリー
              </a>
              <a 
                href="#testimonials" 
                className="text-base font-medium text-foreground hover:text-mango transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                お客様の声
              </a>
              <a
                href="https://www.facebook.com/groups/2538260863273895"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-deep-green text-cream font-medium rounded-full"
                onClick={() => setIsMenuOpen(false)}
              >
                Facebookグループに参加
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
