"use client";

// Library imports
import { FC, useContext } from "react";
import { redirect } from "next/navigation";

// Local imports
import { UserContext } from "../layout";
import { account } from "@/api/appwrite";

const ProfilePage: FC = () => {
  // Get user's status
  const { user } = useContext(UserContext);

  if (user) {
    return (
      <div>
        ProfilePage <br />{" "}
        <span
          className="cursor-pointer bg-red-500 p-5"
          onClick={() =>
            account
              .deleteSessions()
              .then(() => {
                window.location.href = "/";
              })
              .catch((error) => console.error(error))
          }
        >
          Out
        </span>
      </div>
    );
  } else {
    redirect("/signin");
  }
};

export default ProfilePage;
