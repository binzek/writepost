"use client";

import React, { useEffect } from "react";
import { Poppins } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname().split("/")[2];

  return (
    <div
      className={`${poppins.className} mx-auto w-11/12 border-2 border-clr-black md:w-3/4 lg:w-1/2 xl:w-1/3`}
    >
      <div className="flex justify-between border-b-2 border-b-clr-black text-center font-light lg:text-lg">
        <Link
          href="/support/get"
          className={`${
            pathname === "get" && "bg-clr-black text-clr-gray1"
          } flex-1 border-r-clr-black py-1`}
        >
          Get Support
        </Link>
        <Link
          href="support/give"
          className={`${
            pathname === "give" && "bg-clr-black text-clr-gray1"
          } flex-1 border-l-clr-black py-1`}
        >
          Support Me
        </Link>
      </div>
      <div className="p-4">{children}</div>
    </div>
  );
}

export default RootLayout;
