import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowLeft, ArrowRight, Check, Mail, MessageCircle } from "lucide-react"

const FACEBOOK_MESSENGER_URL = "https://m.me/desbarriere"
const EMAIL = "desbarriere.au@gmail.com"

const EMAIL_SUBJECT = encodeURIComponent("Project enquiry (DB Websites)")
const EMAIL_BODY = encodeURIComponent(
  [
    "Hey Des,",
    "",
    "Keen to chat about a project.",
    "",
    "Business name:",
    "Industry:",
    "What do you need help with? (new website / Shopify store / WordPress fixes):",
    "Current website link (if any):",
    "",
    "Main goal:",
    "Budget range:",
    "Timeline:",
    "",
    "Anything else:",
    "",
    "Cheers,",
  ].join("\n")
)

const HERO_IMAGE = "/work/fifo-resume-mate-hero.jpg"
const PRICING_IMAGE = "/work/fifo-resume-mate-pricing.jpg"
const BUILDER_IMAGE = "/work/fifo-resume-mate-builder.jpg"
const CHECKOUT_IMAGE = "/work/fifo-resume-mate-checkout.jpg"

export default function FIFOResumeMatePage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-background/80 backdrop-blur">
        <div className="container mx-auto flex h-16 items-center justify-between px-6 lg:px-8">
          <Link
            href="/"
            className="flex items-center gap-2 text-lg font-semibold tracking-tight text-foreground"
          >
            <img
              src="/web-app-manifest-512x512.png"
              alt="DB Websites logo"
              className="h-8 w-8 rounded-full shadow-sm"
            />
            DB Websites
          </Link>

          <Button asChild variant="outline">
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to home
            </Link>
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-6 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-6 inline-flex rounded-full border border-border bg-background/70 px-3 py-1 text-xs font-medium text-muted-foreground">
            Digital product funnel
          </div>

          <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            FIFO Resume Mate
          </h1>

          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-muted-foreground">
            A conversion-focused landing page and digital product funnel designed to explain the offer fast, guide plan
            selection clearly, and move visitors cleanly from landing page to checkout.
          </p>

          <div className="mt-10 overflow-hidden rounded-3xl border border-border bg-card shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
            <img
              src={HERO_IMAGE}
              alt="FIFO Resume Mate landing page hero screenshot"
              className="w-full object-cover"
            />
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <Card className="rounded-3xl p-8 shadow-sm">
              <h2 className="text-2xl font-semibold text-foreground">The challenge</h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                The page needed to sell a digital offer clearly and quickly. Visitors had to understand what the
                product was, why it mattered, which package was right for them, and what to do next — without friction,
                confusion, or too much waffle.
              </p>

              <div className="mt-6 space-y-3">
                {[
                  "Explain the offer fast",
                  "Build trust without clutter",
                  "Guide users toward the right package",
                  "Create a cleaner path from landing to checkout",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-[hsl(var(--brand-accent))]" />
                    <span className="text-sm text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="rounded-3xl p-8 shadow-sm">
              <h2 className="text-2xl font-semibold text-foreground">What I worked on</h2>

              <div className="mt-6 space-y-3">
                {[
                  "Landing page hierarchy and section flow",
                  "Offer positioning and sales messaging",
                  "Pricing table structure and plan guidance",
                  "Input-builder experience and UX flow",
                  "CTA placement and conversion path cleanup",
                  "A stronger digital product funnel overall",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-[hsl(var(--brand-warm))]" />
                    <span className="text-sm text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <Card className="rounded-3xl p-8 shadow-sm">
              <h2 className="text-2xl font-semibold text-foreground">What makes this valuable</h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                This case study shows more than visual design. It shows offer clarity, pricing psychology, user flow,
                and conversion thinking. The page was built to help visitors understand the offer, choose a plan,
                complete their inputs, and move into payment.
              </p>

              <p className="mt-4 leading-relaxed text-muted-foreground">
                That makes it especially relevant for lead-gen businesses, consultants, digital products, and service
                offers that need clearer structure to convert traffic properly.
              </p>
            </Card>

            <Card className="rounded-3xl p-8 shadow-sm">
              <h2 className="text-2xl font-semibold text-foreground">Key outcomes</h2>
              <div className="mt-6 space-y-3">
                {[
                  "Cleaner offer communication",
                  "Better pricing-section guidance",
                  "Stronger hierarchy and CTA flow",
                  "A smoother path from intent to payment",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-[hsl(var(--brand-accent))]" />
                    <span className="text-sm text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-semibold text-foreground">Landing page and funnel presentation</h2>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">
              These screenshots show the funnel more properly: the landing page, the pricing decision step, the document
              builder, and the checkout experience.
            </p>

            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-sm">
                <img
                  src={PRICING_IMAGE}
                  alt="FIFO Resume Mate pricing section screenshot"
                  className="w-full object-cover"
                />
              </div>

              <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-sm">
                <img
                  src={BUILDER_IMAGE}
                  alt="FIFO Resume Mate resume builder screenshot"
                  className="w-full object-cover"
                />
              </div>
            </div>

            <div className="mt-6 overflow-hidden rounded-3xl border border-border bg-card shadow-sm">
              <img
                src={CHECKOUT_IMAGE}
                alt="FIFO Resume Mate Stripe checkout screenshot"
                className="w-full object-cover"
              />
            </div>
          </div>

          <Card className="mt-12 rounded-3xl p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-foreground">Why it matters</h2>
            <p className="mt-4 max-w-3xl leading-relaxed text-muted-foreground">
              This project shows strong digital product and lead-gen thinking. It proves I can structure pages around
              offers, pricing, trust, user inputs, and conversion — not just make something look polished and call it a
              day.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button asChild>
                <Link href={`mailto:${EMAIL}?subject=${EMAIL_SUBJECT}&body=${EMAIL_BODY}`}>
                  <Mail className="mr-2 h-4 w-4" />
                  Start a project
                </Link>
              </Button>

              <Button asChild variant="outline">
                <Link href={FACEBOOK_MESSENGER_URL} target="_blank" rel="noreferrer noopener">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Message me
                </Link>
              </Button>

              <Button asChild variant="ghost">
                <Link href="/work/fnq-lodge">
                  Next case study
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </Card>
        </div>
      </main>
    </div>
  )
}