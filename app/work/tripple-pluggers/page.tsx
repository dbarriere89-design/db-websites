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

export default function TripplePluggersPage() {
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
            Tripple Pluggers
          </h1>

          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-muted-foreground">
            A real online store build for an Australian product brand, focused on clearer product
            pages, easier shopping on mobile, and a smoother path to checkout.
          </p>

          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground">
            This was not just a design mockup. It was a live store with real visitors, real
            checkouts, and real sales.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat}
                className="rounded-2xl border border-border bg-background/70 px-4 py-4 text-sm font-medium text-foreground"
              >
                {stat}
              </div>
            ))}
          </div>

          <div className="mt-10">
            <BrowserFrame>
              <img
                src="/work/tripple-pluggers/tp-hero.jpg"
                alt="Tripple Pluggers online store homepage"
                className="w-full object-cover"
              />
            </BrowserFrame>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <Card className="rounded-3xl p-8 shadow-sm">
              <h2 className="text-2xl font-semibold text-foreground">What needed work</h2>

              <p className="mt-4 leading-relaxed text-muted-foreground">
                The store needed to feel stronger, clearer, and easier to use. It had to look more
                trustworthy, work better on mobile, and make it easier for shoppers to go from
                browsing to buying.
              </p>

              <div className="mt-6 space-y-3">
                {[
                  "Make the store look stronger and more polished",
                  "Improve product and variant selection",
                  "Support mobile-first shopping",
                  "Build trust quickly enough to earn early orders",
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
                  "Store layout and structure",
                  "Homepage and collection page improvements",
                  "Cleaner product pages and variant selection",
                  "Better mobile shopping experience",
                  "A smoother path from product page to checkout",
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
            <h2 className="text-2xl font-semibold text-foreground">Storefront and buying flow</h2>

            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">
              These screenshots show the real store experience across desktop and mobile, including
              the product pages and the buying journey.
            </p>

            <div className="mt-6 space-y-6">
              <BrowserFrame>
                <img
                  src="/work/tripple-pluggers/tp-product-desktop.jpg"
                  alt="Tripple Pluggers desktop product page"
                  className="w-full object-contain"
                />
              </BrowserFrame>

              <div className="flex justify-center">
                <div className="w-full max-w-sm">
                  <BrowserFrame>
                    <img
                      src="/work/tripple-pluggers/tp-product-mobile.jpg"
                      alt="Tripple Pluggers mobile product page"
                      className="mx-auto max-h-[720px] object-contain"
                    />
                  </BrowserFrame>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-semibold text-foreground">Real store proof</h2>

            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">
              Real traffic, real orders, and a working checkout show that this was a live store, not
              just a nice-looking concept.
            </p>

            <div className="mt-6 grid gap-6 lg:grid-cols-2">
              <BrowserFrame>
                <Lightbox
                  src="/work/tripple-pluggers/tp-dashboard.jpg"
                  alt="Tripple Pluggers store analytics"
                  className="w-full object-contain"
                />
              </BrowserFrame>

              <BrowserFrame>
                <Lightbox
                  src="/work/tripple-pluggers/tp-orders.jpg"
                  alt="Tripple Pluggers orders list"
                  className="w-full object-contain"
                />
              </BrowserFrame>
            </div>

            <div className="mt-6 flex justify-center">
              <div className="w-full max-w-md">
                <BrowserFrame>
                  <Lightbox
                    src="/work/tripple-pluggers/tp-checkout.jpg"
                    alt="Tripple Pluggers checkout page"
                    className="mx-auto max-h-[720px] object-contain"
                  />
                </BrowserFrame>
              </div>
            </div>
          </div>

          <Card className="mt-12 rounded-3xl p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-foreground">Simple takeaway</h2>

            <p className="mt-4 max-w-3xl leading-relaxed text-muted-foreground">
              This project shows I can build and improve online stores that look better, feel easier
              to use, and are backed by real sales activity — not just polished screenshots.
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
                <Link href="/work/fifo-resume-mate">
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