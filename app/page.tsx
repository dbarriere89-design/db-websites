"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  ArrowRight,
  Check,
  Facebook,
  Mail,
  MessageCircle,
  MonitorSmartphone,
  ShoppingBag,
  Sparkles,
  Wrench,
} from "lucide-react"

const FACEBOOK_MESSENGER_URL = "https://m.me/desbarriere"
const EMAIL = "desbarriere.au@gmail.com"
const UPWORK_URL = "https://www.upwork.com/freelancers/~01bf146bd0e95935ec"

const EMAIL_SUBJECT = encodeURIComponent("Project enquiry (DB Websites)")
const EMAIL_BODY = encodeURIComponent(
  [
    "Hey Des,",
    "",
    "Keen to chat about a project.",
    "",
    "Business name:",
    "Industry:",
    "What do you need help with? (new website / online store / website fixes):",
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

const VISUALS_IMAGE = "/visuals-section.jpg"

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "DB Websites",
  url: "https://dbwebsites.au",
  description:
    "Simple, modern websites for small businesses in Cairns, Innisfail and Far North Queensland. Shopify stores, website refreshes and practical fixes built to help turn visitors into enquiries.",
  areaServed: [
    "Cairns",
    "Innisfail",
    "Far North Queensland",
    "Cassowary Coast",
    "Atherton Tablelands",
  ],
  address: {
    "@type": "PostalAddress",
    addressRegion: "QLD",
    addressCountry: "AU",
  },
  sameAs: [UPWORK_URL],
}

type WorkExample = {
  title: string
  category: string
  label: string
  summary: string
  image: string
  imageAlt: string
  stats?: string[]
  bullets: string[]
  href: string
  cta: string
}

const WORK_EXAMPLES: WorkExample[] = [
  {
    title: "Air Conditioning Business",
    category: "Service website",
    label: "Local tradie website rebuild",
    summary:
      "A clean, modern service website designed to build trust faster, clearly explain services, and make it easy for customers to enquire or book without friction.",
    image: "/work/aircon/hero.jpg",
    imageAlt: "Air conditioning business website screenshot",
    bullets: [
      "Stronger first impression and cleaner layout",
      "Clear service breakdown for easier understanding",
      "Improved mobile experience for on-the-go customers",
      "Simplified enquiry flow to increase leads",
    ],
    href: "/work/aircon",
    cta: "View project",
  },
  {
    title: "Tripple Pluggers",
    category: "Online store",
    label: "Shopify store improvements",
    summary:
      "A stronger ecommerce experience with cleaner product pages, better mobile shopping, and a smoother path from product view to checkout.",
    image: "/work/tripple-pluggers/tp-hero.jpg",
    imageAlt: "Tripple Pluggers website screenshot",
    stats: ["37 orders", "$2096 revenue", "Live store", "Real checkout flow"],
    bullets: [
      "Clearer product page structure",
      "Better mobile buying experience",
      "Improved variant and size selection",
      "Built around real-world sales, not mockups",
    ],
    href: "/work/tripple-pluggers",
    cta: "View project",
  },
  {
    title: "FIFO Resume Mate",
    category: "Landing page",
    label: "Conversion-focused landing page",
    summary:
      "A clearer landing page built to explain the offer fast, reduce confusion, and move visitors toward the right action without friction.",
    image: "/work/fifo-resume-mate-hero.jpg",
    imageAlt: "FIFO Resume Mate website screenshot",
    bullets: [
      "Cleaner offer and pricing layout",
      "Stronger page structure and flow",
      "Clearer calls to action",
      "Built to help visitors convert faster",
    ],
    href: "/work/fifo-resume-mate",
    cta: "View project",
  },
  {
    title: "FNQ Lodge",
    category: "Booking website",
    label: "Before / after website refresh",
    summary:
      "A cleaner accommodation website with a more polished layout, better mobile presentation, and a clearer path into bookings.",
    image: "/work/fnq-lodge/hero.jpg",
    imageAlt: "FNQ Lodge website screenshot",
    bullets: [
      "Stronger visual presentation",
      "Cleaner booking journey",
      "Improved mobile usability",
      "Before and after improvement proof",
    ],
    href: "/work/fnq-lodge",
    cta: "View project",
  },
]

function SectionHeading(props: {
  eyebrow?: string
  title: string
  subtitle?: string
}) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-14">
      {props.eyebrow ? (
        <div className="mb-4 flex items-center justify-center">
          <div className="rounded-full border border-border bg-white/90 px-3 py-1 text-xs font-medium text-muted-foreground shadow-sm">
            {props.eyebrow}
          </div>
        </div>
      ) : null}

      <h2 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
        {props.title}
      </h2>

      {props.subtitle ? (
        <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
          {props.subtitle}
        </p>
      ) : null}
    </div>
  )
}

