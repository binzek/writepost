// Library imports
import { FC } from "react";

// Local imports
import { UserProfile } from "@/assets/icons";

// Story card props
interface Props {
  title: string;
  publisher: string;
  uid: string;
  body: string;
  date: string;
  deleteFn?: () => void;
}

const StoryCard: FC<Props> = ({ title, publisher, body, date, deleteFn }) => {
  // Function to get the posted day
  const getPostedDay = (date: string) => {
    const postedDate = new Date(date);
    const today = new Date();

    const timeDiff = Math.abs(today.getTime() - postedDate.getTime());
    const dayDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

    return dayDiff;
  };

  return (
    <div className="mb-3 flex break-inside-avoid flex-col gap-1.5 border border-clr-gray4 p-3">
      <h2 className="text-xl font-semibold">{title}</h2>
      <hr />
      <div className="flex items-center">
        <UserProfile dimension={20} />
        <p className="text-sm font-medium">{publisher}</p>
      </div>
      <p className="text-xs text-clr-gray3">
        {getPostedDay(date) === 1
          ? "Published Today"
          : getPostedDay(date) === 2
          ? "Published Yesterday"
          : getPostedDay(date) < 30
          ? `Published ${getPostedDay(date)} Days Ago`
          : `Published ${Math.floor(getPostedDay(date) / 30)} Months Ago`}
      </p>
      <p>{body}</p>
      {deleteFn && (
        <button
          onClick={deleteFn}
          className="self-end text-sm font-light text-clr-gray3 underline underline-offset-2"
        >
          Delete
        </button>
      )}
    </div>
  );
};

export default StoryCard;
