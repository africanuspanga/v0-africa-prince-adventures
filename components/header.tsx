"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
} from "@/components/ui/dropdown-menu"
import { Menu, X, ChevronDown } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="relative bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4">
        {/* Main navigation */}
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="Africa Prince Adventures Tanzania"
              width={200}
              height={90}
              className="h-14 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="text-gray-800 hover:text-brand-orange transition-colors font-medium">
              HOME
            </Link>
            <Link href="/about" className="text-gray-800 hover:text-brand-orange transition-colors font-medium">
              ABOUT
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-gray-800 hover:text-brand-orange transition-colors font-medium">
                TOURS
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-56">
                <DropdownMenuItem asChild>
                  <Link href="/lodge-safaris" className="w-full cursor-pointer">
                    Private Lodge Safaris
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/camping-safaris" className="w-full cursor-pointer">
                    Camping Safaris
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu modal={false}>
              <DropdownMenuTrigger className="flex items-center gap-1 text-gray-800 hover:text-brand-orange transition-colors font-medium">
                TREKKING
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-64 z-[60]" sideOffset={5}>
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger className="cursor-pointer">Kilimanjaro</DropdownMenuSubTrigger>
                  <DropdownMenuSubContent
                    className="w-56 z-[70] bg-white border border-gray-200 shadow-lg"
                    sideOffset={2}
                    alignOffset={-5}
                    avoidCollisions={true}
                    collisionPadding={10}
                  >
                    <DropdownMenuItem asChild>
                      <Link href="/trekking/kilimanjaro/marangu" className="w-full cursor-pointer">
                        Marangu Route
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/trekking/kilimanjaro/machame" className="w-full cursor-pointer">
                        Machame Route
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/trekking/kilimanjaro/lemosho" className="w-full cursor-pointer">
                        Lemosho Route
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/trekking/kilimanjaro/umbwe" className="w-full cursor-pointer">
                        Umbwe Route
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/trekking/kilimanjaro/rongai" className="w-full cursor-pointer">
                        Rongai Route
                      </Link>
                    </DropdownMenuItem>
                  </DropdownMenuSubContent>
                </DropdownMenuSub>

                <DropdownMenuSub>
                  <DropdownMenuSubTrigger className="cursor-pointer">Mt Meru</DropdownMenuSubTrigger>
                  <DropdownMenuSubContent
                    className="w-56 z-[70] bg-white border border-gray-200 shadow-lg"
                    sideOffset={2}
                    alignOffset={-5}
                    avoidCollisions={true}
                    collisionPadding={10}
                  >
                    <DropdownMenuItem asChild>
                      <Link href="/trekking/mount-meru/3-days" className="w-full cursor-pointer">
                        3 Days Route
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/trekking/mount-meru/4-days" className="w-full cursor-pointer">
                        4 Days Route
                      </Link>
                    </DropdownMenuItem>
                  </DropdownMenuSubContent>
                </DropdownMenuSub>

                <DropdownMenuItem asChild>
                  <Link href="/trekking/oldonyo-lengai" className="w-full cursor-pointer">
                    Oldonyo Lengai
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/trekking/lushoto" className="w-full cursor-pointer">
                    Lushoto
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/trekking/usambara" className="w-full cursor-pointer">
                    Usambara
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link
              href="/top-destinations"
              className="text-gray-800 hover:text-brand-orange transition-colors font-medium"
            >
              DESTINATIONS
            </Link>
            <Link href="/special-tours" className="text-gray-800 hover:text-brand-orange transition-colors font-medium">
              SPECIALS
            </Link>
            <Link href="/contact" className="text-gray-800 hover:text-brand-orange transition-colors font-medium">
              CONTACT
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <Button
              asChild
              className="hidden md:inline-flex bg-brand-orange hover:bg-brand-orange/90 text-white font-semibold"
            >
              <Link href="/contact">BOOK TOUR</Link>
            </Button>

            {/* Mobile menu button */}
            <button className="lg:hidden text-gray-800" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <Link href="/" className="text-gray-800 hover:text-brand-orange transition-colors font-medium">
                HOME
              </Link>
              <Link href="/about" className="text-gray-800 hover:text-brand-orange transition-colors font-medium">
                ABOUT
              </Link>

              <div className="space-y-2">
                <div className="text-gray-800 font-medium">TOURS</div>
                <div className="pl-4 space-y-2">
                  <Link
                    href="/lodge-safaris"
                    className="block text-sm text-gray-700 hover:text-brand-orange transition-colors"
                  >
                    Private Lodge Safaris
                  </Link>
                  <Link
                    href="/camping-safaris"
                    className="block text-sm text-gray-700 hover:text-brand-orange transition-colors"
                  >
                    Camping Safaris
                  </Link>
                </div>
              </div>

              <div className="space-y-2">
                <div className="text-gray-800 font-medium">TREKKING</div>
                <div className="pl-4 space-y-2">
                  <div className="space-y-1">
                    <div className="text-sm font-semibold text-gray-600">Kilimanjaro</div>
                    <div className="pl-4 space-y-1">
                      <Link
                        href="/trekking/kilimanjaro/marangu"
                        className="block text-sm text-gray-700 hover:text-brand-orange transition-colors"
                      >
                        Marangu Route
                      </Link>
                      <Link
                        href="/trekking/kilimanjaro/machame"
                        className="block text-sm text-gray-700 hover:text-brand-orange transition-colors"
                      >
                        Machame Route
                      </Link>
                      <Link
                        href="/trekking/kilimanjaro/lemosho"
                        className="block text-sm text-gray-700 hover:text-brand-orange transition-colors"
                      >
                        Lemosho Route
                      </Link>
                      <Link
                        href="/trekking/kilimanjaro/umbwe"
                        className="block text-sm text-gray-700 hover:text-brand-orange transition-colors"
                      >
                        Umbwe Route
                      </Link>
                      <Link
                        href="/trekking/kilimanjaro/rongai"
                        className="block text-sm text-gray-700 hover:text-brand-orange transition-colors"
                      >
                        Rongai Route
                      </Link>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <div className="text-sm font-semibold text-gray-600">Mt Meru</div>
                    <div className="pl-4 space-y-1">
                      <Link
                        href="/trekking/mount-meru/3-days"
                        className="block text-sm text-gray-700 hover:text-brand-orange transition-colors"
                      >
                        3 Days Route
                      </Link>
                      <Link
                        href="/trekking/mount-meru/4-days"
                        className="block text-sm text-gray-700 hover:text-brand-orange transition-colors"
                      >
                        4 Days Route
                      </Link>
                    </div>
                  </div>

                  <Link
                    href="/trekking/oldonyo-lengai"
                    className="block text-sm text-gray-700 hover:text-brand-orange transition-colors"
                  >
                    Oldonyo Lengai
                  </Link>
                  <Link
                    href="/trekking/lushoto"
                    className="block text-sm text-gray-700 hover:text-brand-orange transition-colors"
                  >
                    Lushoto
                  </Link>
                  <Link
                    href="/trekking/usambara"
                    className="block text-sm text-gray-700 hover:text-brand-orange transition-colors"
                  >
                    Usambara
                  </Link>
                </div>
              </div>

              <Link
                href="/top-destinations"
                className="text-gray-800 hover:text-brand-orange transition-colors font-medium"
              >
                DESTINATIONS
              </Link>
              <Link
                href="/special-tours"
                className="text-gray-800 hover:text-brand-orange transition-colors font-medium"
              >
                SPECIALS
              </Link>
              <Link href="/contact" className="text-gray-800 hover:text-brand-orange transition-colors font-medium">
                CONTACT
              </Link>
              <Button asChild className="w-full mt-4 bg-brand-orange hover:bg-brand-orange/90 text-white">
                <Link href="/contact">BOOK TOUR</Link>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
