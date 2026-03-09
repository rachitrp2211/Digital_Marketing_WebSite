// components/home/cta-banner.tsx
"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { FadeInUp } from "@/components/motion-wrapper"

export function CtaBanner() {
  return (
    <section className="relative py-24 px-6">
      <div className="mx-auto max-w-7xl">
        <FadeInUp>
          <div className="relative overflow-hidden rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/10 via-card to-[#8b5cf6]/10 p-12 text-center md:p-20">
            {/* Glow effect */}
            <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[80px]" />

            <h2 className="relative mb-4 text-3xl font-bold text-foreground md:text-4xl lg:text-5xl text-balance">
              Ready to Grow Your Brand?
            </h2>
            <p className="relative mx-auto mb-8 max-w-lg text-base leading-relaxed text-muted-foreground md:text-lg text-pretty">
              Book a free 30-minute strategy call and discover how we can scale your online presence with data-driven marketing.
            </p>
            <div className="relative flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110 glow-cyan"
              >
                Book Free Call
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-secondary px-8 py-3.5 text-sm font-semibold text-foreground transition-all hover:border-primary/30"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </FadeInUp>
      </div>
    </section>
  )
}
