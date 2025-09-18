import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Mountain, Clock, Star } from "lucide-react"
import { Header } from "@/components/header"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Tanzania Mountain Trekking | Kilimanjaro, Mount Meru & Volcano Climbing Tours",
  description:
    "Experience Tanzania's best mountain trekking adventures. Kilimanjaro routes, Mount Meru climbing, Oldoinyo Lengai volcano trek, and Usambara Mountains with expert guides from Arusha.",
  keywords:
    "Tanzania mountain trekking, Kilimanjaro climbing, Mount Meru trek, Oldoinyo Lengai volcano, Usambara mountains, Lushoto trekking, Tanzania hiking tours, mountain climbing Tanzania",
  metadataBase: new URL("https://africa-prince-adventures.com"),
  alternates: {
    canonical: "/trekking",
  },
  openGraph: {
    title: "Tanzania Mountain Trekking | Kilimanjaro, Mount Meru & Volcano Climbing Tours",
    description:
      "Experience Tanzania's best mountain trekking adventures. Kilimanjaro routes, Mount Meru climbing, Oldoinyo Lengai volcano trek, and Usambara Mountains.",
    url: "https://africa-prince-adventures.com/trekking",
    siteName: "Africa Prince Adventures",
    images: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-09-14%20at%2000.38.00-RGbm9e0cqcaffZXRKHVt0jHcsEHx8y.png",
        width: 1200,
        height: 630,
        alt: "Mount Kilimanjaro Uhuru Peak summit sign",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tanzania Mountain Trekking | Kilimanjaro & Mount Meru Climbing",
    description:
      "Experience Tanzania's best mountain trekking adventures with expert guides. Kilimanjaro routes, Mount Meru, and volcano climbing.",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-09-14%20at%2000.38.00-RGbm9e0cqcaffZXRKHVt0jHcsEHx8y.png",
    ],
  },
}

