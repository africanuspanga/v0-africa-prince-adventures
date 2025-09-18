"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Mountain, Clock, Users, TrendingUp, MapPin, Star } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { BookingForm } from "@/components/booking-form"

const kilimanjaroRoutes = [
  {
    name: "Marangu Route",
    nickname: "Coca-Cola Route",
    duration: "5-6 days",
    difficulty: "Moderate",
    success: "65%",
    price: "$1,200 - $2,500",
    basePrice: 1200,
    description:
      "The most budget-friendly route with hut accommodations instead of camping. Known as the 'Coca-Cola Route' due to its popularity and relative ease.",
    highlights: [
      "Hut accommodations with beds",
      "Most budget-friendly option",
      "Good for beginners",
      "Shorter duration",
    ],
    icon: Mountain,
    color: "bg-blue-500",
  },
  {
    name: "Machame Route",
    nickname: "Whiskey Route",
    duration: "6-7 days",
    difficulty: "Moderate-Hard",
    success: "85%",
    price: "$1,400 - $2,800",
    basePrice: 1400,
    description:
      "The most popular route offering spectacular scenery and excellent acclimatization. Known as the 'Whiskey Route' for being more challenging than Marangu.",
    highlights: ["Most popular route", "Spectacular scenery", "Great acclimatization profile", "High success rate"],
    icon: TrendingUp,
    color: "bg-green-500",
  },
  {
    name: "Lemosho Route",
    nickname: "The Scenic Route",
    duration: "7-9 days",
    difficulty: "Moderate-Hard",
    success: "90%",
    price: "$1,600 - $3,200",
    basePrice: 1600,
    description:
      "Highly recommended for its scenic beauty and excellent acclimatization profile. Approaches from the west with stunning views.",
    highlights: ["Most scenic route", "Excellent acclimatization", "Less crowded initially", "Highest success rate"],
    icon: Star,
    color: "bg-purple-500",
  },
  {
    name: "Rongai Route",
    nickname: "The Dry Route",
    duration: "6-7 days",
    difficulty: "Moderate",
    success: "80%",
    price: "$1,400 - $2,900",
    basePrice: 1400,
    description:
      "Approaches from the north and is known for being drier with less traffic. Good option during rainy season.",
    highlights: ["Driest route", "Less crowded", "Good for rainy season", "Gradual ascent"],
    icon: MapPin,
    color: "bg-orange-500",
  },
  {
    name: "Northern Circuit Route",
    nickname: "The Grand Traverse",
    duration: "9-10 days",
    difficulty: "Moderate",
    success: "95%",
    price: "$2,200 - $4,200",
    basePrice: 2200,
    description:
      "The longest route with the highest summit success rate due to extended acclimatization time. Offers 360-degree views of Kilimanjaro.",
    highlights: ["Highest success rate", "Best acclimatization", "360-degree mountain views", "Most remote experience"],
    icon: Clock,
    color: "bg-indigo-500",
  },
  {
    name: "Umbwe Route",
    nickname: "The Steep Route",
    duration: "5-7 days",
    difficulty: "Very Hard",
    success: "60%",
    price: "$1,200 - $2,600",
    basePrice: 1200,
    description:
      "The steepest and most challenging route, recommended only for experienced trekkers. Direct and demanding ascent.",
    highlights: ["Most challenging route", "Steepest ascent", "For experienced climbers only", "Less crowded"],
    icon: Users,
    color: "bg-red-500",
  },
]

