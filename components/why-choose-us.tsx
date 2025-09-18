import { Users, MapPin, Headphones, Shield } from "lucide-react"

const features = [
  {
    icon: Users,
    title: "Local Expertise",
    description:
      "Our team consists of passionate local experts who know Tanzania by heart, offering you an authentic and insightful journey.",
  },
  {
    icon: MapPin,
    title: "Unmatched Flexibility",
    description:
      "From luxurious lodge safaris to immersive budget camping trips, we tailor every itinerary to your unique travel style and budget.",
  },
  {
    icon: Headphones,
    title: "Personalized Experience",
    description:
      "We are a small, dedicated company that provides a personal touch, ensuring a seamless and memorable adventure from start to finish.",
  },
  {
    icon: Shield,
    title: "Commitment to Quality",
    description:
      "We use top-of-the-line 4x4 safari vehicles and work with trusted partners to guarantee a safe, comfortable, and world-class safari experience.",
  },
]

export function WhyChooseUs() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance text-brand-orange">Why Choose Us?</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-6 bg-brand-orange">
                <feature.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-brand-orange">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
