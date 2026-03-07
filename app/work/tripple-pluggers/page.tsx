import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowLeft, ArrowRight, Check, Mail, MessageCircle } from "lucide-react"

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

const stats = ["925 visitors", "15 orders", "$645 revenue", "1.62% conversion"]

export default function TripplePluggersPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-background/80 backdrop-blur">
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

          <Button asChild variant="outline">
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to home
            </Link>
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-6 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-6 inline-flex rounded-full border border-border bg-background/70 px-3 py-1 text-xs font-medium text-muted-foreground">
            Shopify ecommerce
          </div>

          <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Tripple Pluggers
          </h1>

          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-muted-foreground">
            A real Shopify ecommerce build focused on product presentation, purchase flow, and mobile-first UX for an
            Australian product brand.
          </p>

          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground">
            This wasn’t just a mockup job. The store was built and operated as a real ecommerce project with live
            traffic, live checkouts, and real sales data.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat}
                className="rounded-2xl border border-border bg-background/70 px-4 py-4 text-sm font-medium text-foreground"
              >
                {stat}
              </div>
            ))}
          </div>

          <div className="mt-10 overflow-hidden rounded-3xl border border-border bg-card shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
            <img
              src="/work/tripple-pluggers/tp-hero.jpg"
              alt="Tripple Pluggers Shopify storefront"
              className="w-full object-cover"
            />
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <Card className="rounded-3xl p-8 shadow-sm">
              <h2 className="text-2xl font-semibold text-foreground">The challenge</h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                The brand needed a stronger storefront experience that looked more credible, felt better on mobile, and
                made it easier for shoppers to move from interest to purchase without getting bogged down by clunky UX.
              </p>

              <div className="mt-6 space-y-3">
                {[
                  "Make the storefront feel stronger and more polished",
                  "Improve product and variant selection flow",
                  "Support mobile-first shopping behaviour",
                  "Build trust fast enough to earn early orders",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-[hsl(var(--brand-accent))]" />
                    <span className="text-sm text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="rounded-3xl p-8 shadow-sm">
              <h2 className="text-2xl font-semibold text-foreground">What I worked on</h2>

              <div className="mt-6 space-y-3">
                {[
                  "Shopify storefront structure and refinement",
                  "Homepage and collection presentation improvements",
                  "Product-page and variant UX cleanup",
                  "Mobile usability improvements",
                  "Checkout-path and conversion-focused polish",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-[hsl(var(--brand-warm))]" />
                    <span className="text-sm text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            <Card className="rounded-3xl p-8 shadow-sm lg:col-span-2">
              <h2 className="text-2xl font-semibold text-foreground">Why this case study is strong</h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Plenty of people can make a Shopify store look decent in screenshots. What matters more is whether the
                store holds together as a real buying experience. This one did. It had actual visitors, actual orders,
                and real revenue, which makes it far stronger proof than a design-only portfolio piece.
              </p>

              <p className="mt-4 leading-relaxed text-muted-foreground">
                It also shows range: product presentation, ecommerce UX, mobile thinking, and commercial awareness —
                not just slapping products on a page and hoping for the best like some sort of brave little internet
                possum.
              </p>
            </Card>

            <Card className="rounded-3xl p-8 shadow-sm">
              <h2 className="text-2xl font-semibold text-foreground">Key outcomes</h2>
              <div className="mt-6 space-y-3">
                {[
                  "A cleaner and more credible storefront",
                  "A clearer route from product page to checkout",
                  "Better mobile browsing and buying flow",
                  "Commercial proof, not just visual proof",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-[hsl(var(--brand-accent))]" />
                    <span className="text-sm text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-semibold text-foreground">Storefront and product flow</h2>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">
              These screenshots show the real store experience across desktop and mobile, including product-page layout,
              presentation, and the buying journey.
            </p>

            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-sm">
                <img
                  src="/work/tripple-pluggers/tp-product-desktop.jpg"
                  alt="Tripple Pluggers desktop product page"
                  className="w-full object-cover"
                />
              </div>

              <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-sm">
                <img
                  src="/work/tripple-pluggers/tp-product-mobile.jpg"
                  alt="Tripple Pluggers mobile product page"
                  className="w-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-semibold text-foreground">Real commercial proof</h2>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">
              This is the bit that matters. Live analytics, live orders, and a real checkout experience turn this from
              a nice-looking build into genuine ecommerce proof.
            </p>

            <div className="mt-6 grid gap-6 md:grid-cols-3">
              <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-sm">
                <img
                  src="/work/tripple-pluggers/tp-dashboard.jpg"
                  alt="Tripple Pluggers Shopify analytics"
                  className="w-full object-cover"
                />
              </div>

              <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-sm">
                <img
                  src="/work/tripple-pluggers/tp-orders.jpg"
                  alt="Tripple Pluggers Shopify orders"
                  className="w-full object-cover"
                />
              </div>

              <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-sm">
                <img
                  src="/work/tripple-pluggers/tp-checkout.jpg"
                  alt="Tripple Pluggers checkout"
                  className="w-full object-cover"
                />
              </div>
            </div>
          </div>

          <Card className="mt-12 rounded-3xl p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-foreground">Why it matters</h2>
            <p className="mt-4 max-w-3xl leading-relaxed text-muted-foreground">
              This project proves ecommerce capability with more than visuals. It shows real storefront thinking, real
              UX work, real revenue proof, and the ability to make Shopify feel sharper and more conversion-ready.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button asChild>
                <Link href={`mailto:${EMAIL}?subject=${EMAIL_SUBJECT}&body=${EMAIL_BODY}`}>
                  <Mail className="mr-2 h-4 w-4" />
                  Start a project
                </Link>
              </Button>

              <Button asChild variant="outline">
                <Link href={FACEBOOK_MESSENGER_URL} target="_blank" rel="noreferrer noopener">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Message me
                </Link>
              </Button>

              <Button asChild variant="ghost">
                <Link href="/work/fifo-resume-mate">
                  Next case study
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </Card>
        </div>
      </main>
    </div>
  )
}