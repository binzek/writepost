// Library imports
import { FC } from "react";

// Local imports
import { UserProfile } from "@/assets/icons";

// ProfileCard props
interface Props {
  name: string;
  email: string;
  signOutFn: () => void;
}

const ProfileCard: FC<Props> = ({ name, email, signOutFn }) => {
  return (
    <div className="flex gap-2 bg-clr-gray2 p-3">
      <UserProfile dimension={40} strokeWidth={0.5} />
      <div className="flex flex-1 flex-col items-start">
        <h2 className="font-medium">{name}</h2>
        <p className="text-sm font-light">{email}</p>
        <button
          onClick={signOutFn}
          className="mt-1 text-sm font-medium text-clr-gray3 underline underline-offset-2"
        >
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default ProfileCard;
