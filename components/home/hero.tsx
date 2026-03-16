// file: components/home/hero.tsx
"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, MessageCircle } from "lucide-react"

const whatsappLink =
  "https://wa.me/917778079556?text=Hello%20Raj%20Marketing%20Media,%20I%20want%20to%20grow%20my%20brand%20with%20digital%20marketing."

export function Hero() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-24">

      {/* Background Gradient */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/3 top-1/3 h-[500px] w-[500px] rounded-full bg-primary/10 blur-[160px]" />
        <div className="absolute bottom-1/4 right-1/4 h-[450px] w-[450px] rounded-full bg-purple-500/10 blur-[160px]" />
      </div>

      {/* Grid Pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(6,182,212,0.3) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(6,182,212,0.3) 1px, transparent 1px)`,
          backgroundSize: "72px 72px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-5xl text-center">

        {/* Tag */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.6 }}
        >
          <span className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary backdrop-blur-sm">
            Digital Marketing Agency
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mb-8 text-4xl font-bold leading-tight text-foreground md:text-6xl lg:text-7xl"
        >
          Grow Your Brand with{" "}
          <span className="bg-gradient-to-r from-primary via-cyan-400 to-purple-400 bg-clip-text text-transparent">
            High-Converting
          </span>{" "}
          Digital Marketing
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto mb-12 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg"
        >
          We help businesses grow through strategic social media management,
          powerful Meta & Google ad campaigns, and proven Instagram growth
          strategies designed to generate real leads and customers.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
        >

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:scale-[1.02] hover:brightness-110"
          >
            <MessageCircle className="h-4 w-4" />
            Chat on WhatsApp
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>

          <Link
            href="/services"
            className="inline-flex items-center gap-2 rounded-xl border border-border bg-secondary px-8 py-3.5 text-sm font-semibold text-foreground transition-all hover:border-primary/30 hover:bg-secondary/80"
          >
            View Services
          </Link>

        </motion.div>

        {/* Trust Metrics */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.7 }}
          className="mt-20 flex flex-wrap justify-center gap-10"
        >

          <div className="text-center">
            <p className="text-2xl font-bold text-foreground">50+</p>
            <p className="text-xs text-muted-foreground">
              Campaigns Managed
            </p>
          </div>

          <div className="text-center">
            <p className="text-2xl font-bold text-foreground">20+</p>
            <p className="text-xs text-muted-foreground">
              Brands Supported
            </p>
          </div>

          <div className="text-center">
            <p className="text-2xl font-bold text-foreground">3+</p>
            <p className="text-xs text-muted-foreground">
              Years Experience
            </p>
          </div>

        </motion.div>
      </div>
    </section>
  )
}