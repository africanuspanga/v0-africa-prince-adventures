import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Clock, Star } from "lucide-react"
import { lodgeSafaris, campingSafaris } from "@/lib/tours-data"
import Link from "next/link"
import Image from "next/image"

export function FeaturedTours() {
  const featuredLodgeTours = lodgeSafaris.slice(0, 3)
  const featuredCampingTours = campingSafaris.slice(0, 3)
  const allFeaturedTours = [...featuredLodgeTours, ...featuredCampingTours]

  const safariImages = [
    "/images/safari-lions-vehicle.webp",
    "/images/safari-photographer-elephants.webp",
    "/images/safari-woman-wildebeest.webp",
  ]

  const campingImages = [
    "/images/camping-wildebeest-crossing.webp",
    "/images/camping-rhino-encounter.webp",
    "/images/camping-elephant-sighting.webp",
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance text-brand-olive">Our Safari Packages</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Choose from our carefully crafted safari experiences, featuring both luxury lodge stays and authentic
            camping adventures.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allFeaturedTours.map((tour, index) => {
            const imageArray = tour.category === "camping" ? campingImages : safariImages
            const tourIndex = tour.category === "camping" ? index - 3 : index
            const tourImage = imageArray[tourIndex % imageArray.length]

            return (
              <Card key={tour.id} className="overflow-hidden hover:shadow-lg transition-shadow group">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={tourImage || "/placeholder.svg"}
                    alt={tour.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20" />
                  <div className="absolute top-4 left-4">
                    <Badge variant={tour.category === "lodge" ? "default" : "secondary"} className="text-xs">
                      {tour.category === "lodge" ? "Lodge Safari" : "Camping Safari"}
                    </Badge>
                  </div>
                </div>

                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Clock className="h-4 w-4 text-brand-olive" />
                    <span className="text-sm text-muted-foreground">{tour.duration}</span>
                  </div>

                  <h3 className="text-xl font-bold mb-3 text-balance leading-tight group-hover:text-brand-olive transition-colors">
                    {tour.title}
                  </h3>

                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-2">{tour.description}</p>

                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <span className="text-sm font-medium">5.0</span>
                  </div>

                  <div className="text-2xl font-bold text-primary mb-4">
                    ${tour.price.toLocaleString()} <span className="text-sm font-normal text-muted-foreground">pp</span>
                  </div>

                  <div className="text-sm text-muted-foreground mb-4">
                    <span className="font-medium">Highlights:</span> {tour.highlights.slice(0, 2).join(", ")}
                  </div>
                </CardContent>

                <CardFooter className="p-6 pt-0">
                  <Link href={`/${tour.category}-safaris/${tour.slug}`} className="w-full">
                    <Button className="w-full">Book Now</Button>
                  </Link>
                </CardFooter>
              </Card>
            )
          })}
        </div>

        <div className="text-center mt-12 flex gap-4 justify-center">
          <Link href="/lodge-safaris">
            <Button variant="outline" size="lg">
              View All Lodge Safaris
            </Button>
          </Link>
          <Link href="/camping-safaris">
            <Button variant="outline" size="lg">
              View All Camping Safaris
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
