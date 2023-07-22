"use client";

// Library imports
import { FC, FormEvent, useContext, useEffect, useState } from "react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { Poppins, Raleway } from "next/font/google";

// Local imports
import SignInForm from "@/components/SignInForm";
import { account } from "@/api/appwrite";
import { AuthContext } from "../layout";

// Fonts initialization
const poppins = Poppins({
  subsets: ["latin", "devanagari", "latin-ext"],
  weight: ["300", "400", "500"],
});
const raleway = Raleway({
  subsets: ["latin", "latin-ext", "cyrillic", "cyrillic-ext", "vietnamese"],
  weight: "600",
});

const SignInPage: FC = () => {
  const isUser = useContext(AuthContext);

  if (!isUser) {
    // States for email and password inputs
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // Function to create an email session
    const createEmailSession = () => {
      account
        .createEmailSession(email, password)
        .then(() => {
          setEmail("");
          setPassword("");
          window.location.href = "/";
        })
        .catch((error) => alert(error.message));
    };

    // Function to handle form submit
    const handleSignIn = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      createEmailSession();
    };

    return (
      <div
        className={`${poppins.className} mx-auto -mt-8 flex w-4/5 flex-col items-center md:w-1/2 lg:w-1/3 xl:w-1/4`}
      >
        <h1 className={`${raleway.className} text-center text-2xl`}>
          Welcome Back!
        </h1>
        <p className="mt-1 text-center text-sm font-light text-clr-gray4">
          Sign in below and continue your journey
        </p>
        <SignInForm
          email={email}
          password={password}
          setEmail={setEmail}
          setPassword={setPassword}
          handleSubmit={handleSignIn}
        />
        <p className="text-sm font-light">
          Don't have an account?{" "}
          <Link href="/signup" className="font-medium">
            Sign up
          </Link>
        </p>
      </div>
    );
  } else {
    redirect("/profile");
  }
};

export default SignInPage;
