import { Button } from "@/components/ui/button"
import { ArrowRight, Phone } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Ready for Your African Adventure?</h2>
          <p className="text-xl mb-8 text-balance opacity-90 leading-relaxed">
            Let us create a personalized safari experience that will exceed your expectations. Contact our expert team
            today to start planning your dream Tanzania safari.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6 group">
              Start Planning Your Safari
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call Us Now
            </Button>
          </div>

          <div className="mt-8 text-sm opacity-75">
            <p>Free consultation • Custom itineraries • 24/7 support</p>
          </div>
        </div>
      </div>
    </section>
  )
}
