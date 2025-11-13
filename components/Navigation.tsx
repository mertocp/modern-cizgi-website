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
      {/* Top Bar */}
      <div className="bg-dark text-light py-2 hidden md:block">
        <div className="container flex justify-end items-center gap-6 text-sm">
          <a href="tel:+902125550123" className="flex items-center gap-2 hover:text-primary transition-colors">
            <Phone className="w-4 h-4" />
            +90 212 555 0123
          </a>
          <a href="mailto:info@moderncizgi.com" className="flex items-center gap-2 hover:text-primary transition-colors">
            <Mail className="w-4 h-4" />
            info@moderncizgi.com
          </a>
        </div>
      </div>

      {/* Main Navigation */}
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-lg' : 'bg-white'
        }`}
      >
        <div className="container">
          <div className="flex items-center justify-between h-20">
            {/* Logo with Subtle Shadow - OPTION 1 (RECOMMENDED) */}
            <Link 
              href="/" 
              className="flex items-center space-x-3 py-2 hover:opacity-90 transition-opacity"
              style={{
                filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3)) drop-shadow(0 0 8px rgba(255,107,53,0.2))'
              }}
            >
              <Image
                src="/mcmlogo.png"
                alt="Modern Çizgi Mimarlık Logo"
                width={50}
                height={50}
                className="object-contain"
              />
              <span className="text-2xl font-bold text-primary">
                Modern Çizgi Mimarlık
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-medium transition-colors hover:text-primary ${
                    pathname === link.href ? 'text-primary' : 'text-dark'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link href="/iletisim" className="btn-primary !py-3 !px-6">
                Teklif Al
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-light-grey transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden border-t border-light-grey-2 bg-white">
            <div className="container py-4 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block py-2 font-medium transition-colors hover:text-primary ${
                    pathname === link.href ? 'text-primary' : 'text-dark'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link href="/iletisim" className="btn-primary block text-center mt-4">
                Teklif Al
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  )
}
