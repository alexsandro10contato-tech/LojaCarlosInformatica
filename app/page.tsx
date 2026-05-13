import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Differentials } from "@/components/differentials"
import { Process } from "@/components/process"
import { Gallery } from "@/components/gallery"
import { Reviews } from "@/components/reviews"
import { About } from "@/components/about"
import { Instagram } from "@/components/instagram"
import { Contact } from "@/components/contact"
import { Location } from "@/components/location"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Services />
      <Differentials />
      <Process />
      <Gallery />
      <Reviews />
      <About />
      <Instagram />
      <Contact />
      <Location />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
