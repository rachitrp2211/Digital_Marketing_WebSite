"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Play } from "lucide-react"

export function Hero() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-20">
      {/* Background gradient orbs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-primary/5 blur-[128px]" />
        <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-[#8b5cf6]/5 blur-[128px]" />
      </div>

      {/* Grid pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(6,182,212,0.3) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(6,182,212,0.3) 1px, transparent 1px)`,
          backgroundSize: "64px 64px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-5xl text-center">
        <motion.div
          initial={false}
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.6 }}
        >
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            Digital Marketing Agency
          </span>
        </motion.div>

        <motion.h1
          initial={false}
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mb-6 text-4xl font-bold leading-tight text-foreground md:text-6xl lg:text-7xl text-balance"
        >
          Grow Your Brand with{" "}
          <span className="gradient-text">Data-Driven</span>{" "}
          Digital Marketing
        </motion.h1>

        <motion.p
          initial={false}
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg text-pretty"
        >
          We help brands and businesses grow through strategic social media
          management, high-converting Meta and Google ad campaigns, and proven
          Instagram growth strategies.
        </motion.p>

        <motion.div
          initial={false}
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110 glow-cyan"
          >
            Get Free Consultation
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>

          <Link
            href="/services"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-secondary px-8 py-3.5 text-sm font-semibold text-foreground transition-all hover:border-primary/30 hover:bg-secondary/80"
          >
            <Play className="h-4 w-4 text-primary" />
            View Services
          </Link>
        </motion.div>

        {/* Trusted by */}
        <motion.div
          initial={false}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 flex flex-col items-center gap-6"
        >
          <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
            Trusted by innovative brands
          </p>

          <div className="flex flex-wrap items-center justify-center gap-8">
            {["TechFlow", "GrowthCo", "BrandLab", "ScaleUp", "DigitalX"].map(
              (brand) => (
                <span
                  key={brand}
                  className="text-sm font-semibold text-muted-foreground/40 transition-colors hover:text-muted-foreground"
                >
                  {brand}
                </span>
              )
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}