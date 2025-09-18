"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Clock, MapPin, Users, Star, Check, X, Calendar, DollarSign, Phone, Mail } from "lucide-react"
import { getTourBySlug } from "@/lib/tours-data"
import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { BookingForm } from "@/components/booking-form"
import { useState, useEffect } from "react"

interface TourDetailPageProps {
  params: {
    slug: string
  }
}

export default function TourDetailPageClient({ params }: TourDetailPageProps) {
  const tour = getTourBySlug(params.slug)
  const [isBookingOpen, setIsBookingOpen] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  if (!tour || tour.category !== "lodge") {
    notFound()
  }

  const safariImages = [
    "/images/safari-lions-vehicle.webp",
    "/images/safari-photographer-elephants.webp",
    "/images/safari-woman-wildebeest.webp",
    "/images/safari-lion-kill.jpeg",
    "/images/safari-woman-elephant.webp",
  ]

  const imageIndex = Number.parseInt(tour.id.split("-")[1]) - 1
  const tourImage = safariImages[imageIndex % safariImages.length]

  return (
    <>
      <Header />

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-16 bg-gradient-to-br from-brand-orange/10 to-brand-orange/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="mb-6">
                <Link href="/lodge-safaris" className="text-brand-orange hover:text-brand-orange/80 font-medium">
                  ← Back to Lodge Safaris
                </Link>
              </div>

              <Badge className="mb-4 bg-brand-orange/10 text-brand-orange border-brand-orange/20">
                {tour.duration}
              </Badge>

              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">{tour.title}</h1>

              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">{tour.description}</p>

              <div className="flex flex-wrap items-center gap-6 mb-8">
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-brand-orange" />
                  <span className="font-medium">{tour.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-brand-orange" />
                  <span className="font-medium">Northern Tanzania Circuit</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-brand-orange" />
                  <span className="font-medium">Small Groups</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="font-medium">5-Star Experience</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-12">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              <div className="relative h-96 bg-gradient-to-br from-brand-orange/20 to-brand-orange/5 rounded-lg overflow-hidden">
                <Image src={tourImage || "/placeholder.svg"} alt={tour.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white text-sm">
                    Experience the breathtaking landscapes and incredible wildlife of Tanzania
                  </p>
                </div>
              </div>

              {/* Highlights */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-brand-orange">Safari Highlights</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-3">
                    {tour.highlights.map((highlight, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-600 flex-shrink-0" />
                        <span className="text-sm">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Detailed Itinerary */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-brand-orange">Detailed Itinerary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {tour.itinerary.map((day, index) => (
                    <div key={index} className="border-l-2 border-brand-orange/20 pl-6 relative">
                      <div className="absolute -left-2 top-0 w-4 h-4 bg-brand-orange rounded-full"></div>
                      <div className="flex items-center gap-2 mb-2">
                        <Calendar className="h-4 w-4 text-brand-orange" />
                        <h3 className="font-semibold text-lg">
                          Day {day.day}: {day.title}
                        </h3>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">{day.description}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Inclusions & Exclusions */}
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl text-green-600 flex items-center gap-2">
                      <Check className="h-5 w-5" />
                      What's Included
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {tour.inclusions.map((item, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm">
                          <Check className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl text-red-600 flex items-center gap-2">
                      <X className="h-5 w-5" />
                      Not Included
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {tour.exclusions.map((item, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm">
                          <X className="h-4 w-4 text-red-600 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Pricing Card */}
              <Card className="sticky top-4">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-3xl font-bold text-brand-orange flex items-center gap-1">
                        <DollarSign className="h-6 w-6" />
                        {tour.price.toLocaleString()}
                      </div>
                      <div className="text-sm text-muted-foreground">per person</div>
                    </div>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {tour.priceNote && <p className="text-xs text-muted-foreground">{tour.priceNote}</p>}

                  <Separator />

                  <div className="space-y-3">
                    <Button
                      className="w-full bg-brand-orange hover:bg-brand-orange/90 font-semibold"
                      onClick={() => setIsBookingOpen(true)}
                    >
                      Book This Safari
                    </Button>

                    <Button asChild variant="outline" className="w-full bg-transparent">
                      <Link href="https://wa.me/255735051566" target="_blank">
                        WhatsApp Inquiry
                      </Link>
                    </Button>
                  </div>

                  <Separator />

                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-brand-orange" />
                      <span>+255 735 051 566</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-brand-orange" />
                      <span>adventuresprince@gmail.com</span>
                    </div>
                  </div>

                  <div className="text-xs text-muted-foreground space-y-1">
                    <p>✓ Free cancellation up to 24 hours</p>
                    <p>✓ Best price guarantee</p>
                    <p>✓ Instant confirmation</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      {/* Booking Form Modal */}
      <BookingForm
        tourTitle={tour.title}
        tourPrice={tour.price}
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />

      <Footer />
    </>
  )
}
