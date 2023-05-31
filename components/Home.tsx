import { FC } from "react";
import { Raleway, Poppins } from "next/font/google";

const raleway = Raleway({
  subsets: ["latin", "latin-ext", "cyrillic", "cyrillic-ext", "vietnamese"],
  weight: "600",
});
const poppins = Poppins({
  subsets: ["latin", "devanagari", "latin-ext"],
  weight: "300",
});

const Home: FC = () => {
  return (
    <div className="-mt-16 text-center">
      <h1
        className={`${raleway.className} text-xl sm:text-2xl md:text-3xl xl:text-4xl`}
      >
        Write Fearlessly. Share Boldly.
        <br />
        Inspire Passion. Make Your Mark.
      </h1>
      <p
        className={`${poppins.className} mt-3 text-sm text-clr-gray4 md:mt-4 md:text-base xl:mt-5`}
      >
        Explore a vast collection of articles, stories, and insights from
        passionate writers around the world.
      </p>
    </div>
  );
};

export default Home;
