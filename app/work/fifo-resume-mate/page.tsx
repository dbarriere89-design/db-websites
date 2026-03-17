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

const stats = [
  "Clearer offer",
  "Better pricing flow",
  "Smoother builder path",
  "Cleaner checkout journey",
]

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

function SectionIntro(props: {
  eyebrow?: string
  title: string
  text?: string
}) {
  return (
    <div className="mb-8 sm:mb-10">
      {props.eyebrow ? (
        <div className="mb-3 inline-flex rounded-full border border-border bg-background/80 px-3 py-1 text-xs font-medium text-muted-foreground shadow-sm">
          {props.eyebrow}
        </div>
      ) : null}

      <h2 className="text-balance text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
        {props.title}
      </h2>

      {props.text ? (
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
          {props.text}
        </p>
      ) : null}
    </div>
  )
}

export default function FIFOResumeMatePage() {
  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(workExampleSchema) }}
      />

      <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="flex items-center gap-2 text-base font-semibold tracking-tight text-foreground sm:text-lg"
          >
            <img
              src="/web-app-manifest-512x512.png"
              alt="DB Websites logo"
              className="h-8 w-8 rounded-full shadow-sm"
            />
            DB Websites
          </Link>

          <Button asChild variant="outline" className="shadow-sm">
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to home
            </Link>
          </Button>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden premium-ambient border-b border-border bg-[linear-gradient(180deg,oklch(0.94_0.015_205),oklch(0.98_0.003_220))]">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.92),transparent_40%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(255,214,153,0.18),transparent_32%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.45),transparent_48%)]" />
          </div>

          <div className="container relative z-[2] mx-auto px-4 py-14 sm:px-6 sm:py-18 lg:px-8 lg:py-24">
            <div className="mx-auto max-w-5xl">
              <div className="mb-4 inline-flex rounded-full border border-border bg-background/80 px-3 py-1 text-xs font-medium text-muted-foreground shadow-sm">
                Work example
              </div>

              <h1 className="max-w-4xl text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                FIFO Resume Mate
              </h1>

              <p className="mt-5 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg lg:text-xl">
                A work example showing a cleaner landing page, clearer pricing, a
                better step-by-step flow, and an easier path from first visit to
                checkout.
              </p>

              <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                This project focused on making the offer easier to understand, easier
                to compare, and easier for people to move through without confusion.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {stats.map((stat, index) => (
                  <div
                    key={stat}
                    className={`rounded-2xl border px-4 py-4 text-sm font-semibold text-foreground shadow-md backdrop-blur-sm ${
                      index % 2 === 0
  ? "border-[hsl(var(--brand-accent)/0.30)] bg-[hsl(var(--brand-accent)/0.10)]"
  : "border-border bg-white/90"
                    }`}
                  >
                    {stat}
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild className="shadow-sm">
                  <Link href={`mailto:${EMAIL}?subject=${EMAIL_SUBJECT}&body=${EMAIL_BODY}`}>
                    <Mail className="mr-2 h-4 w-4" />
                    Start a project
                  </Link>
                </Button>

                <Button asChild variant="outline" className="shadow-sm bg-background/70">
                  <Link
                    href={FACEBOOK_MESSENGER_URL}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Message me
                  </Link>
                </Button>
              </div>

              <div className="mt-10 h-px w-full bg-gradient-to-r from-transparent via-border to-transparent" />
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="mx-auto max-w-6xl">
            <div className="overflow-hidden rounded-[28px] border border-border bg-card shadow-[0_18px_50px_rgba(0,0,0,0.08)]">
              <BrowserFrame>
                <img
                  src={HERO_IMAGE}
                  alt="FIFO Resume Mate landing page screenshot"
                  className="w-full object-cover"
                />
              </BrowserFrame>
            </div>
          </div>
        </section>

        <section className="relative border-y border-border bg-[linear-gradient(to_bottom,rgba(10,160,185,0.035),rgba(255,255,255,0.7))]">
          <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
            <div className="mx-auto max-w-6xl">
              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="premium-card rounded-3xl border border-[hsl(var(--brand-accent)/0.22)] bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(10,160,185,0.05))] p-6 shadow-sm sm:p-8">
                  <div className="mb-4 inline-flex rounded-full border border-[hsl(var(--brand-accent)/0.18)] bg-[hsl(var(--brand-accent)/0.08)] px-3 py-1 text-xs font-medium text-foreground/80">
                    What needed work
                  </div>

                  <h2 className="text-2xl font-bold tracking-tight text-foreground">
                    The page needed to explain the offer quickly and clearly
                  </h2>

                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                    People had to understand what was included, which option suited
                    them best, and what to do next without getting lost, hesitating,
                    or feeling overwhelmed by the process.
                  </p>

                  <div className="mt-6 space-y-4">
                    {[
                      "Explain the offer more clearly",
                      "Make the page easier to follow",
                      "Help people choose the right option",
                      "Create a smoother path to checkout",
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-3">
                        <Check className="mt-0.5 h-5 w-5 shrink-0 text-[hsl(var(--brand-accent))]" />
                        <span className="text-sm leading-relaxed text-foreground sm:text-base">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </Card>

                <Card className="premium-card rounded-3xl border border-[hsl(var(--brand-warm)/0.24)] bg-[linear-gradient(180deg,rgba(255,255,255,0.94),rgba(245,180,70,0.06))] p-6 shadow-sm sm:p-8">
                  <div className="mb-4 inline-flex rounded-full border border-[hsl(var(--brand-warm)/0.22)] bg-[hsl(var(--brand-warm)/0.10)] px-3 py-1 text-xs font-medium text-foreground/80">
                    What I worked on
                  </div>

                  <h2 className="text-2xl font-bold tracking-tight text-foreground">
                    Practical improvements across structure, pricing, flow, and action
                  </h2>

                  <div className="mt-6 space-y-4">
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
                        <span className="text-sm leading-relaxed text-foreground sm:text-base">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-6xl">
            <SectionIntro
              eyebrow="Why this matters"
              title="This work is about clarity, confidence, and helping people take the next step"
              text="This is not just about making the page look cleaner. It is about making the offer easier to understand, easier to compare, and easier to move through for people who are already thinking about buying."
            />

            <div className="grid gap-6 md:grid-cols-2">
              <Card className="premium-card rounded-3xl border border-[hsl(var(--brand-accent)/0.20)] bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(10,160,185,0.04))] p-6 shadow-sm sm:p-8">
                <h3 className="text-xl font-bold tracking-tight text-foreground">
                  Why this matters
                </h3>

                <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  This work example shows how a website can be made easier to
                  understand, easier to use, and easier for people to act on without
                  feeling lost in the process.
                </p>

                <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  That matters for businesses selling services, digital products, or
                  offers that need a clear page and a smooth customer journey.
                </p>
              </Card>

              <Card className="premium-card rounded-3xl border border-[hsl(var(--brand-warm)/0.22)] bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(245,180,70,0.05))] p-6 shadow-sm sm:p-8">
                <h3 className="text-xl font-bold tracking-tight text-foreground">
                  Key improvements
                </h3>

                <div className="mt-6 space-y-4">
                  {[
                    "Clearer offer explanation",
                    "Better pricing guidance",
                    "Stronger page structure",
                    "A smoother path to payment",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-[hsl(var(--brand-accent))]" />
                      <span className="text-sm leading-relaxed text-foreground sm:text-base">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </section>

        <section className="relative border-y border-border bg-[linear-gradient(to_bottom,rgba(245,180,70,0.045),rgba(255,255,255,0.84))]">
          <div className="container mx-auto px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
            <div className="mx-auto max-w-6xl">
              <SectionIntro
                eyebrow="Page walkthrough"
                title="Key parts of the website flow from pricing to builder to checkout"
                text="These screenshots show the main parts of the page journey, including how the pricing is presented, how the builder works, and how the checkout path is handled."
              />

              <div className="grid gap-6 md:grid-cols-2">
                <div className="overflow-hidden rounded-[28px] border border-border bg-[linear-gradient(180deg,rgba(255,255,255,1),rgba(10,160,185,0.03))] shadow-[0_14px_40px_rgba(0,0,0,0.08)]">
                  <BrowserFrame>
                    <Lightbox
                      src={PRICING_IMAGE}
                      alt="FIFO Resume Mate pricing section screenshot"
                      className="mx-auto max-h-[600px] w-auto object-contain"
                    />
                  </BrowserFrame>
                </div>

                <div className="overflow-hidden rounded-[28px] border border-border bg-[linear-gradient(180deg,rgba(255,255,255,1),rgba(245,180,70,0.035))] shadow-[0_14px_40px_rgba(0,0,0,0.08)]">
                  <BrowserFrame>
                    <img
                      src={BUILDER_IMAGE}
                      alt="FIFO Resume Mate builder screenshot"
                      className="mx-auto max-h-[600px] w-auto object-contain"
                    />
                  </BrowserFrame>
                </div>
              </div>

              <div className="mt-6">
                <div className="overflow-hidden rounded-[28px] border border-border bg-[linear-gradient(180deg,rgba(255,255,255,1),rgba(10,160,185,0.03))] shadow-[0_14px_40px_rgba(0,0,0,0.08)]">
                  <BrowserFrame>
                    <img
                      src={CHECKOUT_IMAGE}
                      alt="FIFO Resume Mate checkout screenshot"
                      className="w-full object-contain"
                    />
                  </BrowserFrame>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-5xl">
            <Card className="premium-card relative overflow-hidden rounded-[32px] border border-border bg-[linear-gradient(135deg,rgba(10,160,185,0.08),rgba(255,255,255,0.96),rgba(245,180,70,0.10))] p-6 shadow-[0_18px_50px_rgba(0,0,0,0.08)] sm:p-8 lg:p-10">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(10,160,185,0.10),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(245,180,70,0.12),transparent_32%)]" />

              <div className="relative z-[1]">
                <div className="mb-4 inline-flex rounded-full border border-border bg-background/75 px-3 py-1 text-xs font-medium text-muted-foreground">
                  Simple takeaway
                </div>

                <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                  This project shows I can build pages that are clear, practical, and easier for people to move through
                </h2>

                <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                  The point is not just surface polish. The point is creating a page
                  that helps people understand the offer, trust the process, and move
                  more smoothly toward the next step.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <Button asChild className="shadow-sm">
                    <Link href={`mailto:${EMAIL}?subject=${EMAIL_SUBJECT}&body=${EMAIL_BODY}`}>
                      <Mail className="mr-2 h-4 w-4" />
                      Start a project
                    </Link>
                  </Button>

                  <Button asChild variant="outline" className="shadow-sm bg-background/70">
                    <Link
                      href={FACEBOOK_MESSENGER_URL}
                      target="_blank"
                      rel="noreferrer noopener"
                    >
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
              </div>
            </Card>
          </div>
        </section>
      </main>
    </div>
  )
}