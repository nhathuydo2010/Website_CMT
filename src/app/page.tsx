
import Image from "next/image";
import Link from "next/link";

export default function Header() {
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

<div className="w-full max-w-screen-xl mx-auto py-5 flex justify-center">
  <Image
    src="/banner.jpg"
    alt="Banner Công ty Siêu Nhanh"
    width={1000}
    height={500}
    className="w-[900px] h-auto object-cover rounded-md shadow-xl"
    priority
  />
</div>

    {/* MÁY PHOTOCOPY TRẮNG ĐEN */}
      <div className="max-w-screen-xl mx-auto" id="trangden">
        <a
          href={`/sanpham/maytrangden/`}
          className="block bg-red-600 text-white text-lg font-bold px-4 py-2 mt-4 text-center rounded-full shadow-2xl hover:bg-red-700 transition"
        >
          MÁY PHOTOCOPY TRẮNG ĐEN
        </a>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 py-6">
        {productsBlackWhite.map((product, index) => (
          <div
            key={index}
            id={product.code} // 👈 THÊM id THEO MÃ SẢN PHẨM
            className="border p-4 text-center flex flex-col justify-between min-h-[400px]"
          >
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
      </div>

      {/* MÁY PHOTOCOPY MÀU */}
      <div className="max-w-screen-xl mx-auto" id="mau">
      <a
          href={`/sanpham/maymau/`}
          className="block bg-red-600 text-white text-lg font-bold px-4 py-2 mt-4 text-center rounded-full shadow-2xl hover:bg-red-700 transition"
        >
          MÁY PHOTOCOPY MÀU
        </a>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 py-6">
          {productsColor.map((product, index) => (
            <div key={index} className="border p-4 text-center flex flex-col justify-between min-h-[400px]">
              <Link href={`/sanpham/maymau/${product.code}`}>
          <Image
            src={product.image}
            alt={product.name}
            width={200}
            height={200}
            className="mx-auto object-contain h-[250px] w-auto cursor-pointer hover:scale-105 transition-transform"
          />
        </Link>
              <p className="text-green-600 font-medium mt-2">{product.name}</p>
              <p className="text-red-600 font-bold mt-1">Giá: {product.price}</p>
              <p className="text-sm text-gray-500 mt-1">Mã sản phẩm: {product.code}</p>
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
      </div>
  );
}
