import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "BiteFinder AI - Food & Restaurant Finder",
  description: "Discover top culinary destinations using AI RAG architectures.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* body par suppress ka rule lagaya hai */}
      <body 
        className="min-h-screen flex flex-col bg-gray-50 pt-16 font-sans antialiased"
        suppressHydrationWarning
      >
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}