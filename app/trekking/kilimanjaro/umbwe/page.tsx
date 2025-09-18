"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Mountain, MapPin, Star, DollarSign, AlertTriangle, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Header } from "@/components/header"
import Image from "next/image"
import { BookingForm } from "@/components/booking-form"

export default function UmbweRoute() {
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
            <Badge className="mb-4 bg-red-100 text-red-800">The Steepest Challenge</Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">Umbwe Route</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The most challenging and steepest Kilimanjaro route, designed for experienced high-altitude trekkers
              seeking the ultimate test of endurance and skill.
            </p>
          </div>

          <div className="w-full max-w-4xl mx-auto mb-8">
            <Image
              src="/images/climber-sunrise.jpg"
              alt="Umbwe Route - Challenging Kilimanjaro terrain at sunrise"
              width={1200}
              height={800}
              className="w-full h-auto rounded-lg shadow-lg"
              priority
            />
          </div>
        </div>
      </section>

      {/* Warning Section */}
      <section className="py-8 px-4 bg-orange-100">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 p-4 bg-orange-50 rounded-lg border border-orange-200">
            <AlertTriangle className="w-8 h-8 text-orange-600 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-orange-900 mb-2">Expert Level Route</h3>
              <p className="text-orange-800">
                This route is recommended only for very experienced high-altitude trekkers. Not suitable for those
                afraid of heights due to steep drops and challenging terrain.
              </p>
            </div>
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
              <p className="text-gray-600">5-7 Days</p>
            </div>
            <div className="text-center">
              <Mountain className="w-8 h-8 text-brand-orange mx-auto mb-2" />
              <h3 className="font-semibold text-gray-900">Difficulty</h3>
              <p className="text-gray-600">Very Hard</p>
            </div>
            <div className="text-center">
              <MapPin className="w-8 h-8 text-brand-orange mx-auto mb-2" />
              <h3 className="font-semibold text-gray-900">Distance</h3>
              <p className="text-gray-600">53 km</p>
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
                Umbwe Route Package
              </CardTitle>
              <CardDescription>Per person pricing</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold text-brand-orange mb-4">$1,200 - $2,600</div>
              <p className="text-gray-600 mb-6">Challenging route for experienced trekkers only</p>
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
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Why Choose Umbwe?</h3>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-brand-orange rounded-full mt-2"></div>
                  <span>Ultimate challenge for experienced mountaineers</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-brand-orange rounded-full mt-2"></div>
                  <span>Direct and steep ascent - shortest route</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-brand-orange rounded-full mt-2"></div>
                  <span>Less crowded due to difficulty level</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-brand-orange rounded-full mt-2"></div>
                  <span>Dramatic and spectacular scenery</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Important Warnings</h3>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                  <span>Very steep terrain with exposed sections</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                  <span>Limited acclimatization time</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                  <span>Not suitable for beginners or those with fear of heights</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                  <span>Lower success rate due to rapid ascent</span>
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
                title: "Umbwe Gate to Umbwe Cave Camp",
                elevation: "1,640m → 2,850m",
                distance: "11 km",
                time: "5-7 hours",
                description: "Steep ascent through dense rainforest on narrow, winding trail",
              },
              {
                day: 2,
                title: "Umbwe Cave to Barranco Camp",
                elevation: "2,850m → 3,960m",
                distance: "6 km",
                time: "4-6 hours",
                description: "Continue steep climb, emerge from forest into moorland zone",
              },
              {
                day: 3,
                title: "Barranco to Karanga Camp",
                elevation: "3,960m → 3,995m",
                distance: "5 km",
                time: "4-5 hours",
                description: "Tackle the famous Barranco Wall and traverse alpine desert",
              },
              {
                day: 4,
                title: "Karanga to Barafu Camp",
                elevation: "3,995m → 4,673m",
                distance: "4 km",
                time: "4-5 hours",
                description: "Final preparation for summit attempt in harsh alpine conditions",
              },
              {
                day: 5,
                title: "Summit Day - Uhuru Peak",
                elevation: "4,673m → 5,895m → 3,068m",
                distance: "17 km",
                time: "12-16 hours",
                description: "Midnight summit push, then long descent to Mweka Camp",
              },
              {
                day: 6,
                title: "Mweka Camp to Mweka Gate",
                elevation: "3,068m → 1,640m",
                distance: "10 km",
                time: "3-4 hours",
                description: "Final descent through rainforest to complete the challenge",
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

      {/* Prerequisites Section */}
      <section className="py-16 px-4 bg-orange-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Prerequisites</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Required Experience</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-600">
                  <li>• Previous high-altitude trekking experience (4000m+)</li>
                  <li>• Excellent physical fitness and endurance</li>
                  <li>• Experience with steep, exposed terrain</li>
                  <li>• Mental preparation for challenging conditions</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Not Recommended For</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-600">
                  <li>• First-time Kilimanjaro climbers</li>
                  <li>• Those with fear of heights</li>
                  <li>• Trekkers without high-altitude experience</li>
                  <li>• Anyone seeking a leisurely climb</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-brand-orange text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready for the Ultimate Challenge?</h2>
          <p className="text-xl mb-8 opacity-90">Test your limits on Kilimanjaro's most demanding route</p>
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
        tourTitle="Umbwe Route - Kilimanjaro Trek"
        tourPrice={1900}
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
    </div>
  )
}
