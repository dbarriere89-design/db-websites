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
const EMAIL = "des@outbacklens.com"

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
        <div className="mb-3 flex items-center justify-center gap-2">
          <div className="rounded-full border border-border bg-background/70 px-3 py-1 text-xs font-medium text-muted-foreground shadow-sm">
            {props.eyebrow}
          </div>
        </div>
      )}
      <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        {props.title}
      </h2>
      {props.subtitle && (
        <p className="mt-3 text-pretty text-muted-foreground">{props.subtitle}</p>
      )}
    </div>
  )
}

function PreviewCard(props: { title: string; subtitle: string }) {
  return (
    <div className="group rounded-2xl border border-border bg-card/70 p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="aspect-[16/10] overflow-hidden rounded-xl border border-border bg-gradient-to-br from-[hsl(var(--brand-ink))/0.06] via-[hsl(var(--brand-accent))/0.10] to-[hsl(var(--brand-warm))/0.10]">
        <div className="flex h-full items-center justify-center">
          <div className="rounded-2xl border border-border bg-background/70 px-4 py-3 text-center text-xs text-muted-foreground shadow-sm">
            Preview placeholder
            <div className="mt-1 text-[11px]">Drop screenshots later</div>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <div className="text-sm font-semibold text-foreground">{props.title}</div>
        <div className="mt-1 text-sm text-muted-foreground">{props.subtitle}</div>
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-border bg-background/70 backdrop-blur">
        <div className="container mx-auto flex h-16 items-center justify-between px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-2 text-lg font-semibold">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-accent text-accent-foreground shadow-sm">
              <Sparkles className="h-4 w-4" />
            </span>
            DB Websites
          </Link>

          <Button asChild className="shadow-sm">
            <Link href={FACEBOOK_MESSENGER_URL} target="_blank" rel="noreferrer noopener">
              <MessageCircle className="mr-2 h-4 w-4" />
              Message me
            </Link>
          </Button>
        </div>
      </header>

      {/* Hero */}
      <section className="container mx-auto px-6 py-20 text-center lg:py-28">
        <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
          Websites built properly —
          <span className="text-foreground/80"> fast launches to premium custom builds</span>
        </h1>

        <p className="mx-auto mb-10 max-w-3xl text-lg text-muted-foreground sm:text-xl">
          Clean, professional websites for small businesses. No agency fluff, no drawn-out timelines —
          just clear scope, fast delivery, and a site you’re proud to send customers to.
        </p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button size="lg" asChild>
            <Link href={FACEBOOK_MESSENGER_URL} target="_blank" rel="noreferrer noopener">
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
      <section className="container mx-auto px-6 py-20 lg:py-28">
        <SectionHeading
          eyebrow="Start here"
          title="Quick fit check"
          subtitle="If you can answer these 5 things, I can tell you straight away if the $750 build is a good fit."
        />

        <div className="mx-auto max-w-3xl">
          <Card className="rounded-2xl p-8 shadow-sm lg:p-10">
            <ul className="space-y-4">
              {[
                "Business name + what you do",
                "Your services (dot points)",
                "Your location (Cairns/FNQ or elsewhere)",
                "Do you already own a domain? (yes/no)",
                "Any links (Facebook/Instagram/current site)",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check className="mt-0.5 h-5 w-5 text-[hsl(var(--brand-accent))]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* ✅ FIXED CTA STACK */}
            <div className="mt-8 flex flex-col gap-4">
              <Button size="lg" asChild className="w-full shadow-sm">
                <Link href={FACEBOOK_MESSENGER_URL} target="_blank" rel="noreferrer noopener">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Message me
                </Link>
              </Button>

              <Button size="lg" variant="outline" asChild className="w-full">
                <Link href={`mailto:${EMAIL}?subject=${EMAIL_SUBJECT}&body=${EMAIL_BODY}`}>
                  <Mail className="mr-2 h-4 w-4" />
                  Email with template
                </Link>
              </Button>
            </div>

            <div className="mt-6 text-xs text-muted-foreground">
              No logo? No worries. We can still get something clean live quickly.
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-background">
        <div className="container mx-auto px-6 py-10 text-center">
          <p className="text-sm font-semibold">© DB Websites — Built by Des</p>
          <p className="mt-1 text-sm text-muted-foreground">Websites built properly</p>
        </div>
      </footer>
    </div>
  )
}
