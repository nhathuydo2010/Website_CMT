
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
      { label: "Máy Photocopy Trắng Đen", href: "#maytrangden",
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
      {/* Menu Navigation */}
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
    <Link href="/sanpham/maytrangden">Máy Photocopy Trắng Đen</Link>
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

    {/* Mục có submenu cấp 2 */}
    <li className="relative group/trangden px-4 py-2 hover:bg-gray-100">
      <div className="flex items-center justify-between">
        <Link href="/sanpham">Máy Photocopy Màu</Link>
        <span className="ml-2">&#9656;</span>
      </div>

      {/* Submenu cấp 2 - CHỈ hiện khi hover mục Máy Photocopy Trắng Đen */}
      <ul className="absolute top-0 left-full bg-white text-black shadow-md min-w-[180px] opacity-0 invisible group-hover/trangden:opacity-100 group-hover/trangden:visible transition duration-200 z-50">
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




    {navItems.slice(3).map((item, index) => (
      <li key={index + 3}>
        <Link href={item.href} className="hover:underline">{item.label}</Link>
      </li>
    ))}
  </ul>
</nav>


     <div className="w-full max-w-screen-xl mx-auto py-5">
      <Image
        src="/banner.png"
        alt="Banner Công ty Siêu Nhanh"
        width={1000}
        height={400}
        className="w-full h-auto object-cover rounded-md shadow-xl"
        priority
      />
    </div>
    {/* MÁY PHOTOCOPY TRẮNG ĐEN */}
      <div className="max-w-screen-xl mx-auto" id="trangden">
        <div className="bg-red-600 text-white text-lg font-bold px-4 py-2 mt-4 text-center rounded-full shadow-2xl ">
          MÁY PHOTOCOPY TRẮNG ĐEN
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 py-6">
        {productsBlackWhite.map((product, index) => (
          <div
            key={index}
            id={product.code} // 👈 THÊM id THEO MÃ SẢN PHẨM
            className="border p-4 text-center flex flex-col justify-between min-h-[400px]"
          >
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
