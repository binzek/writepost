"use client";

// Library imports
import { FC, useState } from "react";
import { Poppins } from "next/font/google";

// Local imports
import { Logo, MenuIcon, CloseIcon } from "@/assets/icons";
import SideBar from "./SideBar";

// Fonts initialization
const poppins = Poppins({
  subsets: ["latin", "devanagari", "latin-ext"],
  weight: ["400", "600"],
});

const NavBar: FC = () => {
  // State for sidebar to choose its open/close state
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  // Open sidebar
  const openSideBar = () => {
    setIsSideBarOpen(true);
  };

  // Close sidebar
  const closeSideBar = () => {
    setIsSideBarOpen(false);
  };

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
          onClick={closeSideBar}
        />
      ) : (
        <MenuIcon
          dimension={35}
          className="z-20 cursor-pointer select-none"
          onClick={openSideBar}
        />
      )}
      <SideBar isOpen={isSideBarOpen} />
    </div>
  );
};

export default NavBar;
