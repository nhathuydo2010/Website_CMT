'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import BannerWrapper from '../../components/BannerWrapper';
import 'swiper/css';
const productsBlackWhite = [
  {
    name: 'Máy Photocopy Apeos A5570',
    price: 'Liên Hệ ',
    code: '5570',
    image: '/productsBlackWhite/Apeos 5570 4570.png',
  },
  {
    name: 'Máy Photocopy Apeos A4570',
    price: 'Liên Hệ ',
    code: '4570',
    image: '/productsBlackWhite/Apeos 5570 4570.png',
  },
  {
    name: 'Máy Photocopy Apeos A7580',
    price: 'Liên Hệ',
    code: '7580',
    image: '/productsBlackWhite/Apeos 75806580.png',
  },
  {
    name: 'Máy Photocopy Apeos A6580',
    price: 'Liên Hệ',
    code: '6580',
    image: '/productsBlackWhite/Apeos 75806580.png',
  },

  {
    name: 'Máy Photocopy Apeos A3560',
    price: 'Liên Hệ',
    code: '3560',
    image: '/productsBlackWhite/Apeos 356030602560.png',
  },
  {
    name: 'Máy Photocopy Apeos A3060',
    price: 'Liên Hệ',
    code: '3060',
    image: '/productsBlackWhite/Apeos 356030602560.png',
  },
  {
    name: 'Máy Photocopy Apeos A2560',
    price: 'Liên Hệ',
    code: '2560',
    image: '/productsBlackWhite/Apeos 356030602560.png',
  },
  // Thêm các sản phẩm trắng đen khác...
];


export default function MayTrangDenPage() {
  return (
    <div className="bg-white/90 max-w-[1100px] mx-auto rounded-2xl shadow-xl p-4 md:p-6 mt-10">
 <div className="mb-4">
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
      <BannerWrapper />
      </div>
     <h1 className="text-xl font-bold mb-6 text-center text-red-700 uppercase">
  Máy Photocopy Trắng Đen – Fujifilm Apeos
</h1>

 {/* Tiêu đề phụ và breadcrumb giống ảnh */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-red-700">Máy photocopy trắng đen </h2>

        <div className="text-sm text-gray-500 mt-1">
  <Link href="/" className="mr-1 hover:underline text-gray-500">TRANG CHỦ</Link> / 
  <Link href="/ban-may-photocopy" className="font-semibold text-black">BÁN MÁY PHOTOCOPY MÀU</Link> 
  
</div>

        <p className="mt-2 text-[15px]  text-black">
          Tất cả 7 Máy Photocopy.
        </p>
      </div>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
  {productsBlackWhite.map((product, index) => (
    <div
      key={index}
      className=" rounded-2xl shadow-xl p-4 flex flex-col h-full hover:shadow-2xl transition-shadow duration-300 text-center"
    >

            <Link href={`/sanpham/maytrangden/${product.code}`}>
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
