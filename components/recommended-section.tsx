import Image from "next/image"
import Link from "next/link"

const reviewPlatforms = [
  {
    name: "TripAdvisor",
    logo: "/images/tripadvisor.webp",
    width: 120,
    height: 40,
    url: "https://www.tripadvisor.com/Attraction_Review-g297913-d23510672-Reviews-Africa_Prince_adventures-Arusha_Arusha_Region.html",
  },
  {
    name: "Google Reviews",
    logo: "/images/google-reviews.png",
    width: 120,
    height: 40,
    url: "#",
  },
  {
    name: "Trustpilot",
    logo: "/images/trustpilot.png",
    width: 120,
    height: 40,
    url: "#",
  },
  {
    name: "GetYourGuide",
    logo: "/images/get-your-guide.png",
    width: 100,
    height: 40,
    url: "https://www.getyourguide.com/en-gb/africa-prince-adventures-s348469/?visitor-id=HT3LYGRUQ1SUA2X4ALTO171B2TLX6VBC&locale_autoredirect_optout=true",
  },
  {
    name: "Safarigo",
    logo: "/images/safarigo.png",
    width: 120,
    height: 40,
    url: "#",
  },
]

export function RecommendedSection() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-brand-olive">Recommended On</h2>
          <p className="text-muted-foreground">Partnering with the Best</p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-8 p-8 bg-white rounded-lg shadow-sm max-w-4xl mx-auto">
          {reviewPlatforms.map((platform) => (
            <div key={platform.name} className="flex items-center justify-center">
              {platform.url && platform.url !== "#" ? (
                <Link href={platform.url} target="_blank" rel="noopener noreferrer" className="block">
                  <Image
                    src={platform.logo || "/placeholder.svg"}
                    alt={`${platform.name} logo`}
                    width={platform.width}
                    height={platform.height}
                    className="opacity-70 hover:opacity-100 transition-opacity duration-300"
                  />
                </Link>
              ) : (
                <Image
                  src={platform.logo || "/placeholder.svg"}
                  alt={`${platform.name} logo`}
                  width={platform.width}
                  height={platform.height}
                  className="opacity-70 hover:opacity-100 transition-opacity duration-300"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
