"use client";

import Link from "next/link";
import Image from "next/image";
import { NavItems, MobileNavBar } from "./NavItems";
import ThemeSwitch from "./ThemeSwitch";
import { Squirrel } from "lucide-react";
import { pageBg } from "../../../utils/styles";

const NavBar = () => {
  return (
    <>
      <nav
        className={`${pageBg} mx-auto flex max-w-[900px] items-center justify-between gap-3 px-4 pt-4 pb-4 opacity-95`}
      >
        <Link href="/">
          <Squirrel size={35} />
        </Link>
        <ul className="gap-x-12 hidden text-sm md:flex cursor-pointer">
          <NavItems />
        </ul>

        <ThemeSwitch />
      </nav>
      <MobileNavBar />
    </>
  );
};

const mobileNavStyle = "dark:text-black ";

export default NavBar;
