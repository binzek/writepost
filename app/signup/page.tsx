import Link from "next/link";
import { Poppins, Raleway } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "500"] });
const raleway = Raleway({ subsets: ["latin"], weight: "600" });

const SignUp = () => {
  return (
    <div
      className={`${poppins.className} mx-auto flex flex-col items-center w-4/5 md:w-1/2 lg:w-1/3 xl:w-1/4 -mt-8`}
    >
      <h1 className={`${raleway.className} text-2xl text-center`}>
        Hey There, Welcome!
      </h1>
      <p className="font-light text-clr-gray4 text-sm mt-1 text-center">
        Sign up below and start your journey
      </p>
      <form action="#" className="w-full my-5 flex flex-col gap-3">
        <div className="flex flex-col">
          <label htmlFor="name" className="text-sm">
            Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="John Doe"
            className="bg-transparent border border-clr-gray4 py-1 px-2 placeholder:text-clr-gray2 font-light text-sm outline-none"
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
            className="bg-transparent border border-clr-gray4 py-1 px-2 placeholder:text-clr-gray2 font-light text-sm outline-none"
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
            className="bg-transparent border border-clr-gray4 py-1 px-2 placeholder:text-clr-gray2 font-light text-sm outline-none"
          />
        </div>
        <button
          type="submit"
          className="bg-clr-black text-clr-gray1 py-2 w-full text-sm mt-2"
        >
          Create Account
        </button>
      </form>
      <p className="font-light text-sm">
        Already have an account?{" "}
        <Link href="/signin" className="font-medium">
          Sign in
        </Link>
      </p>
    </div>
  );
};

export default SignUp;
