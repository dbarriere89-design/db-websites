import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowLeft,
  ArrowRight,
  BedDouble,
  CalendarCheck,
  Check,
  Mail,
  MessageCircle,
  MonitorSmartphone,
  Sparkles,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

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
const AFTER_IMAGE = "/work/fnq-lodge/after.png"
const BOOKING_MOBILE_IMAGE = "/work/fnq-lodge/booking-mobile.png"
const CHECKOUT_DESKTOP_IMAGE = "/work/fnq-lodge/checkout-desktop-sharp.png"

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
    "https://dbwebsites.au/work/fnq-lodge/after.png",
    "https://dbwebsites.au/work/fnq-lodge/booking-mobile.png",
    "https://dbwebsites.au/work/fnq-lodge/checkout-desktop-sharp.png",
  ],
}

const projectImages = [
  {
    src: BEFORE_IMAGE,
    alt: "FNQ Lodge before improvements screenshot",
    title: "Before the cleanup",
    text: "The previous version worked, but the presentation felt clunkier and the path toward booking was not as clean as it needed to be.",
  },
  {
    src: AFTER_IMAGE,
    alt: "FNQ Lodge after improvements screenshot",
    title: "After the refresh",
    text: "The improved version gave the property a cleaner structure, stronger presentation, and a clearer path for visitors to keep moving.",
  },
  {
    src: CHECKOUT_DESKTOP_IMAGE,
    alt: "FNQ Lodge checkout page screenshot",
    title: "Checkout flow",
    text: "The checkout layout was cleaned up so booking details, guest information, and payment felt easier to understand.",
  },
]

const outcomes = [
  {
    icon: <BedDouble className="h-5 w-5" />,
    title: "Better property presentation",
    text: "The lodge needed to feel more polished, trustworthy, and appealing from the first look.",
  },
  {
    icon: <CalendarCheck className="h-5 w-5" />,
    title: "Stronger booking path",
    text: "The flow was shaped to help visitors move from interest to booking with less confusion.",
  },
  {
    icon: <MonitorSmartphone className="h-5 w-5" />,
    title: "Mobile usability",
    text: "Booking pages and key content needed to work better for visitors browsing on their phones.",
  },
  {
    icon: <Sparkles className="h-5 w-5" />,
    title: "Cleaner feel",
    text: "The site was improved without needing to completely rebuild everything from scratch.",
  },
]

