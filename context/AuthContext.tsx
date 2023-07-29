"use client";

// Library imports
import { ReactNode, createContext, useState, FC, useEffect } from "react";

// Local imports
import { account } from "@/api/appwrite";

interface Props {
  children: ReactNode;
}

// Create context
export const AuthContext = createContext(false);

const AuthProvider: FC<Props> = ({ children }) => {
  // State for passing user's status
  const [isUser, setIsUser] = useState(false);

  // Fetch user's status on app load
  useEffect(() => {
    account
      .get()
      .then((user) => (user ? setIsUser(true) : setIsUser(false)))
      .catch(() => null);
  }, []);

  // Return context provider with user's status
  return <AuthContext.Provider value={isUser}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
