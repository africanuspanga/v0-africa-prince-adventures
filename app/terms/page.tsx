import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service | Africa Prince Adventures",
  description:
    "Terms and conditions for booking safari tours and trekking adventures with Africa Prince Adventures in Tanzania.",
}

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-brand-olive mb-4">Terms & Conditions</h1>
              <p className="text-muted-foreground text-lg">
                Please read these terms carefully before booking your adventure with us
              </p>
            </div>

            <div className="prose prose-lg max-w-none">
              <div className="bg-card rounded-lg p-8 shadow-sm border">
                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-brand-orange mb-4">THE BOOKING</h2>
                  <p className="text-muted-foreground mb-4">
                    Bookings and subsequent contracts shall be deemed to have been concluded in Arusha, Tanzania and
                    shall be interpreted according to the laws of the United Republic of Tanzania.
                  </p>
                  <p className="text-muted-foreground mb-4">Place of jurisdiction is Arusha, Tanzania.</p>
                  <p className="text-muted-foreground">
                    The Company reserves the right to decline any booking without outlining the reasons for it.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-brand-orange mb-4">DEPOSIT & PAYMENT</h2>
                  <p className="text-muted-foreground mb-4">
                    A 30% deposit is required to secure a booking. This deposit forms part of the payment for the trip
                    and shall be offset to the total amount charged to the client.
                  </p>
                  <p className="text-muted-foreground mb-4">
                    If the full amount is not paid at least four (4) weeks prior to departure, the Company reserves the
                    right to treat the booking as cancelled and the deposit shall be forfeited.
                  </p>
                  <p className="text-muted-foreground mb-4">
                    Clients booking within four (4) weeks of tour departure are required to pay the full amount
                    immediately to secure the reservation.
                  </p>
                  <p className="text-muted-foreground">
                    All bank charges are to be settled by the client. This includes transaction fees charged by our
                    bank. The amount shown on the invoice, is the amount that needs to reflect in our account and should
                    bank charges have been deducted, we would have to invoice you subsequently.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-brand-orange mb-4">BOOKING AMENDMENTS</h2>
                  <p className="text-muted-foreground">
                    For amendments of existing bookings done by the client (e.g. departure dates, air tickets,
                    accommodation, number of participants etc) a handling fee of 50 USD per booking applies. The
                    handling fee will be charged in addition to the service provider fees.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-brand-orange mb-4">CANCELLATIONS</h2>
                  <p className="text-muted-foreground mb-4">
                    Cancellations must be sent in writing to the office that confirmed the reservation. Cancellations
                    shall only be effective from the date of receipt of cancellation by the booking office. In case of a
                    booking cancellation, the Company shall retain the full deposit.
                  </p>
                  <p className="text-muted-foreground mb-4">
                    If a booking is cancelled, the client is subject to a cancellation fee as follows:
                  </p>
                  <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
                    <li>until 4 weeks prior to departure – 30% Cancellation Fee</li>
                    <li>4-2 weeks prior to departure – 50% Cancellation Fee</li>
                    <li>2-1 weeks prior to departure – 75% Cancellation Fee</li>
                    <li>less than 1 week prior to departure – 90% Cancellation Fee</li>
                  </ul>
                  <p className="text-muted-foreground">
                    The Company reserves the right to cancel any tour at its sole and absolute discretion, without prior
                    notification in instances where this is unavoidable. However, in that case the Company agrees to
                    refund all monies already paid by the client. This shall be the Company's sole responsibility to the
                    client and no claim for any damages, howsoever arising, shall accrue against the Company.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-brand-orange mb-4">
                    PASSPORTS, VISAS AND OTHER TRAVEL PAPERS
                  </h2>
                  <p className="text-muted-foreground mb-4">
                    It is the client's sole responsibility to ensure that passports, visas, health certificates, proof
                    of vaccinations and any other documentation required are all in order for the countries to be
                    visited.
                  </p>
                  <p className="text-muted-foreground">
                    The Company cannot be held liable for any consequences, damages or claims if the client does not
                    attend correctly to the client's documentation and related matters prior to commencement of the
                    tour.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-brand-orange mb-4">BAGGAGE</h2>
                  <p className="text-muted-foreground mb-4">
                    At any time, all baggage and personal effects are at the client's responsibility and the Company
                    does not accept any liability for any loss or damage of any personal effects, howsoever arising.
                  </p>
                  <p className="text-muted-foreground">
                    Clients are entitled to one bag of not more than 15 kg (backpack or soft bag – no hardtop suitcase)
                    and a daypack. The Company reserves the right to refuse excess baggage. Please notice that on our
                    trekking tours and on some "bush" flights other baggage regulations may apply.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-brand-orange mb-4">RISK</h2>
                  <p className="text-muted-foreground mb-4">
                    The client accepts that all tours are of an adventurous nature and involve an element of personal
                    risk. Neither the Company nor any of its agents can be held liable in any way for any injury, loss
                    of life or damage to property, howsoever caused. The client hereby indemnifies the Company and will
                    hold the Company, its agent, assigns and servants harmless from any such claim.
                  </p>
                  <p className="text-muted-foreground">
                    The client accepts full responsibility for all risks involved.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-brand-orange mb-4">AUTHORITY ON TOUR</h2>
                  <p className="text-muted-foreground mb-4">
                    The decisions of the Company's guide/driver on tour shall at all times be final and binding.
                  </p>
                  <p className="text-muted-foreground">
                    The client must at all times comply with the laws, customs and foreign exchange regulations of all
                    countries visited.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-brand-orange mb-4">MARKETING</h2>
                  <p className="text-muted-foreground">
                    The Company reserves the right to use any photographs and videos taken during tours for marketing or
                    any other advertising material. The client hereby gives consent to use such photographs and
                    authorises the Company to retain copyright for these photographs and such material.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-brand-orange mb-4">FORCE MAJEURE</h2>
                  <p className="text-muted-foreground">
                    Unforeseen circumstances including but not limited to war, mechanical breakdowns, weather, riots and
                    other unforeseen reasons beyond the control of the Company may cause delays or alterations to the
                    tour. The Company shall not be held liable in any way for any of these possible occurrences or any
                    consequences, which may arise as a result of these.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-brand-orange mb-4">PRICE CHANGES</h2>
                  <p className="text-muted-foreground">
                    All our prices are based on the current national park fees and taxes. Should the authorities decide
                    on increasing fees and taxes, even though they might currently not be scheduled, we would
                    subsequently have to pass on these increases.
                  </p>
                </section>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
