import Image from "next/image";

export default function LogoSearch() {
  return (
    <div className="flex justify-between items-center px-90 py-2 bg-white shadow">
      <div className="flex items-center space-x-3">
        <Image src="/logo.png" alt="Logo" width={90} height={50} />
        <span className="text-orange-600 text-xl font-bold uppercase">
          Công Ty CỔ PHẦN MÁY TÍNH VIỆT NAM
        </span>
      </div>
      <div className="flex items-center space-x-2">
        <input
          type="text"
          placeholder="Sản phẩm cần tìm"
          className="border border-gray-300 px-2 py-1 text-sm rounded focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <button className="bg-red-500 text-white px-3 py-1 text-sm rounded hover:bg-red-600">
          Tìm kiếm
        </button>
      </div>
    </div>
  );
}
