import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const nationalParks = [
  {
    name: "Serengeti National Park",
    description:
      "Home to the Great Migration, Serengeti National Park spans 14,763 km² and is globally recognized for its incredible wildlife spectacle. Witness over 1.5 million wildebeest and 200,000 zebras traverse the endless plains in their annual migration.",
    image: "/images/serengeti-balloon.jpeg",
    link: "/top-destinations/serengeti",
  },
  {
    name: "Ngorongoro Crater",
    description:
      "A UNESCO World Heritage Site, the Ngorongoro Conservation Area features the world's largest inactive volcanic caldera. This natural amphitheater is home to approximately 25,000 large animals, including all of the Big Five.",
    image: "/images/ngorongoro-elephants.jpeg",
    link: "/top-destinations/ngorongoro",
  },
  {
    name: "Tarangire National Park",
    description:
      "Famous for its massive elephant herds and iconic ancient baobab trees, Tarangire National Park covers 2,850 km² of diverse habitats. During the dry season, the park becomes a wildlife magnet as animals congregate around the Tarangire River.",
    image: "/images/tarangire-elephant.jpeg",
    link: "/top-destinations/tarangire",
  },
  {
    name: "Lake Manyara National Park",
    description:
      "Spanning 330 km², Lake Manyara National Park is renowned for its incredible biodiversity and unique tree-climbing lions. The park features diverse ecosystems from groundwater forests to alkaline soda lake shores.",
    image: "/images/lake-manyara-lions.jpeg",
    link: "/top-destinations/lake-manyara",
  },
]

export function NationalParksSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance text-brand-olive">
            Explore Tanzania's Premier National Parks
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Discover the diverse landscapes and incredible wildlife that make Tanzania a world-class safari destination.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {nationalParks.map((park, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow group">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={park.image || "/placeholder.svg"}
                  alt={park.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-2xl font-bold mb-2">{park.name}</h3>
                </div>
              </div>

              <CardContent className="p-6">
                <p className="text-muted-foreground mb-6 leading-relaxed">{park.description}</p>

                <Link href={park.link}>
                  <Button variant="outline" className="w-full bg-transparent">
                    Learn More
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
