// Library imports
import { UserProfile } from "@/assets/icons";
import { FC } from "react";
interface Props {
  title: string;
  user_name: string;
  content: string;
  date: string;
}

const BlogCard: FC<Props> = ({ title, user_name, content, date }) => {
  const getYear = (date: string) => {
    return new Date(date).getDay() - new Date().getDay();
  };

  return (
    <div className="mb-2 flex break-inside-avoid flex-col gap-1 border border-clr-black p-2">
      <h2 className="text-xl font-semibold">{title}</h2>
      <div className="flex items-center">
        <UserProfile dimension={20} />
        <p className="text-sm font-medium">{user_name}</p>
      </div>
      <p className="text-xs text-clr-gray3">
        {getYear(date) === 0
          ? "Published Today"
          : getYear(date) === 1
          ? "Published Yesterday"
          : `Published ${getYear(date)} Days Ago`}
      </p>
      <p>{content}</p>
    </div>
  );
};

export default BlogCard;
