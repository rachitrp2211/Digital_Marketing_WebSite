// file: components/pricing/pricing-content.tsx
"use client"

import { SectionHeader } from "@/components/section-header"
import { StaggerContainer, StaggerItem } from "@/components/motion-wrapper"
import { Check, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

const whatsappLink =
  "https://wa.me/917778079556?text=Hello%20Raj%20Marketing%20Media,%20I%20am%20interested%20in%20your%20digital%20marketing%20services."

const plans = [
  {
    name: "Starter – Meta Ads Setup",
    description:
      "Perfect for small businesses just getting started with digital marketing.",
    features: [
      "Facebook Ads Campaign Setup",
      "Instagram Ads Campaign Setup",
      "Audience Targeting Research",
      "1 Ad Campaign Setup",
      "2 Ad Creatives (Image or Video)",
      "Basic Ad Copywriting",
      "Pixel Setup (if required)",
      "Campaign Optimization",
      "Weekly Performance Reports",
    ],
    ideal: "Local businesses, small brands, beginners in ads",
    popular: false,
  },
  {
    name: "Growth – Ads + Social Media Management",
    description:
      "For brands ready to scale their online presence and start running ads.",
    features: [
      "Facebook & Instagram Ads Management",
      "2–3 Ad Campaigns Setup & Management",
      "Advanced Audience Targeting",
      "Instagram / Facebook Page Management",
      "12 Social Media Posts per Month",
      "4 Reels per Month",
      "Caption Writing",
      "Hashtag Strategy",
      "Audience Engagement",
    ],
    ideal: "Growing brands that want consistent online presence",
    popular: true,
  },
  {
    name: "Pro – Complete Business Growth",
    description:
      "Full-service digital marketing for brands serious about growth.",
    features: [
      "Advanced Meta Ads Management",
      "Lead Generation Campaigns",
      "Retargeting Campaigns",
      "Weekly Optimization",
      "20 Social Media Posts per Month",
      "8 Reels per Month",
      "Content Strategy",
      "Brand Design Templates",
      "Professional Business Website",
      "4–5 Page Website",
      "Mobile Responsive Design",
      "Contact Form Integration",
      "Basic SEO Setup",
    ],
    ideal: "Businesses looking for full digital marketing support",
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
          description="Every project is different. Contact us on WhatsApp to get a custom quote based on your business goals."
        />

        <StaggerContainer className="grid gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <StaggerItem key={plan.name}>
              <motion.div
                whileHover={{ y: -6 }}
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

                {/* Dynamic pricing notice */}
                <div className="mb-6">
                  <p className="text-sm text-muted-foreground">
                    Pricing varies depending on project requirements.
                  </p>
                </div>

                <ul className="mb-6 flex flex-1 flex-col gap-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Ideal For */}
                <p className="mb-6 text-xs text-muted-foreground">
                  <span className="font-semibold text-foreground">
                    Ideal for:
                  </span>{" "}
                  {plan.ideal}
                </p>

                {/* CTA */}
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold transition-all ${
                    plan.popular
                      ? "bg-primary text-primary-foreground hover:brightness-110 glow-cyan"
                      : "border border-border bg-secondary text-foreground hover:border-primary/30 hover:bg-secondary/80"
                  }`}
                >
                  Get Custom Pricing
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
              href={whatsappLink}
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