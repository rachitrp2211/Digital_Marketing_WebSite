// components/contact/contact-content.tsx
"use client"

import { useState } from "react"
import { SectionHeader } from "@/components/section-header"
import { FadeInUp, StaggerContainer, StaggerItem } from "@/components/motion-wrapper"
import { Mail, MessageCircle, Instagram, Phone, Send, CheckCircle2 } from "lucide-react"

const contactMethods = [
  {
    icon: MessageCircle,
    title: "WhatsApp",
    value: "+91 77780 79556",
    href: "https://wa.me/917778079556",
    description: "Quick responses, usually within 1 hour",
  },
  {
    icon: Mail,
    title: "Email",
    value: "rajt55029@gmail.com",
    href: "mailto:rajt55029@gmail.com",
    description: "For detailed inquiries and proposals",
  },
  {
    icon: Instagram,
    title: "Instagram",
    value: "@raj_marketingmedia",
    href: "https://instagram.com/raj_marketingmedia",
    description: "Follow us for marketing tips and updates",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+91 77780 79556",
    href: "tel:+917778079556",
    description: "Available Mon-Fri, 10am-6pm IST",
  },
]

export function ContactContent() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section className="relative px-6 pt-32 pb-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-1/4 top-0 h-96 w-96 rounded-full bg-primary/5 blur-[128px]" />
        <div className="absolute left-1/4 bottom-0 h-96 w-96 rounded-full bg-[#8b5cf6]/5 blur-[128px]" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <SectionHeader
          badge="Contact Us"
          title="Let's Grow Your Brand Together"
          description="Ready to take your digital presence to the next level? Book a free consultation or send us a message."
        />

        <div className="grid gap-12 lg:grid-cols-5">
          {/* Contact Form */}
          <FadeInUp className="lg:col-span-3">
            <div className="glass rounded-2xl p-8 md:p-10">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <CheckCircle2 className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="mb-2 text-2xl font-bold text-foreground">Message Sent!</h3>
                  <p className="max-w-sm text-muted-foreground">
                    Thank you for reaching out. We will get back to you within 24 hours with a personalized strategy proposal.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 text-sm font-semibold text-primary hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="name" className="text-sm font-medium text-foreground">
                        Full Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        placeholder="John Doe"
                        className="rounded-lg border border-border bg-secondary px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="email" className="text-sm font-medium text-foreground">
                        Email Address
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="john@example.com"
                        className="rounded-lg border border-border bg-secondary px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="company" className="text-sm font-medium text-foreground">
                      Company / Brand Name
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      placeholder="Your Brand"
                      className="rounded-lg border border-border bg-secondary px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="service" className="text-sm font-medium text-foreground">
                      Service Interested In
                    </label>
                    <select
                      id="service"
                      name="service"
                      className="rounded-lg border border-border bg-secondary px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Select a service
                      </option>
                      <option value="social-media">Social Media Management</option>
                      <option value="instagram">Instagram Growth</option>
                      <option value="meta-ads">Meta Ads Management</option>
                      <option value="google-ads">Google Ads Campaigns</option>
                      <option value="brand-strategy">Brand Marketing Strategy</option>
                      <option value="full-service">Full Service Package</option>
                      <option value="website-development">Website Development</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="text-sm font-medium text-foreground">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      placeholder="Tell us about your brand and goals..."
                      className="resize-none rounded-lg border border-border bg-secondary px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                    />
                  </div>
                  <button
                    type="submit"
                    className="group inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110 glow-cyan"
                  >
                    <Send className="h-4 w-4" />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </FadeInUp>

          {/* Contact Methods */}
          <div className="lg:col-span-2">
            <StaggerContainer className="flex flex-col gap-4">
              {contactMethods.map((method) => (
                <StaggerItem key={method.title}>
                  <a
                    href={method.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass group flex items-start gap-4 rounded-2xl p-5 transition-all hover:glow-cyan hover:border-primary/20"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                      <method.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-foreground">{method.title}</h3>
                      <p className="text-sm font-medium text-primary">{method.value}</p>
                      <p className="mt-1 text-xs text-muted-foreground">{method.description}</p>
                    </div>
                  </a>
                </StaggerItem>
              ))}
            </StaggerContainer>

            {/* WhatsApp CTA */}
            <FadeInUp delay={0.3} className="mt-6">
              <a
                href="https://wa.me/917778079556"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-2xl border border-green-500/20 bg-green-500/10 p-5 text-sm font-semibold text-green-400 transition-all hover:bg-green-500/15"
              >
                <MessageCircle className="h-5 w-5" />
                Chat on WhatsApp for Quick Response
              </a>
            </FadeInUp>
          </div>
        </div>
      </div>
    </section>
  )
}
