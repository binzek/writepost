"use client";

// Library imports
import { FC, ReactNode } from "react";
import Link from "next/link";
import { Poppins } from "next/font/google";
import { usePathname } from "next/navigation";

// Layout props
interface Props {
  children: ReactNode;
}

// Fonts initialization
const poppins = Poppins({
  subsets: ["latin", "devanagari", "latin-ext"],
  weight: ["300", "400", "500", "600"],
});

const SupportLayout: FC<Props> = ({ children }) => {
  // Get path after /support to apply corresponding styles
  const pathname = usePathname().split("/")[2];

  return (
    <div className="flex flex-1 flex-col justify-center">
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
    </div>
  );
};

export default SupportLayout;
