import Image from "next/image";
import SearchBarWithCategoryBoxed from "./SearchBar";
import { productsBlackWhite } from "./productsBlackWhite";
import { productsColor } from "./productsColor";

export default function LogoSearch() {
  return (
    <div className="w-full bg-white shadow py-3 px-4 sm:px-6 sticky top-0 z-50">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between max-w-screen-xl mx-auto space-y-3 md:space-y-0">

        {/* LOGO + TÊN CÔNG TY */}
       <div className="flex-shrink-0 flex items-center space-x-3 md:min-w-[280px]">
  <Image src="/logo.png" alt="Logo" width={80} height={60} />
  <span className="text-red-600 text-[15px] md:text-[20px] font-bold uppercase leading-snug whitespace-nowrap">
    CÔNG TY CỔ PHẦN MÁY TÍNH VIỆT NAM
  </span>
</div>

        {/* THANH TÌM KIẾM */}
        <div className="flex-grow md:mx-4">
  <SearchBarWithCategoryBoxed
    products={[
      ...productsBlackWhite.map((p) => ({ ...p, category: "Trắng Đen" })),
      ...productsColor.map((p) => ({ ...p, category: "Màu" })),
    ]}
    categories={["Trắng Đen", "Màu"]}
  />
</div>
        <div className="flex items-center justify-center md:justify-end space-x-6 text-blue-800 font-semibold">
          {/* Email */}
        <div className="flex items-center space-x-2">
    <Image src="/images/mail.png" alt="Mail Icon" width={20} height={20} />
    <a href="mailto:cmt-market@cmt.vn" className="hover:underline text-[16px] whitespace-nowrap">
      cmt-market@cmt.vn
    </a>
  </div>

  {/* Điện thoại */}
 <div className="flex items-center space-x-2">
    <Image src="/images/phone.png" alt="Phone Icon" width={20} height={20} />
    <a href="tel:0944333986" className="hover:underline text-[16px]">
      0944.333.986  
    </a>
  </div>
</div>

      </div>
    </div>
  );
}
