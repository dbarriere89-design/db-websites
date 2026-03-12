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
  Mail,
  MessageCircle,
  MonitorSmartphone,
  ShoppingBag,
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

function SectionHeading(props: {
  eyebrow?: string
  title: string
  subtitle?: string
}) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      {props.eyebrow ? (
        <div className="mb-3 flex items-center justify-center">
          <div className="rounded-full border border-border bg-background/70 px-3 py-1 text-xs font-medium text-muted-foreground shadow-sm">
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

type WorkExample = {
  title: string
  category: string
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
    title: "Tripple Pluggers",
    category: "Online store",
    summary:
      "Built and improved an online store for an Australian footwear brand with clearer product pages, easier buying on mobile, and a smoother path to checkout.",
    image: "/work/tripple-pluggers/tp-hero.jpg",
    imageAlt: "Tripple Pluggers website screenshot",
    stats: ["15 orders", "$645 revenue", "Live store", "Real checkout flow"],
    bullets: [
      "Cleaner product page layout",
      "Better size and variant selection",
      "Improved mobile shopping experience",
      "Real sales proof from a live store",
    ],
    href: "/work/tripple-pluggers",
    cta: "View example",
  },
  {
    title: "FIFO Resume Mate",
    category: "Landing page",
    summary:
      "Built a landing page designed to explain the offer clearly, guide people to the right option, and move them into checkout without confusion.",
    image: "/work/fifo-resume-mate-hero.jpg",
    imageAlt: "FIFO Resume Mate website screenshot",
    bullets: [
      "Clearer offer and pricing layout",
      "Better flow from landing page to checkout",
      "Stronger calls to action",
      "Built to help people take the next step",
    ],
    href: "/work/fifo-resume-mate",
    cta: "View example",
  },
  {
    title: "FNQ Lodge",
    category: "Booking website",
    summary:
      "Improved a booking website for a tropical lodge with a cleaner layout, a better reservation path, and a stronger experience on mobile.",
    image: "/work/fnq-lodge/hero.jpg",
    imageAlt: "FNQ Lodge website screenshot",
    bullets: [
      "Cleaner booking journey",
      "Better layout and page structure",
      "Improved mobile experience",
      "Before and after proof",
    ],
    href: "/work/fnq-lodge",
    cta: "View example",
  },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur">
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

          <nav className="flex items-center gap-6">
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
              href="#faq"
              className="hidden text-sm font-medium text-muted-foreground transition-colors hover:text-foreground sm:inline-block"
            >
              FAQ
            </Link>

            <Button asChild className="shadow-sm">
              <Link href={`mailto:${EMAIL}?subject=${EMAIL_SUBJECT}&body=${EMAIL_BODY}`}>
                <Mail className="mr-2 h-4 w-4" />
                Start a project
              </Link>
            </Button>
          </nav>
        </div>
      </header>

      <section className="relative overflow-hidden premium-ambient bg-[oklch(0.97_0.01_200)]">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.9),transparent_45%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.55),transparent_40%)]" />
        </div>

        <div className="container relative z-[2] mx-auto px-6 py-20 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-5xl text-center">
            <div className="mb-6 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Websites • online stores • website fixes
            </div>

            <h1 className="text-balance text-5xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
              Websites that help bring in more customers
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-pretty text-xl leading-relaxed text-muted-foreground sm:text-2xl">
              I build new websites and improve existing ones for small businesses in Cairns, the Tablelands, the Cassowary Coast, and across Far North Queensland.,
              Innisfail, and across Far North Queensland.
            </p>

            <p className="mx-auto mt-4 max-w-3xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              The goal is simple: make your business easier to understand, easier to trust, and
              easier for people to contact, book, or buy from.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" asChild className="shadow-sm">
                <Link href={`mailto:${EMAIL}?subject=${EMAIL_SUBJECT}&body=${EMAIL_BODY}`}>
                  <Mail className="mr-2 h-4 w-4" />
                  Start a project
                </Link>
              </Button>

              <Button size="lg" variant="outline" asChild>
                <Link href={FACEBOOK_MESSENGER_URL} target="_blank" rel="noreferrer noopener">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Message me
                </Link>
              </Button>
            </div>

            <div className="mt-5">
              <Link
                href="#work"
                className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                View work examples
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-3 text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-3 py-1">
                ✅ New websites for small businesses
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-3 py-1">
                ✅ Online stores with real sales proof
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-3 py-1">
                ✅ Fixes for broken or clunky websites
              </span>
            </div>

            <div className="mx-auto mt-6 flex max-w-3xl flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs font-medium text-muted-foreground">
              <span>New builds</span>
              <span className="opacity-40">•</span>
              <span>Online stores</span>
              <span className="opacity-40">•</span>
              <span>Booking websites</span>
              <span className="opacity-40">•</span>
              <span>Website fixes</span>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-background">
        <div className="container mx-auto px-6 py-14 lg:px-8">
          <div className="grid gap-6 text-center md:grid-cols-3">
            <div className="rounded-2xl border border-border bg-background/70 px-6 py-6 shadow-sm">
              <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Real results
              </div>
              <div className="mt-2 text-2xl font-bold text-foreground">Websites that actually work</div>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Clear pages, working forms, easier buying, and a better experience for your
                customers.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-background/70 px-6 py-6 shadow-sm">
              <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Better customer flow
              </div>
              <div className="mt-2 text-2xl font-bold text-foreground">
                Cleaner booking and checkout paths
              </div>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Fix the stuff that frustrates customers and makes them give up before they enquire
                or buy.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-background/70 px-6 py-6 shadow-sm">
              <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Website fixes
              </div>
              <div className="mt-2 text-2xl font-bold text-foreground">Less clunky. More usable.</div>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                I clean up websites that feel old, confusing, broken, or hard to use on mobile.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-muted/30">
        <div className="container mx-auto px-6 py-12 lg:px-8">
          <div className="grid gap-6 text-center md:grid-cols-3">
            <div>
              <div className="text-base font-semibold text-foreground">
                Built by someone who actually runs businesses
              </div>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Real-world experience building, selling, and improving digital businesses — not
                just making pretty mockups.
              </p>
            </div>
            <div>
              <div className="text-base font-semibold text-foreground">
                Focused on what helps customers take action
              </div>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Better clarity, better trust, and better flow so people can actually contact you,
                book, or buy.
              </p>
            </div>
            <div>
              <div className="text-base font-semibold text-foreground">
                New websites or smarter upgrades
              </div>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Some businesses need a fresh start. Others just need the current site cleaned up
                and fixed properly.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-background">
        <div className="container mx-auto px-6 py-12 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Website help for businesses across Cairns, the Tablelands, the Cassowary Coast and FNQ
            </h2>
            <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              I work with local service businesses, online stores, accommodation businesses, and
