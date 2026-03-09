"use client"

import { useEffect, useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { TrendingUp, Users, Zap, Award } from "lucide-react"

const stats = [
  { icon: TrendingUp, value: 250, suffix: "+", label: "Successful Campaigns", prefix: "" },
  { icon: Users, value: 80, suffix: "+", label: "Happy Clients", prefix: "" },
  { icon: Zap, value: 5, suffix: "x", label: "Average Growth Rate", prefix: "" },
  { icon: Award, value: 12, suffix: "+", label: "Industry Awards", prefix: "" },
]

function AnimatedCounter({
  value,
  suffix,
  prefix,
}: {
  value: number
  suffix: string
  prefix: string
}) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return

    let start = 0
    const duration = 2000
    const startTime = performance.now()

    const animate = (time: number) => {
      const progress = Math.min((time - startTime) / duration, 1)
      const current = Math.floor(progress * value)

      setCount(current)

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [isInView, value])

  return (
    <span ref={ref} className="text-4xl font-bold text-foreground md:text-5xl">
      {prefix}
      {count}
      {suffix}
    </span>
  )
}

export function Stats() {
  return (
    <section className="relative py-24 px-6">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 gap-8 lg:grid-cols-4"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={false}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass group flex flex-col items-center rounded-2xl px-6 py-8 text-center transition-all hover:glow-cyan"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                <stat.icon className="h-6 w-6" />
              </div>

              <AnimatedCounter
                value={stat.value}
                suffix={stat.suffix}
                prefix={stat.prefix}
              />

              <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}