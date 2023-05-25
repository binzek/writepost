import Link from "next/link";
import { Poppins } from "next/font/google";

import { HeartIcon, GitHubIcon, KeyboardIcon } from "@/assets/icons";

const poppins = Poppins({ subsets: ["latin"], weight: "200" });

const Footer = () => {
  return (
    <div className="w-[95%] lg:w-[98%] mx-auto mb-2">
      <div className="h-[1px] w-full bg-clr-gray3" />
      <div
        className={`${poppins.className} flex justify-between text-sm mt-1 px-2`}
      >
        <p>&copy; WRITEPOST 2023</p>
        <div className="flex gap-3 items-center">
          <Link href="https://buymeacoffee.com/wajidnv/" target="_blank">
            <HeartIcon dimension={22} strokeWidth={1.5} color="#F33A6A" />
          </Link>
          <Link href="https://github.com/wajid-nv/writepost/" target="_blank">
            <GitHubIcon strokeWidth={0.5} />
          </Link>
          <Link href="https://wajid.me/" target="_blank">
            <KeyboardIcon strokeWidth={0.5} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
