import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { RainBackground } from "@/components/ui/rain-background";
import { SidebarProvider } from "./_components/SidebarContext";
import "./globals.css";
import "./fonts.css";
import Header from "./_components/Header";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Quincy Labs",
  description: "Financial Reishi Research Institute",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-departure-mono">
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
