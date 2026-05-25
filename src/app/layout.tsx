import type { Metadata } from "next";
import Script from "next/script";
import { ThemeProvider } from "@/components/theme-provider";
import { RainBackground } from "@/components/ui/rain-background";
import { SidebarProvider } from "./_components/SidebarContext";
import { Lora } from "next/font/google";
import "./globals.css";
import "./fonts.css";
import Header from "./_components/Header";

const lora = Lora({ 
  subsets: ["latin"],
  variable: "--font-lora",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Quincy Labs",
  description: "AI Infrastructure Lab for Autonomous Agents",
  icons: {
    icon: "/quincy-logo.svg",
    shortcut: "/quincy-logo.svg",
    apple: "/quincy-logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {process.env.NODE_ENV === "development" && (
          <Script
            src="//unpkg.com/react-grab/dist/index.global.js"
            crossOrigin="anonymous"
            strategy="beforeInteractive"
          />
        )}
        {process.env.NODE_ENV === "development" && (
          <Script
            src="//unpkg.com/@react-grab/claude-code/dist/client.global.js"
            strategy="lazyOnload"
          />
        )}
      </head>
      <body className={`font-departure-mono ${lora.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <SidebarProvider>
            <RainBackground />
            {children}
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
