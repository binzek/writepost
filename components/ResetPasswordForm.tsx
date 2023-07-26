// Library imports
import { FC, Dispatch, SetStateAction, FormEvent } from "react";

// Sign up form props
interface Props {
  email: string;
  setEmail: Dispatch<SetStateAction<string>>;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
  buttonContent: string;
}

const ResetPasswordForm: FC<Props> = ({
  email,
  setEmail,
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
      <button
        type="submit"
        className="mt-2 w-full bg-clr-black py-2 text-sm text-clr-gray1"
      >
        {buttonContent}
      </button>
    </form>
  );
};

export default ResetPasswordForm;
