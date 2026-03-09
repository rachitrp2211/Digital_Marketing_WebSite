// components/home/why-choose-us.tsx
"use client"

import { SectionHeader } from "@/components/section-header"
import { StaggerContainer, StaggerItem } from "@/components/motion-wrapper"
import { Shield, Lightbulb, Clock, LineChart, Headphones, Rocket } from "lucide-react"

const reasons = [
  {
    icon: LineChart,
    title: "Data-Driven Approach",
    description: "Every decision is backed by analytics and real-time performance data.",
  },
  {
    icon: Lightbulb,
    title: "Creative Excellence",
    description: "Compelling content and designs that capture attention and drive engagement.",
  },
  {
    icon: Rocket,
    title: "Proven Results",
    description: "Track record of delivering 3-5x ROI on ad spend for our clients.",
  },
  {
    icon: Clock,
    title: "Fast Turnaround",
    description: "Quick setup and rapid iteration to get your campaigns live and optimized.",
  },
  {
    icon: Shield,
    title: "Full Transparency",
    description: "Real-time dashboards and weekly reports so you always know the status.",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    description: "A dedicated account manager for personalized strategy and support.",
  },
]

export function WhyChooseUs() {
  return (
    <section className="relative py-24 px-6">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-primary/3 blur-[128px]" />
      </div>
      <div className="relative mx-auto max-w-7xl">
        <SectionHeader
          badge="Why Choose Us"
          title="Built for Brands That Want to Scale"
          description="We combine creative strategy with performance marketing to deliver measurable results for your business."
        />

        <StaggerContainer className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason) => (
            <StaggerItem key={reason.title}>
              <div className="glass group flex items-start gap-4 rounded-2xl p-6 transition-all hover:glow-cyan hover:border-primary/20">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                  <reason.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="mb-1 text-base font-semibold text-foreground">{reason.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{reason.description}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
