import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MOFFICIALS — Product & Engineering Portfolio",
  description:
    "Portfolio of industrial software, AI systems, finance tools, mobile products, and engineering experiments by Immrtldragon98.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>{children}</body>
    </html>
  );
}
