import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mayer - Fullstack Developer Portfolio",
  description: "Professional portfolio showcasing fullstack development skills, projects, and experience",
  keywords: ["fullstack developer", "web development", "React", "Next.js", "TypeScript", "portfolio"],
  authors: [{ name: "Mayer" }],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.className} bg-black text-white overflow-x-hidden`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
