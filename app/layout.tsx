import React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "DB Websites — Websites built properly",
  description:
    "Clean, professional websites for small businesses in Cairns & FNQ. From fast launches to premium custom builds. No agency fluff, no drawn-out timelines.",
  generator: "v0.app",
  icons: {
    icon: [
      { url: "/favicon.ico" }, // critical fallback (tabs, Safari, Windows)
      { url: "/favicon.svg", type: "image/svg+xml" }, // modern browsers
    ],
    apple: [{ url: "/apple-touch-icon.png" }], // iOS / FB / pinned
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
