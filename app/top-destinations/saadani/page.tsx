import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "Saadani National Park Safari | Where Bush Meets Beach - Africa Prince Adventures",
  description:
    "Experience Tanzania's only coastal national park where elephants walk on beaches and lions roam near the Indian Ocean. Unique beach and bush safari with green turtle conservation.",
  keywords:
    "Saadani National Park, coastal safari, beach safari, Tanzania coast, Indian Ocean, green turtle, Wami River, beach and bush, coastal wildlife",
  openGraph: {
    title: "Saadani National Park Safari | Where Bush Meets Beach",
    description:
      "Discover Tanzania's unique coastal national park combining beach relaxation with authentic safari experiences along the Indian Ocean.",
  },
}

export default function SaadaniPage() {
  return (
    <>
      <Header />
      <main>
        <div className="bg-muted/30 py-4">
          <div className="container mx-auto px-4">
            <a
              href="/top-destinations"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Destinations
            </a>
          </div>
        </div>

        {/* Hero Section */}
        <div
          className="relative h-[70vh] bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/images/saadani-beach.jpeg')`,
          }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white px-4">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 text-balance">Saadani National Park</h1>
              <p className="text-xl md:text-2xl mb-6 text-balance">Where the Bush Meets the Beach</p>
              <p className="text-lg max-w-2xl mx-auto leading-relaxed">
                Tanzania's only coastal wildlife sanctuary combining African bush with Indian Ocean coastline
              </p>
            </div>
          </div>
        </div>

        {/* Introduction Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <p className="text-lg leading-relaxed text-muted-foreground mb-8">
                Saadani National Park holds the unique distinction of being Tanzania's only coastal wildlife sanctuary,
                a place where the <strong>African bush and the Indian Ocean coastline merge</strong>. This extraordinary
                blend of ecosystems creates a safari experience unlike any other. Imagine spotting a lion on a game
                drive, then later the same day, strolling along a pristine white-sand beach where elephants might wander
                by, or watching dolphins play in the waves just offshore.
              </p>
            </div>
          </div>
        </section>

        {/* Unique Experience Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative h-80">
                <Image
                  src="/images/saadani-beach.jpeg"
                  alt="Saadani National Park beach and wildlife"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-6 text-brand-olive">A Unique Geographical Duality</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  The park's main attraction is its stunning geographical duality. On one side, you have classic East
                  African savannah teeming with wildlife: elephants, giraffes, buffalo, and a variety of antelopes like
                  the Lichtenstein's hartebeest and greater kudu.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  While the animal densities may not be as high as in the northern parks, the sense of discovery is
                  immense. Saadani's predators, including <strong>lions and leopards</strong>, are more elusive, which
                  makes a sighting feel even more special and rewarding.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Activities Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-brand-olive">Unique Coastal Safari Activities</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-brand-olive">Wami River Boat Safaris</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    The <strong>Wami River</strong>, which flows through the park and empties into the Indian Ocean, is
                    a crucial waterway and a hub for aquatic life.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Navigate through lush mangrove forests, spotting hippos, crocodiles, and a fantastic array of
                    waterbirds on these popular boat safari experiences.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-brand-olive">Green Turtle Conservation</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    The park's Madete beach is a vital <strong>green sea turtle breeding ground</strong>, and visitors
                    can witness the conservation efforts to protect these endangered creatures.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Experience the magic of turtle nesting season and learn about marine conservation efforts.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-brand-olive">Mafui Sandbank Adventures</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Go snorkeling or swimming at the Mafui sandbank, a magical island that appears and disappears with
                    the tides.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    This unique tidal phenomenon creates perfect opportunities for water activities and marine life
                    observation.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-brand-olive">Marine Wildlife Watching</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Spot humpback whales and dolphins from the coastline, adding a marine dimension to your safari
                    experience.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    The park's diverse birdlife includes over 370 species, from coastal kingfishers to savannah
                    hornbills.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Wildlife & Conservation Section */}
        <section className="py-16 bg-brand-olive text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-8">Wildlife & Conservation</h2>
              <p className="text-lg leading-relaxed mb-8 opacity-90">
                Saadani supports diverse wildlife including elephants, lions, leopards, and over 370 bird species. The
                park offers a unique combination of game drives, beach walks, boat safaris on the Wami River, and
                cultural visits to local fishing villages.
              </p>
              <p className="text-lg leading-relaxed opacity-90">
                For those who seek a peaceful, uncrowded safari that combines adventure with relaxation, Saadani
                National Park is a hidden gem that promises a truly unforgettable, multi-faceted holiday.
              </p>
            </div>
          </div>
        </section>

        {/* Planning Your Visit */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-8 text-brand-olive">Plan Your Coastal Safari Adventure</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Experience the unique combination of beach and bush at Tanzania's only coastal national park. From game
                drives to beach relaxation, turtle conservation to boat safaris, Saadani offers an unparalleled safari
                experience.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/camping-safaris"
                  className="bg-brand-olive text-white px-8 py-3 rounded-lg font-semibold hover:bg-brand-olive/90 transition-colors"
                >
                  Camping Safaris
                </a>
                <a
                  href="/lodge-safaris"
                  className="border-2 border-brand-olive text-brand-olive px-8 py-3 rounded-lg font-semibold hover:bg-brand-olive hover:text-white transition-colors"
                >
                  Lodge Safaris
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
