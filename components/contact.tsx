'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowUpRight, Mail, Linkedin, MapPin, FileText, Phone, MessageCircle } from 'lucide-react'
import Link from 'next/link'

const contactMethods = [
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: '+216 42 384 496',
    href: 'https://wa.me/21642384496',
    description: 'Quick responses, preferred',
    color: 'bg-[#25D366]',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'falehwael@gmail.com',
    href: 'mailto:falehwael@gmail.com',
    description: 'For formal inquiries',
    color: 'bg-accent',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'dr-falehwael-ai-health',
    href: 'https://www.linkedin.com/in/dr-falehwael-ai-health',
    description: 'Professional network',
    color: 'bg-[#0077B5]',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+216 42 384 496',
    href: 'tel:+21642384496',
    description: 'Direct call',
    color: 'bg-primary',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Tunis, Tunisia',
    href: 'https://maps.google.com/?q=Tunis,Tunisia',
    description: 'Available globally',
    color: 'bg-destructive',
  },
  {
    icon: FileText,
    label: 'Resume',
    value: 'Download CV',
    href: '/cv.pdf',
    description: 'Full credentials',
    color: 'bg-chart-3',
  },
]

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      id="contact"
      ref={ref}
      className="relative bg-secondary/30 px-6 py-32 lg:ml-64 lg:px-16"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-16 lg:grid-cols-2">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-accent">Contact</p>
            
            <h2 className="mb-6 font-serif text-4xl font-medium leading-tight md:text-5xl">
              Let&apos;s build the <span className="italic text-accent">future</span> together
            </h2>
            
            <p className="mb-8 text-lg text-muted-foreground">
              Whether you&apos;re a health tech startup seeking clinical expertise, an investor 
              looking for opportunities, or a hospital ready to embrace AI - I&apos;d love to 
              hear about your vision.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="https://wa.me/21642384496"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 bg-[#25D366] px-8 py-4 text-base font-medium text-white transition-all hover:bg-[#128C7E]"
              >
                <MessageCircle className="h-5 w-5" />
                WhatsApp Me
              </Link>
              <Link
                href="mailto:falehwael@gmail.com"
                className="group inline-flex items-center gap-3 bg-primary px-8 py-4 text-base font-medium text-primary-foreground transition-all hover:bg-accent hover:text-accent-foreground"
              >
                Send Email
                <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>

            <div className="mt-12 rounded-xl border border-accent/30 bg-accent/10 p-6">
              <p className="mb-2 text-sm font-medium text-accent">Open for Opportunities</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Investments in HealthTech ventures</li>
                <li>Strategic partnerships</li>
                <li>Fractional advisory roles</li>
                <li>Speaking engagements</li>
              </ul>
            </div>

            <div className="mt-8">
              <p className="mb-2 text-sm text-muted-foreground">Typical response time</p>
              <p className="text-2xl font-medium text-accent">Within 24 hours</p>
            </div>
          </motion.div>

          {/* Right Column - Contact Methods */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid gap-4 sm:grid-cols-2"
          >
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              >
                <Link
                  href={method.href}
                  target={method.href.startsWith('http') || method.href.startsWith('https') ? '_blank' : undefined}
                  rel={method.href.startsWith('http') || method.href.startsWith('https') ? 'noopener noreferrer' : undefined}
                  download={method.label === 'Resume' ? true : undefined}
                  className="group flex h-full flex-col rounded-xl border border-border bg-card p-6 transition-all hover:border-accent/50 hover:shadow-lg hover:shadow-accent/5"
                >
                  <div className={`mb-4 flex h-10 w-10 items-center justify-center rounded-lg ${method.color} text-white transition-transform group-hover:scale-110`}>
                    <method.icon className="h-5 w-5" />
                  </div>
                  <p className="mb-1 text-xs uppercase tracking-wider text-muted-foreground">
                    {method.label}
                  </p>
                  <p className="mb-2 font-medium">{method.value}</p>
                  <p className="mt-auto text-sm text-muted-foreground">{method.description}</p>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
