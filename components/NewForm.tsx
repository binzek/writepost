// Library imports
import { FC, Dispatch, SetStateAction, FormEvent } from "react";

interface Props {
  title: string;
  content: string;
  setTitle: Dispatch<SetStateAction<string>>;
  setContent: Dispatch<SetStateAction<string>>;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

const NewForm: FC<Props> = ({
  title,
  content,
  setTitle,
  setContent,
  handleSubmit,
}) => {
  return (
    <form className="my-5 flex w-full flex-col gap-3" onSubmit={handleSubmit}>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        type="text"
        maxLength={60}
        required
        placeholder="Title here... (Max. 60 Characters)"
        className="border border-clr-gray4 bg-transparent px-2 py-1 text-sm font-light outline-none placeholder:text-clr-gray3"
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        rows={15}
        required
        maxLength={2000}
        placeholder="Your precious ideas here... (Max. 2000 Characters)"
        className="border border-clr-gray4 bg-transparent px-2 py-1 text-sm font-light outline-none placeholder:text-clr-gray3"
      ></textarea>
      <button
        type="submit"
        className="mt-2 w-full bg-clr-black py-2 text-sm text-clr-gray1"
      >
        Create
      </button>
    </form>
  );
};

export default NewForm;
