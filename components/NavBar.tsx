"use client";

import { FC, useState } from "react";
import Link from "next/link";
import { Poppins } from "next/font/google";
import { usePathname } from "next/navigation";

import { Logo, MenuIcon, CloseIcon } from "@/assets/icons";

const poppins = Poppins({
  subsets: ["latin", "devanagari", "latin-ext"],
  weight: ["400", "600"],
});

const NavBar: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const pathname = usePathname();

  const onMenuOpen = () => {
    setIsMenuOpen(true);
  };

  const onMenuClose = () => {
    setIsMenuOpen(false);
  };

  return (
    <div
      className={`${poppins.className} flex items-center justify-between px-4 py-3 font-normal lg:px-5 lg:py-4`}
    >
      <a href="/">
        <Logo dimension={115} />
      </a>

      {/* Mobile Navbar */}
      <section className="lg:hidden">
        <MenuIcon
          dimension={38}
          className="cursor-pointer select-none"
          onClick={onMenuOpen}
        />
        <nav
          className={`absolute left-0 top-0 h-full w-full items-center justify-center bg-clr-gray1 ${
            isMenuOpen ? "flex opacity-100" : "hidden opacity-0"
          }`}
        >
          <CloseIcon
            dimension={38}
            className="absolute right-4 top-4 cursor-pointer select-none"
            onClick={onMenuClose}
          />
          <ul className="flex flex-col items-center gap-2 text-lg">
            <li
              className={pathname === "/" ? "font-semibold" : ""}
              onClick={onMenuClose}
            >
              <Link href="/">Home</Link>
            </li>
            <li
              className={pathname.includes("blogs") ? "font-semibold" : ""}
              onClick={onMenuClose}
            >
              <Link href="/blogs">Blogs</Link>
            </li>
            <li
              className={pathname.includes("support") ? "font-semibold" : ""}
              onClick={onMenuClose}
            >
              <Link href="/support">Support</Link>
            </li>
            <li
              className="mt-4 bg-clr-black px-4 py-1 text-clr-gray1"
              onClick={onMenuClose}
            >
              <Link href="/signin">Sign in</Link>
            </li>
          </ul>
        </nav>
      </section>

      {/* Desktop Navbar */}
      <ul className="hidden items-center gap-10 text-lg lg:flex">
        <li className={pathname === "/" ? "font-semibold" : ""}>
          <Link href="/">Home</Link>
        </li>
        <li className={pathname.includes("blogs") ? "font-semibold" : ""}>
          <Link href="/blogs">Blogs</Link>
        </li>
        <li className={pathname.includes("support") ? "font-semibold" : ""}>
          <Link href="/support">Support</Link>
        </li>
        <li className="bg-clr-black px-4 py-1 text-clr-gray1">
          <Link href="/signin">Sign in</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
