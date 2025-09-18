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

export default function MachameRoute() {
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
            <Badge className="mb-4 bg-orange-100 text-orange-800">The Whiskey Route</Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">Machame Route</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The most popular and scenic Kilimanjaro route, known for its breathtaking views, diverse landscapes, and
              excellent acclimatization profile.
            </p>
          </div>

          <div className="w-full max-w-4xl mx-auto mb-8">
            <Image
              src="/images/machame-route-map.jpg"
              alt="Machame Route Map - Detailed trail map showing the Whiskey route to Kilimanjaro summit"
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
              <p className="text-gray-600">Challenging</p>
            </div>
            <div className="text-center">
              <MapPin className="w-8 h-8 text-brand-orange mx-auto mb-2" />
              <h3 className="font-semibold text-gray-900">Scenery</h3>
              <p className="text-gray-600">Excellent</p>
            </div>
            <div className="text-center">
              <Star className="w-8 h-8 text-brand-orange mx-auto mb-2" />
              <h3 className="font-semibold text-gray-900">Success Rate</h3>
              <p className="text-gray-600">85-90%</p>
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
                Machame Route Package
              </CardTitle>
              <CardDescription>Per person pricing</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold text-brand-orange mb-4">$1,400 - $2,800</div>
              <p className="text-gray-600 mb-6">Popular route with higher success rate and excellent scenery</p>
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
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Why Choose Machame?</h3>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-brand-orange rounded-full mt-2"></div>
                  <span>Most scenic route with diverse landscapes</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-brand-orange rounded-full mt-2"></div>
                  <span>Excellent "climb high, sleep low" acclimatization</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-brand-orange rounded-full mt-2"></div>
                  <span>High success rate (85-90%)</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-brand-orange rounded-full mt-2"></div>
                  <span>Famous landmarks: Barranco Wall, Lava Tower, Shira Plateau</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Route Highlights</h3>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                  <span>Lush rainforest with unique flora and fauna</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                  <span>Spectacular Shira Plateau views</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                  <span>Challenging Barranco Wall climb</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                  <span>Different descent route for varied scenery</span>
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
                title: "Machame Gate to Machame Camp",
                elevation: "1,640m → 2,835m",
                distance: "11 km",
                time: "5-7 hours",
                description: "Trek through dense rainforest with towering trees and diverse wildlife",
              },
              {
                day: 2,
                title: "Machame Camp to Shira Camp",
                elevation: "2,835m → 3,750m",
                distance: "5 km",
                time: "4-6 hours",
                description: "Emerge from forest into moorland with first views of Kibo peak",
              },
              {
                day: 3,
                title: "Shira Camp to Barranco Camp",
                elevation: "3,750m → 4,630m → 3,960m",
                distance: "10 km",
                time: "6-8 hours",
                description: "Climb to Lava Tower for acclimatization, then descend to Barranco",
              },
              {
                day: 4,
                title: "Barranco Camp to Karanga Camp",
                elevation: "3,960m → 3,995m",
                distance: "5 km",
                time: "4-5 hours",
                description: "Conquer the famous Barranco Wall and traverse alpine desert",
              },
              {
                day: 5,
                title: "Karanga Camp to Barafu Camp",
                elevation: "3,995m → 4,673m",
                distance: "4 km",
                time: "4-5 hours",
                description: "Final preparation day before summit attempt",
              },
              {
                day: 6,
                title: "Summit Day - Uhuru Peak",
                elevation: "4,673m → 5,895m → 3,068m",
                distance: "17 km",
                time: "12-16 hours",
                description: "Midnight start for summit, then long descent to Mweka Camp",
              },
              {
                day: 7,
                title: "Mweka Camp to Mweka Gate",
                elevation: "3,068m → 1,640m",
                distance: "10 km",
                time: "3-4 hours",
                description: "Final descent through rainforest to complete the journey",
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
          <h2 className="text-3xl font-bold mb-6">Ready for the Whiskey Route Adventure?</h2>
          <p className="text-xl mb-8 opacity-90">Experience Kilimanjaro's most scenic and successful climbing route</p>
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
        tourTitle="Machame Route - Kilimanjaro Trek"
        tourPrice={2100}
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
    </div>
  )
}
