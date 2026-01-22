import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Joro Sullvan RAKOTONIAINA",
  description: "Le Curriculum Vitae digitalde Joro Sullvan RAKOTONIAINA",
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
      <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
          <body className="bg-beige text-brand-blue min-h-screen antialiased">
            <Navbar />
              {children}
          </body>
      </html>
  );
}
