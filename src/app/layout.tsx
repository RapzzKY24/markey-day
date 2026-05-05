import type { Metadata } from "next";
import {
  Barlow_Condensed,
  Poppins,
  Barrio,
  Londrina_Solid,
} from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import LoadingScreen from "../components/LoadingScreen";
import { CartProvider } from "../context/CartContext";
import Footer from "../components/Footer";
import LenisLayoutInner from "./LenisLayoutInner";

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
  title: "Mac And Yuk",
  description:
    "Mac and Yuk merupakan usaha kuliner yang menghadirkan berbagai olahan macaroni kekinian seperti mac and cheese, macaroni schotel, dan camilan makaroni, serta minuman segar seperti lemon yakult soda dan iced tea dengan strawberry jam, dengan cita rasa creamy, cheesy, dan menyegarkan yang cocok untuk semua kalangan.",

  metadataBase: new URL("https://mac-and-yuk.vercel.app/"),

  openGraph: {
    title: "Mac And Yuk",
    description:
      "Mac and Yuk merupakan usaha kuliner yang menghadirkan berbagai olahan macaroni kekinian seperti mac and cheese, macaroni schotel, dan camilan makaroni, serta minuman segar seperti lemon yakult soda dan iced tea dengan strawberry jam, dengan cita rasa creamy, cheesy, dan menyegarkan yang cocok untuk semua kalangan.",
    url: "https://mac-and-yuk.vercel.app/",
    siteName: "Mac And Yuk",
    images: [
      {
        url: "/logo/android-chrome-512x512.png",
        width: 512,
        height: 512,
        alt: "Mac And Yuk Logo",
      },
    ],
    locale: "id_ID",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Mac And Yuk",
    description:
      "Mac and Yuk merupakan usaha kuliner yang menghadirkan berbagai olahan macaroni kekinian seperti mac and cheese, macaroni schotel, dan camilan makaroni, serta minuman segar seperti lemon yakult soda dan iced tea dengan strawberry jam, dengan cita rasa creamy, cheesy, dan menyegarkan yang cocok untuk semua kalangan.",
    images: ["/logo/android-chrome-512x512.png"],
  },

  icons: {
    icon: "/logo/favicon.ico",
    apple: "/logo/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${barlowCondensed.className} ${poppins.variable} ${londrina.variable} ${barrio.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col">
        <LenisLayoutInner>
          <CartProvider>
            <LoadingScreen />
            <Navbar />
            <main className="grow">{children}</main>
            <Footer />
          </CartProvider>
        </LenisLayoutInner>
      </body>
    </html>
  );
}
