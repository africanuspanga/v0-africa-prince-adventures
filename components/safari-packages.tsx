import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, Calendar } from "lucide-react"

const packages = [
  {
    id: 1,
    title: "9-Day Serengeti, Ngorongoro, Tarangire & Kilimanjaro",
    duration: "9 Days - 8 Nights",
    price: "$2,370",
    rating: 5,
    reviews: 6,
    locations: ["Arusha (Start)", "Serengeti NP", "Lake Eyasi", "Ngorongoro", "Tarangire NP (End)"],
    tags: ["Tanzania", "Private", "Budget", "Camping"],
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: 2,
    title: "8-Day Tarangire, Serengeti & Ngorongoro Crater Mid Range",
    duration: "8 Days - 7 Nights",
    price: "$2,610",
    rating: 5,
    reviews: 7,
    locations: ["Serengeti NP (Start)", "Ngorongoro", "Tarangire NP (End)"],
    tags: ["Tanzania", "Private", "Mid Range", "Lodge"],
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: 3,
    title: "6-Day Tanzania Mid Range Safari",
    duration: "6 Days - 5 Nights",
    price: "$2,090",
    rating: 4.9,
    reviews: 13,
    locations: ["Serengeti NP (Start)", "Ngorongoro", "Lake Manyara NP (End)"],
    tags: ["Tanzania", "Private", "Mid Range", "Lodge"],
    image: "/placeholder.svg?height=300&width=400",
  },
]

export function SafariPackages() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Our Safari Packages</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Choose from our carefully crafted safari experiences, each designed to showcase the best of Tanzania's
            wildlife and landscapes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <Card key={pkg.id} className="overflow-hidden hover:shadow-lg transition-shadow group">
              <CardHeader className="p-0">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={pkg.image || "/placeholder.svg"}
                    alt={pkg.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <div className="bg-white/90 backdrop-blur-sm rounded-full p-2">
                      <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {pkg.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <h3 className="text-xl font-bold mb-3 text-balance leading-tight">{pkg.title}</h3>

                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(pkg.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm font-medium">{pkg.rating}/5</span>
                  <span className="text-sm text-muted-foreground">({pkg.reviews} Reviews)</span>
                </div>

                <div className="text-2xl font-bold text-primary mb-4">
                  {pkg.price} <span className="text-sm font-normal text-muted-foreground">pp</span>
                </div>

                <div className="flex items-center gap-2 mb-4 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>{pkg.duration}</span>
                </div>

                <div className="text-sm text-muted-foreground">
                  <span className="font-medium">You Visit:</span>{" "}
                  {pkg.locations.map((location, index) => (
                    <span key={location}>
                      {location}
                      {index < pkg.locations.length - 1 ? ", " : ""}
                    </span>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="p-6 pt-0">
                <Button className="w-full">View Details</Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            View All Safari Packages
          </Button>
        </div>
      </div>
    </section>
  )
}
