// Library imports
import { FC } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Local imports
import {
  AddIcon,
  FeedsIcon,
  GiveIcon,
  HomeIcon,
  ProfileIcon,
  SupportIcon,
} from "@/assets/icons";

// SideBar Props
interface Props {
  isOpen: boolean;
}

const SideBar: FC<Props> = ({ isOpen }) => {
  // Get current path name after domain
  const pathname = usePathname();

  return (
    <div
      className={`${
        !isOpen && "hidden"
      } fixed right-0 top-0 z-10 mb-12 h-screen bg-clr-gray2`}
    >
      <ul className="mt-14 flex h-full flex-col">
        <li
          className={`${
            pathname === "/profile" && "bg-clr-black text-clr-gray1"
          }`}
        >
          <Link href="/profile" className="flex gap-1 px-10 py-4">
            <ProfileIcon color={pathname === "/profile" ? "#EFEFEF" : "#000"} />
            <span>Profile</span>
          </Link>
        </li>
        <li className={`${pathname === "/" && "bg-clr-black text-clr-gray1"}`}>
          <Link href="/" className="flex gap-1 px-10 py-4">
            <HomeIcon color={pathname === "/" ? "#EFEFEF" : "#000"} />
            <span>Home</span>
          </Link>
        </li>
        <li
          className={`${
            pathname === "/blogs" && "bg-clr-black text-clr-gray1"
          }`}
        >
          <Link href="/blogs" className="flex gap-1 px-10 py-4">
            <FeedsIcon
              color={pathname.includes("/blog") ? "#EFEFEF" : "#000"}
            />
            <span>Blogs</span>
          </Link>
        </li>
        <li
          className={`${
            pathname === "/support/get" && "bg-clr-black text-clr-gray1"
          }`}
        >
          <Link href="/support/get" className="flex gap-1 px-10 py-4">
            <SupportIcon
              color={pathname === "/support/get" ? "#EFEFEF" : "#000"}
            />
            <span>Get Support</span>
          </Link>
        </li>
        <li
          className={`${
            pathname === "/support/give" && "bg-clr-black text-clr-gray1"
          }`}
        >
          <Link href="/support/give" className="flex gap-1 px-10 py-4">
            <GiveIcon
              color={pathname === "/support/give" ? "#EFEFEF" : "#000"}
            />
            <span>Support Me</span>
          </Link>
        </li>
        <li className="mt-5 self-center rounded-full bg-clr-black text-clr-gray1">
          <Link href="/new" className="flex gap-1 px-10 py-4">
            <AddIcon color="#EFEFEF" />
            <span>New Post</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
