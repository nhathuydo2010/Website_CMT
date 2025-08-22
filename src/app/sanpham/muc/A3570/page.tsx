// pages/sanpham/maytrangden/7580.tsx
'use client';

import Image from 'next/image';

// import { useState } from 'react';
import Relatedproductsprinter from '../../../components/Relatedproductsprinter'


const product = {
  name: "Toner Cartridge A3570",
  price: "Liên Hệ",
  image: "/muc/A3570.png",

};

export default function Product7580Page() {
  // const [showFullDescription, setShowFullDescription] = useState(false);
  // const [showFullSpecs, setShowFullSpecs] = useState(false);

  return (
    <div className="bg-white/90 max-w-[1300px] mx-auto rounded-2xl shadow-xl p-4 md:p-6 mt-10">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="relative w-full lg:w-1/2 p-4">
          <Image
            src={product.image}
            alt={product.name}
            width={500}
            height={400}
            className="w-full h-auto object-contain"
          />
          <span className="absolute top-2 left-2 bg-red-600 text-white text-sm px-2 py-1 rounded-full font-bold">
            Mới 100%+
          </span>
        </div>

        {/* Mô tả ngắn */}
        <div className="w-full lg:w-1/2">
          <h1 className="text-2xl font-bold text-red-600 mb-2">{product.name}</h1>
          <p className="text-xl text-green-600 font-semibold mb-4">Giá: {product.price}</p>

        

          {/* Cam kết bán hàng */}
          <div className="mt-6 border border-red-600 rounded-lg overflow-hidden shadow-md w-full max-w-[350px]">
            <div className="bg-red-700 text-white px-4 py-2 font-bold flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h- w-5 fill-current" viewBox="0 0 24 24"><path d="M5 3a2 2 0 0 0-2 2v14l5-3 5 3V5a2 2 0 0 0-2-2H5zm8 0a2 2 0 0 1 2 2v14l5-3 5 3V5a2 2 0 0 0-2-2h-10z" /></svg>
              Cam kết bán hàng
            </div>
            <ul className="p-4 text-sm text-gray-800 space-y-2">
              <li className="flex items-start gap-2">
                <span>📦</span>
                <span>Hàng chính hãng Fujifilm</span>
              </li>

              <li className="flex items-start gap-2">
                <span>🚚</span>
                <span>giao hàng miễn phí trong nội thành TP.HCM</span>
              </li>

            </ul>
          </div>
        </div>
      </div>
      <Relatedproductsprinter />
     

      </div>
  );
}