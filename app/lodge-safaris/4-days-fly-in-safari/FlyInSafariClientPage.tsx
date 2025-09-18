"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Clock, MapPin, Users, Star, Check, X, Calendar } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { BookingForm } from "@/components/booking-form"

export default function FlyInSafariClientPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false)

  const whatsappMessage = encodeURIComponent(
    "Hi! I'm interested in the 4 Days Fly-in Safari. Can you provide more details?",
  )
  const whatsappUrl = `https://wa.me/255735051566?text=${whatsappMessage}`

  return (
    <>
      <Header />

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-24">
          <div className="absolute inset-0">
            <Image
              src="/images/safari-photographer-elephants.webp"
              alt="Safari photographer capturing elephants"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>

          <div className="relative container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center text-white">
              <Badge className="mb-6 bg-brand-orange/90 text-white border-brand-orange">4 Days / 3 Nights</Badge>

              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
                4 Days Fly-in <span className="text-brand-orange">Safari</span>
              </h1>

              <p className="text-xl mb-8 leading-relaxed">
                Efficient travel option flying between destinations to maximize game drive time. Covers Central
                Serengeti, Ngorongoro Crater, and Tarangire National Park.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-6 mb-8">
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-brand-orange" />
                  <span>4 Days / 3 Nights</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-brand-orange" />
                  <span>Serengeti, Ngorongoro & Tarangire</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-brand-orange" />
                  <span>Small Groups</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span>5-Star Rated</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-brand-orange hover:bg-brand-orange/90 text-white font-semibold"
                  onClick={() => setIsBookingOpen(true)}
                >
                  Book This Tour
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-black bg-transparent"
                >
                  <Link href="#details">View Details</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Price & Overview */}
        <section className="py-16 bg-muted/30" id="details">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl text-brand-orange">Safari Overview</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      Efficient travel option flying between destinations to maximize game drive time. Covers Central
                      Serengeti, Ngorongoro Crater, and Tarangire National Park with luxury accommodations and expert
                      guides.
                    </p>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <h4 className="font-semibold">Highlights Include:</h4>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>• Fly-in fly-out convenience</li>
                          <li>• Central Serengeti exploration</li>
                          <li>• Ngorongoro Crater descent</li>
                          <li>• Tarangire baobab trees and elephants</li>
                          <li>• Maximum game viewing time</li>
                        </ul>
                      </div>

                      <div className="space-y-2">
                        <h4 className="font-semibold">Safari Details:</h4>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>• Duration: 4 Days / 3 Nights</li>
                          <li>• Group Size: Small Groups</li>
                          <li>• Accommodation: Luxury Lodges</li>
                          <li>• Transport: Flights + 4x4 Safari Vehicle</li>
                          <li>• Guide: Professional Naturalist</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div>
                <Card className="sticky top-4">
                  <CardHeader>
                    <CardTitle className="text-center">
                      <div className="text-3xl font-bold text-brand-orange">$2,300</div>
                      <div className="text-sm text-muted-foreground">per person</div>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="text-xs text-muted-foreground text-center">
                      Valid from January 1, 2025, to December 30, 2026
                    </div>

                    <Button
                      className="w-full bg-brand-orange hover:bg-brand-orange/90 text-white font-semibold"
                      onClick={() => setIsBookingOpen(true)}
                    >
                      Book This Tour
                    </Button>

                    <p className="text-xs text-center text-muted-foreground">
                      Free cancellation • Best price guarantee
                    </p>

                    <Separator />

                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm">Quick Facts:</h4>
                      <div className="space-y-1 text-xs text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-3 w-3" />
                          <span>Available year-round</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="h-3 w-3" />
                          <span>Minimum 2 people</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-3 w-3" />
                          <span>Daily departures</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Itinerary */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-12 text-brand-orange">Detailed Itinerary</h2>

              <div className="space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <Badge className="bg-brand-orange text-white">Day 1</Badge>
                      Fly to Central Serengeti
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      Fly from Zanzibar to Seronera Airstrip in Central Serengeti. Enjoy a game drive in the Serengeti
                      National Park, a UNESCO World Heritage Site famous for the "Big Five" and the Great Migration.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <Badge className="bg-brand-orange text-white">Day 2</Badge>
                      Full Day Central Serengeti
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      A full day of game drives in Central Serengeti, exploring the park's diverse ecosystems and
                      spotting a wide variety of wildlife and bird species.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <Badge className="bg-brand-orange text-white">Day 3</Badge>
                      Ngorongoro Crater Adventure
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      Head to the Ngorongoro Crater. Descend 600m into the crater for a full-day game drive, where you
                      can see a high concentration of animals, including the endangered black rhino.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <Badge className="bg-brand-orange text-white">Day 4</Badge>
                      Tarangire & Return Flight
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      Drive to Tarangire National Park, known for its ancient baobab trees and large elephant
                      population. Enjoy a game drive before being transferred to Arusha Airport for your flight back to
                      Zanzibar.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Inclusions & Exclusions */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-12 text-brand-orange">What's Included</h2>

              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-green-600">
                      <Check className="h-5 w-5" />
                      Included
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>All Park entrances & taxes</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Accommodation during the safari on a full-board basis</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Breakfast, lunch, and dinner</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Domestic flights as per itinerary</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Professional English-speaking guide</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>4x4 safari vehicle with pop-up roof</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-red-600">
                      <X className="h-5 w-5" />
                      Not Included
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <X className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                        <span>Tips for guides</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <X className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                        <span>International flights</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <X className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                        <span>Personal expenses and souvenirs</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <X className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                        <span>Travel insurance</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <X className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                        <span>Visa fees</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-brand-orange text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready for Your Fly-in Safari Adventure?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Book your 4 Days Fly-in Safari today and maximize your time with Tanzania's incredible wildlife.
            </p>
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-brand-orange hover:bg-gray-100 font-semibold"
              onClick={() => setIsBookingOpen(true)}
            >
              Book This Tour Now
            </Button>
          </div>
        </section>
      </main>

      <BookingForm
        tourTitle="4 Days Fly-in Safari"
        tourPrice={2300}
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />

      <Footer />
    </>
  )
}
