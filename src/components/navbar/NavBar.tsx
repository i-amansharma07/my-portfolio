"use client";

import Link from "next/link";
import Image from "next/image";
import { NavItems, NavDropDownItems } from "./NavItems";
import ThemeSwitch from "./ThemeSwitch";
import { Squirrel } from "lucide-react";
import { pageBg } from "../../../utils/styles";

const NavBar = () => {
  return (
    <nav
      className={`${pageBg} mx-auto flex max-w-[900px] items-center justify-between gap-3 px-4 pt-4 opacity-95`}
    >
      <Link href="/">
        <Squirrel size={35} />
      </Link>
      <ul className="gap-x-12 hidden text-sm md:flex cursor-pointer">
        <NavItems />
      </ul>
      <div className="flex gap-5">
        <NavDropDownItems />
        <ThemeSwitch />
      </div>
    </nav>
  );
};

export default NavBar;
