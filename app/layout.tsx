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
  description:
    "Explore a vast collection of short stories and insights from passionate writers around the world.",
};

// Create context
export const UserContext = createContext({ user: false });

const AppLayout: FC<Props> = ({ children }) => {
  // State to pass user's status
  const [isUser, setIsUser] = useState(false);

  // Get user's status on app mount
  useEffect(() => {
    account
      .get()
      .then((response) => {
        response ? setIsUser(true) : setIsUser(false);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col justify-between bg-clr-gray1 text-clr-black selection:bg-clr-gray3 selection:text-clr-gray1">
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
