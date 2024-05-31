import { Nunito, Roboto, Titan_One } from "next/font/google";

export const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  display: "swap",
});

export const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-roboto",
  display: "swap",
});

export const titan = Titan_One({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});
