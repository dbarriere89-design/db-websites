import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://dbwebsites.au/sitemap.xml",
    host: "https://dbwebsites.au",
  }
}