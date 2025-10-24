import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cordoba AI - From Al-Andalus to AI",
  description: "Intelligence, beautifully built. We turn ideas into intelligent digital products, fast. AI-powered product acceleration from heritage to innovation.",
  keywords: ["AI", "Artificial Intelligence", "Product Development", "Digital Products", "AI Acceleration", "Cordoba"],
  authors: [{ name: "Cordoba AI" }],
  openGraph: {
    title: "Cordoba AI - From Al-Andalus to AI",
    description: "Intelligence, beautifully built. Turning knowledge into outcomes.",
    type: "website",
    images: ["/assets/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cordoba AI - From Al-Andalus to AI",
    description: "Intelligence, beautifully built. Turning knowledge into outcomes.",
    images: ["/assets/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
