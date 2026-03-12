import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowLeft, ArrowRight, Check, Mail, MessageCircle } from "lucide-react"
import BrowserFrame from "@/components/browser-frame"
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

const HERO_IMAGE = "/work/fifo-resume-mate-hero.jpg"
const PRICING_IMAGE = "/work/fifo-resume-mate-pricing.jpg"
const BUILDER_IMAGE = "/work/fifo-resume-mate-builder.jpg"
const CHECKOUT_IMAGE = "/work/fifo-resume-mate-checkout.jpg"

export const metadata: Metadata = {
  title: "FIFO Resume Mate | Work example",
  description:
    "A work example from DB Websites showing a clearer landing page, pricing section, builder flow, and checkout path for FIFO Resume Mate.",
  alternates: {
    canonical: "/work/fifo-resume-mate",
  },
  openGraph: {
    title: "FIFO Resume Mate | Work example | DB Websites",
    description:
      "A work example from DB Websites showing a clearer landing page, pricing section, builder flow, and checkout path for FIFO Resume Mate.",
    url: "https://dbwebsites.au/work/fifo-resume-mate",
    siteName: "DB Websites",
    images: [
      {
        url: "https://dbwebsites.au/work/fifo-resume-mate-hero.jpg",
        width: 1200,
        height: 630,
        alt: "FIFO Resume Mate work example by DB Websites",
      },
    ],
    locale: "en_AU",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "FIFO Resume Mate | Work example | DB Websites",
    description:
      "A work example from DB Websites showing a clearer landing page, pricing section, builder flow, and checkout path for FIFO Resume Mate.",
    images: ["https://dbwebsites.au/work/fifo-resume-mate-hero.jpg"],
  },
}

const workExampleSchema = {
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  name: "FIFO Resume Mate",
  url: "https://dbwebsites.au/work/fifo-resume-mate",
  description:
    "A work example from DB Websites showing a clearer landing page, pricing section, builder flow, and checkout path for FIFO Resume Mate.",
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
    "https://dbwebsites.au/work/fifo-resume-mate-hero.jpg",
    "https://dbwebsites.au/work/fifo-resume-mate-pricing.jpg",
    "https://dbwebsites.au/work/fifo-resume-mate-builder.jpg",
    "https://dbwebsites.au/work/fifo-resume-mate-checkout.jpg",
  ],
}

export default function FIFOResumeMatePage() {
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
            FIFO Resume Mate
          </h1>

          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-muted-foreground">
            A work example showing a cleaner landing page, clearer pricing, a better step-by-step
            flow, and an easier path from first visit to checkout.
          </p>

          <div className="mt-10">
            <BrowserFrame>
              <img
                src={HERO_IMAGE}
                alt="FIFO Resume Mate landing page screenshot"
                className="w-full object-cover"
              />
            </BrowserFrame>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <Card className="rounded-3xl p-8 shadow-sm">
              <h2 className="text-2xl font-semibold text-foreground">What needed work</h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                The page needed to explain the offer quickly and clearly. People had to understand
                what was included, which option suited them best, and what to do next without
                getting lost or overwhelmed.
              </p>

              <div className="mt-6 space-y-3">
                {[
                  "Explain the offer more clearly",
                  "Make the page easier to follow",
                  "Help people choose the right option",
                  "Create a smoother path to checkout",
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
                  "Landing page layout and section flow",
                  "Clearer offer and pricing structure",
                  "Stronger calls to action",
                  "A smoother builder experience",
                  "A cleaner path from page to checkout",
                  "Making the whole process easier to understand",
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
              <h2 className="text-2xl font-semibold text-foreground">Why this matters</h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                This work example is not just about making the page look better. It shows how a
                website can be made easier to understand, easier to use, and easier for people to
                take the next step on.
              </p>

              <p className="mt-4 leading-relaxed text-muted-foreground">
                That matters for businesses selling services, digital products, or offers that need
                a clear page and a smooth customer journey.
              </p>
            </Card>

            <Card className="rounded-3xl p-8 shadow-sm">
              <h2 className="text-2xl font-semibold text-foreground">Key improvements</h2>
              <div className="mt-6 space-y-3">
                {[
                  "Clearer offer explanation",
                  "Better pricing guidance",
                  "Stronger page structure",
                  "A smoother path to payment",
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
            <h2 className="text-2xl font-semibold text-foreground">Page walkthrough</h2>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">
              These screenshots show the main parts of the website flow: the landing page, the
              pricing section, the builder step, and the checkout page.
            </p>

            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <BrowserFrame>
                <Lightbox
                  src={PRICING_IMAGE}
                  alt="FIFO Resume Mate pricing section screenshot"
                  className="mx-auto max-h-[600px] w-auto object-contain"
                />
              </BrowserFrame>

              <BrowserFrame>
                <img
                  src={BUILDER_IMAGE}
                  alt="FIFO Resume Mate builder screenshot"
                  className="mx-auto max-h-[600px] w-auto object-contain"
                />
              </BrowserFrame>
            </div>

            <div className="mt-6">
              <BrowserFrame>
                <img
                  src={CHECKOUT_IMAGE}
                  alt="FIFO Resume Mate checkout screenshot"
                  className="w-full object-contain"
                />
              </BrowserFrame>
            </div>
          </div>

          <Card className="mt-12 rounded-3xl p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-foreground">Simple takeaway</h2>
            <p className="mt-4 max-w-3xl leading-relaxed text-muted-foreground">
              This project shows I can build pages that are clear, practical, and easier for people
              to move through — not just something that looks polished on the surface.
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
                  Next work example
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