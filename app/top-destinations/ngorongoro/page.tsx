import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Ngorongoro Conservation Area - Garden of Eden | Africa Prince Adventures",
  description:
    "Explore the world's largest intact volcanic caldera and witness 25,000 large animals in Ngorongoro Crater. Home to endangered black rhinos and the Cradle of Mankind.",
  keywords:
    "Ngorongoro Crater, Conservation Area, Black Rhino, Big Five, Olduvai Gorge, Maasai Culture, Volcanic Caldera, Tanzania Safari, Cradle of Mankind",
}

export default function NgorongoroPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/images/ngorongoro-elephants.jpeg')`,
          }}
        />
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">Ngorongoro Conservation Area</h1>
          <p className="text-xl md:text-2xl mb-8 text-pretty">A Natural Wonder and Cradle of Humanity</p>
          <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto text-pretty">
            The Garden of Eden where wildlife and human history converge
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl leading-relaxed mb-8 text-muted-foreground">
              Often referred to as the "Garden of Eden," the Ngorongoro Conservation Area is a breathtaking and globally
              significant destination that seamlessly blends conservation, wildlife, and human history. At its heart
              lies the Ngorongoro Crater, the world's largest intact and unfilled volcanic caldera.
            </p>

            <h2 className="text-3xl font-bold mb-6 text-foreground">The Crater Ecosystem</h2>
            <p className="leading-relaxed mb-6">
              This immense, self-contained ecosystem, with a floor spanning over 260 square kilometers, is home to one
              of the densest populations of wildlife in all of Africa. The crater's walls, rising 600 meters, act as a
              natural enclosure, ensuring a resident population of some 25,000 large animals, including a high
              concentration of predators.
            </p>

            <p className="leading-relaxed mb-6">
              The Ngorongoro Crater is a marvel of biodiversity. Its varied habitats, from open grasslands and swamps to
              acacia woodlands and a central soda lake (Lake Magadi), support a staggering array of animals. It is one
              of the most reliable places to spot the "Big Five." The crater is a sanctuary for the critically
              endangered black rhinoceros, offering one of the best chances in Africa to see these magnificent creatures
              in their natural habitat.
            </p>

            <h2 className="text-3xl font-bold mb-6 text-foreground">Wildlife Abundance</h2>
            <p className="leading-relaxed mb-6">
              Its lion population is particularly notable for its density and unique behavior, often seen patrolling the
              crater floor. Beyond the big cats, you'll encounter huge herds of wildebeest, zebra, buffalo, and
              gazelles, along with hippos, hyenas, and an incredible variety of birds, including flocks of pink
              flamingos that descend upon Lake Magadi.
            </p>

            <h2 className="text-3xl font-bold mb-6 text-foreground">Cultural Heritage</h2>
            <p className="leading-relaxed mb-6">
              What truly sets Ngorongoro apart is its dual status as a World Heritage Site for both its natural and
              cultural significance. The Ngorongoro Conservation Area is a "multiple land use area" where conservation
              and human habitation coexist. The Maasai people, with their semi-nomadic, pastoralist lifestyle, are
              permitted to live and graze their livestock within the area, creating a unique and powerful harmony
              between man and nature.
            </p>

            <h2 className="text-3xl font-bold mb-6 text-foreground">Cradle of Mankind</h2>
            <p className="leading-relaxed mb-6">
              The area's historical importance is also immense. It is home to Olduvai Gorge, a 14-kilometer-long ravine
              often called the "Cradle of Mankind." Here, groundbreaking archaeological discoveries have been made,
              including the Laetoli footprints, a 3.6-million-year-old trail of hominin footprints, and fossil evidence
              that has fundamentally reshaped our understanding of human evolution.
            </p>

            <p className="leading-relaxed mb-8">
              The combination of a world-class safari destination with a profound connection to human history makes a
              visit to Ngorongoro a deeply enriching and unforgettable journey.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-muted">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Discover Ngorongoro</h2>
          <p className="text-lg mb-8 text-muted-foreground max-w-2xl mx-auto">
            Experience the Garden of Eden and witness the incredible wildlife density of the world's largest intact
            crater. Contact us to plan your journey to this natural wonder.
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
  )
}
