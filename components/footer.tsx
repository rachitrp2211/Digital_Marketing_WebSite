// file: components/footer.tsx
import Link from "next/link"
import { Instagram, Mail, Phone, MessageCircle, ArrowUpRight } from "lucide-react"
import Image from "next/image"

const whatsappLink =
  "https://wa.me/917778079556?text=Hello%20Raj%20Marketing%20Media,%20I%20am%20interested%20in%20your%20digital%20marketing%20services."

const footerLinks = {
  Services: [
    { label: "Social Media Management", href: "/services" },
    { label: "Instagram Growth", href: "/services" },
    { label: "Meta Ads", href: "/services" },
    { label: "Google Ads", href: "/services" },
  ],
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Pricing", href: "/pricing" },
    { label: "Contact", href: "/contact" },
  ],
  Resources: [
    { label: "Free Consultation", href: "/contact" },
    { label: "Case Studies", href: "/portfolio" },
    { label: "Marketing Blog", href: "#" },
    { label: "FAQ", href: "#" },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">

          {/* Brand Section */}
          <div className="lg:col-span-2">

            <Link href="/" className="flex items-center gap-2 mb-4">
              <Image
                src="/logo.jpeg"
                alt="Raj Marketing Media Logo"
                width={80}
                height={80}
                className="h-10 w-10 object-contain"
              />

              <div className="flex flex-col">
                <span className="text-sm font-bold text-foreground leading-none">
                  Raj<span className="text-primary">Marketing</span>
                </span>
                <span className="text-xs text-muted-foreground font-medium">
                  MEDIA
                </span>
              </div>
            </Link>

            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground mb-6">
              We help brands grow through data-driven digital marketing strategies,
              social media management, and high-performance advertising campaigns.
            </p>

            {/* Business Location */}
            <p className="text-sm text-muted-foreground mb-4">
              📍 Ahmedabad, Gujarat, India
            </p>

            {/* Contact Icons */}
            <div className="flex items-center gap-3">

              <a
                href="https://instagram.com/rajmarketingmedia"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-secondary text-muted-foreground transition-all hover:text-primary hover:border-primary/30"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>

              <a
                href="mailto:hello@rajmarketing.media"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-secondary text-muted-foreground transition-all hover:text-primary hover:border-primary/30"
                aria-label="Email"
              >
                <Mail className="h-4 w-4" />
              </a>

              <a
                href="tel:+917778079556"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-secondary text-muted-foreground transition-all hover:text-primary hover:border-primary/30"
                aria-label="Phone"
              >
                <Phone className="h-4 w-4" />
              </a>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-secondary text-muted-foreground transition-all hover:text-green-500 hover:border-green-400"
                aria-label="WhatsApp"
              >
                <MessageCircle className="h-4 w-4" />
              </a>

            </div>

            <p className="mt-4 text-xs text-muted-foreground">
              💬 Chat with us on WhatsApp for quick response.
            </p>

          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>

              <h3 className="mb-4 text-sm font-semibold text-foreground">
                {category}
              </h3>

              <ul className="flex flex-col gap-3">

                {links.map((link) => (
                  <li key={link.label}>

                    <Link
                      href={link.href}
                      className="group flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {link.label}

                      <ArrowUpRight className="h-3 w-3 opacity-0 transition-all group-hover:opacity-100" />

                    </Link>

                  </li>
                ))}

              </ul>

            </div>
          ))}
        </div>

        {/* Bottom Footer */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">

          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Raj Marketing Media. All rights reserved.
          </p>

          <div className="flex gap-6">
            <Link
              href="#"
              className="text-xs text-muted-foreground transition-colors hover:text-primary"
            >
              Privacy Policy
            </Link>

            <Link
              href="#"
              className="text-xs text-muted-foreground transition-colors hover:text-primary"
            >
              Terms of Service
            </Link>
          </div>

        </div>

      </div>
    </footer>
  )
}