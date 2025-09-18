"use server"

import { z } from "zod"
import { sendBookingEmail, sendCustomerConfirmation, type BookingEmailData } from "./email"

const bookingSchema = z.object({
  customerName: z.string().min(2, "Name must be at least 2 characters"),
  customerEmail: z.string().email("Please enter a valid email address"),
  customerPhone: z.string().min(10, "Please enter a valid phone number"),
  tourName: z.string().min(1, "Tour name is required"),
  tourPrice: z.string().min(1, "Tour price is required"),
  preferredDate: z.string().min(1, "Please select a preferred date"),
  numberOfPeople: z.string().min(1, "Number of people is required"),
  specialRequests: z.string().optional(),
})

export type BookingFormState = {
  success?: boolean
  error?: string
  fieldErrors?: Record<string, string[]>
}

export async function submitBookingForm(prevState: BookingFormState, formData: FormData): Promise<BookingFormState> {
  try {
    // Extract form data
    const rawData = {
      customerName: formData.get("customerName") as string,
      customerEmail: formData.get("customerEmail") as string,
      customerPhone: formData.get("customerPhone") as string,
      tourName: formData.get("tourName") as string,
      tourPrice: formData.get("tourPrice") as string,
      preferredDate: formData.get("preferredDate") as string,
      numberOfPeople: formData.get("numberOfPeople") as string,
      specialRequests: formData.get("specialRequests") as string,
    }

    // Validate the data
    const validationResult = bookingSchema.safeParse(rawData)

    if (!validationResult.success) {
      return {
        error: "Please check your form data",
        fieldErrors: validationResult.error.flatten().fieldErrors,
      }
    }

    const bookingData: BookingEmailData = validationResult.data

    // Send emails
    const [adminEmailResult, customerEmailResult] = await Promise.all([
      sendBookingEmail(bookingData),
      sendCustomerConfirmation(bookingData),
    ])

    if (!adminEmailResult.success) {
      console.error("Admin email failed:", adminEmailResult.error)
      return {
        error: "Failed to send booking request. Please try again or contact us directly.",
      }
    }

    if (!customerEmailResult.success) {
      console.error("Customer confirmation failed:", customerEmailResult.error)
      // Don't fail the entire process if customer email fails
    }

    return {
      success: true,
    }
  } catch (error) {
    console.error("Booking submission error:", error)
    return {
      error: "An unexpected error occurred. Please try again.",
    }
  }
}

// Contact form schema and action
const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

export type ContactFormState = {
  success?: boolean
  error?: string
  fieldErrors?: Record<string, string[]>
}

export async function submitContactForm(prevState: ContactFormState, formData: FormData): Promise<ContactFormState> {
  try {
    const rawData = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      subject: formData.get("subject") as string,
      message: formData.get("message") as string,
    }

    const validationResult = contactSchema.safeParse(rawData)

    if (!validationResult.success) {
      return {
        error: "Please check your form data",
        fieldErrors: validationResult.error.flatten().fieldErrors,
      }
    }

    const { name, email, subject, message } = validationResult.data

    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY not configured")
      return {
        error: "Email service not configured. Please contact us directly.",
      }
    }

    const { Resend } = await import("resend")
    const resend = new Resend(process.env.RESEND_API_KEY)

    const emailContent = `
      <h2>New Contact Form Submission</h2>
      
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Subject:</strong> ${subject}</p>
      
      <h3>Message:</h3>
      <p>${message.replace(/\n/g, "<br>")}</p>
      
      <hr>
      <p><em>This message was sent through the Africa Prince Adventures contact form.</em></p>
    `

    const result = await resend.emails.send({
      from: "Africa Prince Adventures <onboarding@resend.dev>",
      to: ["adventuresprince@gmail.com"],
      subject: `Contact Form: ${subject}`,
      html: emailContent,
      replyTo: email,
    })

    if (!result.data) {
      throw new Error("Failed to send email")
    }

    return {
      success: true,
    }
  } catch (error) {
    console.error("Contact form submission error:", error)
    return {
      error: "Failed to send message. Please try again or contact us directly.",
    }
  }
}
