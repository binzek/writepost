"use client";

// Library imports
import { FC, ReactNode, createContext, useState, useEffect } from "react";

// Local imports
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { account } from "@/api/appwrite";

// Layout props
interface Props {
  children: ReactNode;
}

// Meta informations of the entire app
export const metadata = {
  title: "WRITEPOST",
};

// Create context
export const UserContext = createContext({ user: false });

const AppLayout: FC<Props> = ({ children }) => {
  // State to pass user's status
  const [isUser, setIsUser] = useState(false);

  useEffect(() => {
    account
      .get()
      .then((response) => {
        response ? setIsUser(true) : setIsUser(false);
        console.log(response);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Sharp:opsz,wght,FILL,GRAD@48,200,0,0"
        />
      </head>
      <body className="flex min-h-screen flex-col justify-between bg-clr-gray1 selection:bg-clr-black selection:text-clr-gray1">
        <UserContext.Provider value={{ user: isUser }}>
          <NavBar />
          {children}
          <Footer />
        </UserContext.Provider>
      </body>
    </html>
  );
};

export default AppLayout;
