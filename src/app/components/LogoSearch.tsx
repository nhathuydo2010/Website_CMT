import Image from "next/image";
import SearchBarWithCategoryBoxed from "./SearchBar";
import { productsBlackWhite } from "./productsBlackWhite";
import { productsColor } from "./productsColor";

export default function LogoSearch() {
  return (
    <div className="w-full bg-white shadow py-2 px-3 sm:px-6 sticky top-0 z-50">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between max-w-screen-xl mx-auto gap-2 md:gap-0">
        
        {/* LOGO + TÊN CÔNG TY */}
        <div className="flex items-center space-x-3 justify-center md:justify-start">
          <Image src="/logo.png" alt="Logo" width={65} height={40} />
          <span className="text-red-600 text-center md:text-left text-sm md:text-lg font-bold uppercase leading-snug">
            CÔNG TY CỔ PHẦN MÁY TÍNH VIỆT NAM
          </span>
        </div>

        {/* THANH TÌM KIẾM */}
        <div className="w-full md:flex-1 md:mx-8">
          <SearchBarWithCategoryBoxed
            products={[
              ...productsBlackWhite.map((p) => ({ ...p, category: "Trắng Đen" })),
              ...productsColor.map((p) => ({ ...p, category: "Màu" })),
            ]}
            categories={["Trắng Đen", "Màu"]}
          />
        </div>

        {/* THÔNG TIN LIÊN HỆ */}
        <div className="flex items-center justify-center md:justify-end space-x-2 text-blue-800 font-semibold">
          <Image src="/images/phone.png" alt="Phone Icon" width={26} height={26} />
          <div className="text-xs md:text-sm leading-tight text-center md:text-left">
            <a href="tel:0908100201" className="block hover:underline">0908.100.201</a>
            <a href="tel:02838226166" className="block hover:underline">028.382.261.66</a>
            <a href="tel:02838296594" className="block hover:underline">028.382.965.94</a>
          </div>
        </div>  
      </div>
    </div>
  );
}
