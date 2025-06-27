import Image from "next/image";
import Link from "next/link";

export default function BanDo() {
  return (
        <div className="">
         {/* Dòng chữ phía trên logo */}
          <div className="w-full text-red-700 text-[14px] font-medium text-center px-4 py-2">
            <div className="animate-marquee">
              Quý khách hàng có nhu cầu tư vấn Mua & Thuê máy Photocopy vui lòng liên hệ phòng kinh doanh 0936.140.456 Ms Mai - 0907311050 Ms Mỹ - Hoặc Hotline: 0908.113.933 Mr Sang
            </div>
          </div>
    
          <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
            <header className="w-full flex items-center justify-between px-100 py-1 border-b border-gray-200 shadow-sm">
              {/* Logo Xerox */}
              <div className="flex items-center space-x-[2px]">
                <Image src="/logo.png" alt="Xerox Logo" width={150} height={25} />
                <span className="text-[15px] font-semibold text-red-600">
                  CÔNG TY CỔ PHẦN MÁY TÍNH VIỆT NAM
                </span>
              </div> 

          {/* Navigation */}
           {/* Navigation */}
          <nav className="hidden md:flex space-x-6 text-sm font-medium text-gray-700">
            <Link href="/" className="nav-link">Trang chủ</Link>
            <Link href="/bando" className="nav-link">Bản đồ</Link>
            <Link href="/gioithieu" className="nav-link">Giới thiệu</Link>
            <Link href="/dichvu" className="nav-link">Dịch vụ</Link>
            <Link href="/lienhe" className="nav-link">Liên hệ</Link>
            <span className="nav-link">Hotline: 081.932.9999</span>
          </nav>


          {/* Search Icon */}
          <div className="text-gray-600 hover:text-black cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1111.5 4a7.5 7.5 0 015.15 12.65z" />
            </svg>
          </div>
        </header>
      </main>
    </div>
  );
}