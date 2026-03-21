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
          <Check className="mt-0.5 h-5 w-5 text-[hsl(var(--brand-accent))]" />
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

      {/* BACK LINK */}
      <div className="container mx-auto px-4 pt-6 sm:px-6 lg:px-8">
        <Link
          href="/#work"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to work
        </Link>
      </div>

      {/* HERO */}
      <section className="container mx-auto px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <div className="mx-auto max-w-5xl text-center">
          <div className="mb-3 inline-flex rounded-full border border-border bg-background/80 px-3 py-1 text-xs font-medium text-muted-foreground shadow-sm">
            Service website
          </div>

          <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Air conditioning business website
          </h1>

          <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            A cleaner, more professional website designed to build trust faster,
            clearly explain services, and make it easier for customers to enquire.
          </p>
        </div>

        {/* HERO IMAGE */}
        <div className="mx-auto mt-10 max-w-5xl overflow-hidden rounded-[28px] border border-border bg-white shadow-[0_20px_60px_rgba(0,0,0,0.12)]">
          <img
            src="/work/aircon/hero.jpg"
            alt="Air conditioning website screenshot"
            className="w-full h-auto object-cover"
          />
        </div>
      </section>

      {/* CONTEXT */}
      <section className="border-y border-border bg-muted/30">
        <div className="container mx-auto px-4 py-14 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-2">

            <div>
              <h2 className="text-2xl font-semibold text-foreground">
                The situation
              </h2>

              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                The existing website didn’t reflect the quality of the business.
                It felt outdated, unclear, and didn’t make it easy for customers
                to understand services or take the next step.
              </p>

              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Like a lot of tradie websites, it had the basics — but lacked
                structure, clarity, and a strong first impression.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-foreground">
                The goal
              </h2>

              <div className="mt-4">
                <BulletList
                  items={[
                    "Make the business look more professional and trustworthy",
                    "Clearly explain services and what’s offered",
                    "Improve mobile usability for customers on the go",
                    "Make it easier for people to enquire or get in touch",
                  ]}
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* IMPROVEMENTS */}
      <section className="container mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-5xl">

          <h2 className="text-3xl font-bold text-foreground text-center">
            What was improved
          </h2>

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
      </section>

<section className="border-y border-border bg-muted/30">
  <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">

    <div className="mx-auto max-w-4xl text-center">
      <h2 className="text-3xl font-bold text-foreground">
        Real work, real jobs
      </h2>
      <p className="mt-4 text-muted-foreground">
        The website reflects the kind of work the business actually does —
        from everyday installs through to larger commercial jobs.
      </p>
    </div>

    <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

      <img
        src="/work/aircon/hydro.jpg"
        alt="Aircon hydro cleaning service"
        className="rounded-2xl border border-border object-cover w-full h-[220px]"
      />

      <img
        src="/work/aircon/install.jpg"
        alt="Air conditioning installation units"
        className="rounded-2xl border border-border object-cover w-full h-[220px]"
      />

      <img
        src="/work/aircon/house.jpg"
        alt="Residential air conditioning install"
        className="rounded-2xl border border-border object-cover w-full h-[220px]"
      />

      <img
        src="/work/aircon/crane.jpg"
        alt="Commercial air conditioning crane install"
        className="rounded-2xl border border-border object-cover w-full h-[220px]"
      />

    </div>
  </div>
</section>

      {/* RESULT */}
      <section className="border-y border-border bg-[linear-gradient(180deg,rgba(10,160,185,0.04),rgba(255,255,255,1))]">
        <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-3xl text-center">

            <h2 className="text-3xl font-bold text-foreground">
              The result
            </h2>

            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              A cleaner, more modern website that better represents the business,
              builds trust faster, and makes it easier for customers to take action.
            </p>

            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Instead of just “having a website”, the business now has something
              that actually supports enquiries and looks the part.
            </p>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">

          <h2 className="text-4xl font-bold text-foreground">
            Want something like this for your business?
          </h2>

          <p className="mt-4 text-lg text-muted-foreground">
            Send me your website or idea and I’ll tell you what’s worth fixing,
            improving, or rebuilding.
          </p>

          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button size="lg" asChild>
              <Link href={`mailto:${EMAIL}?subject=${EMAIL_SUBJECT}&body=${EMAIL_BODY}`}>
                <Mail className="mr-2 h-4 w-4" />
                Start a project
              </Link>
            </Button>

            <Button size="lg" variant="outline" asChild>
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