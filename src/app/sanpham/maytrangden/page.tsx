
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
      { label: "Máy Photocopy Trắng Đen", href: "#trangden",
        submenu: [
      { label: "Máy Photocopy Apeos 5570", href: "#trangden"  },
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
  },{
    name: 'Máy Photocopy Apeos C7580',
    price: 'Liên Hệ',
    code: 'C7580',
    image: '/productsColor/Apeos C8180-C7580-C6580.png',
  },{
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

     <div className="max-w-6xl mx-auto p-6 bg-white shadow-lg rounded-lg">
  <div className="flex flex-col lg:flex-row gap-6">
    
    {/* Hình ảnh sản phẩm */}
    <div className="relative w-full lg:w-1/2 border p-4">
      <img src="/may-photo.jpg" alt="RICOH AFICIO MPC 4503" className="w-full h-auto object-cover" />
      <span className="absolute top-2 left-2 bg-red-600 text-white text-sm px-2 py-1 rounded-full font-bold">Giảm giá!</span>
    </div>

    {/* Thông tin sản phẩm */}
    <div className="w-full lg:w-1/2">
      {/* Breadcrumb */}
      <p className="text-sm text-gray-500 mb-2">TRANG CHỦ / CHO THUÊ MÁY PHOTOCOPY</p>

      {/* Tiêu đề sản phẩm */}
      <h1 className="text-2xl font-bold text-red-600 mb-2">RICOH AFICIO MPC 4503</h1>

      {/* Giá sản phẩm */}
      <div className="flex items-center space-x-4 mb-4">
        <span className="line-through text-gray-400 text-lg">1.400.000đ</span>
        <span className="text-red-600 text-xl font-bold">1.190.000đ</span>
      </div>

      {/* Thông tin chi tiết */}
      <ul className="text-sm space-y-1 mb-4 list-disc list-inside text-gray-700">
        <li>Tình trạng máy mới 95%-98%</li>
        <li>Máy Photocopy kỹ thuật số, Laser màu</li>
        <li>Chức năng: Copy + In + Scan màu qua mạng</li>
        <li>Tốc độ: 45 bản/phút</li>
      </ul>

      {/* Nút thêm vào giỏ */}
      <div className="flex items-center mb-4">
        <button className="px-3 py-1 bg-gray-100 border border-gray-300">-</button>
        <span className="px-4">1</span>
        <button className="px-3 py-1 bg-gray-100 border border-gray-300">+</button>
        <button className="ml-4 px-6 py-2 bg-red-600 text-white font-semibold hover:bg-red-700 transition rounded shadow">THÊM VÀO GIỎ HÀNG</button>
      </div>

      {/* Danh mục */}
      <p className="text-sm text-gray-600">
        Danh mục: 
        <span className="text-red-600"> Cho thuê máy photo Ricoh - Toshiba Màu, Cho thuê máy photocopy</span>
      </p>

      {/* Icon mạng xã hội */}
      <div className="flex space-x-3 mt-4 text-gray-500 text-xl">
        <i className="fab fa-facebook-square"></i>
        <i className="fab fa-twitter-square"></i>
        <i className="fab fa-envelope"></i>
        <i className="fab fa-linkedin"></i>
      </div>
    </div>
  </div>

  {/* Mô tả sản phẩm */}
  <div className="mt-10 border-t pt-6">
    <h2 className="text-lg font-bold mb-2">MÔ TẢ</h2>
    <p className="text-sm text-gray-800 mb-4">
      Máy Photocopy Ricoh Aficio MPC 4503 là dòng máy sao chép đã qua sử dụng từ các nước tiên tiến trên thế giới...
    </p>
    <p className="text-red-600 font-bold text-md mb-2">
      TỰ TIN DỊCH VỤ CHO THUÊ MÁY PHOTOCOPY RICOH AFICIO MPC 4503 RẺ NHẤT.
    </p>
    <p className="text-sm text-gray-800">
      Đây là dòng sản phẩm cao cấp nhưng được công ty chúng tôi đưa ra thị trường với cam kết chất lượng và rẻ nhất...
    </p>
  </div>
</div>
    {/* MÁY PHOTOCOPY TRẮNG ĐEN */}
      <div className="max-w-screen-xl mx-auto" id="trangden">
        <div className="bg-red-600 text-white text-lg font-bold px-4 py-2 mt-4 text-center rounded-full shadow-2xl ">
          MÁY PHOTOCOPY TRẮNG ĐEN
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 py-6">
          {productsBlackWhite.map((product, index) => (
            <div key={index} className="border p-4 text-center flex flex-col justify-between min-h-[400px]">
            <Image
              src={product.image}
              alt={product.name}
              width={200}
              height={200}
              className="mx-auto object-contain h-[250px] w-auto"
            />
            <div className="mt-4">
              <p className="text-green-600 font-medium text-base">{product.name}</p>
              <p className="text-red-600 font-bold text-base mt-1">Giá: {product.price}</p>
              <p className="text-gray-600 text-sm mt-1">Mã sản phẩm: {product.code}</p>
            </div>
          </div>
          ))}
        </div>
      </div>

      {/* MÁY PHOTOCOPY MÀU */}
      <div className="max-w-screen-xl mx-auto" id="mau">
        <div className="bg-red-600 text-white text-lg font-bold px-4 py-2 mt-4 text-center rounded-full shadow-2xl">
          MÁY PHOTOCOPY MÀU
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 py-6">
          {productsColor.map((product, index) => (
            <div key={index} className="border p-4 text-center flex flex-col justify-between min-h-[400px]">
               <Image
                src={product.image}
                alt={product.name}
                width={200}
                height={200}
                className="mx-auto object-contain h-[250px] w-auto"
              />
              <p className="text-green-600 font-medium mt-2">{product.name}</p>
              <p className="text-red-600 font-bold mt-1">Giá: {product.price}</p>
              <p className="text-sm text-gray-500 mt-1">Mã sản phẩm: {product.code}</p>
            </div>
          ))}
        </div>
      </div>
      </div>
  );
}
