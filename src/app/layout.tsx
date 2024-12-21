import type { Metadata } from "next";
import "./globals.css";
import { Urbanist, Quicksand } from "next/font/google";

const urbanist = Urbanist({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin", "latin-ext"],
  style: ["normal"],
  display: "swap",
  variable: "--urbanist",
});
const quicksand = Quicksand({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin", "latin-ext"],
  style: ["normal"],
  display: "swap",
  variable: "--quicksand",
});
export const metadata: Metadata = {
  title: "GROCERY",
  description: "GROCERY",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${urbanist.variable} ${quicksand.variable}`}>
      <body>{children}</body>
    </html>
  );
}
