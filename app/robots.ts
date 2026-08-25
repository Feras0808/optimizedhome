import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://www.optimizedhome.qa/sitemap.xml",
    host: "https://www.optimizedhome.qa",
  };
}