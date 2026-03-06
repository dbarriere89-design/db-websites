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

export default function TripplePluggersPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-background/80 backdrop-blur">
        <div className="container mx-auto flex h-16 items-center justify-between px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-2 text-lg font-semibold tracking-tight text-foreground">
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
        <div className="mx-auto max-w-5xl">
          <div className="mb-6 inline-flex rounded-full border border-border bg-background/70 px-3 py-1 text-xs font-medium text-muted-foreground">
            Shopify ecommerce
          </div>

          <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Tripple Pluggers
          </h1>

          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-muted-foreground">
            A Shopify ecommerce project focused on stronger product presentation, cleaner purchase flow, and mobile-first
            UX for an Australian product brand.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {["925 visitors", "15 orders", "$645 revenue", "1.62% conversion"].map((stat) => (
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
              src="/work/tripple-pluggers-case-study.jpg"
              alt="Tripple Pluggers homepage screenshot"
              className="w-full object-cover"
            />
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <Card className="rounded-3xl p-8 shadow-sm">
              <h2 className="text-2xl font-semibold text-foreground">What the project needed</h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                The goal was to create a product-focused storefront that felt stronger visually, worked well on mobile,
                and made it easier for visitors to move from browsing into buying.
              </p>

              <div className="mt-6 space-y-3">
                {[
                  "Stronger storefront presentation",
                  "Cleaner product and variant UX",
                  "Better mobile-first layout decisions",
                  "A more credible, conversion-friendly buying experience",
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
                  "Shopify storefront setup and refinement",
                  "Homepage and product presentation improvements",
                  "Variant and product-page UX cleanup",
                  "Mobile usability improvements",
                  "General conversion-focused polish",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-[hsl(var(--brand-warm))]" />
                    <span className="text-sm text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-sm">
              <img
                src="/work/tripple-pluggers-case-study.jpg"
                alt="Tripple Pluggers storefront screenshot"
                className="w-full object-cover"
              />
            </div>

            <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-sm">
              <img
                src="/work/tripple-pluggers-case-study.jpg"
                alt="Tripple Pluggers alternate screenshot"
                className="w-full object-cover"
              />
            </div>
          </div>

          <Card className="mt-12 rounded-3xl p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-foreground">Why it matters</h2>
            <p className="mt-4 max-w-3xl leading-relaxed text-muted-foreground">
              This project is strong proof of ecommerce capability because it combines real storefront work with real
              traffic, real orders, and real sales data. It shows more than visual design — it shows commercial thinking.
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