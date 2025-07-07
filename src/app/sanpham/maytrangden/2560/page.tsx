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
    name: "Máy Photocopy Apeos 2560",
    price: "Liên Hệ",
    image: "/productsBlackWhite/Apeos 356030602560.png",
    specs: [
    
      "02 khay tự động (500 tờ/ khay) & 01 khay tay (96 tờ). (Trọng lượng giấy : 60 - 256 gsm)",
      "Bộ nạp và đảo bản gốc tự động (DADF)",
      "Bộ đảo bản sao (Duplex)",
      "Bộ nhớ: Tối đa 4GB. SSD: 128GB",
      "Màn hình cảm ứng màu 7 inch",
      "Copy/in/scan 2 mặt tự động",
      "Copy: Tốc độ: 25 trang A4/ phút. Độ phân giải: 600 x 600dpi",
      " Khổ giấy: A5-A3",
      "Phóng to/ thu nhỏ: 25-400 %. (tăng giảm từng 1%)",
      " In: Mạng; Tốc độ: 25 trang A4/ phút, Độ phân giải : Chuẩn: 600 x 600 dpi. Độ phân giải cao: 1200 x 1200 dpi",
      "Hệ điều hành hỗ trợ :Windows 10 (32bit / 64bit), Windows 8.1 (32bit / 64bit),Windows Server 2019 (64bit), Windows Server 2016 (64bit),Windows Server 2012 R2 (64bit), Windows Server 2012 (64bit).",
      "Ngôn ngữ mô tả trang : PCL5 / PCL6",
      "Khả năng kết nối : Ethernet 1000BASE-T / 100BASE-TX / 10BASE-T, USB",
      " Scan màu: Tốc độ: 55 trang A4/phút. Scan vào PC/server, E-mail; Định dạng file: PDF, TIFF, JPEG,… . Độ phân giải tối đa: 600x600dpi",
      "Cung cấp nguồn điện : AC220-240 V +/- 10 %, 8 A, Thông thường 50/60 Hz",
      "Kích thước : Rộng 590 x Sâu 659 x Cao 885 mm",
      "Trọng lượng : 65 kg",
      
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
        <h2 className="text-lg text-red-600 font-bold mb-3">THÔNG SỐ KỸ THUẬT</h2>

        {/* Bao Gồm */}
        <h1 className="text-base text-black font-bold mb-2">* Bao gồm:</h1>
        <ul className="list-disc text-sm text-gray-800 pl-6 space-y-1 mb-6">
          {product.specs.slice(0, 5).map((line, index) => (
            <li key={index}>{line}</li>
          ))}
        </ul>

        {/* Chức Năng */}
        <h1 className="text-base text-black font-bold mb-2">* Chức năng:</h1>
        <ul className="list-disc text-sm text-gray-800 pl-6 space-y-1">
          {product.specs.slice(5).map((line, index) => (
            <li key={index}>{line}</li>
          ))}
        </ul>
      </div>
      </div>
    </div>
  );
}
