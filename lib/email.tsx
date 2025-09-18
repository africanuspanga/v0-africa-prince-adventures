import { Resend } from "resend"

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null

export interface BookingEmailData {
  customerName: string
  customerEmail: string
  customerPhone: string
  tourName: string
  tourPrice: string
  preferredDate: string
  numberOfPeople: string
  specialRequests?: string
}

export async function sendBookingEmail(data: BookingEmailData) {
  try {
    if (!resend) {
      console.error("RESEND_API_KEY not configured")
      return { success: false, error: "Email service not configured" }
    }

    const emailContent = `
      <h2>New Booking Request - Africa Prince Adventures</h2>
      
      <h3>Customer Information:</h3>
      <p><strong>Name:</strong> ${data.customerName}</p>
      <p><strong>Email:</strong> ${data.customerEmail}</p>
      <p><strong>Phone:</strong> ${data.customerPhone}</p>
      
      <h3>Tour Details:</h3>
      <p><strong>Tour:</strong> ${data.tourName}</p>
      <p><strong>Price:</strong> ${data.tourPrice}</p>
      <p><strong>Preferred Date:</strong> ${data.preferredDate}</p>
      <p><strong>Number of People:</strong> ${data.numberOfPeople}</p>
      
      ${
        data.specialRequests
          ? `
      <h3>Special Requests:</h3>
      <p>${data.specialRequests}</p>
      `
          : ""
      }
      
      <hr>
      <p><em>This booking request was submitted through the Africa Prince Adventures website.</em></p>
    `

    const result = await resend.emails.send({
      from: "Africa Prince Adventures <onboarding@resend.dev>",
      to: ["adventuresprince@gmail.com"],
      subject: `New Booking Request: ${data.tourName}`,
      html: emailContent,
      replyTo: data.customerEmail,
    })

    return { success: true, data: result }
  } catch (error) {
    console.error("Email sending failed:", error)
    return { success: false, error: error instanceof Error ? error.message : "Unknown error" }
  }
}

export async function sendCustomerConfirmation(data: BookingEmailData) {
  try {
    if (!resend) {
      console.error("RESEND_API_KEY not configured")
      return { success: false, error: "Email service not configured" }
    }

    const confirmationContent = `
      <h2>Thank you for your booking request!</h2>
      
      <p>Dear ${data.customerName},</p>
      
      <p>We have received your booking request for <strong>${data.tourName}</strong> and will get back to you within 24 hours to confirm availability and provide further details.</p>
      
      <h3>Your Booking Details:</h3>
      <p><strong>Tour:</strong> ${data.tourName}</p>
      <p><strong>Price:</strong> ${data.tourPrice}</p>
      <p><strong>Preferred Date:</strong> ${data.preferredDate}</p>
      <p><strong>Number of People:</strong> ${data.numberOfPeople}</p>
      
      <p>If you have any immediate questions, please don't hesitate to contact us:</p>
      <ul>
        <li>Email: adventuresprince@gmail.com</li>
        <li>Phone: +255 123 456 789</li>
      </ul>
      
      <p>Thank you for choosing Africa Prince Adventures!</p>
      
      <p>Best regards,<br>
      The Africa Prince Adventures Team</p>
    `

    const result = await resend.emails.send({
      from: "Africa Prince Adventures <onboarding@resend.dev>",
      to: [data.customerEmail],
      subject: "Booking Request Confirmation - Africa Prince Adventures",
      html: confirmationContent,
    })

    return { success: true, data: result }
  } catch (error) {
    console.error("Customer confirmation email failed:", error)
    return { success: false, error: error instanceof Error ? error.message : "Unknown error" }
  }
}
