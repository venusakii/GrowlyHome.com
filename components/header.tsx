"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, Sprout } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b-4 border-primary/30 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-primary blur-md opacity-50 group-hover:opacity-75 transition-opacity"></div>
              <div className="relative rounded-full bg-gradient-to-br from-primary to-secondary p-3 transition-transform group-hover:scale-110 group-hover:rotate-12 animate-pulse-glow">
                <Sprout className="h-7 w-7 text-primary-foreground" />
              </div>
            </div>
            <span className="font-display text-3xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              GrowlyHome
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="/"
              className="text-base font-display font-semibold text-foreground hover:text-primary transition-all hover:scale-110"
            >
              Home
            </Link>
            <Link
              href="/reviews"
              className="text-base font-display font-semibold text-foreground hover:text-secondary transition-all hover:scale-110"
            >
              Reviews
            </Link>
            <Link
              href="/about"
              className="text-base font-display font-semibold text-foreground hover:text-accent transition-all hover:scale-110"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-base font-display font-semibold text-foreground hover:text-primary transition-all hover:scale-110"
            >
              Contact
            </Link>
            <Button
              asChild
              className="bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_100%] hover:bg-right transition-all duration-500 font-display font-bold shadow-lg hover:shadow-xl hover:scale-105"
            >
              <Link href="/reviews">View Reviews ✨</Link>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 space-y-4 animate-fade-in-up">
            <Link
              href="/"
              className="block text-sm font-medium text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/reviews"
              className="block text-sm font-medium text-foreground hover:text-secondary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Reviews
            </Link>
            <Link
              href="/about"
              className="block text-sm font-medium text-foreground hover:text-accent transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="block text-sm font-medium text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}
