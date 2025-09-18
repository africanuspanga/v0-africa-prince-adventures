import Script from "next/script"

interface StructuredDataProps {
  type: "organization" | "tour" | "article" | "breadcrumb"
  data?: any
}

export function StructuredData({ type, data }: StructuredDataProps) {
  const getStructuredData = () => {
    switch (type) {
      case "organization":
        return {
          "@context": "https://schema.org",
          "@type": "TravelAgency",
          name: "Africa Prince Adventures",
          alternateName: "Africa Prince Adventures Tanzania",
          description:
            "Tanzania safari company specializing in unforgettable wildlife adventures, luxury to budget camping safaris, mountain trekking, and cultural tours from Arusha.",
          url: "https://africa-prince-adventures.com",
          logo: "https://africa-prince-adventures.com/images/logo.png",
          image: "https://africa-prince-adventures.com/images/safari-hero.jpeg",
          telephone: "+255735051566",
          email: ["adventuresprince@gmail.com", "info@africa-p-adventures.com"],
          address: {
            "@type": "PostalAddress",
            addressLocality: "Arusha",
            addressCountry: "Tanzania",
            addressRegion: "Arusha Region",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: "-3.3869",
            longitude: "36.6830",
          },
          openingHours: "Mo-Su 08:00-18:00",
          priceRange: "$350-$3200",
          areaServed: [
            {
              "@type": "Country",
              name: "Tanzania",
            },
          ],
          serviceType: [
            "Safari Tours",
            "Mountain Trekking",
            "Cultural Tours",
            "Wildlife Photography Tours",
            "Camping Safaris",
            "Lodge Safaris",
          ],
          sameAs: [
            "https://www.facebook.com/p/Africa-prince-adventures-61554659741927/",
            "https://www.instagram.com/africa_prince_adventures/",
            "https://tz.linkedin.com/in/africa-prince-adventures-3021352a6",
            "https://www.tripadvisor.com/Attraction_Review-g297913-d23510672-Reviews-Africa_Prince_adventures-Arusha_Arusha_Region.html",
            "https://www.getyourguide.com/en-gb/africa-prince-adventures-s348469/",
          ],
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Tanzania Safari Tours",
            itemListElement: [
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "TouristTrip",
                  name: "3 Days Classic Safari",
                  description:
                    "Experience Serengeti National Park and Ngorongoro Crater in luxury lodge accommodations",
                },
                price: "1400",
                priceCurrency: "USD",
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "TouristTrip",
                  name: "3 Days Camping Safari",
                  description: "Classic camping experience in Tarangire National Park and Ngorongoro Crater",
                },
                price: "1050",
                priceCurrency: "USD",
              },
            ],
          },
        }

      case "tour":
        return {
          "@context": "https://schema.org",
          "@type": "TouristTrip",
          name: data?.title || "Tanzania Safari Tour",
          description: data?.description || "Experience Tanzania's wildlife and natural wonders",
          image: data?.image || "https://africa-prince-adventures.com/images/safari-hero.jpeg",
          provider: {
            "@type": "TravelAgency",
            name: "Africa Prince Adventures",
            url: "https://africa-prince-adventures.com",
          },
          offers: {
            "@type": "Offer",
            price: data?.price || "1400",
            priceCurrency: "USD",
            availability: "https://schema.org/InStock",
            validFrom: "2025-01-01",
            validThrough: "2026-12-30",
            priceValidUntil: "2026-12-30",
          },
          duration: data?.duration || "P3D",
          touristType: "International",
          itinerary:
            data?.itinerary?.map((day: any, index: number) => ({
              "@type": "TouristDestination",
              name: day.title,
              description: day.description,
            })) || [],
          includesObject:
            data?.inclusions?.map((inclusion: string) => ({
              "@type": "Service",
              name: inclusion,
            })) || [],
        }

      case "article":
        return {
          "@context": "https://schema.org",
          "@type": "Article",
          headline: data?.title || "Tanzania Safari Guide",
          description: data?.description || "Complete guide to Tanzania safari experiences",
          image: data?.image || "https://africa-prince-adventures.com/images/safari-hero.jpeg",
          author: {
            "@type": "Organization",
            name: "Africa Prince Adventures",
          },
          publisher: {
            "@type": "Organization",
            name: "Africa Prince Adventures",
            logo: {
              "@type": "ImageObject",
              url: "https://africa-prince-adventures.com/images/logo.png",
            },
          },
          datePublished: data?.datePublished || "2025-01-01",
          dateModified: data?.dateModified || "2025-01-01",
        }

      case "breadcrumb":
        return {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement:
            data?.breadcrumbs?.map((crumb: any, index: number) => ({
              "@type": "ListItem",
              position: index + 1,
              name: crumb.name,
              item: `https://africa-prince-adventures.com${crumb.url}`,
            })) || [],
        }

      default:
        return null
    }
  }

  const structuredData = getStructuredData()

  if (!structuredData) return null

  return (
    <Script
      id={`structured-data-${type}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  )
}
