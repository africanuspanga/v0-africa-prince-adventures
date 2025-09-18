import type { Metadata } from "next"
import SpecialToursClientPage from "./SpecialToursClientPage"

export const metadata: Metadata = {
  title: "Special Tours Tanzania | Cultural Tours, Mountain Trekking & Unique Experiences",
  description:
    "Discover Tanzania's special tours beyond safari - Kilimanjaro trekking, Mount Meru expeditions, cultural experiences, and unique adventures with Africa Prince Adventures from Arusha.",
  keywords:
    "Tanzania special tours, Kilimanjaro trekking, Mount Meru climbing, cultural tours Tanzania, Oldoinyo Lengai trek, Tanzania mountain climbing, unique Tanzania experiences",
  metadataBase: new URL("https://africa-prince-adventures.com"),
  alternates: {
    canonical: "/special-tours",
  },
  openGraph: {
    title: "Special Tours Tanzania | Cultural Tours, Mountain Trekking & Unique Experiences",
    description:
      "Discover Tanzania's special tours beyond safari - Kilimanjaro trekking, Mount Meru expeditions, and unique cultural adventures.",
    url: "https://africa-prince-adventures.com/special-tours",
    siteName: "Africa Prince Adventures",
    images: [
      {
        url: "/images/kilimanjaro-summit.jpeg",
        width: 1200,
        height: 630,
        alt: "Mount Kilimanjaro summit with trekkers",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Special Tours Tanzania | Mountain Trekking & Cultural Experiences",
    description:
      "Discover Tanzania's special tours beyond safari - Kilimanjaro trekking, Mount Meru expeditions, and unique cultural adventures.",
    images: ["/images/kilimanjaro-summit.jpeg"],
  },
}

export default function SpecialToursPage() {
  return <SpecialToursClientPage />
}
