import { FC } from "react";

import Home from "@/components/Home";
import HomeButtons from "@/components/HomeButtons";

const App: FC = () => {
  return (
    <div className="mx-auto flex w-11/12 flex-col gap-9 md:w-2/3 md:gap-10 xl:w-2/5 xl:gap-14">
      <Home />
      <HomeButtons />
    </div>
  );
};

export default App;
