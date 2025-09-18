import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, MapPin, Users, Star } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import type { Tour } from "@/lib/tours-data"

interface TourCardProps {
  tour: Tour
}

const safariImages = [
  "/images/safari-lions-vehicle.webp",
  "/images/safari-photographer-elephants.webp",
  "/images/safari-woman-wildebeest.webp",
  "/images/safari-lion-kill.jpeg",
  "/images/safari-woman-elephant.webp",
]

const campingImages = [
  "/images/camping-wildebeest-crossing.webp",
  "/images/camping-rhino-encounter.webp",
  "/images/camping-elephant-sighting.webp",
  "/images/camping-zebra-herd.webp",
]

export function TourCard({ tour }: TourCardProps) {
  const baseUrl = tour.category === "lodge" ? "/lodge-safaris" : "/camping-safaris"
  const imageIndex = Number.parseInt(tour.id.split("-")[1]) - 1

  const imageArray = tour.category === "camping" ? campingImages : safariImages
  const tourImage = imageArray[imageIndex % imageArray.length]

  return (
    <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
      <CardHeader className="p-0">
        <div className="relative h-48 overflow-hidden">
          <Image
            src={tourImage || "/placeholder.svg"}
            alt={tour.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-black/20" />
          <div className="absolute top-4 left-4">
            <Badge variant="secondary" className="bg-white/90 text-brand-orange font-semibold">
              {tour.duration}
            </Badge>
          </div>
          <div className="absolute bottom-4 left-4 right-4">
            <h3 className="text-xl font-bold text-white mb-2 text-balance">{tour.title}</h3>
          </div>
        </div>
      </CardHeader>

      <CardContent className="p-6">
        <p className="text-muted-foreground mb-4 leading-relaxed text-sm">{tour.description}</p>

        <div className="space-y-3 mb-4">
          <div className="flex items-center gap-2 text-sm">
            <Clock className="h-4 w-4 text-brand-orange" />
            <span>{tour.duration}</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <MapPin className="h-4 w-4 text-brand-orange" />
            <span>Northern Tanzania Circuit</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Users className="h-4 w-4 text-brand-orange" />
            <span>Small Groups</span>
          </div>
        </div>

        <div className="mb-4">
          <h4 className="font-semibold mb-2 text-sm">Highlights:</h4>
          <div className="flex flex-wrap gap-1">
            {tour.highlights.slice(0, 3).map((highlight, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                {highlight}
              </Badge>
            ))}
            {tour.highlights.length > 3 && (
              <Badge variant="outline" className="text-xs">
                +{tour.highlights.length - 3} more
              </Badge>
            )}
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <div className="text-2xl font-bold text-brand-orange">${tour.price.toLocaleString()}</div>
            <div className="text-xs text-muted-foreground">per person</div>
          </div>
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-6 pt-0">
        <div className="w-full flex flex-col gap-2">
          <Button asChild className="w-full bg-brand-orange hover:bg-brand-orange/90">
            <Link href={`${baseUrl}/${tour.slug}`}>View Details & Book Now</Link>
          </Button>
          <p className="text-xs text-center text-muted-foreground">Free cancellation • Best price guarantee</p>
        </div>
      </CardFooter>
    </Card>
  )
}
