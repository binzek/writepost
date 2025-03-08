"use client";

// Library imports
import { FC } from "react";
import Link from "next/link";
import GitHubButton from "react-github-btn";

// Local imports
import {
  InstagramIcon,
  TwitterIcon,
  LinkedInIcon,
  BmcButton,
} from "@/assets/icons";

const GiveSupportPage: FC = () => {
  return (
    <div className="flex flex-col gap-4 text-center text-sm lg:text-base">
      <h3 className="font-bold">Thanks for using WRITEPOST!</h3>
      <div className="flex flex-col items-center gap-1">
        <p>
          If you enjoyed the application and would like to support me. <br />{" "}
          Please buy me a coffee below.
        </p>
        <Link href="https://buymeacoffee.com/binzek" target="_blank">
          <BmcButton dimension={125} />
        </Link>
      </div>
      <div className="flex flex-col items-center gap-1">
        <p>Visit the code on GitHub and give a star.</p>
        <GitHubButton
          href="https://github.com/binzek/writepost"
          data-color-scheme="no-preference: dark; light: dark; dark: dark;"
          data-icon="octicon-star"
          data-size="large"
          aria-label="Star binzek/writepost on GitHub"
        >
          Star on GitHub
        </GitHubButton>
      </div>
      <div className="flex flex-col items-center">
        <p>Share your reviews and remarks about the app on my socials</p>
        <div className="mt-2 flex justify-center gap-3">
          <Link href="https://www.instagram.com/binzek_/" target="_blank">
            <InstagramIcon dimension={26} />
          </Link>
          <Link href="https://x.com/binzek_" target="_blank">
            <TwitterIcon dimension={26} />
          </Link>
          <Link href="https://www.linkedin.com/in/binzek" target="_blank">
            <LinkedInIcon dimension={26} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GiveSupportPage;
