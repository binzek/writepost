"use client";

import { useState } from "react";
import Link from "next/link";
import { Poppins } from "next/font/google";

import Logo from "./Logo";

const poppins = Poppins({ subsets: ["latin"], weight: "400" });

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const onMenuOpen = () => {
    setIsMenuOpen(true);
  };

  const onMenuClose = () => {
    setIsMenuOpen(false);
  };

  return (
    <div
      className={`${poppins.className} flex justify-between items-center py-3 px-4 lg:py-4 lg:px-5`}
    >
      <a href="/">
        <Logo />
      </a>

      {/* Mobile Navbar */}
      <section className="lg:hidden">
        <span
          className="material-symbols-sharp cursor-pointer select-none"
          onClick={onMenuOpen}
        >
          menu
        </span>
        <nav
          className={`absolute left-0 top-0 bg-clr-gray1 w-full h-full items-center justify-center ${
            isMenuOpen ? "flex opacity-100" : "hidden opacity-0"
          }`}
        >
          <span
            className="material-symbols-sharp absolute top-4 right-4 cursor-pointer select-none"
            onClick={onMenuClose}
          >
            close
          </span>
          <ul className="flex flex-col items-center gap-2 text-lg">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/blogs">Blogs</Link>
            </li>
            <li>
              <Link href="/support">Support</Link>
            </li>
            <li className="bg-clr-black text-clr-gray1 py-1 px-4 mt-4">
              <Link href="/signin">Sign in</Link>
            </li>
          </ul>
        </nav>
      </section>

      {/* Desktop Navbar */}
      <ul className="hidden lg:flex items-center gap-10 text-lg">
        <li className="border-b-2 border-clr-black">
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/blogs">Blogs</Link>
        </li>
        <li>
          <Link href="/support">Support</Link>
        </li>
        <li className="bg-clr-black text-clr-gray1 py-1 px-4">
          <Link href="/signin">Sign in</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
