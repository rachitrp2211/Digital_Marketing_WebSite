"use client"

import { SectionHeader } from "@/components/section-header"
import { StaggerContainer, StaggerItem } from "@/components/motion-wrapper"
import { Check, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

const plans = [
  {
    name: "Starter",
    description: "Perfect for small businesses just getting started with digital marketing.",
    features: [
      "Social media management (2 platforms)",
      "8 posts per month",
      "Basic Instagram growth strategy",
      "Monthly analytics report",
      "Email support",
    ],
    cta: "Contact on WhatsApp",
    popular: false,
  },
  {
    name: "Growth",
    description: "For brands ready to scale their online presence and start running ads.",
    features: [
      "Social media management (4 platforms)",
      "16 posts per month",
      "Advanced Instagram growth strategy",
      "Meta Ads management",
      "Bi-weekly analytics reports",
      "Content creation & design",
      "Priority support",
    ],
    cta: "Contact on WhatsApp",
    popular: true,
  },
  {
    name: "Pro",
    description: "Full-service digital marketing for brands serious about growth.",
    features: [
      "Social media management (all platforms)",
      "30 posts per month",
      "Premium Instagram growth strategy",
      "Meta Ads management",
      "Google Ads management",
      "Brand marketing strategy",
      "Weekly reports & strategy calls",
      "Dedicated account manager",
      "Content creation & video editing",
    ],
    cta: "Contact on WhatsApp",
    popular: false,
  },
]

export function PricingContent() {
  return (
    <section className="relative px-6 pt-32 pb-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-0 top-1/4 h-96 w-96 rounded-full bg-primary/5 blur-[128px]" />
        <div className="absolute left-0 bottom-1/4 h-96 w-96 rounded-full bg-[#8b5cf6]/5 blur-[128px]" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <SectionHeader
          badge="Pricing"
          title="Flexible Pricing for Every Brand"
          description="Every project is different. Contact us on WhatsApp to get a custom quote based on your goals."
        />

        <StaggerContainer className="grid gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <StaggerItem key={plan.name}>
              <motion.div
                whileHover={{ y: -4 }}
                className={`relative flex h-full flex-col rounded-2xl p-8 transition-all ${
                  plan.popular
                    ? "border-2 border-primary/40 bg-gradient-to-b from-primary/5 via-card to-card glow-cyan-strong"
                    : "glass hover:glow-cyan hover:border-primary/20"
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-bold text-primary-foreground">
                    Most Popular
                  </span>
                )}

                <div className="mb-6">
                  <h3 className="mb-2 text-xl font-bold text-foreground">
                    {plan.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {plan.description}
                  </p>
                </div>

                {/* Price Removed */}
                <div className="mb-8">
                  <p className="text-sm text-muted-foreground">
                    Pricing varies depending on project requirements.
                  </p>
                </div>

                <ul className="mb-8 flex flex-1 flex-col gap-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="https://wa.me/917778079556"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold transition-all ${
                    plan.popular
                      ? "bg-primary text-primary-foreground hover:brightness-110 glow-cyan"
                      : "border border-border bg-secondary text-foreground hover:border-primary/30 hover:bg-secondary/80"
                  }`}
                >
                  {plan.cta}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <div className="mt-16 text-center">
          <p className="text-sm text-muted-foreground">
            Need a custom marketing strategy?{" "}
            <a
              href="https://wa.me/917778079556"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-primary hover:underline"
            >
              Contact us on WhatsApp
            </a>{" "}
            and we will create a tailored plan for your brand.
          </p>
        </div>
      </div>
    </section>
  )
}