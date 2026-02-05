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
import { Check, MessageCircle, Mail, ArrowRight, X } from "lucide-react"

const FACEBOOK_MESSENGER_URL = "https://m.me/desbarriere"
const EMAIL = "desbarriere.au@gmail.com" // TODO: replace if needed

const EMAIL_SUBJECT = encodeURIComponent("Website enquiry (DB Websites)")
const EMAIL_BODY = encodeURIComponent(
  [
    "Hey Des,",
    "",
    "Keen to chat about a website.",
    "",
    "Business name:",
    "Industry / trade:",
    "Do you already have a website? (yes/no):",
    "If yes, link:",
    "",
    "Services (dot points):",
    "Location (suburb/city):",
    "Do you already own a domain? (yes/no):",
    "Any links (FB/IG/current site):",
    "",
    "Goals (more calls, look professional, show services, etc):",
    "If fixing an existing site, what’s broken / annoying right now?:",
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

  // Used for the card thumbnail
  imgSrc: string

  // Used for the modal (lets us use full-page for Mechanic Direct + curated for others)
  modalImgSrc?: string

  // Thumbnail crop control
  thumbObjectPosition?: string

  // Optional: open link to the live site (not required)
  href?: string

  // Controls modal behavior (scroll for full-page)
  modalVariant?: "fullpage" | "curated"
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
        <div className="relative overflow-hidden rounded-xl border border-border bg-muted">
          {/* Browser chrome */}
          <div className="flex items-center gap-2 border-b border-border bg-background/70 px-3 py-2 backdrop-blur">
            <div className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-foreground/20" />
              <span className="h-2.5 w-2.5 rounded-full bg-foreground/20" />
              <span className="h-2.5 w-2.5 rounded-full bg-foreground/20" />
            </div>
            <div className="ml-2 h-2 w-24 rounded-full bg-foreground/10 sm:w-32" />
          </div>

          <div className="relative aspect-[16/10] overflow-hidden">
            {item.badge ? (
              <div className="absolute left-3 top-3 z-10 rounded-full border border-border bg-background/70 px-3 py-1 text-xs font-medium text-muted-foreground shadow-sm backdrop-blur">
                {item.badge}
              </div>
            ) : null}

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

            <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.35),rgba(0,0,0,0)_55%)]" />
              <div className="absolute bottom-3 left-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-3 py-1 text-xs text-white/90 backdrop-blur">
                Click to view <ArrowRight className="h-3.5 w-3.5" />
              </div>
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

  const isFullPage = item.modalVariant === "fullpage"
  const modalSrc = item.modalImgSrc ?? item.imgSrc

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label={`Preview: ${item.title}`}
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

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

        <div className="bg-muted/30 p-3 sm:p-4">
          <div
            className={cx(
              "relative w-full rounded-xl border border-border bg-black",
              isFullPage ? "max-h-[78vh] overflow-auto" : "overflow-hidden"
            )}
          >
            <img
              src={modalSrc}
              alt={`${item.title} preview`}
              className="max-h-[78vh] w-full object-contain"
              loading="eager"
            />
          </div>

          <div className="mt-3 text-xs text-muted-foreground">
            {isFullPage ? (
              <>
                Full-page preview (scroll inside). Press{" "}
                <span className="font-medium">ESC</span> to close.
              </>
            ) : (
              <>
                Curated preview. Press <span className="font-medium">ESC</span> to close.
              </>
            )}
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
        modalImgSrc: "/work/mechanic-direct-full.png",
        modalVariant: "fullpage",
      },
      {
        title: "Local Small Business Template",
        subtitle: "Classic layout: services + reviews + enquiry flow",
        badge: "Concept build",
        imgSrc: "/work/small-biz-template-curated.png",
        thumbObjectPosition: "center",
        modalImgSrc: "/work/small-biz-template-curated.png",
        modalVariant: "curated",
      },
      {
        title: "FIFO Resume Mate",
        subtitle: "Pricing that sells the value",
        badge: "Pricing section",
        imgSrc: "/work/fifo-resume-mate-curated.png",
        thumbObjectPosition: "center top",
        modalImgSrc: "/work/fifo-resume-mate-curated.png",
        modalVariant: "curated",
      },
      {
        title: "Outback Lens",
        subtitle: "Photography-first brand + visual storytelling",
        badge: "Hero section",
        imgSrc: "/work/outback-lens-curated.png",
        thumbObjectPosition: "center",
        modalImgSrc: "/work/outback-lens-curated.png",
        modalVariant: "curated",
      },
    ],
    []
  )

  const [openItem, setOpenItem] = useState<WorkItem | null>(null)

  return (
    <div className="min-h-screen bg-background">
      <ImageModal open={!!openItem} item={openItem} onClose={() => setOpenItem(null)} />

      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-border bg-background/70 backdrop-blur">
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
              Built for small businesses (Cairns / FNQ + remote)
            </div>

            <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Websites for small business —
              <span className="text-foreground/80"> new builds and clean upgrades</span>
            </h1>

            <p className="mx-auto mb-10 max-w-3xl text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
              Launch a new site fast, or fix the one you’ve already got. Clear messaging, mobile cleanup, speed improvements,
              and a contact flow that turns visitors into enquiries.
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
                ✅ Fix or rebuild
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-3 py-1">
                ✅ Clear scope
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-3 py-1">
                ✅ Deployed on Vercel
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
            subtitle="Modern, clean, and built to convert — new sites or upgraded existing ones."
          />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {WORK_ITEMS.map((item) => (
              <WorkPreviewCard key={item.title} item={item} onOpen={setOpenItem} />
            ))}
          </div>

          <div className="mx-auto mt-10 max-w-3xl text-center text-sm text-muted-foreground">
            Click any preview to see the screenshot.
          </div>
        </div>
      </section>

      {/* Fit Check */}
      <section className="container mx-auto px-6 py-16 lg:px-8 lg:py-24">
        <SectionHeading
          eyebrow="Start here"
          title="Quick fit check"
          subtitle="Answer these and I can tell you straight away if it’s a fast launch, a fix, or a full rebuild."
        />

        <div className="mx-auto max-w-3xl">
          <Card className="rounded-2xl p-8 shadow-sm lg:p-10">
            <ul className="space-y-4">
              {[
                "Business name + what you do",
                "Do you already have a website? If yes, link it",
                "What’s broken / annoying right now? (slow, old, confusing, no enquiries)",
                "Your services (dot points)",
                "Your location (Cairns/FNQ or elsewhere)",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-[hsl(var(--brand-accent))]" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>

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
              No logo? No worries. If you’ve got photos + a rough services list, we can still get something clean live.
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
            subtitle="Whether it’s a fresh build or a cleanup, the goal is the same: trust + clarity + enquiries."
          />

          <div className="grid gap-6 md:grid-cols-3">
            <Card className="group rounded-2xl p-8 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[hsl(var(--brand-accent))/0.18] text-foreground">
                <ArrowRight className="h-5 w-5" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-foreground">Straightforward scope</h3>
              <p className="text-pretty leading-relaxed text-muted-foreground">
                Clear deliverables, fast turnaround, and no confusing agency fluff.
              </p>
            </Card>

            <Card className="group rounded-2xl p-8 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[hsl(var(--brand-warm))/0.18] text-foreground">
                <ArrowRight className="h-5 w-5" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-foreground">Mobile + speed cleanup</h3>
              <p className="text-pretty leading-relaxed text-muted-foreground">
                Fix the “old site” vibe: layout issues, slow pages, messy sections, broken links.
              </p>
            </Card>

            <Card className="group rounded-2xl p-8 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accent/20 text-foreground">
                <ArrowRight className="h-5 w-5" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-foreground">Built to convert</h3>
              <p className="text-pretty leading-relaxed text-muted-foreground">
                Clear messaging + obvious contact flow so people actually call or message.
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
          subtitle="One option for a fast new site — and an upgrade option if you already have a site that needs love."
        />

        <div className="mx-auto max-w-5xl">
          <div className="grid gap-6 md:grid-cols-2">
            {/* New build */}
            <Card className="relative overflow-hidden rounded-2xl p-8 shadow-sm lg:p-10">
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0)_55%,rgba(0,0,0,0.03)_100%)]" />
              <div className="relative">
                <h3 className="text-2xl font-bold text-foreground">Fast Launch Website</h3>
                <p className="mt-3 text-pretty text-muted-foreground">
                  Ideal for most small businesses that want a clean site live quickly.
                </p>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {["Mobile-first layout", "Contact form", "Basic SEO tidy", "Two tweak rounds"].map((x) => (
                    <div key={x} className="flex items-center gap-2 text-sm text-foreground">
                      <span className="h-1.5 w-1.5 rounded-full bg-[hsl(var(--brand-warm))]" />
                      {x}
                    </div>
                  ))}
                </div>

                <div className="mt-8 rounded-2xl border border-border bg-background/60 p-6">
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
            </Card>

            {/* Fix/upgrade */}
            <Card className="relative overflow-hidden rounded-2xl p-8 shadow-sm lg:p-10">
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0)_55%,rgba(0,0,0,0.03)_100%)]" />
              <div className="relative">
                <h3 className="text-2xl font-bold text-foreground">Website Fix / Upgrade</h3>
                <p className="mt-3 text-pretty text-muted-foreground">
                  For existing sites that are slow, outdated, confusing, or not getting enquiries.
                </p>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {[
                    "Mobile layout cleanup",
                    "Speed improvements",
                    "Fix broken sections/links",
                    "Clearer call-to-action",
                    "Basic SEO tidy",
                    "Contact flow improvement",
                  ].map((x) => (
                    <div key={x} className="flex items-center gap-2 text-sm text-foreground">
                      <span className="h-1.5 w-1.5 rounded-full bg-[hsl(var(--brand-accent))]" />
                      {x}
                    </div>
                  ))}
                </div>

                <div className="mt-8 rounded-2xl border border-border bg-background/60 p-6">
                  <div className="text-sm font-semibold text-muted-foreground">Starts from</div>
                  <div className="mt-2 text-4xl font-bold tracking-tight text-foreground">$250</div>
                  <div className="mt-1 text-sm text-muted-foreground">AUD — depends on scope</div>

                  <Button size="lg" className="mt-6 w-full shadow-sm" asChild>
                    <Link href={FACEBOOK_MESSENGER_URL} target="_blank" rel="noreferrer noopener">
                      Message me your site link
                    </Link>
                  </Button>

                  <div className="mt-3 text-xs text-muted-foreground">
                    I’ll tell you straight away if it’s a quick fix, a proper upgrade, or a rebuild.
                  </div>
                </div>
              </div>
            </Card>
          </div>

          <div className="mt-6 text-center text-xs text-muted-foreground">
            Premium custom builds and bigger rebuilds are scoped separately.
          </div>
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
                    Can you fix my existing website?
                  </AccordionTrigger>
                  <AccordionContent className="text-pretty text-muted-foreground leading-relaxed">
                    Yep. Send me the link and what’s bugging you (slow, messy on mobile, not getting enquiries, outdated copy).
                    I’ll tell you quickly if it’s a fix, upgrade, or rebuild.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-left text-base font-semibold">
                    How fast is delivery?
                  </AccordionTrigger>
                  <AccordionContent className="text-pretty text-muted-foreground leading-relaxed">
                    Fixes can be quick depending on scope. Fast Launch sites can also be very quick once I’ve got your basics (business name, services, logo/photos).
                    Bigger rebuilds are scoped based on complexity.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-left text-base font-semibold">
                    What should I send you to start?
                  </AccordionTrigger>
                  <AccordionContent className="text-pretty text-muted-foreground leading-relaxed">
                    Business name, services (dot points), location, whether you own a domain, and any links (FB/IG/current site).
                    If you’re fixing an existing site, send the link and what you want improved.
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
              Want a website done properly — or want your current one fixed?
            </h2>
            <p className="mt-3 text-pretty text-lg text-muted-foreground">
              Message me and I’ll tell you straight up what the best option is.
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
