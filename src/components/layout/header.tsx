"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
  createTheme,
  Dropdown,
  DropdownItem,
  ThemeProvider,
} from "flowbite-react";

const customHeaderTheme = createTheme({
  navbar: {
    link: {
      base: "block py-2 pl-3 pr-4 md:p-0",
      active: {
        on: "bg-primary-700 text-gray-200 md:bg-transparent md:text-secondary dark:text-white",
        off: "border-b border-gray-100 text-gray-300 hover:bg-gray-600 md:border-0 md:hover:bg-transparent md:hover:text-gray-600 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white md:dark:hover:bg-transparent md:dark:hover:text-white",
      },
    },
  },
  dropdown: {
    floating: {
      animation: "transition-opacity",
      arrow: {
        base: "absolute z-10 h-2 w-2 rotate-45",
        style: {
          dark: "bg-gray-900 dark:bg-gray-700",
          light: "bg-white",
          auto: "bg-white dark:bg-gray-700",
        },
        placement: "-4px",
      },
      base: "z-10 w-fit divide-y divide-gray-100 rounded shadow focus:outline-none",
      content: "py-1 text-sm text-gray-700 dark:text-gray-200",
      divider: "my-1 h-px bg-gray-100 dark:bg-gray-600",
      header: "block px-4 py-2 text-sm text-gray-700 dark:text-gray-200",
      hidden: "invisible opacity-0",
      item: {
        container: "",
        base: "flex w-full cursor-pointer items-center justify-start px-4 py-2 text-sm text-gray-700 hover:bg-gray-300 hover:underline focus:bg-gray-100 focus:outline-none dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:bg-gray-600 dark:focus:text-white",
        icon: "mr-2 h-4 w-4",
      },
      style: {
        dark: "bg-gray-900 text-white dark:bg-gray-700",
        light: "border border-gray-200 bg-white text-gray-900",
        auto: "border border-gray-200 bg-white text-gray-900 dark:border-none dark:bg-gray-700 dark:text-white",
      },
      target: "w-fit",
    },
    inlineWrapper: "flex items-center text-gray-200 hover:text-gray-600",
  },
});

export function Header() {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-50 bg-header-bg shadow-lg border-b border-white/10">
      <Navbar
        fluid
        className="sticky top-0 z-50 bg-header-bg shadow-lg border-b border-white/10"
        theme={customHeaderTheme.navbar}
      >
        <NavbarBrand href="/">
          <div className="flex items-center gap-3">
            <img
              src="/images/ranger-grizz400trans.png"
              className="h-12 lg:h-16"
              alt="Dasher Apparel Logo"
            />
            <div className="hidden lg:block">
              <h1 className="font-display font-black text-white text-xl tracking-wider leading-none">
                NORTH SPRINGS
              </h1>
              <span className="text-xs text-slate-400 font-bold tracking-[0.2em] uppercase">
                Lacrosse Hub
              </span>
            </div>
          </div>
        </NavbarBrand>

        <NavbarCollapse className="md:flex hidden">
          <NavbarLink
            active={pathname === "/"}
            href="/"
            // className="hover:underline text-gray-300 p-2 hover:text-gray-400"
          >
            Home
          </NavbarLink>
          <Dropdown
            label="Clubs"
            inline
            // className="hover:underline dark:text-gray-400 p-2 hover:text-gray-400"
            theme={customHeaderTheme.dropdown}
          >
            <DropdownItem href="/">Ranger Boys Lacrosse</DropdownItem>
            <DropdownItem href="/">Grizzlies Girls Lacrosse</DropdownItem>
            <DropdownItem href="/">Cosmo Chaos Lacrosse</DropdownItem>
            <DropdownItem href="/">Bolts Lacrosse</DropdownItem>
          </Dropdown>
          <NavbarLink
            href="#"
            active={pathname.startsWith("/news")}
            // className="hover:underline text-gray-300 p-2 hover:text-gray-600"
          >
            News
          </NavbarLink>
          <NavbarLink
            href="#"
            active={pathname.startsWith("/calendar")}
            // className="hover:underline text-gray-300 p-2 hover:text-gray-600"
          >
            Calendar
          </NavbarLink>
          <NavbarLink
            href="https://www.tamalax.com"
            // className="hover:underline text-gray-300 p-2 hover:text-gray-600"
          >
            Equipment
          </NavbarLink>
        </NavbarCollapse>
        <NavbarToggle />
        <NavbarCollapse className="md:hidden">
          <NavbarLink
            // active={pathname === "/"}
            href="/"
            // className="hover:underline text-gray-300 p-2 hover:text-gray-400"
          >
            Home
          </NavbarLink>
          <NavbarLink
            // active={pathname === "/"}
            href="/"
            // className="hover:underline text-gray-300 p-2 hover:text-gray-400"
          >
            Ranger Boys Lacrosse
          </NavbarLink>
          <NavbarLink
            // active={pathname === "/"}
            href="/"
            // className="hover:underline text-gray-300 p-2 hover:text-gray-400"
          >
            Grizzlies Girls Lacrosse
          </NavbarLink>
          <NavbarLink
            // active={pathname === "/"}
            href="/"
            // className="hover:underline text-gray-300 p-2 hover:text-gray-400"
          >
            Cosmo Chaos Lacrosse
          </NavbarLink>
          <NavbarLink
            // active={pathname === "/"}
            href="/"
            // className="hover:underline text-gray-300 p-2 hover:text-gray-400"
          >
            Bolts Lacrosse
          </NavbarLink>

          <NavbarLink
            href="#"
            active={pathname.startsWith("/news")}
            // className="hover:underline text-gray-300 p-2 hover:text-gray-600"
          >
            News
          </NavbarLink>
          <NavbarLink
            href="#"
            active={pathname.startsWith("/calendar")}
            // className="hover:underline text-gray-300 p-2 hover:text-gray-600"
          >
            Calendar
          </NavbarLink>
          <NavbarLink
            href="https://www.tamalax.com"
            // className="hover:underline text-gray-300 p-2 hover:text-gray-600"
          >
            Equipment
          </NavbarLink>
        </NavbarCollapse>
      </Navbar>
    </header>
  );
}
