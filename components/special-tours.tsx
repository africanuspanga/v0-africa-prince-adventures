import { Card, CardContent } from "@/components/ui/card"
import { Heart, Users, Crown, UserCheck, MapPin } from "lucide-react"

const specialTours = [
  {
    title: "Serengeti Wildebeest Migration",
    description: "Witness the awe-inspiring annual spectacle of millions of wildebeest and zebras.",
    icon: MapPin,
    image: "/images/wildebeest-migration.jpeg",
  },
  {
    title: "Private Safari",
    description: "Enjoy a fully customized and exclusive safari experience tailored to your exact preferences.",
    icon: Crown,
    image: "/images/private-safari.jpeg",
  },
  {
    title: "Honeymoon Safari",
    description: "Celebrate your love with a romantic and unforgettable safari adventure in the African bush.",
    icon: Heart,
    image: "/images/honeymoon-safari.webp",
  },
  {
    title: "Group Safaris",
    description: "Travel with friends or family on a planned group tour and share the adventure together.",
    icon: Users,
    image: "/images/group-safaris.webp",
  },
  {
    title: "Cultural Tourism",
    description: "Immerse yourself in the local cultures of Tanzania with authentic village visits and guided tours.",
    icon: UserCheck,
    image: "/images/cultural-safaris.jpeg",
  },
]

export function SpecialTours() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance text-brand-olive">
            Special Tours We Offer in Tanzania
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {specialTours.map((tour, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow group text-center overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={tour.image || "/placeholder.svg"}
                  alt={tour.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
              </div>
              <CardContent className="p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-6 bg-brand-olive">
                  <tour.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-brand-olive group-hover:text-brand-orange transition-colors">
                  {tour.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{tour.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
