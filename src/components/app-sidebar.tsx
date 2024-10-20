import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  CalendarDays,
  Contact,
  Home,
  LucideIcon,
  PhoneCall,
  Scissors,
  ScissorsLineDashed,
} from "lucide-react";
import { Italiana } from "next/font/google";

interface MenuItem {
  title: string;
  url: string;
  icon: LucideIcon;
}

const italiana = Italiana({
  weight: "400",
  subsets: ["latin"],
});

const items: MenuItem[] = [
  {
    title: "Book now",
    url: "#book-now",
    icon: CalendarDays,
  },
  {
    title: "Products & Services",
    url: "#products-and-services",
    icon: ScissorsLineDashed,
  },
  {
    title: "About",
    url: "#about-us",
    icon: Contact,
  },
  {
    title: "Contact us",
    url: "#book-now",
    icon: PhoneCall,
  },
];

export function AppSidebar(): JSX.Element {
  return (
    <Sidebar variant="floating" collapsible="icon" className="bg-beige">
      <SidebarHeader>
        <SidebarMenuButton asChild tooltip="Home">
          <a href="/">
            <Scissors rotate={45} />
            <span className={`${italiana.className} text-lg`}>
              Richmond Hair Studio
            </span>
          </a>
        </SidebarMenuButton>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenuItem key="home">
              <SidebarMenuButton asChild tooltip={"Home"}>
                <a href="#">
                  <Home />
                  <span>Home</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map(
                (item: MenuItem): JSX.Element => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild tooltip={item.title}>
                      <a href={item.url}>
                        <item.icon />
                        <span>{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ),
              )}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
