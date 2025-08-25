// pages/sanpham/maymau/C2561.tsx
'use client';

import Image from 'next/image';

import { useState } from 'react';
import RelatedProductSliderColor from '../../../components/RelatedProductSliderColor'
// export const productsColor = [
//   {
//     name: 'Máy Photocopy Apeos C7071',
//     price: 'Liên Hệ',
//     code: 'C7071',
//     image: '/productsColor/Apeos C7071-C6571-C5571-C4571.png',
//   },
//   {
//     name: 'Máy Photocopy Apeos C6571',
//     price: 'Liên Hệ',
//     code: 'C6571',
//     image: '/productsColor/Apeos C7071-C6571-C5571-C4571.png',
//   },
//   // Add more products as needed
// ];
const product = {
  name: "Máy Photocopy Apeos C2561",
  price: "Liên Hệ",
  image: "/productsColor/Apeos C3061-C2561-C2061.png",
 specs: [
  'Kiểu: Bảng điều khiển',
  'Dung lượng bộ nhớ: 4 GB',
  'Dung lượng thiết bị lưu trữ: Model-CPS-ST: 3,6 GB (Tùy chọn: 256 GB)',
  'Tính năng màu: Đầy đủ màu sắc',
  'Độ phân giải quét: 600 x 600 dpi',
  'Độ phân giải in ấn: 1.200 x 2.400 dpi',
  'Thời gian khởi động: 26 giây hoặc ít hơn (nhiệt độ phòng là 23°C)',
  'Khổ giấy bản gốc: Tối đa A3, 11 x 17”, 297 x 432 mm cho cả Tờ bản in và Sách',
  'Khổ giấy: Khay 1 > A5 > A3 Khổ Giấy Tùy Chỉnh; Khay 1+3+4: Tối đa A4, Letter, Tối thiểu JIS B5; Khay tay: Tối đa: SRA3 (320 x 450 mm), 12 x 19” (305 x 483 mm), A3; Tối thiểu: A5',
  'Thời gian ra bản sao chụp đầu tiên: Đen trắng 4,1 giây (A4 LEF / Chế độ ưu tiên đơn sắc), Màu 5,4 giây (A4 LEF / Chế độ ưu tiên màu)',
  'Tốc độ sao in (A4 LEF): Đen trắng 25 trang/phút – Màu 25 trang/phút',
  'Dung lượng khay giấy: Chuẩn: 520 tờ x 1 Khay + Khay tay 96 tờ; Tùy chọn: Mô-đun 1 khay / Mô-đun 1 khay cót: 520 tờ x 1 Khay, Mô-đun 3 khay: 520 tờ x 3 Khay',
  'Trọng lượng giấy: 52 – 300 gsm',
  'Nguồn điện: AC220–240V ±10%, 8A, 50/60Hz',
  'Mức tiêu thụ điện: 1,76 kW (Chế độ nghỉ: 0,3 W, Chế độ sẵn sàng: 66 W)',
  'Kích thước cơ bản: Rộng 577 x Sâu 659 x Cao 775 mm',
  'Trọng lượng cơ bản: 60 kg',
  'Độ phân giải in (PCL): 1.200 x 2.400 dpi (chuẩn, chất lượng cao, độ phân giải cao)',
  'Độ phân giải in (PostScript): 1.200 x 2.400 dpi (chuẩn, chất lượng cao, độ phân giải cao)',
  'Ngôn ngữ mô tả trang: PCL5 / PCL6 (chuẩn), Adobe PostScript 3 (tùy chọn)',
  'Hệ điều hành hỗ trợ (PCL/Mac OS X): Windows 11 (64 bit), Windows 10 (32/64 bit), Windows Server 2025/2022/2019/2016 (64 bit), MacOS 15/14/13/12/11',
  'Hệ điều hành hỗ trợ (PostScript): Windows 11 (64 bit), Windows 10 (32/64 bit), Windows Server 2025/2022/2019/2016 (64 bit), MacOS 15/14/13/12/11',
  'Kết nối: Ethernet 1000BASE-T / 100BASE-TX / 10BASE-T, USB 3.0 / USB 2.0, LAN không dây (tùy chọn)',
  'Kiểu quét: Màu',
  'Độ phân giải quét: 600 x 600 dpi, 400 x 400 dpi, 300 x 300 dpi, 200 x 200 dpi',
  'Tốc độ quét: Phù hợp với tốc độ bộ nạp và đảo bản gốc tự động',
  'Khổ giấy bản gốc (DADF): Tối đa A3, 11 x 17 inch; Tối thiểu A6',
  'Trọng lượng giấy (DADF): 38 – 128 gsm (2 mặt: 50 – 128 gsm)',
  'Dung lượng nạp (DADF): 110 tờ',
  'Tốc độ sao chụp qua DADF (A4 LEF, 1 mặt): Đen trắng 25 trang/phút – Màu 25 trang/phút',
  'Tốc độ quét (DADF): Đen trắng 55 trang/phút – Màu 55 trang/phút (Tài liệu tiêu chuẩn A4 LEF, 200 dpi, Lưu trữ vào thư mục)'
],

};

