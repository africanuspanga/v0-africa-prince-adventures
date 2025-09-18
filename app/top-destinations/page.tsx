import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Tanzania Safari Packages | Serengeti, Ngorongoro, Tarangire Tours",
  description:
    "Explore Tanzania's best safari packages including Serengeti, Ngorongoro Crater, Tarangire, and Lake Manyara. Budget camping to luxury lodge safaris from Arusha.",
  keywords:
    "Tanzania safari packages, Serengeti safari, Ngorongoro crater tour, Tarangire safari, Lake Manyara safari, budget camping safari, luxury safari Tanzania",
  openGraph: {
    title: "Tanzania Safari Packages | Serengeti, Ngorongoro, Tarangire Tours",
    description:
      "Explore Tanzania's best safari packages including Serengeti, Ngorongoro Crater, Tarangire, and Lake Manyara from Arusha.",
  },
}

const nationalParks = [
  {
    name: "Serengeti National Park",
    description:
      "Home to the Great Migration, Serengeti National Park spans 14,763 km² and is globally recognized for its incredible wildlife spectacle. Witness over 1.5 million wildebeest and 200,000 zebras traverse the endless plains in their annual migration. The park boasts large populations of predators including lions, cheetahs, and leopards, making it one of the best places in Africa for Big Five game viewing. Named the Best National Park in Africa for 2019 and 2020, and Best of the Best National Park in the World in 2021, Serengeti offers unparalleled wildlife experiences across its diverse ecosystems from grasslands to woodlands.",
    image: "/images/serengeti-balloon.jpeg",
  },
  {
    name: "Ngorongoro Crater",
    description:
      "A UNESCO World Heritage Site, the Ngorongoro Conservation Area covers 8,292 km² and features the world's largest inactive volcanic caldera. This natural amphitheater is home to approximately 25,000 large animals, including all of the Big Five - elephants, lions, leopards, buffalo, and the critically endangered black rhinoceros. The crater floor provides a unique ecosystem where wildlife thrives year-round due to permanent water sources. Visitors can also experience Maasai culture as the area is home to indigenous Maasai people who coexist with the wildlife in this remarkable conservation success story.",
    image: "/images/ngorongoro-elephants.jpeg",
  },
  {
    name: "Tarangire National Park",
    description:
      "Famous for its massive elephant herds and iconic ancient baobab trees, Tarangire National Park covers 2,850 km² of diverse habitats including swamps, savannahs, and seasonal wetlands. During the dry season (June-October), the park becomes a wildlife magnet as animals congregate around the life-giving Tarangire River. The park is home to over 550 bird species, making it a paradise for birdwatchers. Large predators like lions and leopards are commonly spotted, along with unique species such as the fringe-eared oryx and gerenuk that are rarely seen in other northern Tanzania parks.",
    image: "/images/tarangire-elephant.jpeg",
  },
  {
    name: "Lake Manyara National Park",
    description:
      "Spanning 330 km², Lake Manyara National Park is renowned for its incredible biodiversity and unique tree-climbing lions. The park features diverse ecosystems from groundwater forests to alkaline soda lake shores, supporting an amazing variety of wildlife. Thousands of flamingos create pink carpets across the lake's surface, while large elephant herds roam the acacia woodlands. The park offers excellent birdwatching with over 400 species recorded, and the famous canopy walkway provides a unique perspective of the forest ecosystem. Hot springs and dramatic escarpment views add to the park's natural beauty.",
    image: "/images/lake-manyara-lions.jpeg",
  },
  {
    name: "Mikumi National Park",
    description:
      "Located near Dar es Salaam, Mikumi National Park covers 3,230 km² and is one of Tanzania's most accessible parks. The park features vast grasslands and miombo woodlands that support diverse wildlife including large elephant herds, giraffes, zebras, and significant lion populations. The Mkata Floodplain, often compared to the Serengeti, provides excellent game viewing opportunities year-round. Mikumi is home to over 400 bird species and offers visitors a chance to see the rare African wild dog. The park's proximity to major cities makes it perfect for shorter safari experiences without compromising on wildlife encounters.",
    image: "/images/mikumi-buffalo.jpeg",
  },
  {
    name: "Arusha National Park",
    description:
      "Situated just outside Arusha city, this 137 km² park offers stunning views of Mount Meru, Africa's fifth-highest peak. The park features incredibly diverse landscapes from lush montane forests to grasslands and the beautiful Momella Lakes. Home to giraffes, zebras, buffalo, and the rare black-and-white colobus monkey, Arusha National Park provides intimate wildlife encounters in a compact area. While not a Big Five park, it offers unique experiences like walking safaris and canoeing on the Momella Lakes. The park serves as an excellent introduction to Tanzania's wildlife and is perfect for day trips or acclimatization before longer safaris.",
    image: "/images/arusha-zebra.jpeg",
  },
  {
    name: "Nyerere National Park",
    description:
      "Formerly known as Selous Game Reserve, Nyerere National Park is Tanzania's largest national park, covering an impressive 30,893 km². This vast wilderness is renowned for its pristine ecosystems ranging from wetlands to miombo woodlands and savannahs. The park supports massive elephant populations, large pods of hippos, and diverse bird species including the rare African skimmer. The mighty Rufiji River flows through the park, offering unique boat safari experiences where visitors can observe crocodiles, hippos, and waterbirds up close. This UNESCO World Heritage Site represents one of Africa's last great wilderness areas.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Nyerere.jpg-F23oKFV6HQnJaQcaVWGfkvu7vFUgPJ.jpeg",
  },
  {
    name: "Saadani National Park",
    description:
      "Unique as Tanzania's only coastal national park, Saadani borders the Indian Ocean and covers 1,062 km². This remarkable park combines beach and bush experiences, where elephants walk along pristine beaches and lions roam within sight of the ocean. The park is a critical green turtle breeding site, and visitors may spot humpback whales and dolphins from the coastline. Saadani supports diverse wildlife including elephants, lions, leopards, and over 370 bird species. The park offers a unique combination of game drives, beach walks, boat safaris on the Wami River, and cultural visits to local fishing villages.",
    image: "/images/saadani-beach.jpeg",
  },
  {
    name: "Ruaha National Park",
    description:
      "Covering 20,226 km², Ruaha National Park is Tanzania's largest national park and is considered one of East Africa's finest safari destinations. The park is famous for hosting 10% of the world's lion population and supports significant elephant herds. Ruaha's diverse ecosystems include baobab-studded savannahs, riverine forests along the Great Ruaha River, and rocky escarpments. The park is home to both East and Southern African species, creating unique wildlife viewing opportunities. During the dry season, animals concentrate around the river, providing exceptional game viewing. Ruaha offers a remote, authentic safari experience with fewer crowds than northern parks.",
    image: "/images/ruaha-hippos.webp",
  },
]

