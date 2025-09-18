import Link from "next/link"
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <div className="text-2xl font-bold text-brand-olive">Africa Prince Adventures</div>
            </Link>
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              Experience the wild heart of Tanzania with our premium safari tours. We specialize in creating
              unforgettable wildlife adventures that showcase the best of East Africa's natural wonders.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://www.facebook.com/p/Africa-prince-adventures-61554659741927/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-brand-olive transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/africa_prince_adventures/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-brand-olive transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://tz.linkedin.com/in/africa-prince-adventures-3021352a6"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-brand-olive transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-brand-orange">Safari Adventures</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/top-destinations" className="text-gray-300 hover:text-brand-olive transition-colors">
                  National Parks
                </Link>
              </li>
              <li>
                <Link href="/camping-safaris" className="text-gray-300 hover:text-brand-olive transition-colors">
                  Camping Safaris
                </Link>
              </li>
              <li>
                <Link href="/lodge-safaris" className="text-gray-300 hover:text-brand-olive transition-colors">
                  Lodge Safaris
                </Link>
              </li>
              <li>
                <Link href="/special-tours" className="text-gray-300 hover:text-brand-olive transition-colors">
                  Special Tours
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-brand-orange">Mountain Trekking</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/trekking" className="text-gray-300 hover:text-brand-olive transition-colors">
                  All Treks
                </Link>
              </li>
              <li>
                <Link
                  href="/trekking/kilimanjaro/marangu"
                  className="text-gray-300 hover:text-brand-olive transition-colors"
                >
                  Kilimanjaro Routes
                </Link>
              </li>
              <li>
                <Link
                  href="/trekking/mount-meru/4-days"
                  className="text-gray-300 hover:text-brand-olive transition-colors"
                >
                  Mount Meru
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-brand-olive transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-brand-olive transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="font-semibold mb-4 text-brand-orange">Contact Information</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <MapPin className="h-5 w-5 text-brand-olive mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">
                    Arusha, Tanzania
                    <br />
                    East Africa
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-brand-olive" />
                  <span className="text-gray-300 text-sm">+255 735 051 566</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-brand-olive" />
                  <span className="text-gray-300 text-sm">adventuresprince@gmail.com</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-brand-orange">Popular Destinations</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>Serengeti National Park</li>
                <li>Ngorongoro Crater</li>
                <li>Tarangire National Park</li>
                <li>Lake Manyara National Park</li>
                <li>Mount Kilimanjaro</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-gray-800">
            <p className="text-gray-300 text-sm">© 2025 Africa Prince Adventures Tanzania. All rights reserved.</p>
            <div className="flex items-center gap-6 text-sm">
              <Link href="/terms" className="text-gray-300 hover:text-brand-olive transition-colors">
                Terms of Service
              </Link>
              <Link href="/privacy" className="text-gray-300 hover:text-brand-olive transition-colors">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
