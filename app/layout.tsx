import type { Metadata } from "next";
import type { ReactNode } from "react";
import { ThemeProvider } from "@/components/theme-provider";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Abhishek Sharma | Engineering",
  description:
    "Engineering notes from migrations, frontend platforms, and reliability work.",
  icons: {
    icon: "/favicon.svg",
  },
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
        <script
          defer
          src="https://analytics.abhish3kk.in/script.js"
          data-website-id="e4515222-621c-41d0-9ac8-ff4a2ecb152e"
        />
      </head>
      <body className="bg-zinc-50 text-zinc-950 dark:bg-zinc-950 dark:text-zinc-100">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
