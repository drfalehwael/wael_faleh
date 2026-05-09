'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowUpRight, MessageCircle, Mail, Linkedin } from 'lucide-react'

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
]

const socialLinks = [
  { href: 'https://wa.me/21642384496', icon: MessageCircle, label: 'WhatsApp', color: '#25D366' },
  { href: 'mailto:falehwael@gmail.com', icon: Mail, label: 'Email', color: 'currentColor' },
  { href: 'https://www.linkedin.com/in/dr-falehwael-ai-health', icon: Linkedin, label: 'LinkedIn', color: '#0077B5' },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="fixed left-0 top-0 z-50 hidden h-screen w-64 flex-col justify-between border-r border-border bg-sidebar p-8 lg:flex">
        <div>
          <Link href="#home" className="mb-12 block">
            <span className="text-xl font-medium tracking-tight text-sidebar-foreground">Dr. Wael Faleh</span>
          </Link>
          
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group flex items-center justify-between py-3 text-sm text-sidebar-foreground/70 transition-colors hover:text-sidebar-primary"
              >
                <span className="uppercase tracking-wider">{link.label}</span>
                <ArrowUpRight className="h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100" />
              </Link>
            ))}
          </div>
        </div>

        <div>
          {/* Social Links */}
          <div className="mb-6 flex gap-3">
            {socialLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-sidebar-accent text-sidebar-foreground transition-all hover:scale-110"
                style={{ color: link.color }}
                aria-label={link.label}
              >
                <link.icon className="h-5 w-5" />
              </Link>
            ))}
          </div>
          
          <div className="text-xs text-sidebar-foreground/50">
            <p>AI & HealthTech</p>
            <p className="mt-1">Tunis, Tunisia</p>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="fixed left-0 right-0 top-0 z-50 flex items-center justify-between border-b border-border bg-background/95 p-4 backdrop-blur-xl lg:hidden">
        <Link href="#home">
          <span className="text-lg font-medium">Dr. Wael Faleh</span>
        </Link>
        
        <div className="flex items-center gap-3">
          <Link
            href="https://wa.me/21642384496"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#25D366] text-white"
            aria-label="WhatsApp"
          >
            <MessageCircle className="h-4 w-4" />
          </Link>
          
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-background lg:hidden"
          >
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ delay: 0.1 }}
              className="flex h-full flex-col items-center justify-center gap-8"
            >
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 + index * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-3xl font-light uppercase tracking-wider transition-colors hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              
              {/* Mobile Social Links */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-8 flex gap-4"
              >
                {socialLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsOpen(false)}
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary"
                    style={{ color: link.color }}
                    aria-label={link.label}
                  >
                    <link.icon className="h-6 w-6" />
                  </Link>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
