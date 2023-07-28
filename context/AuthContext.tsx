"use client";

// Library imports
import { ReactNode, createContext, useState } from "react";

// Local imports
import { account } from "@/api/appwrite";

// Create context
export const AuthContext = createContext(false);

const AuthProvider = ({ children }: { children: ReactNode }) => {
  // State for passing user's status
  const [isUser, setIsUser] = useState(false);

  // Fetch user's status on app load
  window.onload = () => {
    account
      .get()
      .then((user) => (user ? setIsUser(true) : setIsUser(false)))
      .catch(() => null);
  };

  // Return context provider with user's status
  return <AuthContext.Provider value={isUser}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
