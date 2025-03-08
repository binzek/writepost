// Library imports
import { FC } from "react";
import Link from "next/link";
import { Poppins } from "next/font/google";

// Local imports
import { HeartIcon, GitHubIcon, KeyboardIcon } from "@/assets/icons";

// Fonts initialization
const poppins = Poppins({
  subsets: ["latin", "devanagari", "latin-ext"],
  weight: "200",
});

const Footer: FC = () => {
  // Get current year
  let currentYear = new Date().getFullYear();

  return (
    <div className="mx-auto mb-2 w-[95%] lg:w-[98%]">
      <div className="h-[1px] w-full bg-clr-gray3" />
      <div
        className={`${poppins.className} mt-1 flex justify-between px-2 text-sm`}
      >
        <p>&copy; {currentYear} ABDUL WAJID</p>
        <div className="flex items-center gap-3">
          <Link href="https://buymeacoffee.com/binzek" target="_blank">
            <HeartIcon dimension={22} strokeWidth={1.5} color="#F33A6A" />
          </Link>
          <Link href="https://github.com/binzek/writepost" target="_blank">
            <GitHubIcon strokeWidth={0.5} />
          </Link>
          <Link href="https://www.binzek.com/" target="_blank">
            <KeyboardIcon strokeWidth={0.5} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
