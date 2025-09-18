import { TourCard } from "./tour-card"
import type { Tour } from "@/lib/tours-data"

interface ToursGridProps {
  tours: Tour[]
  title?: string
  description?: string
}

export function ToursGrid({ tours, title, description }: ToursGridProps) {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        {title && (
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance text-brand-orange">{title}</h2>
            {description && <p className="text-lg text-muted-foreground max-w-3xl mx-auto">{description}</p>}
          </div>
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tours.map((tour) => (
            <TourCard key={tour.id} tour={tour} />
          ))}
        </div>
      </div>
    </section>
  )
}
