import { MetadataRoute } from "next";

export default function robot(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: "*",
            allow: "/",
            disallow: [],
        },
        sitemap: "https://fatonsfilmproduction.de/sitemap.xml",
    };
}