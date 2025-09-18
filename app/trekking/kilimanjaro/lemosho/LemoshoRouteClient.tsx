"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Mountain, MapPin, Star, DollarSign, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Header } from "@/components/header"
import Image from "next/image"
import { BookingForm } from "@/components/booking-form"

export default function LemoshoRouteClient() {
  const [isBookingOpen, setIsBookingOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      <Header />

      <div className="container mx-auto px-4 pt-6">
        <Button asChild variant="ghost" className="mb-4">
          <Link href="/trekking" className="flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back to Trekking
          </Link>
        </Button>
      </div>

      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-green-100 text-green-800">The Western Approach</Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">Lemosho Route</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The most scenic and pristine Kilimanjaro route, offering excellent acclimatization, diverse landscapes,
              and the highest success rates for summit attempts.
            </p>
          </div>

          <div className="w-full max-w-4xl mx-auto mb-8">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Lemosho-Route-Map.jpg-1KbJVTPbHoPST4vCgaE2CypJxbXoFK.jpeg"
              alt="Lemosho Route Map - Kilimanjaro"
              width={1200}
              height={630}
              className="w-full h-auto rounded-lg shadow-lg"
              priority
            />
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <Clock className="w-8 h-8 text-brand-orange mx-auto mb-2" />
              <h3 className="font-semibold text-gray-900">Duration</h3>
              <p className="text-gray-600">7-9 Days</p>
            </div>
            <div className="text-center">
              <Mountain className="w-8 h-8 text-brand-orange mx-auto mb-2" />
              <h3 className="font-semibold text-gray-900">Difficulty</h3>
              <p className="text-gray-600">Moderate</p>
            </div>
            <div className="text-center">
              <MapPin className="w-8 h-8 text-brand-orange mx-auto mb-2" />
              <h3 className="font-semibold text-gray-900">Scenery</h3>
              <p className="text-gray-600">Outstanding</p>
            </div>
            <div className="text-center">
              <Star className="w-8 h-8 text-brand-orange mx-auto mb-2" />
              <h3 className="font-semibold text-gray-900">Success Rate</h3>
              <p className="text-gray-600">90-95%</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-12 px-4 bg-orange-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Pricing</h2>
          <Card className="max-w-md mx-auto">
            <CardHeader>
              <CardTitle className="flex items-center justify-center gap-2">
                <DollarSign className="w-6 h-6" />
                Lemosho Route Package
              </CardTitle>
              <CardDescription>Per person pricing</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold text-brand-orange mb-4">$1,600 - $3,200</div>
              <p className="text-gray-600 mb-6">Premium route with exceptional scenery and highest success rates</p>
              <Button
                onClick={() => setIsBookingOpen(true)}
                className="w-full bg-brand-orange hover:bg-brand-orange/90"
                size="lg"
              >
                Book Now
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Route Overview */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Route Overview</h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Why Choose Lemosho?</h3>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-brand-orange rounded-full mt-2"></div>
                  <span>Highest success rate (90-95%) due to excellent acclimatization</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-brand-orange rounded-full mt-2"></div>
                  <span>Most scenic and diverse landscapes</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-brand-orange rounded-full mt-2"></div>
                  <span>Pristine wilderness with fewer crowds</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-brand-orange rounded-full mt-2"></div>
                  <span>Western approach offers unique perspectives</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Route Highlights</h3>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                  <span>Spectacular Shira Plateau crossing</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                  <span>Wildlife viewing opportunities</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                  <span>Shira Cathedral rock formations</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                  <span>Multiple climate zones in one trek</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 8-Day Itinerary */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">8-Day Itinerary</h2>

          <div className="space-y-6">
            {[
              {
                day: 1,
                title: "Londorossi Gate to Mti Mkubwa Camp",
                elevation: "2,100m → 2,650m",
                distance: "6 km",
                time: "3-4 hours",
                description: "Drive to Lemosho Glades, then trek through pristine rainforest",
              },
              {
                day: 2,
                title: "Mti Mkubwa to Shira 1 Camp",
                elevation: "2,650m → 3,610m",
                distance: "8 km",
                time: "5-6 hours",
                description: "Emerge from forest onto the spectacular Shira Plateau",
              },
              {
                day: 3,
                title: "Shira 1 to Shira 2 Camp",
                elevation: "3,610m → 3,850m",
                distance: "7 km",
                time: "3-4 hours",
                description: "Cross the Shira Plateau with stunning views of Kibo peak",
              },
              {
                day: 4,
                title: "Shira 2 to Moir Hut",
                elevation: "3,850m → 4,200m",
                distance: "14 km",
                time: "5-7 hours",
                description: "Northern circuit route with excellent acclimatization",
              },
              {
                day: 5,
                title: "Moir Hut to Barranco Camp",
                elevation: "4,200m → 4,630m → 3,960m",
                distance: "7 km",
                time: "4-6 hours",
                description: "Climb to Lava Tower, then descend to Barranco Valley",
              },
              {
                day: 6,
                title: "Barranco to Karanga Camp",
                elevation: "3,960m → 3,995m",
                distance: "5 km",
                time: "4-5 hours",
                description: "Conquer the Barranco Wall and traverse alpine desert",
              },
              {
                day: 7,
                title: "Karanga to Barafu to Summit",
                elevation: "3,995m → 4,673m → 5,895m → 3,068m",
                distance: "17 km",
                time: "12-16 hours",
                description: "Summit day: midnight start to Uhuru Peak, descend to Mweka",
              },
              {
                day: 8,
                title: "Mweka Camp to Mweka Gate",
                elevation: "3,068m → 1,640m",
                distance: "10 km",
                time: "3-4 hours",
                description: "Final descent through lush rainforest to the gate",
              },
            ].map((day) => (
              <Card key={day.day} className="overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-brand-orange text-white rounded-full flex items-center justify-center font-bold">
                        {day.day}
                      </div>
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{day.title}</h3>
                      <p className="text-gray-600 mb-3">{day.description}</p>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                        <span>📍 {day.elevation}</span>
                        <span>📏 {day.distance}</span>
                        <span>⏱️ {day.time}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-brand-orange text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Experience the Ultimate Kilimanjaro Adventure</h2>
          <p className="text-xl mb-8 opacity-90">
            Choose the route with the highest success rate and most spectacular scenery
          </p>
          <Button
            onClick={() => setIsBookingOpen(true)}
            size="lg"
            variant="secondary"
            className="bg-white text-brand-orange hover:bg-gray-100"
          >
            Book Now
          </Button>
        </div>
      </section>

      {/* Booking Form Modal */}
      <BookingForm
        tourTitle="Lemosho Route - Kilimanjaro Trek"
        tourPrice={2400}
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
    </div>
  )
}
