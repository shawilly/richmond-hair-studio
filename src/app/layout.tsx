import { AppSidebar } from "@/components/app-sidebar";
import { SideBarTriggerButton } from "@/components/sidebar-trigger-button";
import { SidebarProvider } from "@/components/ui/sidebar";
import type { Metadata } from "next";
import { Varela } from "next/font/google";
import "./globals.css";

const verela = Varela({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Richmond Hair Studio",
  description: "Established 1923",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${verela.className} antialiased`}>
        <SidebarProvider>
          <AppSidebar />
          <SideBarTriggerButton />
          {children}
        </SidebarProvider>
      </body>
    </html>
  );
}
