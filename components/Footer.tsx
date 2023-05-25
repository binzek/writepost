import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: "200" });

const Footer = () => {
  return (
    <div className="w-[95%] lg:w-[98%] mx-auto">
      <div className="h-[1px] w-full bg-clr-gray3" />
      <div className={`${poppins.className} flex justify-between text-sm mt-1`}>
        <p>&copy; WRITEPOST 2023</p>
        <div className="flex gap-2">
          <span className="material-symbols-sharp">favorite</span>
          <span className="material-symbols-sharp">folder_open</span>
          <span className="material-symbols-sharp">psychology</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
