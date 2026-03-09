// app/portfolio/page.tsx
import type { Metadata } from "next"
import { PortfolioContent } from "@/components/portfolio/portfolio-content"
import { CtaBanner } from "@/components/home/cta-banner"

export const metadata: Metadata = {
  title: "Portfolio | Raj Marketing Media",
  description:
    "Explore our sample marketing strategies and campaign structures. See how Raj Marketing Media approaches digital marketing for different industries.",
}

export default function PortfolioPage() {
  return (
    <main>
      <PortfolioContent />
      <CtaBanner />
    </main>
  )
}