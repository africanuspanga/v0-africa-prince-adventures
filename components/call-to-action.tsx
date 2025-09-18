import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, MessageCircle, Calendar, Award, Shield } from "lucide-react"
import Link from "next/link"

interface CallToActionProps {
  variant?: "default" | "compact"
  title?: string
  description?: string
}

export function CallToAction({
  variant = "default",
  title = "Ready to Start Your African Adventure?",
  description = "Contact our safari experts today to plan your perfect Tanzania experience. We'll help you create memories that will last a lifetime.",
}: CallToActionProps) {
  if (variant === "compact") {
    return (
      <section className="py-12 bg-brand-orange text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">{title}</h2>
          <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">{description}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="font-semibold">
              <Link href="/contact">Get Free Quote</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-brand-orange font-semibold bg-transparent"
            >
              <Link href="https://wa.me/255735051566" target="_blank">
                <MessageCircle className="h-4 w-4 mr-2" />
                WhatsApp Us
              </Link>
            </Button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20 bg-gradient-to-br from-brand-orange/5 to-brand-orange/10">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance text-brand-orange">{title}</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">{description}</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Contact Information */}
            <div className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-brand-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Phone className="h-6 w-6 text-brand-orange" />
                    </div>
                    <h3 className="font-semibold mb-2">Call Us</h3>
                    <p className="text-sm text-muted-foreground mb-3">Speak directly with our safari experts</p>
                    <Button asChild variant="outline" size="sm" className="w-full bg-transparent">
                      <Link href="tel:+255735051566">+255 735 051 566</Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-green-600/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <MessageCircle className="h-6 w-6 text-green-600" />
                    </div>
                    <h3 className="font-semibold mb-2">WhatsApp</h3>
                    <p className="text-sm text-muted-foreground mb-3">Quick responses & instant quotes</p>
                    <Button asChild variant="outline" size="sm" className="w-full bg-transparent">
                      <Link href="https://wa.me/255735051566" target="_blank">
                        <MessageCircle className="h-4 w-4 mr-2" />
                        Chat Now
                      </Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-blue-600/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Mail className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="font-semibold mb-2">Email Us</h3>
                    <p className="text-sm text-muted-foreground mb-3">Detailed itineraries & planning</p>
                    <Button asChild variant="outline" size="sm" className="w-full bg-transparent">
                      <Link href="mailto:adventuresprince@gmail.com">Send Email</Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-purple-600/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Calendar className="h-6 w-6 text-purple-600" />
                    </div>
                    <h3 className="font-semibold mb-2">Book Online</h3>
                    <p className="text-sm text-muted-foreground mb-3">Easy online booking system</p>
                    <Button asChild variant="outline" size="sm" className="w-full bg-transparent">
                      <Link href="/contact">Book Now</Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>

              <div className="flex items-center justify-center gap-8 pt-6 border-t">
                <div className="flex items-center gap-2 text-sm">
                  <Award className="h-4 w-4 text-brand-orange" />
                  <span className="font-medium">5-Star Rated</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Shield className="h-4 w-4 text-brand-orange" />
                  <span className="font-medium">Licensed & Insured</span>
                </div>
              </div>
            </div>

            {/* Main CTA */}
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-3 text-brand-orange">Get Your Free Safari Quote</h3>
                <p className="text-muted-foreground">
                  Tell us about your dream safari and we'll create a personalized itinerary just for you.
                </p>
              </div>

              <div className="space-y-4">
                <Button
                  asChild
                  size="lg"
                  className="w-full bg-brand-orange hover:bg-brand-orange/90 text-white font-semibold"
                >
                  <Link href="/contact">
                    <Calendar className="h-4 w-4 mr-2" />
                    Plan My Safari
                  </Link>
                </Button>

                <div className="text-center">
                  <p className="text-sm text-muted-foreground mb-2">Or contact us directly:</p>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <Button asChild variant="outline" className="flex-1 bg-transparent">
                      <Link href="https://wa.me/255735051566" target="_blank">
                        <MessageCircle className="h-4 w-4 mr-2" />
                        WhatsApp
                      </Link>
                    </Button>
                    <Button asChild variant="outline" className="flex-1 bg-transparent">
                      <Link href="tel:+255735051566">
                        <Phone className="h-4 w-4 mr-2" />
                        Call Now
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t text-center">
                <div className="text-xs text-muted-foreground space-y-1">
                  <p>✓ Free consultation & quote</p>
                  <p>✓ Customizable itineraries</p>
                  <p>✓ 24/7 support during your trip</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
