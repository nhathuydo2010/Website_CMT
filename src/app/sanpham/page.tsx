
import Image from "next/image";
import Link from "next/link";
import BannerSlider from '../components/BannerSlider';
import BannerWrapper from '../components/BannerWrapper';
export default function Header() {
  const productsBlackWhite = [
    {
      name: 'Máy Photocopy Apeos 2560',
      price: 'Liên Hệ',
      code: '2560',
      image: '/productsBlackWhite/Apeos 356030602560.png',
    },
    {
      name: 'Máy Photocopy Apeos 3060',
      price: 'Liên Hệ',
      code: '3060',
      image: '/productsBlackWhite/Apeos 356030602560.png',
    },
    {
      name: 'Máy Photocopy Apeos 3560',
      price: 'Liên Hệ',
      code: '3560',
      image: '/productsBlackWhite/Apeos 356030602560.png',
    },
    {
      name: 'Máy Photocopy Apeos 4570',
      price: 'Liên Hệ ',
      code: '4570',
      image: '/productsBlackWhite/Apeos 5570 4570.png',
    },
    {
      name: 'Máy Photocopy Apeos 5570',
      price: 'Liên Hệ ',
      code: '5570',
      image: '/productsBlackWhite/Apeos 5570 4570.png',
    },
    {
      name: 'Máy Photocopy Apeos 6580',
      price: 'Liên Hệ',
      code: '6580',
      image: '/productsBlackWhite/Apeos 75806580.png',
    },
    {
      name: 'Máy Photocopy Apeos 7580',
      price: 'Liên Hệ',
      code: '7580',
      image: '/productsBlackWhite/Apeos 75806580.png',
    },
    // Thêm các sản phẩm trắng đen khác...
  ];

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




  return (

    <div className="w-full">

      <div className="bg-white/90 max-w-[1300px] mx-auto rounded-2xl shadow-xl p-4 md:p-6 mt-10 ">
        <BannerSlider />
        <BannerWrapper />
      </div>

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
                      <p className="text-sm text-gray-500 mt-1">Mã sản phẩm: {product.code}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
      {/* MỰC MÁY IN */}
      <div className="bg-white/90 max-w-[1300px] mx-auto rounded-2xl shadow-xl p-4 md:p-6 mt-10" id="muc">
        <div className="w-full max-w-[1300px] mx-auto">
          <a
            href={`/sanpham/muc/`}
            className="block bg-red-600 text-white text-lg font-bold py-2 text-center rounded-full shadow-2xl hover:bg-red-700 transition mb-6"
          >
            MỰC MÁY IN
          </a>
        </div>
        <div className="w-full max-w-[1300px] mx-auto px-2 sm:px-4 py-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {productsprinter.map((product, index) => (
              <div
                key={index}
                className="rounded-2xl shadow-xl p-4 flex flex-col h-full hover:shadow-2xl transition-shadow duration-300 text-center"
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
    </div>

  );
}

