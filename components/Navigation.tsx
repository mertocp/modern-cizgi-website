'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { Menu, X, Phone, Mail } from 'lucide-react'
import { usePathname } from 'next/navigation'

const navLinks = [
  { href: '/', label: 'Ana Sayfa' },
  { href: '/hizmetler', label: 'Hizmetler' },
  { href: '/portfolio', label: 'Projeler' },
  { href: '/hakkimizda', label: 'Hakkımızda' },
  { href: '/iletisim', label: 'İletişim' },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  return (
    <>
      {/* Top Bar - UPDATED CONTACT INFO */}
      <div className="bg-dark text-light py-2 hidden md:block">
        <div className="container flex justify-end items-center gap-6 text-sm">
          <a href="tel:+902124529359" className="flex items-center gap-2 hover:text-primary transition-colors">
            <Phone className="w-4 h-4" />
            +90 212 452 9359
          </a>
          <a href="mailto:info@moderncizgimimarlik.com" className="flex items-center gap-2 hover:text-primary transition-colors">
            <Mail className="w-4 h-4" />
            info@moderncizgimimarlik.com
          </a>
        </div>
      </div>

      {/* Main Navigation - BLACK BACKGROUND */}
      <nav
        className={`sticky top-0 z-50 bg-dark transition-all duration-300 ${
          isScrolled ? 'shadow-lg' : ''
        }`}
      >
        <div className="container">
          <div className="flex items-center justify-between h-20">
            {/* Logo - White Text on Black Background */}
            <Link 
              href="/" 
              className="flex items-center space-x-3 hover:opacity-90 transition-opacity"
            >
              <Image
                src="/mcmlogo.png"
                alt="Modern Çizgi Mimarlık Logo"
                width={50}
                height={50}
                className="object-contain"
              />
              <span className="text-2xl font-bold text-light">
                Modern Çizgi Mimarlık
              </span>
            </Link>

            {/* Desktop Navigation - WHITE TEXT */}
            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-medium transition-colors hover:text-primary ${
                    pathname === link.href ? 'text-primary' : 'text-light'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              {/* ORANGE BUTTON with WHITE TEXT */}
              <Link 
                href="/iletisim" 
                className="bg-primary text-white px-6 py-3 rounded-lg font-bold hover:bg-primary-dark transition-all duration-300 hover:scale-105"
              >
                Teklif Al
              </Link>
            </div>

            {/* Mobile Menu Button - WHITE */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-dark-grey transition-colors text-light"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation - BLACK BACKGROUND */}
        {isOpen && (
          <div className="lg:hidden border-t border-light/20 bg-dark">
            <div className="container py-4 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block py-2 font-medium transition-colors hover:text-primary ${
                    pathname === link.href ? 'text-primary' : 'text-light'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link 
                href="/iletisim" 
                className="bg-primary text-white block text-center mt-4 px-6 py-3 rounded-lg font-bold hover:bg-primary-dark transition-all"
              >
                Teklif Al
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  )
}
