// app/pricing/page.tsx
import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PricingContent } from "@/components/pricing/pricing-content"
import { CtaBanner } from "@/components/home/cta-banner"

export const metadata: Metadata = {
  title: "Pricing | NexGen Digital",
  description: "Choose the right digital marketing package for your brand. Starter, Growth, and Pro plans available.",
}

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <main>
        <PricingContent />
        <CtaBanner />
      </main>
      
    </>
  )
}
