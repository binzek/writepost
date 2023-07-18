// Library imports
import { Dispatch, FC, SetStateAction, FormEvent } from "react";

// Sign up form props
interface Props {
  email: string;
  password: string;
  name: string;
  setEmail: Dispatch<SetStateAction<string>>;
  setPassword: Dispatch<SetStateAction<string>>;
  setName: Dispatch<SetStateAction<string>>;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

const SignUpForm: FC<Props> = ({
  email,
  password,
  name,
  setEmail,
  setPassword,
  setName,
  handleSubmit,
}) => {
  return (
    <form className="my-5 flex w-full flex-col gap-3" onSubmit={handleSubmit}>
      <div className="flex flex-col">
        <label htmlFor="name" className="text-sm">
          Name
        </label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          id="name"
          placeholder="John Doe"
          maxLength={30}
          className="border border-clr-gray4 bg-transparent px-2 py-1 text-sm font-light outline-none placeholder:text-clr-gray3"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="email" className="text-sm">
          Email
        </label>
        <input
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
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          id="password"
          placeholder="******"
          className="border border-clr-gray4 bg-transparent px-2 py-1 text-sm font-light outline-none placeholder:text-clr-gray3"
        />
      </div>
      <button
        type="submit"
        className="mt-2 w-full bg-clr-black py-2 text-sm text-clr-gray1"
      >
        Create Account
      </button>
    </form>
  );
};

export default SignUpForm;
