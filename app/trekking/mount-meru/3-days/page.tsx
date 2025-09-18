import type { Metadata } from "next"
import MountMeru3DaysClientPage from "./MountMeru3DaysClientPage"

export const metadata: Metadata = {
  title: "Mount Meru 3 Days Route | Africa Prince Adventures Tanzania",
  description:
    "Experience Mount Meru's 3-day trekking route with Africa Prince Adventures. Professional guides, quality equipment, and unforgettable mountain adventure.",
}

export default function MountMeru3DaysPage() {
  return <MountMeru3DaysClientPage />
}
