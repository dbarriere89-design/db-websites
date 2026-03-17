import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowLeft, ArrowRight, Check, Mail, MessageCircle } from "lucide-react"
import Lightbox from "@/components/lightbox"
import BrowserFrame from "@/components/browser-frame"

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

const stats = ["925 visitors", "15 orders", "$645 revenue", "1.62% conversion"]

export const metadata: Metadata = {
  title: "Tripple Pluggers | Work example",
  description:
    "A work example from DB Websites showing a real Shopify store build for Tripple Pluggers, with better product pages, mobile shopping, and real sales proof.",
  alternates: {
    canonical: "/work/tripple-pluggers",
  },
  openGraph: {
    title: "Tripple Pluggers | Work example | DB Websites",
    description:
      "A work example from DB Websites showing a real Shopify store build for Tripple Pluggers, with better product pages, mobile shopping, and real sales proof.",
    url: "https://dbwebsites.au/work/tripple-pluggers",
    siteName: "DB Websites",
    images: [
      {
        url: "https://dbwebsites.au/work/tripple-pluggers/tp-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Tripple Pluggers work example by DB Websites",
      },
    ],
    locale: "en_AU",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tripple Pluggers | Work example | DB Websites",
    description:
      "A work example from DB Websites showing a real Shopify store build for Tripple Pluggers, with better product pages, mobile shopping, and real sales proof.",
    images: ["https://dbwebsites.au/work/tripple-pluggers/tp-hero.jpg"],
  },
}

const workExampleSchema = {
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  name: "Tripple Pluggers",
  url: "https://dbwebsites.au/work/tripple-pluggers",
  description:
    "A work example from DB Websites showing a real Shopify store build for Tripple Pluggers, with better product pages, mobile shopping, and real sales proof.",
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
    "https://dbwebsites.au/work/tripple-pluggers/tp-hero.jpg",
    "https://dbwebsites.au/work/tripple-pluggers/tp-product-desktop.jpg",
    "https://dbwebsites.au/work/tripple-pluggers/tp-product-mobile.jpg",
    "https://dbwebsites.au/work/tripple-pluggers/tp-dashboard.jpg",
    "https://dbwebsites.au/work/tripple-pluggers/tp-orders.jpg",
    "https://dbwebsites.au/work/tripple-pluggers/tp-checkout.jpg",
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

export default function TripplePluggersPage() {
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
                Tripple Pluggers
              </h1>

              <p className="mt-5 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg lg:text-xl">
                A real online store build for an Australian product brand, focused on
                clearer product pages, easier shopping on mobile, and a smoother path
                to checkout.
              </p>

              <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                This was a live store with real visitors, real orders, and real
                checkout activity — not just a polished mockup.
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
              <BrowserFrame>
                <img
                  src="/work/tripple-pluggers/tp-hero.jpg"
                  alt="Tripple Pluggers online store homepage"
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
                    The store needed to feel clearer, stronger, and easier to buy from
                  </h2>

                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                    It had to look more trustworthy, work better on mobile, and make it
                    easier for shoppers to move from browsing to buying without getting
                    lost or second-guessing the store.
                  </p>

                  <div className="mt-6 space-y-4">
                    {[
                      "Make the store look stronger and more polished",
                      "Improve product and variant selection",
                      "Support mobile-first shopping",
                      "Build trust quickly enough to earn early orders",
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
                    Practical improvements across layout, product pages, and buying flow
                  </h2>

                  <div className="mt-6 space-y-4">
                    {[
                      "Store layout and structure",
                      "Homepage and collection page improvements",
                      "Cleaner product pages and variant selection",
                      "Better mobile shopping experience",
                      "A smoother path from product page to checkout",
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
              eyebrow="Storefront and buying flow"
              title="Real product page experience across desktop and mobile"
              text="These screenshots show the actual storefront and buying journey, including how the store looked on desktop and how it translated to mobile."
            />

            <div className="space-y-8">
              <div className="overflow-hidden rounded-[28px] border border-border bg-[linear-gradient(180deg,rgba(255,255,255,1),rgba(10,160,185,0.03))] shadow-[0_14px_40px_rgba(0,0,0,0.08)]">
                <BrowserFrame>
                  <img
                    src="/work/tripple-pluggers/tp-product-desktop.jpg"
                    alt="Tripple Pluggers desktop product page"
                    className="w-full object-contain"
                  />
                </BrowserFrame>
              </div>

              <div className="flex justify-center">
                <div className="w-full max-w-md">
                  <div className="overflow-hidden rounded-[28px] border border-border bg-[linear-gradient(180deg,rgba(255,255,255,1),rgba(245,180,70,0.035))] shadow-[0_14px_40px_rgba(0,0,0,0.08)]">
                    <BrowserFrame>
                      <img
                        src="/work/tripple-pluggers/tp-product-mobile.jpg"
                        alt="Tripple Pluggers mobile product page"
                        className="mx-auto w-full object-contain"
                      />
                    </BrowserFrame>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative border-y border-border bg-[linear-gradient(to_bottom,rgba(245,180,70,0.045),rgba(255,255,255,0.84))]">
          <div className="container mx-auto px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
            <div className="mx-auto max-w-6xl">
              <SectionIntro
                eyebrow="Real store proof"
                title="Real traffic, real orders, real checkout activity"
                text="This was a working store, not a concept page. The screenshots below show real analytics, orders, and a live checkout flow."
              />

              <div className="grid gap-6 lg:grid-cols-2">
                <div className="overflow-hidden rounded-[28px] border border-border bg-[linear-gradient(180deg,rgba(255,255,255,1),rgba(10,160,185,0.03))] shadow-[0_14px_40px_rgba(0,0,0,0.08)]">
                  <BrowserFrame>
                    <Lightbox
                      src="/work/tripple-pluggers/tp-dashboard.jpg"
                      alt="Tripple Pluggers store analytics"
                      className="w-full object-contain"
                    />
                  </BrowserFrame>
                </div>

                <div className="overflow-hidden rounded-[28px] border border-border bg-[linear-gradient(180deg,rgba(255,255,255,1),rgba(245,180,70,0.04))] shadow-[0_14px_40px_rgba(0,0,0,0.08)]">
                  <BrowserFrame>
                    <Lightbox
                      src="/work/tripple-pluggers/tp-orders.jpg"
                      alt="Tripple Pluggers orders list"
                      className="w-full object-contain"
                    />
                  </BrowserFrame>
                </div>
              </div>

              <div className="mt-6 flex justify-center">
                <div className="w-full max-w-md">
                  <div className="overflow-hidden rounded-[28px] border border-border bg-[linear-gradient(180deg,rgba(255,255,255,1),rgba(10,160,185,0.03))] shadow-[0_14px_40px_rgba(0,0,0,0.08)]">
                    <BrowserFrame>
                      <Lightbox
                        src="/work/tripple-pluggers/tp-checkout.jpg"
                        alt="Tripple Pluggers checkout page"
                        className="mx-auto w-full object-contain"
                      />
                    </BrowserFrame>
                  </div>
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
                  This project proves I can build stores that look better and actually function in the real world
                </h2>

                <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                  The point is not just that the store looked cleaner. The point is that it
                  became easier to use, easier to trust, and capable of generating real
                  sales activity from a live audience.
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
                    <Link href="/work/fifo-resume-mate">
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