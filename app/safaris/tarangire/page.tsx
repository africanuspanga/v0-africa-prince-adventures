import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Tarangire National Park - Complete Guide | Africa Prince Adventures",
  description:
    "Discover Tarangire National Park, famous for massive elephant herds, ancient baobab trees, and over 550 bird species. Your complete safari guide.",
  keywords:
    "Tarangire National Park, elephant herds, baobab trees, bird watching, Tanzania safari, dry season wildlife",
}

export default function TarangirePage() {
  return (
    <>
      <Header />
      <main>
        <div className="relative h-96 bg-gradient-to-r from-brand-olive/90 to-brand-olive/70">
          <Image
            src="/images/tarangire-elephant.jpeg"
            alt="Tarangire National Park"
            fill
            className="object-cover -z-10"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="container mx-auto px-4 h-full flex items-center">
            <div className="text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">Tarangire National Park</h1>
              <p className="text-xl md:text-2xl">Land of Giants and Ancient Trees</p>
            </div>
          </div>
        </div>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto prose prose-lg">
              <h2 className="text-3xl font-bold text-brand-olive mb-6">The Elephant Capital of Tanzania</h2>

              <p className="text-lg leading-relaxed mb-6">
                Tarangire National Park stands as one of Tanzania's most distinctive and rewarding safari destinations,
                renowned for hosting the largest concentration of elephants in the country and some of the most
                spectacular wildlife gatherings in East Africa. Covering 2,850 square kilometers of diverse landscapes,
                this remarkable park offers visitors an authentic African safari experience characterized by dramatic
                seasonal wildlife movements and breathtaking natural beauty.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                Named after the life-giving Tarangire River that flows through its heart, the park transforms
                dramatically between seasons, creating one of nature's most compelling wildlife spectacles. During the
                dry season, this permanent water source becomes a magnet for wildlife from across the greater Tarangire
                ecosystem, concentrating animals in numbers that rival the famous Serengeti plains.
              </p>

              <h3 className="text-2xl font-bold text-brand-olive mb-4">Legendary Elephant Herds</h3>

              <p className="text-lg leading-relaxed mb-6">
                Tarangire is globally celebrated for its extraordinary elephant populations, with the park supporting
                over 3,000 elephants during peak dry season months. These magnificent creatures gather in herds of
                unprecedented size, sometimes numbering several hundred individuals, creating unforgettable wildlife
                encounters. The park's elephants are known for their impressive tusks and complex social behaviors,
                offering visitors exceptional opportunities to observe elephant family dynamics, communication, and
                interactions.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                The elephants of Tarangire have adapted uniquely to their environment, demonstrating remarkable
                intelligence in their seasonal movements and water-finding abilities. During the dry season, they dig
                wells in the riverbed to access underground water, creating water sources that benefit numerous other
                species. These gentle giants can often be observed engaging in dust bathing, mud wallowing, and
                intricate social rituals that provide fascinating insights into elephant behavior and intelligence.
              </p>

              <h3 className="text-2xl font-bold text-brand-olive mb-4">Ancient Baobab Sentinels</h3>

              <p className="text-lg leading-relaxed mb-6">
                The park's landscape is dominated by iconic African baobab trees, some of which are over 1,000 years old
                and stand as silent witnesses to centuries of African history. These magnificent trees, often called the
                "Tree of Life," create a distinctive and photogenic landscape that has become synonymous with African
                safari imagery. The baobabs serve crucial ecological functions, providing shelter, food, and nesting
                sites for numerous species while storing thousands of liters of water in their massive trunks.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                These ancient giants create natural gathering points for wildlife and offer excellent game viewing
                opportunities as animals seek shade during the heat of the day. The interplay between massive elephant
                herds and towering baobab trees creates some of Africa's most iconic and photographically stunning
                safari scenes, making Tarangire a favorite destination for wildlife photographers and nature
                enthusiasts.
              </p>

              <h3 className="text-2xl font-bold text-brand-olive mb-4">Exceptional Avian Diversity</h3>

              <p className="text-lg leading-relaxed mb-6">
                Tarangire National Park is a paradise for bird enthusiasts, supporting over 550 recorded bird species,
                making it one of Tanzania's premier birdwatching destinations. The park's diverse habitats, from
                riverine forests to open savannahs and seasonal wetlands, provide ideal conditions for both resident and
                migratory species. The variety includes everything from massive ground hornbills and colorful
                lilac-breasted rollers to numerous raptor species and waterbirds.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                During the wet season, the park becomes particularly attractive to migratory species, with European
                migrants joining resident populations to create spectacular birdwatching opportunities. The Tarangire
                River and associated wetlands attract numerous waterbirds, including various species of herons, storks,
                and kingfishers, while the acacia woodlands support diverse songbirds and raptors.
              </p>

              <h3 className="text-2xl font-bold text-brand-olive mb-4">Diverse Wildlife Beyond Elephants</h3>

              <p className="text-lg leading-relaxed mb-6">
                While elephants are Tarangire's most famous residents, the park supports an impressive diversity of
                other wildlife species. Large predators include lions, leopards, cheetahs, and spotted hyenas, with the
                park's lion population known for their tree-climbing behavior, particularly during the heat of the day.
                The park also hosts significant populations of Cape buffalo, giraffes, zebras, wildebeest, and various
                antelope species including the elegant impala and diminutive dik-dik.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                Tarangire is one of the few places in northern Tanzania where visitors can spot some of East Africa's
                more unusual species, including the fringe-eared oryx, lesser kudu, and gerenuk. These species, more
                commonly associated with Kenya's arid regions, find suitable habitat in Tarangire's diverse ecosystems,
                adding to the park's unique character and appeal for wildlife enthusiasts seeking something different
                from typical safari experiences.
              </p>

              <h3 className="text-2xl font-bold text-brand-olive mb-4">Seasonal Transformations</h3>

              <p className="text-lg leading-relaxed mb-6">
                Tarangire undergoes dramatic seasonal transformations that create distinctly different safari
                experiences throughout the year. During the dry season from June to October, the park becomes a wildlife
                concentration area as animals from across the greater ecosystem converge on the permanent water sources.
                This period offers exceptional game viewing with large herds and increased predator activity as hunting
                becomes easier around water points.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                The wet season from November to May transforms Tarangire into a lush, green paradise with scattered
                wildlife and excellent birdwatching opportunities. During this period, many animals disperse across the
                broader ecosystem, but the park offers a more intimate safari experience with beautiful landscapes,
                newborn animals, and spectacular photographic opportunities as the ancient baobabs are framed against
                dramatic storm clouds and vibrant green vegetation.
              </p>

              <h3 className="text-2xl font-bold text-brand-olive mb-4">Conservation and Community</h3>

              <p className="text-lg leading-relaxed">
                Tarangire National Park plays a crucial role in Tanzania's conservation efforts, protecting vital
                wildlife corridors and serving as a cornerstone of the greater Tarangire ecosystem. The park works
                closely with surrounding communities to promote conservation awareness and ensure that local people
                benefit from wildlife tourism. This collaborative approach has been essential in maintaining wildlife
                migration routes and protecting the broader ecosystem that extends far beyond the park's boundaries,
                ensuring that future generations can continue to witness the spectacular wildlife gatherings that make
                Tarangire one of Africa's most remarkable safari destinations.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-brand-olive text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Experience Tarangire</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Witness massive elephant herds and ancient baobab trees in Tanzania's most photogenic park.
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
