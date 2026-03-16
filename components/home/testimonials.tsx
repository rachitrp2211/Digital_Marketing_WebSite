// file: components/home/testimonials.tsx
"use client"

import { SectionHeader } from "@/components/section-header"
import { StaggerContainer, StaggerItem } from "@/components/motion-wrapper"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Rohit Sharma",
    role: "Founder, UrbanStyle Clothing",
    content:
      "Raj Marketing Media helped us grow our Instagram page and run targeted Meta ads. Within a few weeks we started getting genuine leads. Their team understands digital marketing really well.",
    rating: 5,
  },
  {
    name: "Priya Mehta",
    role: "Owner, Bloom Beauty Studio",
    content:
      "We wanted someone to handle our social media professionally and Raj Marketing Media did a great job. The content, ad campaigns, and engagement strategy helped us attract many new customers.",
    rating: 5,
  },
  {
    name: "Kunal Patel",
    role: "Director, KP Fitness Hub",
    content:
      "The team is very responsive and creative. They designed our marketing campaigns and managed our Instagram ads effectively. Highly recommended for businesses looking to grow online.",
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
