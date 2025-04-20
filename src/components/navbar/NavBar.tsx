"use client";

import Link from "next/link";
import Image from "next/image";
import { NavItems, NavDropDownItems } from "./NavItems";
import ThemeSwitch from "./ThemeSwitch";

const NavBar = () => {
  return (
    <nav className="mx-auto flex max-w-[900px] items-center justify-between gap-3 px-4 py-4 mb-10">
      <Link href="/">
        <Image
          className="rounded-full"
          src={`/my-logo.png`}
          alt={"Logo"}
          width="44"
          height="44"
        />
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
