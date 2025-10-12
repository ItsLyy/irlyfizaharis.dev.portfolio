import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import "./globals.css";

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "IRLY.DEV",
  description:
    "This project is a personal portfolio website designed to showcase a developer’s profile, experience, and projects. It demonstrates how experience meets expectations and how the developer approaches and solves problems through real-world projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${robotoMono.className} bg-app-100 text-zinc-200 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
