import React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const geist = Geist({ subsets: ["latin"] })
const geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://www.dbwebsites.au"),

  title: "DB Websites — Modern websites, Shopify stores, and WordPress fixes",
  description:
    "High-performance websites, Shopify ecommerce builds, and WordPress upgrades for Australian businesses. Built to look sharper, work better, and convert more cleanly.",
  generator: "v0.app",

  verification: {
    google: "089lNLrHjvhCX-nbwhPpj_WESgFCvlTqomZsX8q_uHY",
  },

  openGraph: {
    title: "DB Websites — Modern websites, Shopify stores, and WordPress fixes",
    description:
      "Modern websites, Shopify ecommerce builds, and selective WordPress upgrades for Australian businesses.",
    url: "https://www.dbwebsites.au",
    siteName: "DB Websites",
    images: [
      {
        url: "https://www.dbwebsites.au/og-image.png",
        width: 1200,
        height: 630,
        alt: "DB Websites — Modern websites, Shopify stores, and WordPress fixes",
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
    <html lang="en" className={`${geist.className} ${geistMono.variable}`}>
      <head>
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