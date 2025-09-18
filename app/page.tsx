import { HeroSection } from "@/components/hero-section"
import { FeaturedTours } from "@/components/featured-tours"
import { Destinations } from "@/components/destinations"
import { AboutSection } from "@/components/about-section"
import { Testimonials } from "@/components/testimonials"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { StructuredData } from "@/components/structured-data"

export default function HomePage() {
  const breadcrumbData = {
    breadcrumbs: [{ name: "Home", url: "/" }],
  }

  return (
    <>
      <StructuredData type="breadcrumb" data={breadcrumbData} />
      <Header />
      <main>
        <HeroSection />
        <FeaturedTours />
        <Destinations />
        <AboutSection />
        <Testimonials />
      </main>
      <Footer />
    </>
  )
}
