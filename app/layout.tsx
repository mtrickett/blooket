import "./globals.css";

import { Nunito, Roboto } from "next/font/google";

import type { Metadata } from "next";
import Profile from "./components/profile/profile";
import Sidebar from "./components/sidebar/sidebar";

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  display: "swap",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-roboto",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Set Creator | Blooket",
  description: "This is a fake blooket page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${nunito.variable} ${roboto.variable}`}>
        <Sidebar />
        <Profile />
        {children}
      </body>
    </html>
  );
}
