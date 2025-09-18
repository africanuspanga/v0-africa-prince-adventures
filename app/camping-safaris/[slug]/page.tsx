import { getTourBySlug } from "@/lib/tours-data"
import { notFound } from "next/navigation"
import CampingTourDetailPageClient from "./TourDetailPageClient"

interface TourDetailPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: TourDetailPageProps) {
  const tour = getTourBySlug(params.slug)

  if (!tour) {
    return {
      title: "Tour Not Found - Africa Prince Adventures",
    }
  }

  return {
    title: `${tour.title} | Camping Safari - Africa Prince Adventures`,
    description: tour.description,
    keywords: `${tour.title}, Tanzania camping safari, budget safari, ${tour.highlights.join(", ")}`,
  }
}

export default function CampingTourDetailPage({ params }: TourDetailPageProps) {
  const tour = getTourBySlug(params.slug)

  if (!tour || tour.category !== "camping") {
    notFound()
  }

  return <CampingTourDetailPageClient params={params} />
}
