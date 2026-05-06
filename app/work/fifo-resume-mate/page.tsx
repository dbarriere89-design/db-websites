import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowLeft,
  ArrowRight,
  Check,
  CreditCard,
  FileText,
  Mail,
  MessageCircle,
  MousePointerClick,
  PackageCheck,
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

const HERO_IMAGE = "/work/fifo-resume-mate-hero.jpg"
const PRICING_IMAGE = "/work/fifo-resume-mate-pricing.jpg"
const BUILDER_IMAGE = "/work/fifo-resume-mate-builder.jpg"
const CHECKOUT_IMAGE = "/work/fifo-resume-mate-checkout.jpg"

const stats = [
  "Clearer offer",
  "Better pricing flow",
  "Smoother builder path",
  "Cleaner checkout journey",
]

export const metadata: Metadata = {
  title: "FIFO Resume Mate | Work example",
  description:
    "A work example from DB Websites showing a clearer landing page, pricing section, builder flow, and checkout path for FIFO Resume Mate.",
  alternates: {
    canonical: "/work/fifo-resume-mate",
  },
  openGraph: {
    title: "FIFO Resume Mate | Work example | DB Websites",
    description:
      "A work example from DB Websites showing a clearer landing page, pricing section, builder flow, and checkout path for FIFO Resume Mate.",
    url: "https://dbwebsites.au/work/fifo-resume-mate",
    siteName: "DB Websites",
    images: [
      {
        url: "https://dbwebsites.au/work/fifo-resume-mate-hero.jpg",
        width: 1200,
        height: 630,
        alt: "FIFO Resume Mate work example by DB Websites",
      },
    ],
    locale: "en_AU",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "FIFO Resume Mate | Work example | DB Websites",
    description:
      "A work example from DB Websites showing a clearer landing page, pricing section, builder flow, and checkout path for FIFO Resume Mate.",
    images: ["https://dbwebsites.au/work/fifo-resume-mate-hero.jpg"],
  },
}

const workExampleSchema = {
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  name: "FIFO Resume Mate",
  url: "https://dbwebsites.au/work/fifo-resume-mate",
  description:
    "A work example from DB Websites showing a clearer landing page, pricing section, builder flow, and checkout path for FIFO Resume Mate.",
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
    "https://dbwebsites.au/work/fifo-resume-mate-hero.jpg",
    "https://dbwebsites.au/work/fifo-resume-mate-pricing.jpg",
    "https://dbwebsites.au/work/fifo-resume-mate-builder.jpg",
    "https://dbwebsites.au/work/fifo-resume-mate-checkout.jpg",
  ],
}

const projectImages = [
  {
    src: PRICING_IMAGE,
    alt: "FIFO Resume Mate pricing section screenshot",
    title: "Clearer pricing section",
    text: "The pricing area needed to make the offer easier to understand and help visitors quickly see what they were getting.",
  },
  {
    src: BUILDER_IMAGE,
    alt: "FIFO Resume Mate builder screenshot",
    title: "Step-by-step builder flow",
    text: "The builder path was designed to guide people through the process without making the product feel complicated.",
  },
  {
    src: CHECKOUT_IMAGE,
    alt: "FIFO Resume Mate checkout screenshot",
    title: "Cleaner checkout journey",
    text: "The flow needed to move people from offer to purchase with less friction and more confidence.",
  },
]

const outcomes = [
  {
    icon: <FileText className="h-5 w-5" />,
    title: "Clearer offer",
    text: "The page explains what the product is, who it is for, and what the customer gets.",
  },
  {
    icon: <PackageCheck className="h-5 w-5" />,
    title: "Better pricing flow",
    text: "The pricing section was shaped to reduce hesitation and make the buying decision simpler.",
  },
  {
    icon: <MousePointerClick className="h-5 w-5" />,
    title: "Smoother path",
    text: "The page structure guides visitors from interest to action without unnecessary confusion.",
  },
  {
    icon: <CreditCard className="h-5 w-5" />,
    title: "Checkout ready",
    text: "The checkout path supports a real purchase flow, not just a static landing page.",
  },
]

