import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Arusha National Park - The Jewel of the North | Africa Prince Adventures",
  description:
    "Explore Mount Meru, Ngurdoto Crater, and Momella Lakes in Arusha National Park. Perfect for canoeing, walking safaris, and giraffe encounters in Tanzania.",
  keywords:
    "Arusha National Park, Mount Meru, Ngurdoto Crater, Momella Lakes, Canoe Safari, Walking Safari, Giraffes, Colobus Monkeys, Tanzania",
}

export default function ArushaPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/images/arusha-zebra.jpeg')`,
          }}
        />
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">Arusha National Park</h1>
          <p className="text-xl md:text-2xl mb-8 text-pretty">The Jewel of the North</p>
          <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto text-pretty">
            A microcosm of Tanzania's diverse landscapes and unique safari experiences
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl leading-relaxed mb-8 text-muted-foreground">
              Arusha National Park, a small but stunning gem, is a microcosm of Tanzania's diverse landscapes and
              wildlife, offering a multi-faceted experience that is truly unique. Located just a short drive from the
              city of Arusha, this park is often overlooked on typical safari itineraries, but its distinct habitats and
              incredible scenery make it a must-visit destination for those seeking adventure beyond the classic game
              drive.
            </p>

            <h2 className="text-3xl font-bold mb-6 text-foreground">Three Spectacular Features</h2>
            <p className="leading-relaxed mb-6">
              The park is defined by three spectacular features. The first is Mount Meru, Africa's fifth-highest peak
              and a dormant volcano that dominates the western part of the park. Its slopes are a paradise for hikers,
              offering a challenging but rewarding climb that serves as an excellent acclimatization hike for Mount
              Kilimanjaro.
            </p>

            <p className="leading-relaxed mb-6">
              The second is the Ngurdoto Crater, a lush, forested caldera often called "Little Ngorongoro." The crater's
              steep walls are a haven for wildlife, and while vehicles are not permitted on the floor, you can enjoy
              panoramic views of its resident buffalo, warthogs, and a variety of antelopes from a series of observation
              points.
            </p>

            <h2 className="text-3xl font-bold mb-6 text-foreground">Momella Lakes</h2>
            <p className="leading-relaxed mb-6">
              The third, and perhaps most captivating, feature is the Momella Lakes. This series of seven shallow,
              alkaline lakes are a spectacle of color, with their hues ranging from turquoise to deep green, influenced
              by the mineral content and algae. The lakes are a haven for waterbirds, including large flocks of
              pink-hued flamingos, pelicans, and a variety of migratory species.
            </p>

            <p className="leading-relaxed mb-6">
              A canoe safari on these serene waters provides an unparalleled opportunity to glide silently past buffalo
              and giraffes grazing on the shores, with the majestic backdrop of Mount Meru. This unique water-based
              safari experience is one of the few places in Tanzania where you can paddle alongside wildlife.
            </p>

            <h2 className="text-3xl font-bold mb-6 text-foreground">Giraffe Paradise</h2>
            <p className="leading-relaxed mb-6">
              Arusha National Park is famous for its high concentration of giraffes, and it is arguably one of the best
              places in Africa to see them up close. The park's lush forests are also home to the striking
              black-and-white colobus monkey, known for their long, silky capes and acrobatic movements through the
              canopy.
            </p>

            <h2 className="text-3xl font-bold mb-6 text-foreground">Diverse Activities</h2>
            <p className="leading-relaxed mb-6">
              While the park does not have lions or rhinoceroses, its diverse fauna includes elephants, leopards,
              zebras, and a plethora of smaller antelopes. The park's compact size and variety of activities—from game
              drives and canoeing to walking safaris and mountain climbing—make it a perfect addition to any northern
              Tanzania itinerary.
            </p>

            <p className="leading-relaxed mb-8">
              Arusha National Park offers a refreshing and intimate connection with nature, providing experiences that
              go far beyond traditional game viewing and create lasting memories of Tanzania's incredible diversity.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-muted">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Experience Arusha</h2>
          <p className="text-lg mb-8 text-muted-foreground max-w-2xl mx-auto">
            Discover the unique beauty of Arusha National Park with canoe safaris, walking adventures, and close
            encounters with giraffes. Contact us to plan your diverse Tanzania experience.
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
