import Link from "next/link";
import { Navbar } from "@/app/components/Navbar";
import { StickyMobileBooking } from "@/app/components/StickyMobileBooking";
import { WhatsAppButton } from "@/app/components/WhatsAppButton";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[var(--color-background)]">
      <Navbar />
      <main className="px-6 py-12 pb-12 lg:px-8">
        <div className="mx-auto max-w-4xl">
          {/* Header */}
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-semibold text-[var(--color-primary)] sm:text-5xl">
              Terms of Service
            </h1>
            <p className="mt-4 text-lg text-[var(--color-text-secondary)]">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none space-y-8 text-[var(--color-text-primary)]">
            <section>
              <h2 className="text-2xl font-semibold text-[var(--color-primary)] mb-4">1. Acceptance of Terms</h2>
              <p>
                By accessing and using the AjilMaroc website and booking our tour services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[var(--color-primary)] mb-4">2. Description of Service</h2>
              <p>
                AjilMaroc provides premium private tours and travel experiences in Morocco. Our services include desert tours, cultural experiences, day trips, and personalized travel arrangements. All tours are conducted by licensed local guides and follow international safety standards.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[var(--color-primary)] mb-4">3. Booking and Payment</h2>
              <h3 className="text-xl font-medium text-[var(--color-primary)] mb-3">Booking Process</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>All bookings are subject to availability</li>
                <li>A deposit may be required to secure your booking</li>
                <li>Full payment is due according to the payment schedule provided</li>
                <li>Bookings are confirmed upon receipt of deposit and our confirmation email</li>
              </ul>

              <h3 className="text-xl font-medium text-[var(--color-primary)] mb-3 mt-6">Payment Terms</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Prices are quoted in USD unless otherwise specified</li>
                <li>All taxes and fees are included in the quoted price</li>
                <li>Payments can be made via bank transfer, credit card, or other agreed methods</li>
                <li>Late payments may result in cancellation of services</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[var(--color-primary)] mb-4">4. Cancellation and Refund Policy</h2>
              <h3 className="text-xl font-medium text-[var(--color-primary)] mb-3">Cancellation by Customer</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>More than 30 days before departure: Full refund minus processing fees</li>
                <li>15-30 days before departure: 50% refund</li>
                <li>7-14 days before departure: 25% refund</li>
                <li>Less than 7 days before departure: No refund</li>
              </ul>

              <h3 className="text-xl font-medium text-[var(--color-primary)] mb-3 mt-6">Cancellation by AjilMaroc</h3>
              <p>
                In the rare event that we must cancel a tour due to unforeseen circumstances (weather, political unrest, health concerns, or force majeure), we will:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide full refund or alternative dates</li>
                <li>Notify you as soon as possible</li>
                <li>Offer comparable alternative arrangements at no extra cost</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[var(--color-primary)] mb-4">5. Travel Requirements and Responsibilities</h2>
              <h3 className="text-xl font-medium text-[var(--color-primary)] mb-3">Customer Responsibilities</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Valid passport and required visas</li>
                <li>Travel insurance (recommended)</li>
                <li>Compliance with local laws and customs</li>
                <li>Punctuality for tour departures</li>
                <li>Respect for local culture and environment</li>
              </ul>

              <h3 className="text-xl font-medium text-[var(--color-primary)] mb-3 mt-6">Health and Safety</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Inform us of any medical conditions or special needs</li>
                <li>Follow safety instructions provided by guides</li>
                <li>Accept responsibility for personal belongings</li>
                <li>Understand that some activities carry inherent risks</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[var(--color-primary)] mb-4">6. Liability and Insurance</h2>
              <p>
                AjilMaroc acts as an agent for transportation, accommodation, and other services. While we take all reasonable steps to ensure safety and quality, we cannot be held liable for:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Acts of nature, weather conditions, or force majeure</li>
                <li>Delays or changes caused by third parties</li>
                <li>Personal injury, illness, or loss of property</li>
                <li>Changes in government regulations or requirements</li>
              </ul>
              <p className="mt-4">
                We strongly recommend purchasing comprehensive travel insurance to cover potential risks.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[var(--color-primary)] mb-4">7. Changes to Itinerary</h2>
              <p>
                While we strive to follow the planned itinerary, we reserve the right to make changes due to weather conditions, road conditions, local events, or other factors beyond our control. Alternative arrangements will be made to ensure a comparable experience.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[var(--color-primary)] mb-4">8. Intellectual Property</h2>
              <p>
                All content on the AjilMaroc website, including text, images, logos, and designs, is protected by copyright and other intellectual property laws. You may not reproduce, distribute, or create derivative works without our written permission.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[var(--color-primary)] mb-4">9. User Conduct</h2>
              <p>You agree not to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Use our services for any illegal or unauthorized purpose</li>
                <li>Transmit harmful or malicious code</li>
                <li>Interfere with the proper functioning of our website</li>
                <li>Violate any applicable laws or regulations</li>
                <li>Harass or harm our staff, guides, or other customers</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[var(--color-primary)] mb-4">10. Governing Law</h2>
              <p>
                These Terms of Service are governed by and construed in accordance with the laws of Morocco. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts of Marrakech, Morocco.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[var(--color-primary)] mb-4">11. Changes to Terms</h2>
              <p>
                We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting on our website. Your continued use of our services constitutes acceptance of the modified terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[var(--color-primary)] mb-4">12. Contact Information</h2>
              <p>If you have any questions about these Terms of Service, please contact us:</p>
              <div className="mt-4 space-y-2">
                <p><strong>Email:</strong> legal@ajilmaroc.com</p>
                <p><strong>Phone:</strong> +212 694 504 252</p>
                <p><strong>Address:</strong> Marrakech, Morocco</p>
              </div>
            </section>
          </div>

          {/* Back to Home */}
          <div className="mt-12 text-center">
            <Link
              href="/"
              className="inline-flex items-center rounded-2xl bg-[var(--color-primary)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--color-primary)]/90"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </main>
      <StickyMobileBooking />
      <WhatsAppButton />
    </div>
  );
}