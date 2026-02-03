"use client"

import Link from "next/link"
import { useEffect, useMemo, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Check, MessageCircle, Mail, ArrowRight, Sparkles, X } from "lucide-react"

const FACEBOOK_MESSENGER_URL = "https://m.me/desbarriere"
const EMAIL = "des@outbacklens.com" // TODO: replace if needed

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
      {props.eyebrow ? (
        <div className="mb-3 flex items-center justify-center gap-2">
          <div className="rounded-full border border-border bg-background/70 px-3 py-1 text-xs font-medium text-muted-foreground shadow-sm">
            {props.eyebrow}
          </div>
        </div>
      ) : null}
      <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        {props.title}
      </h2>
      {props.subtitle ? (
        <p className="mt-3 text-pretty text-muted-foreground">{props.subtitle}</p>
      ) : null}
    </div>
  )
}

type WorkItem = {
  title: string
  subtitle: string
  badge?: string
  imgSrc: string
  // Thumbnail crop control (so FIFO can show pricing headers instead of the middle)
  thumbObjectPosition?: string // e.g. "center", "center top", "50% 20%"
  // Optional: open link to the live site (not required)
  href?: string
}

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ")
}

function WorkPreviewCard(props: {
  item: WorkItem
  onOpen: (item: WorkItem) => void
}) {
  const { item, onOpen } = props

  return (
    <button
      type="button"
      onClick={() => onOpen(item)}
      className="group text-left"
      aria-label={`Open preview: ${item.title}`}
    >
      <div className="rounded-2xl border border-border bg-card/70 p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
        <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-border bg-muted">
          {/* Badge */}
          {item.badge ? (
            <div className="absolute left-3 top-3 z-10 rounded-full border border-border bg-background/70 px-3 py-1 text-xs font-medium text-muted-foreground shadow-sm backdrop-blur">
              {item.badge}
            </div>
          ) : null}

          {/* Thumbnail: intentionally cropped/zoomed */}
          <img
            src={item.imgSrc}
            alt={`${item.title} screenshot`}
            className={cx(
              "h-full w-full object-cover transition-transform duration-300",
              "group-hover:scale-[1.03]"
            )}
            style={{ objectPosition: item.thumbObjectPosition ?? "center" }}
            loading="lazy"
          />

          {/* Subtle overlay hint */}
          <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.35),rgba(0,0,0,0)_55%)]" />
            <div className="absolute bottom-3 left-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-3 py-1 text-xs text-white/90 backdrop-blur">
              Click to view full size <ArrowRight className="h-3.5 w-3.5" />
            </div>
          </div>
        </div>

        <div className="mt-4">
          <div className="text-sm font-semibold text-foreground">{item.title}</div>
          <div className="mt-1 text-sm text-muted-foreground">{item.subtitle}</div>
        </div>
      </div>
    </button>
  )
}

