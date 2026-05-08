import type { Metadata } from "next";
import type { ReactNode } from "react";
import { ThemeProvider } from "@/components/theme-provider";
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
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var theme=localStorage.getItem("theme");var root=document.documentElement;if(theme==="dark"){root.classList.add("dark")}else{root.classList.remove("dark")}}catch(_){}`,
          }}
        />
      </head>
      <body className="bg-zinc-50 text-zinc-950 dark:bg-zinc-950 dark:text-zinc-100">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
