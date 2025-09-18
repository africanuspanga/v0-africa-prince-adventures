import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Mikumi National Park Safari | Tanzania's Little Serengeti Wildlife Tours",
  description:
    "Experience Mikumi National Park - Tanzania's 'Little Serengeti' with vast plains, Big Five wildlife, elephants, lions, and diverse ecosystems. Accessible safari from Dar es Salaam.",
  keywords:
    "Mikumi National Park safari, Little Serengeti Tanzania, Mikumi wildlife tours, Tanzania Big Five safari, Mkata Floodplain, Mikumi elephants, Tanzania safari from Dar es Salaam",
  metadataBase: new URL("https://africa-prince-adventures.com"),
  alternates: {
    canonical: "/top-destinations/mikumi",
  },
  openGraph: {
    title: "Mikumi National Park Safari | Tanzania's Little Serengeti Wildlife Tours",
    description:
      "Experience Mikumi National Park - Tanzania's 'Little Serengeti' with vast plains, Big Five wildlife, and diverse ecosystems accessible from Dar es Salaam.",
    url: "https://africa-prince-adventures.com/top-destinations/mikumi",
    siteName: "Africa Prince Adventures",
    images: [
      {
        url: "/images/mikumi-buffalo.jpeg",
        width: 1200,
        height: 630,
        alt: "Buffalo herd grazing in Mikumi National Park savanna",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mikumi National Park Safari | Tanzania's Little Serengeti",
    description:
      "Experience Mikumi National Park - Tanzania's 'Little Serengeti' with vast plains, Big Five wildlife, and diverse ecosystems.",
    images: ["/images/mikumi-buffalo.jpeg"],
  },
}

export default function MikumiPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <Image src="/images/mikumi-buffalo.jpeg" alt="Mikumi National Park" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Mikumi National Park</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Tanzania's "Little Serengeti" - A Wildlife Paradise in the Heart of Tanzania
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Discover Mikumi National Park</h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Mikumi National Park, located in southeastern Tanzania, stands as the country's fourth-largest national
            park, covering approximately 3,230 square kilometers of pristine wilderness. Often referred to as the
            "Little Serengeti," this remarkable destination offers visitors an authentic African safari experience with
            its vast open plains, diverse ecosystems, and abundant wildlife populations.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            The park's crown jewel is the expansive Mkata Floodplain, where endless horizons stretch as far as the eye
            can see, reminiscent of the famous Serengeti plains. This open savanna ecosystem provides exceptional
            wildlife viewing opportunities, particularly during the dry season when animals congregate around the
            remaining water sources. The landscape is punctuated by ancient baobab trees, acacia woodlands, and seasonal
            wetlands that support an incredible diversity of flora and fauna.
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mb-4">Wildlife Encounters</h3>

          <p className="text-gray-700 leading-relaxed mb-6">
            Mikumi National Park hosts an impressive array of wildlife that rivals any of Tanzania's premier safari
            destinations. Large herds of zebra, wildebeest, buffalo, and impala roam the plains, creating spectacular
            scenes of natural abundance. Graceful giraffes browse among the acacia trees, while massive elephant herds
            traverse the landscape in their eternal search for food and water. The park's predator population includes
            lions, leopards, and spotted hyenas, offering visitors thrilling opportunities to witness the drama of the
            African wilderness.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            What sets Mikumi apart is its population of unusual antelope species rarely seen elsewhere in Tanzania.
            Visitors can encounter the majestic eland, the spiral-horned greater kudu, the striking sable antelope, and
            the elusive Lichtenstein's hartebeest. Troops of yellow baboons and vervet monkeys add to the park's primate
            diversity, while over 400 bird species have been recorded, including the spectacular lilac-breasted roller,
            yellow-throated longclaw, and the powerful bateleur eagle.
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mb-4">Safari Activities</h3>

          <p className="text-gray-700 leading-relaxed mb-6">
            The primary activity in Mikumi National Park is game driving along the extensive network of wildlife-viewing
            roads that crisscross the Mkata Floodplain. These well-maintained tracks provide access to prime wildlife
            areas and strategic waterholes where animals gather throughout the day. The park's relatively compact size
            and excellent road network make it possible to cover significant ground and maximize wildlife sightings
            during your visit.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            For those seeking a more intimate connection with nature, guided walking safaris offer the opportunity to
            explore the wilderness on foot, accompanied by experienced armed guides. These walks provide insights into
            the smaller details of the ecosystem, from tracking animal signs to identifying medicinal plants used by
            local communities. Night drives reveal the park's nocturnal inhabitants, including elusive leopards, hyenas,
            and various smaller predators that emerge after dark.
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mb-4">Best Time to Visit</h3>

          <p className="text-gray-700 leading-relaxed mb-6">
            The optimal time to visit Mikumi National Park is during the dry season, which extends from late June
            through October. During these months, the vegetation becomes sparse, making wildlife easier to spot as
            animals concentrate around the diminishing water sources. The weather is typically cooler with lower
            humidity and minimal rainfall, ensuring comfortable safari conditions and excellent visibility for
            photography and wildlife observation.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            The end of the dry season, particularly September and October, offers exceptional wildlife viewing as large
            herds gather at the remaining waterholes. This period provides some of the most rewarding game viewing
            experiences in the park, with high concentrations of animals and increased predator activity. The clear
            skies and mild temperatures make this an ideal time for extended game drives and outdoor activities.
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mb-4">Conservation and Accessibility</h3>

          <p className="text-gray-700 leading-relaxed mb-6">
            Mikumi National Park plays a crucial role in Tanzania's conservation efforts as part of the larger Selous
            ecosystem, one of Africa's most important wildlife corridors. The park's strategic location makes it easily
            accessible from Dar es Salaam, Tanzania's largest city, making it an ideal destination for both short safari
            trips and longer wilderness adventures. This accessibility, combined with its diverse wildlife and stunning
            landscapes, has made Mikumi an increasingly popular choice for safari enthusiasts seeking an authentic
            African experience.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Whether you're a first-time safari visitor or a seasoned wildlife enthusiast, Mikumi National Park offers an
            unforgettable journey into the heart of wild Africa, where every game drive brings new discoveries and every
            sunset paints the savanna in golden hues that will remain etched in your memory forever.
          </p>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Explore Mikumi?</h3>
          <p className="text-gray-600 mb-6">
            Join us for an unforgettable safari adventure in Tanzania's "Little Serengeti"
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
