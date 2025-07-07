import Image from "next/image";
import Link from "next/link";

export default function Product5570Page() {
 const navItems = [
    { label: "TRANG CHỦ", href: "/" },
    { label: "GIỚI THIỆU", href: "/gioithieu" },
    {
      label: "SẢN PHẨM",
      href: "/sanpham",
      submenu: [
        {
          label: "Máy Photocopy Trắng Đen",
          href: "/sanpham/trangden",
          submenu: [
            { label: "Máy Photocopy Apeos 5570", href: "/sanpham/maytrangden/5570" },
            { label: "Máy Photocopy Apeos 4570", href: "/sanpham/maytrangden/4570" },
            { label: "Máy Photocopy Apeos 7580", href: "/sanpham/maytrangden/7580" },
            { label: "Máy Photocopy Apeos 6580", href: "/sanpham/maytrangden/6580" },
            { label: "Máy Photocopy Apeos 3560", href: "/sanpham/maytrangden/3560" },
            { label: "Máy Photocopy Apeos 2560", href: "/sanpham/maytrangden/2560" },
            { label: "Máy Photocopy Apeos 3060", href: "/sanpham/maytrangden/3060" },
            
          ],
        },
        { label: "Máy Photocopy Màu", 
          href: "/sanpham/mau" ,
        submenu: [
            { label: "Máy Photocopy Apeos 5570", href: "/sanpham/maytrangden/5570" },
            { label: "Máy Photocopy Apeos 4570", href: "/sanpham/maytrangden/4570" },
            { label: "Máy Photocopy Apeos 7580", href: "/sanpham/maytrangden/7580" },
            { label: "Máy Photocopy Apeos 6580", href: "/sanpham/maytrangden/6580" },
            { label: "Máy Photocopy Apeos 3560", href: "/sanpham/maytrangden/3560" },
            { label: "Máy Photocopy Apeos 2560", href: "/sanpham/maytrangden/2560" },
            { label: "Máy Photocopy Apeos 3060", href: "/sanpham/maytrangden/3060" },
            
          ],},
      ],
    },
    { label: "TIN TỨC & SỰ KIỆN", href: "#" },
    { label: "DỊCH VỤ", href: "/dichvu" },
    { label: "TUYỂN DỤNG", href: "/tuyendung" },
    { label: "LIÊN HỆ", href: "/lienhe" },
  ];


  const product = {
    name: "Máy Photocopy Apeos C6571",
    price: "Liên Hệ",
    image: "/productsBlackWhite/Apeos 356030602560.png",
    specs: [
      "Máy Photocopy kỹ thuật số, Laser trắng đen",
      "Chức năng: Copy + In trắng đen + Scan màu qua mạng",
      "Bộ nạp và đảo 2 mặt bản gốc tự động (ARDF)",
      "Bộ đảo 2 mặt bản sao tự động (Duplex)",
      "Tốc độ: 50 bản/phút. Khổ giấy lớn nhất: A3, nhỏ nhất: A5",
      "Khay giấy vào: 2 khay x 550 tờ",
      "Khay giấy tay: 100 tờ",
      "Khay giấy ra bản sao: 500 tờ",
      "Thu Nhỏ / Phóng to: 25% – 400%",
      "Độ phân giải: 600 dpi",
      "Dung lượng bộ nhớ: 1 GB + ổ cứng 128 GB",
      "Màn hình cảm ứng màu thông minh",
      "Tiết kiệm điện năng, tái sử dụng mực thải",
      "Sử dụng mực: 4500s (~ 20.000 Trang)",
      "Tuổi thọ Drum: 500.000 bản",
      "Công suất trung bình: 30.000 bản/tháng",
      "Tối đa: 100.000 bản/tháng",
      "Khởi động: 10s, Chụp liên tục: 999 bản",
      "Tiêu thụ: 2.0 kW, Nguồn điện: 110V",
      "Kích thước: 670 x 682 x 895 mm, Trọng lượng: 97 Kg"
    ]
  };

  return (
    <div className="w-full">
          {/* Dòng chữ phía trên logo */}
          <div className="w-full text-red-700 text-[14px] font-medium text-center px-4 py-2">
            <div className="animate-marquee">
              Quý khách hàng có nhu cầu tư vấn Mua & Thuê máy Photocopy vui lòng liên hệ phòng kinh doanh 0936.140.456 Ms Mai - 0907311050 Ms Mỹ - Hoặc Hotline: 0908.113.933 Mr Sang
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
      <li className="hover:bg-gray-100 px-4 py-2">
          <Link href="/sanpham/maymau/C7071">Máy Photocopy Apeos C7071</Link>
        </li>
        <li className="hover:bg-gray-100 px-4 py-2">
          <Link href="/sanpham/maymau/C6571">Máy Photocopy Apeos C6571</Link>
        </li>
        <li className="hover:bg-gray-100 px-4 py-2">
          <Link href="/sanpham/maymau/C5571">Máy Photocopy Apeos C5571</Link>
        </li>
        <li className="hover:bg-gray-100 px-4 py-2">
          <Link href="/sanpham/maymau/C4571">Máy Photocopy Apeos C4571</Link>
        </li>
        <li className="hover:bg-gray-100 px-4 py-2">
          <Link href="/sanpham/maymau/C3061">Máy Photocopy Apeos C3061</Link>
        </li>
        <li className="hover:bg-gray-100 px-4 py-2">
          <Link href="/sanpham/maymau/C2561">Máy Photocopy Apeos C2561</Link>
        </li>
         <li className="hover:bg-gray-100 px-4 py-2">
          <Link href="/sanpham/maymau/C2061">Máy Photocopy Apeos C2061</Link>
        </li>
         <li className="hover:bg-gray-100 px-4 py-2">
          <Link href="/sanpham/maymau/C8180">Máy Photocopy Apeos C8180</Link>
        </li>
        <li className="hover:bg-gray-100 px-4 py-2">
          <Link href="/sanpham/maymau/C7580">Máy Photocopy Apeos C7580</Link>
        </li>
         <li className="hover:bg-gray-100 px-4 py-2">
          <Link href="/sanpham/maymau/C6580">Máy Photocopy Apeos C6580</Link>
        </li>
        <li className="hover:bg-gray-100 px-4 py-2">
          <Link href="/sanpham/maymau/C3567">Máy Photocopy Apeos C3567</Link>
        </li>
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

      {/* 🔻 Nội dung sản phẩm */}
      <div className="max-w-6xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-6">
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="relative w-full lg:w-1/2 border p-4">
            <Image
              src={product.image}
              alt={product.name}
              width={500}
              height={400}
              className="w-full h-auto object-contain"
            />
            <span className="absolute top-2 left-2 bg-red-600 text-white text-sm px-2 py-1 rounded-full font-bold">
              Mới 95%+
            </span>
          </div>
          <div className="w-full lg:w-1/2">
            <h1 className="text-2xl font-bold text-red-600 mb-2">{product.name}</h1>
            <p className="text-xl text-green-600 font-semibold mb-3">Giá: {product.price}</p>
            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1 mb-4">
              <li>{product.specs[0]}</li>
              <li>{product.specs[1]}</li>
              <li>{product.specs[4]}</li>
            </ul>
            <button className="mt-4 px-6 py-2 bg-red-600 text-white font-bold rounded hover:bg-red-700 transition">
              THÊM VÀO GIỎ HÀNG
            </button>
          </div>
        </div>

        {/* 🔻 Thông số kỹ thuật */}
        <div className="mt-10 border-t pt-6">
          <h2 className="text-lg font-bold mb-3">THÔNG SỐ KỸ THUẬT</h2>
          <ul className="list-disc text-sm text-gray-800 pl-6 space-y-1">
            {product.specs.map((line, index) => (
              <li key={index}>{line}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
