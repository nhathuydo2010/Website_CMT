import Image from "next/image";
import SearchBarWithCategoryBoxed from "./SearchBar";
import { productsBlackWhite } from "./productsBlackWhite";
import { productsColor } from "./productsColor";

export default function LogoSearch() {
  return (
    <div className="w-full bg-white shadow py-3 px-6 sticky top-0 z-50">
      <div className="flex items-center justify-between max-w-screen-xl mx-auto">
        
        {/* LOGO + TÊN CÔNG TY (BÊN TRÁI) */}
        <div className="flex items-center space-x-3">
          <Image src="/logo.png" alt="Logo" width={80} height={50} />
          <span className="text-red-600 text-lg font-bold uppercase">
            CÔNG TY CỔ PHẦN MÁY TÍNH VIỆT NAM
          </span>
        </div>

        {/* THANH TÌM KIẾM (Ở GIỮA) */}
        <div className="flex-1 mx-8">
          <SearchBarWithCategoryBoxed
            products={[
              ...productsBlackWhite.map((p) => ({ ...p, category: "Trắng Đen" })),
              ...productsColor.map((p) => ({ ...p, category: "Màu" })),
            ]}
            categories={["Trắng Đen", "Màu"]}
          />
          
        </div>

        {/* THÔNG TIN LIÊN HỆ (BÊN PHẢI) */}
        <div className="flex items-center space-x-2 text-blue-800 font-semibold">
        <Image src="/images/phone.png" alt="Phone Icon" width={30} height={30} />
        <div className="text-sm leading-tight">
          <a href="tel:0908100201" className="block hover:underline">0908.100.201</a>
          <a href="tel:02838226166" className="block hover:underline">028.382.261.66</a>
          <a href="tel:02838296594" className="block hover:underline">028.382.965.94</a>
        </div>
        </div>  
      </div>
    </div>
  );
}