export default function ProductC2561Page() {
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [showFullSpecs, setShowFullSpecs] = useState(false);


  return (
    <div className="bg-white/90 max-w-[1300px] mx-auto rounded-2xl shadow-xl p-4 md:p-6 mt-10">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="relative w-full lg:w-1/2  p-4">
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
          <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
            <li>04 khay tự động tùy chọn & 01 khay tay (96 tờ)</li>
            <li>Copy màu/In màu/Scan màu</li>
            <li>Bộ nạp và đảo bản gốc tự động (DADF)</li>
            <li>Bộ đảo bản sao (Duplex)</li>
            <li>Bộ nhớ: tối đa 4GB</li>
            <li>Ổ cứng SSD: 256GB( tùy chọn)</li>
            <li>Màn hình cảm ứng màu 7 inch</li>
          </ul>
          <div className="relative w-full max-w-[350px] border border-red-600 mt-4 rounded">
            {/* Ruy băng khuyến mãi */}
            <div className="absolute -top-[1px] -left-[12px] z-10">
              <div className="relative flex items-center bg-red-500 text-white font-bold text-sm h-[32px] pl-3 pr-5 rounded-tr-md">
                <span className="mr-2">🎁</span> KHUYẾN MẠI

                {/* Đuôi ruy băng bên phải */}
                <div className="absolute -right-[14px] top-0 w-0 h-0 border-t-[16px] border-b-[16px] border-l-[14px] border-t-transparent border-b-transparent border-l-white" />
              </div>

              {/* Gấp ruy băng ở góc trái */}
              <div className="absolute bottom-0 left-0 w-0 h-0 border-l-[10px] border-t-[10px] border-l-red-700 border-t-transparent" />
            </div>

            {/* Nội dung khuyến mãi bên trong */}
            <div className="pt-8 pb-3 px-3 text-[15px] text-gray-800">
              <strong>🎁 Bộ quà tặng bao gồm:</strong>
              <h1 >🔖 Chân tủ để máy VN</h1>
            </div>
          </div>

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
      <RelatedProductSliderColor />
      {/* 🔻 Mô tả & Thông số kỹ thuật trong cùng 1 hàng */}
      <div className="mt-12 flex flex-col lg:flex-row gap-8">

        {/* Cột trái: Mô tả sản phẩm */}
        <div className="lg:w-2/3 w-full">
          <h2 className="text-xl font-bold text-black mb-4 uppercase">Mô Tả Sản Phẩm</h2>
          <h3 className="text-[30px] font-bold text-red-700 mb-2">
            Máy Photocopy Apeos C2561
          </h3>
          <h4 className="text-lg font-semibold text-blue-700 mb-2">
            Dòng máy cao cấp từ FUJIFILM - Giải pháp in ấn thông minh cho văn phòng hiện đại
          </h4>
          <p className="text-black text-justify mb-4">
            Được thiết kế để tăng tốc hành trình chuyển đổi số của bạn (DX), dòng Apeos mới với các tính năng
            tích hợp thông minh và liền mạch sẽ chứng minh được rằng đây là đối tác kỹ thuật số đáng tin cậy.
          </p>

          <div className="w-full flex justify-center my-6">
            <Image
              src="/images/Apeos C3061C2561C2061.png"
              alt="Máy Photocopy Apeos 5570 minh họa"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="mt-12 transition-all duration-500 ease-in-out">
            {showFullDescription && (
              <div className="animate-fade-in">
                <div className="mt-12">
                  <h2 className="text-[22px] font-bold text-black mb-6 uppercase">
                    Các giải pháp hoàn toàn có khả năng mở rộng giúp bạn khởi đầu hành trình chuyển đổi số
                  </h2>

                  <div className="space-y-6 text-[15px] text-black leading-relaxed">
                    <div>
                      <h3 className="font-semibold text-cyan-700 mb-2">
                        Thiết kế nhỏ gọn – Tinh tế – Dễ sử dụng
                      </h3>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Kích thước chỉ 577 x 659 mm, phù hợp với mọi không gian văn phòng.</li>
                        <li>Màn hình cảm ứng 7 inch thân thiện, tùy biến ứng dụng theo người dùng</li>
                        <li>Hỗ trợ kết nối thông minh qua QR Code, NFC, AirPrint, Mopria, và ứng dụng Print Utility</li>
                      </ul>
                      <Image src="/images/vanhanh8.png" alt="Bố trí linh hoạt" className="mx-auto rounded-lg shadow mt-3" />
                    </div>

                    <div>
                      <h3 className="font-semibold text-cyan-700 mb-2">
                        Hiệu suất mạnh mẽ – In màu chuyên nghiệp
                      </h3>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Tốc độ in tùy model:</li>
                        <ul className="list-none pl-1 space-y-1">
                          <li>→ Apeos C3061: 30 trang/phút (màu & đen trắng)</li>
                          <li>→ Apeos C2561: 25 trang/phút</li>
                          <li>→ Apeos C2061: 20 trang/phút</li>
                        </ul>
                        <li>Độ phân giải in: 1.200 x 2.400 dpi, cho hình ảnh sắc nét, màu sắc chuẩn xác</li>
                        <li>Sao chụp và quét hai mặt tự động tốc độ cao (tối đa 80 trang/phút)</li>

                      </ul>
                    </div>

                    <div>
                      <h3 className="font-semibold text-cyan-700 mb-2">
                        Kích thước nhỏ gọn phù hợp với mọi không gian văn phòng
                      </h3>
                      <p>Thiết kế nhỏ gọn với chiều rộng 577 mm và chiều sâu 659 mm
                        phù hợp với mọi nơi, kể cả những không gian chật hẹp, giúp tối đa
                        hóa việc sử dụng không gian văn phòng.</p>

                    </div>
                    <div>
                      <h3 className="font-semibold text-cyan-700 mb-2">
                        Sản xuất tài liệu quảng cáo nội bộ và theo yêu cầu
                      </h3>
                      <p>Hỗ trợ nhiều kích thước và địnhlượng giấy khác nhau, cho bạn sự linh hoạt trong việc cá nhân hóa và in trên phong bì, thư trực tiếp, áp phích, biểu ngữ quảng cáo hoặc màn hình POP dài .</p>
                      <p className="text-sm italic mt-1">
                        1: Định lượng giấy từ 52 đến 300 gsm.
                        <br />2: Giấy dài lên tới 297 x 1.200 mm
                        <Image src="/images/vanhanh9.png" alt="Bố trí linh hoạt" className="w-full max-w-[300px] mx-auto rounded-lg shadow mt-3" />
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-cyan-700 mb-2">
                        Bảng điều khiển 7 inch dễ sử dụng
                      </h3>
                      <ul className="list-disc pl-5 space-y-1">
                        <li> Thao tác dễ dàng và trực quan bằng cách chạm ngón tay</li>
                        <li>Màn hình chính cho phép tùy chỉnh ứng dụng thường dùng theo sở thích cá nhân</li>
                        <li>Có thể “ghim” cài đặt hay dùng để truy cập nhanh mỗi ngày</li>
                        <li>Hỗ trợ kết nối thiết bị di động qua quét mã QR hoặc NFC</li>
                        <li>Dễ dàng thực hiện các tác vụ Sao chụp, In, Quét, Fax bằng ứng dụng Print Utility</li>
                        <Image src="/images/vanhanh10.png" alt="Bố trí linh hoạt" className="w-full max-w-[400px] mx-auto rounded-lg shadow mt-3" />
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-semibold text-cyan-700 mb-2">
                        Số hóa nhanh các bản gốc dung lượng lớn
                      </h3>
                      <ul className="list-disc pl-5 space-y-1">
                        <li> Quét hình 1 lượt, 2 mặt, lên đến 80 trang/phút</li>
                        <li>Hỗ trợ quét tài liệu khổ nhỏ (49 x 85 mm), séc dày và biên lai giấy mỏng (38 đến 128 gsm).</li>
                        <li>Tài liệu đã quét có thể được chuyển tới e-mail, máy tính hoặc máy chủ dùng chung</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-semibold text-cyan-700 mb-2">
                        Quét tài liệu một cách đơn giản
                      </h3>
                      <p>Với ScanAuto, ứng dụng bổ trợ thiết bị đa chức năng được cài đặt
                        sẵn, bạn có thể dễ dàng gửi dữ liệu đã quét chỉ bằng một nút bấm
                        và thiết bị đa chức năng sẽ tự động chọn cài đặt quét (chẳng hạn
                        như hướng tài liệu, 1 mặt hoặc 2 mặt) phù hợp với tài liệu đó.</p>
                      <p>Tên tệp có thể được chỉ định từ các cài đặt trước trên màn hình
                        giao diện người dùng, đảm bảo các tệp được quét sẽ không bị thất
                        lạc trên máy tính.</p>
                      <Image src="/images/vanhanh11.png" alt="Bố trí linh hoạt" className="w-full max-w-[400px] mx-auto rounded-lg shadow mt-3" />
                    </div>
                  </div>
                </div>

              </div>
            )}

            <div className="flex justify-center mt-6">
              <button
                onClick={() => setShowFullDescription(!showFullDescription)}
                className="px-6 py-2 border border-blue-500 text-blue-600 rounded-full hover:bg-blue-100 transition"
              >
                {showFullDescription ? "Ẩn bớt ▲" : "XEM THÊM ▼"}
              </button>
            </div>
          </div>

          {showFullDescription && (
            <div className="mt-10 animate-fade-in">
              {/* giữ nguyên nội dung mô tả chi tiết của bạn ở đây */}
            </div>
          )}
        </div>

        {/* Cột phải: Thông số kỹ thuật */}
        <div className="lg:w-1/3 w-full">
          <h2 className="text-xl font-bold text-black mb-4 uppercase text-center">Thông Số Kỹ Thuật</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto border border-gray-300 text-sm text-black">
              <tbody>
                {(showFullSpecs ? product.specs : product.specs.slice(0, 6)).map((line, index) => {
                  const parts = line.split(":");
                  const isPair = parts.length > 1;
                  return (
                    <tr key={index} className="even:bg-gray-50">
                      <td className="border border-gray-300 font-medium px-3 py-2 w-1/3 bg-gray-100 text-black">
                        {isPair ? parts[0].trim() : "Thông tin khác"}
                      </td>
                      <td className="border border-gray-300 px-3 py-2 text-black">
                        {isPair ? parts.slice(1).join(":").trim() : line}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            {/* Nút XEM THÊM / ẨN BỚT */}
            <div className="flex justify-center mt-4">
              <button
                onClick={() => setShowFullSpecs(!showFullSpecs)}
                className="px-6 py-2 border border-blue-500 text-blue-600 rounded-full hover:bg-blue-100 transition"
              >
                {showFullSpecs ? "Ẩn bớt ▲" : "XEM THÊM ▼"}
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>

  );
}