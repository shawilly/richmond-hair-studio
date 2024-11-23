import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import type { Metadata } from "next";
import { Varela } from "next/font/google";
import { cookies } from "next/headers";
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
  const cookieStore = cookies();
  const defaultOpen = cookieStore.get("sidebar:state")?.value === "true";

  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${verela.className} antialiased m-4 max-w-screen`}>
        <SidebarProvider defaultOpen={defaultOpen}>
          <SidebarTrigger
            key="sidebar-trigger"
            className="fixed bg-orange rounded-2xl top-4 left-4"
          />
          <AppSidebar />
          {children}
        </SidebarProvider>
      </body>
    </html>
  );
}
