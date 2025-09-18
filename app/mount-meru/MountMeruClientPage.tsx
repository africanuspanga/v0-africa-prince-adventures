"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { BookingForm } from "@/components/booking-form"
import { Mountain, Clock, TreePine, Eye, Star } from "lucide-react"
import Image from "next/image"

const meruRoutes = [
  {
    name: "3-Day Mount Meru Trek",
    duration: "3 days / 2 nights",
    difficulty: "Moderate-Hard",
    price: "$800 - $1,200",
    description:
      "A challenging but rewarding 3-day trek to the summit of Tanzania's second highest peak. Perfect for acclimatization before Kilimanjaro.",
    highlights: [
      "Quick summit attempt",
      "Great Kilimanjaro preparation",
      "Diverse wildlife viewing",
      "Spectacular sunrise views",
    ],
    itinerary: [
      "Day 1: Momella Gate to Miriakamba Hut (2,500m)",
      "Day 2: Miriakamba to Saddle Hut (3,500m) - Summit attempt (4,566m)",
      "Day 3: Saddle Hut to Momella Gate",
    ],
  },
  {
    name: "4-Day Mount Meru Trek",
    duration: "4 days / 3 nights",
    difficulty: "Moderate",
    price: "$1,000 - $1,500",
    description:
      "A more relaxed 4-day trek allowing better acclimatization and more time to enjoy the diverse ecosystems and wildlife.",
    highlights: ["Better acclimatization", "More wildlife viewing time", "Relaxed pace", "Higher success rate"],
    itinerary: [
      "Day 1: Momella Gate to Miriakamba Hut (2,500m)",
      "Day 2: Miriakamba to Saddle Hut (3,500m)",
      "Day 3: Summit attempt (4,566m) - Return to Saddle Hut",
      "Day 4: Saddle Hut to Momella Gate",
    ],
  },
]

