'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowUpRight, MessageCircle } from 'lucide-react'

const footerLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

const socialLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/dr-falehwael-ai-health' },
  { label: 'WhatsApp', href: 'https://wa.me/21642384496' },
  { label: 'Email', href: 'mailto:falehwael@gmail.com' },
]

export default function Footer() {
  return (
    <footer className="relative border-t border-border px-6 py-16 lg:ml-64 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="#home" className="mb-4 block text-xl font-medium">
              Dr. Wael Faleh
            </Link>
            <p className="mb-6 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Medical Doctor & AI Strategist helping MENA health tech startups and 
              hospitals build the future of healthcare. Open for investments and partnerships.
            </p>
            
            <Link
              href="https://wa.me/21642384496"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-[#25D366] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#128C7E]"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp Me
            </Link>
            
            <div className="mt-6 text-xs text-muted-foreground">
              <p>Tunis, Tunisia</p>
              <p className="mt-1">falehwael@gmail.com</p>
              <p className="mt-1">+216 42 384 496</p>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="mb-4 text-sm uppercase tracking-wider text-muted-foreground">
              Navigation
            </p>
            <div className="flex flex-col gap-2">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-accent"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div>
            <p className="mb-4 text-sm uppercase tracking-wider text-muted-foreground">
              Connect
            </p>
            <div className="flex flex-col gap-2">
              {socialLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-accent"
                >
                  {link.label}
                  <ArrowUpRight className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
                </Link>
              ))}
              <Link
                href="/cv.pdf"
                download
                className="group inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-accent"
              >
                Download CV
                <ArrowUpRight className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row"
        >
          <p className="text-sm text-muted-foreground">
            {new Date().getFullYear()} Dr. Wael Faleh. All rights reserved.
          </p>
          
          <div className="flex items-center gap-6">
            <span className="text-xs text-muted-foreground">
              Built with Next.js & Vercel
            </span>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
