import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Contact Us | Africa Prince Adventures Tanzania Safari Booking",
  description:
    "Contact Africa Prince Adventures for Tanzania safari bookings. Phone: 0735051566, Email: adventuresprince@gmail.com, info@africa-p-adventures.com. Based in Arusha, Tanzania.",
  keywords:
    "contact Africa Prince Adventures, Tanzania safari booking, Arusha safari contact, safari inquiry Tanzania, book Tanzania safari",
  openGraph: {
    title: "Contact Us | Africa Prince Adventures Tanzania Safari Booking",
    description:
      "Contact Africa Prince Adventures for Tanzania safari bookings. Phone: 0735051566. Based in Arusha, Tanzania.",
  },
}

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <div className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-brand-olive">Contact Us</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to start your Tanzania adventure? Get in touch with us today to plan your perfect safari experience.
            </p>
          </div>
        </div>

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold mb-6 text-brand-olive">Get In Touch</h2>
                  <p className="text-muted-foreground leading-relaxed mb-8">
                    We're here to help you plan the perfect safari adventure. Contact us using any of the methods below,
                    and we'll get back to you as soon as possible.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-brand-olive/10 p-3 rounded-lg">
                      <Phone className="h-6 w-6 text-brand-olive" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Phone</h3>
                      <p className="text-muted-foreground">0735051566</p>
                      <p className="text-sm text-muted-foreground">Available 24/7 for emergencies</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-brand-olive/10 p-3 rounded-lg">
                      <Mail className="h-6 w-6 text-brand-olive" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <p className="text-muted-foreground">adventuresprince@gmail.com</p>
                      <p className="text-muted-foreground">info@africa-p-adventures.com</p>
                      <p className="text-sm text-muted-foreground">We respond within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-brand-olive/10 p-3 rounded-lg">
                      <MapPin className="h-6 w-6 text-brand-olive" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Location</h3>
                      <p className="text-muted-foreground">Arusha, Tanzania</p>
                      <p className="text-sm text-muted-foreground">Gateway to Northern Tanzania Safari Circuit</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-brand-olive/10 p-3 rounded-lg">
                      <Clock className="h-6 w-6 text-brand-olive" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Business Hours</h3>
                      <p className="text-muted-foreground">Monday - Sunday: 8:00 AM - 6:00 PM</p>
                      <p className="text-sm text-muted-foreground">East Africa Time (EAT)</p>
                    </div>
                  </div>
                </div>

                <div className="pt-8 border-t">
                  <h3 className="font-semibold mb-4 text-brand-orange">Follow Us & Reviews</h3>
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-4">
                      <Link
                        href="https://www.facebook.com/p/Africa-prince-adventures-61554659741927/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-muted-foreground hover:text-brand-olive transition-colors"
                      >
                        <Facebook className="h-5 w-5" />
                        <span>Facebook</span>
                      </Link>
                      <Link
                        href="https://www.instagram.com/africa_prince_adventures/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-muted-foreground hover:text-brand-olive transition-colors"
                      >
                        <Instagram className="h-5 w-5" />
                        <span>Instagram</span>
                      </Link>
                      <Link
                        href="https://tz.linkedin.com/in/africa-prince-adventures-3021352a6"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-muted-foreground hover:text-brand-olive transition-colors"
                      >
                        <Linkedin className="h-5 w-5" />
                        <span>LinkedIn</span>
                      </Link>
                    </div>
                    <div className="space-y-2">
                      <Link
                        href="https://www.tripadvisor.com/Attraction_Review-g297913-d23510672-Reviews-Africa_Prince_adventures-Arusha_Arusha_Region.html"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-muted-foreground hover:text-brand-olive transition-colors text-sm"
                      >
                        📍 Read our reviews on TripAdvisor
                      </Link>
                      <Link
                        href="https://www.getyourguide.com/en-gb/africa-prince-adventures-s348469/?visitor-id=HT3LYGRUQ1SUA2X4ALTO171B2TLX6VBC&locale_autoredirect_optout=true"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-muted-foreground hover:text-brand-olive transition-colors text-sm"
                      >
                        🎯 Book tours on GetYourGuide
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-brand-orange">Send Us a Message</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">First Name</label>
                      <Input placeholder="Your first name" />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Last Name</label>
                      <Input placeholder="Your last name" />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Email</label>
                    <Input type="email" placeholder="your.email@example.com" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Phone (Optional)</label>
                    <Input placeholder="+1 (555) 123-4567" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Safari Interest</label>
                    <select className="w-full p-2 border border-input rounded-md bg-background">
                      <option>Select your safari preference</option>
                      <option>Budget Camping Safari</option>
                      <option>Mid-Range Lodge Safari</option>
                      <option>Luxury Safari</option>
                      <option>Private Safari</option>
                      <option>Group Safari</option>
                      <option>Honeymoon Safari</option>
                      <option>Cultural Tourism</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Message</label>
                    <Textarea
                      placeholder="Tell us about your dream safari experience, preferred dates, group size, and any special requirements..."
                      rows={5}
                    />
                  </div>
                  <Button className="w-full bg-brand-olive hover:bg-brand-olive/90">Send Message</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
