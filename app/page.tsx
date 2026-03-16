// file: app/services/page.tsx
import { Hero } from "@/components/home/hero"
import { Stats } from "@/components/home/stats"
import { ServicesPreview } from "@/components/home/services-preview"
import { WhyChooseUs } from "@/components/home/why-choose-us"
import { Testimonials } from "@/components/home/testimonials"
import { CtaBanner } from "@/components/home/cta-banner"

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <ServicesPreview />
      <WhyChooseUs />
      <Testimonials />
      <CtaBanner />
    </>
  )
}