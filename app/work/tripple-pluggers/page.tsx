import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  Check,
  Mail,
  MessageCircle,
  MonitorSmartphone,
  ShoppingBag,
  Store,
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

const HERO_IMAGE = "/work/tripple-pluggers/tp-hero.jpg"
const PRODUCT_DESKTOP_IMAGE = "/work/tripple-pluggers/tp-product-desktop.jpg"
const PRODUCT_MOBILE_IMAGE = "/work/tripple-pluggers/tp-product-mobile.jpg"
const DASHBOARD_IMAGE = "/work/tripple-pluggers/tp-dashboard.jpg"
const ORDERS_IMAGE = "/work/tripple-pluggers/tp-orders.jpg"
const CHECKOUT_IMAGE = "/work/tripple-pluggers/tp-checkout.jpg"

const stats = ["2,984 visitors", "70 orders", "$4,217 revenue", "2.98% conversion"]

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

const projectImages = [
  {
    src: PRODUCT_DESKTOP_IMAGE,
    alt: "Tripple Pluggers desktop product page screenshot",
    title: "Desktop product page",
    text: "A clearer product page layout helped make the offer easier to understand and gave shoppers a stronger buying experience on desktop.",
  },
  {
    src: DASHBOARD_IMAGE,
    alt: "Tripple Pluggers Shopify analytics screenshot",
    title: "Real store activity",
    text: "This was a working Shopify store with real traffic, real customer behaviour, and actual sales activity, not just a concept design.",
  },
  {
    src: ORDERS_IMAGE,
    alt: "Tripple Pluggers Shopify orders screenshot",
    title: "Orders and proof",
    text: "The store generated real orders, which makes this project useful proof for ecommerce work, product pages, and conversion-focused improvements.",
  },
]

const outcomes = [
  {
    icon: <Store className="h-5 w-5" />,
    title: "Stronger storefront",
    text: "The store needed to feel more polished and trustworthy from the first visit.",
  },
  {
    icon: <ShoppingBag className="h-5 w-5" />,
    title: "Cleaner buying flow",
    text: "Product pages, variants, and checkout flow were improved to reduce friction.",
  },
  {
    icon: <MonitorSmartphone className="h-5 w-5" />,
    title: "Mobile shopping",
    text: "The shopping experience was tightened for people browsing and buying on their phones.",
  },
  {
    icon: <BarChart3 className="h-5 w-5" />,
    title: "Real sales proof",
    text: "The store had real visitors, orders, revenue, and checkout activity.",
  },
]

