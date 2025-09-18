import KilimanjaroClientPage from "./KilimanjaroClientPage"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Kilimanjaro Trekking Routes | Africa Prince Adventures",
  description:
    "Conquer Mount Kilimanjaro with our expert guides. Choose from 6 different routes including Marangu, Machame, Lemosho, Rongai, Northern Circuit, and Umbwe routes.",
  keywords:
    "Kilimanjaro trekking, Mount Kilimanjaro routes, Tanzania climbing, Marangu route, Machame route, Lemosho route, Rongai route, Northern Circuit, Umbwe route",
}

export default function KilimanjaroPage() {
  return <KilimanjaroClientPage />
}
