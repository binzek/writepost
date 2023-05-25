import Home from "@/components/Home";
import HomeButtons from "@/components/HomeButtons";

const App = () => {
  return (
    <div className="flex flex-col w-11/12 md:w-2/3 xl:w-2/5 mx-auto gap-9 md:gap-10 xl:gap-14">
      <Home />
      <HomeButtons />
    </div>
  );
};

export default App;
