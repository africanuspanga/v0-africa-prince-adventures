"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin, CheckCircle, AlertCircle } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { useActionState } from "react"
import { useFormStatus } from "react-dom"
import { submitContactForm, type ContactFormState } from "@/lib/actions"

function SubmitButton() {
  const { pending } = useFormStatus()

  return (
    <Button type="submit" className="w-full bg-brand-olive hover:bg-brand-olive/90" disabled={pending}>
      {pending ? "Sending..." : "Send Message"}
    </Button>
  )
}

export default function ContactPage() {
  const [state, formAction] = useActionState<ContactFormState, FormData>(submitContactForm, {})

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
                <CardContent>
                  {state.success && (
                    <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <p className="text-green-800">
                        Thank you! Your message has been sent successfully. We'll get back to you soon.
                      </p>
                    </div>
                  )}

                  {state.error && (
                    <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-3">
                      <AlertCircle className="h-5 w-5 text-red-600" />
                      <p className="text-red-800">{state.error}</p>
                    </div>
                  )}

                  <form action={formAction} className="space-y-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Full Name</label>
                      <Input
                        name="name"
                        placeholder="Your full name"
                        required
                        className={state.fieldErrors?.name ? "border-red-500" : ""}
                      />
                      {state.fieldErrors?.name && (
                        <p className="text-red-500 text-sm mt-1">{state.fieldErrors.name[0]}</p>
                      )}
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-2 block">Email</label>
                      <Input
                        name="email"
                        type="email"
                        placeholder="your.email@example.com"
                        required
                        className={state.fieldErrors?.email ? "border-red-500" : ""}
                      />
                      {state.fieldErrors?.email && (
                        <p className="text-red-500 text-sm mt-1">{state.fieldErrors.email[0]}</p>
                      )}
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-2 block">Subject</label>
                      <Input
                        name="subject"
                        placeholder="What is your inquiry about?"
                        required
                        className={state.fieldErrors?.subject ? "border-red-500" : ""}
                      />
                      {state.fieldErrors?.subject && (
                        <p className="text-red-500 text-sm mt-1">{state.fieldErrors.subject[0]}</p>
                      )}
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-2 block">Message</label>
                      <Textarea
                        name="message"
                        placeholder="Tell us about your dream safari experience, preferred dates, group size, and any special requirements..."
                        rows={5}
                        required
                        className={state.fieldErrors?.message ? "border-red-500" : ""}
                      />
                      {state.fieldErrors?.message && (
                        <p className="text-red-500 text-sm mt-1">{state.fieldErrors.message[0]}</p>
                      )}
                    </div>

                    <SubmitButton />
                  </form>
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
