import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ToursGrid } from "@/components/tours-grid"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, Shield, Award, Users } from "lucide-react"
import { lodgeSafaris } from "@/lib/tours-data"
import { StructuredData } from "@/components/structured-data"
import Link from "next/link"

export const metadata = {
  title: "Private Lodge Safaris | Luxury Tanzania Safari Tours - Africa Prince Adventures",
  description:
    "Experience luxury Tanzania safaris with private lodge accommodations. Premium wildlife tours to Serengeti, Ngorongoro Crater, and Tarangire with expert guides.",
  keywords:
    "luxury safari Tanzania, private lodge safari, Serengeti luxury tours, Ngorongoro luxury safari, Tanzania premium tours",
}

export default function LodgeSafarisPage() {
  const breadcrumbData = {
    breadcrumbs: [
      { name: "Home", url: "/" },
      { name: "Lodge Safaris", url: "/lodge-safaris" },
    ],
  }

  const tourData = {
    title: "Private Lodge Safaris Tanzania",
    description:
      "Experience luxury Tanzania safaris with private lodge accommodations. Premium wildlife tours to Serengeti, Ngorongoro Crater, and Tarangire.",
    image: "https://africa-prince-adventures.com/images/lodge-safari.jpeg",
    price: "1400",
    duration: "P3D",
    inclusions: [
      "Luxury lodge accommodations",
      "Professional English-speaking guide",
      "4x4 safari vehicle with viewing roof",
      "All park fees and entrance fees",
      "All meals during safari",
    ],
  }

  return (
    <>
      <StructuredData type="breadcrumb" data={breadcrumbData} />
      <StructuredData type="tour" data={tourData} />
      <Header />

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-24 bg-gradient-to-br from-brand-orange/10 to-brand-orange/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-6 bg-brand-orange/10 text-brand-orange border-brand-orange/20">
                Premium Safari Experience
              </Badge>

              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
                Private Lodge <span className="text-brand-orange">Safaris</span>
              </h1>

              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Experience Tanzania's wildlife in ultimate comfort with our luxury lodge safaris. Stay in premium
                accommodations while exploring the Serengeti, Ngorongoro Crater, and other iconic destinations with
                expert guides.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-6 mb-8">
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-brand-orange" />
                  <span className="text-sm font-medium">Luxury Accommodations</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-brand-orange" />
                  <span className="text-sm font-medium">Expert Guides</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-brand-orange" />
                  <span className="text-sm font-medium">Small Groups</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-sm font-medium">5-Star Rated</span>
                </div>
              </div>

              <Button asChild size="lg" className="bg-brand-orange hover:bg-brand-orange/90 text-white font-semibold">
                <Link href="#tours">Explore Our Safaris</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Why Choose Lodge Safaris */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-4xl font-bold mb-6 text-brand-orange">Why Choose Private Lodge Safaris?</h2>
              <p className="text-lg text-muted-foreground">
                Our luxury lodge safaris offer the perfect blend of adventure and comfort, ensuring you experience
                Tanzania's incredible wildlife without compromising on luxury.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-brand-orange" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Luxury Accommodations</h3>
                <p className="text-muted-foreground">
                  Stay in premium lodges and tented camps with world-class amenities, gourmet dining, and stunning views
                  of the African wilderness.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-brand-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-brand-orange" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Expert Naturalist Guides</h3>
                <p className="text-muted-foreground">
                  Our professional guides are passionate about wildlife and have extensive knowledge of animal behavior,
                  ensuring exceptional game viewing experiences.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-brand-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-brand-orange" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Personalized Service</h3>
                <p className="text-muted-foreground">
                  Small group sizes and personalized itineraries ensure you get the most out of your safari experience
                  with attention to every detail.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Tours Grid */}
        <div id="tours">
          <ToursGrid
            tours={lodgeSafaris}
            title="Our Private Lodge Safari Collection"
            description="Choose from our carefully curated selection of luxury safari experiences, each designed to showcase Tanzania's incredible wildlife and landscapes in ultimate comfort."
          />
        </div>
      </main>

      <Footer />
    </>
  )
}
