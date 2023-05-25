import Link from "next/link";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: "400" });

const HomeButtons = () => {
  return (
    <div
      className={`${poppins.className} flex justify-center gap-5 md:gap-7 lg:gap-8 text-sm lg:text-base`}
    >
      <Link
        href="/signup"
        className="bg-clr-black text-clr-gray1 border-2 border-clr-black py-2 px-3"
      >
        Start Writing
      </Link>
      <Link href="/blogs" className="border-2 border-clr-black py-2 px-3">
        Explore Blogs
      </Link>
    </div>
  );
};

export default HomeButtons;
