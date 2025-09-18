import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Mikumi National Park - The Serengeti of the South | Africa Prince Adventures",
  description:
    "Discover Mikumi National Park, Tanzania's accessible safari destination with tree-climbing lions, hippo pools, and over 400 bird species near Dar es Salaam.",
  keywords:
    "Mikumi National Park, Tree-climbing Lions, Hippo Pools, Mkata Floodplain, Tanzania Safari, Dar es Salaam, Miombo Woodlands, Greater Kudu",
}

export default function MikumiPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/images/mikumi-buffalo.jpeg')`,
          }}
        />
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">Mikumi National Park</h1>
          <p className="text-xl md:text-2xl mb-8 text-pretty">The Serengeti of the South</p>
          <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto text-pretty">
            Tanzania's most accessible safari destination with authentic wilderness experiences
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl leading-relaxed mb-8 text-muted-foreground">
              Mikumi National Park, often referred to as a mini-Serengeti due to its open plains and abundant wildlife,
              is one of Tanzania's most accessible and rewarding safari destinations. Its proximity to Dar es Salaam
              makes it a perfect choice for those with limited time, offering a genuine taste of the African wilderness
              without an extensive travel commitment.
            </p>

            <h2 className="text-3xl font-bold mb-6 text-foreground">The Mkata Floodplain</h2>
            <p className="leading-relaxed mb-6">
              The heart of Mikumi is the Mkata Floodplain, a vast expanse of open grassland that is a magnet for large
              herds of buffalo, zebra, wildebeest, and impala. This area is particularly famous for its unique
              population of "tree-climbing lions," a behavior more commonly associated with Lake Manyara National Park.
              Spotting a lion lounging on the branch of an acacia tree is a rare and thrilling sight.
            </p>

            <p className="leading-relaxed mb-6">
              The Mkata plains are also home to the powerful eland, the largest antelope in the world, and the
              impressive greater kudu, often found in the miombo-covered foothills. The park forms a crucial part of a
              larger ecosystem with the Selous Game Reserve, allowing for the free movement of wildlife and ensuring a
              high density of animals.
            </p>

            <h2 className="text-3xl font-bold mb-6 text-foreground">Diverse Landscapes</h2>
            <p className="leading-relaxed mb-6">
              Mikumi's diverse landscape offers more than just open plains. It is bordered by the Uluguru and Rubeho
              Mountains, which provide a dramatic backdrop and shelter unique miombo woodlands. These ancient forests
              are home to species rarely seen elsewhere, creating a rich tapestry of habitats within the park.
            </p>

            <h2 className="text-3xl font-bold mb-6 text-foreground">Hippo Pools and Birdlife</h2>
            <p className="leading-relaxed mb-6">
              The park's hippo pools, located a short distance from the main gate, are a major highlight. Here, hundreds
              of hippos gather, their grunts and splashes creating a lively spectacle. The pools are also a haven for a
              variety of waterbirds, making them a fantastic spot for birdwatching. Mikumi is a bird lover's paradise,
              with over 400 species recorded, including the colorful lilac-breasted roller, yellow-throated longclaw,
              and a variety of storks and raptors.
            </p>

            <h2 className="text-3xl font-bold mb-6 text-foreground">Unique Safari Experience</h2>
            <p className="leading-relaxed mb-6">
              A unique feature of Mikumi is the paved highway that runs straight through the park. While it offers a
              convenient route, it also provides an unusual opportunity for a safari right from your vehicle. As you
              drive, you'll be able to spot animals grazing just off the road, a fascinating blend of modern travel and
              untouched wilderness.
            </p>

            <p className="leading-relaxed mb-8">
              Mikumi National Park is a testament to the fact that you don't need to travel far to find extraordinary
              wildlife and landscapes, offering a perfect entry point into the wild heart of Tanzania.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-muted">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Visit Mikumi</h2>
          <p className="text-lg mb-8 text-muted-foreground max-w-2xl mx-auto">
            Experience the accessible wilderness of Mikumi National Park and witness tree-climbing lions in their
            natural habitat. Contact us to plan your southern Tanzania safari.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-lg font-semibold"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  )
}
