// components/home/cta-banner.tsx
"use client"

import Link from "next/link"
import { ArrowRight, MessageCircle } from "lucide-react"
import { FadeInUp } from "@/components/motion-wrapper"

const whatsappLink =
  "https://wa.me/917778079556?text=Hello%20Raj%20Marketing%20Media,%20I%20want%20to%20grow%20my%20brand%20with%20digital%20marketing."

export function CtaBanner() {
  return (
    <section className="relative py-24 px-6">
      <div className="mx-auto max-w-7xl">
        <FadeInUp>
          <div className="relative overflow-hidden rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/10 via-card to-[#8b5cf6]/10 p-12 text-center md:p-20">
            
            {/* Glow effect */}
            <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[80px]" />

            <h2 className="relative mb-4 text-3xl font-bold text-foreground md:text-4xl lg:text-5xl text-balance">
              Ready to Grow Your Brand Online?
            </h2>

            <p className="relative mx-auto mb-8 max-w-lg text-base leading-relaxed text-muted-foreground md:text-lg text-pretty">
              Let’s discuss your business goals and create a strategy that
              brings more leads, customers, and brand visibility through
              powerful digital marketing.
            </p>

            <div className="relative flex flex-col items-center justify-center gap-4 sm:flex-row">
              
              {/* WhatsApp CTA */}
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110 glow-cyan"
              >
                <MessageCircle className="h-4 w-4" />
                Chat on WhatsApp
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>

              {/* Pricing */}
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