export default function TripplePluggersPage() {
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
                Shopify ecommerce store
              </div>

              <h1 className="text-balance text-4xl font-bold tracking-tight text-[#14393F] sm:text-5xl lg:text-6xl">
                Tripple Pluggers
              </h1>

              <p className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-slate-600 sm:text-lg">
                A real online store build for an Australian product brand, focused on
                clearer product pages, easier mobile shopping, and a smoother path to
                checkout.
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
                  alt="Tripple Pluggers online store homepage screenshot"
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
                Shopify store
              </div>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                A live ecommerce store for an Australian footwear product brand.
              </p>
            </Card>

            <Card className="rounded-[28px] border border-black/5 bg-white p-7 shadow-[0_16px_45px_rgba(20,57,63,0.08)]">
              <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500">
                Main goal
              </div>
              <div className="mt-3 text-2xl font-bold text-[#14393F]">
                Improve buying flow
              </div>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Make product selection, mobile shopping, and checkout feel clearer and more trustworthy.
              </p>
            </Card>

            <Card className="rounded-[28px] border border-black/5 bg-white p-7 shadow-[0_16px_45px_rgba(20,57,63,0.08)]">
              <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500">
                Proof
              </div>
              <div className="mt-3 text-2xl font-bold text-[#14393F]">
                Real orders
              </div>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                The store generated real traffic, checkout activity, sales, and customer orders.
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
              Store strategy
            </div>
            <h2 className="text-balance text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              Built to make the product easier to understand and buy
            </h2>
            <p className="mt-4 text-pretty text-base leading-relaxed text-slate-600 sm:text-lg">
              A product store has to do more than look good. It needs to explain the
              product, reduce confusion, build trust, and make the checkout path obvious.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <Card className="rounded-[30px] border border-black/5 bg-white p-7 shadow-[0_18px_55px_rgba(20,57,63,0.10)] sm:p-9">
              <div className="mb-4 inline-flex rounded-full bg-[#FFF8EA] px-3 py-1 text-xs font-semibold text-[#14393F]">
                What needed work
              </div>

              <h3 className="text-2xl font-bold tracking-tight text-slate-950">
                The store needed to feel clearer, stronger, and easier to buy from
              </h3>

              <p className="mt-4 text-base leading-relaxed text-slate-600">
                The goal was to make the store look more trustworthy, work better on
                mobile, and help shoppers move from browsing to buying without getting
                lost or second-guessing the store.
              </p>

              <div className="mt-6 space-y-3">
                {[
                  "Make the store look more polished",
                  "Improve product and variant selection",
                  "Support mobile-first shopping",
                  "Build enough trust to earn early orders",
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
                Cleaner product pages, better mobile shopping, and a smoother checkout path
              </h3>

              <p className="mt-4 text-base leading-relaxed text-slate-600">
                The improvements focused on store structure, product presentation,
                variant selection, and a clearer path from product view to checkout.
              </p>

              <div className="mt-6 space-y-3">
                {[
                  "Store layout and structure",
                  "Homepage and collection page improvements",
                  "Cleaner product pages and variants",
                  "Better mobile shopping experience",
                  "Smoother product-to-checkout flow",
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
              Store sections
            </div>
            <h2 className="text-balance text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              A working ecommerce experience, not just a mockup
            </h2>
            <p className="mt-4 text-pretty text-base leading-relaxed text-slate-600 sm:text-lg">
              These screenshots show the storefront, product experience, and real store activity.
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
                Mobile shopping
              </div>

              <h2 className="text-balance text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
                Product pages needed to work properly on mobile
              </h2>

              <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
                A big part of ecommerce is making the mobile product page feel simple,
                clear, and easy to act on. The store needed to help shoppers understand
                what they were buying and move toward checkout without friction.
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

            <div className="relative mx-auto w-full max-w-[390px]">
              <div className="absolute -inset-4 rounded-[40px] bg-[#6BD4E8]/22 blur-2xl" />
              <div className="relative overflow-hidden rounded-[34px] border border-white bg-white p-3 shadow-[0_24px_70px_rgba(20,57,63,0.16)]">
                <img
                  src={PRODUCT_MOBILE_IMAGE}
                  alt="Tripple Pluggers mobile product page screenshot"
                  className="block h-auto w-full rounded-[26px] object-contain"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Checkout proof */}
      <section className="bg-[#FFF8EA]">
        <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
            <div className="relative">
              <div className="absolute -inset-4 rounded-[34px] bg-[#E5A73B]/18 blur-2xl" />
              <div className="relative overflow-hidden rounded-[30px] border border-white bg-white p-3 shadow-[0_24px_70px_rgba(120,70,0,0.16)]">
                <img
                  src={CHECKOUT_IMAGE}
                  alt="Tripple Pluggers checkout screenshot"
                  className="block h-auto w-full rounded-[24px] object-contain"
                  loading="lazy"
                />
              </div>
            </div>

            <div>
              <div className="mb-4 inline-flex rounded-full border border-[#E5A73B]/25 bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-600 shadow-sm">
                Checkout flow
              </div>

              <h2 className="text-balance text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
                A real checkout path with real store proof
              </h2>

              <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
                This project is useful because it shows a real buying journey, real store
                data, and a live ecommerce setup that customers actually used.
              </p>

              <div className="mt-7 rounded-[28px] bg-white p-6 shadow-[0_14px_40px_rgba(120,70,0,0.10)]">
                <ul className="space-y-3 text-sm leading-relaxed text-slate-700">
                  <li>• Real Shopify storefront</li>
                  <li>• Real product and variant flow</li>
                  <li>• Real checkout activity</li>
                  <li>• Real orders and revenue</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Takeaway */}
      <section className="bg-[#F8FBFC]">
        <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-4 inline-flex rounded-full border border-[#59C7E6]/30 bg-white/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#1E4E57] shadow-sm">
              Simple takeaway
            </div>

            <h2 className="text-balance text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              This project proves I can build stores that look better and function in the real world
            </h2>

            <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-slate-600 sm:text-lg">
              The point is not just that the store looked cleaner. The point is that it
              became easier to use, easier to trust, and capable of generating real sales
              activity from a live audience.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1E4E57] text-white">
        <div className="container mx-auto px-4 py-16 text-center sm:px-6 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-3xl">
            <div className="mb-4 inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-white/78 shadow-sm">
              Need an online store?
            </div>

            <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Build a store that makes buying feel easier
            </h2>

            <p className="mt-4 text-pretty text-base leading-relaxed text-white/74 sm:text-lg">
              If your store looks rough, feels confusing, or makes shoppers work too hard,
              it might be quietly hurting sales.
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
                <Link href="/work/fifo-resume-mate">
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