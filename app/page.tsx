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
const EMAIL = "desbarriere.au@gmail.com"

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

/* ---------- existing helpers/components unchanged ---------- */
// (SectionHeading, cx, WorkPreviewCard, ImageModal remain identical)

/* ---------- HOME ---------- */

export default function Home() {
  // WORK_ITEMS unchanged …

  return (
    <div className="min-h-screen bg-background">
      {/* modal + header unchanged */}

      {/* Hero unchanged */}

      {/* 🔹 NEW SECTION: Conversion & Lead Recovery */}
      <section className="border-y border-border bg-muted/30">
        <div className="container mx-auto px-6 py-16 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-3 py-1 text-xs font-medium text-muted-foreground shadow-sm">
              Conversion & enquiries
            </div>

            <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Turn website visitors into enquiries
            </h2>

            <p className="mt-4 text-pretty text-lg text-muted-foreground">
              Most websites don’t fail because of design — they fail because visitors don’t feel confident
              enough to take the next step. I focus on finding where people drop off, fixing the leaks,
              and recovering missed enquiries so your existing traffic actually turns into work.
            </p>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              <Card className="rounded-2xl p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-foreground">Find the leaks</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  See where visitors hesitate, get confused, or leave — on mobile and desktop.
                </p>
              </Card>

              <Card className="rounded-2xl p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-foreground">Fix what matters</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Clear messaging, better calls-to-action, trust signals, and cleaner contact flows.
                </p>
              </Card>

              <Card className="rounded-2xl p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-foreground">Recover missed leads</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Follow up with people who almost enquire or buy — instead of losing them silently.
                </p>
              </Card>
            </div>

            <div className="mt-10">
              <Button size="lg" asChild className="shadow-sm">
                <Link href={FACEBOOK_MESSENGER_URL} target="_blank" rel="noreferrer noopener">
                  See why your site isn’t converting
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Work Preview unchanged */}

      {/* Fit Check unchanged */}

      {/* Value Proposition unchanged */}

      {/* Pricing — SMALL COPY ADDITIONS ONLY */}
      {/* Add this line under each pricing description */}

      {/* Fast Launch Website */}
      {/* add below description paragraph */}
      {/* “Built with clear messaging and enquiry flow from day one.” */}

      {/* Website Fix / Upgrade */}
      {/* add below description paragraph */}
      {/* “Focused on improving conversions, clarity, and missed enquiries — not just looks.” */}

      {/* FAQ unchanged */}
      {/* Contact unchanged */}
      {/* Footer unchanged */}
    </div>
  )
}
