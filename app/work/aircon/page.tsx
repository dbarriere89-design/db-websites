"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowLeft, ArrowRight, Check, Mail } from "lucide-react"

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
    "What do you need help with?",
    "",
    "Current website (if any):",
    "",
    "Main goal:",
    "Budget:",
    "Timeline:",
    "",
    "Cheers,",
  ].join("\n")
)

function BulletList({ items }: { items: string[] }) {
  return (
    <div className="space-y-3">
      {items.map((item) => (
        <div key={item} className="flex items-start gap-3">
          <Check className="mt-0.5 h-5 w-5 shrink-0 text-[hsl(var(--brand-accent))]" />
          <span className="text-sm leading-relaxed text-foreground sm:text-[15px]">
            {item}
          </span>
        </div>
      ))}
    </div>
  )
}

export default function AirconProjectPage() {
  return (
    <div className="min-h-screen bg-background">
      <section className="border-b border-border bg-[linear-gradient(180deg,rgba(10,160,185,0.03),rgba(255,255,255,1))]">
        <div className="container mx-auto px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
          <div className="mx-auto max-w-6xl">
            <Link
              href="/#work"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to work
            </Link>

            <Card className="group mt-6 overflow-hidden rounded-[30px] border border-border bg-white p-0 shadow-[0_14px_40px_rgba(0,0,0,0.08)]">
              <div className="grid gap-0 lg:grid-cols-[1.05fr_0.95fr]">
                <div className="relative block overflow-hidden border-b border-border bg-muted lg:border-b-0 lg:border-r">
                  <img
                    src="/work/aircon/hero.jpg"
                    alt="Air conditioning business website screenshot"
                    className="h-full min-h-[280px] w-full object-cover"
                  />
                </div>

                <div className="p-6 sm:p-8 lg:p-10">
                  <div className="mb-3 inline-flex rounded-full border border-border bg-background/80 px-3 py-1 text-xs font-medium text-muted-foreground shadow-sm">
                    Service website
                  </div>

                  <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                    Air Conditioning Business
                  </h1>

                  <p className="mt-1 text-sm font-medium text-muted-foreground">
                    Local tradie website rebuild
                  </p>

                  <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
                    A clean, modern service website designed to build trust faster,
                    clearly explain services, and make it easy for customers to
                    enquire or book without friction.
                  </p>

                  <div className="mt-6 grid grid-cols-2 gap-3">
                    {[
                      "Built from scratch",
                      "Mobile-friendly layout",
                      "Clear service structure",
                      "Enquiry-focused flow",
                    ].map((stat, index) => (
                      <div
                        key={stat}
                        className={`rounded-2xl border px-4 py-3 text-sm font-medium text-foreground shadow-sm ${
                          index === 0 || index === 2
                            ? "border-border bg-sky-50"
                            : "border-border bg-white"
                        }`}
                      >
                        {stat}
                      </div>
                    ))}
                  </div>

                  <div className="mt-6">
                    <BulletList
                      items={[
                        "Stronger first impression and cleaner layout",
                        "Clear service breakdown for easier understanding",
                        "Improved mobile experience for on-the-go customers",
                        "Simplified enquiry flow to increase leads",
                      ]}
                    />
                  </div>

                  <div className="mt-8 flex flex-wrap gap-3">
                    <Button asChild className="shadow-sm">
                      <Link href={`mailto:${EMAIL}?subject=${EMAIL_SUBJECT}&body=${EMAIL_BODY}`}>
                        <Mail className="mr-2 h-4 w-4" />
                        Start a similar project
                      </Link>
                    </Button>

                    <Button variant="outline" asChild className="bg-white/80 shadow-sm">
                      <Link href="/#work">
                        View more work
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-background">
        <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
            <Card className="rounded-3xl border border-border bg-white p-8 shadow-[0_12px_30px_rgba(0,0,0,0.06)]">
              <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                The situation
              </div>
              <h2 className="mt-2 text-2xl font-bold text-foreground">
                Built properly from the ground up
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                This wasn’t a small tweak or redesign. The site was built from scratch
                with a focus on clarity, trust, and making it easy for customers to
                understand services and get in touch.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                For a local service business, the goal was simple: make the business
                look more established, explain the offer clearly, and create a smoother
                path for enquiries.
              </p>
            </Card>

            <Card className="rounded-3xl border border-border bg-white p-8 shadow-[0_12px_30px_rgba(0,0,0,0.06)]">
              <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Focus
              </div>
              <h2 className="mt-2 text-2xl font-bold text-foreground">
                What the site needed to do
              </h2>
              <div className="mt-5">
                <BulletList
                  items={[
                    "Make the business look more professional and trustworthy",
                    "Clearly explain services and what’s offered",
                    "Improve mobile usability for customers on the go",
                    "Make it easier for people to enquire or get in touch",
                  ]}
                />
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-muted/30">
        <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-3 inline-flex rounded-full border border-border bg-white/90 px-3 py-1 text-xs font-medium text-muted-foreground shadow-sm">
              Real work
            </div>
            <h2 className="text-3xl font-bold text-foreground">
              Real work, real jobs
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              The website reflects the kind of work the business actually does —
              from everyday installs through to larger commercial jobs.
            </p>
          </div>

          <div className="mx-auto mt-10 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <img
              src="/work/aircon/hydro.jpg"
              alt="Aircon hydro cleaning service"
              className="h-[220px] w-full rounded-2xl border border-border object-cover shadow-sm"
            />

            <img
              src="/work/aircon/install.jpg"
              alt="Air conditioning installation units"
              className="h-[220px] w-full rounded-2xl border border-border object-cover shadow-sm"
            />

            <img
              src="/work/aircon/house.jpg"
              alt="Residential air conditioning install"
              className="h-[220px] w-full rounded-2xl border border-border object-cover shadow-sm"
            />

            <img
              src="/work/aircon/crane.jpg"
              alt="Commercial air conditioning crane install"
              className="h-[220px] w-full rounded-2xl border border-border object-cover shadow-sm"
            />
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-background">
        <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-5xl">
            <div className="text-center">
              <div className="mb-3 inline-flex rounded-full border border-border bg-background/80 px-3 py-1 text-xs font-medium text-muted-foreground shadow-sm">
                Improvements
              </div>
              <h2 className="text-3xl font-bold text-foreground">
                What was improved
              </h2>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              <Card className="rounded-3xl border border-border bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-foreground">
                  First impression
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Cleaner layout, better spacing, and a more modern look that
                  immediately feels more professional.
                </p>
              </Card>

              <Card className="rounded-3xl border border-border bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-foreground">
                  Service clarity
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Clear breakdown of services so customers quickly understand what’s
                  offered without digging through the site.
                </p>
              </Card>

              <Card className="rounded-3xl border border-border bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-foreground">
                  Mobile experience
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Improved layout and spacing on mobile so the site feels easy to use
                  on smaller screens.
                </p>
              </Card>

              <Card className="rounded-3xl border border-border bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-foreground">
                  Enquiry flow
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Simpler, clearer path for customers to get in touch or request a
                  quote without friction.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-[linear-gradient(180deg,rgba(10,160,185,0.04),rgba(255,255,255,1))]">
        <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-3 inline-flex rounded-full border border-border bg-background/80 px-3 py-1 text-xs font-medium text-muted-foreground shadow-sm">
              The result
            </div>
            <h2 className="text-3xl font-bold text-foreground">The result</h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              A cleaner, more modern website that better represents the business,
              builds trust faster, and makes it easier for customers to take action.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Instead of just having a website, the business now has something that
              feels more established and supports enquiries properly.
            </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-3 inline-flex rounded-full border border-border bg-background/80 px-3 py-1 text-xs font-medium text-muted-foreground shadow-sm">
            Ready when you are
          </div>

          <h2 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Want something like this for your business?
          </h2>

          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
            Send me your website or idea and I’ll tell you what’s worth fixing,
            improving, or rebuilding.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" asChild className="shadow-md">
              <Link href={`mailto:${EMAIL}?subject=${EMAIL_SUBJECT}&body=${EMAIL_BODY}`}>
                <Mail className="mr-2 h-4 w-4" />
                Start a project
              </Link>
            </Button>

            <Button size="lg" variant="outline" asChild className="bg-white/80 shadow-sm">
              <Link href="/#work">
                View more work
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}