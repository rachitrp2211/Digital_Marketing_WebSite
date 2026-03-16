// file: components/about/about-content.tsx
"use client"

import Image from "next/image"
import { SectionHeader } from "@/components/section-header"
import { FadeInUp, StaggerContainer, StaggerItem } from "@/components/motion-wrapper"
import { Target, Heart, Zap, Users, CheckCircle2 } from "lucide-react"

const values = [
  {
    icon: Target,
    title: "Results-Obsessed",
    description: "Every campaign, post, and ad we create is designed to drive measurable business outcomes.",
  },
  {
    icon: Heart,
    title: "Client-First",
    description: "Your success is our success. We treat every brand as if it were our own.",
  },
  {
    icon: Zap,
    title: "Innovation-Driven",
    description: "We stay ahead of trends and adopt the latest tools and strategies before the competition.",
  },
  {
    icon: Users,
    title: "Collaborative",
    description: "We work as an extension of your team, not a distant vendor.",
  },
]

const team = [
  { name: "Raj Thakur", role: "Founder & Digital Marketing Strategist", initial: "RT" },
  { name: "Rachit Patel", role: "Web Developer", initial: "RP" },
]

export function AboutContent() {
  return (
    <section className="relative px-6 pt-32 pb-24">

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-1/4 top-0 h-96 w-96 rounded-full bg-primary/5 blur-[128px]" />
      </div>

      <div className="relative mx-auto max-w-7xl">

        <SectionHeader
          badge="About Us"
          title="We Are Raj Marketing Media"
          description="A modern digital marketing startup on a mission to help brands grow online through strategic social media marketing and data-driven paid advertising campaigns."
        />

        {/* Founder Section */}
        <FadeInUp>
          <div className="glass mx-auto mb-20 grid max-w-6xl items-center gap-10 rounded-2xl p-8 md:grid-cols-2 md:p-12">

            {/* Founder Image */}
            <div className="flex justify-center">
              <Image
                src="/images/founder-raj.PNG"
                alt="Raj Thakur Founder"
                width={420}
                height={500}
                className="rounded-2xl shadow-xl"
              />
            </div>

            {/* Founder Info */}
            <div>
              <h3 className="mb-3 text-2xl font-bold text-foreground">
                Hi, I'm Raj
              </h3>

              <p className="mb-6 text-muted-foreground">
                Founder of Raj Marketing Media and a performance marketing specialist focused on helping brands grow through strategic advertising and digital marketing.
              </p>

              <div className="flex flex-col gap-3">

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-4 w-4 text-primary" />
                  <span className="text-sm text-foreground">
                    Facebook & Instagram Ads Management
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-4 w-4 text-primary" />
                  <span className="text-sm text-foreground">
                    Google Search Ads Campaigns
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-4 w-4 text-primary" />
                  <span className="text-sm text-foreground">
                    Lead Generation Funnels
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-4 w-4 text-primary" />
                  <span className="text-sm text-foreground">
                    Ad Creative & Campaign Optimization
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-4 w-4 text-primary" />
                  <span className="text-sm text-foreground">
                    Landing Page Strategy & Conversion Optimization
                  </span>
                </div>

              </div>
            </div>

          </div>
        </FadeInUp>

        {/* Story */}
        <FadeInUp>
          <div className="glass mx-auto mb-20 max-w-3xl rounded-2xl p-8 md:p-12">
            <h3 className="mb-4 text-xl font-bold text-foreground">Our Story</h3>
            <p className="mb-4 leading-relaxed text-muted-foreground">
              Raj Marketing Media was born from a passion for helping brands grow online. We recognized that many businesses struggle with inconsistent social media presence and ineffective advertising strategies. Our mission is to provide modern, data-driven digital marketing solutions that deliver real results.
            </p>
            <p className="mb-4 leading-relaxed text-muted-foreground">
              We specialize in Social Media Management, Instagram Growth, Meta Ads campaigns, Google Ads optimization, and Website Development. We not only manage digital marketing campaigns but also design and develop professional, fast-loading websites that establish a strong online presence for brands and startups.
            </p>
            <p className="leading-relaxed text-muted-foreground">
              At Raj Marketing Media, we treat every client as a partner. We're committed to understanding your brand's unique goals and delivering strategic marketing solutions that scale your business in today's competitive digital landscape.
            </p>
          </div>
        </FadeInUp>

        {/* Values */}
        <div className="mb-20">
          <FadeInUp>
            <h3 className="mb-8 text-center text-2xl font-bold text-foreground">
              Our Core Values
            </h3>
          </FadeInUp>

          <StaggerContainer className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <StaggerItem key={value.title}>
                <div className="glass group flex flex-col items-center rounded-2xl p-6 text-center transition-all hover:glow-cyan hover:border-primary/20">

                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                    <value.icon className="h-6 w-6" />
                  </div>

                  <h4 className="mb-2 text-base font-semibold text-foreground">
                    {value.title}
                  </h4>

                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {value.description}
                  </p>

                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        {/* Team */}
        <div>
          <FadeInUp>
            <h3 className="mb-8 text-center text-2xl font-bold text-foreground">
              Meet the Team
            </h3>
          </FadeInUp>

          <StaggerContainer className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {team.map((member) => (
              <StaggerItem key={member.name}>
                <div className="glass group flex flex-col items-center rounded-2xl p-6 text-center transition-all hover:glow-cyan hover:border-primary/20">

                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-[#8b5cf6]/20 text-lg font-bold text-primary">
                    {member.initial}
                  </div>

                  <h4 className="text-base font-semibold text-foreground">
                    {member.name}
                  </h4>

                  <p className="text-sm text-muted-foreground">
                    {member.role}
                  </p>

                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

      </div>
    </section>
  )
}
