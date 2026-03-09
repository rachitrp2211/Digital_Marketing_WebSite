"use client"

import { SectionHeader } from "@/components/section-header"
import { FadeInUp } from "@/components/motion-wrapper"
import { motion } from "framer-motion"
import { Search, Lightbulb, PenTool, Rocket, TrendingUp } from "lucide-react"

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Brand Analysis",
    description:
      "We start by understanding your brand, audience, competitors, and goals through a thorough discovery process.",
  },
  {
    icon: Lightbulb,
    number: "02",
    title: "Strategy Planning",
    description:
      "Based on our analysis, we create a tailored marketing strategy with clear KPIs, timelines, and channel priorities.",
  },
  {
    icon: PenTool,
    number: "03",
    title: "Content Creation",
    description:
      "Our creative team develops engaging content — from ad creatives to social media posts — that resonates with your audience.",
  },
  {
    icon: Rocket,
    number: "04",
    title: "Ad Campaign Setup",
    description:
      "We launch your campaigns across Meta, Google, and social platforms with precision targeting and proper tracking.",
  },
  {
    icon: TrendingUp,
    number: "05",
    title: "Optimization & Growth",
    description:
      "We continuously monitor, test, and optimize your campaigns to maximize ROI and scale what works.",
  },
]

export function ProcessSection() {
  return (
    <section className="relative py-24 px-6">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 bottom-0 h-96 w-96 rounded-full bg-[#8b5cf6]/5 blur-[128px]" />
      </div>
      <div className="relative mx-auto max-w-4xl">
        <SectionHeader
          badge="Our Process"
          title="How We Work"
          description="A proven 5-step process that takes your brand from strategy to growth."
        />

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 hidden h-full w-px bg-gradient-to-b from-primary/40 via-primary/20 to-transparent md:left-8 md:block" />

          <div className="flex flex-col gap-10">
            {steps.map((step, i) => (
              <FadeInUp key={step.number} delay={i * 0.1}>
                <div className="group flex gap-6 md:gap-8">
                  <div className="relative z-10 flex shrink-0">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="flex h-12 w-12 items-center justify-center rounded-xl border border-primary/20 bg-card text-primary transition-all group-hover:bg-primary/10 group-hover:glow-cyan md:h-16 md:w-16"
                    >
                      <step.icon className="h-5 w-5 md:h-6 md:w-6" />
                    </motion.div>
                  </div>
                  <div className="glass flex-1 rounded-2xl p-6 transition-all group-hover:border-primary/20">
                    <span className="mb-1 block text-xs font-bold uppercase tracking-widest text-primary">
                      Step {step.number}
                    </span>
                    <h3 className="mb-2 text-lg font-bold text-foreground md:text-xl">{step.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
