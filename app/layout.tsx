import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Sri Vidya Ganapathi Temple | NIT Trichy",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* Add a global radial backdrop to give the background depth */}
      <body className="antialiased bg-[#fffefc] relative">
        {/* Subtle, glowing background accent */}
        <div className="fixed inset-0 bg-[radial-gradient(#fcf5e5_1px,transparent_1px)] [background-size:24px_24px] opacity-30 z-[-1]" />

        <Navbar />

        {/* We use relative and z-10 to ensure content stays above the background accent */}
        <main className="relative min-h-screen z-10">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
