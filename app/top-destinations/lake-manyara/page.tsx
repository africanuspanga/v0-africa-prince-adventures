import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"
import { ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "Lake Manyara National Park - Tree-Climbing Lions & Flamingos | Africa Prince Adventures",
  description:
    "Discover Lake Manyara National Park's famous tree-climbing lions, thousands of flamingos, and diverse wildlife. Experience the treetop walkway and cultural tours in this compact gem.",
  keywords:
    "Lake Manyara National Park, tree-climbing lions, flamingos, Tanzania safari, treetop walkway, Mto wa Mbu, canoeing safari, baboons, elephants",
}

export default function LakeManyaraPage() {
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
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/images/lake-manyara-lions.jpeg')`,
            }}
          />
          <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">Lake Manyara National Park</h1>
            <p className="text-xl md:text-2xl mb-8 text-pretty">A Small Gem with Big Surprises</p>
            <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto text-pretty">
              Where tree-climbing lions rest in acacia branches and flamingos paint the lake pink
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl leading-relaxed mb-8 text-muted-foreground">
                Often a first stop on Tanzania's popular northern safari circuit, Lake Manyara National Park is a small
                but incredibly diverse park that packs a powerful punch. Tucked between the Great Rift Valley's steep
                escarpment and the alkaline Lake Manyara, this park offers a stunning variety of landscapes and a unique
                safari experience that sets it apart from its larger counterparts. Ernest Hemingway famously described
                it as "the loveliest I had seen in Africa," and for good reason—its beauty is breathtaking.
              </p>

              <h2 className="text-3xl font-bold mb-6 text-foreground">The Tree-Climbing Lions</h2>
              <p className="leading-relaxed mb-6">
                Lake Manyara is perhaps most famous for its <strong>tree-climbing lions</strong>. While lions typically
                rest on the ground, a portion of the population here has developed the rare habit of lounging on the
                branches of acacia and fig trees. The exact reason for this behavior is still debated—some theories
                suggest it's to escape the heat and tsetse flies, while others believe it's a learned predatory
                technique. Regardless of the reason, spotting a powerful lion casually draped over a branch is a truly
                special and unforgettable sight.
              </p>

              <h2 className="text-3xl font-bold mb-6 text-foreground">A Haven for Wildlife and Birds</h2>
              <p className="leading-relaxed mb-6">
                Despite its compact size, the park boasts a remarkable density of wildlife and a diverse range of
                habitats. The lush groundwater forests at the base of the escarpment are home to large troops of{" "}
                <strong>baboons</strong>—reputedly the largest population in the world—as well as vervet monkeys and
                other forest-dwelling creatures. As you move into the open grasslands and acacia woodlands, you'll
                encounter a high concentration of <strong>elephants</strong>, along with giraffes, buffalo, wildebeest,
                zebras, and impala.
              </p>

              <p className="leading-relaxed mb-6">
                The alkaline <strong>Lake Manyara</strong> itself is a major draw. At certain times of the year, it is
                transformed into a shimmering pink spectacle as thousands of <strong>flamingos</strong> descend on its
                waters to feed on the algae. The park is a birdwatcher's paradise, with over 400 species recorded,
                including pelicans, storks, herons, and a variety of raptors. A <strong>canoeing safari</strong> on the
                lake is a fantastic way to get a different perspective, gliding past hippos and seeing the shoreline
                animals from the water.
              </p>

              <h2 className="text-3xl font-bold mb-6 text-foreground">Unique Activities and Experiences</h2>
              <p className="leading-relaxed mb-6">
                What makes Lake Manyara an excellent addition to any safari itinerary is the variety of activities it
                offers. Beyond the traditional game drives, visitors can enjoy a <strong>Treetop Walkway</strong>, a
                360-meter-long suspended bridge that takes you on a high-flying adventure through the forest canopy,
                offering a unique "bird's-eye" view of the park's flora and fauna.
              </p>

              <p className="leading-relaxed mb-8">
                The area surrounding the park is also rich in cultural experiences. You can take a{" "}
                <strong>cultural tour</strong> of the nearby vibrant town of Mto wa Mbu, a melting pot of various
                Tanzanian tribes. Here, you can learn about their customs, try local food, or take a mountain biking
                tour through the village farms.
              </p>

              <p className="leading-relaxed mb-8">
                While Lake Manyara may not have the sheer scale of the Serengeti or the massive game concentrations of
                the Ngorongoro Crater, it offers a rewarding and unique safari experience defined by its stunning
                scenery, iconic tree-climbing lions, and the chance to explore the African wilderness in different and
                exciting ways.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-muted">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Experience Lake Manyara</h2>
            <p className="text-lg mb-8 text-muted-foreground max-w-2xl mx-auto">
              Ready to witness the famous tree-climbing lions and explore the diverse ecosystems of Lake Manyara?
              Contact us to plan your unforgettable safari adventure.
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
