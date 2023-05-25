import { Raleway, Poppins } from "next/font/google";

const raleway = Raleway({ subsets: ["latin"], weight: "600" });
const poppins = Poppins({ subsets: ["latin"], weight: "300" });

const Home = () => {
  return (
    <div className="text-center">
      <h1
        className={`${raleway.className} text-xl sm:text-2xl md:text-3xl xl:text-4xl`}
      >
        Write Fearlessly. Share Boldly.
        <br />
        Inspire Passion. Make Your Mark.
      </h1>
      <p
        className={`${poppins.className} mt-2 md:mt-3 xl:mt-4 text-sm md:text-base`}
      >
        Explore a vast collection of articles, stories, and insights from
        passionate writers around the world.
      </p>
    </div>
  );
};

export default Home;
