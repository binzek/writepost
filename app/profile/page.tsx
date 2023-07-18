"use client";

// Library imports
import { FC, useContext, useEffect, useState } from "react";
import { redirect } from "next/navigation";
import { Raleway, Poppins } from "next/font/google";

// Local imports
import { UserContext } from "../layout";
import { account } from "@/api/appwrite";
import { UserProfile } from "@/assets/icons";

// Fonts initialization
const poppins = Poppins({
  subsets: ["latin", "devanagari", "latin-ext"],
  weight: ["300", "400", "500"],
});
const raleway = Raleway({
  subsets: ["latin", "latin-ext", "cyrillic", "cyrillic-ext", "vietnamese"],
  weight: "700",
});

const ProfilePage: FC = () => {
  // Get user's status
  const { user } = useContext(UserContext);

  // State for storing user's details
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
  });

  if (user) {
    // Get user's data on page mount and store it to state
    useEffect(() => {
      account
        .get()
        .then((response) =>
          setUserDetails({ name: response.name, email: response.email })
        )
        .catch((error) => console.error(error));
    }, []);

    return (
      <div
        className={`${poppins.className} mx-auto flex w-11/12 flex-col items-center gap-5 bg-clr-white py-6 md:w-1/2 lg:w-1/3`}
      >
        <div className="-mt-20 rounded-full bg-clr-gray2 p-2">
          <UserProfile dimension={96} color="#202020" strokeWidth={1.1} />
        </div>
        <div className="flex flex-col items-center">
          <h2 className={`${raleway.className} text-xl`}>{userDetails.name}</h2>
          <p className="text-sm font-thin text-clr-gray3">
            {userDetails.email}
          </p>
        </div>
        <button
          onClick={() =>
            confirm("Are you sure to sign out from WRITEPOST?") &&
            account
              .deleteSessions()
              .then(() => {
                window.location.href = "/";
              })
              .catch((error) => console.error(error))
          }
          className="border-2 border-clr-gray4 bg-clr-gray2 px-6 py-1 text-sm font-medium"
        >
          Sign Out
        </button>
      </div>
    );
  } else {
    redirect("/signin");
  }
};

export default ProfilePage;
