import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ToursGrid } from "@/components/tours-grid"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, Tent, Mountain, Compass } from "lucide-react"
import { campingSafaris } from "@/lib/tours-data"
import { StructuredData } from "@/components/structured-data"
import Link from "next/link"

export const metadata = {
  title: "Camping Safaris | Budget Tanzania Safari Adventures - Africa Prince Adventures",
  description:
    "Experience authentic Tanzania camping safaris. Budget-friendly wildlife adventures to Serengeti, Ngorongoro Crater, and Tarangire with genuine outdoor experiences.",
  keywords:
    "camping safari Tanzania, budget safari Tanzania, Serengeti camping, Ngorongoro camping, Tanzania adventure tours",
}

export default function CampingSafarisPage() {
  const breadcrumbData = {
    breadcrumbs: [
      { name: "Home", url: "/" },
      { name: "Camping Safaris", url: "/camping-safaris" },
    ],
  }

  const tourData = {
    title: "Camping Safaris Tanzania",
    description:
      "Experience authentic Tanzania camping safaris. Budget-friendly wildlife adventures to Serengeti, Ngorongoro Crater, and Tarangire.",
    image: "https://africa-prince-adventures.com/images/camping-safari.jpeg",
    price: "1050",
    duration: "P3D",
    inclusions: [
      "Professional safari guide",
      "4x4 safari vehicle with pop-up roof",
      "All park fees and camping fees",
      "Camping equipment (tents, sleeping bags, mattresses)",
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
        <section className="relative py-24 bg-gradient-to-br from-green-600/10 to-green-800/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-6 bg-green-600/10 text-green-700 border-green-600/20">
                Authentic Adventure Experience
              </Badge>

              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
                Camping <span className="text-green-700">Safaris</span>
              </h1>

              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Immerse yourself in the authentic African wilderness with our camping safaris. Sleep under the stars,
                wake to the sounds of nature, and experience Tanzania's incredible wildlife in its most natural setting.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-6 mb-8">
                <div className="flex items-center gap-2">
                  <Tent className="h-5 w-5 text-green-700" />
                  <span className="text-sm font-medium">Authentic Camping</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mountain className="h-5 w-5 text-green-700" />
                  <span className="text-sm font-medium">Wilderness Experience</span>
                </div>
                <div className="flex items-center gap-2">
                  <Compass className="h-5 w-5 text-green-700" />
                  <span className="text-sm font-medium">Expert Guides</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-sm font-medium">Highly Rated</span>
                </div>
              </div>

              <Button asChild size="lg" className="bg-green-700 hover:bg-green-800 text-white font-semibold">
                <Link href="#tours">Explore Camping Adventures</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Why Choose Camping Safaris */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-4xl font-bold mb-6 text-green-700">Why Choose Camping Safaris?</h2>
              <p className="text-lg text-muted-foreground">
                Our camping safaris offer an authentic and budget-friendly way to experience Tanzania's incredible
                wildlife while connecting deeply with nature and local culture.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-700/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Tent className="h-8 w-8 text-green-700" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Authentic Experience</h3>
                <p className="text-muted-foreground">
                  Sleep under the African stars and wake to the sounds of wildlife. Experience the wilderness as it was
                  meant to be experienced.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-700/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mountain className="h-8 w-8 text-green-700" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Budget-Friendly Adventure</h3>
                <p className="text-muted-foreground">
                  Enjoy incredible wildlife experiences without breaking the bank. Our camping safaris offer exceptional
                  value for money.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-700/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Compass className="h-8 w-8 text-green-700" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Close to Nature</h3>
                <p className="text-muted-foreground">
                  Camp in the heart of national parks and conservation areas, giving you unparalleled access to wildlife
                  and natural beauty.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What's Included */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-12 text-green-700">
                What's Included in Our Camping Safaris
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold mb-4">Included:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-700 rounded-full"></div>
                      <span>Professional safari guide</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-700 rounded-full"></div>
                      <span>4x4 safari vehicle with pop-up roof</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-700 rounded-full"></div>
                      <span>All park fees and camping fees</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-700 rounded-full"></div>
                      <span>Camping equipment (tents, sleeping bags, mattresses)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-700 rounded-full"></div>
                      <span>All meals during the safari</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-700 rounded-full"></div>
                      <span>Drinking water throughout the trip</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold mb-4">Not Included:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <span>International flights</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <span>Travel insurance</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <span>Tips for guides and staff</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <span>Personal expenses and souvenirs</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <span>Alcoholic beverages</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <span>Optional activities (Maasai village visits)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tours Grid */}
        <div id="tours">
          <ToursGrid
            tours={campingSafaris}
            title="Our Camping Safari Adventures"
            description="Discover our range of authentic camping safaris, designed to give you an immersive wildlife experience while staying close to nature and within budget."
          />
        </div>
      </main>

      <Footer />
    </>
  )
}
