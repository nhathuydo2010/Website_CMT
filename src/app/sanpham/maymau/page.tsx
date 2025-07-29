'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
const productsColor = [
  {
    name: 'Máy Photocopy Apeos C7071',
    price: 'Liên Hệ',
    code: 'C7071',
    image: '/productsColor/Apeos C7071-C6571-C5571-C4571.png',
  },
  {
    name: 'Máy Photocopy Apeos C6571',
    price: 'Liên Hệ',
    code: 'C6571',
    image: '/productsColor/Apeos C7071-C6571-C5571-C4571.png',
  },
  {
    name: 'Máy Photocopy Apeos C5571',
    price: 'Liên Hệ',
    code: 'C5571',
    image: '/productsColor/Apeos C7071-C6571-C5571-C4571.png',
  },
  {
    name: 'Máy Photocopy Apeos C4571',
    price: 'Liên Hệ',
    code: 'C4571',
    image: '/productsColor/Apeos C7071-C6571-C5571-C4571.png',
  },

  {
    name: 'Máy Photocopy Apeos C3061',
    price: 'Liên Hệ',
    code: 'C3061',
    image: '/productsColor/Apeos C3061-C2561-C2061.png',
  },
  {
    name: 'Máy Photocopy Apeos C2561',
    price: 'Liên Hệ',
    code: 'C2561',
    image: '/productsColor/Apeos C3061-C2561-C2061.png',
  },
  {
    name: 'Máy Photocopy Apeos C2061',
    price: 'Liên Hệ',
    code: 'C2061',
    image: '/productsColor/Apeos C3061-C2561-C2061.png',
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




export default function MayMAUPage() {
  return (
    <div className="px-4 sm:px-6 lg:px-10 py-6 max-w-7xl mx-auto">
      {/* Hình ảnh banner nằm sát navbar */}
      <Swiper
      modules={[Autoplay]}
      loop={true}
      autoplay={{
        delay: 5000, // 👈 Chuyển sau mỗi 5000ms = 5 giây
        disableOnInteraction: false,
      }}
      className="w-full"
    >
      <SwiperSlide>
        <Image
          src="/banner.png"
          alt="Banner 1"
          width={1584}
          height={396}
          className="w-full h-auto object-cover"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src="/banner4.png"
          alt="Banner 2"
          width={1584}
          height={396}
          className="w-full h-auto object-cover"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src="/banner5.png"
          alt="Banner 3"
          width={1584}
          height={396}
          className="w-full h-auto object-cover"
        />
      </SwiperSlide>
         <SwiperSlide>
        <Image
          src="/banner6.png"
          alt="Banner 3"
          width={1584}
          height={396}
          className="w-full h-auto object-cover"
        />
      </SwiperSlide>
    </Swiper>

      {/* Tiêu đề chính */}
      <h1 className="text-xl font-bold mb-6 text-center text-red-700 uppercase">
        Máy Photocopy Màu – Fujifilm Apeos
      </h1>


      {/* Tiêu đề phụ và breadcrumb giống ảnh */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-red-700">Máy photocopy màu</h2>

        <div className="text-sm text-gray-500 mt-1">
          <Link href="/" className="mr-1 hover:underline text-gray-500">TRANG CHỦ</Link> /
          <Link href="/ban-may-photocopy" className="font-semibold text-black">BÁN MÁY PHOTOCOPY MÀU</Link>

        </div>

        <p className="mt-2 text-[15px] text-black">
          Tất cả 11 Máy Photocopy.
        </p>
      </div>

      {/* Lưới sản phẩm */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {productsColor.map((product, index) => (
          <div
            key={index}
            className="border rounded-lg p-4 text-center flex flex-col justify-between hover:shadow-lg transition"
          >
            <Link href={`/sanpham/maymau/${product.code}`}>
              <Image
                src={product.image}
                alt={product.name}
                width={300}
                height={200}
                className="mx-auto object-contain h-[220px] w-auto cursor-pointer hover:scale-105 transition-transform"
              />
            </Link>
            <div className="mt-4">
              <p className="text-green-700 font-semibold">{product.name}</p>
              <p className="text-red-600 font-bold mt-1">Giá: {product.price}</p>
              <p className="text-gray-500 text-sm mt-1">Mã: {product.code}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
