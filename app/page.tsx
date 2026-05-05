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
const FORMSUBMIT_ENDPOINT = "https://formsubmit.co/desbarriere.au@gmail.com"
const UPWORK_URL = "https://www.upwork.com/freelancers/~01bf146bd0e95935ec"

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
  align?: "center" | "left"
  dark?: boolean
}) {
  const alignClass = props.align === "left" ? "text-left mx-0" : "text-center mx-auto"
  const titleClass = props.dark ? "text-white" : "text-foreground"
  const subtitleClass = props.dark ? "text-white/72" : "text-muted-foreground"
  const badgeClass = props.dark
    ? "border-white/15 bg-white/10 text-white/75"
    : "border-border bg-white/90 text-muted-foreground"

  return (
    <div className={`mb-12 max-w-3xl sm:mb-14 ${alignClass}`}>
      {props.eyebrow ? (
        <div className={`mb-4 flex ${props.align === "left" ? "justify-start" : "justify-center"}`}>
          <div className={`rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] shadow-sm ${badgeClass}`}>
            {props.eyebrow}
          </div>
        </div>
      ) : null}

      <h2 className={`text-balance text-4xl font-bold tracking-tight sm:text-5xl ${titleClass}`}>
        {props.title}
      </h2>

      {props.subtitle ? (
        <p className={`mt-4 text-pretty text-base leading-relaxed sm:text-lg ${subtitleClass}`}>
          {props.subtitle}
        </p>
      ) : null}
    </div>
  )
}

function BulletList({
  items,
  iconTone = "accent",
  dark = false,
}: {
  items: string[]
  iconTone?: "accent" | "warm"
  dark?: boolean
}) {
  const iconClass =
    iconTone === "warm"
      ? "text-[#F59E0B]"
      : "text-[#0EA5A8]"

  return (
    <div className="space-y-3">
      {items.map((item) => (
        <div key={item} className="flex items-start gap-3">
          <Check className={`mt-0.5 h-5 w-5 shrink-0 ${iconClass}`} />
          <span className={`text-sm leading-relaxed sm:text-[15px] ${dark ? "text-white/82" : "text-foreground"}`}>
            {item}
          </span>
        </div>
      ))}
    </div>
  )
}

function BrowserFrame() {
  return (
    <div className="relative mx-auto w-full max-w-[520px]">
      <div className="absolute -left-5 top-10 hidden w-40 rotate-[-8deg] rounded-3xl border border-white/15 bg-white/10 p-4 text-white shadow-2xl backdrop-blur md:block">
        <div className="text-xs font-semibold uppercase tracking-[0.16em] text-white/55">
          Mobile
        </div>
        <div className="mt-2 text-2xl font-bold">Clearer</div>
        <div className="mt-1 text-xs leading-relaxed text-white/65">
          Less friction on phone screens.
        </div>
      </div>

      <div className="absolute -right-4 bottom-10 hidden w-44 rotate-[7deg] rounded-3xl border border-[#F59E0B]/30 bg-[#F59E0B]/15 p-4 text-white shadow-2xl backdrop-blur md:block">
        <div className="text-xs font-semibold uppercase tracking-[0.16em] text-[#FCD38A]">
          Enquiries
        </div>
        <div className="mt-2 text-2xl font-bold">Easier</div>
        <div className="mt-1 text-xs leading-relaxed text-white/70">
          Stronger calls to action.
        </div>
      </div>

      <div className="overflow-hidden rounded-[30px] border border-white/15 bg-white/10 shadow-[0_30px_90px_rgba(0,0,0,0.45)] backdrop-blur">
        <div className="flex items-center gap-2 border-b border-white/10 bg-white/10 px-5 py-4">
          <span className="h-3 w-3 rounded-full bg-[#F59E0B]" />
          <span className="h-3 w-3 rounded-full bg-[#0EA5A8]" />
          <span className="h-3 w-3 rounded-full bg-white/35" />
          <div className="ml-3 h-7 flex-1 rounded-full bg-white/10" />
        </div>

        <div className="bg-[#F8FBFA] p-5">
          <div className="rounded-[24px] bg-[#073B3A] p-6 text-white">
            <div className="inline-flex rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/75">
              Small business website
            </div>
            <div className="mt-5 h-8 w-4/5 rounded-full bg-white/90" />
            <div className="mt-3 h-8 w-3/5 rounded-full bg-white/80" />
            <div className="mt-5 space-y-2">
              <div className="h-3 w-full rounded-full bg-white/25" />
              <div className="h-3 w-5/6 rounded-full bg-white/20" />
              <div className="h-3 w-4/6 rounded-full bg-white/15" />
            </div>
            <div className="mt-6 flex gap-3">
              <div className="h-11 w-36 rounded-full bg-[#F59E0B]" />
              <div className="h-11 w-32 rounded-full border border-white/20 bg-white/10" />
            </div>
          </div>

          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-4">
              <div className="h-4 w-24 rounded-full bg-slate-200" />
              <div className="mt-4 h-16 rounded-2xl bg-[#EAF8FA]" />
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-4">
              <div className="h-4 w-28 rounded-full bg-slate-200" />
              <div className="mt-4 h-16 rounded-2xl bg-[#FFF7EA]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function FeatureCard(props: {
  title: string
  eyebrow: string
  text: string
  tone?: "teal" | "warm" | "dark"
}) {
  const toneClass =
    props.tone === "warm"
      ? "bg-[#FFF7EA]"
      : props.tone === "dark"
        ? "bg-[#073B3A] text-white"
        : "bg-[#EAF8FA]"

  const eyebrowClass = props.tone === "dark" ? "text-white/55" : "text-muted-foreground"
  const textClass = props.tone === "dark" ? "text-white/70" : "text-muted-foreground"

  return (
    <div className={`rounded-[28px] border border-black/5 p-6 shadow-[0_12px_30px_rgba(0,0,0,0.06)] ${toneClass}`}>
      <div className={`text-xs font-semibold uppercase tracking-[0.16em] ${eyebrowClass}`}>
        {props.eyebrow}
      </div>
      <div className="mt-3 text-2xl font-bold tracking-tight">
        {props.title}
      </div>
      <p className={`mt-3 text-sm leading-relaxed ${textClass}`}>{props.text}</p>
    </div>
  )
}

