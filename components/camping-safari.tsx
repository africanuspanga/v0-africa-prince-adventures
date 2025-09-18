import { Card, CardContent } from "@/components/ui/card"
import { Tent } from "lucide-react"

const campingTours = [
  {
    title: "3 Days / 2 Nights Camping Safari",
    description: "An immersive camping experience in Tarangire National Park and Ngorongoro Crater.",
    duration: "3 Days / 2 Nights",
    imagePlaceholder: "Tent at campsite at night with stars visible",
  },
  {
    title: "4 Days / 3 Nights Tanzania Affordable Camping Safari",
    description: "Explore the Serengeti and Ngorongoro Crater on a budget-friendly camping trip.",
    duration: "4 Days / 3 Nights",
    imagePlaceholder: "Group of people around campfire",
  },
  {
    title: "5 Days / 4 Nights Safari Budget Camping in Tanzania",
    description: "A longer camping adventure covering Tarangire, Serengeti, and Ngorongoro.",
    duration: "5 Days / 4 Nights",
    imagePlaceholder: "Safari vehicle parked near tent with wildlife in background",
  },
  {
    title: "6 Days / 5 Nights Camping Safari Experience",
    description: "Our most extensive camping safari, including Tarangire, Serengeti, Ngorongoro, and Lake Manyara.",
    duration: "6 Days / 5 Nights",
    imagePlaceholder: "View of Lake Manyara",
  },
]

export function CampingSafari() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance text-brand-orange">
            Tanzania Camping Safari
          </h2>
        </div>

        <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
          {campingTours.map((tour, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-shadow group border-2 border-brand-orange/20 min-w-[320px] flex-shrink-0"
            >
              <div className="aspect-[4/3] bg-muted overflow-hidden rounded-t-lg">
                <div className="w-full h-full bg-gradient-to-br from-secondary/20 to-primary/20 flex items-center justify-center">
                  <p className="text-muted-foreground text-center px-4 text-sm">{tour.imagePlaceholder}</p>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Tent className="h-4 w-4 text-brand-orange" />
                  <span className="text-sm text-muted-foreground">{tour.duration}</span>
                </div>
                <h3 className="text-lg font-bold mb-3 text-foreground group-hover:text-brand-orange transition-colors">
                  {tour.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{tour.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
