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

const HERO_IMAGE = "/work/aircon/hero.jpg"
const HYDRO_IMAGE = "/work/aircon/hydro.jpg"
const INSTALL_IMAGE = "/work/aircon/install.jpg"
const HOUSE_IMAGE = "/work/aircon/house.jpg"
const CRANE_IMAGE = "/work/aircon/crane.jpg"

const stats = [
  "Built from scratch",
  "Clearer service flow",
  "Better mobile experience",
  "Stronger enquiry path",
]

export const metadata: Metadata = {
  title: "Air Conditioning Business | Work example",
  description:
    "A work example from DB Websites showing a clean service website build for a local air conditioning business, with clearer structure, stronger trust, and a better enquiry flow.",
  alternates: {
    canonical: "/work/aircon",
  },
  openGraph: {
    title: "Air Conditioning Business | Work example | DB Websites",
    description:
      "A work example from DB Websites showing a clean service website build for a local air conditioning business, with clearer structure, stronger trust, and a better enquiry flow.",
    url: "https://dbwebsites.au/work/aircon",
    siteName: "DB Websites",
    images: [
      {
        url: "https://dbwebsites.au/work/aircon/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Air conditioning business work example by DB Websites",
      },
    ],
    locale: "en_AU",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Air Conditioning Business | Work example | DB Websites",
    description:
      "A work example from DB Websites showing a clean service website build for a local air conditioning business, with clearer structure, stronger trust, and a better enquiry flow.",
    images: ["https://dbwebsites.au/work/aircon/hero.jpg"],
  },
}

const workExampleSchema = {
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  name: "Air Conditioning Business",
  url: "https://dbwebsites.au/work/aircon",
  description:
    "A work example from DB Websites showing a clean service website build for a local air conditioning business, with clearer structure, stronger trust, and a better enquiry flow.",
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
    "https://dbwebsites.au/work/aircon/hero.jpg",
    "https://dbwebsites.au/work/aircon/hydro.jpg",
    "https://dbwebsites.au/work/aircon/install.jpg",
    "https://dbwebsites.au/work/aircon/house.jpg",
    "https://dbwebsites.au/work/aircon/crane.jpg",
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

export default function AirconPage() {
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
                Air Conditioning Business
              </h1>

              <p className="mt-5 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg lg:text-xl">
                A work example showing a clean service website build designed to
                create a stronger first impression, explain services clearly, and
                make it easier for customers to enquire.
              </p>

              <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                This project focused on building the site properly from scratch with
                clearer structure, better mobile usability, and a simpler path from
                first visit to contact.
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
                  alt="Air conditioning business website screenshot"
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
                    The site needed to build trust quickly and explain services clearly
                  </h2>

                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                    For a local air conditioning business, the website needed to feel
                    more professional, make the offer easy to understand, and create
                    a smoother path for customers to get in touch without friction.
                  </p>

                  <div className="mt-6 space-y-4">
                    {[
                      "Create a stronger first impression",
                      "Make services easier to understand",
                      "Improve the mobile experience",
                      "Make the enquiry path more obvious",
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
                    Practical improvements across layout, clarity, mobile use, and enquiry flow
                  </h2>

                  <div className="mt-6 space-y-4">
                    {[
                      "A clean, modern build from scratch",
                      "Clearer service structure and page flow",
                      "Better spacing and readability on mobile",
                      "Stronger trust through cleaner presentation",
                      "A simpler contact and enquiry path",
                      "A website that better reflects the business",
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
              title="This project shows how a service business website can feel clearer, stronger, and more trustworthy"
              text="This is not just about surface polish. It is about helping customers understand what the business does, feel more confident in it, and take the next step without confusion."
            />

            <div className="grid gap-6 md:grid-cols-2">
              <Card className="premium-card rounded-3xl border border-[hsl(var(--brand-accent)/0.20)] bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(10,160,185,0.04))] p-6 shadow-sm sm:p-8">
                <h3 className="text-xl font-bold tracking-tight text-foreground">
                  Built properly from the ground up
                </h3>

                <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  This was built from scratch rather than patched together. That made
                  it possible to structure the site properly, keep the messaging clean,
                  and make the customer journey easier to follow from the start.
                </p>

                <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  For local service businesses, that kind of clarity matters because
                  most customers are making a fast decision about whether to trust the
                  business and get in touch.
                </p>
              </Card>

              <Card className="premium-card rounded-3xl border border-[hsl(var(--brand-warm)/0.22)] bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(245,180,70,0.05))] p-6 shadow-sm sm:p-8">
                <h3 className="text-xl font-bold tracking-tight text-foreground">
                  Key improvements
                </h3>

                <div className="mt-6 space-y-4">
                  {[
                    "Stronger first impression",
                    "Clearer service breakdown",
                    "Better mobile usability",
                    "Cleaner enquiry path",
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
                eyebrow="Real work"
                title="Real work, real jobs"
                text="These images help show the kind of work the business actually does, from everyday installs and servicing through to larger commercial jobs."
              />

              <div className="grid gap-6 md:grid-cols-2">
                <div className="overflow-hidden rounded-[28px] border border-border bg-[linear-gradient(180deg,rgba(255,255,255,1),rgba(10,160,185,0.03))] shadow-[0_14px_40px_rgba(0,0,0,0.08)]">
                  <BrowserFrame>
                    <Lightbox
                      src={HYDRO_IMAGE}
                      alt="Aircon hydro cleaning service"
                      className="mx-auto max-h-[600px] w-full object-cover"
                    />
                  </BrowserFrame>
                </div>

                <div className="overflow-hidden rounded-[28px] border border-border bg-[linear-gradient(180deg,rgba(255,255,255,1),rgba(245,180,70,0.035))] shadow-[0_14px_40px_rgba(0,0,0,0.08)]">
                  <BrowserFrame>
                    <img
                      src={INSTALL_IMAGE}
                      alt="Air conditioning installation units"
                      className="mx-auto max-h-[600px] w-full object-cover"
                    />
                  </BrowserFrame>
                </div>
              </div>

              <div className="mt-6 grid gap-6 md:grid-cols-2">
                <div className="overflow-hidden rounded-[28px] border border-border bg-[linear-gradient(180deg,rgba(255,255,255,1),rgba(10,160,185,0.03))] shadow-[0_14px_40px_rgba(0,0,0,0.08)]">
                  <BrowserFrame>
                    <img
                      src={HOUSE_IMAGE}
                      alt="Residential air conditioning install"
                      className="mx-auto max-h-[600px] w-full object-cover"
                    />
                  </BrowserFrame>
                </div>

                <div className="overflow-hidden rounded-[28px] border border-border bg-[linear-gradient(180deg,rgba(255,255,255,1),rgba(245,180,70,0.035))] shadow-[0_14px_40px_rgba(0,0,0,0.08)]">
                  <BrowserFrame>
                    <img
                      src={CRANE_IMAGE}
                      alt="Commercial air conditioning crane install"
                      className="mx-auto max-h-[600px] w-full object-cover"
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
                  This project shows I can build service websites that look stronger, feel clearer, and make it easier for customers to enquire
                </h2>

                <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                  The goal was not just to make the site look cleaner. The goal was to
                  build something that better represents the business, supports trust,
                  and gives customers a clearer path to take action.
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