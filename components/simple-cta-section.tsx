import { Button } from "@/components/ui/button"
import Link from "next/link"

export function SimpleCTASection() {
  return (
    <section className="py-20 bg-brand-olive text-white">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Ready to Start Your African Adventure?</h2>
          <p className="text-xl mb-8 text-balance opacity-90 leading-relaxed">
            Let us create a personalized safari experience that will exceed your expectations. Contact our expert team
            today to start planning your dream Tanzania safari.
          </p>

          <Link href="/contact">
            <Button
              size="lg"
              variant="secondary"
              className="text-lg px-8 py-6 bg-white text-brand-olive hover:bg-gray-100 font-semibold"
            >
              CONTACT US
            </Button>
          </Link>

          <div className="mt-8 text-sm opacity-75">
            <p>Free consultation • Custom itineraries • 24/7 support</p>
          </div>
        </div>
      </div>
    </section>
  )
}
