import { Navbar } from '@/components/landing/Navbar'
import { Hero } from '@/components/landing/Hero'
import { Features } from '@/components/landing/Features'
import { LegalSection } from '@/components/landing/LegalSection'
import { Footer } from '@/components/landing/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <LegalSection />
      </main>
      <Footer />
    </>
  )
}