export default function FNQLodgePage() {
  return (
    <main className="min-h-screen bg-[#F8FBFC] text-slate-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(workExampleSchema) }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-[linear-gradient(180deg,#EAF8FC_0%,#F8FBFC_88%)]">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[-140px] top-[-140px] h-[360px] w-[360px] rounded-full bg-[#6BD4E8]/30 blur-3xl" />
          <div className="absolute right-[-140px] top-[160px] h-[380px] w-[380px] rounded-full bg-[#E5A73B]/18 blur-3xl" />
        </div>

        <div className="container relative z-[1] mx-auto px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
          <Button
            variant="outline"
            asChild
            className="mb-8 border-[#59C7E6]/35 bg-white/80 text-[#14393F] shadow-sm hover:bg-white hover:text-[#14393F]"
          >
            <Link href="/#work">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to work
            </Link>
          </Button>

          <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
            <div>
              <div className="mb-4 inline-flex rounded-full border border-[#59C7E6]/30 bg-white/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#1E4E57] shadow-sm">
                Accommodation booking website
              </div>

              <h1 className="text-balance text-4xl font-bold tracking-tight text-[#14393F] sm:text-5xl lg:text-6xl">
                FNQ Lodge
              </h1>

              <p className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-slate-600 sm:text-lg">
                A booking website improvement project focused on clearer page structure,
                better mobile use, and an easier path from browsing to booking.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {stats.map((stat) => (
                  <div
                    key={stat}
                    className="rounded-2xl border border-[#59C7E6]/25 bg-white/80 px-4 py-3 text-sm font-semibold text-[#14393F] shadow-sm"
                  >
                    <Check className="mb-2 h-4 w-4 text-[#59C7E6]" />
                    {stat}
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button
                  asChild
                  size="lg"
                  className="bg-[#1E4E57] text-white shadow-md hover:bg-[#14393F]"
                >
                  <Link href={`mailto:${EMAIL}?subject=${EMAIL_SUBJECT}&body=${EMAIL_BODY}`}>
                    <Mail className="mr-2 h-4 w-4" />
                    Start a project
                  </Link>
                </Button>

                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-[#59C7E6]/35 bg-white/80 text-[#14393F] shadow-sm hover:bg-white hover:text-[#14393F]"
                >
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
            </div>

            <div className="relative">
              <div className="absolute -inset-4 rounded-[34px] bg-[#6BD4E8]/22 blur-2xl" />
              <div className="relative overflow-hidden rounded-[30px] border border-white bg-white p-3 shadow-[0_24px_70px_rgba(20,57,63,0.16)]">
                <img
                  src={HERO_IMAGE}
                  alt="FNQ Lodge improved homepage screenshot"
                  className="block h-auto w-full rounded-[24px] object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project overview */}
      <section className="bg-[#F8FBFC]">
        <div className="container mx-auto px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="rounded-[28px] border border-black/5 bg-white p-7 shadow-[0_16px_45px_rgba(20,57,63,0.08)]">
              <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500">
                Project type
              </div>
              <div className="mt-3 text-2xl font-bold text-[#14393F]">
                Booking website refresh
              </div>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Improvements for an accommodation website with booking and checkout flow.
              </p>
            </Card>

            <Card className="rounded-[28px] border border-black/5 bg-white p-7 shadow-[0_16px_45px_rgba(20,57,63,0.08)]">
              <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500">
                Main goal
              </div>
              <div className="mt-3 text-2xl font-bold text-[#14393F]">
                Make booking easier
              </div>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Help guests understand the stay, trust the property, and move toward booking.
              </p>
            </Card>

            <Card className="rounded-[28px] border border-black/5 bg-white p-7 shadow-[0_16px_45px_rgba(20,57,63,0.08)]">
              <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500">
                Focus
              </div>
              <div className="mt-3 text-2xl font-bold text-[#14393F]">
                Presentation and flow
              </div>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Cleaner structure, better mobile usability, stronger booking path, and before-and-after proof.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Strategy */}
      <section className="bg-[#EAF8FC]">
        <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <div className="mb-4 inline-flex rounded-full border border-[#59C7E6]/30 bg-white/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#1E4E57] shadow-sm">
              Booking strategy
            </div>
            <h2 className="text-balance text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              Built to make the property feel clearer, more trustworthy, and easier to book
            </h2>
            <p className="mt-4 text-pretty text-base leading-relaxed text-slate-600 sm:text-lg">
              Accommodation websites need to reduce uncertainty. Visitors need to understand
              the property, trust the experience, check availability, and move through the
              booking path without friction.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <Card className="rounded-[30px] border border-black/5 bg-white p-7 shadow-[0_18px_55px_rgba(20,57,63,0.10)] sm:p-9">
              <div className="mb-4 inline-flex rounded-full bg-[#FFF8EA] px-3 py-1 text-xs font-semibold text-[#14393F]">
                What needed work
              </div>

              <h3 className="text-2xl font-bold tracking-tight text-slate-950">
                The site needed a clearer story and a better booking path
              </h3>

              <p className="mt-4 text-base leading-relaxed text-slate-600">
                Visitors needed to understand the property more quickly, feel confident
                in the stay, and move from browsing to booking without being slowed down
                by awkward layout or clunky flow.
              </p>

              <div className="mt-6 space-y-3">
                {[
                  "Make the stay feel better presented online",
                  "Improve the booking path and calls to action",
                  "Clean up awkward layout and presentation issues",
                  "Make the site easier to use on mobile",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-[#E5A73B]" />
                    <span className="text-sm leading-relaxed text-slate-700 sm:text-base">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="rounded-[30px] border border-black/5 bg-white p-7 shadow-[0_18px_55px_rgba(20,57,63,0.10)] sm:p-9">
              <div className="mb-4 inline-flex rounded-full bg-[#EAF8FC] px-3 py-1 text-xs font-semibold text-[#14393F]">
                What changed
              </div>

              <h3 className="text-2xl font-bold tracking-tight text-slate-950">
                Cleaner layout, better booking flow, mobile fixes, and stronger trust
              </h3>

              <p className="mt-4 text-base leading-relaxed text-slate-600">
                The work focused on practical improvements to make the website feel
                cleaner, more usable, and easier for guests to act on.
              </p>

              <div className="mt-6 space-y-3">
                {[
                  "WordPress layout cleanup",
                  "Booking page and call-to-action improvements",
                  "Booking and checkout improvements",
                  "Better mobile presentation and usability",
                  "General polish to make the property feel more trustworthy",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-[#59C7E6]" />
                    <span className="text-sm leading-relaxed text-slate-700 sm:text-base">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Screenshots */}
      <section className="bg-[#F8FBFC]">
        <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <div className="mb-4 inline-flex rounded-full border border-[#59C7E6]/30 bg-white/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#1E4E57] shadow-sm">
              Before, after and flow
            </div>
            <h2 className="text-balance text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              The difference becomes obvious when the flow is shown clearly
            </h2>
            <p className="mt-4 text-pretty text-base leading-relaxed text-slate-600 sm:text-lg">
              These screenshots show the old version, the improved presentation, and the cleaned-up booking path.
            </p>
          </div>

          <div className="grid gap-8">
            {projectImages.map((item, index) => (
              <Card
                key={item.src}
                className="overflow-hidden rounded-[30px] border border-black/5 bg-white shadow-[0_18px_55px_rgba(20,57,63,0.10)]"
              >
                <div className="grid items-center gap-0 lg:grid-cols-2">
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="block h-auto w-full object-contain"
                      loading="lazy"
                    />
                  </div>

                  <div className="p-7 sm:p-9 lg:p-12">
                    <div className="mb-3 inline-flex rounded-full bg-[#FFF8EA] px-3 py-1 text-xs font-semibold text-[#14393F]">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <h3 className="text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
                      {item.title}
                    </h3>
                    <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
                      {item.text}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile and outcomes */}
      <section className="bg-[#EAF8FC]">
        <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
            <div>
              <div className="mb-4 inline-flex rounded-full border border-[#E5A73B]/25 bg-[#FFF8EA] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-600 shadow-sm">
                Mobile booking
              </div>

              <h2 className="text-balance text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
                The mobile booking experience needed to feel easier and cleaner
              </h2>

              <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
                Guests are often browsing accommodation on their phone. The booking page
                needed to feel readable, usable, and clear enough for people to keep moving.
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {outcomes.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-[24px] border border-black/5 bg-white p-5 shadow-[0_12px_35px_rgba(20,57,63,0.07)]"
                  >
                    <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[#EAF8FC] text-[#14393F]">
                      {item.icon}
                    </div>
                    <div className="text-base font-semibold text-slate-950">
                      {item.title}
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[380px]">
              <div className="absolute -inset-4 rounded-[40px] bg-[#6BD4E8]/22 blur-2xl" />
              <div className="relative overflow-hidden rounded-[34px] border border-white bg-white p-3 shadow-[0_24px_70px_rgba(20,57,63,0.16)]">
                <img
                  src={BOOKING_MOBILE_IMAGE}
                  alt="FNQ Lodge mobile booking page screenshot"
                  className="block h-auto w-full rounded-[26px] object-contain"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Takeaway */}
      <section className="bg-[#FFF8EA]">
        <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-4 inline-flex rounded-full border border-[#E5A73B]/25 bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-600 shadow-sm">
              Simple takeaway
            </div>

            <h2 className="text-balance text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              Not every project needs a full rebuild to create real value
            </h2>

            <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-slate-600 sm:text-lg">
              Sometimes the strongest result comes from improving what already exists:
              cleaner layout, clearer booking flow, better mobile usability, and a more
              trustworthy feel for real guests.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1E4E57] text-white">
        <div className="container mx-auto px-4 py-16 text-center sm:px-6 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-3xl">
            <div className="mb-4 inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-white/78 shadow-sm">
              Need a better booking website?
            </div>

            <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Make your website easier for customers to trust and act on
            </h2>

            <p className="mt-4 text-pretty text-base leading-relaxed text-white/74 sm:text-lg">
              If your booking flow feels clunky or your current site does not show the
              experience properly, a focused refresh can make a big difference.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="bg-[#E5A73B] text-[#14393F] shadow-md hover:bg-[#efb84e]"
              >
                <Link href={`mailto:${EMAIL}?subject=${EMAIL_SUBJECT}&body=${EMAIL_BODY}`}>
                  <Mail className="mr-2 h-4 w-4" />
                  Start a project
                </Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/25 bg-white/10 text-white hover:bg-white/15 hover:text-white"
              >
                <Link
                  href={FACEBOOK_MESSENGER_URL}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Message me
                </Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="ghost"
                className="text-white hover:bg-white/10 hover:text-white"
              >
                <Link href="/work/outback-lens">
                  Back to work examples
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}