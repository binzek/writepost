"use client";

// Library imports
import { FC, ReactNode, createContext, useState, useEffect } from "react";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

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

// Context to define user's status
export const AuthContext = createContext(false);

const AppLayout: FC<Props> = ({ children }) => {
  // State for user's status
  const [isUser, setIsUser] = useState(false);

  window.onload = () => {
    account
      .get()
      .then(() => setIsUser(true))
      .catch((error) => console.error(error));
  };

  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col justify-between bg-clr-gray1 text-clr-black selection:bg-clr-gray3 selection:text-clr-gray1">
        <AuthContext.Provider value={isUser}>
          <NavBar />
          {children}
          <ProgressBar
            height="4px"
            color="#000"
            options={{ showSpinner: false }}
            shallowRouting
          />
          <Footer />
        </AuthContext.Provider>
      </body>
    </html>
  );
};

export default AppLayout;
