// Library imports
import { FC, ReactNode } from "react";

// Local imports
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import AuthProvider from "@/context/AuthContext";

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

const AppLayout: FC<Props> = ({ children }) => {
  return (
    <html lang="en">
      <body className="flex min-h-[100svh] flex-col justify-between bg-clr-gray1 text-clr-black selection:bg-clr-gray3 selection:text-clr-gray1">
        <AuthProvider>
          <NavBar />
          {children}
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
};

export default AppLayout;
