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

export default function MaranguRoute() {
  const [isBookingOpen, setIsBookingOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      <Header />

      {/* Back Button */}
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
            <Badge className="mb-4 bg-green-100 text-green-800">The Coca-Cola Route</Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">Marangu Route</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The most comfortable Kilimanjaro route with hut accommodations and gradual slopes, perfect for beginners
              seeking a classic mountain experience.
            </p>
          </div>

          <div className="w-full max-w-4xl mx-auto mb-8">
            <Image
              src="/images/marangu-route-map.jpg"
              alt="Marangu Route Map - Detailed trail map showing the Coca-Cola route to Kilimanjaro summit"
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
              <p className="text-gray-600">5-6 Days</p>
            </div>
            <div className="text-center">
              <Mountain className="w-8 h-8 text-brand-orange mx-auto mb-2" />
              <h3 className="font-semibold text-gray-900">Difficulty</h3>
              <p className="text-gray-600">Moderate</p>
            </div>
            <div className="text-center">
              <MapPin className="w-8 h-8 text-brand-orange mx-auto mb-2" />
              <h3 className="font-semibold text-gray-900">Distance</h3>
              <p className="text-gray-600">72 km</p>
            </div>
            <div className="text-center">
              <Star className="w-8 h-8 text-brand-orange mx-auto mb-2" />
              <h3 className="font-semibold text-gray-900">Success Rate</h3>
              <p className="text-gray-600">50%</p>
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
                Marangu Route Package
              </CardTitle>
              <CardDescription>Per person pricing</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold text-brand-orange mb-4">$1,200 - $2,500</div>
              <p className="text-gray-600 mb-6">
                Most budget-friendly route due to shorter duration and hut accommodations
              </p>
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
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Why Choose Marangu?</h3>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                  <span>Only route with hut accommodations - no camping required</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                  <span>Gradual slopes make it accessible for beginners</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                  <span>Most budget-friendly option</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                  <span>Well-established trail with good facilities</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Important Considerations</h3>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                  <span>Lower success rate due to rapid ascent</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                  <span>Same path up and down - less scenic variety</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                  <span>6-day option recommended over 5-day for better acclimatization</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                  <span>Can be crowded during peak seasons</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 6-Day Itinerary */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">6-Day Itinerary</h2>

          <div className="space-y-6">
            {[
              {
                day: 1,
                title: "Marangu Gate to Mandara Hut",
                elevation: "1,843m → 2,700m",
                distance: "8 km",
                time: "4-5 hours",
                description: "Trek through lush rainforest with chances to spot monkeys and exotic birds",
              },
              {
                day: 2,
                title: "Mandara Hut to Horombo Hut",
                elevation: "2,700m → 3,720m",
                distance: "12 km",
                time: "6-8 hours",
                description: "Transition from rainforest to moorland with stunning views of Mawenzi Peak",
              },
              {
                day: 3,
                title: "Acclimatization Day at Horombo",
                elevation: "3,720m → 4,390m → 3,720m",
                distance: "5 km",
                time: "2-3 hours",
                description: "Hike to Mawenzi Ridge for acclimatization, then return to Horombo Hut",
              },
              {
                day: 4,
                title: "Horombo Hut to Kibo Hut",
                elevation: "3,720m → 4,750m",
                distance: "10 km",
                time: "6-8 hours",
                description: "Cross the alpine desert with spectacular views of both peaks",
              },
              {
                day: 5,
                title: "Summit Day - Uhuru Peak",
                elevation: "4,703m → 5,895m → 3,720m",
                distance: "22 km total",
                time: "14-16 hours",
                description: "Early morning summit attempt, then descend to Horombo Hut",
              },
              {
                day: 6,
                title: "Horombo Hut to Marangu Gate",
                elevation: "3,720m → 1,843m",
                distance: "20 km",
                time: "5-7 hours",
                description: "Final descent through moorland and rainforest to the gate",
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
          <h2 className="text-3xl font-bold mb-6">Ready to Climb Kilimanjaro via Marangu?</h2>
          <p className="text-xl mb-8 opacity-90">
            Experience the comfort of hut accommodations on Africa's highest peak
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
        tourTitle="Marangu Route - Kilimanjaro Trek"
        tourPrice={1850}
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
    </div>
  )
}
