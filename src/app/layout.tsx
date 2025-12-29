import type { Metadata } from "next";
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
  description: "Financial Reishi Research Institute",
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
