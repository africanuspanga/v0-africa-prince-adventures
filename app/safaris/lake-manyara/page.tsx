import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Lake Manyara National Park - Complete Guide | Africa Prince Adventures",
  description:
    "Explore Lake Manyara National Park, famous for tree-climbing lions, flamingo flocks, and diverse ecosystems. Complete safari guide with 400+ bird species.",
  keywords:
    "Lake Manyara National Park, tree-climbing lions, flamingos, canopy walk, bird watching, Tanzania safari, alkaline lake",
}

export default function LakeManyaraPage() {
  return (
    <>
      <Header />
      <main>
        <div className="relative h-96 bg-gradient-to-r from-brand-olive/90 to-brand-olive/70">
          <Image
            src="/images/lake-manyara-lions.jpeg"
            alt="Lake Manyara National Park"
            fill
            className="object-cover -z-10"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="container mx-auto px-4 h-full flex items-center">
            <div className="text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">Lake Manyara National Park</h1>
              <p className="text-xl md:text-2xl">Where Lions Climb Trees</p>
            </div>
          </div>
        </div>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto prose prose-lg">
              <h2 className="text-3xl font-bold text-brand-olive mb-6">A Compact Jewel of Biodiversity</h2>

              <p className="text-lg leading-relaxed mb-6">
                Lake Manyara National Park, though one of Tanzania's smaller national parks at just 330 square
                kilometers, offers an extraordinarily diverse safari experience that perfectly demonstrates how size
                doesn't determine significance in wildlife conservation. This remarkable park showcases an incredible
                variety of ecosystems within its compact boundaries, from groundwater forests and acacia woodlands to
                grasslands and the alkaline waters of Lake Manyara itself.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                Nestled at the base of the dramatic Great Rift Valley escarpment, the park presents visitors with
                stunning landscapes and unique wildlife encounters that have made it famous worldwide. The park's
                diverse habitats support an exceptional concentration of wildlife and provide some of East Africa's most
                unusual and memorable safari experiences, including the world-renowned tree-climbing lions that have
                become synonymous with Lake Manyara.
              </p>

              <h3 className="text-2xl font-bold text-brand-olive mb-4">The Famous Tree-Climbing Lions</h3>

              <p className="text-lg leading-relaxed mb-6">
                Lake Manyara National Park is globally celebrated for its unique population of tree-climbing lions, a
                behavior that is extremely rare among African lions and observed in only a few locations worldwide.
                These magnificent predators have adapted to spending considerable time resting in the branches of large
                acacia and sausage trees, sometimes at heights of up to 20 feet above the ground. This unusual behavior
                is believed to be an adaptation to avoid biting insects on the ground and to take advantage of cooling
                breezes in the tree canopy.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                The sight of these powerful cats lounging casually in tree branches creates one of Africa's most iconic
                and photographically stunning wildlife encounters. While the exact reasons for this behavior continue to
                fascinate researchers, theories include escaping ground-dwelling parasites, avoiding the heat, and
                gaining better vantage points for hunting. The tree-climbing lions of Lake Manyara have become so famous
                that they attract wildlife enthusiasts and photographers from around the globe, making lion sightings
                here particularly special and memorable.
              </p>

              <h3 className="text-2xl font-bold text-brand-olive mb-4">Spectacular Flamingo Gatherings</h3>

              <p className="text-lg leading-relaxed mb-6">
                The alkaline waters of Lake Manyara create ideal conditions for massive flamingo congregations that can
                number in the tens of thousands during peak seasons. These elegant birds create breathtaking pink
                carpets across the lake's surface, particularly during the dry season when water levels recede and
                concentrate the algae and small crustaceans that flamingos feed upon. The sight of thousands of
                flamingos taking flight simultaneously creates one of nature's most spectacular aerial displays.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                The lake supports both greater and lesser flamingo species, along with numerous other waterbirds
                including pelicans, cormorants, storks, and various species of herons and egrets. The seasonal
                fluctuations in water levels and alkalinity create dynamic conditions that influence flamingo numbers
                throughout the year, making each visit to Lake Manyara a unique experience with different opportunities
                for wildlife photography and birdwatching.
              </p>

              <h3 className="text-2xl font-bold text-brand-olive mb-4">Incredible Avian Diversity</h3>

              <p className="text-lg leading-relaxed mb-6">
                Lake Manyara National Park is a birdwatcher's paradise, supporting over 400 recorded bird species within
                its relatively small area, creating one of the highest bird species densities of any African national
                park. The park's diverse habitats, from dense groundwater forests to open grasslands and alkaline lake
                shores, provide ideal conditions for both resident and migratory species throughout the year.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                The groundwater forest supports forest specialists including silvery-cheeked hornbills, crowned eagles,
                and various species of barbets and sunbirds. The acacia woodlands host different communities including
                yellow-collared lovebirds, rufous-tailed weavers, and numerous raptor species. The lake itself attracts
                not only flamingos but also numerous other waterbirds, making Lake Manyara an essential destination for
                serious birdwatchers and a highlight for casual observers seeking diverse avian encounters.
              </p>

              <h3 className="text-2xl font-bold text-brand-olive mb-4">Diverse Wildlife Beyond Lions</h3>

              <p className="text-lg leading-relaxed mb-6">
                While tree-climbing lions capture most attention, Lake Manyara supports a remarkable diversity of other
                wildlife species. The park is home to large elephant herds that are known for their close-knit family
                structures and gentle nature. These elephants have adapted to the park's varied habitats and can often
                be observed feeding in the groundwater forest, where they create natural pathways through the dense
                vegetation.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                The park also supports significant populations of Cape buffalo, giraffes, zebras, wildebeest, and
                various antelope species including impala, waterbuck, and bushbuck. Leopards inhabit the forested areas,
                while spotted hyenas and other smaller predators complete the carnivore community. The park's hippo
                pools provide excellent opportunities to observe these massive semi-aquatic mammals, particularly during
                the dry season when they concentrate in remaining water sources.
              </p>

              <h3 className="text-2xl font-bold text-brand-olive mb-4">Unique Canopy Walk Experience</h3>

              <p className="text-lg leading-relaxed mb-6">
                Lake Manyara National Park offers visitors a unique perspective through its treetop canopy walk, the
                first of its kind in East Africa. This elevated walkway extends for 370 meters through the groundwater
                forest canopy, providing visitors with a bird's-eye view of the forest ecosystem and opportunities to
                observe wildlife from an entirely different perspective. The canopy walk offers excellent birdwatching
                opportunities and provides insights into the complex vertical structure of forest ecosystems.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                The walkway reaches heights of up to 18 meters above the forest floor, allowing visitors to observe the
                forest canopy's intricate ecosystem and spot species that are rarely seen from ground level. This
                innovative addition to the park's attractions provides an educational and thrilling experience that
                complements traditional game drives and offers visitors a more comprehensive understanding of forest
                ecology and biodiversity.
              </p>

              <h3 className="text-2xl font-bold text-brand-olive mb-4">Hot Springs and Geological Wonders</h3>

              <p className="text-lg leading-relaxed mb-6">
                The park features several hot springs that provide fascinating insights into the geological forces that
                shaped the Great Rift Valley. These natural thermal features create unique microhabitats that support
                specialized plant communities and provide year-round water sources for wildlife. The hot springs also
                offer visitors opportunities to learn about the region's volcanic history and the ongoing geological
                processes that continue to shape East Africa's landscape.
              </p>

              <p className="text-lg leading-relaxed">
                Lake Manyara National Park demonstrates that exceptional wildlife experiences don't require vast areas,
                but rather depend on habitat diversity, effective conservation management, and the protection of
                critical ecosystems. The park's success in maintaining healthy wildlife populations within a relatively
                small area serves as a model for conservation efforts worldwide, proving that well-managed protected
                areas can provide outstanding wildlife encounters while supporting local communities and contributing to
                broader conservation goals. Whether seeking the famous tree-climbing lions, spectacular flamingo
                gatherings, or simply enjoying the park's incredible biodiversity, Lake Manyara offers unforgettable
                safari experiences that showcase the best of Tanzania's natural heritage.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-brand-olive text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Discover Lake Manyara</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Experience tree-climbing lions, flamingo spectacles, and the unique canopy walk in this biodiversity
              hotspot.
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
