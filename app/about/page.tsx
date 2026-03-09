// app/about/page.tsx
import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { AboutContent } from "@/components/about/about-content"
import { ProcessSection } from "@/components/about/process-section"
import { CtaBanner } from "@/components/home/cta-banner"

export const metadata: Metadata = {
  title: "About Us | NexGen Digital",
  description: "Learn about NexGen Digital - a passionate digital marketing team helping brands grow online using modern marketing strategies.",
}

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <AboutContent />
        <ProcessSection />
        <CtaBanner />
      </main>
      <Footer />
    </>
  )
}
