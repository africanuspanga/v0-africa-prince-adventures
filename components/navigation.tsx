"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isTrekkingDropdownOpen, setIsTrekkingDropdownOpen] = useState(false)
  const [isToursDropdownOpen, setIsToursDropdownOpen] = useState(false)
  const [isKilimanjaroDropdownOpen, setIsKilimanjaroDropdownOpen] = useState(false)
  const [isMountMeruDropdownOpen, setIsMountMeruDropdownOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "/", label: "HOME" },
    { href: "/about", label: "ABOUT" },
    { href: "/tours", label: "TOURS", hasDropdown: true },
    { href: "/trekking", label: "TREKKING", hasDropdown: true },
    { href: "/top-destinations", label: "DESTINATIONS" },
    { href: "/special-tours", label: "SPECIALS" },
    { href: "/contact", label: "CONTACT" },
  ]

  const trekkingLinks = [
    {
      href: "/trekking/kilimanjaro",
      label: "Kilimanjaro",
      hasSubDropdown: true,
      subLinks: [
        { href: "/trekking/kilimanjaro/marangu", label: "Marangu Route" },
        { href: "/trekking/kilimanjaro/machame", label: "Machame Route" },
        { href: "/trekking/kilimanjaro/lemosho", label: "Lemosho Route" },
        { href: "/trekking/kilimanjaro/rongai", label: "Rongai Route" },
        { href: "/trekking/kilimanjaro/umbwe", label: "Umbwe Route" },
      ],
    },
    {
      href: "/trekking/mount-meru",
      label: "Mount Meru",
      hasSubDropdown: true,
      subLinks: [
        { href: "/trekking/mount-meru/3-days", label: "3 Days Trek" },
        { href: "/trekking/mount-meru/4-days", label: "4 Days Trek" },
      ],
    },
    { href: "/trekking/lushoto", label: "Lushoto" },
    { href: "/trekking/usambara", label: "Usambara" },
  ]

  const toursLinks = [
    { href: "/day-trips", label: "Day Trips" },
    { href: "/cultural-tours", label: "Cultural Tours" },
    { href: "/beach-holidays", label: "Beach Holidays" },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="Africa Prince Adventures"
              width={120}
              height={60}
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => {
              if (link.label === "TOURS") {
                return (
                  <div
                    key={link.href}
                    className="relative"
                    onMouseEnter={() => setIsToursDropdownOpen(true)}
                    onMouseLeave={() => setIsToursDropdownOpen(false)}
                  >
                    <button
                      className={`text-sm font-medium transition-colors hover:text-primary flex items-center gap-1 ${
                        isScrolled ? "text-foreground" : "text-white"
                      }`}
                    >
                      {link.label}
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    {isToursDropdownOpen && (
                      <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg border py-2 z-[60]">
                        {toursLinks.map((tourLink) => (
                          <Link
                            key={tourLink.href}
                            href={tourLink.href}
                            className="block px-4 py-2 text-sm text-foreground hover:bg-muted transition-colors"
                          >
                            {tourLink.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                )
              }

              if (link.label === "TREKKING") {
                return (
                  <div
                    key={link.href}
                    className="relative"
                    onMouseEnter={() => setIsTrekkingDropdownOpen(true)}
                    onMouseLeave={() => {
                      setIsTrekkingDropdownOpen(false)
                      setIsKilimanjaroDropdownOpen(false)
                      setIsMountMeruDropdownOpen(false)
                    }}
                  >
                    <button
                      className={`text-sm font-medium transition-colors hover:text-primary flex items-center gap-1 ${
                        isScrolled ? "text-foreground" : "text-white"
                      }`}
                    >
                      {link.label}
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    {isTrekkingDropdownOpen && (
                      <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg border py-2 z-[9999]">
                        {trekkingLinks.map((trekkingLink) => (
                          <div key={trekkingLink.href} className="relative">
                            {trekkingLink.hasSubDropdown ? (
                              <div
                                className="relative"
                                onMouseEnter={() => {
                                  if (trekkingLink.label === "Kilimanjaro") {
                                    setIsKilimanjaroDropdownOpen(true)
                                  } else if (trekkingLink.label === "Mount Meru") {
                                    setIsMountMeruDropdownOpen(true)
                                  }
                                }}
                                onMouseLeave={() => {
                                  if (trekkingLink.label === "Kilimanjaro") {
                                    setIsKilimanjaroDropdownOpen(false)
                                  } else if (trekkingLink.label === "Mount Meru") {
                                    setIsMountMeruDropdownOpen(false)
                                  }
                                }}
                              >
                                <div className="flex items-center justify-between px-4 py-2 text-sm text-foreground hover:bg-muted transition-colors cursor-pointer">
                                  <span>{trekkingLink.label}</span>
                                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M9 5l7 7-7 7"
                                    />
                                  </svg>
                                </div>

                                {/* Sub-dropdown for Kilimanjaro */}
                                {trekkingLink.label === "Kilimanjaro" && isKilimanjaroDropdownOpen && (
                                  <div className="absolute left-full top-0 ml-1 w-48 bg-white rounded-md shadow-lg border py-2 z-[99999]">
                                    {trekkingLink.subLinks?.map((subLink) => (
                                      <Link
                                        key={subLink.href}
                                        href={subLink.href}
                                        className="block px-4 py-2 text-sm text-foreground hover:bg-muted transition-colors"
                                      >
                                        {subLink.label}
                                      </Link>
                                    ))}
                                  </div>
                                )}

                                {/* Sub-dropdown for Mount Meru */}
                                {trekkingLink.label === "Mount Meru" && isMountMeruDropdownOpen && (
                                  <div className="absolute left-full top-0 ml-1 w-48 bg-white rounded-md shadow-lg border py-2 z-[99999]">
                                    {trekkingLink.subLinks?.map((subLink) => (
                                      <Link
                                        key={subLink.href}
                                        href={subLink.href}
                                        className="block px-4 py-2 text-sm text-foreground hover:bg-muted transition-colors"
                                      >
                                        {subLink.label}
                                      </Link>
                                    ))}
                                  </div>
                                )}
                              </div>
                            ) : (
                              <Link
                                href={trekkingLink.href}
                                className="block px-4 py-2 text-sm text-foreground hover:bg-muted transition-colors"
                              >
                                {trekkingLink.label}
                              </Link>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )
              }

              if (link.label === "DESTINATIONS") {
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`text-sm font-medium transition-colors hover:text-primary ${
                      isScrolled ? "text-foreground" : "text-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              }

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    isScrolled ? "text-foreground" : "text-white"
                  }`}
                >
                  {link.label}
                </Link>
              )
            })}

            <Link href="/contact">
              <Button variant="default" className="bg-amber-700 hover:bg-amber-800 text-white">
                BOOK TOUR
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? (
              <svg
                className={`h-6 w-6 ${isScrolled ? "text-foreground" : "text-white"}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12M6 12h12" />
              </svg>
            ) : (
              <svg
                className={`h-6 w-6 ${isScrolled ? "text-foreground" : "text-white"}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t">
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => {
                if (link.label === "TOURS") {
                  return (
                    <div key={link.href} className="space-y-2">
                      <div className="text-sm font-medium text-foreground">TOURS</div>
                      <div className="pl-4 space-y-2">
                        {toursLinks.map((tourLink) => (
                          <Link
                            key={tourLink.href}
                            href={tourLink.href}
                            className="block text-sm text-muted-foreground hover:text-primary"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {tourLink.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )
                }

                if (link.label === "TREKKING") {
                  return (
                    <div key={link.href} className="space-y-2">
                      <div className="text-sm font-medium text-foreground">TREKKING</div>
                      <div className="pl-4 space-y-2">
                        {trekkingLinks.map((trekkingLink) => (
                          <div key={trekkingLink.href} className="space-y-1">
                            {trekkingLink.hasSubDropdown ? (
                              <>
                                <div className="text-sm font-medium text-muted-foreground">{trekkingLink.label}</div>
                                <div className="pl-4 space-y-1">
                                  {trekkingLink.subLinks?.map((subLink) => (
                                    <Link
                                      key={subLink.href}
                                      href={subLink.href}
                                      className="block text-sm text-muted-foreground hover:text-primary"
                                      onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                      {subLink.label}
                                    </Link>
                                  ))}
                                </div>
                              </>
                            ) : (
                              <Link
                                href={trekkingLink.href}
                                className="block text-sm text-muted-foreground hover:text-primary"
                                onClick={() => setIsMobileMenuOpen(false)}
                              >
                                {trekkingLink.label}
                              </Link>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )
                }

                if (link.label === "DESTINATIONS") {
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block text-sm font-medium text-foreground hover:text-primary"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  )
                }

                if (!link.hasDropdown) {
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block text-sm font-medium text-foreground hover:text-primary"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  )
                }

                return null
              })}

              <Link href="/contact">
                <Button variant="default" className="w-full bg-amber-700 hover:bg-amber-800 text-white">
                  BOOK TOUR
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