function ImageModal(props: {
  open: boolean
  item: WorkItem | null
  onClose: () => void
}) {
  const { open, item, onClose } = props

  useEffect(() => {
    if (!open) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [open, onClose])

  if (!open || !item) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label={`Full preview: ${item.title}`}
      onMouseDown={(e) => {
        // close if click the backdrop (not the content)
        if (e.target === e.currentTarget) onClose()
      }}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      {/* Modal content */}
      <div className="relative z-10 w-full max-w-6xl overflow-hidden rounded-2xl border border-border bg-background shadow-2xl">
        <div className="flex items-start justify-between gap-4 border-b border-border px-4 py-3 sm:px-6">
          <div className="min-w-0">
            <div className="text-sm font-semibold text-foreground">{item.title}</div>
            <div className="mt-0.5 text-xs text-muted-foreground">{item.subtitle}</div>
          </div>

          <div className="flex shrink-0 items-center gap-2">
            {item.href ? (
              <Button asChild variant="outline" size="sm">
                <a href={item.href} target="_blank" rel="noreferrer noopener">
                  Visit site <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            ) : null}

            <Button variant="ghost" size="icon" onClick={onClose} aria-label="Close preview">
              <X className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Full image area (no crop) */}
        <div className="bg-muted/30 p-3 sm:p-4">
          <div className="relative max-h-[78vh] w-full overflow-auto rounded-xl border border-border bg-background">
            <img
              src={item.imgSrc}
              alt={`${item.title} full screenshot`}
              className="mx-auto h-auto max-h-[78vh] w-auto max-w-full object-contain"
            />
          </div>

          <div className="mt-3 text-xs text-muted-foreground">
            Tip: this view is full size (no crop). Press <span className="font-medium">ESC</span> to close.
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Home() {
  const WORK_ITEMS: WorkItem[] = useMemo(
    () => [
      {
        title: "Mechanic Direct",
        subtitle: "Premium UI + clear conversion",
        badge: "Live product",
        imgSrc: "/work/mechanic-direct.png",
        thumbObjectPosition: "center left",
        // href: "https://mechanicdirect.com.au",
      },
      {
        title: "FIFO Resume Mate",
        subtitle: "Pricing that sells the value",
        badge: "Pricing section",
        imgSrc: "/work/fifo-resume-mate.png",
        // FIFO is tall; make the thumbnail show the *top* where the plan names/prices are
        thumbObjectPosition: "center top",
        // href: "https://fiforesumemate.com",
      },
      {
        title: "Outback Lens",
        subtitle: "Strong hero visual + brand feel",
        badge: "Hero section",
        imgSrc: "/work/outback-lens.png",
        thumbObjectPosition: "center",
        // href: "https://outbacklens.com",
      },
    ],
    []
  )

  const [openItem, setOpenItem] = useState<WorkItem | null>(null)

  return (
    <div className="min-h-screen bg-background">
      {/* Modal */}
      <ImageModal open={!!openItem} item={openItem} onClose={() => setOpenItem(null)} />

      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-border bg-background/70 backdrop-blur">
        <div className="container mx-auto flex h-16 items-center justify-between px-6 lg:px-8">
          <Link
            href="/"
            className="flex items-center gap-2 text-lg font-semibold tracking-tight text-foreground"
          >
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-accent text-accent-foreground shadow-sm">
              <Sparkles className="h-4 w-4" />
            </span>
            DB Websites
          </Link>

          <nav className="flex items-center gap-7">
            <Link
              href="#pricing"
              className="hidden text-sm font-medium text-muted-foreground transition-colors hover:text-foreground sm:inline-block"
            >
              Pricing
            </Link>
            <Link
              href="#work"
              className="hidden text-sm font-medium text-muted-foreground transition-colors hover:text-foreground sm:inline-block"
            >
              Work
            </Link>
            <Link
              href="#faq"
              className="hidden text-sm font-medium text-muted-foreground transition-colors hover:text-foreground sm:inline-block"
            >
              FAQ
            </Link>

            <Button asChild className="shadow-sm">
              <Link href={FACEBOOK_MESSENGER_URL} target="_blank" rel="noreferrer noopener">
                <MessageCircle className="mr-2 h-4 w-4" />
                Message me
              </Link>
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-24 top-24 h-[520px] w-[520px] rounded-full bg-[hsl(var(--brand-accent))/0.10] blur-3xl" />
          <div className="absolute -right-24 top-36 h-[480px] w-[480px] rounded-full bg-[hsl(var(--brand-warm))/0.10] blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(255,255,255,0.7),transparent_55%)]" />
          <div
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage:
                `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="container relative mx-auto px-6 py-20 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-5xl text-center">
            <div className="mb-6 text-xs text-muted-foreground">
              Built by a local business owner (Cairns / FNQ)
            </div>

            <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Websites built properly —
              <span className="text-foreground/80"> fast launches to premium custom builds</span>
            </h1>

            <p className="mx-auto mb-10 max-w-3xl text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
              Clean, professional websites for small businesses. No agency fluff, no drawn-out timelines —
              just clear scope, fast delivery, and a site you’re proud to send customers to.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" asChild className="shadow-sm">
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

            <div className="mt-10 flex flex-wrap items-center justify-center gap-3 text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-3 py-1">
                ✅ Mobile-first
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-3 py-1">
                ✅ Clear scope
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-3 py-1">
                ✅ Deployed on Vercel
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-3 py-1">
                ✅ Domains optional
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Work Preview */}
      <section id="work" className="border-y border-border bg-muted/30">
        <div className="container mx-auto px-6 py-16 lg:px-8 lg:py-24">
          <SectionHeading
            eyebrow="Proof"
            title="A quick look at the style"
            subtitle="Real sites. Clean layout, clear messaging, premium feel."
          />

          <div className="grid gap-6 md:grid-cols-3">
            {WORK_ITEMS.map((item) => (
              <WorkPreviewCard key={item.title} item={item} onOpen={setOpenItem} />
            ))}
          </div>

          <div className="mx-auto mt-10 max-w-3xl text-center text-sm text-muted-foreground">
            Click any preview to see the full screenshot — no crop.
          </div>
        </div>
      </section>

      {/* Conversion upgrade: Fit Check */}
      <section className="container mx-auto px-6 py-16 lg:px-8 lg:py-24">
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
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-[hsl(var(--brand-accent))]" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-stretch">
              <Button size="lg" asChild className="w-full shadow-sm">
                <Link href={FACEBOOK_MESSENGER_URL} target="_blank" rel="noreferrer noopener">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Message me
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
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

      {/* Value Proposition */}
      <section className="border-y border-border bg-muted/30">
        <div className="container mx-auto px-6 py-16 lg:px-8 lg:py-24">
          <SectionHeading
            eyebrow="Why this works"
            title="Simple, professional, done properly"
            subtitle="You don’t need an agency. You need a clean site that turns visitors into calls."
          />

          <div className="grid gap-6 md:grid-cols-3">
            <Card className="group rounded-2xl p-8 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[hsl(var(--brand-accent))/0.18] text-foreground">
                <ArrowRight className="h-5 w-5" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-foreground">Straightforward builds</h3>
              <p className="text-pretty leading-relaxed text-muted-foreground">
                Clear scope, no jargon. You’ll know exactly what you’re getting and when.
              </p>
            </Card>

            <Card className="group rounded-2xl p-8 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[hsl(var(--brand-warm))/0.18] text-foreground">
                <ArrowRight className="h-5 w-5" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-foreground">Mobile-first design</h3>
              <p className="text-pretty leading-relaxed text-muted-foreground">
                Looks great on any device. Most customers browse on their phones — your site should too.
              </p>
            </Card>

            <Card className="group rounded-2xl p-8 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accent/20 text-foreground">
                <ArrowRight className="h-5 w-5" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-foreground">Delivered properly</h3>
              <p className="text-pretty leading-relaxed text-muted-foreground">
                Fast when needed, premium when it matters. The right level of polish for your business.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="container mx-auto px-6 py-16 lg:px-8 lg:py-24">
        <SectionHeading
          eyebrow="Pricing"
          title="Simple and transparent"
          subtitle="One straightforward option to get you live — premium builds quoted separately."
        />

        <div className="mx-auto max-w-3xl">
          <Card className="relative overflow-hidden rounded-2xl p-8 shadow-sm lg:p-10">
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0)_55%,rgba(0,0,0,0.03)_100%)]" />
            <div className="relative">
              <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-foreground">Fast Launch Website</h3>
                  <p className="mt-3 text-pretty text-muted-foreground">
                    Ideal for tradies, local services, and small businesses who want a clean site live quickly.
                  </p>
                  <p className="mt-3 text-sm text-muted-foreground">
                    Custom & premium builds scoped separately.
                  </p>

                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {["Mobile-first layout", "Contact form", "Basic SEO", "Two tweak rounds"].map((x) => (
                      <div key={x} className="flex items-center gap-2 text-sm text-foreground">
                        <span className="h-1.5 w-1.5 rounded-full bg-[hsl(var(--brand-warm))]" />
                        {x}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl border border-border bg-background/60 p-6 md:w-[320px]">
                  <div className="text-sm font-semibold text-muted-foreground">Price</div>
                  <div className="mt-2 text-4xl font-bold tracking-tight text-foreground">$750</div>
                  <div className="mt-1 text-sm text-muted-foreground">AUD — one-off</div>

                  <Button size="lg" className="mt-6 w-full shadow-sm" asChild>
                    <Link href={FACEBOOK_MESSENGER_URL} target="_blank" rel="noreferrer noopener">
                      Message me to check fit
                    </Link>
                  </Button>

                  <div className="mt-3 text-xs text-muted-foreground">
                    Domain is optional and can be added after launch.
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="border-y border-border bg-muted/30">
        <div className="container mx-auto px-6 py-16 lg:px-8 lg:py-24">
          <SectionHeading eyebrow="FAQ" title="Quick answers" subtitle="If you’ve got more questions, just message me." />

          <div className="mx-auto max-w-3xl">
            <Card className="rounded-2xl p-6 shadow-sm sm:p-8">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-left text-base font-semibold">
                    Do you do domains?
                  </AccordionTrigger>
                  <AccordionContent className="text-pretty text-muted-foreground leading-relaxed">
                    Yes — domain registration and setup is optional and can be added after launch. I can guide you through it or handle it for you as an add-on.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-left text-base font-semibold">
                    How fast is delivery?
                  </AccordionTrigger>
                  <AccordionContent className="text-pretty text-muted-foreground leading-relaxed">
                    Fast Launch sites can be very quick once I’ve got your basics (business name, services, logo/photos). Premium custom builds are scoped based on complexity.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-left text-base font-semibold">
                    What's not included?
                  </AccordionTrigger>
                  <AccordionContent className="text-pretty text-muted-foreground leading-relaxed">
                    The Fast Launch package doesn’t include e-commerce, booking systems, custom integrations, or unlimited revisions. Those are quoted as premium builds.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-left text-base font-semibold">
                    What should I send you to start?
                  </AccordionTrigger>
                  <AccordionContent className="text-pretty text-muted-foreground leading-relaxed">
                    Business name, services (dot points), location, whether you own a domain, and any links (FB/IG/current site). If you email, the template is pre-filled for you.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="border-t border-border bg-muted/30">
        <div className="container mx-auto px-6 py-16 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              If you want a website done properly without the runaround, let’s chat.
            </h2>
            <p className="mt-3 text-pretty text-lg text-muted-foreground">
              Message me and I’ll tell you straight up if it’s a good fit.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" asChild className="shadow-sm">
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

            <div className="mt-8 text-xs text-muted-foreground">
              DB Websites • Built by Des • Cairns / FNQ
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background">
        <div className="container mx-auto px-6 py-10 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-semibold text-foreground">© DB Websites — Built by Des</p>
            <p className="mt-1 text-sm text-muted-foreground">Websites built properly</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
