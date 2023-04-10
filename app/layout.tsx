import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
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
        <main className="mx-auto w-full max-w-5xl grow">{children}</main>
        <div id="modal"></div>
        <Footer />
      </body>
    </html>
  );
}