export default function KilimanjaroClientPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false)
  const [selectedRoute, setSelectedRoute] = useState<(typeof kilimanjaroRoutes)[0] | null>(null)

  const handleBookRoute = (route: (typeof kilimanjaroRoutes)[0]) => {
    setSelectedRoute(route)
    setIsBookingOpen(true)
  }

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <div className="relative py-32 bg-gradient-to-r from-brand-olive to-brand-orange text-white">
          <div className="absolute inset-0 bg-black/30" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">Conquer Mount Kilimanjaro</h1>
              <p className="text-xl md:text-2xl mb-8 text-balance opacity-90">
                Africa's highest peak awaits. Choose your route to the Roof of Africa with our expert mountain guides.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm mb-8">
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                  5,895m / 19,341ft
                </Badge>
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                  6 Different Routes
                </Badge>
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                  Expert Local Guides
                </Badge>
              </div>
              <div className="flex justify-center">
                <Button
                  size="lg"
                  className="bg-brand-orange hover:bg-brand-orange/90 text-white font-semibold"
                  onClick={() => setIsBookingOpen(true)}
                >
                  Book Your Kilimanjaro Trek
                </Button>
              </div>
            </div>
          </div>
          <div className="absolute inset-0 -z-10">
            <img
              src="/images/kilimanjaro-aerial.jpg"
              alt="Mount Kilimanjaro aerial view"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60" />
          </div>
        </div>

        {/* Routes Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-brand-olive">Choose Your Kilimanjaro Route</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Each route offers a unique experience with different challenges, scenery, and success rates. Our expert
                guides will help you choose the perfect path to the summit.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {kilimanjaroRoutes.map((route, index) => (
                <Card
                  key={index}
                  className="hover:shadow-xl transition-all duration-300 border-2 hover:border-brand-orange/20"
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`p-3 rounded-full ${route.color}`}>
                          <route.icon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-xl text-brand-olive">{route.name}</CardTitle>
                          <p className="text-sm text-muted-foreground italic">{route.nickname}</p>
                        </div>
                      </div>
                      <Badge variant="outline" className="text-brand-orange border-brand-orange">
                        {route.price}
                      </Badge>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">{route.description}</p>

                    <div className="grid grid-cols-3 gap-4 py-4 border-y">
                      <div className="text-center">
                        <div className="text-sm text-muted-foreground">Duration</div>
                        <div className="font-semibold text-brand-olive">{route.duration}</div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm text-muted-foreground">Difficulty</div>
                        <div className="font-semibold text-brand-orange">{route.difficulty}</div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm text-muted-foreground">Success Rate</div>
                        <div className="font-semibold text-green-600">{route.success}</div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-brand-olive mb-2">Route Highlights:</h4>
                      <ul className="space-y-1">
                        {route.highlights.map((highlight, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-4 h-48 rounded-lg overflow-hidden">
                      <img
                        src={
                          route.name === "Marangu Route"
                            ? "/images/rainforest-trekking.jpg"
                            : route.name === "Machame Route"
                              ? "/images/summit-sunrise.jpg"
                              : route.name === "Lemosho Route"
                                ? "/images/uhuru-peak-sign.jpg"
                                : route.name === "Rongai Route"
                                  ? "/images/kilimanjaro-elephant.jpg"
                                  : route.name === "Northern Circuit Route"
                                    ? "/images/camping-stars.jpg"
                                    : "/images/climber-sunrise.jpg"
                        }
                        alt={`${route.name} scenery`}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <Button
                      className="w-full bg-brand-orange hover:bg-brand-orange/90 text-white font-semibold"
                      onClick={() => handleBookRoute(route)}
                    >
                      Book {route.name}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-brand-olive text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Climb Kilimanjaro?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Our experienced mountain guides and porters will ensure your safety and success on the mountain. Contact
              us to plan your Kilimanjaro adventure today.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                size="lg"
                className="bg-brand-orange hover:bg-brand-orange/90 text-white font-semibold"
                onClick={() => setIsBookingOpen(true)}
              >
                Book Your Trek Now
              </Button>
              <Link
                href="/contact"
                className="border-2 border-white text-white hover:bg-white hover:text-brand-olive px-8 py-3 rounded-md font-semibold transition-colors inline-flex items-center justify-center"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>

      <BookingForm
        tourTitle={selectedRoute ? selectedRoute.name : "Kilimanjaro Trek"}
        tourPrice={selectedRoute ? selectedRoute.basePrice : 1400}
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />

      <Footer />
    </>
  )
}
