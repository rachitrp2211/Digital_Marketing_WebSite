import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ServicesContent } from "@/components/services/services-content"

export const metadata: Metadata = {
  title: "Services | NexGen Digital",
  description: "Explore our digital marketing services: social media management, Instagram growth, Meta ads, Google ads, and brand marketing strategy.",
}

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main>
        <ServicesContent />
      </main>
      <Footer />
    </>
  )
}
