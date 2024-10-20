"use client";

import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import { useSidebar } from "./ui/sidebar";
import clsx from "clsx";

export function SideBarTriggerButton(): JSX.Element {
  const { toggleSidebar, isMobile } = useSidebar();

  return (
    <Button
      onClick={toggleSidebar}
      variant="ghost"
      className={clsx("text-orange", isMobile ? "fixed top-4" : "")}
      size="icon"
    >
      <Menu className="w-64" />
    </Button>
  );
}
