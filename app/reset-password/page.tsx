"use client";

// Library imports
import { FC, FormEvent, useContext, useState } from "react";
import { redirect } from "next/navigation";
import { Poppins, Raleway } from "next/font/google";

// Local imports
import ResetPasswordForm from "@/components/ResetPasswordForm";
import { account } from "@/api/appwrite";
import { AuthContext } from "@/context/AuthContext";

// Fonts initialization
const poppins = Poppins({
  subsets: ["latin", "devanagari", "latin-ext"],
  weight: ["300", "400", "500"],
});
const raleway = Raleway({
  subsets: ["latin", "latin-ext", "cyrillic", "cyrillic-ext", "vietnamese"],
  weight: "600",
});

const ResetPasswordPage: FC = () => {
  // Get user's status
  const isUser = useContext(AuthContext);

  if (!isUser) {
    // States for email and password inputs
    const [email, setEmail] = useState("");

    // Function to handle form submit
    const handleSignIn = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
    };

    return (
      <div
        className={`${poppins.className} mx-auto -mt-8 flex w-4/5 flex-1 flex-col items-center justify-center md:w-1/2 lg:w-1/3 xl:w-1/4`}
      >
        <h1 className={`${raleway.className} text-center text-2xl`}>
          Reset Password
        </h1>
        <p className="mt-1 text-center text-sm font-light text-clr-gray4">
          Enter your email below. We will send a password reset link to your
          inbox
        </p>
        <ResetPasswordForm
          email={email}
          setEmail={setEmail}
          handleSubmit={handleSignIn}
        />
      </div>
    );
  } else {
    redirect("/profile");
  }
};

export default ResetPasswordPage;
