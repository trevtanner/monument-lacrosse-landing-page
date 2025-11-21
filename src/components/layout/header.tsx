"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

export function Header() {
  const pathname = usePathname();
  return (
    <NavigationMenu className="flex items-center text-center justify-center px-8 py-4 header nav-text sticky top-0 z-50 bg-white">
      <NavigationMenuList className="">
        <NavigationMenuItem>
          <NavigationMenuLink
            className="hover:underline p-2 hover:bg-transparent"
            asChild
          >
            <Link href="https://en.wikipedia.org/wiki/Lacrosse">
              What is Lacrosse?
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            className="hover:underline p-2 hover:bg-transparent"
            asChild
          >
            <Link href="https://www.tamalax.com/">Equipment</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            className="hover:underline p-2 hover:bg-transparent"
            asChild
          >
            <Link href={"https://www.rangerlacrosse.org/"}>
              Ranger Lacrosse
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            className="hover:underline p-2 hover:bg-transparent"
            asChild
          >
            <Link href={"https://www.grizzliesgirlslacrosse.org/"}>
              Grizzlies Girls Lacrosse
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            className="hover:underline p-2 hover:bg-transparent"
            asChild
          >
            <Link href={"https://www.cosmolax.com/"}>Cosmo Chaos Lacrosse</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
