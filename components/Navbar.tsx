'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Cloud } from 'lucide-react'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/events', label: 'Events' },
  { href: '/team', label: 'Team' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-aws-darker/95 backdrop-blur-md border-b border-aws-orange/10' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-9 h-9 bg-aws-orange/10 border border-aws-orange/40 flex items-center justify-center group-hover:border-aws-orange transition-colors"
               style={{ clipPath: 'polygon(4px 0%, 100% 0%, calc(100% - 4px) 100%, 0% 100%)' }}>
            <Cloud size={18} className="text-aws-orange" />
          </div>
          <div>
            <div className="font-display font-bold text-white text-lg leading-none tracking-wider">
              AWS<span className="text-aws-orange"> Student Builder Group</span>
            </div>
            <div className="font-mono text-[9px] text-aws-muted tracking-[0.25em] uppercase">QAU · Islamabad</div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative px-4 py-2 font-display font-semibold text-sm tracking-[0.12em] uppercase transition-colors ${
                pathname === link.href
                  ? 'text-aws-orange'
                  : 'text-aws-muted hover:text-white'
              }`}
            >
              {pathname === link.href && (
                <span className="absolute bottom-0 left-4 right-4 h-px bg-aws-orange" />
              )}
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <Link
            href="https://www.meetup.com/aws-sbg-at-quaid-i-azam-university-islamabad/"
            target="_blank"
            className="btn-primary text-xs"
          >
            Join Community
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-aws-muted hover:text-white transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-aws-darker/98 backdrop-blur-xl border-t border-aws-orange/10">
          <div className="px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`font-display font-semibold text-lg tracking-wider uppercase transition-colors ${
                  pathname === link.href ? 'text-aws-orange' : 'text-aws-muted'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="https://www.meetup.com/aws-sbg-at-quaid-i-azam-university-islamabad/"
              target="_blank"
              className="btn-primary text-center mt-2"
            >
              Join Community
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
