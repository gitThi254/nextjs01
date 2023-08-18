import ProviderParent from "@/../store/ProviderParent";
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import { useSelector } from "react-redux";

const inter = Inter({ subsets: ["latin"] });

export function generateMetadata({ params }) {
  return {
    title: "Home page",
    description: "create by Thi",
  };
}
export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <ProviderParent>
        <body>
          <Navbar />
          {children}
        </body>
      </ProviderParent>
    </html>
  );
}
