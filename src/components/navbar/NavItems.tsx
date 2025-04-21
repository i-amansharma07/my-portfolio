import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const navItems = [
  {
    label: "Blogs/Stories",
    key: "/blogs",
  },
  {
    label: "Me?",
    key: "/me",
  },
  {
    label: "Work",
    key: "/work",
  },
  {
    label: "Projects",
    key: "/projects",
  },
  {
    label: "Clicks",
    key: "/clicks",
  },
];

const NavItems = () => {
  const pathName = usePathname();
  return navItems.map((item, idx) => (
    <li
      key={idx}
      className={`text-light-dim dark:text-dark-dim
        hover:text-black  dark:hover:text-white delay-150 duration-200 ${
          pathName.includes(item.key) && "text-black dark:text-white"
        }`}
    >
      <Link href={item.key}>{item.label}</Link>
    </li>
  ));
};

const NavDropDownItems = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="md:hidden border-0">Open</DropdownMenuTrigger>
      <DropdownMenuContent className="md:hidden bg-gray-200   dark:bg-gray-800">
        {navItems.map((item) => {
          return (
            <Link href={item.key}>
              <DropdownMenuItem className="text-black dark:text-white">
                {item.label}
              </DropdownMenuItem>
            </Link>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export { NavItems, NavDropDownItems };
