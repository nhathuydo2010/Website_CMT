// pages/sanpham/maymau/C4571.tsx
'use client';

import Image from 'next/image';

import { useState } from 'react';
import RelatedProductSliderColor from '../../../components/RelatedProductSliderColor'

const product = {
  name: "Máy Photocopy Apeos C4571",
  price: "Liên Hệ",
  image: "/productsColor/Apeos C7071-C6571-C5571-C4571.png",
  specs: [
  'Kiểu: Bảng điều khiển',
  'Dung lượng bộ nhớ: 6 GB',
  'Dung lượng thiết bị lưu trữ: 256 GB',
  'Tính năng màu: Đầy đủ màu sắc',
  'Độ phân giải quét: 600 x 600 dpi',
  'Độ phân giải in ấn: 1.200 x 2.400 dpi (Văn bản-Ảnh), 600 x 600 dpi (Văn bản / Bản đồ)',
  'Thời gian khởi động: 13 giây hoặc ít hơn (nhiệt độ phòng là 23°C)',
  'Khổ giấy bản gốc: Tối đa A3, 11 x 17”, 297 x 432 mm cho cả Tờ bản in và Sách',
  'Khổ giấy: Khay 1+2: A5 > A3 Khổ Giấy Tùy Chỉnh; Khay 3+4: Tối đa A4, Letter, Tối thiểu JIS B5; Khay tay: Tối đa: SRA3 (320 x 450 mm), 12 x 19” (305 x 483 mm), A3, Tối thiểu: A5',
  'Thời gian ra bản sao chụp đầu tiên: Đen trắng 4,1 giây (A4 LEF / Chế độ ưu tiên đơn sắc), Màu 5,4 giây (A4 LEF / Chế độ ưu tiên màu)',
  'Tốc độ sao in (A4 LEF): Đen trắng 45 trang/phút – Màu 45 trang/phút',
  'Dung lượng khay giấy: 520 tờ x 2 + 840 tờ + 1.230 tờ + Khay tay 90 tờ',
  'Trọng lượng giấy: 52 – 300 gsm',
  'Nguồn điện: AC220–240V ±10%, 10A, 50/60Hz',
  'Mức tiêu thụ điện: 2,4 kW (Chế độ nghỉ: 0,5 W, Chế độ sẵn sàng: 106 W)',
  'Kích thước: Rộng 658 x Sâu 790 x Cao 1.169 mm',
  'Trọng lượng: 156 kg',
  'Độ phân giải in (PCL): 2.400 x 2.400 dpi (chuẩn, chất lượng cao, độ phân giải cao)',
  'Độ phân giải in (PostScript): 2.400 x 2.400 dpi (chuẩn, chất lượng cao, độ phân giải cao)',
  'Ngôn ngữ mô tả trang: PCL5 / PCL6 (chuẩn), Adobe PostScript 3 (tùy chọn)',
  'Hệ điều hành hỗ trợ (PCL/Mac OS X): Windows 11 (64 bit), Windows 10 (32/64 bit), Windows Server 2025/2022/2019/2016 (64 bit), MacOS 15/14/13/12/11',
  'Hệ điều hành hỗ trợ (PostScript): Windows 11 (64 bit), Windows 10 (32/64 bit), Windows Server 2025/2022/2019/2016 (64 bit), MacOS 15/14/13/12/11',
  'Kết nối: Ethernet 1000BASE-T / 100BASE-TX / 10BASE-T, USB 3.0 / USB 2.0, LAN không dây (tùy chọn)',
  'Kiểu quét: Màu',
  'Độ phân giải quét: 600 x 600 dpi, 400 x 400 dpi, 300 x 300 dpi, 200 x 200 dpi',
  'Tốc độ quét: Phù hợp với tốc độ bộ nạp và đảo bản gốc tự động',
  'Khổ giấy bản gốc (DADF): Tối đa A3, 11 x 17 inch; Tối thiểu A6',
  'Trọng lượng giấy (DADF): 38 – 128 gsm (2 mặt: 50 – 128 gsm)',
  'Dung lượng nạp (DADF): 130 tờ',
  'Tốc độ sao chụp qua DADF (A4 LEF, 1 mặt): Đen trắng 45 trang/phút – Màu 45 trang/phút',
  'Tốc độ quét (DADF): Đen trắng 135 trang/phút – Màu 135 trang/phút; Quét 2 mặt 1 lượt: Đen trắng 270 trang/phút – Màu 270 trang/phút (Tài liệu tiêu chuẩn A4 LEF, 200 dpi, Lưu trữ vào thư mục)'
],

};

