"use client";

// Library imports
import { FC, useEffect, useState } from "react";
import { Raleway, Poppins } from "next/font/google";

import { account } from "@/api/appwrite";

// Fonts initialization
const raleway = Raleway({
  subsets: ["latin", "latin-ext", "cyrillic", "cyrillic-ext", "vietnamese"],
  weight: "600",
});
const poppins = Poppins({
  subsets: ["latin", "devanagari", "latin-ext"],
  weight: "300",
});

const Home: FC = () => {
  // State to indicate is the user signed in or not
  const [isUser, setIsUser] = useState(false);

  // States of user's data
  const [userName, setUserName] = useState("");
  const [userMailId, setUserMailId] = useState("");

  // Function to handle sign out button's function
  const handleSignOut = () => {
    account.deleteSessions();
    location.reload();
  };

  // Check is user signed in and do actions on mounting
  useEffect(() => {
    account
      .get()
      .then((user) => {
        if (user) {
          setIsUser(true);
          setUserName(user.name);
          setUserMailId(user.email);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="-mt-16 text-center">
      <h1
        className={`${raleway.className} text-xl sm:text-2xl md:text-3xl xl:text-4xl`}
      >
        Write Fearlessly. Share Boldly.
        <br />
        Inspire Passion. Make Your Mark.
      </h1>
      <p
        className={`${poppins.className} mt-3 text-sm text-clr-gray4 md:mt-4 md:text-base xl:mt-5`}
      >
        Explore a vast collection of articles, stories, and insights from
        passionate writers around the world.
      </p>
    </div>
  );
};

export default Home;
