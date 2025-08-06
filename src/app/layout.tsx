import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google"; // ✨ Đã bỏ Inter vì không dùng
import "./globals.css";

import TopBar from "./components/TopBar";
import LogoSearch from "./components/LogoSearch";
import NavigationMenu from "./components/Navbar";
import Footer from "./components/Footer";
import { productsBlackWhite } from "./components/productsBlackWhite";
import { productsColor } from "./components/productsColor";

// 👇 Khai báo font Google với biến CSS
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// 👇 Thông tin metadata cho SEO
export const metadata: Metadata = {
  title: "Công ty Cổ Phần Máy Tính Việt Nam (CMT)",
  description: "Công ty Cổ Phần Máy Tính Việt Nam (CMT)",
  icons: {
    icon: "/logo.png",
  },

};
const allProducts = [...productsBlackWhite, ...productsColor];


// 👇 Component layout gốc
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="antialiased bg-white text-black">
        <TopBar />
        <LogoSearch  products={allProducts}/>
        <NavigationMenu />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
