import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Home from "./_components/home/Home";
import Footer from "./_components/footer/Footer";
import { Suspense } from "react";
import PageAllData from "./_components/data/pageAllData";
import Schemas from "./_schemas/schemas";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Next.js",
  description: "Generated by create next app",
};

export default function App() {
  return (
    <>
      <main className=" container  h-auto min-h-dvh mx-auto border-x-2 border-red-600/20 shadow bg-[#000]">
        <Home />
        <Suspense>
          <PageAllData/>
        </Suspense>
        <Footer />
        <Schemas/>
      </main>
    </>
  );
}
