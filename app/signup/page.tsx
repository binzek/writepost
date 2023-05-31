import Link from "next/link";
import { Poppins, Raleway } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin", "devanagari", "latin-ext"],
  weight: ["300", "400", "500"],
});
const raleway = Raleway({
  subsets: ["latin", "latin-ext", "cyrillic", "cyrillic-ext", "vietnamese"],
  weight: "600",
});

const SignUp = () => {
  return (
    <div
      className={`${poppins.className} mx-auto -mt-8 flex w-4/5 flex-col items-center md:w-1/2 lg:w-1/3 xl:w-1/4`}
    >
      <h1 className={`${raleway.className} text-center text-2xl`}>
        Hey There, Welcome!
      </h1>
      <p className="mt-1 text-center text-sm font-light text-clr-gray4">
        Sign up below and start your journey
      </p>
      <form action="#" className="my-5 flex w-full flex-col gap-3">
        <div className="flex flex-col">
          <label htmlFor="name" className="text-sm">
            Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="John Doe"
            className="border border-clr-gray4 bg-transparent px-2 py-1 text-sm font-light outline-none placeholder:text-clr-gray2"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="email" className="text-sm">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="johndoe@example.com"
            className="border border-clr-gray4 bg-transparent px-2 py-1 text-sm font-light outline-none placeholder:text-clr-gray2"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="password" className="text-sm">
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="******"
            className="border border-clr-gray4 bg-transparent px-2 py-1 text-sm font-light outline-none placeholder:text-clr-gray2"
          />
        </div>
        <button
          type="submit"
          className="mt-2 w-full bg-clr-black py-2 text-sm text-clr-gray1"
        >
          Create Account
        </button>
      </form>
      <p className="text-sm font-light">
        Already have an account?{" "}
        <Link href="/signin" className="font-medium">
          Sign in
        </Link>
      </p>
    </div>
  );
};

export default SignUp;
