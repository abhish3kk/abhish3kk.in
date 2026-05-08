import type { Metadata } from "next";
import type { ReactNode } from "react";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Abhishek Sharma | Engineering Portfolio",
  description:
    "Architecture-focused engineering portfolio covering modernization, frontend platforms, reliability, and case studies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
