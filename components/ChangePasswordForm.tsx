// Library imports
import { FC, Dispatch, SetStateAction, FormEvent } from "react";

// Sign up form props
interface Props {
  password: string;
  setPassword: Dispatch<SetStateAction<string>>;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
  buttonContent: string;
}

const ChangePasswordForm: FC<Props> = ({
  password,
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

export default ChangePasswordForm;
