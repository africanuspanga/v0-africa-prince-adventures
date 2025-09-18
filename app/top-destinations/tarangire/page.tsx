import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "Tarangire National Park - Kingdom of Giants | Africa Prince Adventures",
  description:
    "Witness massive elephant herds and ancient baobab trees in Tarangire National Park. Home to 300+ elephants and over 550 bird species in Tanzania.",
  keywords:
    "Tarangire National Park, Elephant Herds, Baobab Trees, Tanzania Safari, Bird Watching, Walking Safari, Night Game Drive, Mini Migration",
}

export default function TarangirePage() {
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
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/images/tarangire-elephant.jpeg')`,
            }}
          />
          <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">Tarangire National Park</h1>
            <p className="text-xl md:text-2xl mb-8 text-pretty">The Kingdom of Giants and Ancient Baobabs</p>
            <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto text-pretty">
              Where massive elephant herds roam beneath thousand-year-old baobab trees
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl leading-relaxed mb-8 text-muted-foreground">
                Tarangire National Park is a hidden gem on Tanzania's northern safari circuit, offering a wild and
                authentic safari experience defined by its monumental elephant herds and a landscape of ancient baobab
                trees. The park's name is derived from the Tarangire River, which serves as its lifeline and a crucial
                water source for wildlife, especially during the dry season.
              </p>

              <h2 className="text-3xl font-bold mb-6 text-foreground">The Mini Migration</h2>
              <p className="leading-relaxed mb-6">
                As the sun-baked plains of the surrounding areas dry up, a "mini-migration" of animals, including
                thousands of elephants, wildebeest, and zebra, converges on the river, creating a spectacular
                concentration of wildlife. This seasonal movement transforms Tarangire into one of Africa's most
                wildlife-dense destinations during the dry months.
              </p>

              <h2 className="text-3xl font-bold mb-6 text-foreground">Elephant Paradise</h2>
              <p className="leading-relaxed mb-6">
                The park is legendary for its elephant population. It is home to some of the largest herds in Africa,
                with groups of up to 300 individuals congregating along the riverbanks. Watching these gentle giants
                interact, from matriarchs leading their families to playful youngsters wrestling in the mud, is a deeply
                moving experience. The elephants of Tarangire are often seen using their immense strength to dig in the
                dry riverbeds, seeking out subterranean water—a testament to their intelligence and resilience.
              </p>

              <h2 className="text-3xl font-bold mb-6 text-foreground">Ancient Baobab Landscape</h2>
              <p className="leading-relaxed mb-6">
                Tarangire's landscape is a masterpiece of nature, dominated by the surreal and majestic presence of the
                baobab tree. These ancient giants, some over a thousand years old, stand like sentinels across the
                savanna, their gnarled branches and massive trunks creating a captivating and otherworldly backdrop for
                your safari photos. The park's diverse habitats also include vast grasslands, acacia woodlands, and
                seasonal swamps that attract a multitude of herbivores.
              </p>

              <h2 className="text-3xl font-bold mb-6 text-foreground">Birdwatcher's Paradise</h2>
              <p className="leading-relaxed mb-6">
                For birdwatchers, Tarangire is a paradise, home to species like the striking yellow-collared lovebird,
                the heavy-set Kori bustard, and the vibrant lilac-breasted roller. With over 550 bird species recorded,
                the park offers some of the best birding opportunities in Tanzania.
              </p>

              <h2 className="text-3xl font-bold mb-6 text-foreground">Diverse Wildlife</h2>
              <p className="leading-relaxed mb-6">
                Beyond elephants, Tarangire offers excellent game viewing. It is a fantastic place to spot lions and
                leopards, which often rest in the shade of the sausage trees, named for their unusual, pendulous fruit.
                The park also boasts a good population of cheetahs, as well as a variety of rare antelopes such as the
                greater kudu and the fringe-eared oryx.
              </p>

              <p className="leading-relaxed mb-8">
                For the adventurous traveler, Tarangire is one of the few parks that offers guided walking safaris and
                exhilarating night game drives, providing a completely different perspective on the wilderness and the
                chance to witness nocturnal animals in their element.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-muted">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Explore Tarangire</h2>
            <p className="text-lg mb-8 text-muted-foreground max-w-2xl mx-auto">
              Ready to witness massive elephant herds and walk among ancient baobab trees? Contact us to plan your
              authentic Tarangire safari adventure.
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
