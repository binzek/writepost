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
    <div className="flex w-full items-center justify-between">
      <div className="flex items-center gap-1">
        <UserProfile dimension={40} strokeWidth={0.5} />
        <div>
          <h2 className="font-medium">{name}</h2>
          <p className="text-sm font-light">{email}</p>
        </div>
      </div>
      <button
        onClick={signOutFn}
        className="text-sm font-medium text-clr-gray3 underline underline-offset-2"
      >
        Sign Out
      </button>
    </div>
  );
};

export default ProfileCard;
