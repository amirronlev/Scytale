import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import localFont from "next/font/local";
import { SidebarProvider } from "@/components/ui/sidebar";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AppSidebar } from "@/components/app-sidebar";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const clashDisplay = localFont({
  src: [
    { path: "../../public/fonts/ClashDisplay-Medium.woff2", weight: "500" },
    { path: "../../public/fonts/ClashDisplay-Semibold.woff2", weight: "600" },
    { path: "../../public/fonts/ClashDisplay-Bold.woff2", weight: "700" },
  ],
  variable: "--font-clash-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Scytale",
  description: "Scytale — Security & Compliance Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${clashDisplay.variable} font-sans antialiased`}
      >
        <TooltipProvider>
          <SidebarProvider>
            <AppSidebar />
            <main className="flex-1">{children}</main>
          </SidebarProvider>
        </TooltipProvider>
      </body>
    </html>
  );
}