export default function TrekkingPage() {
  const trekkingRoutes = [
    {
      title: "Mount Kilimanjaro",
      subtitle: "Africa's Highest Peak",
      description: "Conquer the roof of Africa with 5 different routes to choose from",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Kilimanjaro.jpg-4x3vg7xwJJ3MYjOQm9QxWAsqMdkMwI.jpeg",
      routes: [
        { name: "Marangu Route", days: "5-6 Days", difficulty: "Moderate", price: "$1,200-$2,500" },
        { name: "Machame Route", days: "6-7 Days", difficulty: "Challenging", price: "$1,400-$2,800" },
        { name: "Lemosho Route", days: "7-8 Days", difficulty: "Moderate", price: "$1,600-$3,200" },
        { name: "Rongai Route", days: "6-7 Days", difficulty: "Moderate", price: "$1,500-$3,000" },
        { name: "Umbwe Route", days: "5-6 Days", difficulty: "Very Hard", price: "$1,400-$2,800" },
      ],
      href: "/kilimanjaro",
      badge: "Most Popular",
    },
    {
      title: "Mount Meru",
      subtitle: "Tanzania's Second Highest",
      description: "Perfect acclimatization trek before Kilimanjaro or standalone adventure",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mount%20mERU.jpg-CYQamUvdYG4HSoFNEPTsllmQ50tz3F.jpeg",
      routes: [
        { name: "3-Day Route", days: "3 Days", difficulty: "Moderate", price: "$800-$1,200" },
        { name: "4-Day Route", days: "4 Days", difficulty: "Moderate", price: "$900-$1,400" },
      ],
      href: "/mount-meru",
      badge: "Great Training",
    },
    {
      title: "Oldonyo Lengai",
      subtitle: "Mountain of God",
      description: "Active volcano trek offering unique night climbing experience",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/lengai.jpg-ypx4fgTc2ktUCn29VRlV8pc4InoZJN.jpeg",
      routes: [{ name: "Night Climb", days: "1-2 Days", difficulty: "Hard", price: "$400-$800" }],
      href: "/trekking/oldonyo-lengai",
      badge: "Active Volcano",
    },
    {
      title: "Lushoto Mountains",
      subtitle: "Usambara Range",
      description: "Lush green mountains with waterfalls and traditional villages",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Lushoto.jpg-yD9HWI241XPGiKbHkRtzTnVVqRSkE9.jpeg",
      routes: [{ name: "Village Trek", days: "2-3 Days", difficulty: "Easy", price: "$300-$600" }],
      href: "/trekking/lushoto",
      badge: "Cultural Experience",
    },
    {
      title: "Usambara Mountains",
      subtitle: "Eastern Arc Mountains",
      description: "Biodiversity hotspot with endemic species and scenic viewpoints",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Usambara.jpg-FhnBmR8n0qWKpP7Mpa60wUSToSEu5k.jpeg",
      routes: [{ name: "Forest Trek", days: "2-4 Days", difficulty: "Easy-Moderate", price: "$350-$700" }],
      href: "/trekking/usambara",
      badge: "Biodiversity",
    },
  ]

  return (
    <>
      <Header />
      <div className="min-h-screen">
        {/* Hero Header */}
        <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-09-14%20at%2000.38.00-RGbm9e0cqcaffZXRKHVt0jHcsEHx8y.png"
              alt="Mount Kilimanjaro Uhuru Peak summit sign"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>

          <div className="relative z-10 container mx-auto px-4 text-center text-white">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">Mountain Trekking Adventures</h1>
              <p className="text-xl md:text-2xl mb-8 text-balance max-w-3xl mx-auto leading-relaxed">
                Discover Tanzania's magnificent peaks and experience the adventure of a lifetime
              </p>
            </div>
          </div>
        </section>

        {/* Trekking Routes List */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Choose Your Adventure</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                From the iconic Kilimanjaro to hidden gems, explore Tanzania's diverse mountain landscapes
              </p>
            </div>

            <div className="grid gap-8 md:gap-12">
              {trekkingRoutes.map((mountain, index) => (
                <Card key={mountain.title} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  <div className={`grid md:grid-cols-2 gap-0 ${index % 2 === 1 ? "md:grid-flow-col-dense" : ""}`}>
                    {/* Image */}
                    <div className={`relative h-64 md:h-full ${index % 2 === 1 ? "md:col-start-2" : ""}`}>
                      <Image
                        src={mountain.image || "/placeholder.svg"}
                        alt={mountain.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-brand-orange text-white">{mountain.badge}</Badge>
                      </div>
                    </div>

                    {/* Content */}
                    <CardContent className="p-8 flex flex-col justify-center">
                      <div className="mb-6">
                        <h3 className="text-2xl md:text-3xl font-bold mb-2">{mountain.title}</h3>
                        <p className="text-brand-orange font-semibold mb-3">{mountain.subtitle}</p>
                        <p className="text-gray-600 mb-6">{mountain.description}</p>
                      </div>

                      {/* Routes */}
                      <div className="mb-6">
                        <h4 className="font-semibold mb-3 flex items-center">
                          <Mountain className="w-4 h-4 mr-2" />
                          Available Routes
                        </h4>
                        <div className="space-y-2">
                          {mountain.routes.map((route) => (
                            <div
                              key={route.name}
                              className="flex justify-between items-center text-sm bg-gray-50 p-3 rounded"
                            >
                              <span className="font-medium">{route.name}</span>
                              <div className="flex items-center space-x-4 text-gray-600">
                                <span className="flex items-center">
                                  <Clock className="w-3 h-3 mr-1" />
                                  {route.days}
                                </span>
                                <span className="flex items-center">
                                  <Star className="w-3 h-3 mr-1" />
                                  {route.difficulty}
                                </span>
                                <span className="font-semibold text-brand-orange">{route.price}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <Button asChild className="bg-brand-orange hover:bg-brand-orange/90 text-white">
                        <Link href={mountain.href} className="flex items-center">
                          Explore Routes
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                      </Button>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-brand-orange text-white">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready for Your Mountain Adventure?</h2>
              <p className="text-xl mb-8 opacity-90">
                Let our experienced guides help you choose the perfect trekking route and create memories that will last
                a lifetime.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-brand-orange hover:bg-gray-100 font-semibold px-8 py-6"
                >
                  <Link href="/contact">Get Free Consultation</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-brand-orange font-semibold px-8 py-6 bg-transparent"
                >
                  <Link href="/about">Meet Our Guides</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
