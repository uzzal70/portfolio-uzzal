import { MetadataRoute } from "next";
import { personalData } from "@/data/personal";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/"],
    },
    sitemap: `${personalData.seo.siteUrl}/sitemap.xml`,
  };
}

