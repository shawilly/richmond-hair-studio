"use client";

import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import { useSidebar } from "./ui/sidebar";

export function SideBarTriggerButton(): JSX.Element {
  const { toggleSidebar } = useSidebar();

  return (
    <Button
      onClick={toggleSidebar}
      className="text-beige w-7 h-7 bg-purple m-1"
    >
      <Menu />
    </Button>
  );
}
