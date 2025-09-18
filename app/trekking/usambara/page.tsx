import { Header } from "@/components/header"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Clock, Users, Mountain, TreePine, Camera, MapPin } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Usambara Mountains Trekking | Eastern Arc Mountains | Africa Prince Adventures",
  description:
    "Explore the Usambara Mountains, part of Tanzania's Eastern Arc Mountains. Experience biodiversity hotspots, endemic species, and scenic viewpoints.",
  keywords: "Usambara Mountains, Eastern Arc Mountains, Tanzania trekking, biodiversity, endemic species, forest trek",
}

export default function UsambaraTrekkingPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-background">
        {/* Back to Trekking Button */}
        <div className="container mx-auto px-4 py-4">
          <Button variant="ghost" asChild className="mb-4">
            <Link href="/trekking" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Trekking
            </Link>
          </Button>
        </div>

        {/* Hero Section */}
        <section className="relative h-[60vh] flex items-center justify-center">
          <div className="absolute inset-0 bg-black/40 z-10" />
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Usambara.jpg-04HSlyqVtOJUVgZhTpjzFpD0GLbvdE.jpeg)",
            }}
          />

          <div className="relative z-20 text-center text-white max-w-4xl mx-auto px-4">
            <Badge className="mb-4 bg-brand-orange text-white">
              <TreePine className="w-4 h-4 mr-2" />
              Biodiversity Hotspot
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">Usambara Mountains</h1>
            <p className="text-xl md:text-2xl mb-8 text-pretty">
              Discover the Eastern Arc Mountains' incredible biodiversity and endemic species
            </p>
          </div>
        </section>

        {/* Trek Overview */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">About Usambara Mountains</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  The Usambara Mountains are part of the Eastern Arc Mountains, known as the "Galápagos of Africa" for
                  their incredible biodiversity. These ancient mountains harbor numerous endemic species and offer
                  spectacular viewpoints across the surrounding landscape.
                </p>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-brand-orange" />
                    <div>
                      <div className="font-semibold">Duration</div>
                      <div className="text-sm text-muted-foreground">2-4 Days</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mountain className="w-5 h-5 text-brand-orange" />
                    <div>
                      <div className="font-semibold">Difficulty</div>
                      <div className="text-sm text-muted-foreground">Easy-Moderate</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-brand-orange" />
                    <div>
                      <div className="font-semibold">Group Size</div>
                      <div className="text-sm text-muted-foreground">2-15 people</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <TreePine className="w-5 h-5 text-brand-orange" />
                    <div>
                      <div className="font-semibold">Ecosystem</div>
                      <div className="text-sm text-muted-foreground">Cloud Forest</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="aspect-video rounded-lg overflow-hidden">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Usambara.jpg-04HSlyqVtOJUVgZhTpjzFpD0GLbvdE.jpeg"
                    alt="Usambara Mountains - Scenic view with red soil, green trees, and rocky outcrop"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Trek Highlights</h2>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <Card className="text-center">
                <CardHeader>
                  <TreePine className="h-12 w-12 mx-auto mb-4 text-brand-orange" />
                  <CardTitle>Endemic Species</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Discover unique flora and fauna found nowhere else on Earth in these ancient mountains.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <Camera className="h-12 w-12 mx-auto mb-4 text-brand-orange" />
                  <CardTitle>Scenic Viewpoints</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Enjoy breathtaking panoramic views across the Eastern Arc landscape and coastal plains.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <MapPin className="h-12 w-12 mx-auto mb-4 text-brand-orange" />
                  <CardTitle>Cultural Villages</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Visit traditional villages and learn about local culture and conservation efforts.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Trek Options */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Trek Options</h2>

            <div className="max-w-3xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle>Usambara Forest Trek</CardTitle>
                  <CardDescription>2-4 days exploring the biodiversity hotspot</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-muted-foreground">
                      Explore the cloud forests of the Usambara Mountains, home to endemic species like the Usambara
                      eagle-owl and African violet. Trek through pristine forests, visit scenic viewpoints, and
                      experience local culture.
                    </p>

                    <div className="grid grid-cols-2 gap-4 py-4 border-y">
                      <div className="text-center">
                        <div className="text-sm text-muted-foreground">Best Time</div>
                        <div className="font-semibold text-brand-orange">June - October</div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm text-muted-foreground">Starting Point</div>
                        <div className="font-semibold text-brand-orange">Lushoto</div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-brand-olive mb-3">Trek Highlights:</h4>
                      <ul className="space-y-2">
                        <li className="text-sm text-muted-foreground flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
                          Endemic bird and plant species viewing
                        </li>
                        <li className="text-sm text-muted-foreground flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
                          Spectacular mountain viewpoints
                        </li>
                        <li className="text-sm text-muted-foreground flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
                          Traditional village visits
                        </li>
                        <li className="text-sm text-muted-foreground flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
                          Cloud forest ecosystem exploration
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-brand-orange text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Explore the Usambara Mountains</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Discover one of Africa's most biodiverse mountain ranges with our expert guides
            </p>
            <Button size="lg" variant="secondary">
              <Link href="/contact">Book Now</Link>
            </Button>
          </div>
        </section>
      </div>
    </>
  )
}
