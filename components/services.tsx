'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowUpRight, Brain, Stethoscope, TrendingUp, Building2, Users, Rocket } from 'lucide-react'
import Link from 'next/link'

const services = [
  {
    number: '01',
    icon: Brain,
    title: 'AI Strategy & Consulting',
    description: 'Comprehensive AI roadmaps tailored for healthcare organizations. From opportunity assessment to implementation, I help you navigate the AI landscape with clinical precision and strategic insight.',
    highlights: ['Technology Assessment', 'Implementation Roadmap', 'ROI Analysis', 'Risk Mitigation'],
  },
  {
    number: '02',
    icon: Stethoscope,
    title: 'Clinical AI Validation',
    description: 'Ensuring your AI solutions meet the highest clinical and regulatory standards. Expert validation services that bridge technical excellence with medical rigor and patient safety.',
    highlights: ['Clinical Trials Design', 'Regulatory Compliance', 'Safety Assessment', 'FDA/CE Marking'],
  },
  {
    number: '03',
    icon: Rocket,
    title: 'Startup Advisory & Mentorship',
    description: 'Strategic guidance for health tech founders from concept to scale. I help early-stage startups build solutions that clinicians will actually use and patients will benefit from.',
    highlights: ['Product-Market Fit', 'Pitch Deck Review', 'Clinical Workflow', 'Go-to-Market'],
  },
  {
    number: '04',
    icon: TrendingUp,
    title: 'Investment & Due Diligence',
    description: 'Clinical and technical due diligence for investors evaluating health tech opportunities. Identify risks, validate technology claims, and assess market potential with medical expertise.',
    highlights: ['Technical Assessment', 'Market Analysis', 'Risk Evaluation', 'Competitive Landscape'],
  },
  {
    number: '05',
    icon: Building2,
    title: 'Digital Health Transformation',
    description: 'Helping hospitals and health systems embrace digital innovation. Guide large-scale transformations that improve patient outcomes, operational efficiency, and staff satisfaction.',
    highlights: ['Change Management', 'Staff Training', 'System Integration', 'Outcome Measurement'],
  },
  {
    number: '06',
    icon: Users,
    title: 'Partnerships & Joint Ventures',
    description: 'Open to strategic partnerships, joint ventures, and co-founding opportunities in the HealthTech space. Bring clinical expertise and industry connections to your venture.',
    highlights: ['Co-Founding', 'Strategic Alliances', 'Regional Expansion', 'MENA Market Entry'],
  },
]

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      id="services"
      ref={ref}
      className="relative bg-secondary/30 px-6 py-32 lg:ml-64 lg:px-16"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-accent">Services</p>
          <h2 className="mb-6 max-w-2xl font-serif text-4xl font-medium leading-tight md:text-5xl">
            How I <span className="italic text-accent">help</span> transform healthcare
          </h2>
          <p className="max-w-xl text-muted-foreground">
            Comprehensive consulting, advisory, and partnership opportunities for startups, 
            hospitals, and investors navigating the AI healthcare revolution.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 transition-all hover:border-accent/50 hover:shadow-lg hover:shadow-accent/5"
            >
              {/* Number */}
              <span className="absolute -right-2 -top-2 font-serif text-7xl font-bold text-secondary/80">
                {service.number}
              </span>
              
              <div className="relative z-10">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent transition-all group-hover:bg-accent group-hover:text-accent-foreground">
                  <service.icon className="h-6 w-6" />
                </div>
                
                <h3 className="mb-3 text-xl font-medium">{service.title}</h3>
                <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
                
                <div className="mb-6 flex flex-wrap gap-2">
                  {service.highlights.map((highlight) => (
                    <span
                      key={highlight}
                      className="rounded-full bg-secondary px-3 py-1 text-xs text-muted-foreground"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>

                <Link
                  href="#contact"
                  className="inline-flex items-center gap-2 text-sm font-medium text-accent transition-colors hover:text-foreground"
                >
                  Get in touch
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 rounded-2xl border border-accent/30 bg-gradient-to-br from-accent/10 to-transparent p-8 text-center md:p-12"
        >
          <h3 className="mb-4 font-serif text-2xl font-medium md:text-3xl">
            Have a unique opportunity?
          </h3>
          <p className="mx-auto mb-6 max-w-lg text-muted-foreground">
            I&apos;m always interested in innovative partnerships, investment opportunities, 
            and projects that push the boundaries of healthcare technology.
          </p>
          <Link
            href="https://wa.me/21642384496?text=Hi%20Dr.%20Wael,%20I%20have%20an%20opportunity%20I'd%20like%20to%20discuss."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-accent px-8 py-4 font-medium text-accent-foreground transition-all hover:bg-accent/90"
          >
            Let&apos;s Talk
            <ArrowUpRight className="h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
