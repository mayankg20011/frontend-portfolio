import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://mayankgoyal.tech";

  // Get all the projects from data

  // Base routes
  const routes = [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/#about`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/#projects`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/#experience`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/#contact`,
      lastModified: new Date(),
    },
  ];

  return [...routes];
}
