'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, ArrowDown, MessageCircle } from 'lucide-react'
import dynamic from 'next/dynamic'

const HealthAIModel = dynamic(() => import('./health-ai-model'), {
  ssr: false,
  loading: () => (
    <div className="flex h-full w-full items-center justify-center">
      <div className="h-16 w-16 animate-spin rounded-full border-4 border-accent border-t-transparent" />
    </div>
  ),
})

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col justify-center px-6 py-20 lg:ml-64 lg:px-16"
    >
      {/* Background Grid Pattern */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(212,175,55,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(212,175,55,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="absolute right-0 top-0 h-[600px] w-[600px] rounded-full bg-accent/10 blur-[100px]" />
        <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-primary/5 blur-[80px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-8">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-4 text-sm uppercase tracking-[0.3em] text-accent"
            >
              AI & HealthTech Innovator
            </motion.p>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mb-6 font-serif text-5xl font-medium leading-tight tracking-tight md:text-6xl lg:text-7xl"
            >
              <span className="text-balance">Transforming Healthcare Through</span>{' '}
              <span className="italic text-accent">AI Innovation</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mb-8 max-w-xl text-lg leading-relaxed text-muted-foreground"
            >
              Medical Doctor & Clinical AI Consultant helping MENA health tech startups 
              and hospitals build clinically-valid AI solutions. Open for investments, 
              partnerships, and advisory roles.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                href="https://wa.me/21642384496"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 bg-[#25D366] px-6 py-3 text-sm font-medium text-white transition-all hover:bg-[#128C7E]"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp Me
              </Link>
              <Link
                href="mailto:falehwael@gmail.com"
                className="group inline-flex items-center gap-2 bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:bg-accent hover:text-accent-foreground"
              >
                Start a Conversation
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <Link
                href="#services"
                className="inline-flex items-center gap-2 border border-border px-6 py-3 text-sm font-medium transition-all hover:border-accent hover:bg-accent/10"
              >
                View Services
              </Link>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="mt-12 flex gap-8 border-t border-border pt-8"
            >
              <div>
                <p className="font-serif text-3xl font-medium text-accent">12+</p>
                <p className="text-sm text-muted-foreground">Years in Medicine</p>
              </div>
              <div>
                <p className="font-serif text-3xl font-medium text-accent">5</p>
                <p className="text-sm text-muted-foreground">Languages</p>
              </div>
              <div>
                <p className="font-serif text-3xl font-medium text-accent">MENA</p>
                <p className="text-sm text-muted-foreground">Region Focus</p>
              </div>
            </motion.div>
          </motion.div>

          {/* 3D Model & Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            {/* 3D AI HealthTech Model */}
            <div className="absolute -inset-4 z-0 h-[500px] w-full lg:h-[600px]">
              <HealthAIModel />
            </div>

            {/* Profile Image with overlay */}
            <div className="relative mx-auto aspect-square max-w-sm overflow-hidden rounded-2xl">
              {/* Decorative Border */}
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-accent/60 via-transparent to-primary/30" />
              <div className="absolute inset-0 rounded-2xl bg-card" />
              
              <Image
                src="/images/dr-wael.png"
                alt="Dr. Wael Faleh - AI & HealthTech Strategist"
                fill
                className="relative z-10 rounded-2xl object-cover object-top"
                priority
              />
              
              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="absolute -right-4 bottom-12 z-20 rounded-lg border border-accent/30 bg-card/95 px-4 py-3 shadow-lg backdrop-blur-sm"
              >
                <p className="text-xs text-muted-foreground">Based in</p>
                <p className="font-medium text-accent">Tunis, Tunisia</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.1 }}
                className="absolute -left-4 top-12 z-20 rounded-lg border border-accent/30 bg-card/95 px-4 py-3 shadow-lg backdrop-blur-sm"
              >
                <p className="text-xs text-muted-foreground">Open for</p>
                <p className="font-medium text-accent">Investments</p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-16 flex justify-center lg:justify-start"
        >
          <Link
            href="#about"
            className="group flex flex-col items-center gap-2 text-muted-foreground transition-colors hover:text-accent"
          >
            <span className="text-xs uppercase tracking-wider">Scroll to explore</span>
            <ArrowDown className="h-4 w-4 animate-bounce" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
