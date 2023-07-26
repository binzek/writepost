import { WritePostIcon } from "@/assets/icons";

const Loading = () => {
  return (
    <div className="flex flex-1 animate-ping items-center justify-center">
      <WritePostIcon dimension={40} />
    </div>
  );
};

export default Loading;
