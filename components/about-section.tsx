import { Button } from "@/components/ui/button"
import Link from "next/link"

export function AboutSection() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="aspect-[4/3] bg-muted rounded-lg overflow-hidden">
              <img
                src="/images/about-section.jpeg"
                alt="Africa Prince Adventures safari vehicle with lion"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right column with exact content from specifications */}
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              Karibu Tanzania! Travel With Africa Prince Adventures
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed">
              We specialize in unforgettable safaris, from luxury to budget camping, along with day trips and airport
              pickups, all starting from the heart of Arusha, Tanzania. We are here to make your adventure smooth,
              personal, and memorable. We may be a new and growing company, but we offer authentic, guided experiences
              led by a passionate local expert who knows Tanzania by heart. Our mission is to share the rich beauty,
              wildlife, and culture of this land with travelers from around the world. Every journey with us is crafted
              to create lasting memories while supporting local communities and conservation efforts across Tanzania's
              magnificent landscapes.
            </p>

            <Button asChild className="bg-brand-orange hover:bg-brand-orange/90 text-white">
              <Link href="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
