import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Check, MessageCircle, Mail, ArrowRight, Sparkles } from "lucide-react"

const FACEBOOK_MESSENGER_URL = "https://m.me/desbarriere"
const EMAIL = "contact@dbwebsites.com"

const EMAIL_SUBJECT = encodeURIComponent("Website enquiry (DB Websites)")
const EMAIL_BODY = encodeURIComponent(
  [
    "Hey Des,",
    "",
    "Keen to chat about a website.",
    "",
    "Business name:",
    "Industry / trade:",
    "Services (dot points):",
    "Location (suburb/city):",
    "Do you already own a domain? (yes/no):",
    "Any links (FB/IG/current site):",
    "",
    "Goals (more calls, look professional, show services, etc):",
    "Anything you want on the site (pricing, gallery, testimonials, etc):",
    "",
    "Cheers,",
    "",
  ].join("\n")
)

function SectionHeading(props: { eyebrow?: string; title: string; subtitle?: string }) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      {props.eyebrow && (
        <div className="mb-3 flex justify-center">
          <div className="rounded-full border px-3 py-1 text-xs text-muted-foreground">
            {props.eyebrow}
          </div>
        </div>
      )}
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{props.title}</h2>
      {props.subtitle && (
        <p className="mt-3 text-muted-foreground">{props.subtitle}</p>
      )}
    </div>
  )
}

function PreviewCard({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="rounded-2xl border p-4 shadow-sm">
      <div className="aspect-[16/10] rounded-xl border bg-muted/40 flex items-center justify-center text-xs text-muted-foreground">
        Preview placeholder
      </div>
      <div className="mt-4">
        <div className="font-semibold">{title}</div>
        <div className="text-sm text-muted-foreground">{subtitle}</div>
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b bg-background/70 backdrop-blur">
        <div className="container mx-auto flex h-16 items-center justify-between px-6">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-accent">
              <Sparkles className="h-4 w-4" />
            </span>
            DB Websites
          </Link>

          <Button asChild>
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
      </header>

      {/* Hero */}
      <section className="container mx-auto px-6 py-24 text-center">
        <h1 className="text-4xl font-bold sm:text-5xl">
          Websites built properly
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground">
          Clean, professional sites for small businesses — fast, simple, and done right.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row justify-center">
          <Button size="lg" asChild>
            <Link
              href={FACEBOOK_MESSENGER_URL}
              target="_blank"
              rel="noreferrer noopener"
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              Message me
            </Link>
          </Button>

          <Button size="lg" variant="outline" asChild>
            <Link href={`mailto:${EMAIL}?subject=${EMAIL_SUBJECT}&body=${EMAIL_BODY}`}>
              <Mail className="mr-2 h-4 w-4" />
              Email me
            </Link>
          </Button>
        </div>
      </section>

      {/* Fit Check */}
      <section className="container mx-auto px-6 py-24">
        <SectionHeading
          eyebrow="Start here"
          title="Quick fit check"
          subtitle="Answer these and I’ll tell you if the $750 build is a good fit."
        />

        <div className="mx-auto max-w-3xl">
          <Card className="p-8">
            <ul className="space-y-3">
              {[
                "Business name + what you do",
                "Your services",
                "Your location",
                "Do you own a domain?",
                "Any links",
              ].map((x) => (
                <li key={x} className="flex gap-3">
                  <Check className="h-5 w-5 text-accent" />
                  {x}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              {/* Primary CTA stays full width */}
              <Button size="lg" asChild className="w-full">
                <Link
                  href={FACEBOOK_MESSENGER_URL}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Message me
                </Link>
              </Button>

              {/* Email button no longer full width */}
              <Button size="lg" variant="outline" asChild>
                <Link href={`mailto:${EMAIL}?subject=${EMAIL_SUBJECT}&body=${EMAIL_BODY}`}>
                  <Mail className="mr-2 h-4 w-4" />
                  Email with template
                </Link>
              </Button>
            </div>
          </Card>
        </div>
      </section>
    </div>
  )
}
