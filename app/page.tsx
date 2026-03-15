import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Stats } from "@/components/stats"
import { Products } from "@/components/products"
import { Story } from "@/components/story"
import { Testimonials } from "@/components/testimonials"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Stats />
      <Products />
      <Story />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  )
}
