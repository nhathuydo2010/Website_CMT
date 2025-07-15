"use client";

import Link from "next/link";

const navItems = [
  { label: "TRANG CHỦ", href: "/" },
  { label: "GIỚI THIỆU", href: "/gioithieu" },
  {
    label: "SẢN PHẨM",
    submenu: [
      {
        label: "Máy Photocopy Trắng Đen",
        href: "/sanpham/maytrangden",
        children: [
          { label: "Apeos 5570", code: "5570" },
          { label: "Apeos 4570", code: "4570" },
          { label: "Apeos 7580", code: "7580" },
          { label: "Apeos 6580", code: "6580" },
          { label: "Apeos 3060", code: "3060" },
          { label: "Apeos 2560", code: "2560" },
          { label: "Apeos 3560", code: "3560" },
        ],
      },
      {
        label: "Máy Photocopy Màu",
        href: "/sanpham/maymau",
        children: [
          { label: "Apeos C7071", code: "C7071" },
          { label: "Apeos C6571", code: "C6571" },
          { label: "Apeos C5571", code: "C5571" },
          { label: "Apeos C4571", code: "C4571" },
          { label: "Apeos C3061", code: "C3061" },
          { label: "Apeos C2561", code: "C2561" },
          { label: "Apeos C2061", code: "C2061" },
          { label: "Apeos C8180", code: "C8180" },
          { label: "Apeos C7580", code: "C7580" },
          { label: "Apeos C6580", code: "C6580" },
          { label: "Apeos C3567", code: "C3567" },
        ],
      },
    ],
  },
  { label: "TIN TỨC & SỰ KIỆN", href: "#" },
  { label: "DỊCH VỤ", href: "/dichvu" },
  { label: "TUYỂN DỤNG", href: "/tuyendung" },
  { label: "LIÊN HỆ", href: "/lienhe" },
];

export default function Navbar() {
  return (
    <nav className="bg-red-600 text-white font-semibold text-sm sticky top-[1px] z-40">
      <ul className="flex justify-center space-x-10 py-3 relative">
        {navItems.map((item, index) => (
          <li key={index} className="relative group">
            {/* Nếu có submenu */}
            {item.submenu ? (
              <>
                <button className="hover:underline">{item.label}</button>
                <ul className="absolute top-full left-0 bg-white text-black shadow-lg min-w-[220px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  {item.submenu.map((sub, subIndex) => (
                    <li key={subIndex} className="relative group/submenu">
                      <div className="flex items-center justify-between px-4 py-2 hover:bg-gray-100 cursor-pointer">
                        <Link href={sub.href} className="w-full">
                          {sub.label}
                        </Link>
                        {sub.children && <span className="ml-2">&#9656;</span>}
                      </div>
                      {/* Submenu cấp 2 */}
                      {sub.children && (
                        <ul className="absolute top-0 left-full bg-white text-black shadow-lg min-w-[200px] opacity-0 invisible group-hover/submenu:opacity-100 group-hover/submenu:visible transition-all duration-200 z-50">
                          {sub.children.map((child, childIndex) => (
                            <li key={childIndex} className="px-4 py-2 hover:bg-gray-100 whitespace-nowrap">
                              <Link href={`${sub.href}/${child.code}`}>
                                Máy Photocopy {child.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              <Link href={item.href} className="hover:underline">
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