export default function Product7580Page() {
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

        <div className="w-full lg:w-1/2">
          <h1 className="text-2xl font-bold text-red-600 mb-2">{product.name}</h1>
          <p className="text-xl text-green-600 font-semibold mb-4">Giá: {product.price}</p>
          <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
             <li>04 khay tự động (tùy chọn) & 01 khay tay .</li>
            <li>Copy màu/In màu/Scan màu.</li>
            <li>Tốc độ In/sao chụp qua DADF 45 trang/phút.</li>
            <li> Bộ nạp và đảo bản gốc tự động (DADF).</li>
            <li>Bộ đảo bản sao (Duplex)</li>
            <li>Bộ nhớ: Tối đa 6GB. SSD: 256GB</li>
            <li>Giao diện điều khiển : Màn hình cảm ứng màu 10,1 inch.</li>
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
            Máy Photocopy Apeos  C4571
          </h3>
          <h4 className="text-lg font-semibold text-blue-700 mb-2">
            Khởi đầu hành trình chuyển đổi số của bạn
          </h4>
          <p className="text-black text-justify mb-4">
            Dòng Apeos mới được thiết kế nhằm tối ưu hiệu suất trong môi trường số hiện đại. Với tích hợp thông minh và liền mạch, máy trở thành đối tác kỹ thuật số đáng tin cậy cho mọi doanh nghiệp.
          </p>

          <div className="w-full flex justify-center my-6">
            <Image
              src="/images/Apeos C7071C6571C5571C4571.png"
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
                    Hiệu suất vượt trội – Tối ưu quy trình chuyển đổi số
                  </h2>

                  <div className="space-y-6 text-[15px] text-black leading-relaxed">

                    <div>
                      <h3 className="font-semibold text-cyan-700 mb-2">
                        Quản lý tài liệu và chia sẻ liền mạch
                      </h3>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>ScanAuto: Gửi dữ liệu đã quét chỉ bằng một nút bấm</li>
                        <li>Chia sẻ dữ liệu nhanh qua email, URL, PC (SMB/FTP)</li>
                        <li>Chuyển đổi PDF thành dữ liệu có thể chỉnh sửa: Excel, Word, OCR</li>
                        <li>Lưu lên cloud: OneDrive, Google Drive, DocuSign, Dropbox, v.v.</li>
                        <li>Hỗ trợ scan ảnh thẻ, danh thiếp và tài liệu khối lượng lớn</li>
                      </ul>
                      <p className="text-sm italic mt-1"> Tùy chọn nâng cao</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-cyan-700 mb-2">
                        Khả năng in linh hoạt từ mọi nơi
                      </h3>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>In tài liệu từ xa qua mạng công ty hoặc qua các điểm Wi-Fi ngoài</li>
                        <li>Quản lý dữ liệu in qua nhật ký sử dụng và cấp quyền truy cập</li>
                        <li>Giám sát việc in và hạn chế rò rỉ thông tin</li>
                        <li>In từ trình duyệt hoặc các ứng dụng văn phòng di động</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold text-cyan-700 mb-2">
                        Phân loại – hợp tác – kiểm soát tác vụ
                      </h3>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Tự động phân loại tài liệu theo nội dung, thuộc tính, kiểu tài liệu</li>
                        <li>Hợp tác nhóm dễ dàng nhờ chia sẻ và đồng chỉnh sửa từ xa</li>
                        <li>Giao diện hợp tác theo nhóm, không gian làm việc ảo</li>
                        <li>Truy cập từ mọi nơi và phân quyền thao tác linh hoạt</li>
                        <li>Điều hướng tác vụ đơn giản – kéo thả hoặc tùy chỉnh phím tắt</li>
                      </ul>
                    </div>


                    <div>
                      <h3 className="font-semibold text-cyan-700 mb-2">
                        Hỗ trợ in ấn chuyên dụng – quảng cáo – đa khổ giấy
                      </h3>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Hỗ trợ in banner dài tới 1.200 mm</li>
                        <li>In nhiều loại giấy đặc biệt: giấy bóng, bìa cứng, giấy chứng nhận</li>
                        <li>Hỗ trợ giấy từ 52 đến 300 gsm</li>
                        <li>Khổ giấy hỗ trợ đa dạng: từ 49 × 85 mm đến A3</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-semibold text-cyan-700 mb-2">
                        Tùy chọn hoàn thiện mở rộng (dập ghim – gấp giấy – đục lỗ)
                      </h3>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Dập ghim đơn, dập không ghim, dập ghim lồng</li>
                        <li>Gập chéo, gập Z, gập ba, gập đôi sách, đục lỗ</li>
                        <li>Khay giấy ra: 500–2000 tờ, theo bộ hoàn thiện</li>
                        <li>Tùy chọn bộ hoàn thiện: B5, C4, C5, C5+CD3</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-semibold text-cyan-700 mb-2">
                        Nhiều tùy chọn hoàn thiện khác nhau sẵn sàng để đáp ứng nhu cầu của bạn
                      </h3>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Hỗ trợ Dập không ghim đơn và đôi</li>
                        <li>Dập ghim / Đục lỗ / Dập ghim lồng / Gập chéo / Gập làm ba / Gập đôi sách</li>
                        <li>Nhiều bộ hoàn thiện: A2 / B4-B5 / C4-C5 / C4-C5 + CD3</li>
                      </ul>
                    </div>
                  </div>
                </div>


                {/* 🔻 An toàn và bảo mật */}
                <div className="mt-12">
                  <h2 className="text-[22px] font-bold text-black mb-6 uppercase">
                    Vận hành nhanh và đơn giản
                  </h2>

                  <div className="space-y-10 text-[15px] text-black leading-relaxed">
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-semibold text-cyan-700 mb-2">Khởi động nhanh và in nhanh giúp mang lại hiệu quả cao</h3>
                        <p>Smart WelcomeEyes phát hiện người dùng và tự động thoát khỏi chế độ nghỉ. Ở chế độ khởi động nhanh, chỉ cần 6 giây để có thể sử dụng bằng điều khiển. Sẵn sàng cho bất cứ khi nào bạn cần.</p>
                      </div>

                    </div>

                    <div className="space-y-4">
                      <div>
                        <h3 className="font-semibold text-cyan-700 mb-2">Quét nhanh các tài liệu có khối lượng lớn</h3>
                        <p>Bộ nạp và đảo bản gốc tự động C2-PC có thể trữ lên tới 250 tờ tài liệu và đọc các tài liệu này ở tốc độ cao, lên đến 270 trang/phút cho tác vụ quét hình 1 lượt, 2 mặt để có thể sao chụp hoặc quét nhanh. Hơn nữa, chức năng phát hiện giấy kép giúp ngăn ngừa các hiện tượng như thiếu tờ in do có các tài liệu bị bỏ qua, nhằm đảm bảo công việc xử lý hay lưu dữ liệu ra suôn sẻ.</p>
                        <p className="text-sm italic"> Quét hình 1 lượt, 2 mặt bằng giấy tiêu chuẩn của FUJIFILM (A4 LEF), 200 dpi, Lưu tới ổ lưu mục.</p>
                      </div>
                      <Image src="/images/vanhanh2.png" alt="Quét nhanh" className="mx-auto rounded-lg shadow  mt-3" />
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h3 className="font-semibold text-cyan-700 mb-2">Khay giấy đóng nhẹ và êm ái</h3>
                        <p>Khay giấy có cơ chế thu hồi, bạn chỉ cần đẩy nhẹ để khay giấy tự động thu hồi từ từ và yên tĩnh.</p>
                      </div>
                      <Image src="/images/vanhanh3.png" alt="Khay giấy đóng nhẹ" className="mx-auto rounded-lg shadow  mt-3" />
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h3 className="font-semibold text-cyan-700 mb-2">In ấn chất lượng cao, rõ ràng và sắc nét</h3>
                        <p>Khi sử dụng mực Super EA-Eco, các chữ và nét mảnh hiển rõ, hiệu ứng chuyển đổi màu sắc mượt mà hiển thị đúng các cảm nhận được tại thao tác chính xác, góp phần tạo nên chất lượng hình ảnh cao.</p>
                      </div>
                      <Image src="/images/vanhanh4.png" alt="In chất lượng cao" className="mx-auto rounded-lg shadow  mt-3" />
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h3 className="font-semibold text-cyan-700 mb-2">Đèn thông báo</h3>
                        <p> Đèn thông báo nhắc người dùng lấy lại bản gốc về hoặc lấy các tài
                          liệu đã in trên khay.
                          Khay giữa sẽ sáng đèn để thông báo khi có fax hoặc tài liệu khác
                          được nhận ở Khay hông.</p>

                      </div>
                      <Image src="/images/vanhanh5.png" alt="In từ mọi thiết bị" className="mx-auto rounded-lg shadow  mt-3" />
                    </div>
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-semibold text-cyan-700 mb-2"> Tạo ra các tài liệu quảng cáo hấp dẫn từ nhiều
                          kích cỡ giấy và loại giấy khác nhau</h3>
                        <p> Hỗ trợ nhiều loại giấy khác nhau để sản xuất nội bộ các nội dung
                          quảng cáo như bìa đựng tài liệu trong suốt, bưu thiếp, phong bì
                          và các tấm biểu ngữ dài cho quầy hàng.</p>
                        <p className="text-sm italic"> Hỗ trợ giấy dài lên đến 320 x 1.200 mm.</p>
                        <p className="text-sm italic">  Hỗ trợ giấy từ 52 đến 300 gsm, từ giấy mỏng đến giấy dày như giấy chứng
                          nhận.</p>
                      </div>
                      <Image src="/images/vanhanh6.png" alt="Bố trí linh hoạt" className="mx-auto rounded-lg shadow  mt-3" />
                    </div>
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-semibold text-cyan-700 mb-2">  Bảng điều khiển mới với kích thước lớn 10,1 inch mang lại trải nghiệm trực
                          quan và phù hợp với cá nhân người dùng</h3>
                        <p> Bảng điều khiển đóng vai trò là cổng kết nối bạn với nhiều ứng dụng thông minh khác trên thiết bị đa chức
                          năng chỉ bằng một thao tác chạm. Bảng điều khiển cảm ứng điện dung lớn mang lại khả năng hiển thị và
                          hoạt động tuyệt vời, phản hồi mọi thao tác chạm và vuốt để điều hướng một cách dễ dàng.</p>
                        <p className="text-sm italic">Giấy 80 gsm.</p>
                      </div>
                      <Image src="/images/vanhanh7.png" alt="Bố trí linh hoạt" className="mx-auto rounded-lg shadow  mt-3" />
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