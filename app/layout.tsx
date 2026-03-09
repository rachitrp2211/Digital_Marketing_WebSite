// app/layout.tsx
import type { Metadata, Viewport } from "next"
import { Inter, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
})

export const metadata: Metadata = {
  title: "Raj Marketing Media | Data-Driven Digital Marketing Agency",
  description:
    "Grow your brand with data-driven digital marketing. Raj Marketing Media helps brands grow through social media marketing, Instagram growth, Meta ads, and Google ads management.",
  keywords: [
    "digital marketing",
    "social media management",
    "Instagram growth",
    "Meta ads",
    "Google ads",
    "brand marketing",
  ],

  icons: {
    icon: [
      {
        url: "/favicon_32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/icon_192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "/icon_512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "/apple_touch_icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
}

export const viewport: Viewport = {
  themeColor: "#050a0e",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${geistMono.variable}`}>
      <body className="font-sans antialiased">
        <Navbar />

        <main>{children}</main>

        <Footer />
        <Analytics />
      </body>
    </html>
  )
}