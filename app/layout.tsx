import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/react"
import { Suspense } from "react"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { StructuredData } from "@/components/structured-data"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Africa Prince Adventures | Luxury & Budget Safaris Across Tanzania",
  description:
    "Luxury & Budget Safaris Across Tanzania. Your African Adventure Awaits. Specializing in unforgettable safaris, camping trips, and day tours from Arusha, Tanzania.",
  keywords:
    "Tanzania safari, luxury safari, budget camping safari, Serengeti, Ngorongoro crater, Tarangire, safari tours, Africa Prince Adventures, Arusha safari, wildebeest migration",
  authors: [{ name: "Africa Prince Adventures" }],
  creator: "Africa Prince Adventures",
  publisher: "Africa Prince Adventures",
  robots: "index, follow",
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },
  manifest: "/manifest.json",
  openGraph: {
    title: "Africa Prince Adventures | Luxury & Budget Safaris Across Tanzania",
    description: "Your African Adventure Awaits. Luxury & Budget Safaris Across Tanzania with local expertise.",
    type: "website",
    locale: "en_US",
    siteName: "Africa Prince Adventures",
  },
  twitter: {
    card: "summary_large_image",
    title: "Africa Prince Adventures | Luxury & Budget Safaris Across Tanzania",
    description: "Your African Adventure Awaits. Luxury & Budget Safaris Across Tanzania with local expertise.",
  },
  generator: "Africa Prince Adventures",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head />
      <body className={`font-sans ${inter.variable} antialiased`}>
        <StructuredData type="organization" />
        <Suspense fallback={null}>{children}</Suspense>
        <WhatsAppFloat />
        <Analytics />
      </body>
    </html>
  )
}
