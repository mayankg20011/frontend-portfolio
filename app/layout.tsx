import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "./provider";

// Optimize font loading with display swap
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "Mayank Goyal Portfolio - Senior Frontend Developer",
  description:
    "I am Mayank Goyal, Frontend Developer from IIT Patna. Senior Web Developer with proven track record in improving SEO rankings, enhancing web vitals,and ensuring security best practices. Passionate about driving innovation, streamlining workflows, and mentoring teams to achieve engineering excellence",
  keywords:
    "Mayank Goyal Tech, Mayank Goyal Portfolio, Mayank Goyal, Mayank Goyal IIT Patna, Mayank Goyal Frontend Developer, Senior Frontend Developer, Web Developer, Mayank Goyal ReactJs Developer, Mayank Goyal Indian Institute of Technology Patna, Piramal Finance, Winzo games, IIT Patna",
  authors: [
    { name: "Mayank Goyal", url: "https://www.linkedin.com/in/mayankiitp/" },
  ],
  publisher: "Mayank Goyal",
  robots: "index, follow",
  alternates: {
    canonical: "https://mayankgoyal.tech",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/MayankGoyal.png" sizes="any" />
        {/* Add preconnect for Google Fonts */}
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
          crossOrigin="anonymous"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        {/* Load non-critical scripts with low priority */}
      </body>
    </html>
  );
}