growing brands across Cairns, the Tablelands, the Cassowary Coast, and Far North
Queensland that need a website that feels current, works properly on mobile, and makes
it easier for customers to take the next step.
            </p>
          </div>
        </div>
      </section>

      <section id="work" className="container mx-auto px-6 py-16 lg:px-8 lg:py-24">
        <SectionHeading
          eyebrow="Work examples"
          title="Examples of my work"
          subtitle="Real businesses. Real websites. Real improvements."
        />

        <div className="grid gap-8">
          {WORK_EXAMPLES.map((item) => (
            <Card
              key={item.title}
              className="group premium-card overflow-hidden rounded-3xl border border-border bg-card/70 p-0 shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(0,0,0,0.12)]"
            >
              <div className="grid gap-0 lg:grid-cols-[1.05fr_0.95fr]">
                <Link
                  href={item.href}
                  className="relative block overflow-hidden border-b border-border lg:border-b-0 lg:border-r"
                >
                  <img
                    src={item.image}
                    alt={item.imageAlt}
                    className="h-full min-h-[280px] w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    loading="lazy"
                  />

                  <div className="pointer-events-none absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10" />

                  <div className="pointer-events-none absolute bottom-4 left-4 opacity-0 transition-all duration-300 group-hover:opacity-100">
                    <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/70 px-3 py-1.5 text-xs font-medium text-white shadow-lg backdrop-blur-sm">
                      View example
                      <ArrowRight className="h-3.5 w-3.5" />
                    </div>
                  </div>
                </Link>

                <div className="p-6 sm:p-8 lg:p-10">
                  <div className="mb-3 inline-flex rounded-full border border-border bg-background/70 px-3 py-1 text-xs font-medium text-muted-foreground">
                    {item.category}
                  </div>

                  <h3 className="text-3xl font-bold tracking-tight text-foreground">{item.title}</h3>

                  <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
                    {item.summary}
                  </p>

                  {item.stats?.length ? (
                    <div className="mt-6 grid grid-cols-2 gap-3">
                      {item.stats.map((stat) => (
                        <div
                          key={stat}
                          className="rounded-2xl border border-border bg-background/60 px-4 py-3 text-sm font-medium text-foreground"
                        >
                          {stat}
                        </div>
                      ))}
                    </div>
                  ) : null}

                  <div className="mt-6 space-y-3">
                    {item.bullets.map((bullet) => (
                      <div key={bullet} className="flex items-start gap-3">
                        <Check className="mt-0.5 h-5 w-5 shrink-0 text-[hsl(var(--brand-accent))]" />
                        <span className="text-sm leading-relaxed text-foreground">{bullet}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 flex flex-wrap gap-3">
                    <Button asChild>
                      <Link href={item.href}>
                        {item.cta}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>

                    <Button variant="outline" asChild>
                      <Link href={`mailto:${EMAIL}?subject=${EMAIL_SUBJECT}&body=${EMAIL_BODY}`}>
                        <Mail className="mr-2 h-4 w-4" />
                        Start a similar project
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section id="services" className="border-y border-border bg-muted/30">
        <div className="container mx-auto px-6 py-16 lg:px-8 lg:py-24">
          <SectionHeading
            eyebrow="Services"
            title="How I can help"
            subtitle="New websites, online stores, and fixes for sites that feel broken, old, or hard to use."
          />

          <div className="grid gap-6 md:grid-cols-3">
            <Card className="premium-card rounded-3xl p-8 shadow-sm">
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[hsl(var(--brand-accent))/0.15]">
                <MonitorSmartphone className="h-6 w-6 text-foreground" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground">New websites</h3>
              <p className="mt-3 text-pretty text-base leading-relaxed text-muted-foreground">
                Need a new website? I build clean, modern sites that make your business easier to
                understand and easier to contact.
              </p>
              <div className="mt-5 text-sm font-medium text-foreground">
                Best for service businesses and local brands
              </div>
            </Card>

            <Card className="premium-card rounded-3xl p-8 shadow-sm">
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[hsl(var(--brand-warm))/0.18]">
                <ShoppingBag className="h-6 w-6 text-foreground" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground">Online stores</h3>
              <p className="mt-3 text-pretty text-base leading-relaxed text-muted-foreground">
                Selling products online? I help make your store clearer, easier to shop, and better
                on mobile so more people actually buy.
              </p>
              <div className="mt-5 text-sm font-medium text-foreground">
                Store builds + sales-focused improvements
              </div>
            </Card>

            <Card className="premium-card rounded-3xl p-8 shadow-sm">
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/20">
                <Wrench className="h-6 w-6 text-foreground" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground">Website fixes</h3>
              <p className="mt-3 text-pretty text-base leading-relaxed text-muted-foreground">
                Already have a website? I can fix layout issues, improve mobile use, clean up
                booking or contact pages, and make the whole thing feel less clunky.
              </p>
              <div className="mt-5 text-sm font-medium text-foreground">
                Fixes, cleanups, and upgrades
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-16 lg:px-8 lg:py-24">
        <SectionHeading
          eyebrow="Process"
          title="Simple process, clean delivery"
          subtitle="No agency waffle. Just clear communication and solid work."
        />

        <div className="grid gap-6 md:grid-cols-4">
          {[
            {
              step: "01",
              title: "Send it through",
              text: "You send your website link, business details, and what you need help with.",
            },
            {
              step: "02",
              title: "Get direction",
              text: "I’ll tell you whether it needs a quick fix, a proper upgrade, or a fresh build.",
            },
            {
              step: "03",
              title: "Build or fix",
              text: "I improve the website with a strong focus on clarity, mobile use, and customer flow.",
            },
            {
              step: "04",
              title: "Launch better",
              text: "You end up with a cleaner website that feels better and works harder for your business.",
            },
          ].map((item) => (
            <Card key={item.step} className="premium-card rounded-3xl p-8 shadow-sm">
              <div className="text-sm font-semibold text-muted-foreground">{item.step}</div>
              <h3 className="mt-2 text-lg font-semibold text-foreground">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-muted/30">
        <div className="container mx-auto px-6 py-16 lg:px-8 lg:py-24">
          <SectionHeading
            eyebrow="Pricing"
            title="Website fixes and new builds"
            subtitle="Smaller jobs can usually be quoted quickly. Bigger projects are priced properly based on the work involved."
          />

          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
            <Card className="premium-card rounded-3xl p-8 shadow-sm lg:p-10">
              <h3 className="text-2xl font-bold text-foreground">Website fixes</h3>
              <p className="mt-3 text-pretty text-muted-foreground">
                Best for existing websites that need layout cleanup, mobile fixes, contact form
                improvements, booking page tweaks, or general tidy-up work.
              </p>

              <div className="mt-6 space-y-3">
                {[
                  "Mobile layout cleanup",
                  "Contact and enquiry improvements",
                  "Broken sections or awkward page flow",
                  "General polish to make the site feel more current",
                ].map((x) => (
                  <div key={x} className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-[hsl(var(--brand-accent))]" />
                    <span className="text-sm text-foreground">{x}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-2xl border border-border bg-background/70 p-6">
                <div className="text-sm font-semibold text-muted-foreground">Typical quick jobs</div>
                <div className="mt-2 text-4xl font-bold tracking-tight text-foreground">$250+</div>
                <div className="mt-1 text-sm text-muted-foreground">AUD depending on scope</div>
              </div>
            </Card>

            <Card className="premium-card rounded-3xl p-8 shadow-sm lg:p-10">
              <h3 className="text-2xl font-bold text-foreground">New websites and online stores</h3>
              <p className="mt-3 text-pretty text-muted-foreground">
                Best for businesses that want a stronger online presence from the ground up, with
                clearer pages, better structure, and a better customer experience.
              </p>

              <div className="mt-6 space-y-3">
                {[
                  "New business websites",
                  "Online stores and product pages",
                  "Landing pages and lead generation pages",
                  "Quoted based on the size and value of the job",
                ].map((x) => (
                  <div key={x} className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-[hsl(var(--brand-warm))]" />
                    <span className="text-sm text-foreground">{x}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-2xl border border-border bg-background/70 p-6">
                <div className="text-sm font-semibold text-muted-foreground">Custom project range</div>
                <div className="mt-2 text-4xl font-bold tracking-tight text-foreground">$1.5k+</div>
                <div className="mt-1 text-sm text-muted-foreground">AUD and scoped per job</div>
              </div>
            </Card>
          </div>

          <div className="mt-8 text-center">
            <Button size="lg" asChild className="shadow-sm">
              <Link href={`mailto:${EMAIL}?subject=${EMAIL_SUBJECT}&body=${EMAIL_BODY}`}>
                <Mail className="mr-2 h-4 w-4" />
                Start a project
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section id="faq" className="container mx-auto px-6 py-16 lg:px-8 lg:py-24">
        <SectionHeading eyebrow="FAQ" title="Quick answers" subtitle="Simple answers, straight up." />

        <div className="mx-auto max-w-3xl">
          <Card className="premium-card rounded-3xl p-6 shadow-sm sm:p-8">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left text-base font-semibold">
                  Can you still work on WordPress websites?
                </AccordionTrigger>
                <AccordionContent className="leading-relaxed text-muted-foreground">
                  Yes. I can help with fixes, upgrades, layout cleanup, booking flow improvements,
                  and general front-end tidy-up work on existing WordPress sites.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left text-base font-semibold">
                  Can you help with online stores too?
                </AccordionTrigger>
                <AccordionContent className="leading-relaxed text-muted-foreground">
                  Yes. I can help improve online stores with better product pages, cleaner buying
                  flow, and a better experience on mobile.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left text-base font-semibold">
                  Can you help if I already have a website?
                </AccordionTrigger>
                <AccordionContent className="leading-relaxed text-muted-foreground">
                  Yep. Send me the link and tell me what feels wrong. I’ll tell you quickly whether
                  it’s something worth fixing, upgrading, or rebuilding.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left text-base font-semibold">
                  What do you need from me to get started?
                </AccordionTrigger>
                <AccordionContent className="leading-relaxed text-muted-foreground">
                  Just send your business name, current website if you have one, what you need help
                  with, your main goal, and any timing or budget notes.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger className="text-left text-base font-semibold">
                  Do you only work with businesses in Far North Queensland?
                </AccordionTrigger>
                <AccordionContent className="leading-relaxed text-muted-foreground">
                  No. I can work with businesses Australia-wide, but I’m based in Far North Queensland and especially happy to work with local businesses in Cairns, the Tablelands, the Cassowary Coast, and surrounding areas.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </Card>
        </div>
      </section>

      <section className="border-t border-border bg-muted/30">
        <div className="container mx-auto px-6 py-16 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Need help fixing your website or building a better one?
            </h2>

            <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
              Send me the link or tell me what you need. I’ll tell you straight whether it’s a
              quick fix, a bigger upgrade, or something that should be built properly from scratch.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" asChild className="shadow-sm">
                <Link href={`mailto:${EMAIL}?subject=${EMAIL_SUBJECT}&body=${EMAIL_BODY}`}>
                  <Mail className="mr-2 h-4 w-4" />
                  Start a project
                </Link>
              </Button>

              <Button size="lg" variant="outline" asChild>
                <Link href={FACEBOOK_MESSENGER_URL} target="_blank" rel="noreferrer noopener">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Message me
                </Link>
              </Button>
            </div>

            <div className="mt-8 text-xs text-muted-foreground">
              DB Websites • dbwebsites.au • Built by Des
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-background">
        <div className="container mx-auto px-6 py-10 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-semibold text-foreground">© DB Websites — Built by Des</p>

            <p className="mt-1 text-sm text-muted-foreground">
              Websites, online stores, and practical fixes for small businesses
            </p>

            <p className="mt-3 text-sm text-muted-foreground">
              Freelance projects also available on{" "}
              <a
                href={UPWORK_URL}
                target="_blank"
                rel="noreferrer"
                className="underline hover:text-foreground"
              >
                Upwork
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}