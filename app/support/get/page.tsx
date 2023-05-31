import { FC } from "react";
import Link from "next/link";

import { InstagramIcon, LinkedInIcon, TwitterIcon } from "@/assets/icons";

const GetSupportPage: FC = () => {
  return (
    <div className="flex flex-col items-center gap-4 text-center text-sm lg:text-base">
      <h3 className="font-bold">Thanks for using WRITEPOST!</h3>
      <div>
        <p>
          For any inquiries, assistance, or questions, please feel free to
          contact me.
          <br />
          I'm here to help!
        </p>
      </div>
      <div>
        <p>
          Contact me via email
          <br />
          <Link href="mailto:abdulwajidnv@gmail.com" className="font-medium">
            abdulwajidnv@gmail.com
          </Link>
        </p>
      </div>
      <div>
        <p>Or connect me on my social profiles</p>
        <div className="mt-2 flex justify-center gap-3">
          <Link href="https://instagram.com/wajid_nv/" target="_blank">
            <InstagramIcon dimension={26} />
          </Link>
          <Link href="https://twitter.com/wajid_nv/" target="_blank">
            <TwitterIcon dimension={26} />
          </Link>
          <Link href="https://linkedin.com/in/wajidnv/" target="_blank">
            <LinkedInIcon dimension={26} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GetSupportPage;
