import type { Metadata } from "next";

import "@/app/globals.css";

export const metadata: Metadata = {
  title: "AjutorGestiune",
  description: "AI-powered retail control tower for Romanian merchants.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
