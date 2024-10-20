import { AppSidebar } from "@/components/app-sidebar";
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
}>): JSX.Element {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${verela.className} antialiased m-4`}>
        <SidebarProvider>
          <AppSidebar />
          {children}
        </SidebarProvider>
      </body>
    </html>
  );
}
