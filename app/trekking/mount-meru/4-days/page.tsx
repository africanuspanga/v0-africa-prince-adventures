import type { Metadata } from "next"
import MountMeru4DaysClientPage from "./MountMeru4DaysClientPage"

export const metadata: Metadata = {
  title: "Mount Meru 4 Days Route | Africa Prince Adventures Tanzania",
  description:
    "Experience Mount Meru's 4-day trekking route with Africa Prince Adventures. More comfortable pace with better acclimatization.",
}

export default function MountMeru4DaysPage() {
  return <MountMeru4DaysClientPage />
}