function ServiceCard(props: {
  icon: React.ReactNode
  title: string
  text: string
  detail: string
  tone?: "teal" | "warm" | "blue"
}) {
  const iconBg =
    props.tone === "warm"
      ? "bg-[#F59E0B]/15"
      : props.tone === "blue"
        ? "bg-sky-100"
        : "bg-[#0EA5A8]/15"

  return (
    <Card className="group rounded-[30px] border border-black/5 bg-white p-8 shadow-[0_16px_45px_rgba(7,59,58,0.09)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(7,59,58,0.14)]">
      <div className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl ${iconBg}`}>
        {props.icon}
      </div>
      <h3 className="text-2xl font-semibold text-foreground">{props.title}</h3>
      <p className="mt-3 text-pretty text-base leading-relaxed text-muted-foreground">
        {props.text}
      </p>
      <div className="mt-5 rounded-2xl bg-[#F8FBFA] px-4 py-3 text-sm font-medium text-foreground">
        {props.detail}
      </div>
    </Card>
  )
}

function WorkCard({ item, index }: { item: WorkExample; index: number }) {
  const imageFirst = index % 2 === 0

  return (
    <Card className="group overflow-hidden rounded-[34px] border border-black/5 bg-white p-0 shadow-[0_20px_60px_rgba(7,59,58,0.12)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_26px_70px_rgba(7,59,58,0.18)]">
      <div className="grid gap-0 lg:grid-cols-2">
        <Link
          href={item.href}
          className={`relative block min-h-[300px] overflow-hidden bg-slate-100 ${imageFirst ? "" : "lg:order-2"}`}
        >
          <img
            src={item.image}
            alt={item.imageAlt}
            className="h-full min-h-[300px] w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
            loading="lazy"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#073B3A]/80 via-[#073B3A]/10 to-transparent" />
          <div className="pointer-events-none absolute bottom-5 left-5 right-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-white shadow-lg backdrop-blur">
              {item.category}
              <ArrowRight className="h-3.5 w-3.5" />
            </div>
          </div>
        </Link>

        <div className="p-6 sm:p-8 lg:p-10">
          <div className="mb-3 inline-flex rounded-full border border-[#0EA5A8]/20 bg-[#EAF8FA] px-3 py-1 text-xs font-semibold text-[#073B3A] shadow-sm">
            {item.label}
          </div>

          <h3 className="text-3xl font-bold tracking-tight text-foreground">
            {item.title}
          </h3>

          <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            {item.summary}
          </p>

          {item.stats?.length ? (
            <div className="mt-6 grid grid-cols-2 gap-3">
              {item.stats.map((stat, statIndex) => (
                <div
                  key={stat}
                  className={`rounded-2xl border px-4 py-3 text-sm font-semibold shadow-sm ${
                    statIndex === 0 || statIndex === 2
                      ? "border-[#0EA5A8]/20 bg-[#EAF8FA] text-[#073B3A]"
                      : "border-[#F59E0B]/20 bg-[#FFF7EA] text-[#073B3A]"
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
            <Button asChild className="bg-[#073B3A] text-white shadow-sm hover:bg-[#052f2e]">
              <Link href={item.href}>
                {item.cta}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>

            <Button variant="outline" asChild className="bg-white shadow-sm">
              <Link href="#contact">
                <Mail className="mr-2 h-4 w-4" />
                Start something similar
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </Card>
  )
}

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F8FBFA]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#073B3A]/92 text-white backdrop-blur">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="flex items-center gap-2 text-base font-semibold tracking-tight text-white sm:text-lg"
          >
            <img
              src="/web-app-manifest-512x512.png"
              alt="DB Websites logo"
              className="h-8 w-8 rounded-full border border-white/20 shadow-sm"
            />
            DB Websites
          </Link>

          <nav className="flex items-center gap-4 sm:gap-6">
            <Link
              href="#work"
              className="hidden text-sm font-medium text-white/70 transition-colors hover:text-white sm:inline-block"
            >
              Work
            </Link>
            <Link
              href="#services"
              className="hidden text-sm font-medium text-white/70 transition-colors hover:text-white sm:inline-block"
            >
              Services
            </Link>
            <Link
              href="#pricing"
              className="hidden text-sm font-medium text-white/70 transition-colors hover:text-white sm:inline-block"
            >
              Pricing
            </Link>
            <Link
              href="#faq"
              className="hidden text-sm font-medium text-white/70 transition-colors hover:text-white sm:inline-block"
            >
              FAQ
            </Link>

            <Button asChild className="bg-[#F59E0B] text-[#111827] shadow-md hover:bg-[#f8ae2f]">
              <Link href="#contact">
                <Mail className="mr-2 h-4 w-4" />
                Start a project
              </Link>
            </Button>
          </nav>
        </div>
      </header>

      <section className="relative overflow-hidden bg-[#073B3A] text-white">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(14,165,168,0.32),transparent_36%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(245,158,11,0.24),transparent_34%)]" />
          <div className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-white/5 blur-3xl" />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#F8FBFA] to-transparent" />
        </div>

        <div className="container relative z-[1] mx-auto px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="text-center lg:text-left">
              <div className="mb-5 inline-flex rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white/75 shadow-sm backdrop-blur">
                Websites • online stores • practical fixes
              </div>

              <h1 className="text-balance text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
                Websites that make small businesses look sharper and win more trust
              </h1>

              <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-white/75 sm:text-xl lg:mx-0">
                I build and improve websites for small businesses that need stronger
                visuals, clearer messaging, better mobile flow, and more confidence
                from customers.
              </p>

              <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
                <Button
                  size="lg"
                  asChild
                  className="bg-[#F59E0B] text-[#111827] shadow-xl hover:bg-[#f8ae2f]"
                >
                  <Link href="#contact">
                    <Mail className="mr-2 h-4 w-4" />
                    Start a project
                  </Link>
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="border-white/20 bg-white/10 text-white shadow-sm backdrop-blur hover:bg-white/15 hover:text-white"
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

              <div className="mt-8 grid gap-3 text-left sm:grid-cols-3">
                {[
                  "Real business projects",
                  "Shopify, WordPress, custom builds",
                  "Based in Far North Queensland",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/12 bg-white/8 px-4 py-3 text-sm font-medium text-white/82 shadow-sm backdrop-blur"
                  >
                    <Check className="mb-2 h-4 w-4 text-[#F59E0B]" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <BrowserFrame />
          </div>
        </div>
      </section>

      <section className="bg-[#F8FBFA] px-4 pb-10 sm:px-6 lg:px-8">
        <div className="container mx-auto -mt-8 grid gap-5 md:grid-cols-3">
          <FeatureCard
            eyebrow="Not just looks"
            title="A stronger first impression"
            text="A better website should make people understand what you do, trust you faster, and feel confident taking the next step."
            tone="teal"
          />
          <FeatureCard
            eyebrow="Customer flow"
            title="Less friction, more action"
            text="Clear pages, strong calls to action, and better mobile layouts help stop visitors from dropping off."
            tone="warm"
          />
          <FeatureCard
            eyebrow="Practical upgrades"
            title="Fix what’s hurting trust"
            text="Weak layouts, dated visuals, awkward forms, and confusing pages quietly cost businesses enquiries."
            tone="dark"
          />
        </div>
      </section>

      <section className="bg-[#FFF7EA]">
        <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <SectionHeading
            eyebrow="Client feedback"
            title="Real feedback from real projects"
            subtitle="The goal is simple. Build websites that look better, feel clearer, and help the business move forward."
          />

          <div className="mx-auto max-w-4xl">
            <Card className="overflow-hidden rounded-[34px] border border-[#F59E0B]/20 bg-white shadow-[0_20px_60px_rgba(120,70,0,0.12)]">
              <div className="grid gap-0 lg:grid-cols-[0.75fr_1.25fr]">
                <div className="bg-[#073B3A] p-8 text-white sm:p-10">
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#FCD38A]">
                    Verified client
                  </div>
                  <div className="mt-4 text-4xl font-bold">5.0 feel</div>
                  <p className="mt-3 text-sm leading-relaxed text-white/68">
                    This is the kind of trust signal the site should be showing more strongly.
                  </p>
                  <div className="mt-6 flex gap-1 text-[#F59E0B]">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                </div>

                <div className="p-8 sm:p-10">
                  <p className="text-pretty text-xl leading-relaxed text-foreground sm:text-2xl">
                    “Love your work and passion Des and thanks very much for going above and beyond with all you are doing for Tripple Pluggers and continue to do 👍”
                  </p>

                  <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                    <a
                      href="https://tripplepluggers.com.au"
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full border border-border bg-[#F8FBFA] px-4 py-2 font-medium text-foreground underline-offset-4 hover:underline"
                    >
                      Tripple Pluggers
                    </a>
                    <span className="rounded-full border border-border bg-[#F8FBFA] px-4 py-2">
                      Ecommerce project
                    </span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="bg-[#F8FBFA]">
        <div className="container mx-auto px-4 py-14 sm:px-6 lg:px-8">
          <div className="grid gap-8 text-center md:grid-cols-3">
            <div className="rounded-[28px] bg-white p-6 shadow-[0_14px_40px_rgba(7,59,58,0.07)]">
              <div className="text-base font-semibold text-foreground">
                Built with real business experience
              </div>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Not design for design’s sake. Real-world understanding of offers,
                customer trust, selling online, and making websites pull their weight.
              </p>
            </div>
            <div className="rounded-[28px] bg-white p-6 shadow-[0_14px_40px_rgba(7,59,58,0.07)]">
              <div className="text-base font-semibold text-foreground">
                Stronger visuals without the stock-photo feel
              </div>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                My photography background helps create sites that feel sharper,
                more believable, and more premium from the first glance.
              </p>
            </div>
            <div className="rounded-[28px] bg-white p-6 shadow-[0_14px_40px_rgba(7,59,58,0.07)]">
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

      <section className="relative overflow-hidden bg-[#073B3A] text-white">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(14,165,168,0.30),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(245,158,11,0.20),transparent_30%)]" />
        <div className="container relative z-[1] mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-4 inline-flex rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white/70 shadow-sm">
              Far North Queensland and Australia-wide
            </div>

            <h2 className="text-balance text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Website help for businesses across Cairns, the Tablelands, the Cassowary Coast and beyond
            </h2>
            <p className="mt-5 text-pretty text-lg leading-relaxed text-white/72">
              I work with local service businesses, online stores, accommodation
              businesses, and growing brands that need a website that feels current,
              works properly on mobile, and makes it easier for customers to take the
              next step.
            </p>
            <p className="mt-4 text-pretty text-base leading-relaxed text-white/62 sm:text-lg">
              Shopify, WordPress, and modern custom business websites, depending on
              what makes the most sense for the job.
            </p>
          </div>
        </div>
      </section>

      <section id="work" className="bg-[#F8FBFA]">
        <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <SectionHeading
            eyebrow="Selected work"
            title="Examples of recent work"
            subtitle="Real projects with cleaner structure, stronger visuals, and a clearer path for customers."
          />

          <div className="grid gap-8">
            {WORK_EXAMPLES.map((item, index) => (
              <WorkCard key={item.title} item={item} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="bg-[#EAF8FA]">
        <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <SectionHeading
            eyebrow="Services"
            title="How I can help"
            subtitle="New websites, online stores, and practical improvements for sites that feel outdated, unclear, or awkward to use."
          />

          <div className="grid gap-6 md:grid-cols-3">
            <ServiceCard
              icon={<MonitorSmartphone className="h-6 w-6 text-[#073B3A]" />}
              title="New websites"
              text="Clean, modern business websites with clearer messaging, better layout, and a stronger first impression."
              detail="Business websites, landing pages, and custom builds"
              tone="teal"
            />

            <ServiceCard
              icon={<ShoppingBag className="h-6 w-6 text-[#073B3A]" />}
              title="Online stores"
              text="Ecommerce pages that look sharper, feel easier to shop, and remove the little bits of friction that hurt sales."
              detail="Shopify stores, product pages, and conversion improvements"
              tone="warm"
            />

            <ServiceCard
              icon={<Wrench className="h-6 w-6 text-[#073B3A]" />}
              title="Website fixes"
              text="Mobile fixes, layout cleanup, booking flow improvements, page polish, and smarter upgrades to sites that are nearly there."
              detail="Fixes, cleanups, redesigns, and upgrades"
              tone="blue"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#073B3A] text-white">
        <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.95fr]">
            <div>
              <SectionHeading
                align="left"
                dark
                eyebrow="Visuals matter"
                title="Strong websites usually start with stronger visuals"
                subtitle="A lot of business websites feel cheap because the visuals feel cheap. Generic stock images, weak crops, inconsistent photos, or no visual direction at all."
              />

              <p className="text-base leading-relaxed text-white/72 sm:text-lg">
                I bring a photography background into the process, which helps create
                a site that feels cleaner, more believable, and more premium from the
                first glance.
              </p>

              <p className="mt-4 text-sm text-white/60">
                You can see some of my photography work at{" "}
                <a
                  href="https://outbacklens.com.au"
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium text-[#FCD38A] underline underline-offset-4 hover:text-[#F59E0B]"
                >
                  Outback Lens
                </a>
              </p>

              <div className="mt-6">
                <BulletList
                  dark
                  items={[
                    "Better first impressions",
                    "More trust from customers",
                    "Less reliance on generic stock imagery",
                    "A more polished brand feel across the whole site",
                  ]}
                />
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-5 rounded-[34px] bg-[#0EA5A8]/20 blur-2xl" />
              <div className="relative overflow-hidden rounded-[34px] border border-white/15 bg-white/10 p-3 shadow-[0_28px_80px_rgba(0,0,0,0.32)]">
                <img
                  src={VISUALS_IMAGE}
                  alt="Lifestyle product photography example"
                  className="block aspect-[4/3] w-full rounded-[26px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#FFF7EA]">
        <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
            <div className="flex justify-center lg:justify-end lg:pr-6">
              <div className="relative w-full max-w-[420px]">
                <div className="absolute -inset-4 rounded-[34px] bg-[#F59E0B]/18 blur-2xl" />
                <div className="relative overflow-hidden rounded-[30px] border border-black/5 bg-white p-3 shadow-[0_24px_70px_rgba(120,70,0,0.18)]">
                  <img
                    src="/about-des.jpg"
                    alt="Des from DB Websites"
                    className="block w-full rounded-[24px] object-cover"
                  />
                </div>
              </div>
            </div>

            <div>
              <div className="mb-3 inline-flex rounded-full border border-[#F59E0B]/20 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground shadow-sm">
                About
              </div>

              <h2 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                Built by someone who actually runs businesses
              </h2>

              <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                I’m Des. I build and improve websites for small businesses that want to
                look more professional, build trust faster, and turn visitors into real
                enquiries, bookings, or sales.
              </p>

              <p className="mt-3 text-base leading-relaxed text-muted-foreground sm:text-lg">
                I’m not just focused on making websites look nice. I care about clarity,
                customer trust, stronger visuals, and giving people a cleaner path to take
                action.
              </p>

              <div className="mt-6 rounded-[28px] bg-white p-6 shadow-[0_14px_40px_rgba(120,70,0,0.10)]">
                <BulletList
                  items={[
                    "Real-world business experience",
                    "A strong eye for visuals and presentation",
                    "Practical thinking around enquiries, bookings, and sales",
                    "Focused on cleaner customer flow, not just design",
                  ]}
                  iconTone="warm"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F8FBFA]">
        <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <SectionHeading
            eyebrow="How it works"
            title="Simple process, straight up"
            subtitle="Most projects are easier once we’ve looked at what you already have, what’s not working, and what the site actually needs to do."
          />

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                number: "1",
                title: "Send through the details",
                text: "Send your business name, current website if you have one, and what you want help with.",
              },
              {
                number: "2",
                title: "I look at what’s needed",
                text: "I’ll tell you whether it looks like a tidy-up, a bigger upgrade, or something that should be rebuilt properly.",
              },
              {
                number: "3",
                title: "We get it moving",
                text: "Once the scope is clear, I’ll get started on the fixes, redesign, or new build.",
              },
            ].map((step) => (
              <Card
                key={step.number}
                className="rounded-[30px] border border-black/5 bg-white p-8 shadow-[0_16px_45px_rgba(7,59,58,0.09)]"
              >
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#073B3A] text-sm font-bold text-white shadow-md">
                  {step.number}
                </div>
                <h3 className="mt-5 text-xl font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {step.text}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="bg-[#EAF8FA]">
        <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <SectionHeading
            eyebrow="Pricing"
            title="Straightforward pricing guidance"
            subtitle="Smaller jobs can usually be quoted quickly. Larger projects are priced properly based on scope, platform, and what the website needs to do."
          />

          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
            <Card className="rounded-[34px] border border-black/5 bg-white p-8 shadow-[0_18px_55px_rgba(7,59,58,0.12)] lg:p-10">
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

              <div className="mt-8 rounded-[26px] bg-[#073B3A] p-6 text-white">
                <div className="text-sm font-semibold text-white/60">
                  Smaller improvement jobs
                </div>
                <div className="mt-2 text-5xl font-bold tracking-tight">
                  From $250
                </div>
                <div className="mt-1 text-sm text-white/60">
                  AUD depending on scope
                </div>
              </div>
            </Card>

            <Card className="rounded-[34px] border border-[#F59E0B]/30 bg-white p-8 shadow-[0_18px_55px_rgba(120,70,0,0.13)] lg:p-10">
              <div className="mb-3 inline-flex rounded-full bg-[#FFF7EA] px-3 py-1 text-xs font-semibold text-[#073B3A]">
                Bigger impact
              </div>
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

              <div className="mt-8 rounded-[26px] bg-[#FFF7EA] p-6">
                <div className="text-sm font-semibold text-muted-foreground">
                  Typical starting point
                </div>
                <div className="mt-2 text-5xl font-bold tracking-tight text-foreground">
                  $750
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
              <Button size="lg" asChild className="bg-[#073B3A] text-white shadow-md hover:bg-[#052f2e]">
                <Link href="#contact">
                  <Mail className="mr-2 h-4 w-4" />
                  Start a project
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="bg-[#F8FBFA]">
        <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <SectionHeading
            eyebrow="FAQ"
            title="Quick answers"
            subtitle="Simple answers, straight up."
          />

          <div className="mx-auto max-w-3xl">
            <Card className="rounded-[34px] border border-black/5 bg-white p-6 shadow-[0_18px_55px_rgba(7,59,58,0.10)] sm:p-8">
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
        </div>
      </section>

      <section id="contact" className="relative overflow-hidden bg-[#073B3A] text-white">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(14,165,168,0.28),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(245,158,11,0.22),transparent_34%)]" />

        <div className="container relative z-[1] mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid items-start gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <div className="mb-3 inline-flex rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white/70 shadow-sm">
                Start a project
              </div>

              <h2 className="text-balance text-4xl font-bold tracking-tight text-white sm:text-5xl">
                Tell me what you need fixed, built, or improved
              </h2>

              <p className="mt-4 text-pretty text-lg leading-relaxed text-white/72">
                Send through a few details and I’ll tell you whether it looks like a quick
                fix, a larger upgrade, or a fresh build.
              </p>

              <div className="mt-8 rounded-[30px] border border-white/15 bg-white/10 p-6 shadow-xl backdrop-blur">
                <div className="text-sm font-semibold uppercase tracking-[0.16em] text-[#FCD38A]">
                  Good fit for
                </div>
                <div className="mt-5">
                  <BulletList
                    dark
                    iconTone="warm"
                    items={[
                      "Small businesses that need a sharper website",
                      "Existing sites that feel dated or clunky",
                      "Online stores that need clearer product pages",
                      "Booking, contact, and enquiry flow improvements",
                    ]}
                  />
                </div>

                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="mt-7 border-white/20 bg-white/10 text-white hover:bg-white/15 hover:text-white"
                >
                  <Link
                    href={FACEBOOK_MESSENGER_URL}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Message me instead
                  </Link>
                </Button>
              </div>
            </div>

            <form
              className="rounded-[34px] border border-white/12 bg-white p-6 text-foreground shadow-[0_30px_90px_rgba(0,0,0,0.35)] sm:p-8"
              action={FORMSUBMIT_ENDPOINT}
              method="POST"
            >
              <input
                type="hidden"
                name="_subject"
                value="New project enquiry from DB Websites"
              />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_captcha" value="false" />
              <input
                type="hidden"
                name="_next"
                value="https://dbwebsites.au/thank-you"
              />
              <input
                type="text"
                name="_honey"
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />

              <div className="mb-6 rounded-[24px] bg-[#EAF8FA] p-5">
                <div className="text-sm font-semibold text-[#073B3A]">
                  Project enquiry
                </div>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  The more detail you send, the easier it is for me to point you in the right direction.
                </p>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label className="mb-2 block text-sm font-medium text-foreground">
                    Business name
                  </label>
                  <input
                    type="text"
                    name="Business name"
                    required
                    className="w-full rounded-2xl border border-border bg-[#F8FBFA] px-4 py-3 text-sm text-foreground outline-none transition focus:border-[#073B3A]"
                    placeholder="Your business name"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-foreground">
                    Your name
                  </label>
                  <input
                    type="text"
                    name="Name"
                    required
                    className="w-full rounded-2xl border border-border bg-[#F8FBFA] px-4 py-3 text-sm text-foreground outline-none transition focus:border-[#073B3A]"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-foreground">
                    Email
                  </label>
                  <input
                    type="email"
                    name="Email"
                    required
                    className="w-full rounded-2xl border border-border bg-[#F8FBFA] px-4 py-3 text-sm text-foreground outline-none transition focus:border-[#073B3A]"
                    placeholder="you@example.com"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="mb-2 block text-sm font-medium text-foreground">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="Phone"
                    className="w-full rounded-2xl border border-border bg-[#F8FBFA] px-4 py-3 text-sm text-foreground outline-none transition focus:border-[#073B3A]"
                    placeholder="Your phone number"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="mb-2 block text-sm font-medium text-foreground">
                    Current website
                  </label>
                  <input
                    type="text"
                    name="Current website"
                    className="w-full rounded-2xl border border-border bg-[#F8FBFA] px-4 py-3 text-sm text-foreground outline-none transition focus:border-[#073B3A]"
                    placeholder="https://"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="mb-2 block text-sm font-medium text-foreground">
                    What do you need help with?
                  </label>
                  <textarea
                    name="Project details"
                    rows={6}
                    required
                    className="w-full rounded-2xl border border-border bg-[#F8FBFA] px-4 py-3 text-sm text-foreground outline-none transition focus:border-[#073B3A]"
                    placeholder="New website, online store, fixes, redesign, booking flow improvements..."
                  />
                </div>
              </div>

              <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
                <Button
                  type="submit"
                  size="lg"
                  className="bg-[#F59E0B] text-[#111827] shadow-md hover:bg-[#f8ae2f]"
                >
                  <Mail className="mr-2 h-4 w-4" />
                  Send enquiry
                </Button>

                <Button
                  type="button"
                  variant="outline"
                  size="lg"
                  asChild
                  className="bg-white shadow-sm"
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

      <footer className="bg-[#052f2e] text-white">
        <div className="container mx-auto px-4 py-10 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-semibold">© DB Websites</p>

            <p className="mt-1 text-sm text-white/60">
              Websites, online stores, and practical fixes for small businesses
            </p>

            <div className="mt-3 flex flex-wrap items-center justify-center gap-4 text-sm text-white/60">
              <a
                href={UPWORK_URL}
                target="_blank"
                rel="noreferrer"
                className="underline hover:text-white"
              >
                Upwork
              </a>

              <a
                href="https://www.facebook.com/dbwebsitesau"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 underline hover:text-white"
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