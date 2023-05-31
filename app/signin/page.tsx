import Link from "next/link";
import { Poppins, Raleway } from "next/font/google";
import SignInForm from "@/components/SignInForm";

const poppins = Poppins({
  subsets: ["latin", "devanagari", "latin-ext"],
  weight: ["300", "400", "500"],
});
const raleway = Raleway({
  subsets: ["latin", "latin-ext", "cyrillic", "cyrillic-ext", "vietnamese"],
  weight: "600",
});

const SignIn = () => {
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
      <SignInForm />
      <p className="text-sm font-light">
        Don't have an account?{" "}
        <Link href="/signup" className="font-medium">
          Sign up
        </Link>
      </p>
    </div>
  );
};

export default SignIn;
