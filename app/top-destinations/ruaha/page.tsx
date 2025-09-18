import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "Ruaha National Park Safari | The Untamed Wilderness - Africa Prince Adventures",
  description:
    "Explore Ruaha National Park, Tanzania's largest park with 10% of the world's lions, massive elephant herds, and ancient baobab trees. Remote authentic safari experience.",
  keywords:
    "Ruaha National Park, Tanzania largest park, Great Ruaha River, baobab trees, lions, elephants, African wild dogs, remote safari, authentic wilderness",
  openGraph: {
    title: "Ruaha National Park Safari | The Untamed Wilderness",
    description:
      "Experience Tanzania's largest national park with massive lion populations, elephant herds, and ancient baobab landscapes in remote wilderness.",
  },
}

export default function RuahaPage() {
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
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/images/ruaha-hippos.webp')`,
          }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white px-4">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 text-balance">Ruaha National Park</h1>
              <p className="text-xl md:text-2xl mb-6 text-balance">The Untamed Wilderness of the South</p>
              <p className="text-lg max-w-2xl mx-auto leading-relaxed">
                Tanzania's largest national park and one of Africa's most authentic safari destinations
              </p>
            </div>
          </div>
        </div>

        {/* Introduction Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <p className="text-lg leading-relaxed text-muted-foreground mb-8">
                Ruaha National Park is Tanzania's largest national park and a true testament to the term "untamed
                wilderness." Situated in the heart of the country, it remains one of Africa's most authentic and
                least-visited safari destinations. The park's rugged, dramatic landscape is a captivating mosaic of
                sweeping savannahs, ancient baobab trees, and the life-giving <strong>Great Ruaha River</strong>, which
                carves through its core. This raw, untouched beauty and sense of remoteness make Ruaha a favorite among
                safari connoisseurs.
              </p>
            </div>
          </div>
        </section>

        {/* Unique Ecosystem Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-brand-olive">Unique Biodiversity</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  The park's ecosystem is a unique blend of species from both northern and southern Africa, leading to
                  an extraordinary level of biodiversity. This convergence creates wildlife viewing opportunities found
                  nowhere else on the continent.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Ruaha is particularly famous for its enormous <strong>elephant</strong> population, with an estimated
                  12,000 elephants migrating through the greater ecosystem. The park is also home to a staggering{" "}
                  <strong>10% of the world's lion population</strong>, and the prides here are known for their
                  impressive size and spectacular hunts along the riverbanks.
                </p>
              </div>
              <div className="relative h-80">
                <Image
                  src="/images/ruaha-hippos.webp"
                  alt="Wildlife at Great Ruaha River"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Wildlife Highlights */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-brand-olive">Wildlife Highlights</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-brand-olive">Massive Lion Population</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Home to <strong>10% of the world's lion population</strong>, with prides known for their impressive
                    size and spectacular hunts along the Great Ruaha River during the dry season.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-brand-olive">Ancient Baobab Trees</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    The park's most iconic feature is the <strong>baobab tree</strong>, which stands tall and proud,
                    giving the landscape a surreal, ancient feel that creates unforgettable photographic opportunities.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-brand-olive">Rare Antelope Species</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    One of the few places to see both greater and lesser kudu, as well as sable and roan antelopes. The
                    park is also a stronghold for the endangered <strong>African wild dog</strong>.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Great Ruaha River Section */}
        <section className="py-16 bg-brand-olive text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">The Great Ruaha River</h2>
              <p className="text-lg leading-relaxed mb-8 opacity-90">
                The Great Ruaha River is a magnet for animals during the dry season (June to October), when water is
                scarce. This is the best time for game viewing, as massive herds of buffalo, wildebeest, and zebra
                converge on the river, attracting predators like <strong>lions, cheetahs, and leopards</strong>.
              </p>
              <p className="text-lg leading-relaxed opacity-90">
                The dramatic riverbanks provide the perfect stage for witnessing the raw drama of African wildlife, from
                massive crocodiles basking in the sun to elephants cooling off in the muddy waters.
              </p>
            </div>
          </div>
        </section>

        {/* Birdwatching Paradise */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative h-80">
                <Image
                  src="/placeholder.svg?height=320&width=480"
                  alt="Birdlife in Ruaha National Park"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-6 text-brand-olive">Birdwatcher's Paradise</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  For birders, Ruaha is a paradise with over <strong>570 species</strong> recorded, including both
                  resident and migratory birds. The diverse habitats from riverine forests to open savannahs support an
                  incredible variety of avian life.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  The park's remote location ensures that you'll have an exclusive and intimate experience, with very
                  few other vehicles on your game drives, allowing for uninterrupted wildlife observation and
                  photography.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Activities Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-brand-olive">Safari Activities</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-4 text-brand-olive">Game Drives</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Traditional game drives through diverse landscapes, from baobab-studded savannahs to riverine
                    forests, offering exceptional wildlife viewing opportunities.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-4 text-brand-olive">Walking Safaris</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Guided walking safaris provide a deep and personal connection with the spectacular wild landscape,
                    led by experienced armed rangers.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-4 text-brand-olive">Night Game Drives</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    In select areas, night game drives offer opportunities to spot nocturnal species and experience the
                    African wilderness after dark.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Planning Your Visit */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-8 text-brand-olive">Plan Your Ruaha Adventure</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Ruaha is not just a safari; it's an adventure into one of Africa's last great frontiers. Experience the
                raw beauty of Tanzania's largest national park with massive lion populations, ancient baobab landscapes,
                and unparalleled wildlife diversity.
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
