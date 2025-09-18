import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Nyerere National Park Safari | The Wild Heart of the South - Africa Prince Adventures",
  description:
    "Discover Nyerere National Park, Tanzania's largest park and former Selous Game Reserve. Experience boat safaris on the Rufiji River, spot African wild dogs, and explore untamed wilderness with Africa Prince Adventures.",
  keywords:
    "Nyerere National Park, Selous Game Reserve, Tanzania safari, Rufiji River, boat safari, African wild dogs, elephants, walking safari, night game drives",
  openGraph: {
    title: "Nyerere National Park Safari | The Wild Heart of the South",
    description:
      "Experience Tanzania's largest national park with boat safaris, walking safaris, and incredible wildlife including African wild dogs and massive elephant herds.",
  },
}

export default function NyererePage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <div
          className="relative h-[70vh] bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Nyerere.jpg-F23oKFV6HQnJaQcaVWGfkvu7vFUgPJ.jpeg')`,
          }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white px-4">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 text-balance">Nyerere National Park</h1>
              <p className="text-xl md:text-2xl mb-6 text-balance">The Wild Heart of the South</p>
              <p className="text-lg max-w-2xl mx-auto leading-relaxed">
                Tanzania's largest national park offering remote wilderness experiences and unique boat safaris
              </p>
            </div>
          </div>
        </div>

        {/* Introduction Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <p className="text-lg leading-relaxed text-muted-foreground mb-8">
                Nyerere National Park, formerly the northern part of the vast Selous Game Reserve, is a monumental
                wilderness and a premier safari destination that embodies the true essence of an untouched African
                safari. As one of the largest national parks in Africa, covering over 30,000 square kilometers, it
                offers a remote and intimate experience far from the crowds of the northern circuit. Its sheer size and
                low visitor numbers create an atmosphere of raw, untamed nature, making every game drive feel like an
                expedition into the unknown.
              </p>
            </div>
          </div>
        </section>

        {/* Rufiji River Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-brand-olive">The Mighty Rufiji River</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  The park's defining feature is the <strong>Rufiji River</strong>, a lifeline that carves through the
                  landscape, creating a network of channels, swamps, and oxbow lakes. This river system is the park's
                  vibrant heart, supporting an incredible concentration of wildlife.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  A <strong>boat safari</strong> on the Rufiji is a signature Nyerere experience. Gliding along the
                  water, you'll encounter immense pods of <strong>hippos</strong> and huge Nile{" "}
                  <strong>crocodiles</strong> basking on the sandbanks. You can also see a variety of animals, from
                  elephants to waterbucks, drinking at the water's edge, offering a unique, water-level perspective on
                  the wild.
                </p>
              </div>
              <div className="relative h-80">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Nyerere.jpg-F23oKFV6HQnJaQcaVWGfkvu7vFUgPJ.jpeg"
                  alt="Rufiji River in Nyerere National Park"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Wildlife Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-brand-olive">Extraordinary Wildlife</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-brand-olive">African Wild Dogs</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Nyerere is one of the last true strongholds for the critically endangered{" "}
                    <strong>African wild dog</strong>. A sighting of a pack on the hunt is a rare and unforgettable
                    privilege that few safari destinations can offer.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-brand-olive">Massive Elephant Herds</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Home to one of Africa's largest populations of <strong>elephants</strong>, and a significant
                    population of <strong>lions</strong>, making sightings of these majestic predators a highlight of
                    any visit.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-brand-olive">Rich Biodiversity</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    The park's diverse habitats support sable and roan antelopes, greater kudu, and spectacular birdlife
                    of over <strong>440 species</strong> across miombo woodlands to open savannahs.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Activities Section */}
        <section className="py-16 bg-brand-olive text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Unique Safari Activities</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-4">Walking Safaris</h3>
                <p className="leading-relaxed mb-6 opacity-90">
                  <strong>Walking safaris</strong> allow you to connect with the bush on foot, guided by an armed
                  ranger, providing an up-close look at the park's flora, smaller creatures, and animal tracks.
                  Experience the wilderness at ground level and discover the intricate details often missed from a
                  vehicle.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Night Game Drives</h3>
                <p className="leading-relaxed mb-6 opacity-90">
                  <strong>Night game drives</strong> offer a thrilling opportunity to spot elusive nocturnal animals
                  like leopards, civets, and genets, their eyes glowing in the dark as they emerge to hunt. Experience
                  the African bush come alive after sunset.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Planning Your Visit */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-8 text-brand-olive">Plan Your Nyerere Adventure</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Experience the raw beauty of Tanzania's largest national park with our expertly guided safaris. From
                boat safaris on the Rufiji River to walking safaris through pristine wilderness, Nyerere offers an
                authentic African adventure.
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
