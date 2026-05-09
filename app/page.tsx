import Navigation from '@/components/navigation'
import Hero from '@/components/hero'
import About from '@/components/about'
import Services from '@/components/services'
import Experience from '@/components/experience'
import Contact from '@/components/contact'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Experience />
      <Contact />
      <Footer />
    </main>
  )
}
