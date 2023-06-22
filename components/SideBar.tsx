// Library imports
import { FC } from "react";

// SideBar Props
interface Props {
  isOpen: boolean;
}

const SideBar: FC<Props> = ({ isOpen }) => {
  return (
    <div className={`${!isOpen && "hidden"} fixed right-0 z-10`}>SideBar</div>
  );
};

export default SideBar;
