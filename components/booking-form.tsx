"use client"

import React from "react"
import { useActionState } from "react"
import { useFormStatus } from "react-dom"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { X, CheckCircle, AlertCircle } from "lucide-react"
import { submitBookingForm, type BookingFormState } from "@/lib/actions"

interface BookingFormProps {
  selectedTour?: string
  tourPrice?: string
  isOpen: boolean
  onClose: () => void
}

function SubmitButton() {
  const { pending } = useFormStatus()

  return (
    <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold" disabled={pending}>
      {pending ? "Sending..." : "Submit Booking Request"}
    </Button>
  )
}

export function BookingForm({
  selectedTour = "Tour",
  tourPrice = "Contact for pricing",
  isOpen,
  onClose,
}: BookingFormProps) {
  const initialState: BookingFormState = {}
  const [state, formAction] = useActionState(submitBookingForm, initialState)

  React.useEffect(() => {
    if (state.success) {
      const timer = setTimeout(() => {
        onClose()
      }, 3000) // Close after 3 seconds to show success message
      return () => clearTimeout(timer)
    }
  }, [state.success, onClose])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <CardHeader className="relative">
          <Button variant="ghost" size="sm" className="absolute right-2 top-2" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
          <CardTitle className="text-2xl text-brand-orange text-center">Book This Tour</CardTitle>
          <p className="text-center text-muted-foreground">{selectedTour}</p>
        </CardHeader>
        <CardContent>
          {state.success && (
            <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-600" />
              <div>
                <p className="text-green-800 font-medium">Booking request sent successfully!</p>
                <p className="text-green-700 text-sm">We'll get back to you within 24 hours.</p>
              </div>
            </div>
          )}

          {state.error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-2">
              <AlertCircle className="h-5 w-5 text-red-600" />
              <p className="text-red-800">{state.error}</p>
            </div>
          )}

          <form action={formAction} className="space-y-6">
            {/* Hidden fields for tour details */}
            <input type="hidden" name="tourName" value={selectedTour} />
            <input type="hidden" name="tourPrice" value={tourPrice} />

            <div className="space-y-2">
              <Label htmlFor="customerName">
                Full Name <span className="text-red-500">*</span>
              </Label>
              <Input id="customerName" name="customerName" placeholder="Your full name" required />
              {state.fieldErrors?.customerName && (
                <p className="text-red-600 text-sm">{state.fieldErrors.customerName[0]}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="customerEmail">
                Email <span className="text-red-500">*</span>
              </Label>
              <Input
                id="customerEmail"
                name="customerEmail"
                type="email"
                placeholder="your.email@example.com"
                required
              />
              {state.fieldErrors?.customerEmail && (
                <p className="text-red-600 text-sm">{state.fieldErrors.customerEmail[0]}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="customerPhone">
                Phone Number <span className="text-red-500">*</span>
              </Label>
              <Input id="customerPhone" name="customerPhone" type="tel" placeholder="+1 (555) 123-4567" required />
              {state.fieldErrors?.customerPhone && (
                <p className="text-red-600 text-sm">{state.fieldErrors.customerPhone[0]}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="numberOfPeople">
                Number of People <span className="text-red-500">*</span>
              </Label>
              <Input id="numberOfPeople" name="numberOfPeople" type="number" min="1" placeholder="2" required />
              {state.fieldErrors?.numberOfPeople && (
                <p className="text-red-600 text-sm">{state.fieldErrors.numberOfPeople[0]}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="preferredDate">
                Preferred Date <span className="text-red-500">*</span>
              </Label>
              <Input id="preferredDate" name="preferredDate" type="date" required />
              {state.fieldErrors?.preferredDate && (
                <p className="text-red-600 text-sm">{state.fieldErrors.preferredDate[0]}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="specialRequests">Special Requests or Questions</Label>
              <Textarea
                id="specialRequests"
                name="specialRequests"
                placeholder="Any dietary restrictions, accessibility needs, or special requests..."
                rows={4}
              />
            </div>

            <SubmitButton />
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
