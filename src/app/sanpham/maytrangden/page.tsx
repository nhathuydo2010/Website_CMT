'use client';

import Image from 'next/image';
import Link from 'next/link';

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


export default function MayTrangDenPage() {
  return (
    <div className="px-4 py-6">
      <h1 className="text-xl font-bold mb-6 text-center text-red-700 uppercase">
        Máy Photocopy Màu – Fujifilm Apeos
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {productsBlackWhite.map((product, index) => (
          <div
            key={index}
            className="border rounded-lg p-4 text-center flex flex-col justify-between hover:shadow-lg transition"
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
