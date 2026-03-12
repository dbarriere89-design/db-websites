import React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const geist = Geist({ subsets: ["latin"] })
const geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://dbwebsites.au"),

  title: {
    default: "DB Websites | Websites for small businesses in Far North Queensland",   template: "%s | DB Websites",
  },

  description:
    "Simple, modern websites for small businesses in Cairns, the Tablelands, the Cassowary Coast and across Far North Queensland. Shopify stores, website refreshes and practical fixes built to help turn visitors into enquiries.",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
  },

  verification: {
    google: "089lNLrHjvhCX-nbwhPpj_WESgFCvlTqomZsX8q_uHY",
  },

  openGraph: {
    title: "DB Websites | Websites for small businesses in Far North Queensland",
    description:
      "Simple, modern websites for small businesses in Cairns, the Tablelands, the Cassowary Coast and across Far North Queensland. Shopify stores, website refreshes and practical fixes built to help turn visitors into enquiries.",
    url: "https://dbwebsites.au",
    siteName: "DB Websites",
    images: [
      {
        url: "https://dbwebsites.au/og-image.png",
        width: 1200,
        height: 630,
        alt: "DB Websites | Websites for small businesses in Cairns & FNQ",
      },
    ],
    locale: "en_AU",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "DB Websites | Websites for small businesses in Far North Queensland",
    description:
      "Simple, modern websites for small businesses in Cairns, the Tablelands, the Cassowary Coast and across Far North Queensland.",
    images: ["https://dbwebsites.au/og-image.png"],
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
        />
      </head>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}