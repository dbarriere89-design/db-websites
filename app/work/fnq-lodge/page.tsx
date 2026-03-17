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

const stats = [
  "Clearer presentation",
  "Stronger booking flow",
  "Better mobile usability",
  "Cleaner checkout path",
]

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

export default function FNQLodgePage() {
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
                FNQ Lodge
              </h1>

              <p className="mt-5 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg lg:text-xl">
                A booking website improvement project focused on clearer page
                structure, better mobile use, and an easier path from browsing to
                booking.
              </p>

              <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                This project was about making the property feel better presented,
                more trustworthy, and easier for guests to move through when they were
                ready to book.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {stats.map((stat, index) => (
                  <div
                    key={stat}
                    className={`rounded-2xl border px-4 py-4 text-sm font-semibold text-foreground shadow-md backdrop-blur-sm ${
                      index % 2 === 0
                        ? "border-[hsl(var(--brand-accent)/0.35)] bg-[hsl(var(--brand-accent)/0.12)]"
                        : "border-[hsl(var(--brand-warm)/0.35)] bg-[hsl(var(--brand-warm)/0.14)]"
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
              <Lightbox
                src={HERO_IMAGE}
                alt="FNQ Lodge improved homepage screenshot"
                className="w-full object-cover"
              />
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
                    The site needed a clearer story, cleaner structure, and a better booking path
                  </h2>

                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                    Visitors needed to understand the property more quickly, feel more
                    confident in the experience, and move from browsing to booking
                    without getting confused by awkward layout or clunky flow.
                  </p>

                  <div className="mt-6 space-y-4">
                    {[
                      "Make the stay feel better presented online",
                      "Improve the booking path and calls to action",
                      "Clean up awkward layout and presentation issues",
                      "Make the site easier to use on mobile",
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
                    Practical improvements across layout, booking flow, mobile use, and trust
                  </h2>

                  <div className="mt-6 space-y-4">
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
              eyebrow="Before and after"
              title="The difference becomes obvious when you compare the old version to the improved one"
              text="This side-by-side view makes it much easier to see how the structure, presentation, and booking path were improved."
            />

            <div className="grid gap-6 md:grid-cols-2">
              <Card className="premium-card overflow-hidden rounded-3xl border border-[hsl(var(--brand-accent)/0.20)] bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(10,160,185,0.04))] p-0 shadow-sm">
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

              <Card className="premium-card overflow-hidden rounded-3xl border border-[hsl(var(--brand-warm)/0.22)] bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(245,180,70,0.05))] p-0 shadow-sm">
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
        </section>

        <section className="relative border-y border-border bg-[linear-gradient(to_bottom,rgba(245,180,70,0.045),rgba(255,255,255,0.84))]">
          <div className="container mx-auto px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
            <div className="mx-auto max-w-6xl">
              <SectionIntro
                eyebrow="Booking and checkout flow"
                title="Improving the booking experience was a big part of this project"
                text="The booking and checkout steps were cleaned up to feel clearer, more trustworthy, and easier to use across desktop and mobile."
              />

              <div className="grid gap-6 lg:grid-cols-[0.7fr_1.3fr]">
                <Card className="premium-card overflow-hidden rounded-3xl border border-[hsl(var(--brand-accent)/0.20)] bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(10,160,185,0.04))] p-0 shadow-sm">
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

                <Card className="premium-card overflow-hidden rounded-3xl border border-[hsl(var(--brand-warm)/0.22)] bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(245,180,70,0.05))] p-0 shadow-sm">
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
          </div>
        </section>

        <section className="container mx-auto px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-6xl">
            <SectionIntro
              eyebrow="Why this matters"
              title="Not every project needs a full rebuild to create real value"
              text="Sometimes the strongest result comes from taking an existing website and making it cleaner, easier to use, and more effective for real customers."
            />

            <div className="grid gap-6 md:grid-cols-2">
              <Card className="premium-card rounded-3xl border border-[hsl(var(--brand-accent)/0.20)] bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(10,160,185,0.04))] p-6 shadow-sm sm:p-8">
                <h3 className="text-xl font-bold tracking-tight text-foreground">
                  Why this matters
                </h3>

                <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  This work example shows that the job is not always about building
                  something from scratch. Sometimes the real value is in improving what
                  already exists and making it work better for actual customers.
                </p>

                <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  That matters for accommodation, tourism, service businesses, and
                  local operators with websites that technically work but still feel
                  messy, dated, or harder to use than they should be.
                </p>
              </Card>

              <Card className="premium-card rounded-3xl border border-[hsl(var(--brand-warm)/0.22)] bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(245,180,70,0.05))] p-6 shadow-sm sm:p-8">
                <h3 className="text-xl font-bold tracking-tight text-foreground">
                  Key improvements
                </h3>

                <div className="mt-6 space-y-4">
                  {[
                    "Clearer accommodation presentation",
                    "A stronger booking path",
                    "Better booking and checkout flow",
                    "Better mobile usability",
                    "A cleaner and more trustworthy feel",
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

        <section className="container mx-auto px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-5xl">
            <Card className="premium-card relative overflow-hidden rounded-[32px] border border-border bg-[linear-gradient(135deg,rgba(10,160,185,0.08),rgba(255,255,255,0.96),rgba(245,180,70,0.10))] p-6 shadow-[0_18px_50px_rgba(0,0,0,0.08)] sm:p-8 lg:p-10">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(10,160,185,0.10),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(245,180,70,0.12),transparent_32%)]" />

              <div className="relative z-[1]">
                <div className="mb-4 inline-flex rounded-full border border-border bg-background/75 px-3 py-1 text-xs font-medium text-muted-foreground">
                  Simple takeaway
                </div>

                <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                  This project shows I can improve booking and accommodation websites so they feel clearer and easier to use
                </h2>

                <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                  The point is not just making the site look nicer. The point is making
                  it easier for real guests to understand the property, trust the
                  process, and move more confidently toward booking.
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
                    <Link href="/work/tripple-pluggers">
                      Back to work examples
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