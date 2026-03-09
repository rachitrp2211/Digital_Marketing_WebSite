"use client"

import Link from "next/link"
import {
  ArrowUpRight,
  Share2,
  Instagram,
  Megaphone,
  BarChart3,
  Globe,
} from "lucide-react"

import { SectionHeader } from "@/components/section-header"
import { StaggerContainer, StaggerItem } from "@/components/motion-wrapper"

const services = [
  {
    icon: Share2,
    title: "Social Media Management",
    description:
      "Full-service content strategy, creation, and scheduling across all major platforms to build your brand presence.",
  },
  {
    icon: Instagram,
    title: "Instagram Growth",
    description:
      "Organic growth strategies using data-backed techniques to increase followers, engagement, and conversions.",
  },
  {
    icon: Megaphone,
    title: "Meta Ads Management",
    description:
      "High-converting Facebook and Instagram ad campaigns with advanced targeting and continuous optimization.",
  },
  {
    icon: BarChart3,
    title: "Google Ads Campaigns",
    description:
      "Strategic Google Search & Display campaigns that put your brand in front of ready-to-buy customers.",
  },
  {
    icon: Globe,
    title: "Website Development",
    description:
      "Modern, fast, and responsive websites that establish your online presence and convert visitors into customers.",
  },
]

export function ServicesPreview() {
  return (
    <section className="relative py-24 px-6">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          badge="Our Services"
          title="Everything You Need to Grow Online"
          description="From organic social media growth to high-performance paid campaigns, we provide end-to-end digital marketing solutions."
        />

        <StaggerContainer
          initial={false}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
        >
          {services.map((service) => {
            const Icon = service.icon

            return (
              <StaggerItem key={service.title}>
                <Link
                  href="/services"
                  className="glass group flex h-full flex-col rounded-2xl p-6 transition-all hover:glow-cyan hover:border-primary/20"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="mb-2 text-lg font-semibold text-foreground">
                    {service.title}
                  </h3>

                  <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>

                  <span className="inline-flex items-center gap-1 text-sm font-medium text-primary opacity-0 transition-all group-hover:opacity-100">
                    Learn more
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </Link>
              </StaggerItem>
            )
          })}
        </StaggerContainer>
      </div>
    </section>
  )
}