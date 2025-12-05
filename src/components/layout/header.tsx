"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuContent,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export function Header() {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-50 bg-header-bg shadow-lg border-b border-white/10">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-white rounded flex items-center justify-center transform -skew-x-12">
            <span className="font-display font-black text-navy-900 text-lg transform skew-x-12">
              NS
            </span>
          </div>
          <div className="hidden lg:block">
            <h1 className="font-display font-black text-white text-xl tracking-wider leading-none">
              NORTH SPRINGS
            </h1>
            <span className="text-xs text-slate-400 font-bold tracking-[0.2em] uppercase">
              Lacrosse Hub
            </span>
          </div>
        </div>

        <NavigationMenu className="">
          <NavigationMenuList className="flex-wrap gap-6">
            <NavigationMenuItem className="hidden sm:flex">
              <NavigationMenuLink
                className="hover:underline text-gray-300 p-2 hover:bg-transparent hover:text-gray-600"
                asChild
              >
                <Link href="https://en.wikipedia.org/wiki/Lacrosse" passHref>
                  What Is Lacrosse?
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            {/* <NavigationMenuItem>
              <NavigationMenuLink
                className="hover:underline text-gray-300 p-2 hover:bg-transparent hover:text-gray-600"
                asChild
              >
                <Link href="/" passHref>
                  Events
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                className="hover:underline text-gray-300 p-2 hover:bg-transparent hover:text-gray-600"
                asChild
              >
                <Link href="/" passHref>
                  News
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem> */}
            <NavigationMenuItem className="text-gray-300 hover:text-gray-400">
              <NavigationMenuTrigger className="">Clubs</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[200px] gap-4 ">
                  <li>
                    <NavigationMenuLink asChild>
                      <Link
                        href="https://www.rangerlacrosse.org/"
                        className="hover:bg-gray-300"
                      >
                        Ranger Boys Lacrosse
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link
                        href="https://www.grizzliesgirlslacrosse.org/"
                        className="hover:bg-gray-300"
                      >
                        Grizzlies Girls Lacrosse
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link
                        href="https://www.cosmolax.com/"
                        className="hover:bg-gray-300"
                      >
                        Cosmo Chaos Lacrosse
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link
                        href="https://boltslax.leagueapps.com/"
                        className="hover:bg-gray-300"
                      >
                        Bolts Lacrosse
                      </Link>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                className="hover:underline text-gray-300 p-2 hover:bg-transparent hover:text-gray-400"
                asChild
              >
                <Link href="https://www.tamalax.com/" passHref>
                  Equipment
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* <Link
          href="#"
          className="bg-gold-500 hover:bg-gold-600 text-navy-900 font-display font-bold text-sm px-6 py-3 rounded transform hover:-translate-y-0.5 transition shadow-lg"
        >
          FIND A TEAM
        </Link> */}
        <div></div>
        <div></div>
      </div>
    </header>
  );
}
