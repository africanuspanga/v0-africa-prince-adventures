import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { WhyChooseUs } from "@/components/why-choose-us"
import { FeaturedTours } from "@/components/featured-tours"
import { NationalParksSection } from "@/components/national-parks-section"
import { SpecialTours } from "@/components/special-tours"
import { Testimonials } from "@/components/testimonials"
import { SimpleCTASection } from "@/components/simple-cta-section"
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
        {/* Hero Section */}
        <HeroSection />

        {/* About - "Karibu Tanzania! Travel With Africa Prince Adventures" section */}
        <AboutSection />

        {/* Why Choose Us? */}
        <WhyChooseUs />

        {/* Our Safari Packages - keep it as it is */}
        <FeaturedTours />

        {/* Explore Tanzania's Premier National Parks section */}
        <NationalParksSection />

        {/* Special Tours We Offer in Tanzania */}
        <SpecialTours />

        {/* What Our Guests Say - keep it as it is */}
        <Testimonials />

        {/* Ready to Start Your African Adventure? - CTA section with CONTACT US button */}
        <SimpleCTASection />
      </main>
      <Footer />
    </>
  )
}
