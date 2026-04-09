import type { Metadata } from "next";
import {
  Barlow_Condensed,
  Poppins,
  Barrio,
  Londrina_Solid,
} from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";

const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow-condensed",
  subsets: ["latin"],
  weight: "400",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const londrina = Londrina_Solid({
  variable: "--font-londrina",
  subsets: ["latin"],
  weight: "400",
});

const barrio = Barrio({
  variable: "--font-barrio",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Market Day : Mac And Yuk",
  description: "Market Day Telkom University Jakarta",
};

import LoadingScreen from "../components/LoadingScreen";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${barlowCondensed.className} ${poppins.variable} ${londrina.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <LoadingScreen />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
