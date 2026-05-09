'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Brain, Stethoscope, LineChart, Globe, Handshake, Lightbulb } from 'lucide-react'

const expertise = [
  {
    icon: Brain,
    title: 'AI Strategy',
    description: 'Designing and implementing AI roadmaps for healthcare organizations',
  },
  {
    icon: Stethoscope,
    title: 'Clinical Validation',
    description: 'Ensuring AI solutions meet clinical standards and regulatory requirements',
  },
  {
    icon: LineChart,
    title: 'Digital Health',
    description: 'Transforming healthcare delivery through innovative digital solutions',
  },
  {
    icon: Globe,
    title: 'MENA Expertise',
    description: 'Deep expertise in Middle East and North Africa healthcare landscape',
  },
  {
    icon: Handshake,
    title: 'Partnerships',
    description: 'Open to strategic partnerships, joint ventures, and investment opportunities',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'Building the future of healthcare through cutting-edge technology',
  },
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      id="about"
      ref={ref}
      className="relative px-6 py-32 lg:ml-64 lg:px-16"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-16 lg:grid-cols-2">
          {/* Left Column - Story */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-accent">About</p>
            
            <h2 className="mb-8 font-serif text-4xl font-medium leading-tight md:text-5xl">
              <span className="italic text-accent">Building</span> the future of healthcare
            </h2>
            
            <div className="space-y-6 text-muted-foreground">
              <p className="text-lg leading-relaxed">
                I&apos;m a Medical Doctor based in <strong className="text-foreground">Tunis, Tunisia</strong> with 
                a deep interest in artificial intelligence. I&apos;ve taught myself how AI models work—not as a 
                coder, but as a clinician who needs them to be safe, useful, and practical.
              </p>
              
              <p className="leading-relaxed">
                I help <strong className="text-foreground">startups and hospitals</strong> with clinical observation 
                for AI models, workflow integration, training medical staff on AI tools, and regulatory 
                readiness including ethics, liability, data protection, and legal integration.
              </p>
              
              <p className="leading-relaxed">
                Currently available for <strong className="text-foreground">freelance consulting</strong>, fractional 
                advisory roles, and open to <strong className="text-foreground">investments and partnerships</strong> in 
                the HealthTech space. Feel free to reach out.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-8 border-t border-border pt-10">
              <div>
                <p className="font-serif text-4xl font-medium text-accent">12+</p>
                <p className="text-sm text-muted-foreground">Years in Medicine</p>
              </div>
              <div>
                <p className="font-serif text-4xl font-medium text-accent">5</p>
                <p className="text-sm text-muted-foreground">Languages</p>
              </div>
              <div>
                <p className="font-serif text-4xl font-medium text-accent">8+</p>
                <p className="text-sm text-muted-foreground">Certifications</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Expertise */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid gap-4 sm:grid-cols-2"
          >
            {expertise.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="group relative overflow-hidden rounded-xl border border-border bg-card p-6 transition-all hover:border-accent/50 hover:shadow-lg hover:shadow-accent/5"
              >
                <div className="flex flex-col gap-3">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-medium">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
