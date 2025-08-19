"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

// 1) Khai báo kiểu dữ liệu
type ChildItem = { label: string; code: string };
type Submenu = { label: string; href: string; children?: ChildItem[] };
type NavItem = { label: string; href?: string; submenu?: Submenu[] };

// 2) Gán kiểu cho mảng navItems
const navItems: NavItem[] = [
  { label: "TRANG CHỦ", href: "/" },
  { label: "GIỚI THIỆU", href: "/gioithieu" },
  {
    // Đi tới section trên trang chủ
    label: "SẢN PHẨM",
    href: "/sanpham",
    submenu: [
      {
        label: "Máy Photocopy Trắng Đen",
        href: "/sanpham/maytrangden",
        children: [
          { label: "Apeos 2560", code: "2560" },
          { label: "Apeos 3060", code: "3060" },
          { label: "Apeos 3560", code: "3560" },
          { label: "Apeos 4570", code: "4570" },
          { label: "Apeos 5570", code: "5570" },
          { label: "Apeos 6580", code: "6580" },
          { label: "Apeos 7580", code: "7580" },
        ],
      },
      {
        label: "Máy Photocopy Màu",
        href: "/sanpham/maymau",
        children: [
          { label: "Apeos C2061", code: "C2061" },
          { label: "Apeos C2561", code: "C2561" },
          { label: "Apeos C3061", code: "C3061" },
          { label: "Apeos C2567", code: "C2567" },
          { label: "Apeos C3067", code: "C3067" },
          { label: "Apeos C3567", code: "C3567" },
          { label: "Apeos C4571", code: "C4571" },
          { label: "Apeos C5571", code: "C5571" },
          { label: "Apeos C6580", code: "C6580" },
          { label: "Apeos C6571", code: "C6571" },
          { label: "Apeos C7071", code: "C7071" },
          { label: "Apeos C7580", code: "C7580" },
          { label: "Apeos C8180", code: "C8180" },
        ],
      },
      {
        label: "Mực Máy Photocopy",
        href: "/sanpham/muc",
        children: [
        ]
      },
    ],
  },
  { label: "TIN TỨC & SỰ KIỆN", href: "#" },
  { label: "DỊCH VỤ", href: "/dichvu" },
  { label: "TUYỂN DỤNG", href: "#" },
  { label: "LIÊN HỆ", href: "/lienhe" },
];

export default function Navbar() {
  // Desktop states
  const [openMenu, setOpenMenu] = useState<number | null>(null);
  const [openSub, setOpenSub] = useState<number | null>(null);

  // Mobile states
  const [isOpen, setIsOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<number | null>(null);

  const pathname = usePathname();

  useEffect(() => {
    setOpenMenu(null);
    setOpenSub(null);
    setIsOpen(false);
    setOpenSubmenu(null);
  }, [pathname]);

  const closeAll = () => {
    setOpenMenu(null);
    setOpenSub(null);
    setIsOpen(false);
    setOpenSubmenu(null);
  };

  return (
    <nav className="bg-red-600 text-white font-semibold text-[18px] sticky top-0 z-40">
      {/* Desktop */}
      <ul className="nav-gold hidden md:flex justify-center space-x-10 py-3 relative">
        {navItems.map((item, i) => (
          <li
            key={i}
            className="relative"
            onMouseEnter={() => setOpenMenu(i)}
            onMouseLeave={() => {
              setOpenMenu((cur) => (cur === i ? null : cur));
              setOpenSub(null);
            }}
            role="none"
          >
            {item.submenu ? (
              <>
                {/* Bấm vào chữ sẽ điều hướng tới href, hover vẫn mở menu */}
                <Link
                  href={item.href ?? "#"}
                  onClick={closeAll}
                  className="nav-gold inline-flex items-center gap-1"
                  aria-haspopup={true}
                  aria-expanded={openMenu === i}
                >
                  {item.label}
                </Link>

                <ul
                  className={`absolute top-full left-0 bg-white text-black shadow-lg min-w-[250px] rounded-md z-50 transition-all duration-200 ${openMenu === i ? "opacity-100 visible" : "opacity-0 invisible"
                    }`}
                >
                  {item.submenu.map((sub: Submenu, j: number) => (
                    <li
                      key={j}
                      className="relative"
                      onMouseEnter={() => setOpenSub(j)}
                      onMouseLeave={() =>
                        setOpenSub((cur) => (cur === j ? null : cur))
                      }
                    >
                      <div className="flex items-center justify-between px-4 py-2 hover:bg-gray-100">
                        <Link href={sub.href} className="whitespace-nowrap" onClick={closeAll}>
                          {sub.label}
                        </Link>
                        {sub.children && <span className="ml-2">&#9656;</span>}
                      </div>

                      {sub.children && (
                        <ul
                          className={`absolute top-0 left-full bg-white text-black shadow-lg min-w-[220px] rounded-md z-50 transition-all duration-200 ${openMenu === i && openSub === j
                            ? "opacity-100 visible"
                            : "opacity-0 invisible"
                            }`}
                        >
                          {sub.children.map((child: ChildItem, k: number) => (
                            <li
                              key={k}
                              className="px-4 py-2 hover:bg-gray-100 rounded-md whitespace-nowrap"
                            >
                              <Link
                                href={`${sub.href}/${child.code}`}
                                onClick={closeAll}
                              >
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
              <Link href={item.href ?? "#"} className="hover:underline" onClick={closeAll}>
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ul>

      {/* Mobile */}
      <div className="md:hidden px-4 py-3 flex justify-between items-center">
        <h1 className="text-lg font-bold">MENU</h1>
        <button onClick={() => setIsOpen((v) => !v)} className="text-white text-2xl" aria-label="Toggle menu">
          ☰
        </button>
      </div>
      {isOpen && (
        <ul className="md:hidden nav-mobile bg-white text-black shadow-lg space-y-2 px-4 py-3">
          {navItems.map((item, index) => (
            <li key={index}>
              {item.submenu ? (
                <>
                  <button
                    onClick={() =>
                      setOpenSubmenu(openSubmenu === index ? null : index)
                    }
                    className="w-full text-left py-2 font-semibold flex justify-between items-center"
                    aria-expanded={openSubmenu === index}
                    aria-controls={`submenu-${index}`}
                  >
                    {item.label} <span>{openSubmenu === index ? "▲" : "▼"}</span>
                  </button>

                  {/* Link đi thẳng tới section sản phẩm trên trang chủ */}


                  {openSubmenu === index && (
                    <ul id={`submenu-${index}`} className="pl-4 space-y-1">
                      {item.submenu.map((sub: Submenu, subIndex: number) => (
                        <li key={subIndex}>
                          <Link
                            href={sub.href}
                            className="block py-2"
                            onClick={closeAll}
                          >
                            {sub.label}
                          </Link>

                          {sub.children && (
                            <ul className="pl-4 text-sm text-gray-600">
                              {sub.children.map((child: ChildItem, childIndex: number) => (
                                <li key={childIndex}>
                                  <Link
                                    href={`${sub.href}/${child.code}`}
                                    className="block py-1"
                                    onClick={closeAll}
                                  >
                                    Máy Photocopy {child.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <Link
                  href={item.href ?? "#"}
                  className="block py-2 font-semibold"
                  onClick={closeAll}
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
