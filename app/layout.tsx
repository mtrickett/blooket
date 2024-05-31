import "./globals.css";

import { nunito, roboto } from "./fonts";

import type { Metadata } from "next";
import Profile from "./components/profile/profile";
import Sidebar from "./components/sidebar/sidebar";

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
