import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const title = "Straight to the Root";
const description =
  "Through gentle, embodied, practices and a trauma-informed, multi-modality approach, we create a sanctuary for your nervous system so you can reconnect with your inner wisdom and receive the life thats been calling you home.";
const domain = "https://momsite-one.vercel.app";
const imageUrl = `${domain}/og_image.jpg`;

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    url: domain,
    images: {
      url: imageUrl,
      width: 1200,
      height: 630,
    },
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
