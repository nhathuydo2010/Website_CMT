'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import BannerWrapper from '../../components/BannerWrapper';
const productsColor = [
{
    name: 'Máy Photocopy Apeos C2061',
    price: 'Liên Hệ',
    code: 'C2061',
    image: '/productsColor/Apeos C3061-C2561-C2061.png',
  },
  {
    name: 'Máy Photocopy Apeos C2561',
    price: 'Liên Hệ',
    code: 'C2561',
    image: '/productsColor/Apeos C3061-C2561-C2061.png',
  },
  {
    name: 'Máy Photocopy Apeos C3061',
    price: 'Liên Hệ',
    code: 'C3061',
    image: '/productsColor/Apeos C3061-C2561-C2061.png',
  },
    {
    name: 'Máy Photocopy Apeos C2567',
    price: 'Liên Hệ',
    code: 'C2567',
    image: '/productsColor/Apeos C3567.png',
  },
   {
    name: 'Máy Photocopy Apeos C3067',
    price: 'Liên Hệ',
    code: 'C3067',
    image: '/productsColor/Apeos C3567.png',
  },
  {
    name: 'Máy Photocopy Apeos C3567',
    price: 'Liên Hệ',
    code: 'C3567',
    image: '/productsColor/Apeos C3567.png',
  },
  {
    name: 'Máy Photocopy Apeos C4571',
    price: 'Liên Hệ',
    code: 'C4571',
    image: '/productsColor/Apeos C7071-C6571-C5571-C4571.png',
  },
  {
    name: 'Máy Photocopy Apeos C5571',
    price: 'Liên Hệ',
    code: 'C5571',
    image: '/productsColor/Apeos C7071-C6571-C5571-C4571.png',
  },
  {
    name: 'Máy Photocopy Apeos C6571',
    price: 'Liên Hệ',
    code: 'C6571',
    image: '/productsColor/Apeos C7071-C6571-C5571-C4571.png',
  },
  {
    name: 'Máy Photocopy Apeos C6580',
    price: 'Liên Hệ',
    code: 'C6580',
    image: '/productsColor/Apeos C8180-C7580-C6580.png',
  },
  {
    name: 'Máy Photocopy Apeos C7071',
    price: 'Liên Hệ',
    code: 'C7071',
    image: '/productsColor/Apeos C7071-C6571-C5571-C4571.png',
  },
  {
    name: 'Máy Photocopy Apeos C7580',
    price: 'Liên Hệ',
    code: 'C7580',
    image: '/productsColor/Apeos C8180-C7580-C6580.png',
  },
  {
    name: 'Máy Photocopy Apeos C8180',
    price: 'Liên Hệ',
    code: 'C8180',
    image: '/productsColor/Apeos C8180-C7580-C6580.png',
  },
];
export default function MayMAUPage() {
  return (
    
    <div className="w-full">
    <div className="bg-white/90 max-w-[1300px] mx-auto rounded-2xl shadow-xl p-4 md:p-6 mt-10">
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
    <BannerWrapper />
    
    </div>
    
      {/* Tiêu đề chính */}
      
<div className="max-w-[1300px] mx-auto mt-10">
      {/* ===== KHỐI SẢN PHẨM TÁCH RIÊNG NHƯ HÌNH 2 ===== */}
<section className="mt-8">
   <a
            
            className="block bg-red-600 text-white text-lg font-bold py-2 text-center rounded-full shadow-2xl hover:bg-red-700 transition mb-6"
          >
            MÁY PHOTOCOPY MÀU – FUJIFILM APEOS
          </a>
    
  <div className="rounded-2xl bg-white shadow-xl p-4 md:p-6">
  

    {/* Lưới sản phẩm */}
    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {productsColor.map((product, index) => (
        <div
          key={index}
          className="rounded-2xl shadow-xl p-4 flex flex-col h-full hover:shadow-2xl transition-shadow duration-300 text-center"
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
</section>
    </div>
    </div>
  );
}
