import Link from "next/link"
import Image from "next/image"
import { useMemo, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Check, MessageCircle, Mail, ArrowRight, Sparkles } from "lucide-react"

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

function buildMailtoUrl() {
  return "mailto:" + EMAIL + "?subject=" + EMAIL_SUBJECT + "&body=" + EMAIL_BODY
}

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

type PreviewCardProps = {
  title: string
  subtitle: string
  imageSrc: string
  imageAlt: string
  objectPosition?: string
  badge?: string
  onOpen?: () => void
}

function PreviewCard(props: PreviewCardProps) {
  return (
    <button
      type="button"
      onClick={props.onOpen}
      className="group text-left"
      aria-label={`Open screenshot preview: ${props.title}`}
    >
      <div className="rounded-2xl border border-border bg-card/70 p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
        <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-border bg-muted/30">
          <Image
            src={props.imageSrc}
            alt={props.imageAlt}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition duration-500 group-hover:scale-[1.02]"
            style={{ objectPosition: props.objectPosition ?? "50% 50%" }}
            priority={false}
          />

          {/* subtle premium overlay */}
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.05)_0%,rgba(0,0,0,0)_35%,rgba(0,0,0,0.06)_100%)]" />

          {/* hover hint */}
          <div className="pointer-events-none absolute inset-0 flex items-end justify-end p-3 opacity-0 transition group-hover:opacity-100">
            <div className="rounded-full border border-border bg-background/75 px-3 py-1 text-[11px] font-medium text-muted-foreground shadow-sm backdrop-blur">
              Click to enlarge
            </div>
          </div>

          {props.badge ? (
            <div className="absolute left-3 top-3 rounded-full border border-border bg-background/70 px-3 py-1 text-[11px] font-medium text-muted-foreground shadow-sm backdrop-blur">
              {props.badge}
            </div>
          ) : null}
        </div>

        <div className="mt-4">
          <div className="text-sm font-semibold text-foreground">{props.title}</div>
          <div className="mt-1 text-sm text-muted-foreground">{props.subtitle}</div>
        </div>
      </div>
    </button>
  )
}

type ProofItem = {
  title: string
  subtitle: string
  imageSrc: string
  imageAlt: string
  badge?: string
  objectPosition?: string
}

export default function Home() {
  const mailtoUrl = buildMailtoUrl()

  const proofItems: ProofItem[] = useMemo(
    () => [
      {
        title: "Mechanic Direct",
        subtitle: "Premium UI + clear conversion",
        imageSrc: "/work/mechanic-direct.webp",
        imageAlt: "Mechanic Direct website screenshot",
        badge: "Live product",
        // show more of the heading area
        objectPosition: "55% 30%",
      },
      {
        title: "FIFO Resume Mate",
        subtitle: "Pricing that sells the value",
        imageSrc: "/work/fifo-resume-mate.webp",
        imageAlt: "FIFO Resume Mate pricing screenshot",
        badge: "Pricing section",
        // bias toward the top so pricing + headings show
        objectPosition: "50% 10%",
      },
      {
        title: "Outback Lens",
        subtitle: "Strong hero visual + brand feel",
        imageSrc: "/work/outback-lens.webp",
        imageAlt: "Outback Lens website hero screenshot",
        badge: "Hero section",
        objectPosition: "50% 55%",
      },
    ],
    []
  )

  const [open, setOpen] = useState(false)
  const [active, setActive] = useState<ProofItem | null>(null)

  function openProof(item: ProofItem) {
    setActive(item)
    setOpen(true)
  }

  return (
    <div className="min-h-screen bg-background">
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
                <Link href={mailtoUrl}>
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
            {proofItems.map((item) => (
              <PreviewCard
                key={item.title}
                title={item.title}
                subtitle={item.subtitle}
                imageSrc={item.imageSrc}
                imageAlt={item.imageAlt}
                badge={item.badge}
                objectPosition={item.objectPosition}
                onOpen={() => openProof(item)}
              />
            ))}
          </div>

          <div className="mx-auto mt-10 max-w-3xl text-center text-sm text-muted-foreground">
            Tip: click any screenshot to view it properly.
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

            {/* Buttons: stacked + same size */}
            <div className="mt-8 grid gap-4">
              <Button size="lg" asChild className="w-full shadow-sm">
                <Link href={FACEBOOK_MESSENGER_URL} target="_blank" rel="noreferrer noopener">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Message me
                </Link>
              </Button>

              <Button size="lg" variant="outline" asChild className="w-full">
                <Link href={mailtoUrl}>
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
                <Link href={mailtoUrl}>
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

      {/* Proof Lightbox */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-5xl p-0">
          <DialogHeader className="px-6 pt-6">
            <DialogTitle className="text-base">
              {active ? active.title : "Preview"}
              {active?.badge ? (
                <span className="ml-2 align-middle text-xs font-medium text-muted-foreground">
                  • {active.badge}
                </span>
              ) : null}
            </DialogTitle>
          </DialogHeader>

          <div className="px-6 pb-6">
            <div className="relative overflow-hidden rounded-2xl border border-border bg-muted/30">
              <div className="relative h-[70vh] w-full">
                {active ? (
                  <Image
                    src={active.imageSrc}
                    alt={active.imageAlt}
                    fill
                    sizes="100vw"
                    className="object-contain"
                    priority={false}
                  />
                ) : null}
              </div>
            </div>

            <div className="mt-3 text-xs text-muted-foreground">
              Tip: this shows the full screenshot (no crop). Perfect for tall sections like pricing.
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
