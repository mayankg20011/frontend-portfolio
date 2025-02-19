import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mayank Goyal Senior Frontend Web Developer Portfolio IIT Patna",
  description:
    "Mayank Goyal Frontend Developer Portfolio IIT Patna, Senior Web Developer, Proven track record in improving SEO rankings, enhancing web vitals,and ensuring security best practices. Passionate about driving innovation, streamlining workflows, and mentoring teams to achieve engineering excellence",
  keywords:
    "Mayank Goyal, IIT Patna, Mayank Goyal IIT Patna, Mayank Goyal Frontend Developer, Senior Frontend Developer, Web Developer, ReactJs Developer, Indian Institute of Technology Patna, Piramal Finance, Winzo Games",
  authors: [
    { name: "Mayank Goyal", url: "https://www.linkedin.com/in/mayankiitp/" },
  ],
  publisher: "Mayank Goyal",
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/jsm-logo.png" sizes="any" />
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
      </body>
    </html>
  );
}
