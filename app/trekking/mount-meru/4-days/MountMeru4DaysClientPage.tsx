"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Users, DollarSign, Mountain } from "lucide-react"
import { Header } from "@/components/header"
import { ArrowLeft } from "lucide-react"
import { BookingForm } from "@/components/booking-form"

export default function MountMeru4DaysClientPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false)

  return (
    <>
      <Header />
      <div className="min-h-screen bg-background">
        {/* Back to Trekking Button */}
        <div className="container mx-auto px-4 py-4">
          <Button variant="ghost" asChild className="mb-4">
            <Link href="/trekking" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Trekking
            </Link>
          </Button>
        </div>

        {/* Hero Section */}
        <section className="relative h-[60vh] flex items-center justify-center">
          <div className="absolute inset-0 bg-black/40 z-10" />
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mt%20meru%204%20days.jpg-qeQnX2wi7G00xn07aQkQguiIMyiLhV.jpeg)",
            }}
          />

          <div className="relative z-20 text-center text-white max-w-4xl mx-auto px-4">
            <Badge className="mb-4 bg-brand-orange text-white">
              <Mountain className="w-4 h-4 mr-2" />4 Days Trek
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">Mount Meru 4 Days Route</h1>
            <p className="text-xl md:text-2xl mb-8 text-pretty">
              Comfortable pace trek to Tanzania's second highest peak with better acclimatization
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => setIsBookingOpen(true)}
                size="lg"
                className="bg-brand-orange hover:bg-brand-orange/90 text-white"
              >
                Book This Trek
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-black bg-transparent"
              >
                <Link href="/contact">Get Quote</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Trek Overview */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Trek Overview</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  The 4-day Mount Meru route offers a more comfortable pace with better acclimatization. Perfect for
                  trekkers who want to enjoy the journey and have higher success rates for summit attempts.
                </p>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-brand-orange" />
                    <div>
                      <div className="font-semibold">Duration</div>
                      <div className="text-sm text-muted-foreground">4 Days</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mountain className="w-5 h-5 text-brand-orange" />
                    <div>
                      <div className="font-semibold">Altitude</div>
                      <div className="text-sm text-muted-foreground">4,566m</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-brand-orange" />
                    <div>
                      <div className="font-semibold">Group Size</div>
                      <div className="text-sm text-muted-foreground">2-12 people</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <DollarSign className="w-5 h-5 text-brand-orange" />
                    <div>
                      <div className="font-semibold">Price From</div>
                      <div className="text-sm text-muted-foreground">$1,320</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="aspect-video rounded-lg overflow-hidden">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mt%20meru%204%20days.jpg-qeQnX2wi7G00xn07aQkQguiIMyiLhV.jpeg"
                    alt="Mount Meru 4 Days Trek - Hiker with backpack viewing Mount Meru"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Itinerary */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">4-Day Itinerary</h2>

            <div className="max-w-4xl mx-auto space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Badge variant="outline">Day 1</Badge>
                    Momella Gate to Miriakamba Hut
                  </CardTitle>
                  <CardDescription>Altitude: 1,500m to 2,500m | Distance: 10km | Time: 4-6 hours</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>
                    Begin your trek at Momella Gate through montane forest, spotting wildlife and enjoying views of
                    Mount Kilimanjaro.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Badge variant="outline">Day 2</Badge>
                    Miriakamba Hut to Saddle Hut
                  </CardTitle>
                  <CardDescription>Altitude: 2,500m to 3,500m | Distance: 8km | Time: 3-5 hours</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>
                    Ascend through heath and moorland to Saddle Hut. Afternoon acclimatization walk to Little Meru for
                    better preparation.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Badge variant="outline">Day 3</Badge>
                    Saddle Hut to Summit to Miriakamba Hut
                  </CardTitle>
                  <CardDescription>
                    Altitude: 3,500m to 4,566m to 2,500m | Distance: 12km | Time: 10-12 hours
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p>
                    Early morning summit attempt to Socialist Peak for sunrise views, then descend to Miriakamba Hut for
                    overnight.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Badge variant="outline">Day 4</Badge>
                    Miriakamba Hut to Momella Gate
                  </CardTitle>
                  <CardDescription>Altitude: 2,500m to 1,500m | Distance: 10km | Time: 3-5 hours</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Final descent through the forest back to Momella Gate, completing your Mount Meru adventure.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Pricing</h2>

            <div className="max-w-2xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle>Mount Meru 4 Days Route</CardTitle>
                  <CardDescription>All-inclusive trekking package</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>2 people</span>
                      <span className="font-semibold">$1,650 per person</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>3-4 people</span>
                      <span className="font-semibold">$1,520 per person</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>5+ people</span>
                      <span className="font-semibold">$1,320 per person</span>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t">
                    <h4 className="font-semibold mb-3">Included:</h4>
                    <ul className="text-sm space-y-1 text-muted-foreground">
                      <li>• Professional mountain guide</li>
                      <li>• All meals during trek</li>
                      <li>• Camping equipment</li>
                      <li>• Park fees and permits</li>
                      <li>• Transportation to/from gate</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-brand-orange text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready for Your Mount Meru Adventure?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Book your 4-day Mount Meru trek today for a more comfortable mountain experience
            </p>
            <Button onClick={() => setIsBookingOpen(true)} size="lg" variant="secondary">
              Book Now
            </Button>
          </div>
        </section>

        {/* Booking Form Modal */}
        <BookingForm
          tourTitle="Mount Meru 4 Days Trek"
          tourPrice={1485}
          isOpen={isBookingOpen}
          onClose={() => setIsBookingOpen(false)}
        />
      </div>
    </>
  )
}
