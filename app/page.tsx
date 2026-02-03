import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Check, MessageCircle, Mail } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto flex h-16 items-center justify-between px-6 lg:px-8">
          <Link href="/" className="text-xl font-semibold text-foreground">
            DB Websites
          </Link>
          <nav className="flex items-center gap-8">
            <Link
              href="#pricing"
              className="hidden text-sm font-medium text-muted-foreground transition-colors hover:text-foreground sm:inline-block"
            >
              Pricing
            </Link>
            <Link
              href="#faq"
              className="hidden text-sm font-medium text-muted-foreground transition-colors hover:text-foreground sm:inline-block"
            >
              FAQ
            </Link>
            <Button asChild>
              <Link href="#contact">
                <MessageCircle className="mr-2 h-4 w-4" />
                Message me
              </Link>
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background Effects */}
        <div className="pointer-events-none absolute inset-0">
          {/* Gradient Blobs */}
          <div className="absolute left-1/4 top-20 h-96 w-96 rounded-full bg-accent/5 blur-3xl" />
          <div className="absolute right-1/4 top-40 h-80 w-80 rounded-full bg-accent/4 blur-3xl" />
          {/* Noise Overlay */}
          <div
            className="absolute inset-0 opacity-[0.015]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`,
            }}
          />
        </div>
        <div className="container relative mx-auto px-6 py-20 lg:px-8 lg:py-32">
          <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Websites built properly — from fast launches to premium custom
            builds
          </h1>
          <p className="mb-4 text-pretty text-lg text-muted-foreground sm:text-xl">
            Clean, professional websites for small businesses. No agency fluff,
            no drawn-out timelines.
          </p>
          <p className="mb-10 text-sm font-medium text-accent">
            Built by a local business owner (Cairns / FNQ)
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" asChild>
              <Link href="#contact">
                <MessageCircle className="mr-2 h-4 w-4" />
                Message me
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="mailto:contact@dbwebsites.com">
                <Mail className="mr-2 h-4 w-4" />
                Email me
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="border-y border-border bg-muted/30">
        <div className="container mx-auto px-6 py-16 lg:px-8 lg:py-24">
          <div className="grid gap-8 md:grid-cols-3">
            <Card className="rounded-2xl p-8 shadow-sm">
              <h3 className="mb-3 text-xl font-semibold text-foreground">
                Straightforward builds
              </h3>
              <p className="text-pretty text-muted-foreground leading-relaxed">
                Clear scope, no jargon. You'll know exactly what you're getting
                and when.
              </p>
            </Card>
            <Card className="rounded-2xl p-8 shadow-sm">
              <h3 className="mb-3 text-xl font-semibold text-foreground">
                Mobile-first design
              </h3>
              <p className="text-pretty text-muted-foreground leading-relaxed">
                Looks great on any device. Your customers browse on their
                phones—your site should too.
              </p>
            </Card>
            <Card className="rounded-2xl p-8 shadow-sm">
              <h3 className="mb-3 text-xl font-semibold text-foreground">
                Delivered properly
              </h3>
              <p className="text-pretty text-muted-foreground leading-relaxed">
                Fast when needed, premium when it matters. The right solution
                for your business.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="container mx-auto px-6 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-4 text-balance text-center text-3xl font-bold text-foreground sm:text-4xl">
            {"What's included"}
          </h2>
          <p className="mb-12 text-pretty text-center text-muted-foreground">
            Everything you need to get your business online
          </p>
          <Card className="rounded-2xl p-8 shadow-sm lg:p-10">
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-success" />
                <span className="text-foreground">1–3 page website</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-success" />
                <span className="text-foreground">Contact form</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-success" />
                <span className="text-foreground">Basic SEO setup</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-success" />
                <span className="text-foreground">
                  Deployed & live on Vercel
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-success" />
                <span className="text-foreground">
                  Two rounds of small tweaks
                </span>
              </li>
            </ul>
          </Card>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="border-y border-border bg-muted/30">
        <div className="container mx-auto px-6 py-16 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 text-balance text-3xl font-bold text-foreground sm:text-4xl">
              Simple, transparent pricing
            </h2>
            <p className="mb-12 text-pretty text-muted-foreground">
              One straightforward option to get you started
            </p>
            <Card className="rounded-2xl p-8 text-left shadow-sm lg:p-10">
              <h3 className="mb-2 text-2xl font-bold text-foreground">
                Fast Launch Website
              </h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-foreground">
                  $750 AUD
                </span>
                <span className="ml-2 text-muted-foreground">— one-off</span>
              </div>
              <p className="mb-6 text-pretty text-muted-foreground leading-relaxed">
                Ideal for tradies, local services, and small businesses who want
                a clean site live quickly.
              </p>
              <p className="mb-8 text-sm text-muted-foreground">
                Custom & premium builds scoped separately.
              </p>
              <Button size="lg" className="w-full" asChild>
                <Link href="#contact">Message me to check fit</Link>
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="container mx-auto px-6 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-4 text-balance text-center text-3xl font-bold text-foreground sm:text-4xl">
            How it works
          </h2>
          <p className="mb-16 text-pretty text-center text-muted-foreground">
            Three simple steps to get your website live
          </p>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-accent text-lg font-bold text-accent-foreground">
                1
              </div>
              <h3 className="mb-2 text-xl font-semibold text-foreground">
                Quick questions
              </h3>
              <p className="text-pretty text-muted-foreground leading-relaxed">
                Tell me about your business and what you need
              </p>
            </div>
            <div className="text-center">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-accent text-lg font-bold text-accent-foreground">
                2
              </div>
              <h3 className="mb-2 text-xl font-semibold text-foreground">
                Build & preview
              </h3>
              <p className="text-pretty text-muted-foreground leading-relaxed">
                I build your site and send you a preview link
              </p>
            </div>
            <div className="text-center">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-accent text-lg font-bold text-accent-foreground">
                3
              </div>
              <h3 className="mb-2 text-xl font-semibold text-foreground">
                Go live
              </h3>
              <p className="text-pretty text-muted-foreground leading-relaxed">
                After your approval, your website goes live
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="border-y border-border bg-muted/30">
        <div className="container mx-auto px-6 py-16 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-4 text-balance text-center text-3xl font-bold text-foreground sm:text-4xl">
              Frequently asked questions
            </h2>
            <p className="mb-12 text-pretty text-center text-muted-foreground">
              Everything you need to know
            </p>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left text-lg font-semibold">
                  Do you do domains?
                </AccordionTrigger>
                <AccordionContent className="text-pretty text-muted-foreground leading-relaxed">
                  Yes — domain registration and setup is optional and can be
                  added after launch. I'll guide you through the process or
                  handle it for you.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left text-lg font-semibold">
                  How fast is delivery?
                </AccordionTrigger>
                <AccordionContent className="text-pretty text-muted-foreground leading-relaxed">
                  Fast Launch websites typically take 5-7 business days from
                  brief to preview. Premium custom builds are scoped
                  individually based on complexity and requirements.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left text-lg font-semibold">
                  {"What's not included?"}
                </AccordionTrigger>
                <AccordionContent className="text-pretty text-muted-foreground leading-relaxed">
                  The Fast Launch package doesn't include e-commerce, booking
                  systems, custom integrations, or ongoing content updates.
                  These can be quoted separately for premium builds.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left text-lg font-semibold">
                  Can you do larger custom sites?
                </AccordionTrigger>
                <AccordionContent className="text-pretty text-muted-foreground leading-relaxed">
                  Absolutely. If you need something more complex—multiple pages,
                  custom features, integrations, or a full brand
                  experience—we'll scope it out together and provide a detailed
                  quote.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="contact" className="container mx-auto px-6 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-balance text-3xl font-bold text-foreground sm:text-4xl">
            {"If you want a website done properly without the runaround, let's chat"}
          </h2>
          <p className="mb-10 text-pretty text-lg text-muted-foreground">
            Get in touch to discuss your project
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" asChild>
              <Link href="https://facebook.com" target="_blank">
                <MessageCircle className="mr-2 h-4 w-4" />
                Message me
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="mailto:contact@dbwebsites.com">
                <Mail className="mr-2 h-4 w-4" />
                Email me
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card">
        <div className="container mx-auto px-6 py-12 lg:px-8">
          <div className="text-center">
            <p className="mb-2 text-sm font-semibold text-foreground">
              © DB Websites — Built by Des
            </p>
            <p className="text-sm text-muted-foreground">
              Websites built properly
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
