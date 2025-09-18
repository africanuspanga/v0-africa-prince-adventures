import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"
import { ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "Serengeti National Park - The Soul of African Safari | Africa Prince Adventures",
  description:
    "Experience the Great Migration and witness over 1.5 million wildebeest in Serengeti National Park. Home to the largest lion population in Africa and the iconic Big Five.",
  keywords:
    "Serengeti National Park, Great Migration, African Safari, Big Five, Tanzania Wildlife, Wildebeest Migration, Lion Safari, Kopjes, Serengeti Plains",
}

export default function SerengetiPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-background">
        <div className="bg-muted/30 py-4">
          <div className="max-w-4xl mx-auto px-4">
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
        <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/images/serengeti-balloon.jpeg')`,
            }}
          />
          <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">Serengeti National Park</h1>
            <p className="text-xl md:text-2xl mb-8 text-pretty">The Soul of the African Safari</p>
            <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto text-pretty">
              Where the land runs on forever and the Great Migration creates nature's most spectacular show
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl leading-relaxed mb-8 text-muted-foreground">
                Spanning a staggering 14,750 square kilometers, Serengeti National Park is not just a destination; it's
                a timeless spectacle and the very heart of the African safari experience. The name "Serengeti" is said
                to be derived from the Maasai word <em>Siringet</em>, meaning "the place where the land runs on
                forever," a poetic and accurate description of its vast, treeless plains that stretch to the horizon.
              </p>

              <h2 className="text-3xl font-bold mb-6 text-foreground">The Great Migration</h2>
              <p className="leading-relaxed mb-6">
                The Great Migration is the park's most famous and awe-inspiring feature. It is a circular, year-long
                trek of over 1.5 million wildebeest, 250,000 zebra, and hundreds of thousands of gazelles. Driven by the
                ancient rhythm of the rains in search of fresh grazing lands, this colossal movement is a dramatic
                display of nature's raw power and the relentless cycle of life. Witnessing the herds crossing the
                crocodile-infested Grumeti or Mara Rivers is a heart-pounding, unforgettable experience that draws
                visitors from all corners of the globe.
              </p>

              <h2 className="text-3xl font-bold mb-6 text-foreground">Wildlife Sanctuary</h2>
              <p className="leading-relaxed mb-6">
                Beyond the migration, the Serengeti is a sanctuary for an incredible diversity of wildlife. It is home
                to the largest lion population in Africa, with prides often found lounging on the iconic <em>kopjes</em>
                —ancient granite rock formations that dot the plains. These rocky outcrops provide perfect vantage
                points for predators and are a signature feature of the Serengeti landscape. The park is also one of the
                best places in Africa to spot the elusive leopard, often seen draped over acacia tree branches.
              </p>

              <p className="leading-relaxed mb-6">
                The "Big Five"—lion, leopard, elephant, buffalo, and rhinoceros—are all present, though the rhino
                population is critically endangered and sightings are rare, making each one a true privilege.
              </p>

              <h2 className="text-3xl font-bold mb-6 text-foreground">Diverse Landscapes</h2>
              <p className="leading-relaxed mb-6">
                The park's geography is as varied as its wildlife. The southern plains are the epitome of the "endless
                plains" with short grasses and scattered <em>kopjes</em>. The western corridor, with its riverine
                forests along the Grumeti and Mbalageti Rivers, is a key stage for the Great Migration. The northern
                Serengeti is a world of open woodlands and rolling hills, a quieter, more remote part of the park that
                offers a different, more intimate safari experience.
              </p>

              <p className="leading-relaxed mb-8">
                From the volcanic grasslands of the east, shaped by eruptions from volcanoes like Ol Doinyo Lengai, to
                the vast, open savannahs, the Serengeti's landscape tells a geological story as old as time itself. A
                hot air balloon safari at sunrise offers a breathtaking, bird's-eye view of this magnificent kingdom, a
                truly magical way to appreciate its sheer scale and beauty.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-muted">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Experience the Serengeti</h2>
            <p className="text-lg mb-8 text-muted-foreground max-w-2xl mx-auto">
              Ready to witness the Great Migration and explore the endless plains of the Serengeti? Contact us to plan
              your unforgettable safari adventure.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-lg font-semibold"
            >
              Contact Us
            </a>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}
