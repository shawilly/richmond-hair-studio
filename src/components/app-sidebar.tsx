import {
  Calendar,
  Home,
  Inbox,
  LucideIcon,
  Scissors,
  Search,
  Settings,
} from "lucide-react";
import { Italiana } from "next/font/google";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@radix-ui/react-tooltip";

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
    title: "Home",
    url: "#",
    icon: Home,
  },
  {
    title: "Inbox",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Calendar",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
];

export function AppSidebar(): JSX.Element {
  return (
    <Sidebar variant="floating" collapsible="icon" className="bg-beige">
      <SidebarHeader>
        <SidebarMenuButton asChild>
          <a href="/">
            <Scissors />
            <span className={`${italiana.className} text-lg`}>
              Richmond Hair Studio
            </span>
          </a>
        </SidebarMenuButton>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map(
                (item: MenuItem): JSX.Element => (
                  <SidebarMenuItem key={item.title}>
                    <TooltipProvider
                      key={`tooltip-${item.title}`}
                      disableHoverableContent
                    >
                      <Tooltip delayDuration={100}>
                        <TooltipTrigger asChild>
                          <SidebarMenuButton asChild>
                            <a href={item.url}>
                              <item.icon />
                              <span>{item.title}</span>
                            </a>
                          </SidebarMenuButton>
                        </TooltipTrigger>
                        <TooltipContent
                          align="start"
                          alignOffset={2}
                          side="right"
                        >
                          {item.title}
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
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
