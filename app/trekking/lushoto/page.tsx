import { Header } from "@/components/header"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Clock, Users, Mountain, TreePine, Home, Droplets } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Lushoto Mountains Trekking | Usambara Range | Africa Prince Adventures",
  description:
    "Trek through the lush Lushoto Mountains in the Usambara Range. Experience waterfalls, traditional villages, and stunning mountain scenery.",
  keywords:
    "Lushoto Mountains, Usambara Range, Tanzania trekking, waterfalls, traditional villages, cultural experience",
}

export default function LushotoTrekkingPage() {
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
                "url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Lushoto.jpg-f5T3FoukVDZy0awlnzr4yYXgVwXBBX.jpeg)",
            }}
          />

          <div className="relative z-20 text-center text-white max-w-4xl mx-auto px-4">
            <Badge className="mb-4 bg-brand-orange text-white">
              <Home className="w-4 h-4 mr-2" />
              Cultural Experience
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">Lushoto Mountains</h1>
            <p className="text-xl md:text-2xl mb-8 text-pretty">
              Lush green mountains with waterfalls and traditional villages
            </p>
          </div>
        </section>

        {/* Trek Overview */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">About Lushoto Mountains</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  The Lushoto Mountains, part of the Usambara Range, offer a perfect blend of natural beauty and
                  cultural immersion. Known for their lush green landscapes, cascading waterfalls, and welcoming
                  traditional villages, these mountains provide an authentic Tanzanian experience.
                </p>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-brand-orange" />
                    <div>
                      <div className="font-semibold">Duration</div>
                      <div className="text-sm text-muted-foreground">2-3 Days</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mountain className="w-5 h-5 text-brand-orange" />
                    <div>
                      <div className="font-semibold">Difficulty</div>
                      <div className="text-sm text-muted-foreground">Easy</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-brand-orange" />
                    <div>
                      <div className="font-semibold">Group Size</div>
                      <div className="text-sm text-muted-foreground">2-12 people</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <TreePine className="w-5 h-5 text-brand-orange" />
                    <div>
                      <div className="font-semibold">Elevation</div>
                      <div className="text-sm text-muted-foreground">1,200-2,200m</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="aspect-video rounded-lg overflow-hidden">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Lushoto.jpg-f5T3FoukVDZy0awlnzr4yYXgVwXBBX.jpeg"
                    alt="Lushoto Mountains - Misty cloud-covered green mountain peak with lush vegetation"
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
                  <Droplets className="h-12 w-12 mx-auto mb-4 text-brand-orange" />
                  <CardTitle>Beautiful Waterfalls</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Discover hidden waterfalls cascading through the lush mountain forests.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <Home className="h-12 w-12 mx-auto mb-4 text-brand-orange" />
                  <CardTitle>Traditional Villages</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Experience authentic village life and learn about local customs and traditions.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <TreePine className="h-12 w-12 mx-auto mb-4 text-brand-orange" />
                  <CardTitle>Lush Landscapes</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Trek through verdant forests and enjoy the cool mountain climate year-round.
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
                  <CardTitle>Lushoto Village Trek</CardTitle>
                  <CardDescription>2-3 days cultural and nature experience</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-muted-foreground">
                      Immerse yourself in the beauty of the Lushoto Mountains while experiencing authentic village life.
                      This gentle trek combines stunning natural scenery with meaningful cultural interactions, perfect
                      for all fitness levels.
                    </p>

                    <div className="grid grid-cols-2 gap-4 py-4 border-y">
                      <div className="text-center">
                        <div className="text-sm text-muted-foreground">Best Time</div>
                        <div className="font-semibold text-brand-orange">Year Round</div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm text-muted-foreground">Starting Point</div>
                        <div className="font-semibold text-brand-orange">Lushoto Town</div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-brand-olive mb-3">Trek Highlights:</h4>
                      <ul className="space-y-2">
                        <li className="text-sm text-muted-foreground flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
                          Visit to traditional Sambaa villages
                        </li>
                        <li className="text-sm text-muted-foreground flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
                          Waterfall hikes and swimming opportunities
                        </li>
                        <li className="text-sm text-muted-foreground flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
                          Local farming and craft demonstrations
                        </li>
                        <li className="text-sm text-muted-foreground flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
                          Panoramic mountain viewpoints
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
            <h2 className="text-3xl font-bold mb-6">Experience Lushoto Mountains</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Discover the perfect blend of nature and culture in Tanzania's green mountains
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
