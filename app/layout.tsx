import React from "react";

import "./globals.css";
import NavBar from "@/components/NavBar";

export const metadata = {
  title: "WRITEPOST",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Sharp:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
      </head>
      <body className="bg-clr-gray1">
        <NavBar />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
