"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeSwitch from "./ThemeSwitch";

const Navbar = () => {
  const currentPage = usePathname();

  const pages = [
    { name: "Home", path: "/" },
    { name: "Services", path: "services" },
    { name: "Projects", path: "projects" },
    { name: "About", path: "about" },
  ];

  const isLinkActive = (path: string) => {
    if (path === "/") return currentPage === path;
    return currentPage.includes(path);
  };

  return (
    <nav className="flex flex-row justify-between items-center py-3">
      <ul className="flex justify-center w-full md:w-auto">
        {pages.map((page, index) => (
          <li
            key={page.name}
            className={`py-5 mx-auto ${
              index === 0 ? "md:mr-7" : "md:mx-7"
            } font-light ${
              isLinkActive(page.path)
                ? "bg-gradient-to-r from-rose-500 to-amber-500 text-transparent bg-clip-text"
                : ""
            }`}
          >
            <Link href={page.path}>{page.name}</Link>
          </li>
        ))}
      </ul>
      <ThemeSwitch />
    </nav>
  );
};

export default Navbar;
