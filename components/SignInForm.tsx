// Library imports
import { FC, Dispatch, SetStateAction, FormEvent } from "react";
import Link from "next/link";

// Sign up form props
interface Props {
  email: string;
  password: string;
  setEmail: Dispatch<SetStateAction<string>>;
  setPassword: Dispatch<SetStateAction<string>>;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
  buttonContent: string;
}

const SignInForm: FC<Props> = ({
  email,
  password,
  setEmail,
  setPassword,
  handleSubmit,
  buttonContent,
}) => {
  return (
    <form
      action="#"
      className="my-5 flex w-full flex-col gap-3"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col">
        <label htmlFor="email" className="text-sm">
          Email
        </label>
        <input
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          id="email"
          placeholder="johndoe@example.com"
          className="border border-clr-gray4 bg-transparent px-2 py-1 text-sm font-light outline-none placeholder:text-clr-gray3"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="password" className="text-sm">
          Password
        </label>
        <input
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          id="password"
          placeholder="******"
          className="border border-clr-gray4 bg-transparent px-2 py-1 text-sm font-light outline-none placeholder:text-clr-gray3"
        />
        <Link
          href="/reset-password"
          className="mt-2 self-end text-xs font-medium"
        >
          Forgot Password?
        </Link>
      </div>
      <button
        type="submit"
        className="mt-2 w-full bg-clr-black py-2 text-sm text-clr-gray1"
      >
        {buttonContent}
      </button>
    </form>
  );
};

export default SignInForm;
