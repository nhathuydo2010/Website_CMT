
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const navItems = [
    { label: "TRANG CHỦ", href: "/" },
    { label: "GIỚI THIỆU", href: "/gioithieu" },
    {
      label: "SẢN PHẨM",
      href: "/sanpham",
      submenu: [
        {
          label: "Máy Photocopy Trắng Đen", href: "#trangden",
          submenu: [
            { label: "Máy Photocopy Apeos 5570", href: "#trangden" },
            { label: "Máy Photocopy a1", href: "#mau" },
            { label: "Máy Photocopy a2", href: "#mau" },
            { label: "Máy Photocopy a3", href: "#mau" },
          ],
        },
        { label: "Máy Photocopy Màu", href: "#mau" },
      ],
    },
    { label: "TIN TỨC & SỰ KIỆN", href: "#" },
    { label: "DỊCH VỤ", href: "/dichvu" },
    { label: "TUYỂN DỤNG", href: "/tuyendung" },
    { label: "LIÊN HỆ", href: "/lienhe" },
  ];

  const productsBlackWhite = [
    {
      name: 'Máy Photocopy Apeos 5570',
      price: 'Liên Hệ ',
      code: '5570',
      image: '/productsBlackWhite/Apeos 5570 4570.png',
    },
    {
      name: 'Máy Photocopy Apeos 4570',
      price: 'Liên Hệ ',
      code: '4570',
      image: '/productsBlackWhite/Apeos 5570 4570.png',
    },
    {
      name: 'Máy Photocopy Apeos 7580',
      price: 'Liên Hệ',
      code: '7580',
      image: '/productsBlackWhite/Apeos 75806580.png',
    },
    {
      name: 'Máy Photocopy Apeos 6580',
      price: 'Liên Hệ',
      code: '6580',
      image: '/productsBlackWhite/Apeos 75806580.png',
    },

    {
      name: 'Máy Photocopy Apeos 3560',
      price: 'Liên Hệ',
      code: '3560',
      image: '/productsBlackWhite/Apeos 356030602560.png',
    },
    {
      name: 'Máy Photocopy Apeos 3060',
      price: 'Liên Hệ',
      code: '3060',
      image: '/productsBlackWhite/Apeos 356030602560.png',
    },
    {
      name: 'Máy Photocopy Apeos 2560',
      price: 'Liên Hệ',
      code: '2560',
      image: '/productsBlackWhite/Apeos 356030602560.png',
    },
    // Thêm các sản phẩm trắng đen khác...
  ];

  const productsColor = [
    {
      name: 'Máy Photocopy Apeos C7071',
      price: 'Liên Hệ',
      code: 'C7071',
      image: '/productsColor/Apeos C7071  C6571  C5571  C4571.png',
    },
    {
      name: 'Máy Photocopy Apeos C6571',
      price: 'Liên Hệ',
      code: 'C6571',
      image: '/productsColor/Apeos C7071  C6571  C5571  C4571.png',
    },
    {
      name: 'Máy Photocopy Apeos C5571',
      price: 'Liên Hệ',
      code: 'C5571',
      image: '/productsColor/Apeos C7071  C6571  C5571  C4571.png',
    },
    {
      name: 'Máy Photocopy Apeos C4571',
      price: 'Liên Hệ',
      code: 'C4571',
      image: '/productsColor/Apeos C7071  C6571  C5571  C4571.png',
    },

    {
      name: 'Máy Photocopy Apeos C3061',
      price: 'Liên Hệ',
      code: 'C3061',
      image: '/productsColor/Apeos C3061  C2561  C2061.png',
    },
    {
      name: 'Máy Photocopy Apeos C2561',
      price: 'Liên Hệ',
      code: 'C2561',
      image: '/productsColor/Apeos C3061  C2561  C2061.png',
    },
    {
      name: 'Máy Photocopy Apeos C2061',
      price: 'Liên Hệ',
      code: 'C2061',
      image: '/productsColor/Apeos C3061  C2561  C2061.png',
    },
    {
      name: 'Máy Photocopy Apeos C8180',
      price: 'Liên Hệ',
      code: 'C8180',
      image: '/productsColor/Apeos C8180-C7580-C6580.png',
    }, {
      name: 'Máy Photocopy Apeos C7580',
      price: 'Liên Hệ',
      code: 'C7580',
      image: '/productsColor/Apeos C8180-C7580-C6580.png',
    }, {
      name: 'Máy Photocopy Apeos C6580',
      price: 'Liên Hệ',
      code: 'C6580',
      image: '/productsColor/Apeos C8180-C7580-C6580.png',
    },
    {
      name: 'Máy Photocopy Apeos C3567',
      price: 'Liên Hệ',
      code: 'C3567',
      image: '/productsColor/Apeos C3567.png',
    },
    // Thêm các sản phẩm màu khác...
  ];



  return (
    <div className="w-full">
      {/* Dòng chữ phía trên logo */}
      <div className="w-full text-red-700 text-[14px] font-medium text-center px-4 py-2">
        <div className="animate-marquee">
          Quý khách hàng có nhu cầu tư vấn Mua & Thuê máy Photocopy vui lòng liên hệ phòng kinh doanh 0908.100.201 - Hoặc Hotline: 028.382.261.66 - 028.382.965.94
        </div>
      </div>
      <div className="flex justify-between items-center px-90 py-2 bg-white shadow">
        {/* Logo và tên công ty */}
        <div className="flex items-center space-x-3">
          <Image src="/logo.png" alt="Logo" width={90} height={50} />
          <span className="text-orange-600 text-xl font-bold uppercase">
            Công Ty CỔ PHẦN MÁY TÍNH VIỆT NAM
          </span>
        </div>
        {/* Thanh tìm kiếm */}
        <div className="flex items-center space-x-2">
          <input
            type="text"
            placeholder="Sản phẩm cần tìm"
            className="border border-gray-300 px-2 py-1 text-sm rounded focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <button className="bg-red-500 text-white px-3 py-1 text-sm rounded hover:bg-red-600">
            Tìm kiếm
          </button>
        </div>
      </div>

      {/* --- Navigation --- */}
      {/* 🔻 Navigation */}
      <nav className="bg-red-600 text-white font-semibold text-sm relative z-50">
        <ul className="flex justify-center space-x-10 py-3 relative">
          {navItems.slice(0, 2).map((item, index) => (
            <li key={index}>
              <Link href={item.href} className="hover:underline">{item.label}</Link>
            </li>
          ))}

          {/* Dropdown SẢN PHẨM */}
          <li className="relative group">
            <button className="hover:underline">SẢN PHẨM</button>

            {/* Dropdown cấp 1 */}
            <ul className="absolute top-[calc(100%+8px)] left-0 bg-white text-black shadow-md min-w-[200px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-200 z-50">

              {/* Mục có submenu cấp 2 */}
              <li className="relative group/trangden px-4 py-2 hover:bg-gray-100">
                <div className="flex items-center justify-between">
                  <Link href="/sanpham/trangden">Máy Photocopy Trắng Đen</Link>
                  <span className="ml-2">&#9656;</span>
                </div>

                {/* Submenu cấp 2 */}
                <ul className="absolute top-0 left-full bg-white text-black shadow-md min-w-[180px] opacity-0 invisible group-hover/trangden:opacity-100 group-hover/trangden:visible transition duration-200 z-50">
                  <li className="hover:bg-gray-100 px-4 py-2">
                    <Link href="/sanpham/maytrangden/5570">Máy Photocopy Apeos 5570</Link>
                  </li>
                  <li className="hover:bg-gray-100 px-4 py-2">
                    <Link href="/sanpham/maytrangden/4570">Máy Photocopy Apeos 4570</Link>
                  </li>
                  <li className="hover:bg-gray-100 px-4 py-2">
                    <Link href="/sanpham/maytrangden/7580">Máy Photocopy Apeos 7580</Link>
                  </li>
                  <li className="hover:bg-gray-100 px-4 py-2">
                    <Link href="/sanpham/maytrangden/6580">Máy Photocopy Apeos 6580</Link>
                  </li>
                  <li className="hover:bg-gray-100 px-4 py-2">
                    <Link href="/sanpham/maytrangden/3060">Máy Photocopy Apeos 3060</Link>
                  </li>
                  <li className="hover:bg-gray-100 px-4 py-2">
                    <Link href="/sanpham/maytrangden/2560">Máy Photocopy Apeos 2560</Link>
                  </li>
                  <li className="hover:bg-gray-100 px-4 py-2">
                    <Link href="/sanpham/maytrangden/3560">Máy Photocopy Apeos 3560</Link>
                  </li>
                </ul>
              </li>

              {/* Máy Photocopy Màu (submenu cấp 2) */}
              <li className="relative group/mau px-4 py-2 hover:bg-gray-100">
                <div className="flex items-center justify-between">
                  <Link href="/sanpham/mau">Máy Photocopy Màu</Link>
                  <span className="ml-2">&#9656;</span>
                </div>

                <ul className="absolute top-0 left-full bg-white text-black shadow-md min-w-[180px] opacity-0 invisible group-hover/mau:opacity-100 group-hover/mau:visible transition duration-200 z-50">
                  <li className="hover:bg-gray-100 px-4 py-2"><Link href="/sanpham/maymau/C7071">Máy Photocopy Apeos C7071</Link></li>
                  <li className="hover:bg-gray-100 px-4 py-2"><Link href="/sanpham/maymau/C6571">Máy Photocopy Apeos C6571</Link></li>
                  <li className="hover:bg-gray-100 px-4 py-2"><Link href="/sanpham/maymau/C5571">Máy Photocopy Apeos C5571</Link></li>
                  <li className="hover:bg-gray-100 px-4 py-2"><Link href="/sanpham/maymau/C4571">Máy Photocopy Apeos C4571</Link></li>
                  <li className="hover:bg-gray-100 px-4 py-2"><Link href="/sanpham/maymau/C3061">Máy Photocopy Apeos C3061</Link></li>
                  <li className="hover:bg-gray-100 px-4 py-2"><Link href="/sanpham/maymau/C2561">Máy Photocopy Apeos C2561</Link></li>
                  <li className="hover:bg-gray-100 px-4 py-2"><Link href="/sanpham/maymau/C2061">Máy Photocopy Apeos C2061</Link></li>
                  <li className="hover:bg-gray-100 px-4 py-2"><Link href="/sanpham/maymau/C8180">Máy Photocopy Apeos C8180</Link></li>
                  <li className="hover:bg-gray-100 px-4 py-2"><Link href="/sanpham/maymau/C7580">Máy Photocopy Apeos C7580</Link></li>
                  <li className="hover:bg-gray-100 px-4 py-2"><Link href="/sanpham/maymau/C6580">Máy Photocopy Apeos C6580</Link></li>
                  <li className="hover:bg-gray-100 px-4 py-2"><Link href="/sanpham/maymau/C3567">Máy Photocopy Apeos C3567</Link></li>
                </ul>
              </li>
            </ul>
          </li>

          {/* Các mục còn lại */}
          {navItems.slice(3).map((item, index) => (
            <li key={index + 3}>
              <Link href={item.href} className="hover:underline">{item.label}</Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* MÁY PHOTOCOPY TRẮNG ĐEN */}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 py-6">
        {productsBlackWhite.map((product, index) => (
          <div key={index} className="border p-4 text-center flex flex-col justify-between min-h-[400px]">
            <Link href={`/sanpham/maytrangden/${product.code}`}>
              <Image
                src={product.image}
                alt={product.name}
                width={200}
                height={200}
                className="mx-auto object-contain h-[250px] w-auto cursor-pointer hover:scale-105 transition-transform"
              />
            </Link>
            <div className="mt-4">
              <p className="text-green-600 font-medium text-base">{product.name}</p>
              <p className="text-red-600 font-bold text-base mt-1">Giá: {product.price}</p>
              <p className="text-gray-600 text-sm mt-1">Mã sản phẩm: {product.code}</p>
            </div>
          </div>
        ))}

      </div>
      <footer className="bg-white border-t mt-12 text-sm text-gray-700">
        <div className="max-w-screen-xl mx-auto py-8 px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Cột 1: Về công ty */}
          <div>
            <h3 className="font-bold text-blue-900 mb-2">Công ty Cổ Phần Máy Tính Việt Nam (CMT)</h3>
            <p className="mb-2">
              Là doanh nghiệp chuyên ngành máy tính, máy thiết bị văn phòng, Máy photocopy đa chức năng. Chúng tôi cung cấp các giải pháp về photocopy, in ấn, quản lý, thiết bị máy tính, laptop... dùng cho cá nhân, văn phòng, công ty và  dự án….

            </p>
            <img src="/logo-dathongbao.png" alt="Đã Thông Báo" className="w-32 mt-2" />
          </div>

          {/* Cột 2: Hỗ trợ khách hàng */}
          <div>
            <h3 className="font-bold text-blue-900 mb-2">Hỗ trợ khách hàng</h3>
            <ul className="space-y-1 list-disc list-inside text-gray-800">
              <li><a href="#" className="hover:underline">Tìm kiếm</a></li>
              <li><a href="#" className="hover:underline">Giới thiệu</a></li>
              <li><a href="#" className="hover:underline">Chính sách đổi trả</a></li>
              <li><a href="#" className="hover:underline">Chính sách bảo mật</a></li>
              <li><a href="#" className="hover:underline">Điều khoản dịch vụ</a></li>
              <li><a href="#" className="hover:underline">Liên hệ</a></li>
            </ul>
          </div>

          {/* Cột 3: Chăm sóc khách hàng */}
          <div>
            <h3 className="font-bold text-blue-900 mb-2">Chăm sóc khách hàng</h3>
            <p className="flex items-center space-x-2 text-blue-700 font-bold text-lg">
              📞 <span>028.382.261.66</span>

            </p>
            <p className="mt-1">
              <a href="mailto:cmtfujifilm@cmt.vn" className="text-blue-600 hover:underline">
                cmtfujifilm@cmt.vn
              </a>
            </p>
            {/* <div className="mt-3">
        <p className="mb-1 font-semibold">Follow Us</p>
        <div className="flex space-x-2">
          <a href="#"><i className="fab fa-facebook border p-2 rounded hover:bg-gray-100"></i></a>
          <a href="#"><i className="fab fa-twitter border p-2 rounded hover:bg-gray-100"></i></a>
          <a href="#"><i className="fab fa-instagram border p-2 rounded hover:bg-gray-100"></i></a>
          <a href="#"><i className="fab fa-google-plus-g border p-2 rounded hover:bg-gray-100"></i></a>
          <a href="#"><i className="fab fa-youtube border p-2 rounded hover:bg-gray-100"></i></a>
        </div>
      </div> */}
          </div>
        </div>

        {/* Dòng bản quyền */}
        <div className="text-center text-xs text-gray-500 border-t py-3">
          Copyright © 2025 Ezone. Powered by Haravan
        </div>
      </footer>

    </div>
  );
}
