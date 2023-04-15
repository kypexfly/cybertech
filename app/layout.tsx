import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Toaster from "@/components/external/Toaster";
import { Inter } from "next/font/google";
import "./globals.css";
import { Metadata } from "next";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "CyberTech",
  description:
    "Wide range of high-quality computers, accessories, electronics, and more to meet your needs",
  keywords: ["tech", "computers", "accessories", "electronics"],
  icons: {
    icon: "./favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`flex min-h-screen flex-col ${inter.className}`}>
        <Navbar />
        <main className="container mx-auto w-full grow">{children}</main>
        <div id="modal"></div>
        <Toaster position="bottom-center" />
        <Footer />
      </body>
    </html>
  );
}
