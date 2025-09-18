import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function RuahaPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <Image src="/images/ruaha-hippos.webp" alt="Ruaha National Park" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Ruaha National Park</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Tanzania's Largest National Park - A Pristine Wilderness Adventure
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Discover Ruaha National Park</h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Ruaha National Park stands as Tanzania's largest national park and one of East Africa's most spectacular
            wilderness areas, covering over 20,000 square kilometers of pristine, untamed landscape in the heart of
            central Tanzania. This vast protected area represents the epitome of African wilderness, where ancient
            baobab trees dot endless savannas, the Great Ruaha River carves its way through dramatic landscapes, and
            some of Africa's most impressive wildlife populations thrive in relative solitude.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            The park's remote location and challenging accessibility have preserved its wild character, offering
            visitors an authentic safari experience reminiscent of Africa's golden age of exploration. Here, the rhythm
            of nature remains undisturbed by the crowds found in more accessible parks, creating an atmosphere of
            pristine wilderness where every game drive feels like a journey into uncharted territory. The landscape
            varies dramatically from rolling hills and rocky escarpments to seasonal wetlands and dense riverine
            forests, each ecosystem supporting unique wildlife communities.
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mb-4">Wildlife Supremacy</h3>

          <p className="text-gray-700 leading-relaxed mb-6">
            Ruaha National Park boasts some of the most impressive wildlife populations in Africa, earning its
            reputation as a premier destination for serious safari enthusiasts. The park is home to East Africa's
            largest elephant population, with over 12,000 of these magnificent giants migrating through the area
            annually. These massive herds create some of the most spectacular wildlife scenes on the continent,
            particularly during the dry season when they congregate along the Great Ruaha River.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            The park's predator populations are equally impressive, hosting roughly 10% of the world's remaining lion
            population within the greater Ruaha landscape. These lions have adapted to the park's diverse habitats,
            forming large prides that dominate the savanna ecosystems. Ruaha is also renowned for its healthy population
            of critically endangered African wild dogs, one of Africa's most elusive and fascinating predators.
            Cheetahs, leopards, hyenas, and jackals complete the predator community, creating a complex ecosystem where
            the drama of predator-prey relationships unfolds daily.
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mb-4">The Great Ruaha River</h3>

          <p className="text-gray-700 leading-relaxed mb-6">
            The Great Ruaha River serves as the park's lifeline, creating a ribbon of green vegetation that attracts
            wildlife throughout the year. During the dry season, this river becomes the focal point of all life in the
            park, as animals travel great distances to reach its life-giving waters. The riverbanks support dense
            populations of hippos and massive Nile crocodiles, while the surrounding vegetation provides habitat for
            numerous bird species and smaller mammals.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            The river's seasonal fluctuations create dramatic changes in the park's ecosystem. During the wet season, it
            flows as a mighty torrent, while in the dry months, it reduces to a series of pools connected by sandy
            channels. These pools become natural amphitheaters where visitors can observe incredible concentrations of
            wildlife, from massive elephant herds to delicate antelope species, all sharing the precious water resources
            in a display of natural harmony and competition.
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mb-4">Diverse Antelope Species</h3>

          <p className="text-gray-700 leading-relaxed mb-6">
            Ruaha National Park is particularly renowned for its exceptional diversity of antelope species, many of
            which are rare or absent in northern Tanzania's more famous parks. The park hosts both greater and lesser
            kudu, with their distinctive spiral horns and elegant bearing, alongside the magnificent roan and sable
            antelopes, whose striking appearances make them among Africa's most beautiful ungulates. These species
            thrive in Ruaha's varied habitats, from open grasslands to dense woodlands.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            The park also supports healthy populations of buffalo, giraffes, zebras, and wildebeest, creating the
            classic African savanna scenes that have captivated visitors for generations. Waterbuck, impala, and various
            smaller antelope species add to the diversity, while the presence of both Grant's and Thomson's gazelles
            provides opportunities to observe the subtle differences between these closely related species.
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mb-4">Avian Paradise</h3>

          <p className="text-gray-700 leading-relaxed mb-6">
            With over 570 recorded bird species, Ruaha National Park ranks among Tanzania's premier birdwatching
            destinations. The park's diverse habitats support an incredible variety of avian life, from the colorful
            Yellow-collared lovebird and ashy starlings to the impressive Tanzanian red-billed hornbill and the rare
            Ruaha Red-billed Hornbill, found nowhere else in the world. The riverine forests harbor species like the
            African Pygmy Goose, while the open savannas support various raptors and ground-dwelling species.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            The wet season brings an influx of migratory species from Europe and Asia, transforming the park into a
            birdwatcher's paradise. Resident species don their breeding plumage during this period, creating spectacular
            displays of color and behavior. The park's varied elevations and habitats mean that different areas support
            different bird communities, making every location a potential site for new discoveries.
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mb-4">Safari Activities and Experiences</h3>

          <p className="text-gray-700 leading-relaxed mb-6">
            Ruaha National Park offers a comprehensive range of safari activities designed to showcase its incredible
            wilderness. Traditional game drives remain the primary activity, with the park's extensive road network
            providing access to diverse habitats and wildlife concentrations. The best game viewing occurs during the
            dry season when animals gather around the river, but each season offers unique opportunities and
            experiences.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            Guided walking safaris provide an intimate connection with the wilderness, allowing visitors to experience
            the African bush on foot while learning about tracking, plant identification, and ecosystem relationships.
            Night drives reveal the park's nocturnal inhabitants, including elusive leopards, hyenas, and various
            smaller predators. Cultural visits to local Hehe communities offer insights into traditional lifestyles and
            the relationship between local people and wildlife conservation.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Whether you're seeking close encounters with Africa's largest elephant herds, hoping to witness the drama of
            predator-prey interactions, or simply wanting to experience the profound silence of untouched wilderness,
            Ruaha National Park delivers an authentic African safari experience that will exceed your wildest
            expectations and create memories to last a lifetime.
          </p>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Explore Ruaha?</h3>
          <p className="text-gray-600 mb-6">
            Experience Tanzania's largest national park and its incredible wildlife diversity
          </p>
          <div className="flex gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/camping-safaris">View Camping Safaris</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/lodge-safaris">View Lodge Safaris</Link>
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
