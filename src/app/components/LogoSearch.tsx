import Image from "next/image";

export default function LogoSearch() {
  return (
    <div className="bg-white shadow-md py-4">
      <div className="max-w-screen-xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Logo + Tên công ty */}
        <div className="flex items-center space-x-3 text-center sm:text-left">
          <Image
            src="/logo.png"
            alt="Logo"
            width={80}
            height={40}
            className="object-contain"
          />
          <span className="text-red-600 text-lg md:text-xl font-bold uppercase leading-tight">
            Công Ty Cổ Phần Máy Tính Việt Nam
          </span>
        </div>

        {/* Ô tìm kiếm */}
        <div className="flex items-center space-x-2 w-full sm:w-auto">
          <input
            type="text"
            placeholder="Sản phẩm cần tìm"
            className="border border-gray-300 px-3 py-1.5 text-sm rounded w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <button className="bg-red-600 text-white px-4 py-1.5 text-sm rounded hover:bg-red-700 transition">
            Tìm kiếm
          </button>
        </div>
      </div>
    </div>
  );
}