export default function FIFOResumeMatePage() {
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
                Digital product landing page
              </div>

              <h1 className="text-balance text-4xl font-bold tracking-tight text-[#14393F] sm:text-5xl lg:text-6xl">
                FIFO Resume Mate
              </h1>

              <p className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-slate-600 sm:text-lg">
                A clearer landing page, pricing section, builder flow, and checkout
                path for a digital product built around FIFO resume help.
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
                  alt="FIFO Resume Mate landing page screenshot"
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
                Landing page
              </div>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                A digital product page built to explain the offer and move visitors toward purchase.
              </p>
            </Card>

            <Card className="rounded-[28px] border border-black/5 bg-white p-7 shadow-[0_16px_45px_rgba(20,57,63,0.08)]">
              <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500">
                Main goal
              </div>
              <div className="mt-3 text-2xl font-bold text-[#14393F]">
                Reduce confusion
              </div>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Make the product, pricing, and next step easier to understand.
              </p>
            </Card>

            <Card className="rounded-[28px] border border-black/5 bg-white p-7 shadow-[0_16px_45px_rgba(20,57,63,0.08)]">
              <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500">
                Focus
              </div>
              <div className="mt-3 text-2xl font-bold text-[#14393F]">
                Offer to checkout
              </div>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Better page flow from the first message through pricing, builder, and checkout.
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
              Page strategy
            </div>
            <h2 className="text-balance text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              Built to explain the offer quickly and guide people through the process
            </h2>
            <p className="mt-4 text-pretty text-base leading-relaxed text-slate-600 sm:text-lg">
              For a digital product, the page has to do a lot of work. Visitors need to
              understand the offer, trust the process, choose the right option, and know
              what happens next.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <Card className="rounded-[30px] border border-black/5 bg-white p-7 shadow-[0_18px_55px_rgba(20,57,63,0.10)] sm:p-9">
              <div className="mb-4 inline-flex rounded-full bg-[#FFF8EA] px-3 py-1 text-xs font-semibold text-[#14393F]">
                What needed work
              </div>

              <h3 className="text-2xl font-bold tracking-tight text-slate-950">
                The page needed to make the product easier to understand
              </h3>

              <p className="mt-4 text-base leading-relaxed text-slate-600">
                Visitors had to understand what was included, which option suited them,
                and what to do next without feeling overwhelmed by the process.
              </p>

              <div className="mt-6 space-y-3">
                {[
                  "Explain the offer more clearly",
                  "Make the page easier to follow",
                  "Help people choose the right option",
                  "Create a smoother path to checkout",
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
                Clearer structure, pricing, calls to action, and checkout path
              </h3>

              <p className="mt-4 text-base leading-relaxed text-slate-600">
                The improvements focused on making the offer easier to follow and
                helping visitors move through the buying journey with less hesitation.
              </p>

              <div className="mt-6 space-y-3">
                {[
                  "Landing page layout and section flow",
                  "Clearer offer and pricing structure",
                  "Stronger calls to action",
                  "A smoother builder experience",
                  "Cleaner page-to-checkout journey",
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
              Page sections
            </div>
            <h2 className="text-balance text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              Key parts of the website flow
            </h2>
            <p className="mt-4 text-pretty text-base leading-relaxed text-slate-600 sm:text-lg">
              These screenshots show the main points in the journey, from pricing to builder to checkout.
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

      {/* Outcomes */}
      <section className="bg-[#EAF8FC]">
        <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
            <div>
              <div className="mb-4 inline-flex rounded-full border border-[#E5A73B]/25 bg-[#FFF8EA] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-600 shadow-sm">
                Customer journey
              </div>

              <h2 className="text-balance text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
                Designed to make the next step feel obvious
              </h2>

              <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
                The page had to make the offer feel clear enough that visitors could
                move from reading to choosing an option, starting the builder, and
                checking out.
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

            <div className="relative">
              <div className="absolute -inset-4 rounded-[34px] bg-[#6BD4E8]/22 blur-2xl" />
              <div className="relative overflow-hidden rounded-[30px] border border-white bg-white p-3 shadow-[0_24px_70px_rgba(20,57,63,0.16)]">
                <img
                  src={BUILDER_IMAGE}
                  alt="FIFO Resume Mate builder flow screenshot"
                  className="block h-auto w-full rounded-[24px] object-contain"
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
              This project shows how a landing page can make an offer easier to understand and easier to buy
            </h2>

            <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-slate-600 sm:text-lg">
              The point is not just surface polish. The page needed to help people
              understand the product, trust the process, and move smoothly toward the
              next step.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1E4E57] text-white">
        <div className="container mx-auto px-4 py-16 text-center sm:px-6 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-3xl">
            <div className="mb-4 inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-white/78 shadow-sm">
              Need a clearer landing page?
            </div>

            <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Build a page that explains the offer and points people toward action
            </h2>

            <p className="mt-4 text-pretty text-base leading-relaxed text-white/74 sm:text-lg">
              If your offer is good but the page feels confusing, unclear, or clunky,
              that friction can quietly cost you sales.
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
                <Link href="/work/fnq-lodge">
                  Next work example
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