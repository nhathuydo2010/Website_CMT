'use client';

import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export default function BannerSlider() {
  const banners = [
    "/banner1.png",
    "/banner3.png",
     "/banner2.png",
      "/banner7.png",
  ];

  return (
    <div className="w-full bg-white">
      {/* Kéo dài full màn hình */}
      <div className="w-full max-w-[1000px] mx-auto h-auto ">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={0}
          slidesPerView={1}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop={true}
          className="rounded-none"
        >
          {banners.map((src, index) => (
            <SwiperSlide key={index}>
              <Image
                src={src}
                alt={`Banner ${index + 1}`}
                width={2000}
                height={600}
                className="w-full h-auto object-cover"
                priority={index === 0}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
