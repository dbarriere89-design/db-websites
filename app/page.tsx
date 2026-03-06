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

      <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        {props.title}
      </h2>

      {props.subtitle ? (
        <p className="mt-3 text-pretty text-muted-foreground">{props.subtitle}</p>
      ) : null}
    </div>
  )
}

type CaseStudy = {
  title: string
  category: string
  summary: string
  image: string
  imageAlt: string
  stats?: string[]
  bullets: string[]
  href: string
}

const CASE_STUDIES: CaseStudy[] = [
  {
    title: "Tripple Pluggers",
    category: "Shopify ecommerce",
    summary:
      "Built and refined a Shopify store for an Australian product brand, with a focus on product presentation, mobile UX, conversion flow, and real-world sales proof.",
    image: "/work/tripple-pluggers-case-study.jpg",
    imageAlt: "Tripple Pluggers Shopify case study screenshot",
    stats: ["925 visitors", "15 orders", "$645 revenue", "1.62% conversion"],
    bullets: [
      "Shopify storefront setup and refinement",
      "Product page and variant UX improvements",
      "Mobile-first ecommerce presentation",
      "Real analytics and order proof from launch period",
    ],
    href: "/work/tripple-pluggers",
  },
  {
    title: "FIFO Resume Mate",
    category: "Digital product funnel",
    summary:
      "Structured a conversion-focused landing page for a paid digital service, including pricing psychology, clean CTA flow, and checkout-ready user journeys.",
    image: "/work/fifo-resume-mate-case-study.jpg",
    imageAlt: "FIFO Resume Mate case study screenshot",
    bullets: [
      "Landing page designed to convert traffic into buyers",
      "Pricing section built to guide plan selection",
      "Digital product funnel thinking, not just brochure design",
      "Strong fit for service businesses and lead-gen pages",
    ],
    href: "/work/fifo-resume-mate",
  },
  {
    title: "FNQ Lodge",
    category: "WordPress booking website",
    summary:
      "Cleaned up and improved a booking-focused WordPress website with a stronger user journey, mobile usability, and a clearer path to reservation.",
    image: "/work/fnq-lodge-case-study.jpg",
    imageAlt: "FNQ Lodge booking website case study screenshot",
    bullets: [
      "WordPress layout and booking flow improvements",
      "Mobile-friendly accommodation experience",
      "Better reservation path and cleaner UX",
      "Ideal proof for tourism, stays, and service sites",
    ],
    href: "/work/fnq-lodge",
  },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
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
              Next.js / Vercel • Shopify • WordPress fixes
            </div>

            <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              High-performance websites built to drive enquiries and sales.
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
              I build modern websites, Shopify stores, and sharp WordPress upgrades for Australian businesses that want
              better presentation, better UX, and better conversion paths.
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
                View case studies
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-3 text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-3 py-1">
                ✅ Modern builds with Next.js / Vercel
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-3 py-1">
                ✅ Shopify stores with real sales proof
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-3 py-1">
                ✅ WordPress upgrades and fixes
              </span>
            </div>

            <div className="mx-auto mt-6 flex max-w-3xl flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs font-medium text-muted-foreground">
              <span>Built with Next.js</span>
              <span className="opacity-40">•</span>
              <span>Shopify</span>
              <span className="opacity-40">•</span>
              <span>WordPress</span>
              <span className="opacity-40">•</span>
              <span>Vercel</span>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-muted/30">
        <div className="container mx-auto px-6 py-12 lg:px-8">
          <div className="grid gap-6 text-center md:grid-cols-3">
            <div>
              <div className="text-sm font-semibold text-foreground">Built by an operator</div>
              <p className="mt-2 text-sm text-muted-foreground">
                Real-world experience building and marketing digital businesses, not just pretty mockups.
              </p>
            </div>
            <div>
              <div className="text-sm font-semibold text-foreground">Focused on outcomes</div>
              <p className="mt-2 text-sm text-muted-foreground">
                Stronger UX, better trust, cleaner structure, and clearer paths to purchase or enquiry.
              </p>
            </div>
            <div>
              <div className="text-sm font-semibold text-foreground">Modern stack first</div>
              <p className="mt-2 text-sm text-muted-foreground">
                New builds lean modern. Existing WordPress sites can still be cleaned up, fixed, and improved.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="work" className="container mx-auto px-6 py-16 lg:px-8 lg:py-24">
        <SectionHeading
          eyebrow="Featured work"
          title="Real projects, presented properly"
          subtitle="Three different business models. Three different proof points. All aimed at trust, conversion, and cleaner digital experiences."
        />

        <div className="space-y-8">
          {CASE_STUDIES.map((item) => (
            <Card
              key={item.title}
              className="premium-card overflow-hidden rounded-3xl border border-border bg-card/70 p-0 shadow-[0_10px_30px_rgba(0,0,0,0.08)]"
            >
              <div className="grid gap-0 lg:grid-cols-[1.15fr_0.85fr]">
                <div className="border-b border-border lg:border-b-0 lg:border-r">
                  <Link href={item.href} className="block">
                    <img
                      src={item.image}
                      alt={item.imageAlt}
                      className="h-full w-full object-cover transition-transform duration-300 hover:scale-[1.01]"
                      loading="lazy"
                    />
                  </Link>
                </div>

                <div className="p-6 sm:p-8 lg:p-10">
                  <div className="mb-3 inline-flex rounded-full border border-border bg-background/70 px-3 py-1 text-xs font-medium text-muted-foreground">
                    {item.category}
                  </div>

                  <h3 className="text-2xl font-bold tracking-tight text-foreground">{item.title}</h3>

                  <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
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
                        <span className="text-sm text-foreground">{bullet}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8">
                    <Button asChild variant="outline">
                      <Link href={item.href}>
                        View case study
                        <ArrowRight className="ml-2 h-4 w-4" />
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
            title="What I actually want to be hired for"
            subtitle="Modern custom builds, Shopify ecommerce work, and selective WordPress fixes where it makes sense."
          />

          <div className="grid gap-6 md:grid-cols-3">
            <Card className="premium-card rounded-3xl p-8 shadow-sm">
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[hsl(var(--brand-accent))/0.15]">
                <MonitorSmartphone className="h-6 w-6 text-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Modern websites</h3>
              <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
                Premium custom sites built with modern tooling and deployed properly. Best for businesses that want
                something cleaner, faster, and stronger than a typical template site.
              </p>
              <div className="mt-5 text-sm font-medium text-foreground">Next.js / Vercel builds</div>
            </Card>

            <Card className="premium-card rounded-3xl p-8 shadow-sm">
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[hsl(var(--brand-warm))/0.18]">
                <ShoppingBag className="h-6 w-6 text-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Shopify ecommerce</h3>
              <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
                Product-focused stores with better presentation, cleaner purchase flow, and stronger mobile UX. Great
                for brands that want a store that feels more considered and converts better.
              </p>
              <div className="mt-5 text-sm font-medium text-foreground">Store builds + conversion improvements</div>
            </Card>

            <Card className="premium-card rounded-3xl p-8 shadow-sm">
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/20">
                <Wrench className="h-6 w-6 text-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">WordPress fixes</h3>
              <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
                Existing WordPress site looking tired, clunky, or annoying? I can help clean up layout issues, contact
                flow, booking pages, and general front-end presentation.
              </p>
              <div className="mt-5 text-sm font-medium text-foreground">Fixes, upgrades, and tidy-ups</div>
            </Card>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-16 lg:px-8 lg:py-24">
        <SectionHeading
          eyebrow="Process"
          title="Simple process, clean delivery"
          subtitle="No agency theatre. Just clear scope, clean work, and a better end result."
        />

        <div className="grid gap-6 md:grid-cols-4">
          {[
            {
              step: "01",
              title: "Scope",
              text: "You send the current site, business details, goals, and what’s annoying right now.",
            },
            {
              step: "02",
              title: "Direction",
              text: "I map the best fit: fresh build, Shopify work, or a more targeted upgrade.",
            },
            {
              step: "03",
              title: "Build",
              text: "I build or refine the site with a strong focus on clarity, responsiveness, and flow.",
            },
            {
              step: "04",
              title: "Launch",
              text: "You get a cleaner digital presence that feels more premium and works harder.",
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
            title="Smaller fixes are easy. Bigger builds are scoped properly."
            subtitle="I’ve removed the bargain-bin feel here on purpose. Small WordPress upgrades can be quoted quickly. Proper builds get scoped to match the job."
          />

          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
            <Card className="premium-card rounded-3xl p-8 shadow-sm lg:p-10">
              <h3 className="text-2xl font-bold text-foreground">WordPress fixes & upgrades</h3>
              <p className="mt-3 text-pretty text-muted-foreground">
                Best for existing websites that need layout cleanup, mobile fixes, contact flow improvements, booking
                page tweaks, or general front-end tidy-up work.
              </p>

              <div className="mt-6 space-y-3">
                {[
                  "Mobile layout cleanup",
                  "Contact and enquiry improvements",
                  "Broken sections or awkward UX fixes",
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
              <h3 className="text-2xl font-bold text-foreground">Modern builds & Shopify projects</h3>
              <p className="mt-3 text-pretty text-muted-foreground">
                Best for businesses that want a stronger digital presence from the ground up, with better structure,
                better presentation, and a more premium customer experience.
              </p>

              <div className="mt-6 space-y-3">
                {[
                  "Custom modern site builds",
                  "Shopify storefronts and product presentation",
                  "Digital product or lead-gen funnels",
                  "Scoped to fit the actual commercial value of the project",
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
        <SectionHeading eyebrow="FAQ" title="Quick answers" subtitle="Simple stuff, no smoke machine." />

        <div className="mx-auto max-w-3xl">
          <Card className="premium-card rounded-3xl p-6 shadow-sm sm:p-8">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left text-base font-semibold">
                  Do you still work on WordPress?
                </AccordionTrigger>
                <AccordionContent className="leading-relaxed text-muted-foreground">
                  Yes — especially for fixes, upgrades, layout cleanup, booking flow improvements, and general front-end
                  tidy-up work. For brand new premium builds, I prefer modern stacks where it makes sense.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left text-base font-semibold">
                  Are you mainly doing Shopify now too?
                </AccordionTrigger>
                <AccordionContent className="leading-relaxed text-muted-foreground">
                  Yes. Shopify is absolutely part of the offer now, especially for product brands that want stronger
                  presentation, cleaner product pages, and better mobile UX.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left text-base font-semibold">
                  Can you help if I already have a website?
                </AccordionTrigger>
                <AccordionContent className="leading-relaxed text-muted-foreground">
                  Yep. Send the link and tell me what feels off. I’ll tell you quickly whether it’s a straightforward
                  fix, a worthwhile upgrade, or something better rebuilt properly.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left text-base font-semibold">
                  What should I send you to start?
                </AccordionTrigger>
                <AccordionContent className="leading-relaxed text-muted-foreground">
                  Business name, current site if you have one, a rough idea of what you need, your main goal, and any
                  deadlines. That’s enough to start the conversation.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </Card>
        </div>
      </section>

      <section className="border-t border-border bg-muted/30">
        <div className="container mx-auto px-6 py-16 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Want your website to feel sharper, faster, and more premium?
            </h2>

            <p className="mt-4 text-pretty text-lg text-muted-foreground">
              Send me the link or tell me what you want to build. I’ll tell you straight whether it’s a quick fix, a
              Shopify job, or something worth building properly from scratch.
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
              Modern websites, Shopify stores, and sharp WordPress upgrades
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}