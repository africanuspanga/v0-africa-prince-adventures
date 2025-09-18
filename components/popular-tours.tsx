import { Card, CardContent } from "@/components/ui/card"
import { Clock } from "lucide-react"

const tours = [
  {
    title: "3 Days / 2 Night Classic Safari",
    description: "Explore the best of Serengeti and Ngorongoro Crater in a short but unforgettable adventure.",
    duration: "3 Days / 2 Nights",
    imagePlaceholder: "Serengeti sunset",
  },
  {
    title: "4 Days / 3 Night Fly-in Fly-out",
    description: "Maximize your time on safari with a quick and convenient fly-in fly-out experience.",
    duration: "4 Days / 3 Nights",
    imagePlaceholder: "Small plane on dirt airstrip",
  },
  {
    title: "5 Days / 4 Night Wildebeest Migration & L. Natron",
    description:
      "Witness one of nature's greatest spectacles, the Great Migration, and visit the stunning Lake Natron.",
    duration: "5 Days / 4 Nights",
    imagePlaceholder: "Large herd of wildebeest crossing river",
  },
  {
    title: "5 Days / 4 Night Experience Of Tanzania",
    description: "A comprehensive journey through Tarangire, Serengeti, and Ngorongoro.",
    duration: "5 Days / 4 Nights",
    imagePlaceholder: "Baobab tree in Tarangire",
  },
]

export function PopularTours() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance text-brand-olive">
            Most Popular Tanzania Vacation Itineraries
          </h2>
        </div>

        <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
          {tours.map((tour, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow group min-w-[320px] flex-shrink-0">
              <div className="aspect-[4/3] bg-muted overflow-hidden rounded-t-lg">
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <p className="text-muted-foreground text-center px-4 text-sm">{tour.imagePlaceholder}</p>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Clock className="h-4 w-4 text-brand-olive" />
                  <span className="text-sm text-muted-foreground">{tour.duration}</span>
                </div>
                <h3 className="text-lg font-bold mb-3 text-foreground group-hover:text-brand-olive transition-colors">
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
