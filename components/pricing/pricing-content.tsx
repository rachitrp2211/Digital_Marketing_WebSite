// file: components/pricing/pricing-content.tsx
"use client"

import { SectionHeader } from "@/components/section-header"
import { StaggerContainer, StaggerItem } from "@/components/motion-wrapper"
import { Check, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"

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
      "2 Ad Creatives",
      "Basic Ad Copywriting",
      "Pixel Setup",
      "Campaign Optimization",
      "Weekly Performance Reports",
    ],
    ideal: "Local businesses, small brands starting with ads",
    popular: false,
  },
  {
    name: "Growth – Ads + Social Media",
    description:
      "For brands ready to grow their online presence and run consistent ad campaigns.",
    features: [
      "Facebook & Instagram Ads Management",
      "2–3 Campaign Setup & Optimization",
      "Advanced Audience Targeting",
      "Instagram / Facebook Page Management",
      "12 Social Media Posts",
      "4 Reels Per Month",
      "Caption Writing",
      "Hashtag Strategy",
      "Audience Engagement",
    ],
    ideal: "Growing brands building strong social presence",
    popular: true,
  },
  {
    name: "Pro – Complete Business Growth",
    description:
      "Full-service digital marketing solution designed for serious business growth.",
    features: [
      "Advanced Meta Ads Management",
      "Lead Generation Campaigns",
      "Retargeting Campaigns",
      "Weekly Optimization",
      "20 Social Media Posts",
      "8 Reels Per Month",
      "Content Strategy",
      "Brand Design Templates",
      "Professional Business Website",
      "4–5 Page Website",
      "Contact Form Integration",
      "Basic SEO Setup",
    ],
    ideal: "Businesses needing full digital marketing support",
    popular: false,
  },
]

const websitePackages = [
  {
    name: "Starter Website",
    description:
      "A professional starter website designed for small businesses that need an online presence.",
    features: [
      "Responsive Website Design",
      "Modern UI/UX Layout",
      "SEO-Friendly Structure",
      "Contact Form Integration",
      "WhatsApp Chat Integration",
      "Social Media Links",
      "Fast Performance Optimization",
    ],
    popular: false,
  },
  {
    name: "Business Website",
    description:
      "A complete business website built to attract customers and generate leads online.",
    features: [
      "Everything in Starter Package",
      "Multiple Pages Website",
      "Google Maps Integration",
      "Blog or CMS Support",
      "Lead Capture Forms",
      "Advanced UI/UX Design",
      "Performance Optimization",
      "Security Setup",
    ],
    popular: true,
  },
  {
    name: "Advanced Website",
    description:
      "Advanced custom websites for businesses that require scalable and feature-rich solutions.",
    features: [
      "Everything in Business Package",
      "Custom Website Features",
      "Advanced Performance Optimization",
      "Full CMS or Blog System",
      "Advanced Security Setup",
      "Scalable Website Architecture",
      "Technical SEO Structure",
    ],
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

        {/* MARKETING PRICING */}
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

                <h3 className="mb-2 text-xl font-bold">{plan.name}</h3>
                <p className="mb-6 text-sm text-muted-foreground">
                  {plan.description}
                </p>

                <ul className="mb-6 flex flex-col gap-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex gap-3">
                      <Check className="h-4 w-4 text-primary mt-1" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <p className="mb-6 text-xs text-muted-foreground">
                  <span className="font-semibold text-foreground">
                    Ideal for:
                  </span>{" "}
                  {plan.ideal}
                </p>

                <a
                  href={whatsappLink}
                  target="_blank"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:brightness-110"
                >
                  Get Custom Pricing
                  <ArrowRight className="h-4 w-4" />
                </a>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* WEBSITE DEVELOPMENT PACKAGES */}
        <div className="mt-28">

          <SectionHeader
            badge="Website Development"
            title="Website Development Packages"
            description="We build modern, responsive, and SEO-friendly websites designed to help businesses establish a strong online presence and generate leads."
          />

          <StaggerContainer className="grid gap-8 lg:grid-cols-3 mt-12">
            {websitePackages.map((pkg) => (
              <StaggerItem key={pkg.name}>
                <motion.div
                  whileHover={{ y: -6 }}
                  className={`relative flex h-full flex-col rounded-2xl p-8 transition-all ${
                    pkg.popular
                      ? "border-2 border-primary/40 bg-gradient-to-b from-primary/5 via-card to-card glow-cyan-strong"
                      : "glass hover:glow-cyan hover:border-primary/20"
                  }`}
                >
                  {pkg.popular && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-bold text-primary-foreground">
                      Most Popular
                    </span>
                  )}

                  <h3 className="mb-2 text-xl font-bold">{pkg.name}</h3>

                  <p className="mb-6 text-sm text-muted-foreground">
                    {pkg.description}
                  </p>

                  <ul className="mb-8 flex flex-col gap-3">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex gap-3">
                        <Check className="h-4 w-4 text-primary mt-1" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-secondary px-6 py-3 text-sm font-semibold hover:border-primary/30 hover:bg-secondary/80"
                  >
                    Request a Quote
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* ADDITIONAL SERVICES */}
          <div className="mt-16 glass rounded-2xl p-8">
            <h3 className="text-lg font-semibold mb-6">
              Additional Website Services
            </h3>

            <ul className="grid md:grid-cols-2 gap-4 text-sm">
              <li>• Website maintenance</li>
              <li>• SEO optimization</li>
              <li>• E-commerce integration</li>
              <li>• Payment gateway setup</li>
              <li>• Booking system integration</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <p className="mb-6 text-sm text-muted-foreground">
              Every business has unique requirements. Contact Raj Marketing to
              get a custom website solution tailored to your needs.
            </p>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:brightness-110"
            >
              Contact Us
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

        </div>

      </div>
    </section>
  )
}

