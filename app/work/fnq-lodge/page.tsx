import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowLeft, ArrowRight, Check, Mail, MessageCircle } from "lucide-react"
import Lightbox from "@/components/lightbox"

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
const AFTER_IMAGE = "/work/fnq-lodge/after.jpg"
const BOOKING_MOBILE_IMAGE = "/work/fnq-lodge/booking-mobile.jpg"
const CHECKOUT_DESKTOP_IMAGE = "/work/fnq-lodge/checkout-desktop-sharp.jpg"

export default function FNQLodgePage() {
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
            WordPress booking website
          </div>

          <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            FNQ Lodge
          </h1>

          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-muted-foreground">
            A WordPress accommodation and booking project focused on improving page structure, mobile usability, and the
            reservation journey — with before and after proof to show the difference clearly.
          </p>

          <div className="mt-10 overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
            <Lightbox
              src={HERO_IMAGE}
              alt="FNQ Lodge improved homepage screenshot"
              className="w-full object-cover"
            />
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <Card className="rounded-3xl p-8 shadow-sm">
              <h2 className="text-2xl font-semibold text-foreground">The challenge</h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                The site needed a clearer accommodation story, a cleaner booking path, and a more polished front-end
                experience so visitors could move from browsing to reserving without friction or confusion.
              </p>

              <div className="mt-6 space-y-3">
                {[
                  "Make the stay feel more premium online",
                  "Improve the booking journey and CTA flow",
                  "Clean up awkward layout and presentation issues",
                  "Strengthen mobile usability for real visitors",
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
                  "WordPress layout and front-end cleanup",
                  "Booking-page and CTA improvements",
                  "Booking and checkout flow improvements",
                  "Mobile presentation and usability work",
                  "Sharper structure for a tourism/stay audience",
                  "General polish to make the property feel more credible",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-[hsl(var(--brand-warm))]" />
                    <span className="text-sm text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-semibold text-foreground">Before and after</h2>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">
              This is where the project earns its keep. Rather than vague claims about “improvements”, the before and
              after structure makes the change in presentation and booking flow much easier to understand.
            </p>

            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <Card className="overflow-hidden rounded-3xl p-0 shadow-sm">
                <div className="border-b border-border px-6 py-4">
                  <div className="text-sm font-semibold text-foreground">Before</div>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Clunkier presentation, weaker visual hierarchy, and a less obvious reservation path.
                  </p>
                </div>
                <div className="p-6">
                  <Lightbox
                    src={BEFORE_IMAGE}
                    alt="FNQ Lodge before redesign screenshot"
                    className="w-full object-cover"
                  />
                </div>
              </Card>

              <Card className="overflow-hidden rounded-3xl p-0 shadow-sm">
                <div className="border-b border-border px-6 py-4">
                  <div className="text-sm font-semibold text-foreground">After</div>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Cleaner structure, stronger accommodation presentation, and a clearer path into booking.
                  </p>
                </div>
                <div className="p-6">
                  <Lightbox
                    src={AFTER_IMAGE}
                    alt="FNQ Lodge after redesign screenshot"
                    className="w-full object-cover"
                  />
                </div>
              </Card>
            </div>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-semibold text-foreground">Booking & checkout flow</h2>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">
              Improving the reservation experience was a key part of the project. The booking interface and checkout flow
              were cleaned up to make the process clearer, more trustworthy, and easier to use across desktop and mobile.
            </p>

            <div className="mt-6 grid gap-6 lg:grid-cols-[0.7fr_1.3fr]">
              <Card className="overflow-hidden rounded-3xl p-0 shadow-sm">
                <div className="border-b border-border px-6 py-4">
                  <div className="text-sm font-semibold text-foreground">Mobile booking interface</div>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Mobile booking page with guest selection and date picker flow.
                  </p>
                </div>
                <div className="p-6">
                  <Lightbox
                    src={BOOKING_MOBILE_IMAGE}
                    alt="FNQ Lodge mobile booking page screenshot"
                    className="mx-auto max-h-[720px] w-auto object-contain"
                  />
                </div>
              </Card>

              <Card className="overflow-hidden rounded-3xl p-0 shadow-sm">
                <div className="border-b border-border px-6 py-4">
                  <div className="text-sm font-semibold text-foreground">Checkout experience</div>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Checkout layout with booking summary, guest details form, and Stripe payment section.
                  </p>
                </div>
                <div className="p-6">
                  <Lightbox
  src={CHECKOUT_DESKTOP_IMAGE}
  alt="FNQ Lodge checkout page screenshot"
  className="mx-auto max-w-[950px] w-full object-contain"
/>
                </div>
              </Card>
            </div>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <Card className="rounded-3xl p-8 shadow-sm">
              <h2 className="text-2xl font-semibold text-foreground">Why this case study matters</h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                It shows that the work isn’t limited to Shopify or modern app builds. There’s real value in taking an
                existing WordPress site and making it cleaner, easier to use, and more commercially effective.
              </p>

              <p className="mt-4 leading-relaxed text-muted-foreground">
                That’s especially useful for accommodation, tourism, service businesses, and local operators sitting on
                websites that technically work but feel messy, dated, or harder to use than they should be.
              </p>
            </Card>

            <Card className="rounded-3xl p-8 shadow-sm">
              <h2 className="text-2xl font-semibold text-foreground">Key outcomes</h2>
              <div className="mt-6 space-y-3">
                {[
                  "Clearer accommodation positioning",
                  "A stronger reservation path",
                  "Better booking and checkout UX",
                  "Better mobile usability",
                  "More premium front-end presentation",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-[hsl(var(--brand-accent))]" />
                    <span className="text-sm text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          <Card className="mt-12 rounded-3xl p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-foreground">Why it matters</h2>
            <p className="mt-4 max-w-3xl leading-relaxed text-muted-foreground">
              This project adds breadth to the portfolio and proves I can improve booking and accommodation websites, not
              just ecommerce stores or digital funnels. The before/after framing plus the booking and checkout flow proof
              makes that capability much stronger.
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
                <Link href="/work/tripple-pluggers">
                  Back to ecommerce case study
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