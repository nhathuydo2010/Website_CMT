"use client";
import React, {createContext, useContext, useEffect, useState} from "react";

type Locale = "vi" | "en";

const dict = {
  vi: {
    company: "CÔNG TY CỔ PHẦN MÁY TÍNH VIỆT NAM",
    searchPlaceholder: "Tìm kiếm sản phẩm...",
    noResult: "Không tìm thấy kết quả",
    priceSuffix: "VNĐ",
    email: "cmt-market@cmt.vn",
    phone: "0944.333.986",
  },
  en: {
    company: "VIETNAM COMPUTER JOINT STOCK COMPANY",
    searchPlaceholder: "Search products...",
    noResult: "No results found",
    priceSuffix: "VND",
    email: "cmt-market@cmt.vn",
    phone: "+84 944 333 986",
  }
} as const;

type Ctx = {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: <K extends keyof typeof dict["vi"]>(k: K) => (typeof dict)["vi"][K];
};

const LangCtx = createContext<Ctx | null>(null);

export function LangProvider({children}:{children: React.ReactNode}) {
  const [locale, setLocale] = useState<Locale>("vi");

  useEffect(() => {
    const saved = (localStorage.getItem("locale") as Locale) || "vi";
    setLocale(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("locale", locale);
    document.documentElement.lang = locale;
  }, [locale]);

  const t = (k: any) => (dict as any)[locale][k];

  return (
    <LangCtx.Provider value={{locale, setLocale, t}}>{children}</LangCtx.Provider>
  );
}

export function useLang(){
  const ctx = useContext(LangCtx);
  if(!ctx) throw new Error("useLang must be used within LangProvider");
  return ctx;
}
