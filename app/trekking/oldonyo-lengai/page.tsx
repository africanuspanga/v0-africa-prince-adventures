import { Header } from "@/components/header"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Clock, Users, Mountain, Flame, Moon, Thermometer } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Oldonyo Lengai Trekking | Mountain of God | Africa Prince Adventures",
  description:
    "Climb Oldonyo Lengai, the active volcano known as the Mountain of God. Experience unique night climbing and witness an active volcanic crater.",
  keywords: "Oldonyo Lengai, Mountain of God, active volcano, Tanzania trekking, night climb, volcanic crater",
}

export default function OldonyoLengaiTrekkingPage() {
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
                "url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Oldonyo%20lengai.jpg-LnUmUNGCVM3TQ2EXvYQkOlktHMKPgC.jpeg)",
            }}
          />

          <div className="relative z-20 text-center text-white max-w-4xl mx-auto px-4">
            <Badge className="mb-4 bg-brand-orange text-white">
              <Flame className="w-4 h-4 mr-2" />
              Active Volcano
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">Oldonyo Lengai</h1>
            <p className="text-xl md:text-2xl mb-8 text-pretty">
              The Mountain of God - Tanzania's active volcano with unique night climbing experience
            </p>
          </div>
        </section>

        {/* Trek Overview */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">About Oldonyo Lengai</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Oldonyo Lengai, meaning "Mountain of God" in the Maasai language, is Tanzania's only active volcano.
                  This unique mountain offers the rare opportunity to witness an active volcanic crater and experience
                  the challenging night climb that has become legendary among adventurous trekkers.
                </p>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-brand-orange" />
                    <div>
                      <div className="font-semibold">Duration</div>
                      <div className="text-sm text-muted-foreground">1-2 Days</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mountain className="w-5 h-5 text-brand-orange" />
                    <div>
                      <div className="font-semibold">Altitude</div>
                      <div className="text-sm text-muted-foreground">2,962m</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-brand-orange" />
                    <div>
                      <div className="font-semibold">Group Size</div>
                      <div className="text-sm text-muted-foreground">2-8 people</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Thermometer className="w-5 h-5 text-brand-orange" />
                    <div>
                      <div className="font-semibold">Difficulty</div>
                      <div className="text-sm text-muted-foreground">Hard</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="aspect-video rounded-lg overflow-hidden">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Oldonyo%20lengai.jpg-LnUmUNGCVM3TQ2EXvYQkOlktHMKPgC.jpeg"
                    alt="Oldonyo Lengai - Aerial view of the active volcano with distinctive cone shape"
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
                  <Flame className="h-12 w-12 mx-auto mb-4 text-brand-orange" />
                  <CardTitle>Active Volcano</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Witness an active volcanic crater with unique natrocarbonatite lava formations.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <Moon className="h-12 w-12 mx-auto mb-4 text-brand-orange" />
                  <CardTitle>Night Climbing</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Experience the unique challenge of night climbing to avoid extreme daytime heat.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <Mountain className="h-12 w-12 mx-auto mb-4 text-brand-orange" />
                  <CardTitle>Rift Valley Views</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Enjoy spectacular sunrise views over the Great Rift Valley from the summit.
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
                  <CardTitle>Oldonyo Lengai Night Climb</CardTitle>
                  <CardDescription>1-2 days active volcano adventure</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-muted-foreground">
                      The ultimate volcanic adventure! This challenging night climb takes you to the crater of
                      Tanzania's only active volcano. Start climbing at midnight to reach the summit for sunrise and
                      witness the unique natrocarbonatite lava formations.
                    </p>

                    <div className="grid grid-cols-2 gap-4 py-4 border-y">
                      <div className="text-center">
                        <div className="text-sm text-muted-foreground">Best Time</div>
                        <div className="font-semibold text-brand-orange">June - March</div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm text-muted-foreground">Start Time</div>
                        <div className="font-semibold text-brand-orange">Midnight</div>
                      </div>
                    </div>

                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                      <h4 className="font-semibold text-yellow-800 mb-2">Important Notice:</h4>
                      <p className="text-sm text-yellow-700">
                        This is an extremely challenging trek requiring excellent physical fitness. The climb involves
                        steep, loose volcanic rock and extreme temperatures. Not recommended for beginners.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-brand-olive mb-3">Trek Highlights:</h4>
                      <ul className="space-y-2">
                        <li className="text-sm text-muted-foreground flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
                          Active volcanic crater exploration
                        </li>
                        <li className="text-sm text-muted-foreground flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
                          Unique natrocarbonatite lava viewing
                        </li>
                        <li className="text-sm text-muted-foreground flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
                          Spectacular Rift Valley sunrise
                        </li>
                        <li className="text-sm text-muted-foreground flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
                          Maasai cultural interaction
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
            <h2 className="text-3xl font-bold mb-6">Conquer the Mountain of God</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Experience the ultimate volcanic adventure with our expert guides
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
