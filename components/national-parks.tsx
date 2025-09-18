"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin } from "lucide-react"
import Link from "next/link"

interface NationalPark {
  name: string
  description: string
  image: string
}

interface NationalParksProps {
  parks: NationalPark[]
  title: string
  description?: string
}

export function NationalParks({ parks, title, description }: NationalParksProps) {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-brand-orange">{title}</h2>
          {description && <p className="text-xl text-muted-foreground max-w-3xl mx-auto">{description}</p>}
        </div>

        <div className="space-y-8">
          {parks.map((park, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-0`}>
                  {/* Image Container */}
                  <div className="lg:w-1/2">
                    <div className="h-64 lg:h-80 bg-gradient-to-br from-brand-olive/20 to-brand-orange/20 flex items-center justify-center">
                      <img
                        src={park.image || "/placeholder.svg"}
                        alt={park.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="lg:w-1/2 p-8 flex flex-col justify-center">
                    <div className="flex items-center gap-2 mb-4">
                      <MapPin className="h-5 w-5 text-brand-orange" />
                      <span className="text-sm text-brand-orange font-medium">Tanzania National Park</span>
                    </div>

                    <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-brand-olive">{park.name}</h3>

                    <p className="text-muted-foreground mb-6 leading-relaxed text-base">{park.description}</p>

                    <Button asChild className="bg-brand-orange hover:bg-brand-orange/90 text-white font-semibold w-fit">
                      <Link href="https://wa.me/255735051566" target="_blank">
                        Book This Tour
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
