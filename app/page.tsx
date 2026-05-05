"use client"

import type React from "react"
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

const BRAND = {
  light: "#6BD4E8",
  primary: "#59C7E6",
  deep: "#1E4E57",
  dark: "#14393F",
  warm: "#E5A73B",
  cream: "#FFF8EA",
  soft: "#EAF8FC",
  page: "#F8FBFC",
}

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
    stats: ["70 orders", "$4217 revenue", "Live store", "Real checkout flow"],
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

function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  dark = false,
}: {
  eyebrow?: string
  title: string
  subtitle?: string
  align?: "center" | "left"
  dark?: boolean
}) {
  return (
    <div
      className={`mb-10 max-w-3xl sm:mb-12 ${
        align === "left" ? "text-left" : "mx-auto text-center"
      }`}
    >
      {eyebrow ? (
        <div
          className={`mb-4 flex ${
            align === "left" ? "justify-start" : "justify-center"
          }`}
        >
          <div
            className={`rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] shadow-sm ${
              dark
                ? "border-white/20 bg-white/10 text-white/80"
                : "border-slate-200 bg-white text-slate-600"
            }`}
          >
            {eyebrow}
          </div>
        </div>
      ) : null}

      <h2
        className={`text-balance text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl ${
          dark ? "text-white" : "text-slate-950"
        }`}
      >
        {title}
      </h2>

      {subtitle ? (
        <p
          className={`mt-4 text-pretty text-base leading-relaxed sm:text-lg ${
            dark ? "text-white/75" : "text-slate-600"
          }`}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  )
}

function BulletList({
  items,
  warm = false,
  dark = false,
}: {
  items: string[]
  warm?: boolean
  dark?: boolean
}) {
  return (
    <div className="space-y-3">
      {items.map((item) => (
        <div key={item} className="flex items-start gap-3">
          <Check
            className={`mt-0.5 h-5 w-5 shrink-0 ${
              warm ? "text-[#E5A73B]" : "text-[#59C7E6]"
            }`}
          />
          <span
            className={`text-sm leading-relaxed sm:text-[15px] ${
              dark ? "text-white/82" : "text-slate-700"
            }`}
          >
            {item}
          </span>
        </div>
      ))}
    </div>
  )
}

function HeroPreview() {
  return (
    <div className="relative mx-auto w-full max-w-[560px]">
      <div className="absolute -inset-4 rounded-[34px] bg-[#6BD4E8]/20 blur-2xl" />

      <div className="relative rounded-[30px] border border-white/30 bg-white/75 p-3 shadow-[0_24px_70px_rgba(20,57,63,0.18)] backdrop-blur">
        <div className="overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-sm">
          <div className="flex items-center gap-2 border-b border-slate-200 bg-slate-50 px-4 py-3">
            <span className="h-3 w-3 rounded-full bg-[#E5A73B]" />
            <span className="h-3 w-3 rounded-full bg-[#59C7E6]" />
            <span className="h-3 w-3 rounded-full bg-slate-300" />
            <div className="ml-2 h-6 flex-1 rounded-full bg-slate-200" />
          </div>

          <div className="grid gap-3 bg-white p-3">
            <div className="relative overflow-hidden rounded-[20px] bg-slate-100">
              <img
                src="/work/aircon/hero.jpg"
                alt="Air conditioning website preview"
                className="aspect-[16/9] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#14393F]/75 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="inline-flex rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-[#1E4E57]">
                  Recent website project
                </div>
                <div className="mt-3 max-w-sm text-2xl font-bold leading-tight text-white">
                  Cleaner pages. Stronger trust. Easier enquiries.
                </div>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-[18px] border border-slate-200 bg-[#EAF8FC] p-4">
                <div className="text-xs font-semibold uppercase tracking-[0.12em] text-[#1E4E57]/70">
                  Mobile flow
                </div>
                <div className="mt-2 text-xl font-bold text-[#14393F]">
                  Clearer
                </div>
              </div>

              <div className="rounded-[18px] border border-slate-200 bg-[#FFF8EA] p-4">
                <div className="text-xs font-semibold uppercase tracking-[0.12em] text-[#1E4E57]/70">
                  First impression
                </div>
                <div className="mt-2 text-xl font-bold text-[#14393F]">
                  Sharper
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-5 -right-2 hidden max-w-[210px] rounded-2xl border border-white bg-white p-4 shadow-xl sm:block">
        <div className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
          Built for
        </div>
        <div className="mt-1 text-lg font-bold text-[#14393F]">
          Real small businesses
        </div>
      </div>
    </div>
  )
}

function FeatureCard({
  eyebrow,
  title,
  text,
  tone = "blue",
}: {
  eyebrow: string
  title: string
  text: string
  tone?: "blue" | "warm" | "deep"
}) {
  const styles =
    tone === "warm"
      ? "bg-[#FFF8EA]"
      : tone === "deep"
        ? "bg-[#1E4E57] text-white"
        : "bg-[#EAF8FC]"

  return (
    <div
      className={`rounded-[26px] border border-black/5 p-6 shadow-[0_12px_35px_rgba(20,57,63,0.08)] ${styles}`}
    >
      <div
        className={`text-[11px] font-semibold uppercase tracking-[0.12em] ${
          tone === "deep" ? "text-white/60" : "text-slate-500"
        }`}
      >
        {eyebrow}
      </div>
      <div className="mt-3 text-2xl font-bold tracking-tight">{title}</div>
      <p
        className={`mt-3 text-sm leading-relaxed ${
          tone === "deep" ? "text-white/72" : "text-slate-600"
        }`}
      >
        {text}
      </p>
    </div>
  )
}

function ServiceCard({
  icon,
  title,
  text,
  detail,
  tone = "blue",
}: {
  icon: React.ReactNode
  title: string
  text: string
  detail: string
  tone?: "blue" | "warm" | "white"
}) {
  const iconBg =
    tone === "warm"
      ? "bg-[#E5A73B]/16"
      : tone === "white"
        ? "bg-white"
        : "bg-[#59C7E6]/18"

  return (
    <Card className="rounded-[28px] border border-black/5 bg-white p-7 shadow-[0_16px_45px_rgba(20,57,63,0.09)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_60px_rgba(20,57,63,0.14)] sm:p-8">
      <div
        className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl ${iconBg}`}
      >
        {icon}
      </div>
      <h3 className="text-2xl font-semibold text-slate-950">{title}</h3>
      <p className="mt-3 text-pretty text-base leading-relaxed text-slate-600">
        {text}
      </p>
      <div className="mt-5 rounded-2xl bg-[#F8FBFC] px-4 py-3 text-sm font-medium text-[#14393F]">
        {detail}
      </div>
    </Card>
  )
}

function WorkCard({ item, index }: { item: WorkExample; index: number }) {
  const imageFirst = index % 2 === 0

  return (
    <Card className="group overflow-hidden rounded-[30px] border border-black/5 bg-white p-0 shadow-[0_18px_55px_rgba(20,57,63,0.10)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(20,57,63,0.16)]">
      <div className="grid gap-0 lg:grid-cols-2">
        <Link
          href={item.href}
          className={`relative block overflow-hidden bg-slate-100 ${
            imageFirst ? "" : "lg:order-2"
          }`}
        >
          <img
            src={item.image}
            alt={item.imageAlt}
            className="aspect-[16/10] w-full object-cover lg:h-full lg:min-h-[430px]"
            loading="lazy"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#14393F]/82 via-[#14393F]/10 to-transparent" />
          <div className="pointer-events-none absolute bottom-5 left-5 right-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-white shadow-lg backdrop-blur">
              {item.category}
              <ArrowRight className="h-3.5 w-3.5" />
            </div>
          </div>
        </Link>

        <div className="p-6 sm:p-8 lg:p-10">
          <div className="mb-3 inline-flex rounded-full border border-[#59C7E6]/25 bg-[#EAF8FC] px-3 py-1 text-xs font-semibold text-[#1E4E57] shadow-sm">
            {item.label}
          </div>

          <h3 className="text-3xl font-bold tracking-tight text-slate-950">
            {item.title}
          </h3>

          <p className="mt-4 text-pretty text-base leading-relaxed text-slate-600 sm:text-lg">
            {item.summary}
          </p>

          {item.stats?.length ? (
            <div className="mt-6 grid grid-cols-2 gap-3">
              {item.stats.map((stat, statIndex) => (
                <div
                  key={stat}
                  className={`rounded-2xl border px-4 py-3 text-sm font-semibold shadow-sm ${
                    statIndex === 0 || statIndex === 2
                      ? "border-[#59C7E6]/25 bg-[#EAF8FC] text-[#14393F]"
                      : "border-[#E5A73B]/25 bg-[#FFF8EA] text-[#14393F]"
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
            <Button
              asChild
              className="bg-[#1E4E57] text-white shadow-sm hover:bg-[#14393F]"
            >
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
    <div className="min-h-screen bg-[#F8FBFC] text-slate-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/90 backdrop-blur">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="flex items-center gap-2 text-base font-semibold tracking-tight text-[#14393F] sm:text-lg"
          >
            <img
              src="/web-app-manifest-512x512.png"
              alt="DB Websites logo"
              className="h-9 w-9 rounded-full shadow-sm"
            />
            DB Websites
          </Link>

          <nav className="flex items-center gap-4 sm:gap-6">
            <Link
              href="#work"
              className="hidden text-sm font-medium text-slate-600 transition-colors hover:text-[#14393F] sm:inline-block"
            >
              Work
            </Link>
            <Link
              href="#services"
              className="hidden text-sm font-medium text-slate-600 transition-colors hover:text-[#14393F] sm:inline-block"
            >
              Services
            </Link>
            <Link
              href="#pricing"
              className="hidden text-sm font-medium text-slate-600 transition-colors hover:text-[#14393F] sm:inline-block"
            >
              Pricing
            </Link>
            <Link
              href="#faq"
              className="hidden text-sm font-medium text-slate-600 transition-colors hover:text-[#14393F] sm:inline-block"
            >
              FAQ
            </Link>

            <Button
              asChild
              className="bg-[#E5A73B] text-[#14393F] shadow-sm hover:bg-[#efb84e]"
            >
              <Link href="#contact">
                <Mail className="mr-2 h-4 w-4" />
                Start a project
              </Link>
            </Button>
          </nav>
        </div>
      </header>

      <section className="relative overflow-hidden bg-[linear-gradient(180deg,#EAF8FC_0%,#F8FBFC_88%)]">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[-120px] top-[-160px] h-[360px] w-[360px] rounded-full bg-[#6BD4E8]/35 blur-3xl" />
          <div className="absolute right-[-140px] top-[120px] h-[380px] w-[380px] rounded-full bg-[#E5A73B]/18 blur-3xl" />
        </div>

        <div className="container relative z-[1] mx-auto px-4 py-14 sm:px-6 sm:py-18 lg:px-8 lg:py-24">
          <div className="grid items-center gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:gap-14">
            <div className="text-center lg:text-left">
              <div className="mb-5 inline-flex rounded-full border border-[#59C7E6]/30 bg-white/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#1E4E57] shadow-sm">
                Websites • online stores • practical fixes
              </div>

              <h1 className="text-balance text-4xl font-bold tracking-tight text-[#14393F] sm:text-5xl lg:text-6xl">
                Websites that make small businesses look sharper and win more trust
              </h1>

              <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-slate-600 sm:text-lg lg:mx-0">
                I build and improve websites for small businesses that need stronger
                visuals, clearer messaging, better mobile flow, and more confidence
                from customers.
              </p>

              <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
                <Button
                  size="lg"
                  asChild
                  className="bg-[#E5A73B] text-[#14393F] shadow-md hover:bg-[#efb84e]"
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
                  className="border-[#59C7E6]/35 bg-white/80 text-[#14393F] shadow-sm hover:bg-white"
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
                    className="rounded-2xl border border-white bg-white/80 px-4 py-3 text-sm font-medium text-[#14393F] shadow-sm"
                  >
                    <Check className="mb-2 h-4 w-4 text-[#59C7E6]" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <HeroPreview />
          </div>
        </div>
      </section>

      <section className="bg-[#F8FBFC]">
        <div className="container mx-auto grid gap-5 px-4 pb-12 sm:px-6 md:grid-cols-3 lg:px-8">
          <FeatureCard
            eyebrow="Not just looks"
            title="A stronger first impression"
            text="A better website should make people understand what you do, trust you faster, and feel confident taking the next step."
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
            tone="deep"
          />
        </div>
      </section>

      <section className="bg-[#FFF8EA]">
        <div className="container mx-auto px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <SectionHeading
            eyebrow="Client feedback"
            title="Real feedback from real projects"
            subtitle="The goal is simple. Build websites that look better, feel clearer, and help the business move forward."
          />

          <div className="mx-auto max-w-3xl">
            <Card className="rounded-[30px] border border-[#E5A73B]/25 bg-white p-7 shadow-[0_18px_55px_rgba(120,70,0,0.10)] sm:p-9">
              <div className="mb-4 flex justify-center gap-1 text-[#E5A73B]">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>

              <p className="text-pretty text-center text-lg leading-relaxed text-slate-800 sm:text-xl">
                “Love your work and passion Des and thanks very much for going above and beyond with all you are doing for Tripple Pluggers and continue to do 👍”
              </p>

              <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-sm text-slate-600">
                <a
                  href="https://tripplepluggers.com.au"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-slate-200 bg-[#F8FBFC] px-4 py-2 font-medium text-[#14393F] underline-offset-4 hover:underline"
                >
                  Tripple Pluggers
                </a>
                <span className="rounded-full border border-slate-200 bg-[#F8FBFC] px-4 py-2">
                  Verified client
                </span>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="bg-[#F8FBFC]">
        <div className="container mx-auto px-4 py-14 sm:px-6 lg:px-8">
          <div className="grid gap-5 md:grid-cols-3">
            {[
              {
                title: "Built with real business experience",
                text: "Not design for design’s sake. Real-world understanding of offers, customer trust, selling online, and making websites pull their weight.",
              },
              {
                title: "Stronger visuals without the stock-photo feel",
                text: "My photography background helps create sites that feel sharper, more believable, and more premium from the first glance.",
              },
              {
                title: "New builds or sharp upgrades",
                text: "Some projects need a fresh start. Others just need the current site tightened up, simplified, and made better on mobile.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-[26px] bg-white p-6 shadow-[0_12px_35px_rgba(20,57,63,0.07)]"
              >
                <div className="text-base font-semibold text-[#14393F]">
                  {item.title}
                </div>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#1E4E57] text-white">
        <div className="container mx-auto px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-4 inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-white/78 shadow-sm">
              Far North Queensland and Australia-wide
            </div>

            <h2 className="text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Website help for businesses across Cairns, the Tablelands, the Cassowary Coast and beyond
            </h2>
            <p className="mt-5 text-pretty text-base leading-relaxed text-white/74 sm:text-lg">
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

      <section id="work" className="bg-[#F8FBFC]">
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

      <section id="services" className="bg-[#EAF8FC]">
        <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <SectionHeading
            eyebrow="Services"
            title="How I can help"
            subtitle="New websites, online stores, and practical improvements for sites that feel outdated, unclear, or awkward to use."
          />

          <div className="grid gap-6 md:grid-cols-3">
            <ServiceCard
              icon={<MonitorSmartphone className="h-6 w-6 text-[#14393F]" />}
              title="New websites"
              text="Clean, modern business websites with clearer messaging, better layout, and a stronger first impression."
              detail="Business websites, landing pages, and custom builds"
            />

            <ServiceCard
              icon={<ShoppingBag className="h-6 w-6 text-[#14393F]" />}
              title="Online stores"
              text="Ecommerce pages that look sharper, feel easier to shop, and remove the little bits of friction that hurt sales."
              detail="Shopify stores, product pages, and conversion improvements"
              tone="warm"
            />

            <ServiceCard
              icon={<Wrench className="h-6 w-6 text-[#14393F]" />}
              title="Website fixes"
              text="Mobile fixes, layout cleanup, booking flow improvements, page polish, and smarter upgrades to sites that are nearly there."
              detail="Fixes, cleanups, redesigns, and upgrades"
              tone="white"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#F8FBFC]">
        <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
            <div>
              <SectionHeading
                align="left"
                eyebrow="Visuals matter"
                title="Strong websites usually start with stronger visuals"
                subtitle="A lot of business websites feel cheap because the visuals feel cheap. Generic stock images, weak crops, inconsistent photos, or no visual direction at all."
              />

              <div className="rounded-[28px] border border-[#59C7E6]/25 bg-white p-6 shadow-[0_16px_45px_rgba(20,57,63,0.08)]">
                <p className="text-base leading-relaxed text-slate-600 sm:text-lg">
                  I bring a photography background into the process, which helps create
                  a site that feels cleaner, more believable, and more premium from the
                  first glance.
                </p>

                <p className="mt-4 text-sm text-slate-600">
                  You can see some of my photography work at{" "}
                  <a
                    href="https://outbacklens.com.au"
                    target="_blank"
                    rel="noreferrer"
                    className="font-semibold text-[#1E4E57] underline underline-offset-4 hover:text-[#14393F]"
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
            </div>

            <div className="relative">
              <div className="absolute -inset-4 rounded-[34px] bg-[#6BD4E8]/22 blur-2xl" />
              <div className="relative overflow-hidden rounded-[30px] border border-white bg-white p-3 shadow-[0_24px_70px_rgba(20,57,63,0.16)]">
                <img
                  src={VISUALS_IMAGE}
                  alt="Lifestyle product photography example"
                  className="block h-auto w-full rounded-[24px] object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#FFF8EA]">
        <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
            <div className="flex justify-center lg:justify-end lg:pr-6">
              <div className="relative w-full max-w-[420px]">
                <div className="absolute -inset-4 rounded-[34px] bg-[#E5A73B]/18 blur-2xl" />
                <div className="relative overflow-hidden rounded-[30px] border border-white bg-white p-3 shadow-[0_24px_70px_rgba(120,70,0,0.16)]">
                  <img
                    src="/about-des.jpg"
                    alt="Des from DB Websites"
                    className="block h-auto w-full rounded-[24px] object-contain"
                  />
                </div>
              </div>
            </div>

            <div>
              <div className="mb-3 inline-flex rounded-full border border-[#E5A73B]/25 bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-600 shadow-sm">
                About
              </div>

              <h2 className="text-balance text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
                Built by someone who actually runs businesses
              </h2>

              <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
                I’m Des. I build and improve websites for small businesses that want to
                look more professional, build trust faster, and turn visitors into real
                enquiries, bookings, or sales.
              </p>

              <p className="mt-3 text-base leading-relaxed text-slate-600 sm:text-lg">
                I’m not just focused on making websites look nice. I care about clarity,
                customer trust, stronger visuals, and giving people a cleaner path to take
                action.
              </p>

              <div className="mt-6 rounded-[28px] bg-white p-6 shadow-[0_14px_40px_rgba(120,70,0,0.10)]">
                <BulletList
                  warm
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

      <section className="bg-[#F8FBFC]">
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
                className="rounded-[28px] border border-black/5 bg-white p-7 shadow-[0_16px_45px_rgba(20,57,63,0.08)] sm:p-8"
              >
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#59C7E6] text-sm font-bold text-[#14393F] shadow-sm">
                  {step.number}
                </div>
                <h3 className="mt-5 text-xl font-semibold text-slate-950">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {step.text}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="bg-[#EAF8FC]">
        <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <SectionHeading
            eyebrow="Pricing"
            title="Straightforward pricing guidance"
            subtitle="Smaller jobs can usually be quoted quickly. Larger projects are priced properly based on scope, platform, and what the website needs to do."
          />

          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
            <Card className="rounded-[30px] border border-black/5 bg-white p-8 shadow-[0_18px_55px_rgba(20,57,63,0.12)] lg:p-10">
              <h3 className="text-2xl font-bold text-slate-950">Website fixes</h3>
              <p className="mt-3 text-pretty text-slate-600">
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

              <div className="mt-8 rounded-[26px] bg-[#1E4E57] p-6 text-white">
                <div className="text-sm font-semibold text-white/65">
                  Smaller improvement jobs
                </div>
                <div className="mt-2 text-5xl font-bold tracking-tight">
                  From $250
                </div>
                <div className="mt-1 text-sm text-white/65">
                  AUD depending on scope
                </div>
              </div>
            </Card>

            <Card className="rounded-[30px] border border-[#E5A73B]/30 bg-white p-8 shadow-[0_18px_55px_rgba(120,70,0,0.12)] lg:p-10">
              <div className="mb-3 inline-flex rounded-full bg-[#FFF8EA] px-3 py-1 text-xs font-semibold text-[#14393F]">
                Bigger impact
              </div>
              <h3 className="text-2xl font-bold text-slate-950">
                New websites and online stores
              </h3>
              <p className="mt-3 text-pretty text-slate-600">
                Best for businesses that want a stronger online presence with clearer
                pages, better structure, stronger visuals, and a more polished customer
                experience.
              </p>

              <div className="mt-6">
                <BulletList
                  warm
                  items={[
                    "New business websites",
                    "Online stores and product pages",
                    "Landing pages and lead generation pages",
                    "Quoted based on the size, platform, and value of the job",
                  ]}
                />
              </div>

              <div className="mt-8 rounded-[26px] bg-[#FFF8EA] p-6">
                <div className="text-sm font-semibold text-slate-600">
                  Typical starting point
                </div>
                <div className="mt-2 text-5xl font-bold tracking-tight text-slate-950">
                  $750
                </div>
                <div className="mt-1 text-sm text-slate-600">
                  AUD depending on scope
                </div>
              </div>
            </Card>
          </div>

          <div className="mt-8 text-center">
            <p className="mx-auto max-w-2xl text-sm leading-relaxed text-slate-600">
              Not sure what category your project falls into? Send it through anyway.
              I’ll tell you pretty quickly whether it’s a tidy-up job, a bigger
              upgrade, or something that should be rebuilt properly.
            </p>

            <div className="mt-6">
              <Button
                size="lg"
                asChild
                className="bg-[#1E4E57] text-white shadow-md hover:bg-[#14393F]"
              >
                <Link href="#contact">
                  <Mail className="mr-2 h-4 w-4" />
                  Start a project
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="bg-[#F8FBFC]">
        <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <SectionHeading
            eyebrow="FAQ"
            title="Quick answers"
            subtitle="Simple answers, straight up."
          />

          <div className="mx-auto max-w-3xl">
            <Card className="rounded-[30px] border border-black/5 bg-white p-6 shadow-[0_18px_55px_rgba(20,57,63,0.10)] sm:p-8">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-left text-base font-semibold">
                    Do you work with WordPress websites?
                  </AccordionTrigger>
                  <AccordionContent className="leading-relaxed text-slate-600">
                    Yes. I can help with fixes, upgrades, layout cleanup, booking flow
                    improvements, and general front-end tidy-up work on existing
                    WordPress sites.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-left text-base font-semibold">
                    Can you help with online stores too?
                  </AccordionTrigger>
                  <AccordionContent className="leading-relaxed text-slate-600">
                    Yes. I can help improve online stores with better product pages,
                    cleaner buying flow, and a better experience on mobile.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-left text-base font-semibold">
                    Can you help if I already have a website?
                  </AccordionTrigger>
                  <AccordionContent className="leading-relaxed text-slate-600">
                    Yep. Send me the link and tell me what feels off. I’ll tell you
                    whether it’s worth fixing, upgrading, or rebuilding.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-left text-base font-semibold">
                    What do you need from me to get started?
                  </AccordionTrigger>
                  <AccordionContent className="leading-relaxed text-slate-600">
                    Just send your business name, current website if you have one, what
                    you need help with, your main goal, and any timing or budget notes.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                  <AccordionTrigger className="text-left text-base font-semibold">
                    What platforms do you work with?
                  </AccordionTrigger>
                  <AccordionContent className="leading-relaxed text-slate-600">
                    Shopify stores, WordPress websites, and modern custom business
                    websites depending on what suits the project best.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6">
                  <AccordionTrigger className="text-left text-base font-semibold">
                    Do you only work with businesses in Far North Queensland?
                  </AccordionTrigger>
                  <AccordionContent className="leading-relaxed text-slate-600">
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

      <section id="contact" className="relative overflow-hidden bg-[#1E4E57] text-white">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[-120px] top-[-140px] h-[360px] w-[360px] rounded-full bg-[#6BD4E8]/20 blur-3xl" />
          <div className="absolute bottom-[-160px] right-[-140px] h-[380px] w-[380px] rounded-full bg-[#E5A73B]/18 blur-3xl" />
        </div>

        <div className="container relative z-[1] mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid items-start gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <div className="mb-3 inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-white/78 shadow-sm">
                Start a project
              </div>

              <h2 className="text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                Tell me what you need fixed, built, or improved
              </h2>

              <p className="mt-4 text-pretty text-base leading-relaxed text-white/74 sm:text-lg">
                Send through a few details and I’ll tell you whether it looks like a quick
                fix, a larger upgrade, or a fresh build.
              </p>

              <div className="mt-8 rounded-[28px] border border-white/16 bg-white/10 p-6 shadow-xl backdrop-blur">
                <div className="text-sm font-semibold uppercase tracking-[0.14em] text-[#F7D68C]">
                  Good fit for
                </div>

                <div className="mt-5">
                  <BulletList
                    dark
                    warm
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
                  className="mt-7 border-white/25 bg-white/10 text-white hover:bg-white/15 hover:text-white"
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
              className="rounded-[30px] border border-white/15 bg-white p-6 text-slate-950 shadow-[0_26px_80px_rgba(0,0,0,0.22)] sm:p-8"
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

              <div className="mb-6 rounded-[24px] bg-[#EAF8FC] p-5">
                <div className="text-sm font-semibold text-[#14393F]">
                  Project enquiry
                </div>
                <p className="mt-1 text-sm leading-relaxed text-slate-600">
                  The more detail you send, the easier it is for me to point you in the right direction.
                </p>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label className="mb-2 block text-sm font-medium text-slate-900">
                    Business name
                  </label>
                  <input
                    type="text"
                    name="Business name"
                    required
                    className="w-full rounded-2xl border border-slate-200 bg-[#F8FBFC] px-4 py-3 text-sm text-slate-950 outline-none transition focus:border-[#59C7E6]"
                    placeholder="Your business name"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-900">
                    Your name
                  </label>
                  <input
                    type="text"
                    name="Name"
                    required
                    className="w-full rounded-2xl border border-slate-200 bg-[#F8FBFC] px-4 py-3 text-sm text-slate-950 outline-none transition focus:border-[#59C7E6]"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-900">
                    Email
                  </label>
                  <input
                    type="email"
                    name="Email"
                    required
                    className="w-full rounded-2xl border border-slate-200 bg-[#F8FBFC] px-4 py-3 text-sm text-slate-950 outline-none transition focus:border-[#59C7E6]"
                    placeholder="you@example.com"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="mb-2 block text-sm font-medium text-slate-900">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="Phone"
                    className="w-full rounded-2xl border border-slate-200 bg-[#F8FBFC] px-4 py-3 text-sm text-slate-950 outline-none transition focus:border-[#59C7E6]"
                    placeholder="Your phone number"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="mb-2 block text-sm font-medium text-slate-900">
                    Current website
                  </label>
                  <input
                    type="text"
                    name="Current website"
                    className="w-full rounded-2xl border border-slate-200 bg-[#F8FBFC] px-4 py-3 text-sm text-slate-950 outline-none transition focus:border-[#59C7E6]"
                    placeholder="https://"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="mb-2 block text-sm font-medium text-slate-900">
                    What do you need help with?
                  </label>
                  <textarea
                    name="Project details"
                    rows={6}
                    required
                    className="w-full rounded-2xl border border-slate-200 bg-[#F8FBFC] px-4 py-3 text-sm text-slate-950 outline-none transition focus:border-[#59C7E6]"
                    placeholder="New website, online store, fixes, redesign, booking flow improvements..."
                  />
                </div>
              </div>

              <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
                <Button
                  type="submit"
                  size="lg"
                  className="bg-[#E5A73B] text-[#14393F] shadow-md hover:bg-[#efb84e]"
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

      <footer className="bg-[#14393F] text-white">
        <div className="container mx-auto px-4 py-10 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-semibold">© DB Websites</p>

            <p className="mt-1 text-sm text-white/65">
              Websites, online stores, and practical fixes for small businesses
            </p>

            <div className="mt-3 flex flex-wrap items-center justify-center gap-4 text-sm text-white/65">
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