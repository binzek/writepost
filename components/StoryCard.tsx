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
}

const StoryCard: FC<Props> = ({ title, publisher, body, date, uid }) => {
  // Function to get the posted day
  const getPostedDay = (date: string) => {
    return new Date().getDay() - new Date(date).getDay();
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
        {getPostedDay(date) === 0
          ? "Published Today"
          : getPostedDay(date) === 1
          ? "Published Yesterday"
          : `Published ${getPostedDay(date)} Days Ago`}
      </p>
      <p>{body}</p>
    </div>
  );
};

export default StoryCard;
