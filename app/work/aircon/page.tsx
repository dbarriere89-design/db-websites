import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Mail,
  MessageCircle,
  MonitorSmartphone,
  ShieldCheck,
  Snowflake,
  Wrench,
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

const HERO_IMAGE = "/work/aircon/hero.jpg"
const HYDRO_IMAGE = "/work/aircon/hydro.jpg"
const INSTALL_IMAGE = "/work/aircon/install.jpg"
const HOUSE_IMAGE = "/work/aircon/house.jpg"
const CRANE_IMAGE = "/work/aircon/crane.jpg"

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

const projectImages = [
  {
    src: HYDRO_IMAGE,
    alt: "Air conditioning hydro clean website section",
    title: "Service clarity",
    text: "The website needed to make individual services easier to understand, especially for customers quickly checking what the business offers.",
  },
  {
    src: INSTALL_IMAGE,
    alt: "Air conditioning installation website section",
    title: "Real work presentation",
    text: "Using actual job photos helped the site feel more believable and grounded than a generic tradie website filled with stock images.",
  },
  {
    src: HOUSE_IMAGE,
    alt: "Residential air conditioning website section",
    title: "Residential trust",
    text: "The layout gives homeowners a cleaner first impression and a clearer reason to enquire.",
  },
]

const outcomes = [
  {
    icon: <ShieldCheck className="h-5 w-5" />,
    title: "Stronger trust",
    text: "A cleaner design, better structure, and real work imagery made the business feel more professional.",
  },
  {
    icon: <Snowflake className="h-5 w-5" />,
    title: "Clearer services",
    text: "The site was structured so customers can quickly understand installs, repairs, servicing, and commercial work.",
  },
  {
    icon: <MonitorSmartphone className="h-5 w-5" />,
    title: "Better mobile flow",
    text: "Spacing, readability, and calls to action were built with mobile users in mind.",
  },
  {
    icon: <Wrench className="h-5 w-5" />,
    title: "Simpler enquiry path",
    text: "The page flow points people toward contacting the business without making them hunt for the next step.",
  },
]

const projectStats = [
  "Built from scratch",
  "Clearer service flow",
  "Better mobile experience",
  "Stronger enquiry path",
]

export default function AirconPage() {
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
                Service business website
              </div>

              <h1 className="text-balance text-4xl font-bold tracking-tight text-[#14393F] sm:text-5xl lg:text-6xl">
                Air Conditioning Business
              </h1>

              <p className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-slate-600 sm:text-lg">
                A clean service website built to create a stronger first impression,
                explain services clearly, and make it easier for customers to enquire.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {projectStats.map((stat) => (
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
                  alt="Air conditioning business website screenshot"
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
                Local service website
              </div>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                A practical business website for an air conditioning and refrigeration service provider.
              </p>
            </Card>

            <Card className="rounded-[28px] border border-black/5 bg-white p-7 shadow-[0_16px_45px_rgba(20,57,63,0.08)]">
              <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500">
                Main goal
              </div>
              <div className="mt-3 text-2xl font-bold text-[#14393F]">
                Build trust faster
              </div>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Make the business look more established, easier to understand, and simpler to contact.
              </p>
            </Card>

            <Card className="rounded-[28px] border border-black/5 bg-white p-7 shadow-[0_16px_45px_rgba(20,57,63,0.08)]">
              <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500">
                Focus
              </div>
              <div className="mt-3 text-2xl font-bold text-[#14393F]">
                Services and enquiries
              </div>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Clear service sections, better mobile readability, and stronger calls to action.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Challenge and solution */}
      <section className="bg-[#EAF8FC]">
        <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <div className="mb-4 inline-flex rounded-full border border-[#59C7E6]/30 bg-white/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#1E4E57] shadow-sm">
              Website strategy
            </div>
            <h2 className="text-balance text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              Built to help customers understand the business quickly
            </h2>
            <p className="mt-4 text-pretty text-base leading-relaxed text-slate-600 sm:text-lg">
              For a service business, the website needs to answer simple questions fast:
              what do you do, can I trust you, and how do I get in touch?
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <Card className="rounded-[30px] border border-black/5 bg-white p-7 shadow-[0_18px_55px_rgba(20,57,63,0.10)] sm:p-9">
              <div className="mb-4 inline-flex rounded-full bg-[#FFF8EA] px-3 py-1 text-xs font-semibold text-[#14393F]">
                What needed work
              </div>

              <h3 className="text-2xl font-bold tracking-tight text-slate-950">
                The business needed a stronger digital first impression
              </h3>

              <p className="mt-4 text-base leading-relaxed text-slate-600">
                The site needed to feel more professional, clearly explain the main
                services, and make it easier for customers to enquire without digging
                around.
              </p>

              <div className="mt-6 space-y-3">
                {[
                  "Create a cleaner first impression",
                  "Make services easier to understand",
                  "Improve the mobile experience",
                  "Make the enquiry path more obvious",
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
                Cleaner layout, clearer service flow, and stronger contact points
              </h3>

              <p className="mt-4 text-base leading-relaxed text-slate-600">
                The build focused on practical improvements that help a customer feel
                confident and move toward making contact.
              </p>

              <div className="mt-6 space-y-3">
                {[
                  "Modern layout built from scratch",
                  "Clear service sections",
                  "Real project imagery",
                  "Mobile-friendly spacing and readability",
                  "Simple path to enquiry",
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
              Site sections
            </div>
            <h2 className="text-balance text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              Real work, presented with more polish
            </h2>
            <p className="mt-4 text-pretty text-base leading-relaxed text-slate-600 sm:text-lg">
              Actual work photos helped the site feel more credible and specific to the business.
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
                Mobile and usability
              </div>

              <h2 className="text-balance text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
                A better mobile experience for people ready to enquire
              </h2>

              <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
                Local service customers are often checking a website quickly on their
                phone. The layout needed to be easy to read, easy to scan, and easy to
                act on.
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
                  src={CRANE_IMAGE}
                  alt="Commercial air conditioning crane install website screenshot"
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
              This project shows how a service business website can look stronger, feel clearer, and make enquiries easier
            </h2>

            <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-slate-600 sm:text-lg">
              The goal was not just to make the site look cleaner. The goal was to
              build something that better represents the business, supports trust, and
              gives customers a clearer path to take action.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1E4E57] text-white">
        <div className="container mx-auto px-4 py-16 text-center sm:px-6 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-3xl">
            <div className="mb-4 inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-white/78 shadow-sm">
              Need a site like this?
            </div>

            <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Build a website that gives customers more confidence
            </h2>

            <p className="mt-4 text-pretty text-base leading-relaxed text-white/74 sm:text-lg">
              If your current website feels dated, unclear, or hard to use on mobile,
              it might be quietly costing you enquiries.
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