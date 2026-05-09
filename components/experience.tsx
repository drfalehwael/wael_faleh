'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Award, Globe } from 'lucide-react'

const timeline = [
  {
    period: 'April 2026 - Present',
    role: 'Chief Executive Officer',
    company: 'To Be Revealed (Stealth)',
    location: 'Tunis, Tunisia',
    description: 'Leading an innovative HealthTech venture. Building the future of healthcare technology in the MENA region.',
  },
  {
    period: '2024 - Present',
    role: 'Clinical AI Consultant',
    company: 'Freelance / Self-employed',
    location: 'Tunisia & MENA',
    description: 'Advising health tech startups on clinical validation and workflow design. Training medical teams on AI tools for diagnosis and documentation. Project-based and fractional engagements.',
  },
  {
    period: 'Jan 2026 - Mar 2026',
    role: 'Strategic TPA Manager',
    company: 'Healthcare Operations',
    location: 'Tunis, Tunisia',
    description: 'Managed healthcare operations and revenue integrity. Specialized in claims orchestration, cost containment, and compliance leadership across healthcare ecosystems.',
  },
  {
    period: '2019 - 2021',
    role: 'Sales Manager',
    company: 'Meddocs Publishers',
    location: 'Tunisia & MENA',
    description: 'Led strategic and marketing direction for Tunisia and MENA region. Built partnerships with medical universities, consulting firms, and healthcare institutions.',
  },
  {
    period: '2014 - 2017',
    role: 'Medical Doctor',
    company: 'Ministry of Health Tunisia',
    location: 'Tunisia',
    description: 'Clinical practice in internal medicine with focus on evidence-based care. Developed deep understanding of clinical workflows and patient needs.',
  },
  {
    period: '2008 - 2014',
    role: 'Medical Degree (M.D.)',
    company: 'Kharkiv National Medical University',
    location: 'Ukraine',
    description: 'Doctor of Medicine in General Medicine. Foundational training in clinical medicine, research methodology, and patient care.',
  },
]

const credentials = [
  { label: 'Medical Degree', value: 'M.D.' },
  { label: 'Specialization', value: 'AI in Healthcare' },
  { label: 'Languages', value: '5' },
  { label: 'Certifications', value: '8+' },
]

const languages = [
  { lang: 'Arabic', level: 'Native' },
  { lang: 'English', level: 'Full Professional' },
  { lang: 'French', level: 'Full Professional' },
  { lang: 'Russian', level: 'Professional' },
  { lang: 'German', level: 'Working' },
]

const certifications = [
  'COVID-19 Operational Planning',
  'UNV-BSAFE',
  'PSEA Prevention',
  'Emerging Respiratory Viruses Detection',
]

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      id="experience"
      ref={ref}
      className="relative px-6 py-32 lg:ml-64 lg:px-16"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-accent">Experience</p>
          <h2 className="mb-6 font-serif text-4xl font-medium leading-tight md:text-5xl">
            A journey of <span className="italic text-accent">innovation</span>
          </h2>
        </motion.div>

        <div className="grid gap-16 lg:grid-cols-3">
          {/* Timeline */}
          <div className="lg:col-span-2">
            <div className="relative space-y-0">
              {/* Timeline Line */}
              <div className="absolute left-0 top-0 h-full w-px bg-border lg:left-32" />
              
              {timeline.map((item, index) => (
                <motion.div
                  key={item.period}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative pb-10 pl-8 lg:pl-40"
                >
                  {/* Dot */}
                  <div className="absolute left-0 top-1.5 h-2.5 w-2.5 rounded-full border-2 border-accent bg-background lg:left-[7.5rem]" />
                  
                  {/* Period (desktop) */}
                  <span className="absolute left-0 top-0 hidden text-xs text-muted-foreground lg:left-0 lg:block lg:w-28 lg:text-right">
                    {item.period}
                  </span>
                  
                  {/* Period (mobile) */}
                  <span className="mb-2 block text-xs text-muted-foreground lg:hidden">
                    {item.period}
                  </span>
                  
                  <h3 className="mb-1 font-medium">{item.role}</h3>
                  <p className="mb-1 text-sm text-accent">{item.company}</p>
                  <p className="mb-3 text-xs text-muted-foreground">{item.location}</p>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            {/* Credentials */}
            <div className="rounded-2xl border border-border bg-card p-6">
              <h3 className="mb-4 flex items-center gap-2 text-sm uppercase tracking-wider text-muted-foreground">
                <Award className="h-4 w-4 text-accent" />
                Credentials
              </h3>
              
              <div className="space-y-4">
                {credentials.map((credential) => (
                  <div key={credential.label} className="flex items-center justify-between border-b border-border pb-3 last:border-0 last:pb-0">
                    <span className="text-sm text-muted-foreground">{credential.label}</span>
                    <span className="font-medium text-accent">{credential.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div className="rounded-2xl border border-border bg-card p-6">
              <h3 className="mb-4 flex items-center gap-2 text-sm uppercase tracking-wider text-muted-foreground">
                <Globe className="h-4 w-4 text-accent" />
                Languages
              </h3>
              
              <div className="space-y-3">
                {languages.map((item) => (
                  <div key={item.lang} className="flex items-center justify-between">
                    <span className="text-sm">{item.lang}</span>
                    <span className="text-xs text-muted-foreground">{item.level}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="rounded-2xl border border-border bg-card p-6">
              <h3 className="mb-4 text-sm uppercase tracking-wider text-muted-foreground">
                Certifications
              </h3>
              
              <div className="space-y-2">
                {certifications.map((cert) => (
                  <p key={cert} className="text-xs text-muted-foreground">
                    {cert}
                  </p>
                ))}
              </div>
            </div>

            {/* Quote */}
            <div className="rounded-2xl border border-accent/30 bg-accent/10 p-6">
              <p className="text-sm leading-relaxed italic text-foreground">
                &ldquo;The future of healthcare is not just about technology—it&apos;s about using 
                technology to enhance the human aspects of medicine.&rdquo;
              </p>
              <p className="mt-3 text-xs font-medium text-accent">— Dr. Wael Faleh</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
