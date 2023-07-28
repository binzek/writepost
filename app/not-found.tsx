import { Raleway, Poppins } from "next/font/google";

// Fonts initialization
const poppins = Poppins({
  subsets: ["latin", "devanagari", "latin-ext"],
  weight: ["600"],
});
const raleway = Raleway({
  subsets: ["latin", "latin-ext", "cyrillic", "cyrillic-ext", "vietnamese"],
  weight: "700",
});

const NotFoundPage = () => {
  return (
    <div
      className={`${poppins.className} flex flex-col items-center justify-center gap-4`}
    >
      <h1 className={`${raleway.className} text-4xl`}>404</h1>
      <h2 className="text-2xl">Page Not Found!</h2>
      <a
        href="/"
        className="flex items-center gap-1 text-sm duration-300 hover:gap-3"
      >
        &larr;{" "}
        <span className="underline underline-offset-4">Go Back to Home</span>
      </a>
    </div>
  );
};

export default NotFoundPage;
