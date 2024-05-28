import "./globals.css";

import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import Profile from "./components/profile/profile";
import Sidebar from "./components/sidebar/sidebar";

const nunito = Nunito({ subsets: ["latin"] });

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
      <body className={nunito.className}>
        <Sidebar />
        <Profile />
        {children}
      </body>
    </html>
  );
}
