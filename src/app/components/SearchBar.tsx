"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";

interface Product {
  name: string;
  price: string;
  code: string;
  image: string;
  category?: string;
}

interface Props {
  products: Product[];
  categories: string[];
}

export default function SearchBarWithCategoryBoxed({
  products = [],
  categories = [],
}: Props) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("Tất cả");
  const [showResults, setShowResults] = useState(false);
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
    <div className="relative w-full max-w-2xl mx-auto" ref={wrapperRef}>
      {/* Thanh tìm kiếm */}
      <div className="flex flex-col sm:flex-row w-full rounded-lg overflow-hidden border border-gray-300 bg-white shadow-sm focus-within:shadow-md transition">
        {/* Dropdown danh mục */}
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="px-3 py-2 text-sm text-gray-700 bg-gray-50 outline-none border-b sm:border-b-0 sm:border-r border-gray-300 w-full sm:w-40 focus:bg-white"
        >
          <option value="Tất cả">Tất cả sản phẩm</option>
          {categories.map((cat, idx) => (
            <option key={idx} value={cat}>
              {cat}
            </option>
          ))}
        </select>

        {/* Input tìm kiếm */}
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

        {/* Nút tìm kiếm */}
        <button className="flex items-center gap-1 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-sm text-gray-700 border-l border-gray-300 whitespace-nowrap">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4 text-gray-500"
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

      {/* Kết quả gợi ý */}
      {showResults && query.length > 1 && (
        <ul className="absolute z-[900] top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg max-h-[300px] overflow-y-auto text-sm">
          {filtered.length > 0 ? (
            filtered.map((item, idx) => (
              <li
                key={idx}
                className="flex items-center space-x-3 p-3 hover:bg-gray-100 cursor-pointer transition"
              >
                <img
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
      )}
    </div>
  );
}
