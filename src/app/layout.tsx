"use client";
import "./global";
import { Roboto } from "next/font/google";
import { globalStyles } from "./global";

const roboto = Roboto({ weight: ["400", "500", "700"], subsets: ["latin"] });

globalStyles();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
