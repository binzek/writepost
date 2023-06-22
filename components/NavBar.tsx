"use client";

// Library imports
import { FC, useEffect, useState } from "react";
import Link from "next/link";
import { Poppins } from "next/font/google";
import { usePathname, useRouter } from "next/navigation";

// Local imports
import { Logo, MenuIcon, CloseIcon } from "@/assets/icons";
import { account } from "@/api/appwrite";
import SideBar from "./SideBar";

// Fonts initialization
const poppins = Poppins({
  subsets: ["latin", "devanagari", "latin-ext"],
  weight: ["400", "600"],
});

const NavBar: FC = () => {
  // State for navbar menu to choose its open/close state
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  // State to check wether if the user present or not
  const [isUser, setIsUser] = useState(false);

  // Get current path name after domain
  const pathname = usePathname();

  const router = useRouter();

  // Open navbar menu
  const onSideBarOpen = () => {
    setIsSideBarOpen(true);
  };

  // Close navbar menu
  const onSideBarClose = () => {
    setIsSideBarOpen(false);
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
      className={`${poppins.className} relative flex items-center justify-between px-4 py-3 lg:px-5 lg:py-4`}
    >
      <a href="/">
        <Logo dimension={115} />
      </a>
      {isSideBarOpen ? (
        <CloseIcon
          dimension={35}
          className="right-4 top-4 z-20 cursor-pointer select-none"
          onClick={onSideBarClose}
        />
      ) : (
        <MenuIcon
          dimension={35}
          className="z-20 cursor-pointer select-none"
          onClick={onSideBarOpen}
        />
      )}
      <SideBar isOpen={isSideBarOpen} />
    </div>
  );
};

export default NavBar;
