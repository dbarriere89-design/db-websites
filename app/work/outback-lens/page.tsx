import Link from "next/link"
import { ArrowLeft, ArrowRight, Camera, MonitorSmartphone, PlayCircle, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

const projectImages = [
  {
    src: "/work/outback-lens/milkyway.jpg",
    alt: "Outback Lens Milky Way video section screenshot",
    title: "Atmospheric video section",
    text: "A stronger visual moment built around night-sky footage and the feeling of remote camping.",
  },
  {
    src: "/work/outback-lens/gallery.jpg",
    alt: "Outback Lens gallery screenshot",
    title: "Photography gallery",
    text: "A clean image-led layout for browsing landscapes, wildlife, travel moments, and featured work.",
  },
  {
    src: "/work/outback-lens/prints.jpg",
    alt: "Outback Lens prints page screenshot",
    title: "Print sales path",
    text: "A clear path from browsing the brand to viewing and buying photography prints.",
  },
]

const outcomes = [
  {
    icon: <Camera className="h-5 w-5" />,
    title: "Stronger visual brand",
    text: "The site leans into large imagery, mood, and story instead of feeling like a plain portfolio.",
  },
  {
    icon: <PlayCircle className="h-5 w-5" />,
    title: "YouTube built into the flow",
    text: "The website gives visitors a clear path to watch videos and connect with the Outback Lens channel.",
  },
  {
    icon: <ShoppingBag className="h-5 w-5" />,
    title: "Prints and products",
    text: "The structure supports photography print sales and future product or tour offers.",
  },
  {
    icon: <MonitorSmartphone className="h-5 w-5" />,
    title: "Mobile-first polish",
    text: "The layout was tightened for mobile so the brand feels clean and usable on smaller screens.",
  },
]

export default function OutbackLensProjectPage() {
  return (
    <main className="min-h-screen bg-[#F8FBFC] text-slate-950">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[linear-gradient(180deg,#EAF8FC_0%,#F8FBFC_88%)]">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[-140px] top-[-140px] h-[360px] w-[360px] rounded-full bg-[#6BD4E8]/30 blur-3xl" />
          <div className="absolute right-[-140px] top-[160px] h-[380px] w-[380px] rounded-full bg-[#E5A73B]/18 blur-3xl" />
        </div>

        <div className="container relative z-[1] mx-auto px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
          <Button
            variant="outline"
            asChild
            className="mb-8 border-[#59C7E6]/35 bg-white/80 text-[#14393F] shadow-sm hover:bg-white hover:text-[#14393F]"
          >
            <Link href="/#work">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to work
            </Link>
          </Button>

          <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
            <div>
              <div className="mb-4 inline-flex rounded-full border border-[#59C7E6]/30 bg-white/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#1E4E57] shadow-sm">
                Photography / creator website
              </div>

              <h1 className="text-balance text-4xl font-bold tracking-tight text-[#14393F] sm:text-5xl lg:text-6xl">
                Outback Lens
              </h1>

              <p className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-slate-600 sm:text-lg">
                A cinematic creator website built to showcase Australian travel,
                outdoor photography, YouTube videos, prints, and personal brand
                storytelling.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button
                  asChild
                  size="lg"
                  className="bg-[#1E4E57] text-white shadow-md hover:bg-[#14393F]"
                >
                  <a
                    href="https://outbacklens.com.au"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Visit live site
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>

                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-[#59C7E6]/35 bg-white/80 text-[#14393F] shadow-sm hover:bg-white hover:text-[#14393F]"
                >
                  <Link href="/#contact">
                    Start something similar
                  </Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 rounded-[34px] bg-[#6BD4E8]/22 blur-2xl" />
              <div className="relative overflow-hidden rounded-[30px] border border-white bg-white p-3 shadow-[0_24px_70px_rgba(20,57,63,0.16)]">
                <img
                  src="/work/outback-lens/hero.jpg"
                  alt="Outback Lens homepage screenshot"
                  className="block h-auto w-full rounded-[24px] object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project overview */}
      <section className="bg-[#F8FBFC]">
        <div className="container mx-auto px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="rounded-[28px] border border-black/5 bg-white p-7 shadow-[0_16px_45px_rgba(20,57,63,0.08)]">
              <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500">
                Project type
              </div>
              <div className="mt-3 text-2xl font-bold text-[#14393F]">
                Creator brand website
              </div>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Built around photography, YouTube content, outdoor adventure, and future brand growth.
              </p>
            </Card>

            <Card className="rounded-[28px] border border-black/5 bg-white p-7 shadow-[0_16px_45px_rgba(20,57,63,0.08)]">
              <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500">
                Main goal
              </div>
              <div className="mt-3 text-2xl font-bold text-[#14393F]">
                Showcase and convert
              </div>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Give visitors a stronger sense of the brand while pointing them toward videos, prints, and contact.
              </p>
            </Card>

            <Card className="rounded-[28px] border border-black/5 bg-white p-7 shadow-[0_16px_45px_rgba(20,57,63,0.08)]">
              <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500">
                Focus
              </div>
              <div className="mt-3 text-2xl font-bold text-[#14393F]">
                Visual storytelling
              </div>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Large imagery, atmospheric sections, simple navigation, and a cleaner mobile experience.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Screenshots */}
      <section className="bg-[#EAF8FC]">
        <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <div className="mb-4 inline-flex rounded-full border border-[#59C7E6]/30 bg-white/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#1E4E57] shadow-sm">
              Site sections
            </div>
            <h2 className="text-balance text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              Built around the content, not just the layout
            </h2>
            <p className="mt-4 text-pretty text-base leading-relaxed text-slate-600 sm:text-lg">
              Outback Lens needed to feel like a photography and adventure brand from the first scroll.
            </p>
          </div>

          <div className="grid gap-8">
            {projectImages.map((item, index) => (
              <Card
                key={item.src}
                className="overflow-hidden rounded-[30px] border border-black/5 bg-white shadow-[0_18px_55px_rgba(20,57,63,0.10)]"
              >
                <div className="grid items-center gap-0 lg:grid-cols-2">
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="block h-auto w-full object-contain"
                      loading="lazy"
                    />
                  </div>

                  <div className="p-7 sm:p-9 lg:p-12">
                    <div className="mb-3 inline-flex rounded-full bg-[#FFF8EA] px-3 py-1 text-xs font-semibold text-[#14393F]">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <h3 className="text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
                      {item.title}
                    </h3>
                    <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
                      {item.text}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile */}
      <section className="bg-[#F8FBFC]">
        <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
            <div>
              <div className="mb-4 inline-flex rounded-full border border-[#E5A73B]/25 bg-[#FFF8EA] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-600 shadow-sm">
                Mobile experience
              </div>

              <h2 className="text-balance text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
                Designed to feel clean on smaller screens
              </h2>

              <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
                For a creator brand, mobile matters. A lot of visitors come from social,
                YouTube, or direct links, so the site needed to feel polished on a phone,
                not just on desktop.
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {outcomes.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-[24px] border border-black/5 bg-white p-5 shadow-[0_12px_35px_rgba(20,57,63,0.07)]"
                  >
                    <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[#EAF8FC] text-[#14393F]">
                      {item.icon}
                    </div>
                    <div className="text-base font-semibold text-slate-950">
                      {item.title}
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[360px]">
              <div className="absolute -inset-4 rounded-[40px] bg-[#6BD4E8]/22 blur-2xl" />
              <div className="relative overflow-hidden rounded-[34px] border border-white bg-white p-3 shadow-[0_24px_70px_rgba(20,57,63,0.16)]">
                <img
                  src="/work/outback-lens/mobile-home.jpg"
                  alt="Outback Lens mobile homepage screenshot"
                  className="block h-auto w-full rounded-[26px] object-contain"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About screenshot */}
      <section className="bg-[#FFF8EA]">
        <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
            <div className="relative">
              <div className="absolute -inset-4 rounded-[34px] bg-[#E5A73B]/18 blur-2xl" />
              <div className="relative overflow-hidden rounded-[30px] border border-white bg-white p-3 shadow-[0_24px_70px_rgba(120,70,0,0.16)]">
                <img
                  src="/work/outback-lens/about.jpg"
                  alt="Outback Lens about page screenshot"
                  className="block h-auto w-full rounded-[24px] object-contain"
                  loading="lazy"
                />
              </div>
            </div>

            <div>
              <div className="mb-4 inline-flex rounded-full border border-[#E5A73B]/25 bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-600 shadow-sm">
                Personal brand
              </div>

              <h2 className="text-balance text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
                A site that gives the person behind the brand more presence
              </h2>

              <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
                The About page helps the brand feel more personal, giving visitors a
                clearer sense of who is behind the photography, videos, and future
                offerings.
              </p>

              <div className="mt-7 rounded-[28px] bg-white p-6 shadow-[0_14px_40px_rgba(120,70,0,0.10)]">
                <ul className="space-y-3 text-sm leading-relaxed text-slate-700">
                  <li>• Stronger personal introduction</li>
                  <li>• Clear connection between photography and video content</li>
                  <li>• Natural path to socials and YouTube</li>
                  <li>• Space for future tours, sessions, and creator products</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1E4E57] text-white">
        <div className="container mx-auto px-4 py-16 text-center sm:px-6 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-3xl">
            <div className="mb-4 inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-white/78 shadow-sm">
              Need a site like this?
            </div>

            <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Build a website that actually feels like your brand
            </h2>

            <p className="mt-4 text-pretty text-base leading-relaxed text-white/74 sm:text-lg">
              Whether you’re a photographer, creator, local business, or outdoor brand,
              a stronger website can help people understand what you do and trust you faster.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="bg-[#E5A73B] text-[#14393F] shadow-md hover:bg-[#efb84e]"
              >
                <Link href="/#contact">
                  Start a project
                </Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/25 bg-white/10 text-white hover:bg-white/15 hover:text-white"
              >
                <a
                  href="https://outbacklens.com.au"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  View Outback Lens
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}