const homepageParks = [
  {
    name: "Serengeti National Park",
    description:
      "Home to the Great Migration, Serengeti National Park spans 14,763 km² and is globally recognized for its incredible wildlife spectacle. Witness over 1.5 million wildebeest and 200,000 zebras traverse the endless plains in their annual migration. The park boasts large populations of predators including lions, cheetahs, and leopards, making it one of the best places in Africa for Big Five game viewing. Named the Best National Park in Africa for 2019 and 2020, and Best of the Best National Park in the World in 2021, Serengeti offers unparalleled wildlife experiences.",
    image: "/images/serengeti-balloon.jpeg",
  },
  {
    name: "Tarangire National Park",
    description:
      "Famous for its massive elephant herds and iconic ancient baobab trees, Tarangire National Park covers 2,850 km² of diverse habitats. During the dry season, the park becomes a wildlife magnet as animals congregate around the Tarangire River. The park is home to over 550 bird species and large predators like lions and leopards. Unique species such as the fringe-eared oryx and gerenuk are rarely seen in other northern Tanzania parks, making Tarangire a must-visit destination for wildlife enthusiasts seeking authentic African safari experiences.",
    image: "/images/tarangire-elephant.jpeg",
  },
  {
    name: "Ngorongoro Crater",
    description:
      "A UNESCO World Heritage Site, the Ngorongoro Conservation Area features the world's largest inactive volcanic caldera. This natural amphitheater is home to approximately 25,000 large animals, including all of the Big Five - elephants, lions, leopards, buffalo, and the critically endangered black rhinoceros. The crater floor provides a unique ecosystem where wildlife thrives year-round due to permanent water sources. Visitors can also experience Maasai culture as indigenous Maasai people coexist with wildlife in this remarkable conservation success story.",
    image: "/images/ngorongoro-elephants.jpeg",
  },
]

export default function SafarisPage() {
  const getCleanUrl = (parkName: string) => {
    const urlMap: { [key: string]: string } = {
      "Serengeti National Park": "/top-destinations/serengeti",
      "Ngorongoro Crater": "/top-destinations/ngorongoro",
      "Tarangire National Park": "/top-destinations/tarangire",
      "Lake Manyara National Park": "/top-destinations/lake-manyara",
      "Mikumi National Park": "/top-destinations/mikumi",
      "Arusha National Park": "/top-destinations/arusha",
      "Nyerere National Park": "/top-destinations/nyerere",
      "Saadani National Park": "/top-destinations/saadani",
      "Ruaha National Park": "/top-destinations/ruaha",
    }
    return urlMap[parkName] || `/top-destinations/${parkName.toLowerCase().replace(/\s+/g, "-")}`
  }

  return (
    <>
      <Header />
      <main>
        <div className="py-20 bg-gradient-to-b from-brand-olive/10 to-muted/30">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-brand-olive">
              Tanzania's Premier Safari Destinations
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Discover Tanzania's most spectacular national parks, each offering unique wildlife experiences and
              breathtaking landscapes. From the Great Migration in Serengeti to the Big Five in Ngorongoro Crater.
            </p>
          </div>
        </div>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid gap-8 md:gap-12">
              {nationalParks.map((park, index) => (
                <Card key={park.name} className="overflow-hidden border-0 shadow-lg">
                  <div className={`grid md:grid-cols-2 gap-0 ${index % 2 === 1 ? "md:grid-flow-col-dense" : ""}`}>
                    <div className={`relative h-64 md:h-80 ${index % 2 === 1 ? "md:col-start-2" : ""}`}>
                      <Image src={park.image || "/placeholder.svg"} alt={park.name} fill className="object-cover" />
                    </div>
                    <CardContent className="p-8 flex flex-col justify-center">
                      <h2 className="text-2xl md:text-3xl font-bold mb-4 text-brand-olive">{park.name}</h2>
                      <p className="text-muted-foreground leading-relaxed mb-6">{park.description}</p>
                      <div className="mt-auto">
                        <a
                          href={getCleanUrl(park.name)}
                          className="inline-flex items-center bg-brand-olive text-white px-6 py-3 rounded-lg font-semibold hover:bg-brand-olive/90 transition-colors"
                        >
                          Learn More
                          <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </a>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-brand-olive text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Experience Tanzania's Wildlife?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Choose from our carefully crafted safari packages, from budget camping adventures to luxury lodge
              experiences.
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

export { homepageParks }
