
import Image from "next/image";
import Link from "next/link";
import BannerSlider from './components/BannerSlider';
import BannerWrapper from './components/BannerWrapper';
import { motion } from "framer-motion";
export default function Header() {
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



  return (

    <div className="w-full">

      {/* ===== HERO VIDEO COVER (kiểu Flatsome) ===== */}
      <section className="relative min-h-[85vh] bg-black text-white">
        <video
          className="pointer-events-none absolute inset-0 h-full w-full object-cover "
          src="/videos/hero.mp4"     // đặt file trong public/videos/hero.mp4
          autoPlay
          playsInline
          muted
          loop
          preload="metadata"
          poster="/images/hero-poster.jpg" // tùy chọn
        />
        {/* overlays */}
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60" />

        {/* content */}
        <div className="relative z-10 grid min-h-[100dvh] place-items-center px-4">
    <div className="mx-auto max-w-3xl text-center space-y-6">
      <h1 className="font-serif font-extrabold leading-tight tracking-wide
                     text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white">
        PHOTOCOPY FUJIFILM
      </h1>

      <p className="text-white/90 text-base sm:text-lg">
        Kỷ nguyên mới cùng Máy Photocopy Apeos
      </p>

      <div className="flex justify-center gap-4">
        {/* Nút chính (màu nổi) */}
        <Link
          href="#mau"
          className="rounded px-6 py-3 text-sm font-semibold uppercase tracking-wider
                     bg-red-500 text-white hover:bg-yellow-600 transition"
        >
          Shop Now
        </Link>

        {/* Nút phụ (viền trắng) */}
        <Link
          href="lienhe"
          className="rounded px-6 py-3 text-sm font-semibold uppercase tracking-wider
                     border border-white text-white hover:bg-white/10 transition"
        >
          Contact Now
        </Link>
      </div>
    </div>
  </div>
      </section>


      {/* MÁY PHOTOCOPY TRẮNG ĐEN */}
      <div className="bg-white/90 max-w-[1300px] mx-auto rounded-2xl shadow-xl p-4 md:p-6 mt-10" id="mau">

        <div className="w-full max-w-[1300px] mx-auto">
          <a
            href={`/sanpham/maytrangden/`}
            className="block bg-red-600 text-white text-lg font-bold py-2 text-center rounded-full shadow-2xl hover:bg-red-700 transition mb-6"
          >
            MÁY PHOTOCOPY TRẮNG ĐEN
          </a>
        </div>
        <div className="w-full max-w-[1300px] mx-auto px-4 py-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {productsBlackWhite.map((product, index) => (
              <div
                key={index}
                id={product.code}
                className=" rounded-2xl shadow-xl p-4 flex flex-col h-full hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="flex flex-col h-full">
                  {/* Hình ảnh sản phẩm */}
                  <Link href={`/sanpham/maytrangden/${product.code}`}>
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={200}
                      height={200}
                      className="mx-auto object-contain h-[250px] w-auto cursor-pointer hover:scale-105 transition-transform"
                    />
                  </Link>

                  {/* Nội dung mô tả */}
                  <div className="mt-4 flex-grow text-center">
                    <p className="text-green-600 font-medium text-base">
                      {product.name}
                    </p>
                    <p className="text-red-600 font-bold text-base mt-1">
                      Giá: {product.price}
                    </p>
                    <p className="text-gray-600 text-sm mt-1">
                      Mã sản phẩm: {product.code}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* MÁY PHOTOCOPY MÀU */}
      <div className="bg-white/90 max-w-[1300px] mx-auto rounded-2xl shadow-xl p-4 md:p-6 mt-10" id="mau">
        <div className="w-full max-w-[1300px] mx-auto">
          <a
            href={`/sanpham/maymau/`}
            className="block bg-red-600 text-white text-lg font-bold py-2 text-center rounded-full shadow-2xl hover:bg-red-700 transition mb-6"
          >
            MÁY PHOTOCOPY MÀU
          </a>
          <div className="w-full max-w-[1300px] mx-auto px-2 sm:px-4 py-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {productsColor.map((product, index) => (
                <div
                  key={index}
                  className=" rounded-2xl shadow-xl p-4 flex flex-col h-full hover:shadow-2xl transition-shadow duration-300"
                >
                  <div className="flex flex-col h-full">
                    {/* Hình ảnh sản phẩm */}
                    <Link href={`/sanpham/maymau/${product.code}`}>
                      <Image
                        src={product.image}
                        alt={product.name}
                        width={200}
                        height={200}
                        className="mx-auto object-contain h-[250px] w-auto cursor-pointer hover:scale-105 transition-transform"
                      />
                    </Link>
                    {/* Thông tin sản phẩm */}
                    <div className="mt-4 flex-grow text-center">
                      <p className="text-green-600 font-medium text-base">{product.name}</p>
                      <p className="text-red-600 font-bold text-base mt-1">Giá: {product.price}</p>
                      <p className="text-sm text-gray-500 mt-1">Mã d sản phẩm: {product.code}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
