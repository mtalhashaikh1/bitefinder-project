import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget"; // Yeh import zaroori hai

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BiteFinder.AI - Smart Food Exploration",
  description: "Re-engineered process for optimized culinary searches",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} pt-16 bg-gray-50 min-h-screen flex flex-col`}>
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <ChatWidget /> {/* Yeh tag lagana zaroori tha taake chatbot active ho */}
      </body>
    </html>
  );
}