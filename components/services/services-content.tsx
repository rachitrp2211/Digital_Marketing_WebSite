"use client"

import Link from "next/link"
import {
  Share2,
  Instagram,
  Megaphone,
  BarChart3,
  Palette,
  Globe,
  ArrowRight,
  CheckCircle2,
} from "lucide-react"
import { SectionHeader } from "@/components/section-header"
import { FadeInUp, StaggerContainer, StaggerItem } from "@/components/motion-wrapper"

const services = [
  {
    icon: Share2,
    title: "Social Media Management",
    description:
      "We manage your entire social media presence across platforms like Instagram, Facebook, LinkedIn, and Twitter. From content calendars to community management, we handle everything.",
    benefits: [
      "Custom content calendar & scheduling",
      "Community engagement & response management",
      "Monthly analytics reports & insights",
      "Platform-specific content optimization",
    ],
  },
  {
    icon: Instagram,
    title: "Instagram Growth Strategy",
    description:
      "Our proven Instagram growth methodology focuses on building an authentic, engaged audience through strategic content, hashtag research, and engagement tactics.",
    benefits: [
      "Targeted audience research & persona mapping",
      "Hashtag strategy & content optimization",
      "Reels & Stories strategy for maximum reach",
      "Influencer collaboration outreach",
    ],
  },
  {
    icon: Megaphone,
    title: "Meta Ads Management",
    description:
      "We create high-converting Facebook and Instagram ad campaigns using advanced audience targeting, creative A/B testing, and data-driven optimization.",
    benefits: [
      "Custom audience & lookalike creation",
      "Ad creative design & copywriting",
      "Conversion tracking & pixel setup",
      "Continuous A/B testing & optimization",
    ],
  },
  {
    icon: BarChart3,
    title: "Google Ads Campaigns",
    description:
      "Strategic Google Search, Display, and Shopping campaigns that put your brand in front of customers who are actively searching for your products or services.",
    benefits: [
      "Keyword research & competitive analysis",
      "Search, Display & Shopping campaigns",
      "Landing page optimization recommendations",
      "Bid strategy & budget optimization",
    ],
  },
  {
    icon: Palette,
    title: "Brand Marketing Strategy",
    description:
      "We develop comprehensive brand strategies that define your positioning, messaging, and visual identity to create a cohesive and memorable brand experience.",
    benefits: [
      "Brand positioning & messaging framework",
      "Visual identity guidelines",
      "Content strategy & editorial calendar",
      "Competitive landscape analysis",
    ],
  },
  {
    icon: Globe,
    title: "Website Development",
    description:
      "We design and develop modern, fast, and responsive websites that establish a strong online presence. From business websites to conversion-focused landing pages, we build digital experiences that drive results.",
    benefits: [
      "Business websites & landing pages",
      "Responsive mobile-friendly design",
      "SEO-friendly structure & optimization",
      "Fast performance & modern UI/UX",
    ],
  },
]

export function ServicesContent() {
  return (
    <section className="relative px-6 pt-32 pb-24">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-primary/5 blur-[128px]" />
        <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-[#8b5cf6]/5 blur-[128px]" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <SectionHeader
          badge="Our Services"
          title="Digital Marketing Solutions That Deliver"
          description="We provide full-spectrum digital marketing services designed to grow your brand, increase engagement, and maximize your return on ad spend."
        />

        <div className="flex flex-col gap-8">
          {services.map((service, i) => (
            <FadeInUp key={service.title} delay={i * 0.05}>
              <div className="glass group overflow-hidden rounded-2xl transition-all hover:glow-cyan hover:border-primary/20">
                <div className="grid gap-8 p-8 md:grid-cols-5 md:p-10">
                  <div className="md:col-span-3">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                      <service.icon className="h-6 w-6" />
                    </div>
                    <h3 className="mb-3 text-2xl font-bold text-foreground">{service.title}</h3>
                    <p className="mb-6 leading-relaxed text-muted-foreground">{service.description}</p>
                    <Link
                      href="/contact"
                      className="group/link inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
                    >
                      Get Started
                      <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                    </Link>
                  </div>
                  <div className="md:col-span-2">
                    <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                      What You Get
                    </h4>
                    <StaggerContainer className="flex flex-col gap-3">
                      {service.benefits.map((benefit) => (
                        <StaggerItem key={benefit}>
                          <div className="flex items-start gap-3">
                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                            <span className="text-sm text-foreground">{benefit}</span>
                          </div>
                        </StaggerItem>
                      ))}
                    </StaggerContainer>
                  </div>
                </div>
              </div>
            </FadeInUp>
          ))}
        </div>
      </div>
    </section>
  )
}
