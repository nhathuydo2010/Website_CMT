'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import BannerWrapper from '../../components/BannerWrapper';
import 'swiper/css';
const productsprinter = [
  {
    name: 'Toner Cartridge / Drum Cartridge Apeos A1860/A2560/A3060/A3560',
    price: 'Liên Hệ ',
    code: 'A1860',
    image: '/muc/A1860.png',
  },
  {
    name: 'Toner Cartridge A3570',
    price: 'Liên Hệ ',
    code: 'A3570',
    image: '/muc/a3570.png',
  },
  {
    name: 'Toner Cartridge / Drum Cartridge Apeos A4570/A5570',
    price: 'Liên Hệ',
    code: 'A4570',
    image: '/muc/a4570.png',
  },
  {
    name: 'Toner Cartridge / Drum Cartridge Apeos C2060/C2360/C2560/C3060',
    price: 'Liên Hệ',
    code: 'C2060',
    image: '/muc/C2060.png',
  },

  {
    name: 'Waste Toner Cartridge Apeos C2061/C2561/C2567/C3061/C3067/C3567',
    price: 'Liên Hệ',
    code: 'C2061',
    image: '/muc/C2061.png',
  },
  {
    name: 'Toner Cartridge Apeos C2061/C2561/C2567/C3061/C3067/C3567',
    price: 'Liên Hệ',
    code: 'C3061',
    image: '/muc/C3061.png',
  },
  {
    name: 'Toner Cartridge / Drum Cartridge Apeos C3070/C3570/C4570/C5570/C6570/C7070',
    price: 'Liên Hệ',
    code: 'C3070',
    image: '/muc/C3070.png',
  },
  // Thêm các sản phẩm trắng đen khác...
];


export default function MayTrangDenPage() {
  return (
    <div className="bg-white/90 max-w-[1300px] mx-auto rounded-2xl shadow-xl p-4 md:p-6 mt-10">
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
 MỰC  MỰC MÁY PHOTOCOPY – Fujifilm Apeos
</h1>

 {/* Tiêu đề phụ và breadcrumb giống ảnh */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-red-700"> MỰC MÁY PHOTOCOPY</h2>

        <div className="text-sm text-gray-500 mt-1">
  <Link href="/" className="mr-1 hover:underline text-gray-500">TRANG CHỦ</Link> / 
  <Link href="/ban-may-photocopy" className="font-semibold text-black">BÁN MỰC MÁY PHOTOCOPY</Link> 
  
</div>

        <p className="mt-2 text-[15px]  text-black">
          Tất cả 7 Máy Photocopy.
        </p>
      </div>
       <div className="w-full max-w-[1300px] mx-auto px-2 sm:px-4 py-6">
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
  {productsprinter.map((product, index) => (
    <div
      key={index}
      className=" rounded-2xl shadow-xl p-6 flex flex-col h-full hover:shadow-2xl transition-shadow duration-300 text-center"
    >

            <Link href={`/sanpham/muc/${product.code}`}>
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
    </div>
  );
}
