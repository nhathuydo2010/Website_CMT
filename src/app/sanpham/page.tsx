import Image from "next/image";

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

const productsColor = [
  {
    name: 'Máy Photocopy Apeos C7071',
    price: 'Liên Hệ',
    code: 'C7071',
    image: '/productsColor/Apeos C7071  C6571  C5571  C4571.png',
  },
  {
    name: 'Máy Photocopy Apeos C6571',
    price: 'Liên Hệ',
    code: 'C6571',
    image: '/productsColor/Apeos C7071  C6571  C5571  C4571.png',
  },
  {
    name: 'Máy Photocopy Apeos C5571',
    price: 'Liên Hệ',
    code: 'C5571',
    image: '/productsColor/Apeos C7071  C6571  C5571  C4571.png',
  },
  {
    name: 'Máy Photocopy Apeos C4571',
    price: 'Liên Hệ',
    code: 'C4571',
    image: '/productsColor/Apeos C7071  C6571  C5571  C4571.png',
  },

  {
    name: 'Máy Photocopy Apeos C3061',
    price: 'Liên Hệ',
    code: 'C3061',
    image: '/productsColor/Apeos C3061  C2561  C2061.png',
  },
  {
    name: 'Máy Photocopy Apeos C2561',
    price: 'Liên Hệ',
    code: 'C2561',
    image: '/productsColor/Apeos C3061  C2561  C2061.png',
  },
  {
    name: 'Máy Photocopy Apeos C2061',
    price: 'Liên Hệ',
    code: 'C2061',
    image: '/productsColor/Apeos C3061  C2561  C2061.png',
  },
  {
    name: 'Máy Photocopy Apeos C8180',
    price: 'Liên Hệ',
    code: 'C8180',
    image: '/productsColor/Apeos C8180-C7580-C6580.png',
  },{
    name: 'Máy Photocopy Apeos C7580',
    price: 'Liên Hệ',
    code: 'C7580',
    image: '/productsColor/Apeos C8180-C7580-C6580.png',
  },{
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

export default function SanPhamPage() {
  return (
    <div className="max-w-screen-xl mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold text-red-600 mb-4">Tất Cả Sản Phẩm</h1>

      {/* Sản phẩm trắng đen */}
      <div className="mb-10">
        <h2 className="bg-red-700 text-white px-4 py-2 text-lg font-bold">
          MÁY PHOTOCOPY TRẮNG ĐEN
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-4">
          {productsBlackWhite.map((product, index) => (
            <div key={index} className="border p-4 text-center flex flex-col justify-between min-h-[400px]">
              <Image
                src={product.image}
                alt={product.name}
                width={200}
                height={200}
                className="mx-auto object-contain h-[250px]"
              />
              <div className="mt-2">
                <p className="text-green-600 font-medium">{product.name}</p>
                <p className="text-red-600 font-bold mt-1">Giá: {product.price}</p>
                <p className="text-sm text-gray-500 mt-1">Mã sản phẩm: {product.code}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sản phẩm màu */}
      <div>
        <h2 className="bg-red-700 text-white px-4 py-2 text-lg font-bold">
          MÁY PHOTOCOPY MÀU
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-4">
          {productsColor.map((product, index) => (
            <div key={index} className="border p-4 text-center flex flex-col justify-between min-h-[400px]">
              <Image
                src={product.image}
                alt={product.name}
                width={200}
                height={200}
                className="mx-auto object-contain h-[250px]"
              />
              <p className="text-green-600 font-medium mt-2">{product.name}</p>
              <p className="text-red-600 font-bold mt-1">Giá: {product.price}</p>
              <p className="text-sm text-gray-500 mt-1">Mã sản phẩm: {product.code}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

