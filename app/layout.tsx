import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Toaster from "@/components/Toaster";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ['400', '700'],
});

export const metadata = {
  title: "CyberTech",
  description:
    "Wide range of high-quality computers, accessories, electronics, and more to meet your needs",
  keywords: ["tech", "computers", "accessories", "electronics"],
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
        <Toaster />
        <Footer />
      </body>
    </html>
  );
}
