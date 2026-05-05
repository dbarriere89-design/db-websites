import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { CheckCircle, Home, MessageCircle } from "lucide-react"

const FACEBOOK_MESSENGER_URL = "https://m.me/desbarriere"

export const metadata = {
  title: "Thanks for your enquiry | DB Websites",
  description:
    "Thanks for contacting DB Websites. Des will review your enquiry and get back to you soon.",
}

export default function ThankYouPage() {
  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,rgba(255,255,255,1),rgba(10,160,185,0.05),rgba(255,255,255,1))]">
      <div className="container mx-auto flex min-h-screen items-center justify-center px-4 py-16 sm:px-6 lg:px-8">
        <Card className="mx-auto max-w-2xl rounded-[32px] border border-border bg-white p-8 text-center shadow-[0_18px_50px_rgba(0,0,0,0.10)] sm:p-10">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-sky-50">
            <CheckCircle className="h-9 w-9 text-[hsl(var(--brand-accent))]" />
          </div>

          <div className="mb-3 inline-flex rounded-full border border-border bg-background/80 px-3 py-1 text-xs font-medium text-muted-foreground shadow-sm">
            Enquiry sent
          </div>

          <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Thanks, I’ve got your enquiry
          </h1>

          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            I’ll have a look through what you sent and get back to you soon. If
            it’s urgent, you can message me directly on Facebook Messenger too.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button asChild size="lg" className="shadow-md">
              <Link href="/">
                <Home className="mr-2 h-4 w-4" />
                Back to home
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-white/80 shadow-sm"
            >
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
        </Card>
      </div>
    </main>
  )
}