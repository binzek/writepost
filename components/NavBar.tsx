"use client";

// Library imports
import { FC, useEffect, useState } from "react";
import Link from "next/link";
import { Poppins } from "next/font/google";
import { usePathname, useRouter } from "next/navigation";

// Local imports
import { Logo, MenuIcon, CloseIcon } from "@/assets/icons";
import { account } from "@/api/appwrite";

// Fonts initialization
const poppins = Poppins({
  subsets: ["latin", "devanagari", "latin-ext"],
  weight: ["400", "600"],
});

const NavBar: FC = () => {
  // State for navbar menu to choose its open/close state
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // State to check wether if the user present or not
  const [isUser, setIsUser] = useState(false);

  // Get current path name after domain
  const pathname = usePathname();

  const router = useRouter();

  // Open navbar menu
  const onMenuOpen = () => {
    setIsMenuOpen(true);
  };

  // Close navbar menu
  const onMenuClose = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    account
      .get()
      .then((userData) => {
        userData ? setIsUser(true) : setIsUser(false);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div
      className={`${poppins.className} z-50 flex items-center justify-between px-4 py-3 font-normal lg:px-5 lg:py-4`}
    >
      <a href="/">
        <Logo dimension={115} />
      </a>

      {/* Vertical fullscreen navbar menu for smaller devices */}
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
              {isUser ? (
                <Link href="/dashboard">Go to Dashboard</Link>
              ) : (
                <Link href="/signin">Sign in</Link>
              )}
            </li>
          </ul>
        </nav>
      </section>

      {/* Horizontal navbar for larger devices */}
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
          {isUser ? (
            <Link href="/dashboard">Go to Dashboard</Link>
          ) : (
            <Link href="/signin">Sign in</Link>
          )}
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
