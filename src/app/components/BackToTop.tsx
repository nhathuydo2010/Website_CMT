// components/BackToTop.tsx
"use client";
import { useEffect, useState } from "react";
import { Home } from "lucide-react";

export default function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 300);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  if (!show) return null;

  return (
    <button
      onClick={goTop}
      aria-label="Về đầu trang"
      className="fixed bottom-6 right-6 z-[100] h-12 w-12 rounded-full bg-red-600 text-white shadow-xl flex items-center justify-center hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
    >
      <Home className="h-6 w-6" />
    </button>
  );
}
