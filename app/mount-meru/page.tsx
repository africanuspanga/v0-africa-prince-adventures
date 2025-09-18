import { MountMeruClientPage } from "./MountMeruClientPage"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Mount Meru Trekking | Tanzania's Second Highest Peak | Africa Prince Adventures",
  description:
    "Climb Mount Meru, Tanzania's second highest mountain. Choose between 3-day or 4-day trekking routes with stunning views and diverse ecosystems.",
  keywords:
    "Mount Meru trekking, Tanzania climbing, Mount Meru routes, Arusha National Park, Tanzania mountains, Mount Meru 3 days, Mount Meru 4 days",
}

export default function MountMeruPage() {
  return <MountMeruClientPage />
}
