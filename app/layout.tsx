import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  title: 'Dr. Wael Faleh | AI & HealthTech Strategist',
  description: 'Medical Doctor and AI Strategist helping MENA health tech startups and hospitals build clinically-valid AI solutions. Clinical advisor with regulatory expertise in digital health innovation.',
  keywords: ['AI', 'Healthcare', 'HealthTech', 'Medical AI', 'Clinical AI', 'MENA', 'Digital Health', 'Health Innovation', 'AI Consulting'],
  authors: [{ name: 'Dr. Wael Faleh' }],
  creator: 'Dr. Wael Faleh',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://wael-faleh.com',
    siteName: 'Dr. Wael Faleh',
    title: 'Dr. Wael Faleh | AI & HealthTech Strategist',
    description: 'Medical Doctor and AI Strategist transforming healthcare through innovation',
    images: ['/images/dr-wael.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dr. Wael Faleh | AI & HealthTech Strategist',
    description: 'Medical Doctor and AI Strategist transforming healthcare through innovation',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
    ],
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#0f1117',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} bg-background`}>
      <body className="font-sans antialiased text-foreground">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
