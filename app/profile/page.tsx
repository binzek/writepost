"use client";

import { account } from "@/api/appwrite";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const ProfilePage = () => {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");

  const router = useRouter();

  useEffect(() => {
    account
      .get()
      .then((res) => {
        setUserName(res.name);
        setUserEmail(res.email);
      })
      .catch(() => {
        router.push("/signin");
      });
  }, []);

  return (
    <div>
      <h1>Welcome {userName}</h1>
      <p>Your Email ID is {userEmail}</p>
      <button onClick={() => account.deleteSessions()}>Sign Out</button>
    </div>
  );
};

export default ProfilePage;
