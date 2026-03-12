import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowLeft, ArrowRight, Check, Mail, MessageCircle } from "lucide-react"
import Lightbox from "@/components/lightbox"

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

const HERO_IMAGE = "/work/fnq-lodge/hero.jpg"
const BEFORE_IMAGE = "/work/fnq-lodge/before.jpg"
const AFTER_IMAGE = "/work/fnq-lodge/after.jpg"
const BOOKING_MOBILE_IMAGE = "/work/fnq-lodge/booking-mobile.jpg"
const CHECKOUT_DESKTOP_IMAGE = "/work/fnq-lodge/checkout-desktop-sharp.jpg"

export const metadata: Metadata = {
  title: "FNQ Lodge | Work example",
  description:
    "A work example from DB Websites showing a clearer accommodation website, a better booking path, mobile improvements, and before-and-after proof for FNQ Lodge.",
  alternates: {
    canonical: "/work/fnq-lodge",
  },
  openGraph: {
    title: "FNQ Lodge | Work example | DB Websites",
    description:
      "A work example from DB Websites showing a clearer accommodation website, a better booking path, mobile improvements, and before-and-after proof for FNQ Lodge.",
    url: "https://dbwebsites.au/work/fnq-lodge",
    siteName: "DB Websites",
    images: [
      {
        url: "https://dbwebsites.au/work/fnq-lodge/hero.jpg",
        width: 1200,
        height: 630,
        alt: "FNQ Lodge work example by DB Websites",
      },
    ],
    locale: "en_AU",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "FNQ Lodge | Work example | DB Websites",
    description:
      "A work example from DB Websites showing a clearer accommodation website, a better booking path, mobile improvements, and before-and-after proof for FNQ Lodge.",
    images: ["https://dbwebsites.au/work/fnq-lodge/hero.jpg"],
  },
}

const workExampleSchema = {
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  name: "FNQ Lodge",
  url: "https://dbwebsites.au/work/fnq-lodge",
  description:
    "A work example from DB Websites showing a clearer accommodation website, a better booking path, mobile improvements, and before-and-after proof for FNQ Lodge.",
  creator: {
    "@type": "Person",
    name: "Des",
  },
  publisher: {
    "@type": "Organization",
    name: "DB Websites",
    url: "https://dbwebsites.au",
  },
  image: [
    "https://dbwebsites.au/work/fnq-lodge/hero.jpg",
    "https://dbwebsites.au/work/fnq-lodge/before.jpg",
    "https://dbwebsites.au/work/fnq-lodge/after.jpg",
    "https://dbwebsites.au/work/fnq-lodge/booking-mobile.jpg",
    "https://dbwebsites.au/work/fnq-lodge/checkout-desktop-sharp.jpg",
  ],
}

