// Library imports
import { FC, Dispatch, SetStateAction, FormEvent } from "react";

// Props for new story form
interface Props {
  title: string;
  body: string;
  setTitle: Dispatch<SetStateAction<string>>;
  setBody: Dispatch<SetStateAction<string>>;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

const NewForm: FC<Props> = ({
  title,
  body,
  setTitle,
  setBody,
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
        value={body}
        onChange={(e) => setBody(e.target.value)}
        rows={15}
        required
        maxLength={600}
        placeholder="Your precious ideas here... (Max. 600 Characters)"
        className="border border-clr-gray4 bg-transparent px-2 py-1 text-sm font-light outline-none placeholder:text-clr-gray3"
      ></textarea>
      <button
        type="submit"
        className="mt-2 w-full bg-clr-black py-2 text-sm text-clr-gray1"
      >
        Post
      </button>
    </form>
  );
};

export default NewForm;
