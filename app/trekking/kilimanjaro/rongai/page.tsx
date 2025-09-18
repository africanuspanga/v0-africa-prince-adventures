"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Mountain, Star, DollarSign, Sun, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Header } from "@/components/header"
import Image from "next/image"
import { BookingForm } from "@/components/booking-form"

export default function RongaiRoute() {
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
            <Badge className="mb-4 bg-yellow-100 text-yellow-800">The Northern Approach</Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">Rongai Route</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The only northern approach to Kilimanjaro, offering a gentler gradient, drier conditions, and spectacular
              wildlife viewing opportunities near the Kenyan border.
            </p>
          </div>

          <div className="w-full max-w-4xl mx-auto mb-8">
            <Image
              src="/images/rongai-route-map.jpg"
              alt="Rongai Route Map - Detailed trail map showing the northern approach to Kilimanjaro summit"
              width={1200}
              height={800}
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
              <p className="text-gray-600">6-7 Days</p>
            </div>
            <div className="text-center">
              <Mountain className="w-8 h-8 text-brand-orange mx-auto mb-2" />
              <h3 className="font-semibold text-gray-900">Difficulty</h3>
              <p className="text-gray-600">Moderate</p>
            </div>
            <div className="text-center">
              <Sun className="w-8 h-8 text-brand-orange mx-auto mb-2" />
              <h3 className="font-semibold text-gray-900">Climate</h3>
              <p className="text-gray-600">Dry</p>
            </div>
            <div className="text-center">
              <Star className="w-8 h-8 text-brand-orange mx-auto mb-2" />
              <h3 className="font-semibold text-gray-900">Crowds</h3>
              <p className="text-gray-600">Low</p>
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
                Rongai Route Package
              </CardTitle>
              <CardDescription>Per person pricing</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold text-brand-orange mb-4">$1,400 - $2,900</div>
              <p className="text-gray-600 mb-6">Northern approach with drier conditions and wildlife viewing</p>
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
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Why Choose Rongai?</h3>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-brand-orange rounded-full mt-2"></div>
                  <span>Only northern route - unique perspective of Kilimanjaro</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-brand-orange rounded-full mt-2"></div>
                  <span>Drier conditions - good for rainy seasons</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-brand-orange rounded-full mt-2"></div>
                  <span>Gentle, gradual incline suitable for beginners</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-brand-orange rounded-full mt-2"></div>
                  <span>Less crowded than southern routes</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Unique Features</h3>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                  <span>Wildlife viewing - elephants and giraffes possible</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                  <span>Close views of Mawenzi Peak</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                  <span>Views of Amboseli National Park plains</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                  <span>Descend via different route (Marangu)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 7-Day Itinerary */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">7-Day Itinerary</h2>

          <div className="space-y-6">
            {[
              {
                day: 1,
                title: "Rongai Gate to Simba Camp",
                elevation: "1,950m → 2,650m",
                distance: "8 km",
                time: "3-4 hours",
                description: "Gentle start through farmland and pine forest with wildlife spotting opportunities",
              },
              {
                day: 2,
                title: "Simba Camp to Second Cave",
                elevation: "2,650m → 3,450m",
                distance: "6 km",
                time: "3-4 hours",
                description: "Continue through moorland with spectacular views of Kibo and Mawenzi peaks",
              },
              {
                day: 3,
                title: "Second Cave to Kikelelwa Cave",
                elevation: "3,450m → 3,600m",
                distance: "6 km",
                time: "3-4 hours",
                description: "Short day for acclimatization with stunning views across to Mawenzi",
              },
              {
                day: 4,
                title: "Kikelelwa Cave to Mawenzi Tarn Hut",
                elevation: "3,600m → 4,315m",
                distance: "5 km",
                time: "3-4 hours",
                description: "Spectacular day with close-up views of Mawenzi's jagged peaks",
              },
              {
                day: 5,
                title: "Mawenzi Tarn to Kibo Hut",
                elevation: "4,315m → 4,703m",
                distance: "8 km",
                time: "4-5 hours",
                description: "Cross the lunar landscape between Mawenzi and Kibo peaks",
              },
              {
                day: 6,
                title: "Summit Day - Uhuru Peak",
                elevation: "4,703m → 5,895m → 3,720m",
                distance: "22 km",
                time: "12-16 hours",
                description: "Midnight summit attempt, then descend to Horombo Hut via Marangu route",
              },
              {
                day: 7,
                title: "Horombo Hut to Marangu Gate",
                elevation: "3,720m → 1,843m",
                distance: "20 km",
                time: "5-7 hours",
                description: "Final descent through different scenery via the Marangu route",
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

      {/* Best Time Section */}
      <section className="py-16 px-4 bg-orange-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Best Time to Climb</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Sun className="w-6 h-6 text-brand-orange" />
                  Year-Round Climbing
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Rongai's northern location makes it the best route for climbing during Tanzania's wet seasons.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• March-May: Good option during long rains</li>
                  <li>• November-December: Excellent during short rains</li>
                  <li>• June-October: Peak dry season</li>
                  <li>• January-February: Clear, cold conditions</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Wildlife Viewing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  The northern approach offers unique wildlife viewing opportunities.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Elephants on the lower slopes</li>
                  <li>• Giraffes in the distance</li>
                  <li>• Various antelope species</li>
                  <li>• Rich birdlife in forest zones</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-brand-orange text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Experience Kilimanjaro from the North</h2>
          <p className="text-xl mb-8 opacity-90">Discover the unique beauty and wildlife of the northern approach</p>
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
        tourTitle="Rongai Route - Kilimanjaro Trek"
        tourPrice={2150}
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
    </div>
  )
}
