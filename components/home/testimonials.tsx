"use client"

import { SectionHeader } from "@/components/section-header"
import { StaggerContainer, StaggerItem } from "@/components/motion-wrapper"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Founder, GlowUp Skincare",
    content:
      "NexGen transformed our Instagram presence completely. We went from 2K to 25K followers in just 4 months with real, engaged audiences.",
    rating: 5,
  },
  {
    name: "David Chen",
    role: "CEO, TechNova",
    content:
      "Their Meta ads strategy generated 5x ROAS within the first month. The team is incredibly responsive and data-focused.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "Marketing Director, FreshBite",
    content:
      "Best digital marketing agency we have worked with. The Google Ads campaigns they built brought in 300% more qualified leads.",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section className="relative py-24 px-6">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          badge="Testimonials"
          title="What Our Clients Say"
          description="Real results from real brands. Here is what our partners have to say about working with NexGen."
        />

        <StaggerContainer className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <StaggerItem key={t.name}>
              <div className="glass flex h-full flex-col rounded-2xl p-6 transition-all hover:glow-cyan hover:border-primary/20">
                <div className="mb-4 flex gap-1">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="mb-6 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {`"${t.content}"`}
                </p>
                <div className="flex items-center gap-3 border-t border-border pt-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
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
