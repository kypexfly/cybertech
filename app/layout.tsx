import Navbar from "./components/Navbar";
import "./globals.css";

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
      <body>
        <Navbar />
        <main className="container mx-auto">{children}</main>
        <div id="modal"></div>
      </body>
    </html>
  );
}
