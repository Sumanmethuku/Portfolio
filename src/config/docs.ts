/* eslint-disable */

import { MainNavItem, SidebarNavItem } from "types/nav";

export interface DocsConfig {
  mainNav: MainNavItem[];
  sidebarNav: SidebarNavItem[];
}

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: "Projects",
      href: "/projects"
    },
    {
      title: "About",
      href: "/about"
    }
  ],
  sidebarNav: [
    {
      title: "Suman Methuku",
      items: [
        {
          title: "Projects",
          href: "/projects",
          items: []
        },
        {
          title: "About Me",
          href: "/about",
          items: []
        }
      ]
    }
  ]
};
