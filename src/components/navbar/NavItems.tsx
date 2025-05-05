"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Book, User, BriefcaseBusiness, Code, Camera, Dot } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  {
    label: "Blogs/Stories",
    key: "/blogs",
    icon: Book,
  },
  {
    label: "Me?",
    key: "/me",
    icon: User,
  },
  {
    label: "Work",
    key: "/work",
    icon: Code,
  },
  {
    label: "Clicks",
    key: "/clicks",
    icon: Camera,
  },
];

const NavItems = () => {
  const pathName = usePathname();
  return navItems.map((item, idx) => (
    <li
      key={idx}
      className={`text-light-dim dark:text-dark-dim
        hover:text-black  dark:hover:text-white delay-150 duration-200`}
    >
      <Link
        className={`${
          pathName.includes(item.key) && "dark:text-white text-black"
        }`}
        href={item.key}
      >
        {item.label}
      </Link>
    </li>
  ));
};

const MobileNavBar = () => {
  const [show, setShow] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);
  const pathName = usePathname();

  function controlNavbar() {
    const currentScroll = window.scrollY;
    if (currentScroll > lastScroll) {
      setShow(false);
    } else {
      setShow(true);
    }
    setLastScroll(currentScroll);
  }

  useEffect(() => {
    setLastScroll(window.scrollY);
    window.addEventListener("scroll", controlNavbar);

    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScroll]);

  return (
    <nav
      className={`${
        show ? "fixed" : "fixed translate-y-20"
      }  bg-white dark:bg-gray-800 rounded-t-3xl  bottom-0  w-full mx-auto  px-4 transition delay-150 sm:hidden`}
    >
      <div
        className={`rounded-t-3xl bg-white dark:bg-gray-800 flex justify-evenly py-2`}
      >
        {navItems.map((Item) => (
          <div key={Item.key} className="flex flex-col items-center">
            <Link
              href={Item.key}
              className={`p-2 opacity-35 dark:text-white rounded-full ${
                pathName.includes(Item.key) &&
                "dark:text-yellow-500 opacity-100"
              }`}
            >
              <Item.icon size={20} />
            </Link>
            {pathName.includes(Item.key) && (
              <span className={`flex text-yellow-500 -mt-2`}>
                <Dot size={18} />
              </span>
            )}
          </div>
        ))}
      </div>
    </nav>
  );
};

export { NavItems, MobileNavBar };
