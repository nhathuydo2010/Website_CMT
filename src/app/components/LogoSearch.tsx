"use client";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Search } from "lucide-react";

interface Product {
  name: string;
  price: string;
  code: string;
  image: string;
  category?: string;
}
interface Props {
  products: Product[];
}

export default function Header({ products = [] }: Props) {
  const [query, setQuery] = useState("");
  const [showResults, setShowResults] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const filtered = products.filter(
    (item) =>
      item.name.toLowerCase().includes(query.toLowerCase()) ||
      item.code.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setShowResults(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="w-full bg-white shadow sticky top-0 z-50">
      <div className="flex items-center space-x-3 px-4 py-3 max-w-screen-xl mx-auto">
        {/* Logo */}
        <div className="flex-shrink-0 flex items-center space-x-2 min-w-[70px]">
          <Image src="/images/Logo.png" alt="Logo" width={95} height={40} />
          <span className="hidden sm:block text-red-600 text-sm md:text-lg font-bold uppercase">
            CÔNG TY CỔ PHẦN MÁY TÍNH VIỆT NAM
          </span>
        </div>

        {/* Search bar */}
        <div className="flex-1 relative" ref={wrapperRef}>
          <div className="flex items-center bg-gray-50 border border-gray-300 rounded-full px-3 py-2 shadow-sm focus-within:shadow-md transition w-full">
            <Search className="w-5 h-5 text-gray-500" />
            <input
              type="text"
              placeholder="Tìm kiếm sản phẩm..."
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setShowResults(true);
              }}
              className="flex-1 px-3 bg-transparent outline-none text-sm"
            />
            {query && (
              <button onClick={() => setQuery("")} className="text-gray-400 hover:text-gray-600">
                <X size={18} />
              </button>
            )}
          </div>

          {/* Kết quả tìm kiếm */}
          {showResults && query.length > 1 && (
            <ul className="absolute z-[900] mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg max-h-[300px] overflow-y-auto text-sm">
              {filtered.length > 0 ? (
                filtered.map((item, idx) => (
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
                        href={`/sanpham/${item.category?.toLowerCase() === "màu" ? "maymau" : "maytrangden"}/${item.code}`}
                        className="text-gray-800 font-medium hover:underline"
                      >
                        {item.name}
                      </Link>
                      <p className="text-red-600 font-semibold text-sm mt-1">{item.price} VNĐ</p>
                    </div>
                  </li>
                ))
              ) : (
                <li className="p-3 text-gray-500 text-center">Không tìm thấy kết quả</li>
              )}
            </ul>
          )}
        </div>

        {/* Menu icon (Mobile) */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden p-2 border rounded-lg ml-2">
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Contact (Desktop) */}
        <div className="hidden md:flex items-center space-x-6 text-blue-800 font-semibold ml-4">
          <div className="flex items-center space-x-2">
            <Image src="/images/mail.png" alt="Mail" width={20} height={20} />
            <a href="mailto:cmt-market@cmt.vn" className="hover:underline">cmt-market@cmt.vn</a>
          </div>
          <div className="flex items-center space-x-2">
            <Image src="/images/phone.png" alt="Phone" width={20} height={20} />
            <a href="tel:0944333986" className="hover:underline">0944.333.986</a>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-gray-200 px-4 py-3 space-y-3">
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
        </div>
        
      )}
    </header>
  );
}
