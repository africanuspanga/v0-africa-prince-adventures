import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "John D.",
    location: "USA",
    flag: "🇺🇸",
    rating: 5,
    text: "An unforgettable journey! The guide's knowledge was incredible, and we saw so many animals. Highly recommended for anyone seeking authentic African adventure.",
  },
  {
    name: "Mette S.",
    location: "Denmark",
    flag: "🇩🇰",
    rating: 5,
    text: "Everything was so well organized. The camping experience was a perfect way to connect with nature and witness Tanzania's incredible wildlife up close.",
  },
  {
    name: "Luca F.",
    location: "Italy",
    flag: "🇮🇹",
    rating: 5,
    text: "Our honeymoon safari in Tanzania was magical. A perfect safari experience with professional guides and breathtaking landscapes throughout our journey.",
  },
  {
    name: "Kenji M.",
    location: "Japan",
    flag: "🇯🇵",
    rating: 5,
    text: "Amazing trip! The Serengeti scenery was absolutely stunning. Professional service and unforgettable memories. Thank you for this incredible experience.",
  },
]

export function Testimonials() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance text-brand-orange">What Our Guests Say</h2>
          <p className="text-lg text-muted-foreground mb-8">Trusted by thousands of travelers worldwide</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="flex items-center justify-center mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < testimonial.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed italic text-sm">"{testimonial.text}"</p>

                <div className="flex items-center justify-center gap-3">
                  <div className="text-2xl">{testimonial.flag}</div>
                  <div>
                    <div className="font-semibold text-brand-orange">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
