import { FC, ReactNode } from "react";

import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

interface Props {
  children: ReactNode;
}

export const metadata = {
  title: "WRITEPOST",
};

const AppLayout: FC<Props> = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Sharp:opsz,wght,FILL,GRAD@48,200,0,0"
        />
      </head>
      <body className="flex min-h-screen flex-col justify-between bg-clr-gray1 selection:bg-clr-black selection:text-clr-gray1">
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default AppLayout;
