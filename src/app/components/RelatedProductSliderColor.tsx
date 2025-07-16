'use client';

import { productsColor } from './productsColor'; // đường dẫn đúng tới file dữ liệu sản phẩm màu
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Image from 'next/image';
import Link from 'next/link';
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function RelatedProductSliderColor() {
  return (
    <div className="mt-10 relative">
      <h2 className="text-xl font-bold text-black mb-4 uppercase">Sản phẩm màu nổi bật</h2>

      {/* Nút trái */}
      <div className="swiper-button-prev-color absolute -left-5 top-[55%] z-10 w-10 h-10 bg-white border rounded-full flex items-center justify-center shadow cursor-pointer">
        <ChevronLeft className="w-5 h-5 text-blue-600" />
      </div>

      {/* Nút phải */}
      <div className="swiper-button-next-color absolute -right-5 top-[55%] z-10 w-10 h-10 bg-white border rounded-full flex items-center justify-center shadow cursor-pointer">
        <ChevronRight className="w-5 h-5 text-blue-600" />
      </div>

      <Swiper
        spaceBetween={20}
        slidesPerView={2}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
        modules={[Navigation]}
        navigation={{
          nextEl: '.swiper-button-next-color',
          prevEl: '.swiper-button-prev-color',
        }}
      >
        {productsColor.map((item) => (
          <SwiperSlide key={item.code}>
            <div className="border rounded-md p-3 bg-white shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out">
              <Image
                src={item.image}
                alt={item.name}
                width={300}
                height={200}
                className="w-full h-[180px] object-contain mb-2"
              />
              <p className="text-black font-bold text-sm">{item.name}</p>
              <p className="text-red-600 font-bold text-sm">{item.price}</p>
              <Link href={`/sanpham/maymau/${item.code}`}>
                <span className="text-blue-600 text-sm hover:underline">Xem chi tiết</span>
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
