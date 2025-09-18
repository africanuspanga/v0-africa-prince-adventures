import { AboutSection } from "@/components/about-section"
import { WhyChooseUs } from "@/components/why-choose-us"
import { CallToAction } from "@/components/call-to-action"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us | Africa Prince Adventures Tanzania Safari Company",
  description:
    "Learn about Africa Prince Adventures, a local Tanzania safari company based in Arusha. We specialize in authentic safari experiences led by passionate local experts who know Tanzania by heart.",
  keywords:
    "about Africa Prince Adventures, Tanzania safari company, Arusha safari guide, local safari expert, authentic Tanzania experience",
  openGraph: {
    title: "About Us | Africa Prince Adventures Tanzania Safari Company",
    description:
      "Learn about Africa Prince Adventures, a local Tanzania safari company based in Arusha specializing in authentic safari experiences.",
  },
}

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <div className="relative py-32 bg-muted/30 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="/images/about-page.jpeg"
              alt="Africa Prince Adventures safari with lion and tourists"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>
          <div className="relative container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">About Us</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Learn more about Africa Prince Adventures and our mission to provide authentic safari experiences in
              Tanzania.
            </p>
          </div>
        </div>
        <AboutSection />
        <WhyChooseUs />
        <CallToAction
          title="Ready to Experience Tanzania with Local Experts?"
          description="Our passionate team is ready to share the wonders of Tanzania with you. Contact us today to start planning your authentic African adventure with guides who truly know this incredible country."
        />
      </main>
      <Footer />
    </>
  )
}