function BulletList({
  items,
  iconTone = "accent",
}: {
  items: string[]
  iconTone?: "accent" | "warm"
}) {
  const iconClass =
    iconTone === "warm"
      ? "text-[hsl(var(--brand-warm))]"
      : "text-[hsl(var(--brand-accent))]"

  return (
    <div className="space-y-3">
      {items.map((item) => (
        <div key={item} className="flex items-start gap-3">
          <Check className={`mt-0.5 h-5 w-5 shrink-0 ${iconClass}`} />
          <span className="text-sm leading-relaxed text-foreground sm:text-[15px]">
            {item}
          </span>
        </div>
      ))}
    </div>
  )
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
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

          <nav className="flex items-center gap-4 sm:gap-6">
            <Link
              href="#work"
              className="hidden text-sm font-medium text-muted-foreground transition-colors hover:text-foreground sm:inline-block"
            >
              Work
            </Link>
            <Link
              href="#services"
              className="hidden text-sm font-medium text-muted-foreground transition-colors hover:text-foreground sm:inline-block"
            >
              Services
            </Link>
            <Link
              href="#pricing"
              className="hidden text-sm font-medium text-muted-foreground transition-colors hover:text-foreground sm:inline-block"
            >
              Pricing
            </Link>
            <Link
              href="#faq"
              className="hidden text-sm font-medium text-muted-foreground transition-colors hover:text-foreground sm:inline-block"
            >
              FAQ
            </Link>

            <Button asChild className="shadow-md">
              <Link href="#contact">
                <Mail className="mr-2 h-4 w-4" />
                Start a project
              </Link>
            </Button>
          </nav>
        </div>
      </header>

      <section className="relative overflow-hidden border-b border-border bg-[linear-gradient(180deg,rgba(255,255,255,1),rgba(10,160,185,0.04),rgba(255,255,255,1))]">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.95),transparent_42%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(245,180,70,0.10),transparent_30%)]" />
          <div className="absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[hsl(var(--brand-accent)/0.08)] blur-3xl" />
        </div>

        <div className="container relative z-[1] mx-auto px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
              <div className="text-center lg:text-left">
                <div className="mb-5 inline-flex rounded-full border border-border bg-white/85 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground shadow-sm">
                  Websites • online stores • fixes
                </div>

                <h1 className="text-balance text-5xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
                  Websites that make your business look better and perform better
                </h1>

                <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl lg:mx-0">
                  I build and improve websites for small businesses that want to look
                  more professional, build trust faster, and turn visitors into real
                  enquiries, bookings, or sales.
                </p>

                <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
                  <Button size="lg" asChild className="shadow-md">
                    <Link href="#contact">
                      <Mail className="mr-2 h-4 w-4" />
                      Start a project
                    </Link>
                  </Button>

                  <Button
                    size="lg"
                    variant="outline"
                    asChild
                    className="bg-white/80 shadow-sm"
                  >
                    <Link
                      href={FACEBOOK_MESSENGER_URL}
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <MessageCircle className="mr-2 h-4 w-4" />
                      Send a message
                    </Link>
                  </Button>
                </div>

                <div className="mt-6">
                  <Link
                    href="#work"
                    className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                  >
                    View recent work
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>

                <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-xs text-muted-foreground lg:justify-start">
                  <span className="inline-flex items-center gap-2 rounded-full border border-border bg-white/85 px-3 py-1 shadow-sm">
                    ✅ Real business projects
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full border border-border bg-white/85 px-3 py-1 shadow-sm">
                    ✅ Shopify, WordPress, custom builds
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full border border-border bg-white/85 px-3 py-1 shadow-sm">
                    ✅ Based in Far North Queensland
                  </span>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -inset-6 rounded-[36px] bg-[radial-gradient(circle_at_top_right,rgba(10,160,185,0.10),transparent_36%),radial-gradient(circle_at_bottom_left,rgba(245,180,70,0.10),transparent_40%)] blur-2xl" />

                <div className="relative overflow-hidden rounded-[32px] border border-border bg-slate-50 p-5 shadow-[0_30px_80px_rgba(0,0,0,0.12)] sm:p-6">
                  <div className="flex items-start justify-between gap-4 border-b border-border pb-5">
                    <div>
                      <div className="text-lg font-semibold text-foreground">
                        What better websites usually improve
                      </div>
                      <div className="mt-1 text-sm leading-relaxed text-muted-foreground">
                        The fundamentals that help people trust your business and take action.
                      </div>
                    </div>

                    <div className="hidden rounded-2xl border border-border bg-white/80 px-3 py-2 text-xs font-medium text-muted-foreground shadow-sm sm:block">
                      Small business focused
                    </div>
                  </div>

                  <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    {[
                      "Stronger first impression",
                      "Clearer offer and messaging",
                      "Better mobile experience",
                      "Cleaner enquiry or booking flow",
                    ].map((item) => (
                      <div
                        key={item}
                        className="rounded-2xl border border-border bg-white px-4 py-5 text-sm font-medium text-foreground shadow-sm"
                      >
                        {item}
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 rounded-[24px] border border-border bg-sky-50 p-5">
                    <div className="flex items-start gap-3">
                      <Sparkles className="mt-0.5 h-5 w-5 shrink-0 text-[hsl(var(--brand-accent))]" />
                      <div>
                        <div className="text-sm font-semibold text-foreground">
                          Clean design is only half the job
                        </div>
                        <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                          Your website also needs to feel trustworthy, guide people clearly,
                          and make the next step obvious.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mx-auto mt-12 h-px w-full max-w-6xl bg-gradient-to-r from-transparent via-border to-transparent" />
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-muted/30">
        <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <SectionHeading
            eyebrow="Client feedback"
            title="What clients are saying"
            subtitle="Real feedback from real projects."
          />

          <div className="mx-auto max-w-3xl">
            <Card className="rounded-3xl border border-border bg-white p-8 shadow-[0_12px_30px_rgba(0,0,0,0.06)] sm:p-10">
              <div className="mb-4 flex items-center justify-center gap-1 text-[hsl(var(--brand-warm))]">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>

              <p className="text-pretty text-center text-lg leading-relaxed text-foreground sm:text-xl">
                “Love your work and passion Des and thanks very much for going above and beyond with all you are doing for Tripple Pluggers and continue to do 👍”
              </p>

              <div className="mt-6 flex flex-col items-center gap-2 text-sm text-muted-foreground">
                <div className="rounded-full border border-border bg-background/80 px-3 py-1 text-xs font-medium shadow-sm">
                  Verified client
                </div>

                <div className="font-medium text-foreground">
                  <a
                    href="https://tripplepluggers.com.au"
                    target="_blank"
                    rel="noreferrer"
                    className="underline underline-offset-4 hover:text-foreground"
                  >
                    Tripple Pluggers
                  </a>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-[linear-gradient(180deg,rgba(10,160,185,0.06),rgba(255,255,255,1))]">
        <div className="container mx-auto px-4 py-14 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-border bg-white px-6 py-7 shadow-[0_12px_30px_rgba(0,0,0,0.06)]">
              <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Not just looks
              </div>
              <div className="mt-2 text-2xl font-bold text-foreground">
                Not just a nice-looking website
              </div>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                A better website should help people understand what you do, trust your
                business faster, and feel more confident taking the next step.
              </p>
            </div>

            <div className="rounded-3xl border border-border bg-white px-6 py-7 shadow-[0_12px_30px_rgba(0,0,0,0.06)]">
              <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Better customer flow
              </div>
              <div className="mt-2 text-2xl font-bold text-foreground">
                Make it easier for customers to act
              </div>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Clearer pages, better mobile use, and less friction help more people
                enquire, book, or buy without giving up halfway through.
              </p>
            </div>

            <div className="rounded-3xl border border-border bg-white px-6 py-7 shadow-[0_12px_30px_rgba(0,0,0,0.06)]">
              <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Practical upgrades
              </div>
              <div className="mt-2 text-2xl font-bold text-foreground">
                Fix what’s actually hurting your site
              </div>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Weak layouts, outdated visuals, awkward pages, and mobile issues can all
                quietly hurt trust and conversions if they’re left alone.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-[linear-gradient(180deg,rgba(245,180,70,0.06),rgba(255,255,255,1))]">
        <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-8 text-center md:grid-cols-3">
            <div>
              <div className="text-base font-semibold text-foreground">
                Built with real-world business experience
              </div>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Not just design for design’s sake. Real-world understanding of offers,
                customer trust, selling online, and making websites pull their weight.
              </p>
            </div>
            <div>
              <div className="text-base font-semibold text-foreground">
                Stronger visuals without the generic stock-photo vibe
              </div>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                My photography background helps bring a cleaner, more polished visual
                standard to websites that need to feel more premium and more real.
              </p>
            </div>
            <div>
              <div className="text-base font-semibold text-foreground">
                New builds or sharp upgrades
              </div>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Some projects need a fresh start. Others just need the current site
                tightened up, simplified, and made better on mobile.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-[linear-gradient(180deg,rgba(10,160,185,0.04),rgba(255,255,255,1))]">
        <div className="container mx-auto px-4 py-14 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Website help for businesses across Cairns, the Tablelands, the
              Cassowary Coast and Far North Queensland
            </h2>
            <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              I work with local service businesses, online stores, accommodation
              businesses, and growing brands that need a website that feels current,
              works properly on mobile, and makes it easier for customers to take the
              next step.
            </p>
            <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              Shopify, WordPress, and modern custom business websites — depending on
              what makes the most sense for the job.
            </p>
          </div>
        </div>
      </section>

      <section
        id="work"
        className="border-b border-border bg-[linear-gradient(180deg,rgba(10,160,185,0.03),rgba(255,255,255,1))]"
      >
        <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <SectionHeading
            eyebrow="Selected work"
            title="Examples of recent work"
            subtitle="Real projects with cleaner structure, stronger visuals, and a clearer path for customers."
          />

          <div className="grid gap-8">
            {WORK_EXAMPLES.map((item) => (
              <Card
                key={item.title}
                className="group overflow-hidden rounded-[30px] border border-border bg-white p-0 shadow-[0_14px_40px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_48px_rgba(0,0,0,0.12)]"
              >
                <div className="grid gap-0 lg:grid-cols-[1.05fr_0.95fr]">
                  <Link
                    href={item.href}
                    className="relative block overflow-hidden border-b border-border bg-muted lg:border-b-0 lg:border-r"
                  >
                    <img
                      src={item.image}
                      alt={item.imageAlt}
                      className="h-full min-h-[280px] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      loading="lazy"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/18 via-transparent to-transparent" />
                    <div className="pointer-events-none absolute bottom-4 left-4">
                      <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/70 px-3 py-1.5 text-xs font-medium text-white shadow-lg backdrop-blur-sm">
                        View project
                        <ArrowRight className="h-3.5 w-3.5" />
                      </div>
                    </div>
                  </Link>

                  <div className="p-6 sm:p-8 lg:p-10">
                    <div className="mb-3 inline-flex rounded-full border border-border bg-background/80 px-3 py-1 text-xs font-medium text-muted-foreground shadow-sm">
                      {item.category}
                    </div>

                    <h3 className="text-3xl font-bold tracking-tight text-foreground">
                      {item.title}
                    </h3>

                    <p className="mt-1 text-sm font-medium text-muted-foreground">
                      {item.label}
                    </p>

                    <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
                      {item.summary}
                    </p>

                    {item.stats?.length ? (
                      <div className="mt-6 grid grid-cols-2 gap-3">
                        {item.stats.map((stat, index) => (
                          <div
                            key={stat}
                            className={`rounded-2xl border px-4 py-3 text-sm font-medium text-foreground shadow-sm ${
                              index === 0 || index === 2
                                ? "border-border bg-sky-50"
                                : "border-border bg-white"
                            }`}
                          >
                            {stat}
                          </div>
                        ))}
                      </div>
                    ) : null}

                    <div className="mt-6">
                      <BulletList items={item.bullets} />
                    </div>

                    <div className="mt-8 flex flex-wrap gap-3">
                      <Button asChild className="shadow-sm">
                        <Link href={item.href}>
                          {item.cta}
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>

                      <Button variant="outline" asChild className="bg-white/80 shadow-sm">
                        <Link href="#contact">
                          <Mail className="mr-2 h-4 w-4" />
                          Start something similar
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="border-b border-border bg-muted/30">
        <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <SectionHeading
            eyebrow="Services"
            title="How I can help"
            subtitle="New websites, online stores, and practical improvements for sites that feel outdated, unclear, or awkward to use."
          />

          <div className="grid gap-6 md:grid-cols-3">
            <Card className="rounded-3xl border border-border bg-white p-8 shadow-[0_12px_30px_rgba(0,0,0,0.06)]">
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[hsl(var(--brand-accent))/0.15]">
                <MonitorSmartphone className="h-6 w-6 text-foreground" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground">New websites</h3>
              <p className="mt-3 text-pretty text-base leading-relaxed text-muted-foreground">
                Clean, modern business websites with clearer messaging, better layout,
                and a stronger first impression.
              </p>
              <div className="mt-5 text-sm font-medium text-foreground">
                Business websites, landing pages, and custom builds
              </div>
            </Card>

            <Card className="rounded-3xl border border-border bg-white p-8 shadow-[0_12px_30px_rgba(0,0,0,0.06)]">
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[hsl(var(--brand-warm))/0.12]">
                <ShoppingBag className="h-6 w-6 text-foreground" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground">Online stores</h3>
              <p className="mt-3 text-pretty text-base leading-relaxed text-muted-foreground">
                Ecommerce pages that look sharper, feel easier to shop, and remove the
                little bits of friction that hurt sales.
              </p>
              <div className="mt-5 text-sm font-medium text-foreground">
                Shopify stores, product pages, and conversion improvements
              </div>
            </Card>

            <Card className="rounded-3xl border border-border bg-white p-8 shadow-[0_12px_30px_rgba(0,0,0,0.06)]">
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/15">
                <Wrench className="h-6 w-6 text-foreground" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground">Website fixes</h3>
              <p className="mt-3 text-pretty text-base leading-relaxed text-muted-foreground">
                Mobile fixes, layout cleanup, booking flow improvements, page polish,
                and smarter upgrades to websites that are nearly there but not quite.
              </p>
              <div className="mt-5 text-sm font-medium text-foreground">
                Fixes, cleanups, redesigns, and upgrades
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-[linear-gradient(180deg,rgba(255,255,255,1),rgba(10,160,185,0.03))]">
        <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="overflow-hidden rounded-[36px] border border-border bg-[linear-gradient(135deg,rgba(255,255,255,0.98),rgba(10,160,185,0.04),rgba(255,255,255,0.98))] shadow-[0_20px_60px_rgba(0,0,0,0.07)]">
            <div className="grid items-center gap-0 lg:grid-cols-[1fr_0.95fr]">
              <div className="px-6 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12">
                <div className="mb-3 inline-flex rounded-full border border-border bg-background/80 px-3 py-1 text-xs font-medium text-muted-foreground shadow-sm">
                  Visuals matter
                </div>

                <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                  Stronger websites usually start with stronger visuals
                </h2>

                <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                  A lot of business websites feel cheap because the visuals feel cheap.
                  Generic stock images, weak crops, inconsistent photos, or no visual
                  direction at all.
                </p>

                <p className="mt-3 text-base leading-relaxed text-muted-foreground sm:text-lg">
                  I bring a photography background into the process, which helps create
                  a site that feels cleaner, more believable, and more premium from the
                  first glance.
                </p>

                <p className="mt-4 text-sm text-muted-foreground">
                  You can see some of my photography work at{" "}
                  <a
                    href="https://outbacklens.com"
                    target="_blank"
                    rel="noreferrer"
                    className="font-medium underline underline-offset-4 hover:text-foreground"
                  >
                    Outback Lens
                  </a>
                </p>

                <div className="mt-6">
                  <BulletList
                    items={[
                      "Better first impressions",
                      "More trust from customers",
                      "Less reliance on generic stock imagery",
                      "A more polished brand feel across the whole site",
                    ]}
                  />
                </div>
              </div>

              <div className="relative h-full border-t border-border lg:border-l lg:border-t-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(10,160,185,0.10),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(245,180,70,0.12),transparent_40%)]" />
                <div className="relative flex h-full items-center justify-center p-5 sm:p-6 lg:p-8">
                  <div className="w-full max-w-[520px] overflow-hidden rounded-[28px] border border-border bg-white shadow-[0_18px_40px_rgba(0,0,0,0.12)]">
                    <img
                      src={VISUALS_IMAGE}
                      alt="Lifestyle product photography example"
                      className="block h-full w-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-[linear-gradient(180deg,rgba(245,180,70,0.05),rgba(255,255,255,1))]">
        <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
            <div className="flex justify-center lg:justify-start">
              <div className="w-full max-w-[420px] overflow-hidden rounded-[28px] border border-border bg-white shadow-[0_18px_40px_rgba(0,0,0,0.10)]">
                <img
                  src="/about-des.jpg"
                  alt="Des from DB Websites"
                  className="block h-full w-full object-cover"
                />
              </div>
            </div>

            <div>
              <div className="mb-3 inline-flex rounded-full border border-border bg-background/80 px-3 py-1 text-xs font-medium text-muted-foreground shadow-sm">
                About
              </div>

              <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Built by someone who actually runs businesses
              </h2>

              <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                I’m Des — I build and improve websites for small businesses that want to
                look more professional, build trust faster, and turn visitors into real
                enquiries, bookings, or sales.
              </p>

              <p className="mt-3 text-base leading-relaxed text-muted-foreground sm:text-lg">
                I’m not just focused on making websites look nice. I care about clarity,
                customer trust, stronger visuals, and giving people a cleaner path to take
                action.
              </p>

              <div className="mt-6">
                <BulletList
                  items={[
                    "Real-world business experience",
                    "A strong eye for visuals and presentation",
                    "Practical thinking around enquiries, bookings, and sales",
                    "Focused on cleaner customer flow, not just design",
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-muted/30">
        <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <SectionHeading
            eyebrow="How it works"
            title="Simple process, straight up"
            subtitle="Most projects are easier once we’ve looked at what you already have, what’s not working, and what the site actually needs to do."
          />

          <div className="grid gap-6 md:grid-cols-3">
            <Card className="rounded-3xl border border-border bg-white p-8 shadow-[0_12px_30px_rgba(0,0,0,0.06)]">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-sky-50 text-sm font-bold text-foreground">
                1
              </div>
              <h3 className="mt-4 text-lg font-semibold text-foreground">
                Send through the details
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Send your business name, current website if you have one, and what you
                want help with.
              </p>
            </Card>

            <Card className="rounded-3xl border border-border bg-white p-8 shadow-[0_12px_30px_rgba(0,0,0,0.06)]">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-sky-50 text-sm font-bold text-foreground">
                2
              </div>
              <h3 className="mt-4 text-lg font-semibold text-foreground">
                I look at what’s needed
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                I’ll tell you whether it looks like a tidy-up, a bigger upgrade, or
                something that should be rebuilt properly.
              </p>
            </Card>

            <Card className="rounded-3xl border border-border bg-white p-8 shadow-[0_12px_30px_rgba(0,0,0,0.06)]">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-sky-50 text-sm font-bold text-foreground">
                3
              </div>
              <h3 className="mt-4 text-lg font-semibold text-foreground">
                We get it moving
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Once the scope is clear, I’ll get started on the fixes, redesign, or new
                build.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section
        id="pricing"
        className="border-y border-border bg-[linear-gradient(180deg,rgba(10,160,185,0.03),rgba(255,255,255,1))]"
      >
        <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <SectionHeading
            eyebrow="Pricing"
            title="Straightforward pricing guidance"
            subtitle="Smaller jobs can usually be quoted quickly. Larger projects are priced properly based on scope, platform, and what the website needs to do."
          />

          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
            <Card className="rounded-3xl border border-border bg-white p-8 shadow-[0_12px_30px_rgba(0,0,0,0.06)] lg:p-10">
              <h3 className="text-2xl font-bold text-foreground">Website fixes</h3>
              <p className="mt-3 text-pretty text-muted-foreground">
                Best for existing websites that need cleanup, mobile improvements,
                better enquiry flow, page polish, or practical fixes.
              </p>

              <div className="mt-6">
                <BulletList
                  items={[
                    "Mobile layout cleanup",
                    "Contact and enquiry improvements",
                    "Broken sections or awkward page flow",
                    "General polish to make the site feel more current",
                  ]}
                />
              </div>

              <div className="mt-8 rounded-2xl border border-border bg-sky-50 p-6">
                <div className="text-sm font-semibold text-muted-foreground">
                  Smaller improvement jobs
                </div>
                <div className="mt-2 text-4xl font-bold tracking-tight text-foreground">
                  From $250
                </div>
                <div className="mt-1 text-sm text-muted-foreground">
                  AUD depending on scope
                </div>
              </div>
            </Card>

            <Card className="rounded-3xl border border-border bg-white p-8 shadow-[0_12px_30px_rgba(0,0,0,0.06)] lg:p-10">
              <h3 className="text-2xl font-bold text-foreground">
                New websites and online stores
              </h3>
              <p className="mt-3 text-pretty text-muted-foreground">
                Best for businesses that want a stronger online presence with clearer
                pages, better structure, stronger visuals, and a more polished customer
                experience.
              </p>

              <div className="mt-6">
                <BulletList
                  items={[
                    "New business websites",
                    "Online stores and product pages",
                    "Landing pages and lead generation pages",
                    "Quoted based on the size, platform, and value of the job",
                  ]}
                  iconTone="warm"
                />
              </div>

              <div className="mt-8 rounded-2xl border border-border bg-white p-6">
                <div className="text-sm font-semibold text-muted-foreground">
                  Typical starting point
                </div>
                <div className="mt-2 text-4xl font-bold tracking-tight text-foreground">
                  $950
                </div>
                <div className="mt-1 text-sm text-muted-foreground">
                  AUD depending on scope
                </div>
              </div>
            </Card>
          </div>

          <div className="mt-8 text-center">
            <p className="mx-auto max-w-2xl text-sm leading-relaxed text-muted-foreground">
              Not sure what category your project falls into? Send it through anyway.
              I’ll tell you pretty quickly whether it’s a tidy-up job, a bigger
              upgrade, or something that should be rebuilt properly.
            </p>

            <div className="mt-6">
              <Button size="lg" asChild className="shadow-md">
                <Link href="#contact">
                  <Mail className="mr-2 h-4 w-4" />
                  Start a project
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="container mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <SectionHeading
          eyebrow="FAQ"
          title="Quick answers"
          subtitle="Simple answers, straight up."
        />

        <div className="mx-auto max-w-3xl">
          <Card className="rounded-3xl border border-border bg-white p-6 shadow-[0_12px_30px_rgba(0,0,0,0.06)] sm:p-8">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left text-base font-semibold">
                  Do you work with WordPress websites?
                </AccordionTrigger>
                <AccordionContent className="leading-relaxed text-muted-foreground">
                  Yes. I can help with fixes, upgrades, layout cleanup, booking flow
                  improvements, and general front-end tidy-up work on existing
                  WordPress sites.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left text-base font-semibold">
                  Can you help with online stores too?
                </AccordionTrigger>
                <AccordionContent className="leading-relaxed text-muted-foreground">
                  Yes. I can help improve online stores with better product pages,
                  cleaner buying flow, and a better experience on mobile.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left text-base font-semibold">
                  Can you help if I already have a website?
                </AccordionTrigger>
                <AccordionContent className="leading-relaxed text-muted-foreground">
                  Yep. Send me the link and tell me what feels off. I’ll tell you
                  whether it’s worth fixing, upgrading, or rebuilding.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left text-base font-semibold">
                  What do you need from me to get started?
                </AccordionTrigger>
                <AccordionContent className="leading-relaxed text-muted-foreground">
                  Just send your business name, current website if you have one, what
                  you need help with, your main goal, and any timing or budget notes.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger className="text-left text-base font-semibold">
                  What platforms do you work with?
                </AccordionTrigger>
                <AccordionContent className="leading-relaxed text-muted-foreground">
                  Shopify stores, WordPress websites, and modern custom business
                  websites depending on what suits the project best.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6">
                <AccordionTrigger className="text-left text-base font-semibold">
                  Do you only work with businesses in Far North Queensland?
                </AccordionTrigger>
                <AccordionContent className="leading-relaxed text-muted-foreground">
                  No. I can work with businesses Australia-wide, but I’m based in Far
                  North Queensland and especially happy to work with local businesses
                  in Cairns, the Tablelands, the Cassowary Coast, and surrounding
                  areas.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </Card>
        </div>
      </section>

      <section className="border-t border-border bg-[linear-gradient(180deg,rgba(10,160,185,0.04),rgba(255,255,255,0.96),rgba(245,180,70,0.05))]">
        <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-3 inline-flex rounded-full border border-border bg-background/80 px-3 py-1 text-xs font-medium text-muted-foreground shadow-sm">
              Ready when you are
            </div>

            <h2 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Need a website that feels more polished and works better?
            </h2>

            <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
              Send me the link or tell me what you need. I’ll tell you straight
              whether it’s a quick fix, a bigger upgrade, or something worth building
              properly from scratch.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" asChild className="shadow-md">
                <Link href="#contact">
                  <Mail className="mr-2 h-4 w-4" />
                  Start a project
                </Link>
              </Button>

              <Button size="lg" variant="outline" asChild className="bg-white/80 shadow-sm">
                <Link
                  href={FACEBOOK_MESSENGER_URL}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Send a message
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="border-t border-border bg-background">
        <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-3 inline-flex rounded-full border border-border bg-background/80 px-3 py-1 text-xs font-medium text-muted-foreground shadow-sm">
              Start a project
            </div>

            <h2 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Tell me what you need
            </h2>

            <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
              Send through a few details and I’ll tell you whether it looks like a quick
              fix, a larger upgrade, or a fresh build.
            </p>
          </div>

          <div className="mx-auto mt-10 max-w-2xl">
            <form
              className="rounded-[32px] border border-border bg-white p-6 shadow-[0_18px_40px_rgba(0,0,0,0.08)] sm:p-8"
              action={`mailto:${EMAIL}?subject=${EMAIL_SUBJECT}&body=${EMAIL_BODY}`}
              method="post"
              encType="text/plain"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label className="mb-2 block text-sm font-medium text-foreground">
                    Business name
                  </label>
                  <input
                    type="text"
                    name="business-name"
                    className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-foreground"
                    placeholder="Your business name"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-foreground">
                    Your name
                  </label>
                  <input
                    type="text"
                    name="name"
                    className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-foreground"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-foreground">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-foreground"
                    placeholder="you@example.com"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="mb-2 block text-sm font-medium text-foreground">
                    Current website
                  </label>
                  <input
                    type="text"
                    name="website"
                    className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-foreground"
                    placeholder="https://"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="mb-2 block text-sm font-medium text-foreground">
                    What do you need help with?
                  </label>
                  <textarea
                    name="message"
                    rows={6}
                    className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-foreground"
                    placeholder="New website, online store, fixes, redesign, booking flow improvements..."
                  />
                </div>
              </div>

              <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
                <Button type="submit" size="lg" className="shadow-md">
                  <Mail className="mr-2 h-4 w-4" />
                  Send enquiry
                </Button>

                <Button
                  type="button"
                  variant="outline"
                  size="lg"
                  asChild
                  className="bg-white/80 shadow-sm"
                >
                  <Link
                    href={FACEBOOK_MESSENGER_URL}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Message instead
                  </Link>
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <footer className="bg-background">
        <div className="container mx-auto px-4 py-10 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-semibold text-foreground">© DB Websites</p>

            <p className="mt-1 text-sm text-muted-foreground">
              Websites, online stores, and practical fixes for small businesses
            </p>

            <div className="mt-3 flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
              <a
                href={UPWORK_URL}
                target="_blank"
                rel="noreferrer"
                className="underline hover:text-foreground"
              >
                Upwork
              </a>

              <a
                href="https://www.facebook.com/dbwebsitesau"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 underline hover:text-foreground"
              >
                <Facebook className="h-4 w-4" />
                Facebook
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}