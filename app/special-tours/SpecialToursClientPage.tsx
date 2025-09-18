"use client"

import { SpecialTours } from "@/components/special-tours"
import { Card, CardContent } from "@/components/ui/card"
import { Mountain, Compass, ArrowRight } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { BookingForm } from "@/components/booking-form"
import { useState } from "react"

const specialExperiences = [
  {
    title: "Kilimanjaro Trekking",
    description: "Conquer Africa's highest peak with our experienced mountain guides.",
    duration: "5-9 Days",
    difficulty: "Challenging",
    icon: Mountain,
  },
  {
    title: "Mount Meru Expedition",
    description: "Tanzania's second-highest mountain offers stunning views and diverse ecosystems.",
    duration: "3-4 Days",
    difficulty: "Moderate",
    icon: Compass,
  },
  {
    title: "Oldoinyo Lengai Trek",
    description: "Climb the sacred 'Mountain of God' - an active volcano revered by the Maasai.",
    duration: "2-3 Days",
    difficulty: "Difficult",
    icon: Mountain,
  },
]

export default function SpecialToursClientPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false)

  return (
    <>
      <Header />
      <main>
        <div className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-brand-olive">Special Tours</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Beyond traditional safaris, we offer unique experiences that showcase Tanzania's diverse landscapes and
              rich culture.
            </p>
          </div>
        </div>

        <SpecialTours />

        {/* Trekking Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-brand-orange">Mountain Trekking Adventures</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Challenge yourself with Tanzania's magnificent peaks and experience breathtaking views from the roof of
                Africa.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {specialExperiences.map((experience, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-8 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-6 bg-brand-orange">
                      <experience.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-brand-orange">{experience.title}</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">{experience.description}</p>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Duration:</span>
                        <span className="font-medium">{experience.duration}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Difficulty:</span>
                        <span className="font-medium">{experience.difficulty}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-brand-olive text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready for Your Adventure?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Let us create a personalized itinerary that matches your interests and budget. Contact us today to start
              planning your dream Tanzania experience.
            </p>
            <div className="flex justify-center">
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-brand-olive hover:bg-gray-100"
                onClick={() => setIsBookingOpen(true)}
              >
                Get Custom Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      <BookingForm
        tourTitle="Custom Special Tour"
        tourPrice={0}
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
    </>
  )
}
