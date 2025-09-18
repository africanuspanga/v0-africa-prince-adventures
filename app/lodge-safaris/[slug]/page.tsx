import { getTourBySlug } from "@/lib/tours-data"
import { notFound } from "next/navigation"
import TourDetailPageClient from "./TourDetailPageClient"

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
    title: `${tour.title} | Private Lodge Safari - Africa Prince Adventures`,
    description: tour.description,
    keywords: `${tour.title}, Tanzania safari, luxury safari, ${tour.highlights.join(", ")}`,
  }
}

export default function TourDetailPage({ params }: TourDetailPageProps) {
  const tour = getTourBySlug(params.slug)

  if (!tour || tour.category !== "lodge") {
    notFound()
  }

  return <TourDetailPageClient params={params} />
}
