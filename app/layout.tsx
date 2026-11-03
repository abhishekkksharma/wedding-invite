import type { Metadata, Viewport } from "next";
import "./globals.css";
import MetaPhoto from "@/assets/mainpage.png";

export const metadata: Metadata = {
  metadataBase: new URL("https://vanshuweddinginvitation.vercel.app"),
  title: "Vanshika & Gourav | Wedding Invitation",
  description:
    "We invite you to celebrate the wedding of Vanshika & Gourav",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Vanshika & Gourav | Wedding Invitation",
    description:
      "With love and joy, we invite you to celebrate our special day ❤️",
    type: "website",
    images: [
      {
        url: MetaPhoto.src,
        width: 1200,
        height: 630,
        alt: "Vanshika & Gourav Wedding Invitation",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Vanshika & Gourav | Wedding Invitation",
    description:
      "We invite you to celebrate the wedding of Vanshika & Gourav ❤️",
    images: [MetaPhoto.src],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Alex+Brush&family=Cinzel:wght@400;500;600;700&family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Great+Vibes&family=Rozha+One&display=swap"
          rel="stylesheet"
        />
      </head>

      <body className="min-h-full text-stone-800 selection:bg-amber-100 flex flex-col items-center justify-start overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
