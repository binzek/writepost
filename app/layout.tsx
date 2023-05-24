import React from "react";
import "./globals.css";

export const metadata = {
  title: "WRITEPOST",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
