"use client"

import { SectionHeader } from "@/components/section-header"
import { StaggerContainer, StaggerItem, FadeInUp } from "@/components/motion-wrapper"
import { TrendingUp, Users, DollarSign, BarChart3, Instagram, Megaphone } from "lucide-react"

const caseStudies = [
  {
    icon: Instagram,
    category: "Instagram Growth",
    title: "E-Commerce Fashion Brand",
    description:
      "Developed a comprehensive Instagram growth strategy for a fashion startup targeting Gen-Z audiences.",
    metrics: [
      { label: "Follower Growth", value: "Significant increase" },
      { label: "Engagement Rate", value: "High" },
      { label: "Timeline", value: "4 Months" },
    ],
    strategies: [
      "Reels-first content strategy with trending audio",
      "UGC creator partnerships and micro-influencers",
      "Strategic hashtag clusters for discoverability",
      "Instagram Shopping integration for direct conversions",
    ],
  },
  {
    icon: Megaphone,
    category: "Meta Ads",
    title: "Local Restaurant Chain",
    description:
      "Created and managed Meta ad campaigns to increase foot traffic and online orders for a multi-location restaurant brand.",
    metrics: [
      { label: "ROAS", value: "Positive impact" },
      { label: "Cost per Lead", value: "Optimized" },
      { label: "Online Orders", value: "Increased" },
    ],
    strategies: [
      "Geo-targeted campaigns for each location",
      "Video ads showcasing signature dishes",
      "Retargeting funnel for website visitors",
      "Special offer campaigns for off-peak hours",
    ],
  },
  {
    icon: BarChart3,
    category: "Google Ads",
    title: "B2B SaaS Platform",
    description:
      "Built a lead generation engine using Google Search and Display campaigns for a project management SaaS startup.",
    metrics: [
      { label: "Qualified Leads", value: "Increased" },
      { label: "CPC Reduction", value: "Improved efficiency" },
      { label: "Conversion Rate", value: "Enhanced" },
    ],
    strategies: [
      "High-intent keyword targeting with negative keywords",
      "Competitor brand bidding strategy",
      "Landing page A/B testing program",
      "Remarketing with demo signup incentives",
    ],
  },
]

const capabilities = [
  { icon: TrendingUp, label: "Growth Strategy", count: "Good" },
  { icon: Users, label: "Audience Reach", count: "Better" },
  { icon: DollarSign, label: "Ad Spend Managed", count: "Efficient" },
  { icon: BarChart3, label: "Campaigns Launched", count: "High" },
]

export function PortfolioContent() {
  return (
    <section className="relative px-6 pt-32 pb-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-0 h-96 w-96 rounded-full bg-primary/5 blur-[128px]" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <SectionHeader
          badge="Portfolio"
          title="Sample Campaign Strategies"
          description="As a startup agency, we showcase our strategic approach and methodology through these sample campaign structures."
        />

        {/* Capabilities Bar */}
        <FadeInUp>
          <div className="mb-16 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {capabilities.map((cap) => (
              <div
                key={cap.label}
                className="glass flex items-center gap-4 rounded-2xl p-5 transition-all hover:glow-cyan"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <cap.icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xl font-bold text-foreground">{cap.count}</p>
                  <p className="text-xs text-muted-foreground">{cap.label}</p>
                </div>
              </div>
            ))}
          </div>
        </FadeInUp>

        {/* Case Studies */}
        <StaggerContainer className="flex flex-col gap-8">
          {caseStudies.map((study) => (
            <StaggerItem key={study.title}>
              <div className="glass overflow-hidden rounded-2xl transition-all hover:glow-cyan hover:border-primary/20">
                <div className="p-8 md:p-10">
                  <div className="mb-6 flex flex-wrap items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <study.icon className="h-5 w-5" />
                    </div>
                    <span className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                      {study.category}
                    </span>
                  </div>

                  <h3 className="mb-2 text-2xl font-bold text-foreground">{study.title}</h3>
                  <p className="mb-6 max-w-2xl text-muted-foreground">{study.description}</p>

                  {/* Metrics */}
                  <div className="mb-8 grid grid-cols-3 gap-4">
                    {study.metrics.map((metric) => (
                      <div key={metric.label} className="rounded-xl bg-secondary p-4">
                        <p className="text-lg font-bold text-primary md:text-xl">{metric.value}</p>
                        <p className="text-xs text-muted-foreground">{metric.label}</p>
                      </div>
                    ))}
                  </div>

                  {/* Strategies */}
                  <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                    Key Strategies
                  </h4>
                  <div className="grid gap-2 md:grid-cols-2">
                    {study.strategies.map((strategy) => (
                      <div key={strategy} className="flex items-start gap-2">
                        <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        <span className="text-sm text-foreground">{strategy}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}