import { Inter } from "next/font/google";
import "./globals.css";

import { Navbar } from "@/components/ui/navBar/Navbar";
import { Footer } from "@/components/ui/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Galactica",
  description: "Your space travel agency",
};

export const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;