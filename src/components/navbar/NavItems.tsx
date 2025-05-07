"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Home, Book, User, Code, Camera, Dot } from "lucide-react";
import { useEffect, useState } from "react";
import { ForwardRefExoticComponent } from "react";
import { LucideProps } from "lucide-react";

const navItems: NavItemsType[] = [
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

interface NavItemsType {
  label: string;
  key: string;
  icon: ForwardRefExoticComponent<Omit<LucideProps, "ref">>;
}

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

  const homeItem: NavItemsType = {
    label: "/",
    key: "/",
    icon: Home,
  };

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

  const MobileNavItems: NavItemsType[] = [homeItem, ...navItems];

  return (
    <nav
      className={`${
        show ? "fixed" : "fixed translate-y-20"
      }  bg-white dark:bg-gray-800 rounded-t-3xl  bottom-0  w-full mx-auto  px-4 transition delay-150 sm:hidden`}
    >
      <div
        className={`rounded-t-3xl bg-white dark:bg-gray-800 flex justify-evenly py-2`}
      >
        {MobileNavItems.map((Item) => (
          <div key={Item.key} className="flex flex-col items-center">
            <Link
              href={Item.key}
              className={`p-2 opacity-35 dark:text-white rounded-full ${
                isActive(pathName, Item.key) &&
                "dark:text-yellow-500 opacity-100"
              }`}
            >
              <Item.icon size={20} />
            </Link>
            {isActive(pathName, Item.key) && (
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

function isActive(pathName: string, key: string) {
  if (key === pathName) {
    return true;
  } else if (key != "/" && pathName.includes(key)) {
    return true;
  }
  return false;
}

export { NavItems, MobileNavBar };
