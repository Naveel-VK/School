"use client"
import { useState } from "react"
import type React from "react"

import Link from "next/link"
import { Sun, Menu, X } from "lucide-react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="bg-sky-400/90 backdrop-blur-sm sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2">
            <div className="relative w-10 h-10 md:w-12 md:h-12">
              <Sun className="w-full h-full text-sunshine animate-pulse" />
            </div>
            <span className="font-bubblegum text-xl md:text-2xl text-white">SKYHIGH Preschool</span>
          </Link>

          {/* Mobile menu button */}
          <button className="md:hidden text-white" onClick={toggleMenu} aria-label="Toggle menu">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/about">About Us</NavLink>
            <NavLink href="/admissions">Admissions</NavLink>
            <NavLink href="/gallery">Gallery</NavLink>
            <NavLink href="/news">News & Updates</NavLink>
            <NavLink href="/contact">Contact Us</NavLink>
          </nav>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-2 flex flex-col gap-4">
            <NavLink href="/" onClick={toggleMenu}>
              Home
            </NavLink>
            <NavLink href="/about" onClick={toggleMenu}>
              About Us
            </NavLink>
            <NavLink href="/admissions" onClick={toggleMenu}>
              Admissions
            </NavLink>
            <NavLink href="/gallery" onClick={toggleMenu}>
              Gallery
            </NavLink>
            <NavLink href="/news" onClick={toggleMenu}>
              News & Updates
            </NavLink>
            <NavLink href="/contact" onClick={toggleMenu}>
              Contact Us
            </NavLink>
          </nav>
        )}
      </div>
    </header>
  )
}

function NavLink({
  href,
  children,
  onClick,
}: {
  href: string
  children: React.ReactNode
  onClick?: () => void
}) {
  return (
    <Link
      href={href}
      className="text-white font-medium hover:text-sky-100 transition-colors py-1 px-2 rounded hover:bg-sky-500/30"
      onClick={onClick}
    >
      {children}
    </Link>
  )
}

