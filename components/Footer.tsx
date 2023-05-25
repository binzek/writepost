import Link from "next/link";
import { Poppins } from "next/font/google";

import { HeartIcon, GitHubIcon, KeyboardIcon } from "@/assets/icons";

const poppins = Poppins({ subsets: ["latin"], weight: "200" });

const Footer = () => {
  return (
    <div className="w-[95%] lg:w-[98%] mx-auto">
      <div className="h-[1px] w-full bg-clr-gray3" />
      <div className={`${poppins.className} flex justify-between text-sm mt-1`}>
        <p>&copy; WRITEPOST 2023</p>
        <div className="flex gap-2">
          <Link href="https://buymeacoffee.com/wajidnv/" target="_blank">
            <HeartIcon strokeWidth={0.5} />
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