export function MountMeruClientPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false)
  const [selectedRoute, setSelectedRoute] = useState<{ name: string; price: string } | null>(null)

  const handleBookNow = (routeName: string, price: string) => {
    setSelectedRoute({ name: routeName, price })
    setIsBookingOpen(true)
  }

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <div className="relative py-32 bg-gradient-to-r from-brand-olive to-brand-orange text-white">
          <div className="absolute inset-0">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/istockphoto-182401918-612x612.jpg-Vn4vqwRfNIdsvmUXUXrOwPkqARDisU.jpeg"
              alt="Mount Meru crater rim with dramatic volcanic landscape"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">Mount Meru Trekking</h1>
              <p className="text-xl md:text-2xl mb-8 text-balance opacity-90">
                Tanzania's second highest peak offers stunning views, diverse wildlife, and the perfect preparation for
                Kilimanjaro.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm mb-8">
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                  4,566m / 14,980ft
                </Badge>
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                  3-4 Day Routes
                </Badge>
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                  Wildlife & Views
                </Badge>
              </div>
              <Button
                size="lg"
                className="bg-white text-brand-olive hover:bg-gray-100 px-8 py-3 text-lg font-semibold"
                onClick={() => setIsBookingOpen(true)}
              >
                Book Your Mount Meru Trek
              </Button>
            </div>
          </div>
        </div>

        {/* About Mount Meru Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-brand-olive">About Mount Meru</h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Mount Meru is Tanzania's second highest mountain at 4,566 meters and is located within Arusha National
                  Park. This spectacular volcanic mountain offers incredible biodiversity, stunning views of Mount
                  Kilimanjaro, and serves as excellent preparation for those planning to climb Kilimanjaro.
                </p>
              </div>

              <div className="mb-12 relative h-64 md:h-80 rounded-lg overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/istockphoto-2178018130-612x612.jpg-xU8y8z546a6zflo1m7ZL26updbK2Dw.jpeg"
                  alt="Mount Meru scenic view with lush vegetation"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                <Card className="text-center">
                  <CardContent className="p-6">
                    <Mountain className="h-12 w-12 mx-auto mb-4 text-brand-orange" />
                    <h3 className="font-bold text-brand-olive mb-2">Volcanic Peak</h3>
                    <p className="text-sm text-muted-foreground">Active stratovolcano with dramatic crater views</p>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardContent className="p-6">
                    <TreePine className="h-12 w-12 mx-auto mb-4 text-brand-orange" />
                    <h3 className="font-bold text-brand-olive mb-2">Diverse Ecosystems</h3>
                    <p className="text-sm text-muted-foreground">From montane forest to alpine desert</p>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardContent className="p-6">
                    <Eye className="h-12 w-12 mx-auto mb-4 text-brand-orange" />
                    <h3 className="font-bold text-brand-olive mb-2">Wildlife Viewing</h3>
                    <p className="text-sm text-muted-foreground">Buffalo, giraffes, colobus monkeys, and more</p>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardContent className="p-6">
                    <Star className="h-12 w-12 mx-auto mb-4 text-brand-orange" />
                    <h3 className="font-bold text-brand-olive mb-2">Kilimanjaro Views</h3>
                    <p className="text-sm text-muted-foreground">Spectacular views of Africa's highest peak</p>
                  </CardContent>
                </Card>
              </div>

              <div className="mb-16 relative h-64 md:h-80 rounded-lg overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/istockphoto-2204943663-612x612.jpg-hyvVTPy6sQlSIBlec4JMsN7Kz8ARur.jpeg"
                  alt="Mount Meru crater and summit landscape above clouds"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Routes Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-brand-olive">Mount Meru Trekking Routes</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Choose between our 3-day or 4-day Mount Meru trekking options. Both routes offer incredible experiences
                with the 4-day option providing better acclimatization and more time to enjoy the mountain.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {meruRoutes.map((route, index) => (
                <Card
                  key={index}
                  className="hover:shadow-xl transition-all duration-300 border-2 hover:border-brand-orange/20"
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="p-3 rounded-full bg-brand-orange">
                          <Clock className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-xl text-brand-olive">{route.name}</CardTitle>
                          <p className="text-sm text-muted-foreground">{route.duration}</p>
                        </div>
                      </div>
                      <Badge variant="outline" className="text-brand-orange border-brand-orange">
                        {route.price}
                      </Badge>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    <p className="text-muted-foreground leading-relaxed">{route.description}</p>

                    <div className="grid grid-cols-2 gap-4 py-4 border-y">
                      <div className="text-center">
                        <div className="text-sm text-muted-foreground">Duration</div>
                        <div className="font-semibold text-brand-olive">{route.duration}</div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm text-muted-foreground">Difficulty</div>
                        <div className="font-semibold text-brand-orange">{route.difficulty}</div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-brand-olive mb-3">Route Highlights:</h4>
                      <ul className="space-y-2">
                        {route.highlights.map((highlight, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-brand-olive mb-3">Itinerary:</h4>
                      <ul className="space-y-2">
                        {route.itinerary.map((day, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground">
                            <span className="font-medium text-brand-orange">{day.split(":")[0]}:</span>
                            <span className="ml-1">{day.split(":")[1]}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button
                      className="w-full bg-brand-orange hover:bg-brand-orange/90 text-white"
                      onClick={() => handleBookNow(route.name, route.price)}
                    >
                      Book {route.name}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-16 relative h-64 md:h-80 rounded-lg overflow-hidden max-w-4xl mx-auto">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/istockphoto-1388932934-612x612.jpg-WwhvGkEfrsHAEIHPPnfEuf7sIX3q55.jpeg"
                alt="Hiker on Mount Meru with Mount Kilimanjaro in background"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        <section className="py-20 bg-brand-olive text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Climb Mount Meru?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Experience Tanzania's second highest peak with our expert guides. Perfect as a standalone adventure or as
              preparation for Kilimanjaro. Contact us to plan your Mount Meru trek today.
            </p>
            <div className="flex justify-center">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-brand-olive px-8 py-3 text-lg font-semibold bg-transparent"
                onClick={() => (window.location.href = "/contact")}
              >
                Contact Us
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      {/* Booking Form Modal */}
      <BookingForm
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        selectedTour={selectedRoute?.name || "Mount Meru Trek"}
        tourPrice={selectedRoute?.price || "Contact for pricing"}
      />
    </>
  )
}
