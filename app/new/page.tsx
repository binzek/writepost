"use client";

// Library imports
import { FC, useContext } from "react";
import { redirect } from "next/navigation";

// Local imports
import { UserContext } from "../layout";

const NewPage: FC = () => {
  // Get user's status
  const { user } = useContext(UserContext);

  if (user) {
    return <div>NewPage</div>;
  } else {
    redirect("/signin");
  }
};

export default NewPage;