export default function FNQLodgePage() {
  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(workExampleSchema) }}
      />

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
            Work example
          </div>

          <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            FNQ Lodge
          </h1>

          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-muted-foreground">
            A booking website improvement project focused on clearer page structure, better mobile
            use, and an easier path from browsing to booking.
          </p>

          <div className="mt-10 overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
            <Lightbox
              src={HERO_IMAGE}
              alt="FNQ Lodge improved homepage screenshot"
              className="w-full object-cover"
            />
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <Card className="rounded-3xl p-8 shadow-sm">
              <h2 className="text-2xl font-semibold text-foreground">What needed work</h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                The site needed a clearer story, a cleaner booking path, and a better overall feel
                so visitors could move from looking around to making a booking without getting
                confused.
              </p>

              <div className="mt-6 space-y-3">
                {[
                  "Make the stay feel better presented online",
                  "Improve the booking path and calls to action",
                  "Clean up awkward layout and presentation issues",
                  "Make the site easier to use on mobile",
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
                  "WordPress layout cleanup",
                  "Booking page and call-to-action improvements",
                  "Booking and checkout improvements",
                  "Better mobile presentation and usability",
                  "Clearer structure for people looking to stay or book",
                  "General polish to make the property feel more trustworthy",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-[hsl(var(--brand-warm))]" />
                    <span className="text-sm text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-semibold text-foreground">Before and after</h2>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">
              This is where the difference becomes obvious. The before-and-after view makes it much
              easier to see how the page structure, presentation, and booking path were improved.
            </p>

            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <Card className="overflow-hidden rounded-3xl p-0 shadow-sm">
                <div className="border-b border-border px-6 py-4">
                  <div className="text-sm font-semibold text-foreground">Before</div>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Clunkier presentation, weaker page structure, and a less obvious path to booking.
                  </p>
                </div>
                <div className="p-6">
                  <Lightbox
                    src={BEFORE_IMAGE}
                    alt="FNQ Lodge before improvements screenshot"
                    className="w-full object-cover"
                  />
                </div>
              </Card>

              <Card className="overflow-hidden rounded-3xl p-0 shadow-sm">
                <div className="border-b border-border px-6 py-4">
                  <div className="text-sm font-semibold text-foreground">After</div>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Cleaner structure, clearer presentation, and an easier path into booking.
                  </p>
                </div>
                <div className="p-6">
                  <Lightbox
                    src={AFTER_IMAGE}
                    alt="FNQ Lodge after improvements screenshot"
                    className="w-full object-cover"
                  />
                </div>
              </Card>
            </div>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-semibold text-foreground">Booking and checkout flow</h2>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">
              Improving the booking experience was a big part of this job. The booking and checkout
              steps were cleaned up to feel clearer, more trustworthy, and easier to use across
              desktop and mobile.
            </p>

            <div className="mt-6 grid gap-6 lg:grid-cols-[0.7fr_1.3fr]">
              <Card className="overflow-hidden rounded-3xl p-0 shadow-sm">
                <div className="border-b border-border px-6 py-4">
                  <div className="text-sm font-semibold text-foreground">Mobile booking page</div>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Mobile booking page with guest selection and date picker flow.
                  </p>
                </div>
                <div className="p-6">
                  <Lightbox
                    src={BOOKING_MOBILE_IMAGE}
                    alt="FNQ Lodge mobile booking page screenshot"
                    className="mx-auto max-h-[720px] w-auto object-contain"
                  />
                </div>
              </Card>

              <Card className="overflow-hidden rounded-3xl p-0 shadow-sm">
                <div className="border-b border-border px-6 py-4">
                  <div className="text-sm font-semibold text-foreground">Checkout page</div>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Checkout layout with booking summary, guest details form, and payment section.
                  </p>
                </div>
                <div className="p-6">
                  <Lightbox
                    src={CHECKOUT_DESKTOP_IMAGE}
                    alt="FNQ Lodge checkout page screenshot"
                    className="mx-auto w-full max-w-[950px] object-contain"
                  />
                </div>
              </Card>
            </div>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <Card className="rounded-3xl p-8 shadow-sm">
              <h2 className="text-2xl font-semibold text-foreground">Why this matters</h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                This work example shows that the job is not always about building something from
                scratch. Sometimes the real value is in taking an existing website and making it
                cleaner, easier to use, and better for real customers.
              </p>

              <p className="mt-4 leading-relaxed text-muted-foreground">
                That matters for accommodation, tourism, service businesses, and local operators
                with websites that technically work but still feel messy, dated, or harder to use
                than they should be.
              </p>
            </Card>

            <Card className="rounded-3xl p-8 shadow-sm">
              <h2 className="text-2xl font-semibold text-foreground">Key improvements</h2>
              <div className="mt-6 space-y-3">
                {[
                  "Clearer accommodation presentation",
                  "A stronger booking path",
                  "Better booking and checkout flow",
                  "Better mobile usability",
                  "A cleaner and more trustworthy feel",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-[hsl(var(--brand-accent))]" />
                    <span className="text-sm text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          <Card className="mt-12 rounded-3xl p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-foreground">Simple takeaway</h2>
            <p className="mt-4 max-w-3xl leading-relaxed text-muted-foreground">
              This project shows I can improve booking and accommodation websites so they feel
              clearer, easier to use, and better suited to real customers — not just online stores
              or landing pages.
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
                <Link href="/work/tripple-pluggers">
                  Back to work examples
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