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
  display: "swap",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: "Raj Marketing Media",
    template: "%s | Raj Marketing Media",
  },

  description:
    "Raj Marketing Media helps brands grow with data-driven digital marketing strategies, social media management, Instagram growth, Meta Ads, and Google Ads.",

  keywords: [
    "digital marketing agency",
    "social media management",
    "Instagram growth",
    "Meta ads management",
    "Google ads marketing",
    "digital marketing India",
  ],

  metadataBase: new URL("https://rajmarketingmedia.com"),

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

  openGraph: {
    title: "Raj Marketing Media",
    description:
      "Grow your brand with data-driven digital marketing and high-performance advertising campaigns.",
    url: "https://rajmarketingmedia.com",
    siteName: "Raj Marketing Media",
    locale: "en_US",
    type: "website",
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
      <body className="font-sans antialiased bg-background text-foreground">
        <Navbar />

        <main className="min-h-screen">{children}</main>

        

        <Analytics />
      </body>
    </html>
  )
}