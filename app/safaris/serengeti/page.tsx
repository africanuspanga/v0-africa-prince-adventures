import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Serengeti National Park - Complete Guide | Africa Prince Adventures",
  description:
    "Discover everything about Serengeti National Park - wildlife, Great Migration, best time to visit, activities, and accommodation options. Plan your perfect safari.",
  keywords:
    "Serengeti National Park, Great Migration, Tanzania safari, Big Five, wildebeest migration, Serengeti wildlife, safari guide",
}

export default function SerengetiPage() {
  return (
    <>
      <Header />
      <main>
        <div className="relative h-96 bg-gradient-to-r from-brand-olive/90 to-brand-olive/70">
          <Image
            src="/images/serengeti-balloon.jpeg"
            alt="Serengeti National Park"
            fill
            className="object-cover -z-10"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="container mx-auto px-4 h-full flex items-center">
            <div className="text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">Serengeti National Park</h1>
              <p className="text-xl md:text-2xl">Home of the Great Migration</p>
            </div>
          </div>
        </div>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto prose prose-lg">
              <h2 className="text-3xl font-bold text-brand-olive mb-6">The Crown Jewel of African Safari</h2>

              <p className="text-lg leading-relaxed mb-6">
                Serengeti National Park stands as one of Earth's most magnificent natural wonders, a UNESCO World
                Heritage Site that has remained largely unchanged for over a million years. Spanning nearly 15,000
                square kilometers of pristine wilderness in northern Tanzania, the Serengeti represents the epitome of
                African safari experiences and continues to captivate visitors from around the globe.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                The park's name derives from the Maasai word "siringet," meaning "endless plains," perfectly describing
                the vast savannahs that stretch beyond the horizon. This ancient ecosystem encompasses diverse habitats
                including grasslands, acacia forests, rocky kopjes (granite outcrops), and river systems that support an
                incredible array of wildlife throughout the year.
              </p>

              <h3 className="text-2xl font-bold text-brand-olive mb-4">The Great Migration Spectacle</h3>

              <p className="text-lg leading-relaxed mb-6">
                The Serengeti is globally renowned for hosting the Great Migration, often called the "Greatest Show on
                Earth." This annual phenomenon involves over 1.5 million wildebeest, accompanied by 200,000 zebras and
                300,000 Thomson's gazelles, traversing the Serengeti-Mara ecosystem in an endless search for fresh
                grazing and water. This circular journey covers approximately 1,800 miles and follows ancient migratory
                routes that have existed for millennia.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                The migration follows a predictable pattern: from January to March, massive herds gather in the southern
                Serengeti and Ndutu region for the calving season, where over 400,000 wildebeest calves are born within
                a few weeks. This period attracts numerous predators, creating dramatic wildlife encounters. From May to
                July, the herds move westward toward the Grumeti River, while the famous Mara River crossings occur from
                July to September in the northern Serengeti, where crocodiles await the crossing herds.
              </p>

              <h3 className="text-2xl font-bold text-brand-olive mb-4">Exceptional Wildlife Diversity</h3>

              <p className="text-lg leading-relaxed mb-6">
                Beyond the migration, the Serengeti supports an extraordinary diversity of wildlife year-round. The park
                is home to all members of the "Big Five" - lions, leopards, elephants, buffalo, and rhinoceros. With
                over 4,000 lions roaming the plains, the Serengeti boasts one of Africa's largest lion populations. The
                park also supports approximately 1,000 leopards, 550 cheetahs, and significant populations of African
                elephants and Cape buffalo.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                The park's avian diversity is equally impressive, with over 500 bird species recorded, including
                ostriches, secretary birds, Kori bustards, and various raptors. The iconic kopjes serve as vantage
                points for predators and provide unique microhabitats for specialized species like rock hyraxes and
                agama lizards.
              </p>

              <h3 className="text-2xl font-bold text-brand-olive mb-4">Best Times to Visit</h3>

              <p className="text-lg leading-relaxed mb-6">
                The Serengeti offers exceptional wildlife viewing year-round, but different seasons provide unique
                experiences. The dry season from June to October is ideal for general game viewing, as animals
                concentrate around permanent water sources and vegetation is sparse, making wildlife easier to spot.
                This period coincides with the dramatic river crossings in the northern Serengeti.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                The calving season from January to March offers unparalleled predator-prey interactions in the southern
                plains. The short rains from November to December transform the landscape into a lush, green paradise
                with excellent birdwatching opportunities and fewer tourists, providing a more intimate safari
                experience.
              </p>

              <h3 className="text-2xl font-bold text-brand-olive mb-4">Safari Activities and Experiences</h3>

              <p className="text-lg leading-relaxed mb-6">
                The Serengeti offers diverse safari activities to suit every preference. Traditional game drives remain
                the most popular way to explore the park, with morning and evening drives providing optimal wildlife
                viewing opportunities. Hot air balloon safaris offer a unique aerial perspective of the endless plains
                at sunrise, followed by champagne breakfast in the bush.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                Walking safaris, conducted with armed guides, provide intimate encounters with the ecosystem's smaller
                details often missed during vehicle-based safaris. Cultural visits to nearby Maasai villages offer
                insights into traditional pastoralist lifestyles and the coexistence between local communities and
                wildlife. Photography safaris cater to serious photographers seeking the perfect shot of Africa's iconic
                wildlife.
              </p>

              <h3 className="text-2xl font-bold text-brand-olive mb-4">Conservation Success Story</h3>

              <p className="text-lg leading-relaxed mb-6">
                The Serengeti represents one of Africa's greatest conservation success stories. Established as a
                national park in 1951, it has maintained its ecological integrity while supporting local communities and
                tourism. The park's management works closely with surrounding communities to ensure sustainable
                conservation practices and equitable benefit-sharing from tourism revenue.
              </p>

              <p className="text-lg leading-relaxed">
                Today, the Serengeti continues to inspire visitors with its raw beauty and abundant wildlife, serving as
                a testament to the importance of protecting Africa's natural heritage for future generations. Whether
                witnessing the Great Migration, observing predator-prey interactions, or simply marveling at the endless
                plains under vast African skies, the Serengeti offers transformative experiences that create lifelong
                memories and deep appreciation for the natural world.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-brand-olive text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Experience the Serengeti</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Join us for an unforgettable safari adventure in the world's most famous national park.
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
