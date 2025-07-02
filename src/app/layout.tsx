import React from "react";
import type { Metadata } from "next";
import { twMerge } from "tailwind-merge";
import "@/styles/globals.css";
import GoogleAnalytics from "@/components/GoogleAnalytics";

export const metadata: Metadata = {
  metadataBase: new URL('https://viewdeletedreddit.com'),
  title: "ViewDeletedReddit - View Deleted Reddit Posts & Comments Instantly",
  description: "Recover and view deleted Reddit posts and comments instantly. Search by Reddit URL or username to find archived content from Pushshift and Wayback Machine. Free tool to see deleted Reddit content.",
  keywords: [
    "view deleted reddit posts",
    "see deleted reddit posts",
    "undelete reddit",
    "reddit deleted content viewer",
    "how to view deleted reddit posts from a user",
    "reddit deleted comment checker",
    "reddit archive",
    "pushshift reddit",
    "wayback machine reddit",
    "recover deleted reddit posts"
  ],
  authors: [{ name: "ViewDeletedReddit" }],
  creator: "ViewDeletedReddit",
  publisher: "ViewDeletedReddit",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://viewdeletedreddit.com',
    siteName: 'ViewDeletedReddit',
    title: 'ViewDeletedReddit - View Deleted Reddit Posts & Comments Instantly',
    description: 'Recover and view deleted Reddit posts and comments instantly. Search by Reddit URL or username to find archived content.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'ViewDeletedReddit - View Deleted Reddit Posts',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ViewDeletedReddit - View Deleted Reddit Posts & Comments',
    description: 'Recover deleted Reddit content instantly. Free tool to view deleted posts and comments.',
    images: ['/og-image.png'],
    creator: '@viewdeletedreddit',
  },
  alternates: {
    canonical: 'https://viewdeletedreddit.com',
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://viewdeletedreddit.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#8c45ff" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="msapplication-TileColor" content="#8c45ff" />
        <meta name="msapplication-config" content="/browserconfig.xml" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "ViewDeletedReddit",
              "description": "View deleted Reddit posts and comments instantly",
              "url": "https://viewdeletedreddit.com",
              "applicationCategory": "UtilityApplication",
              "operatingSystem": "Web Browser",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              },
              "creator": {
                "@type": "Organization",
                "name": "ViewDeletedReddit"
              }
            })
          }}
        />
      </head>
      <body
        className={twMerge("font-sans bg-black text-white antialiased")}
        suppressHydrationWarning
      >
        {children}
        {process.env.NODE_ENV === "production" && <GoogleAnalytics />}
      </body>
    </html>
  );
}
