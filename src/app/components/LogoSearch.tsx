"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { productsBlackWhite } from "./productsBlackWhite";
import { productsColor } from "./productsColor";
import { Menu, X } from "lucide-react"; // icon menu

// Định nghĩa kiểu cho sản phẩm
interface Product {
  image: string;
  name: string;
  code: string;
  price: string | number;
  category?: string;
}

// Định nghĩa kiểu cho props của SearchResults
interface SearchResultsProps {
  show: boolean;
  query: string;
  filtered: Product[];
}

// Component hiển thị kết quả tìm kiếm
function SearchResults({ show, query, filtered }: SearchResultsProps) {
  if (!show || query.length <= 1) return null;
  return (
    <ul className="absolute z-[900] mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg max-h-[300px] overflow-y-auto text-sm animate-fadeIn">
      {filtered.length > 0 ? (
        filtered.map((item: Product, idx: number) => (
          <li
            key={idx}
            className="flex items-center space-x-3 p-3 hover:bg-gray-100 cursor-pointer transition"
          >
            <Image
              src={item.image}
              alt={item.name}
              width={45}
              height={45}
              className="object-contain rounded border"
            />
            <div className="flex-1">
              <Link
                href={`/sanpham/${
                  item.category?.toLowerCase() === "màu"
                    ? "maymau"
                    : "maytrangden"
                }/${item.code}`}
                className="text-gray-800 font-medium hover:underline"
              >
                {item.name}
              </Link>
              <p className="text-red-600 font-semibold text-sm mt-1">
                {item.price} VNĐ
              </p>
            </div>
          </li>
        ))
      ) : (
        <li className="p-3 text-gray-500 text-center">
          Không tìm thấy kết quả
        </li>
      )}
    </ul>
  );
}

export default function Header() {
  const products = [
    ...productsBlackWhite.map((p) => ({ ...p, category: "Trắng Đen" })),
    ...productsColor.map((p) => ({ ...p, category: "Màu" })),
  ];
  const categories = ["Trắng Đen", "Màu"];

  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("Tất cả");
  const [showResults, setShowResults] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const filtered = products.filter((item) => {
    const matchKeyword =
      item.name.toLowerCase().includes(query.toLowerCase()) ||
      item.code.toLowerCase().includes(query.toLowerCase());
    const matchCategory =
      category === "Tất cả" ||
      item.category?.toLowerCase() === category.toLowerCase();
    return matchKeyword && matchCategory;
  });

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setShowResults(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="w-full bg-white shadow sticky top-0 z-50">
      <div className="flex items-center justify-between max-w-screen-xl mx-auto px-4 py-3">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <Image src="/images/Logo.png" alt="Logo" width={70} height={50} />
          <span className="text-red-600 text-base md:text-xl font-bold uppercase">
            CÔNG TY CỔ PHẦN MÁY TÍNH VIỆT NAM
          </span>
        </div>

        {/* Menu button for mobile */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 rounded-lg border border-gray-300"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop contact info */}
        <div className="hidden md:flex items-center space-x-6 text-blue-800 font-semibold">
          <div className="flex items-center space-x-2">
            <Image src="/images/mail.png" alt="Mail" width={20} height={20} />
            <a
              href="mailto:cmt-market@cmt.vn"
              className="hover:underline text-sm whitespace-nowrap"
            >
              cmt-market@cmt.vn
            </a>
          </div>
          <div className="flex items-center space-x-2">
            <Image src="/images/phone.png" alt="Phone" width={20} height={20} />
            <a href="tel:0944333986" className="hover:underline text-sm">
              0944.333.986
            </a>
          </div>
        </div>
      </div>

      {/* Search bar (desktop) */}
      <div className="hidden md:block border-t border-gray-200" ref={wrapperRef}>
        <div className="max-w-screen-xl mx-auto px-4 py-3 relative">
          <div className="flex rounded-lg overflow-hidden border border-gray-300 bg-gray-50 shadow-sm">
            {/* Dropdown */}
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="px-3 py-2 text-sm bg-gray-100 outline-none border-r border-gray-300 w-40"
            >
              <option value="Tất cả">Tất cả sản phẩm</option>
              {categories.map((cat, idx) => (
                <option key={idx} value={cat}>
                  {cat}
                </option>
              ))}
            </select>

            {/* Input */}
            <input
              type="text"
              placeholder="Tìm kiếm sản phẩm..."
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setShowResults(true);
              }}
              className="flex-1 px-3 py-2 text-sm text-black outline-none"
            />

            {/* Button */}
            <button className="px-4 bg-red-500 hover:bg-red-600 text-white text-sm flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 103.75 3.75a7.5 7.5 0 0012.9 12.9z"
                />
              </svg>
              Tìm kiếm
            </button>
          </div>

          {/* Search results */}
          <SearchResults show={showResults} query={query} filtered={filtered} />
        </div>
      </div>

      {/* Mobile menu (toggle) */}
      {menuOpen && (
        <div className="md:hidden border-t border-gray-200 px-4 py-3 space-y-4">
          <div className="flex flex-col space-y-2 text-blue-800 font-semibold">
            <a href="mailto:cmt-market@cmt.vn" className="flex items-center space-x-2">
              <Image src="/images/mail.png" alt="Mail" width={20} height={20} />
              <span>cmt-market@cmt.vn</span>
            </a>
            <a href="tel:0944333986" className="flex items-center space-x-2">
              <Image src="/images/phone.png" alt="Phone" width={20} height={20} />
              <span>0944.333.986</span>
            </a>
          </div>

          {/* Mobile search */}
          <div className="relative">
            <div className="flex rounded-lg overflow-hidden border border-gray-300 bg-gray-50 shadow-sm">
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="px-2 py-2 text-sm bg-gray-100 outline-none border-r border-gray-300 w-32"
              >
                <option value="Tất cả">Tất cả</option>
                {categories.map((cat, idx) => (
                  <option key={idx} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
              <input
                type="text"
                placeholder="Tìm kiếm..."
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setShowResults(true);
                }}
                className="flex-1 px-2 py-2 text-sm text-black outline-none"
              />
              <button className="px-3 bg-red-500 hover:bg-red-600 text-white text-sm">
                Tìm
              </button>
            </div>
            {/* Kết quả tìm kiếm trên mobile */}
            <SearchResults show={showResults} query={query} filtered={filtered} />
          </div>
        </div>
      )}
    </header>
  );
}
