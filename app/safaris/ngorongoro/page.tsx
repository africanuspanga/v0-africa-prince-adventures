import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Ngorongoro Crater - Complete Guide | Africa Prince Adventures",
  description:
    "Explore Ngorongoro Crater, the world's largest volcanic caldera and UNESCO World Heritage Site. Discover Big Five wildlife, Maasai culture, and conservation success.",
  keywords:
    "Ngorongoro Crater, volcanic caldera, Big Five, black rhino, Maasai culture, Tanzania safari, UNESCO World Heritage",
}

export default function NgorongoroPage() {
  return (
    <>
      <Header />
      <main>
        <div className="relative h-96 bg-gradient-to-r from-brand-olive/90 to-brand-olive/70">
          <Image src="/images/ngorongoro-elephants.jpeg" alt="Ngorongoro Crater" fill className="object-cover -z-10" />
          <div className="absolute inset-0 bg-black/40" />
          <div className="container mx-auto px-4 h-full flex items-center">
            <div className="text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">Ngorongoro Crater</h1>
              <p className="text-xl md:text-2xl">Africa's Garden of Eden</p>
            </div>
          </div>
        </div>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto prose prose-lg">
              <h2 className="text-3xl font-bold text-brand-olive mb-6">The World's Largest Volcanic Caldera</h2>

              <p className="text-lg leading-relaxed mb-6">
                The Ngorongoro Crater stands as one of Africa's most remarkable natural wonders and represents a
                pinnacle achievement in wildlife conservation. This UNESCO World Heritage Site, often referred to as
                "Africa's Garden of Eden," encompasses the world's largest inactive volcanic caldera, creating a unique
                ecosystem that has captivated visitors and researchers for decades.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                Formed approximately 2.5 million years ago when a massive volcano collapsed inward, the crater measures
                19 kilometers across, covers 264 square kilometers, and features walls rising 400-610 meters above the
                crater floor. This natural amphitheater creates a self-contained ecosystem that supports an
                extraordinary concentration of wildlife in a relatively small area, making it one of the most densely
                populated wildlife areas in Africa.
              </p>

              <h3 className="text-2xl font-bold text-brand-olive mb-4">Exceptional Wildlife Concentration</h3>

              <p className="text-lg leading-relaxed mb-6">
                The Ngorongoro Crater is home to approximately 25,000 large animals, creating one of the highest
                wildlife densities on the continent. This remarkable concentration exists because the crater's steep
                walls form a natural barrier, creating a largely self-contained ecosystem where animals rarely migrate
                outside the caldera. The permanent water sources, including Lake Magadi and numerous springs, ensure
                year-round wildlife viewing opportunities.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                The crater is one of the few places in Tanzania where visitors can reliably spot all members of the Big
                Five in a single day. The area supports approximately 7,000 wildebeest, 4,000 zebras, 3,000 eland, and
                3,000 gazelles. Large predator populations include around 62 lions living in seven prides, numerous
                spotted hyenas, and elusive leopards that inhabit the forested crater walls.
              </p>

              <h3 className="text-2xl font-bold text-brand-olive mb-4">The Last Sanctuary for Black Rhinos</h3>

              <p className="text-lg leading-relaxed mb-6">
                Perhaps most significantly, the Ngorongoro Crater serves as a critical sanctuary for the critically
                endangered black rhinoceros. The crater hosts one of Tanzania's most important black rhino populations,
                with approximately 30-40 individuals representing a vital genetic reservoir for this species. These
                magnificent creatures, once widespread across Africa, now find refuge within the crater's protective
                walls, making sightings particularly special and meaningful for conservation.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                The crater's elephant population, while smaller than other parks, consists of predominantly large bulls
                with impressive tusks. These elephants have adapted to the crater's unique environment and often display
                different behavioral patterns compared to their counterparts in other ecosystems, providing fascinating
                insights into elephant ecology and adaptation.
              </p>

              <h3 className="text-2xl font-bold text-brand-olive mb-4">Diverse Ecosystems and Habitats</h3>

              <p className="text-lg leading-relaxed mb-6">
                Despite its relatively compact size, the Ngorongoro Crater encompasses remarkably diverse habitats that
                support different wildlife communities. The crater floor features open grasslands, acacia woodlands,
                freshwater and alkaline lakes, swamps, and seasonal wetlands. Each habitat supports specialized species
                and provides different ecological niches within the broader ecosystem.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                Lake Magadi, a shallow alkaline lake in the crater's center, attracts thousands of flamingos during
                certain seasons, creating spectacular pink carpets across the water's surface. The surrounding
                grasslands support vast herds of grazing animals, while the acacia woodlands provide shelter and
                browsing opportunities for elephants and other species. The Lerai Forest, fed by underground springs,
                creates a lush oasis that supports different bird species and provides crucial dry season refuge for
                many animals.
              </p>

              <h3 className="text-2xl font-bold text-brand-olive mb-4">Maasai Cultural Heritage</h3>

              <p className="text-lg leading-relaxed mb-6">
                The Ngorongoro Conservation Area represents a unique model of conservation that integrates wildlife
                protection with indigenous cultural preservation. The Maasai people have coexisted with wildlife in this
                region for centuries, practicing traditional pastoralism that has actually contributed to maintaining
                the area's ecological balance. This coexistence demonstrates that conservation and traditional
                lifestyles can successfully complement each other.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                Visitors can experience authentic Maasai culture through village visits, where they learn about
                traditional practices, customs, and the deep spiritual connection between the Maasai people and their
                environment. These cultural interactions provide valuable insights into sustainable living practices and
                the importance of indigenous knowledge in conservation efforts.
              </p>

              <h3 className="text-2xl font-bold text-brand-olive mb-4">Optimal Visiting Experience</h3>

              <p className="text-lg leading-relaxed mb-6">
                The Ngorongoro Crater offers exceptional wildlife viewing year-round due to its permanent water sources
                and contained ecosystem. However, different seasons provide varying experiences. The dry season from
                June to October offers excellent game viewing with clear skies and comfortable temperatures, while the
                wet season from November to May brings lush green landscapes, newborn animals, and spectacular
                birdwatching opportunities.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                Game drives typically begin with a dramatic descent down the crater walls, offering breathtaking
                panoramic views of the crater floor below. The descent itself is an adventure, winding through different
                vegetation zones and providing opportunities to spot different species adapted to various elevations.
                Once on the crater floor, visitors can explore different areas, each offering unique wildlife viewing
                opportunities and photographic possibilities.
              </p>

              <h3 className="text-2xl font-bold text-brand-olive mb-4">Conservation Legacy and Future</h3>

              <p className="text-lg leading-relaxed">
                The Ngorongoro Crater stands as a testament to successful conservation practices and the possibility of
                balancing wildlife protection with human needs. Its designation as both a UNESCO World Heritage Site and
                Biosphere Reserve recognizes its global significance for biodiversity conservation and cultural
                preservation. The crater continues to serve as a living laboratory for conservation research and a model
                for sustainable tourism practices that benefit both wildlife and local communities, ensuring this
                natural wonder remains protected for future generations to experience and cherish.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-brand-olive text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Discover Ngorongoro Crater</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Experience the world's largest volcanic caldera and witness the Big Five in this natural wonder.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/camping-safaris"
                className="bg-white text-brand-olive px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Camping Safaris
              </a>
              <a
                href="/lodge-safaris"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-brand-olive transition-colors"
              >
                Lodge Safaris
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
