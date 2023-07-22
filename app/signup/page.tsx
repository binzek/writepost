"use client";

// Library imports
import { FC, useState, FormEvent, useContext } from "react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { Poppins, Raleway } from "next/font/google";
import { ID } from "appwrite";

// Local imports
import SignUpForm from "@/components/SignUpForm";
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

const SignUpPage: FC = () => {
  // Get user's status
  const isUser = useContext(AuthContext);

  if (!isUser) {
    // States for email, password and name inputs
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");

    // Function to create new user in appwrite server
    const createAccount = () => {
      account
        .create(ID.unique(), email, password, name)
        .then(() => {
          setEmail("");
          setPassword("");
          setName("");
          account
            .createEmailSession(email, password)
            .then(() => {
              setEmail("");
              setPassword("");
              window.location.href = "/profile";
            })
            .catch((error) => alert(error.message));
        })
        .catch((error) => alert(error.message));
    };

    // Function to handle form submit
    const handleSignUp = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      createAccount();
    };

    return (
      <div
        className={`${poppins.className} mx-auto -mt-8 flex w-4/5 flex-1 flex-col items-center justify-center md:w-1/2 lg:w-1/3 xl:w-1/4`}
      >
        <h1 className={`${raleway.className} text-center text-2xl`}>
          Hey There, Welcome!
        </h1>
        <p className="mt-1 text-center text-sm font-light text-clr-gray4">
          Sign up below and start your journey
        </p>
        <SignUpForm
          email={email}
          password={password}
          name={name}
          setEmail={setEmail}
          setPassword={setPassword}
          setName={setName}
          handleSubmit={handleSignUp}
        />
        <p className="text-sm font-light">
          Already have an account?{" "}
          <Link href="/signin" className="font-medium">
            Sign in
          </Link>
        </p>
      </div>
    );
  } else {
    redirect("/profile");
  }
};

export default SignUpPage;
