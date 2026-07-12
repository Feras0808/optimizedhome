import Navbar from "@/Components/Navbar"
import Hero from "@/Components/hero"
import About from "@/Components/about"
import CTA from "@/Components/cta"
import Contact from "@/Components/contact"
import Footer from "@/Components/footer"
import BackToTop from "@/Components/Backtotop"
import About2 from "@/Components/about2"
import CompanyOverview from "@/Components/CompanyOverview"
import WhyChooseUs from "@/Components/WhyChooseUs"
import Services from "@/Components/Services"

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <CompanyOverview />
      <WhyChooseUs />
      <Services />
      <About2 />
      <CTA />
      <Contact />
      <Footer />
      <BackToTop />
    </main>
  )
}