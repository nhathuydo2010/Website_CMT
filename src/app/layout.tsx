import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import TopBar from "./components/TopBar";
import LogoSearch from "./components/LogoSearch";
import NavigationMenu from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Công ty Cổ Phần Máy Tính Việt Nam (CMT)",
  description: "Công ty Cổ Phần Máy Tính Việt Nam (CMT)",
  icons: {
    icon: "/logo.png", // hoặc "/favicon.ico"
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* Top bar with logo and search */}
        <TopBar />
        <LogoSearch />
        <NavigationMenu />
        {/* Main content area */}
        <main>{children}</main>
        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
