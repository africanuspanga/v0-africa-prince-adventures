import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Arusha National Park Safari | Mount Meru, Giraffes & Walking Safaris Tanzania",
  description:
    "Explore Arusha National Park - home to Mount Meru, world's largest giraffe population, walking safaris, and diverse ecosystems. Perfect day trip from Arusha city with Africa Prince Adventures.",
  keywords:
    "Arusha National Park safari, Mount Meru climbing, giraffe safari Tanzania, walking safari Arusha, Momella Lakes, Tanzania day safari, Arusha park tours",
  metadataBase: new URL("https://africa-prince-adventures.com"),
  alternates: {
    canonical: "/top-destinations/arusha",
  },
  openGraph: {
    title: "Arusha National Park Safari | Mount Meru, Giraffes & Walking Safaris Tanzania",
    description:
      "Explore Arusha National Park - home to Mount Meru, world's largest giraffe population, walking safaris, and diverse ecosystems near Arusha city.",
    url: "https://africa-prince-adventures.com/top-destinations/arusha",
    siteName: "Africa Prince Adventures",
    images: [
      {
        url: "/images/arusha-zebra.jpeg",
        width: 1200,
        height: 630,
        alt: "Zebras grazing in Arusha National Park with Mount Meru in background",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arusha National Park Safari | Mount Meru & Giraffes",
    description:
      "Explore Arusha National Park - home to Mount Meru, world's largest giraffe population, and unique walking safaris near Arusha city.",
    images: ["/images/arusha-zebra.jpeg"],
  },
}

export default function ArushaPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <Image src="/images/arusha-zebra.jpeg" alt="Arusha National Park" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Arusha National Park</h1>
            <p className="text-xl max-w-2xl mx-auto">A Diverse Wilderness Paradise at the Foot of Mount Meru</p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Discover Arusha National Park</h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Arusha National Park, nestled in northern Tanzania near the vibrant city of Arusha, represents one of
            Tanzania's most accessible and diverse wildlife destinations. Despite being one of the country's smaller
            national parks, covering just 552 square kilometers, it offers an extraordinary variety of ecosystems that
            range from lush tropical rainforests and grassy savannas to the pristine alkaline waters of the Momella
            Lakes, all dominated by the majestic presence of Mount Meru, Tanzania's second-highest peak.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            The park's unique location makes it an ideal starting point for any Tanzanian safari adventure, offering
            visitors the perfect introduction to East Africa's incredible wildlife and landscapes. Its proximity to
            Kilimanjaro International Airport and the safari capital of Arusha means that within hours of arriving in
            Tanzania, visitors can find themselves immersed in pristine wilderness, watching giraffes browse among fever
            trees while Mount Kilimanjaro's snow-capped peak provides a stunning backdrop on clear days.
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mb-4">Wildlife and Ecosystems</h3>

          <p className="text-gray-700 leading-relaxed mb-6">
            Arusha National Park is renowned for hosting the world's largest population of giraffes, making it the
            premier destination for observing these gentle giants in their natural habitat. The park's diverse
            ecosystems support an impressive array of wildlife, including large herds of buffalo, zebras, warthogs, and
            elephants. The montane forests of Mount Meru provide sanctuary for rare primates, including the striking
            black-and-white colobus monkeys and playful blue monkeys, species that are increasingly rare elsewhere in
            Tanzania.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            While the park doesn't host lions or rhinos, making it unsuitable for traditional "Big Five" safaris, this
            absence creates a unique opportunity for walking safaris and more intimate wildlife encounters. Leopards and
            hyenas inhabit the park but are rarely seen, preferring the dense forest areas and rocky outcrops of Mount
            Meru's slopes. The Momella Lakes attract thousands of flamingos during certain seasons, creating spectacular
            pink carpets across the alkaline waters, while hippos wallow in the deeper sections of these remarkable
            crater lakes.
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mb-4">Mount Meru Adventures</h3>

          <p className="text-gray-700 leading-relaxed mb-6">
            Mount Meru, standing at 4,566 meters above sea level, offers one of East Africa's most rewarding mountain
            climbing experiences. The three to four-day trek to the summit provides an excellent acclimatization
            opportunity for those planning to tackle Mount Kilimanjaro, while offering spectacular views and diverse
            wildlife encounters along the route. The mountain's slopes harbor different vegetation zones, from montane
            forest at the base to alpine desert near the summit, each supporting unique flora and fauna.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            The trek passes through areas where buffalo, elephants, and various antelope species can be encountered,
            making it one of the few mountain climbs in the world where wildlife viewing is an integral part of the
            experience. The summit offers breathtaking panoramic views of the surrounding landscape, including
            unobstructed vistas of Mount Kilimanjaro, the Great Rift Valley, and the sprawling plains that stretch
            toward the Serengeti.
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mb-4">Unique Safari Activities</h3>

          <p className="text-gray-700 leading-relaxed mb-6">
            Arusha National Park offers a diverse range of activities that set it apart from other Tanzanian parks.
            Walking safaris, rare in most Tanzanian national parks due to the presence of dangerous predators, are a
            highlight here, allowing visitors to explore the wilderness on foot with experienced guides. These walks
            provide intimate encounters with wildlife and opportunities to learn about the smaller details of the
            ecosystem, from medicinal plants to animal tracking techniques.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            Canoeing on the Momella Lakes offers a unique perspective on the park's wildlife, with opportunities to
            observe hippos, waterfowl, and the spectacular flamingo populations up close. Game drives through the
            different vegetation zones reveal the park's incredible diversity, while horseback riding safaris provide
            yet another unique way to experience the African wilderness. The park is also a photographer's paradise,
            with over 400 recorded bird species, including malachite kingfishers, African fish eagles, and various
            species of bee-eaters.
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mb-4">Seasonal Highlights</h3>

          <p className="text-gray-700 leading-relaxed mb-6">
            Arusha National Park can be visited year-round, with each season offering distinct advantages. The dry
            season from June to October provides optimal game viewing conditions, as animals concentrate around water
            sources and the thinner vegetation makes wildlife easier to spot. This period also offers the clearest views
            of both Mount Meru and Mount Kilimanjaro, making it ideal for photography and mountain climbing activities.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            The wet season from November to May transforms the park into a lush, green paradise, with migratory birds
            arriving to join the resident species in a spectacular display of avian diversity. The landscape becomes
            particularly photogenic during this period, with wildflowers blooming across the grasslands and the forests
            taking on an emerald hue. While some roads may become challenging during heavy rains, the reduced number of
            visitors creates a more intimate and exclusive safari experience.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Whether you're seeking adventure on Mount Meru's slopes, intimate wildlife encounters on walking safaris, or
            simply a peaceful introduction to Tanzania's natural wonders, Arusha National Park offers an unforgettable
            experience that perfectly complements any East African safari adventure.
          </p>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Explore Arusha?</h3>
          <p className="text-gray-600 mb-6">
            Experience diverse ecosystems and unique wildlife encounters at Mount Meru's base
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
