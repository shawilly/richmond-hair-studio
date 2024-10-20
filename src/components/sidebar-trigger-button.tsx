"use client";

import clsx from "clsx";
import { Menu } from "lucide-react";
import { useSidebar } from "./ui/sidebar";

export function SideBarTriggerButton(): JSX.Element {
  const { toggleSidebar, isMobile } = useSidebar();

  return (
    <Menu
      onClick={toggleSidebar}
      className={clsx(
        "h-9 w-9 fixed top-2 shadow-md shadow-neutral-400 left-2 bg-offwhite p-1 text-blue rounded hover:bg-yellow",
        isMobile ? "left-2" : "left-[264px]",
      )}
    />
  );
}
