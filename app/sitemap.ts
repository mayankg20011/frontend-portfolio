import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://mayank-goyal.vercel.app";

  // Get all the projects from data
  const projects = [
    {
      url: "https://www.piramalfinance.com",
      lastModified: new Date(),
    },
    {
      url: "https://www.winzogames.com",
      lastModified: new Date(),
    },
    {
      url: "https://ulink.com",
      lastModified: new Date(),
    },
    {
      url: "https://advanced-storybook.vercel.app",
      lastModified: new Date(),
    },
  ];

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

  return [...routes, ...projects];
}
