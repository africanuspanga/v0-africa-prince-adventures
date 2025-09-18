import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Camera, Clock } from "lucide-react"

const destinations = [
  {
    name: "Serengeti National Park",
    description: "Witness the Great Migration and endless plains teeming with wildlife.",
    highlights: ["Great Migration", "Big Five", "Endless Plains"],
    bestTime: "June - October",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    name: "Ngorongoro Crater",
    description: "Explore the world's largest intact volcanic caldera, a UNESCO World Heritage Site.",
    highlights: ["Volcanic Caldera", "Dense Wildlife", "Maasai Culture"],
    bestTime: "Year Round",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    name: "Tarangire National Park",
    description: "Famous for its large elephant herds and iconic baobab trees.",
    highlights: ["Elephant Herds", "Baobab Trees", "Bird Watching"],
    bestTime: "June - October",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    name: "Lake Manyara",
    description: "Known for tree-climbing lions and diverse ecosystems.",
    highlights: ["Tree-climbing Lions", "Flamingos", "Hot Springs"],
    bestTime: "November - April",
    image: "/placeholder.svg?height=400&width=600",
  },
]

export function Destinations() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Explore Tanzania's Iconic Destinations</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            From the vast Serengeti plains to the breathtaking Ngorongoro Crater, discover the diverse landscapes that
            make Tanzania a premier safari destination.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {destinations.map((destination, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow group">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={destination.image || "/placeholder.svg"}
                  alt={destination.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-2xl font-bold mb-2">{destination.name}</h3>
                </div>
              </div>

              <CardContent className="p-6">
                <p className="text-muted-foreground mb-4 leading-relaxed">{destination.description}</p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-2">
                    <Camera className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-medium">Highlights: </span>
                      <span className="text-muted-foreground">{destination.highlights.join(", ")}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-primary" />
                    <span className="font-medium">Best Time: </span>
                    <span className="text-muted-foreground">{destination.bestTime}</span>
                  </div>
                </div>

                <Button variant="outline" className="w-full bg-transparent">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
