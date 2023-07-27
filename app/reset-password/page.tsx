"use client";

// Library imports
import { FC, FormEvent, useContext, useState, useEffect } from "react";
import { redirect, useSearchParams, useRouter } from "next/navigation";
import { Poppins, Raleway } from "next/font/google";

// Local imports
import ResetPasswordForm from "@/components/ResetPasswordForm";
import ChangePasswordForm from "@/components/ChangePasswordForm";
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

  // Get params initialization
  const searchParams = useSearchParams();

  // Router initialization
  const router = useRouter();

  if (!isUser) {
    // States for email and password inputs
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // State for button contents
    const [sendButtonContent, setSendButtonContent] = useState("Send Link");
    const [changeButtonContent, setChangeButtonContent] =
      useState("Change Password");

    // Function to reset password
    const resetPassword = () => {
      setSendButtonContent("Sending...");
      account
        .createRecovery(email, "http://localhost:3000/reset-password")
        .then(() => {
          setEmail("");
          alert("A password reset link has been sent to your inbox");
          router.push("/signin");
        })
        .catch((error) => alert(error.message))
        .finally(() => setSendButtonContent("Send Link"));
    };

    // Function to change password
    const changePassword = () => {
      setChangeButtonContent("Changing...");
      account
        .updateRecovery(
          searchParams.get("userId") || "",
          searchParams.get("secret") || "",
          password,
          password
        )
        .then(() => {
          setPassword("");
          alert(
            "Your password has changed. You may sign in now with the new password"
          );
          window.close();
        })
        .catch((error) => alert(error.message))
        .finally(() => setChangeButtonContent("Change Password"));
    };

    // Function to handle form submit
    const handleReset = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      resetPassword();
    };

    // Function to handle form submit
    const handleChangePassword = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      changePassword();
    };

    useEffect(() => {
      document.title = "Reset Password • WRITEPOST";
    }, []);

    return (
      <div
        className={`${poppins.className} mx-auto -mt-8 flex w-4/5 flex-1 flex-col items-center justify-center md:w-1/2 lg:w-1/3 xl:w-1/4`}
      >
        <h1 className={`${raleway.className} text-center text-2xl`}>
          {searchParams.has("userId") &&
          searchParams.has("secret") &&
          searchParams.has("expire")
            ? "Create New Password"
            : "Reset Password"}
        </h1>
        <p className="mt-1 text-center text-sm font-light text-clr-gray4">
          {searchParams.has("userId") &&
          searchParams.has("secret") &&
          searchParams.has("expire")
            ? "To change you password, please enter your new password below"
            : "Enter your email below. We will send a password reset link to your inbox"}
        </p>
        {searchParams.has("userId") &&
        searchParams.has("secret") &&
        searchParams.has("expire") ? (
          <ChangePasswordForm
            handleSubmit={handleChangePassword}
            password={password}
            setPassword={setPassword}
            buttonContent={changeButtonContent}
          />
        ) : (
          <ResetPasswordForm
            email={email}
            setEmail={setEmail}
            handleSubmit={handleReset}
            buttonContent={sendButtonContent}
          />
        )}
      </div>
    );
  } else {
    redirect("/profile");
  }
};

export default ResetPasswordPage;
