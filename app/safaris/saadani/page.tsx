import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function SaadaniPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <Image src="/images/saadani-beach.jpeg" alt="Saadani National Park" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Saadani National Park</h1>
            <p className="text-xl max-w-2xl mx-auto">Tanzania's Only Coastal National Park - Where Beach Meets Bush</p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Discover Saadani National Park</h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Saadani National Park stands as Tanzania's most unique protected area, holding the extraordinary distinction
            of being the only national park in East Africa where the bush meets the beach. Covering 1,062 square
            kilometers along Tanzania's pristine Indian Ocean coastline, this remarkable destination offers visitors an
            unprecedented combination of traditional safari experiences and tropical beach adventures, creating memories
            that blend the best of both worlds in ways found nowhere else on the continent.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            Located approximately 130 kilometers north of Dar es Salaam, Saadani represents a conservation success story
            where diverse ecosystems converge in spectacular fashion. The park encompasses coastal forests, mangrove
            creeks, acacia woodlands, and pristine beaches, creating a mosaic of habitats that support an incredible
            diversity of wildlife both terrestrial and marine. This unique positioning allows visitors to witness
            elephants walking along white sand beaches, lions roaming within sight of the ocean, and hippos wallowing in
            rivers that flow directly into the Indian Ocean.
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mb-4">Unique Coastal Wildlife</h3>

          <p className="text-gray-700 leading-relaxed mb-6">
            The wildlife of Saadani National Park has adapted to this unique coastal environment in fascinating ways,
            creating viewing opportunities found nowhere else in Africa. Elephants have learned to navigate between
            inland feeding areas and coastal salt licks, often emerging from the coastal forests to walk along the beach
            in scenes that seem almost surreal. These gentle giants have become comfortable with the ocean environment,
            sometimes venturing close to the water's edge while foraging for minerals in the sand.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            The park's predator populations include lions that have adapted to the coastal environment, leopards that
            prowl the dense coastal forests, and spotted hyenas that scavenge along both inland areas and the shoreline.
            Buffalo herds roam the grasslands and woodlands, while various antelope species including waterbuck,
            hartebeest, and reedbuck thrive in the diverse habitats. The park also supports populations of giraffes,
            zebras, and warthogs, creating classic African safari scenes with the unique backdrop of the Indian Ocean.
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mb-4">Marine Conservation</h3>

          <p className="text-gray-700 leading-relaxed mb-6">
            Saadani National Park serves as a critical conservation area for marine life, particularly as one of
            Tanzania's most important green turtle nesting sites. Between January and March, female green turtles emerge
            from the ocean under cover of darkness to lay their eggs in the warm sand, continuing an ancient ritual that
            has occurred along this coastline for thousands of years. Visitors staying overnight during nesting season
            may have the extraordinary opportunity to witness this remarkable natural phenomenon.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            The coastal waters off Saadani are also important migration routes for humpback whales, which can often be
            spotted from the shore during their annual migrations between July and September. Dolphins are frequently
            seen playing in the surf, while the coral reefs just offshore support diverse marine ecosystems. The park's
            marine component extends three nautical miles into the Indian Ocean, protecting crucial breeding and feeding
            areas for numerous marine species.
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mb-4">Diverse Ecosystems</h3>

          <p className="text-gray-700 leading-relaxed mb-6">
            The park's terrestrial ecosystems are equally impressive, featuring coastal forests that harbor rare plant
            species and provide habitat for numerous bird species. The Wami River flows through the park, creating
            riverine forests and wetlands that support hippos, crocodiles, and a variety of water birds. These river
            systems are crucial for the park's wildlife, providing fresh water in an otherwise coastal environment and
            creating lush corridors that connect different habitat types.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            Mangrove forests along the coastline serve as nurseries for marine life while providing nesting sites for
            numerous bird species. These unique ecosystems are among the most productive on Earth, supporting complex
            food webs that benefit both terrestrial and marine wildlife. The park's grasslands and acacia woodlands
            provide grazing areas for herbivores and hunting grounds for predators, creating the classic African savanna
            experience within sight and sound of the ocean.
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mb-4">Exceptional Birdlife</h3>

          <p className="text-gray-700 leading-relaxed mb-6">
            With over 370 recorded bird species, Saadani National Park offers exceptional birdwatching opportunities
            that combine coastal, forest, and savanna species in one location. The park's diverse habitats attract both
            resident and migratory species, creating year-round birding opportunities. Coastal species include various
            terns, gulls, and shorebirds, while the forests harbor colorful species like the Fischer's turaco and
            various sunbird species.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            The Wami River and associated wetlands attract numerous water birds, including various heron species,
            kingfishers, and the spectacular African fish eagle. Raptors are well represented, with fish eagles soaring
            over the coastline and various hawk and eagle species patrolling the inland areas. The park's position along
            the East African coast makes it an important stopover point for Palearctic migrants, adding seasonal variety
            to the already impressive resident bird populations.
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mb-4">Unique Safari Activities</h3>

          <p className="text-gray-700 leading-relaxed mb-6">
            Saadani National Park offers a unique combination of safari activities that cannot be found elsewhere in
            Tanzania. Traditional game drives through the park's diverse habitats provide opportunities to spot the full
            range of wildlife, from large mammals to colorful birds. However, the real magic happens when these drives
            lead to the coastline, where visitors can enjoy game viewing with the sound of waves in the background and
            the possibility of spotting whales or dolphins offshore.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            Boat safaris along the Wami River offer different perspectives on the park's wildlife, with opportunities to
            observe hippos, crocodiles, and various water birds at close range. Beach walks provide chances to discover
            marine life, search for turtle tracks during nesting season, and simply enjoy the pristine coastline.
            Cultural visits to local fishing villages offer insights into traditional coastal lifestyles and the
            relationship between local communities and marine conservation efforts.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Whether you're watching elephants silhouetted against an ocean sunset, tracking lions through coastal
            forests, or simply relaxing on pristine beaches after a morning game drive, Saadani National Park offers a
            safari experience unlike any other, where the magic of African wildlife meets the beauty of the Indian Ocean
            in perfect harmony.
          </p>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Explore Saadani?</h3>
          <p className="text-gray-600 mb-6">
            Experience the unique combination of beach and bush in Tanzania's only coastal park
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
