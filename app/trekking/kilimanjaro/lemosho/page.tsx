import type { Metadata } from "next"
import LemoshoRouteClient from "./LemoshoRouteClient"

export const metadata: Metadata = {
  title: "Lemosho Route Kilimanjaro | 7-8 Day Trek with Highest Success Rate 95%",
  description:
    "Climb Kilimanjaro via Lemosho Route - the most scenic route with 95% success rate, excellent acclimatization, and pristine wilderness. 7-8 day trek from $1,600 with expert guides.",
  keywords:
    "Lemosho route Kilimanjaro, Kilimanjaro Lemosho trek, best Kilimanjaro route, highest success rate Kilimanjaro, scenic Kilimanjaro route, 8 day Kilimanjaro climb",
  metadataBase: new URL("https://africa-prince-adventures.com"),
  alternates: {
    canonical: "/trekking/kilimanjaro/lemosho",
  },
  openGraph: {
    title: "Lemosho Route Kilimanjaro | 7-8 Day Trek with Highest Success Rate 95%",
    description:
      "Climb Kilimanjaro via Lemosho Route - the most scenic route with 95% success rate, excellent acclimatization, and pristine wilderness.",
    url: "https://africa-prince-adventures.com/trekking/kilimanjaro/lemosho",
    siteName: "Africa Prince Adventures",
    images: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Lemosho-Route-Map.jpg-1KbJVTPbHoPST4vCgaE2CypJxbXoFK.jpeg",
        width: 1200,
        height: 630,
        alt: "Lemosho Route Map - Kilimanjaro climbing route",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lemosho Route Kilimanjaro | Most Scenic Route 95% Success Rate",
    description:
      "Climb Kilimanjaro via Lemosho Route - the most scenic route with highest success rate and excellent acclimatization.",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Lemosho-Route-Map.jpg-1KbJVTPbHoPST4vCgaE2CypJxbXoFK.jpeg",
    ],
  },
}

export default function LemoshoRoute() {
  return <LemoshoRouteClient />
}
