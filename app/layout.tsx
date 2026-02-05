import React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://www.dbwebsites.au"),

  title: "DB Websites — Websites built properly",
  description:
    "Clean, professional websites for small businesses in Cairns & FNQ. From fast launches to premium custom builds. No agency fluff, no drawn-out timelines.",
  generator: "v0.app",

  verification: {
    google: "089lNLrHjvhCX-nbwhPpj_WESgFCvlTqomZsX8q_uHY",
  },

  openGraph: {
    title: "DB Websites — Websites built properly",
    description:
      "Clean, professional websites for small businesses. New builds and site upgrades.",
    url: "https://www.dbwebsites.au",
    siteName: "DB Websites",
    images: [
      {
        url: "https://www.dbwebsites.au/og-image.png",
        width: 1200,
        height: 630,
        alt: "DB Websites — Small business websites",
      },
    ],
    locale: "en_AU",
    type: "website",
  },

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Tidio Website Enquiry Assistant */}
        <script
          src="//code.tidio.co/svuowosee2lpcoiumlepae66awnaymao.js"
          async
        ></script>
      </head>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
