import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function NyererePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <Image
          src="/images/hero-elephant.jpg"
          alt="Nyerere National Park - African Elephants"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Nyerere National Park</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Africa's Largest Protected Area - A UNESCO World Heritage Wilderness
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Discover Nyerere National Park</h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Nyerere National Park, formerly known as the Selous Game Reserve, stands as Tanzania's largest national park
            and one of Africa's most significant protected areas, covering an astounding 30,000 square kilometers of
            pristine wilderness. This UNESCO World Heritage Site, located in southern Tanzania approximately 250
            kilometers southwest of Dar es Salaam, represents one of the last great wilderness areas on Earth, where
            vast landscapes remain largely untouched by human development and wildlife thrives in numbers that harken
            back to Africa's golden age.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            Named after Tanzania's first president, Julius Nyerere, this magnificent park encompasses diverse ecosystems
            ranging from dense miombo woodlands and open grasslands to seasonal wetlands and the mighty Rufiji River
            system. The park's sheer size and remote location have preserved its wild character, offering visitors an
            authentic African wilderness experience where the sounds of civilization fade away, replaced by the ancient
            rhythms of nature that have echoed across these landscapes for millennia.
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mb-4">Exceptional Wildlife Populations</h3>

          <p className="text-gray-700 leading-relaxed mb-6">
            Nyerere National Park hosts some of the most impressive wildlife populations on the African continent, with
            numbers that exceed those found in the more famous northern parks combined. The park is home to more
            elephants than the Serengeti and Ngorongoro combined, with massive herds that can number in the hundreds
            moving across the landscape in spectacular migrations. These gentle giants have found sanctuary in Nyerere's
            vast wilderness, where they can roam freely across territories that span hundreds of square kilometers.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            The park's predator populations are equally remarkable, supporting large prides of lions that have adapted
            to the diverse habitats and abundant prey species. Nyerere is particularly renowned as one of Africa's most
            important strongholds for the critically endangered African wild dog, with regular sightings of these
            fascinating pack hunters that are rarely seen elsewhere. Leopards prowl the riverine forests and rocky
            outcrops, while cheetahs patrol the open grasslands, creating a complete predator ecosystem that showcases
            the full spectrum of African carnivores.
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mb-4">The Rufiji River System</h3>

          <p className="text-gray-700 leading-relaxed mb-6">
            The Rufiji River system forms the heart of Nyerere National Park, creating a network of channels, lakes, and
            wetlands that support an incredible diversity of aquatic and semi-aquatic wildlife. This mighty river system
            is home to over 40,000 hippos, one of the largest concentrations of these massive mammals anywhere in
            Africa. The waters also harbor enormous Nile crocodiles, some exceeding five meters in length, creating one
            of the most impressive reptilian populations on the continent.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            The river's influence extends far beyond its banks, creating lush riverine forests that provide habitat for
            numerous species and serve as crucial wildlife corridors. During the dry season, the river becomes a magnet
            for wildlife from across the park, creating spectacular concentrations of animals along its banks. Elephants
            wade into the waters to bathe and drink, while countless bird species depend on the river's resources for
            survival, making it one of the most productive ecosystems in East Africa.
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mb-4">Unique Safari Experiences</h3>

          <p className="text-gray-700 leading-relaxed mb-6">
            Nyerere National Park offers a diverse range of safari activities that set it apart from other Tanzanian
            destinations. Boat safaris along the Rufiji River provide unique perspectives on the park's wildlife,
            allowing visitors to observe hippos and crocodiles at close range while watching elephants, giraffes, and
            various antelope species come to drink at the water's edge. These river excursions offer unparalleled
            photographic opportunities and the chance to experience the African wilderness from a completely different
            vantage point.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            Walking safaris, rare in most Tanzanian parks due to safety concerns, are a highlight of the Nyerere
            experience. Accompanied by experienced armed guides, visitors can explore the wilderness on foot, learning
            to track animals, identify plants, and understand the intricate relationships that govern this complex
            ecosystem. Night drives reveal the park's nocturnal inhabitants, while fly-camping expeditions offer the
            ultimate wilderness experience for adventurous travelers seeking complete immersion in nature.
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mb-4">Remarkable Antelope Diversity</h3>

          <p className="text-gray-700 leading-relaxed mb-6">
            The park's diverse habitats support an exceptional variety of antelope species, including several that are
            rare or absent in northern Tanzania. Visitors can encounter the elegant Masai giraffes browsing among the
            acacia trees, while herds of buffalo create dramatic scenes as they move across the open plains. The park is
            home to both greater and lesser kudu, with their distinctive spiral horns, as well as the magnificent sable
            antelope, whose glossy black coats and curved horns make them among Africa's most striking ungulates.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            Impala, waterbuck, and various smaller antelope species add to the diversity, while the presence of both
            common and rare species creates opportunities for wildlife enthusiasts to observe behavioral differences and
            ecological adaptations. The park's vast size means that different areas support different antelope
            communities, making every game drive a potential discovery of new species and behaviors.
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mb-4">Avian Wonderland</h3>

          <p className="text-gray-700 leading-relaxed mb-6">
            With over 440 recorded bird species, Nyerere National Park ranks among Africa's premier birdwatching
            destinations. The diverse habitats, from riverine forests to open grasslands and seasonal wetlands, support
            an incredible variety of avian life. Fish eagles soar above the Rufiji River, their distinctive calls
            echoing across the water, while colorful carmine bee-eaters create spectacular displays during their
            seasonal migrations. The massive goliath herons, Africa's largest heron species, stalk the shallows in
            search of fish, creating impressive sights for wildlife photographers.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            The park's seasonal changes bring different birding opportunities throughout the year. The wet season
            attracts numerous migratory species from Europe and Asia, while resident species don their breeding plumage
            and engage in elaborate courtship displays. The variety of habitats means that a single day's birding can
            yield sightings of forest species, water birds, raptors, and grassland specialists, making Nyerere a true
            paradise for ornithologists and casual bird enthusiasts alike.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Whether you're seeking the thrill of encountering wild dogs on a morning game drive, the serenity of a
            sunset boat safari on the Rufiji River, or the adventure of walking through pristine wilderness, Nyerere
            National Park offers an unparalleled African safari experience that showcases the continent's wildlife
            heritage in its most authentic and spectacular form.
          </p>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Explore Nyerere?</h3>
          <p className="text-gray-600 mb-6">
            Discover Africa's largest protected area and its incredible wildlife diversity
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
