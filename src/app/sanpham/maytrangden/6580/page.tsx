// pages/sanpham/maytrangden/6580.tsx
'use client';

import Image from 'next/image';
import { useState } from 'react';
import RelatedProductSlider from '../../../components/RelatedProductSlider'
// const productsBlackWhite = [
//   {
//     name: 'Máy Photocopy Apeos A2560',
//     image: '/productsBlackWhite/Apeos 356030602560.png',
//     price: 'Liên Hệ',
//   },
//   {
//     name: 'Máy Photocopy Apeos A3570',
//     image: '/productsBlackWhite/Apeos 3570.png',
//     price: 'Liên Hệ',
//   },
//   // Add more products as needed
// ];

const product = {
  name: "Máy Photocopy Apeos 6580",
  price: "Liên Hệ",
  image: "/productsBlackWhite/Apeos 75806580.png",
  specs: [
  'Kiểu: Bảng điều khiển',
  'Dung lượng bộ nhớ: 4 GB (Tối đa: 4 GB)',
  'Dung lượng thiết bị lưu trữ: 128 GB',
  'Tính năng màu: Đầy đủ màu sắc',
  'Độ phân giải quét: 600 x 600 dpi',
  'Độ phân giải in ấn: 2.400 dpi hoặc tương đương x 600 dpi',
  'Thời gian khởi động: 36 giây hoặc ít hơn (nhiệt độ phòng là 23°C)',
  'Khổ giấy bản gốc: Tối đa A3, 11 x 17”, 297 x 432 mm cho cả Tờ bản in và Sách',
  'Khổ giấy: Tối đa 13 x 19 inch (330 x 483 mm), 12,6 x 19,2 inch (320 x 488 mm), A3; Tối thiểu A6, Bưu thiếp (100 x 148 mm); Chiều rộng mặt hình: Mép trên 4,0 mm, Mép dưới 4,0 mm, Mép trái/phải 3,0 mm',
  'Thời gian ra bản sao chụp đầu tiên: 3,0 giây (A4 LEF)',
  'Tốc độ sao in: 65 trang/phút (A4 LEF), 68 trang/phút (JIS B5 LEF)',
  'Dung lượng khay giấy: Chuẩn – 520 tờ x 2 Khay + 1.560 tờ + 1.950 tờ + Khay tay 95 tờ; Tùy chọn: Bộ nạp trữ lượng lớn B1: 2.000 tờ; Bộ nạp trữ lượng lớn C1-D2: 2.000 tờ x 2 Khay + Khay tay 250 tờ',
  'Dung lượng khay giấy ra: 500 tờ (A4 LEF)',
  'Nguồn điện: AC220–240V ±10%, 10A, 50/60Hz',
  'Mức tiêu thụ điện: 2,4 kW (Chế độ nghỉ: 0,6 W, Chế độ nguồn điện tắt hợp: 103 W, Chế độ sẵn sàng: 167 W)',
  'Kích thước: Rộng 620 x Sâu 804 x Cao 1.155 mm (Kiểu máy 2 Khay tiêu chuẩn)',
  'Trọng lượng: 188 kg (Kiểu máy 2 Khay tiêu chuẩn)',
  'Độ phân giải in (PCL): 1.200 x 1.200 dpi (chuẩn, chất lượng cao, độ phân giải cao)',
  'Độ phân giải in (PostScript): 1.200 x 1.200 dpi (chuẩn, chất lượng cao, độ phân giải cao)',
  'Ngôn ngữ mô tả trang: PCL5 / PCL6 (chuẩn), Adobe PostScript 3 (tùy chọn)',
  'Hệ điều hành hỗ trợ (PCL/Mac OS X): Windows 11 (64 bit), Windows 10 (32/64 bit), Windows Server 2025/2022/2019/2016 (64 bit), MacOS 15/14/13/12/11',
  'Hệ điều hành hỗ trợ (PostScript): Windows 11 (64 bit), Windows 10 (32/64 bit), Windows Server 2025/2022/2019/2016 (64 bit), MacOS 15/14/13/12/11',
  'Kết nối: Ethernet 1000BASE-T / 100BASE-TX / 10BASE-T, USB 3.0 / USB 2.0, LAN không dây (tùy chọn)',
  'Kiểu quét: Màu',
  'Độ phân giải quét: 600 x 600 dpi, 400 x 400 dpi, 300 x 300 dpi, 200 x 200 dpi',
  'Tốc độ quét: Phù hợp với tốc độ bộ nạp và đảo bản gốc tự động',
  'Khổ giấy bản gốc (DADF): Tối đa A3, 11 x 17 inch; Tối thiểu A6',
  'Trọng lượng giấy (DADF): 38–200 gsm (2 mặt: 50–200 gsm)',
  'Dung lượng nạp (DADF): 250 tờ',
  'Tốc độ sao chụp qua DADF (A4 LEF, 1 mặt): Đen trắng 65 trang/phút',
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
        {/* Mô tả ngắn */}
        <div className="w-full lg:w-1/2">
          <h1 className="text-2xl font-bold text-red-600 mb-2">{product.name}</h1>
          <p className="text-xl text-green-600 font-semibold mb-4">Giá: {product.price}</p>
          <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
            <li>04 khay tự động & 01 khay tay </li>
            <li>Tốc độ In/sao chụp qua DADF 65 trang/phút</li>
            <li>Bộ nạp và đảo bản gốc tự động (DADF)</li>
            <li>Bộ đảo bản sao (Duplex)</li>
            <li>Bộ nhớ: Tối đa 4GB. SSD: 128GB</li>
            <li>Màn hình cảm ứng màu 10.1 inch</li>
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
      <RelatedProductSlider />
      {/* 🔻 Mô tả & Thông số kỹ thuật trong cùng 1 hàng */}
      <div className="mt-12 flex flex-col lg:flex-row gap-8">

        {/* Cột trái: Mô tả sản phẩm */}
        <div className="lg:w-2/3 w-full">
          <h2 className="text-xl font-bold text-black mb-4 uppercase">Mô Tả Sản Phẩm</h2>
          <h3 className="text-[30px] font-bold text-red-700 mb-2">
            Máy Photocopy Apeos 6580
          </h3>
          <h4 className="text-lg font-semibold text-blue-700 mb-2">
            Hiệu suất vượt trội, vận hành thông minh
          </h4>
          <p className="text-black text-justify mb-4">
            <strong>Apeos 6580</strong> là một thiết bị mới của hãng FujiFilm. Máy có tốc độ 65 trang/phút với đầy đủ bộ tính năng Copy-In-Scan kèm theo các tiện ích gia tăng được thiết kế tỉ mỉ đến từng chi tiết. Đặc biệt, công nghệ NFC (in, quét trên điện thoại thông minh của bạn bằng cách chạm smartphone của bạn vào máy) cũng được áp dụng trên sản phẩm này.
          </p>

          <div className="w-full flex justify-center my-6">
            <Image
              src="/images/Apeos 7580-6580.png"
              alt="Máy Photocopy Apeos 6580 minh họa"
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
                    Năng suất cao cho hiệu quả công việc cao hơn
                  </h2>

                  <div className="space-y-6 text-[15px] text-black leading-relaxed">
                    <div>
                      <h3 className="font-semibold text-cyan-700 mb-2">
                        Đạt hiệu quả cao hơn với thiết bị luôn sẵn sàng
                      </h3>
                      <p>Khởi động nhanh, cho ra giấy nhanh là những lợi thế mà thiết bị này có thể đáp ứng cho những tình huống cần thiết, nhờ với các tính năng sau</p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Thời gian cho ra bản sao chụp đầu tiên 3,0 giây</li>
                        <li>Smart WelcomEyes phát hiện thấy người dùng và tự động đánh thức thiết bị từ chế độ nghỉ.</li>
                        <li>Khởi động từ chế độ nghỉ chỉ trong 30 giây.</li>
                      </ul>
                      <p>Dự đoán thời gian hoàn thành tác vụ in để quản lý công việc hiệu quả hơn</p>
                      <p className="text-sm italic mt-1">A4 LEF</p>
                    </div>

                    <div>
                      <h3 className="font-semibold text-cyan-700 mb-2">
                        Độ bền và năng suất cao
                      </h3>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Năng suất cao với tốc độ in cao lên đến 75 trang/phút1</li>
                        <li>Khay tiêu chuẩn chứa 4.645 tờ 2 (có thể nâng lên đến 8.800 tờ 2 3) để bạn có thể in liên tục mà không bị ngắt quãng</li>
                        <li>Bền bỉ, có thể đảm nhiệm in tốc độ cao số lượng lớn</li>
                        <li>Hộp mực dung lượng cao, cùng với trống cảm biến quang tuổi thọ cao giúp duy trì mức năng suất tối ưu với tần suất thay thế các vật tư tiêu hao ít hơn</li>
                      </ul>
                      <p className="text-sm italic mt-1"> 1: A4 LEF cho 7580.
                        2: 80 gsm Giấy.
                        3: Tiêu chuẩn + Bộ nạp trữ lượng lỡn C1-D2.</p>
                    </div>

                    <div>
                      <h3 className="font-semibold text-cyan-700 mb-2">
                        Thúc đẩy phương thức làm việc linh hoạt với quy trình Không giấy tốc độ cao
                      </h3>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Được trang bị Bộ nạp và đảo bản gốc tự động (DADF) màu một lượt quét</li>
                        <li>Có thể đạt quy trình công việc nhanh hơn và liên tục với tốc độ quét khoảng 270 trang/phút 1 và dung lượng khay chứa giấy DADF 250 tờ </li>
                        <li>Quy trình công việc yêu cầu với DADF có thể trở nên linh hoạt hơn, hỗ trợ nhiều loại giấy, từ 38 đến 200 gsm</li>
                        <li>Cải thiện mức độ hiệu quả của quy trình công việc bằng cách tự động quét các tài liệu có kích thước tùy chọn, hoặc kích thước nhỏ như hóa đơn, về kích thước gần với tiêu chuẩn nhất</li>
                        <li>Có thể phát hiện giấy dính nhau, để tránh lỗi quét khi sao chụp hay quét nhiều tài liệu</li>
                        <li>Đèn báo hiệu nhắc người dùng thu thập tài liệu gốc</li>
                      </ul>
                      <p className="text-sm italic mt-1">1: Quét hình 1 lượt, 2 mặt. Tài liệu tiêu chuẩn (A4 LEF), 200 dpi, Lưu trữ vào thư mục.</p>
                      <p className="text-sm italic mt-1">2: 80 gsm giấy.</p>
                      <p className="text-sm italic mt-1">3: Cho bản gốc in một mặt. 50 gsm cho bản gốc in hai mặt.</p>
                    </div>

                    <div>
                      <h2 className="text-[22px] font-bold text-black mb-6 uppercase">
                        Vận hành nhanh chóng và dễ dàng
                      </h2>
                      <h3 className="font-semibold text-cyan-700 mb-2">
                        Bố cục đơn giản với menu điều hướng dễ dàng
                      </h3>
                      <p>Giao diện màu nền đen và xám mang đến độ tương phản cao hơn, giúp nhận diện dễ dàng.</p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Các biểu tượng được dàn trải đều giúp nhận diện dễ dàng</li>
                        <li>Các bước vận hành nhất quán của từng tính năng giúp dễ dàng lặp lại</li>
                        <li>Khả năng tùy chỉnh màn hình chính theo sở thích cá nhân cho phép truy cập dễ dàng các chức năng thường xuyên sử dụng</li>
                        <li>Có thể cài đặt ghim nhớ các tác vụ thường xuyên sử dụng hoặc lặp lại</li>
                        <li>Hiển thị ánh sáng dễ nhận thấy báo hiệu công việc hoàn tất hoặc có lỗi</li>
                        <li>Thông báo bằng âm thanh nhẹ để cảnh báo và thu hút sự chú ý</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-semibold text-cyan-700 mb-2">
                        Điện thoại thông minh trở thành bảng điều khiển di động
                      </h3>
                      <p>Kết nối liền mạch với các thiết bị di động cho các tác vụ sao chụp, Fax, In, Quét 1 bằng cách sử dụng ứng dụng Print Utility.</p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Thiết bị di động có thể được sử dụng làm giao diện người dùng thay thế để kiểm soát hoạt động nhằm giảm tiếp xúc chung.</li>
                        <li>Các cài đặt thường xuyên sử dụng có thể được lưu dưới dạng Yêu thích</li>
                        <li>Gửi fax hoặc email trực tiếp tới các địa chỉ được lưu trữ trong điện thoại thông minh</li>
                        <li>Hạn chế tiếp xúc với máy in để đảm bảo vệ sinh</li>
                        <li>Thiết lập kết nối Wi-Fi trực tiếp nhanh chóng bằng cách quét mã QR trên bảng điều khiển người dùng</li>
                      </ul>
                      <p className="text-sm italic mt-1">Ghi chú: Kết nối với máy thông qua môi trường không dây hoặc kết nối Wi-Fi Direct.</p>
                      <p className="text-sm italic mt-1">1: Quét tới Thiết bị di động, Email, Quét vào thư mục.</p>
                      <p className="text-sm italic mt-1">2: Tải xuống miễn phí từ Google PlayTM hoặc App Store.</p>
                    </div>

                    <div>
                      <h3 className="font-semibold text-cyan-700 mb-2">
                        Tính linh hoạt trong bố cục văn phòng
                      </h3>
                      <p>Hỗ trợ môi trường LAN không dây</p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Hỗ trợ tự do di chuyển thiết bị trong văn phòng nhờ kết nối Wi-Fi.</li>
                        <li>Có thể kết nối với tối đa 5 thiết bị đa chức với tính năng kết nối wi-fi trực tiếp (Wi-Fi Direct) cùng lúc</li>
                        <li>Hỗ trợ in trực tiếp qua thiết bị di động</li>
                        <li>Hỗ trợ in hoặc quét bằng thiết bị di động bằng Print Utility, AirPrint, Mopria® Print Service, và Mopria Scan.</li>
                      </ul>
                      <p className="text-sm italic mt-1">
                        1: Tùy chọn.
                        <br />2: Khi kết nối Wi-Fi Direct.
                      </p>
                    </div>

                    <div>
                      <h3 className="font-semibold text-cyan-700 mb-2">
                        In từ mọi thiết bị đa chức năng trong văn phòng
                      </h3>
                      <p>Với Server-less On-Demand Print (In theo nhu cầu không qua máy chủ), bạn có thể in và nhận bản in từ mọi bản thiết bị đa chức năng được kết nối.</p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Cải thiện năng suất bằng cách in từ mọi thiết bị đa chức năng khả dụng khác khi thiết bị hiện tại đang được sử dụng</li>
                        <li>Có thể liên kết đến 100 thiết bị</li>
                        <li>Có thể sửa đổi cài đặt tác vụ cụ thể ở cấp thiết bị để tiết kiệm thời gian (1 mặt đến 2 mặt, thêm dập ghim)</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-semibold text-cyan-700 mb-2">
                        Quản lý thiết bị đơn giản với Xác thực không cần máy chủ
                      </h3>
                      <p>Xác thực không qua máy chủ cho phép thông tin người dùng được đồng bộ hóa giữa các thiết bị đa chức năng trong cùng một nhóm, giúp giảm khối lượng công việc của quản trị viên.</p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Chỉ cần chạm thẻ của bạn để liên kết ID người dùng với thiết bị đa chức năng</li>
                        <li>Thông tin ID được chia sẻ tự động với các thiết bị đa chức năng khác trong cùng một mạng</li>
                        <li>Xác thực có thể được thực hiện với bất kỳ thiết bị nào trong văn phòng</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-semibold text-cyan-700 mb-2">
                        Các tính năng khác nhau giúp tiết kiệm thời gian và công sức trong hoạt động quét
                      </h3>
                      <p>Dữ liệu đã quét có thể được truyền qua nhiều phương thức bao gồm Email, URL và gửi tới PC (SMB/FTP/SFTP).</p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Dữ liệu có thể được gửi bằng cách sử dụng nhiều tính năng cùng một lúc</li>
                        <li>Cải thiện quy trình số hóa của bạn với các tính năng bao gồm tự động xoay chiều trang được quét về hướng thẳng đứng, sửa trang bị lệch hoặc xóa các trang trống</li>
                        <li>Bên cạnh định dạng TIFF và JPEG, dữ liệu được quét có thể được chuyển đổi sang tệp PDF hoặc DocuWorks có bật OCR hoặc nén ở mức cao/ có màu cụ thể. Ngoài ra, tài liệu còn có thể được chuyển đổi dang tài liệu Excel/Word có thể chỉnh sửa được</li>
                        <li>Với ScanAuto, bạn có thể dễ dàng gửi dữ liệu đã quét đến địa chỉ e-mail của mình bằng cách chỉ cần nhấn một nút</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-semibold text-cyan-700 mb-2">
                        Số hóa tài liệu giấy giúp quản lý tài liệu dễ dàng mà chẳng hề tốn công
                      </h3>
                      <p>Với tính năng Scan Delivery (Phân phối bản quét đến thư mục lưu trữ định sẵn), bạn có thể tự động xử lý và lưu trữ hình ảnh được quét chỉ bằng một nút ấn thao tác cài sẵn dành cho mỗi quy trình công việc hoặc một loại tài liệu nhất định.</p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Tự động hóa để đặt định dạng tập tin, tên tập tin, OCR, v.v.</li>
                        <li>Tự động lưu trữ tài liệu đã quét và xử lý tại đúng điểm đến định sẵn</li>
                        <li>Chỉ định từ ngữ hoặc ký tự cụ thể trong tài liệu làm tên thư mục hoặc tên tập tin</li>
                        <li>Có thể đọc chính xác 0̸ và các ký tự hay bị nhận diện nhầm khác</li>
                      </ul>
                    </div>
                  </div>
                </div>


                {/* 🔻 An toàn và bảo mật */}
                <div className="mt-12">
                  <h2 className="text-[22px] font-bold text-black mb-6 uppercase">
                    Bảo vệ thông tin quan trọng
                  </h2>

                  <div className="space-y-6 text-[15px] text-black leading-relaxed">
                    <div>
                      <h3 className="font-semibold text-cyan-700 mb-2">
                        Bảo vệ khỏi người dùng trái phép
                      </h3>
                      <p>Nhiều tùy chọn cài đặt ủy quyền người dùng cho phép quản trị viên chọn kết hợp phù hợp theo từng hoàn cảnh môi trường.</p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Xác thực cục bộ</li>
                        <li>Xác thực bởi Máy chủ từ xa</li>
                        <li>Xác thực thẻ IC</li>
                        <li>Quyền truy cập tính năng của người dùng cụ thể</li>
                        <li>In xác thực cá nhân</li>
                      </ul>
                      <p>Có thể tạo thêm lớp truy cập không mong muốn cho những người dùng cụ thể (ví dụ: khách).</p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Bộ Ethernet phụ</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-semibold text-cyan-700 mb-2">
                        Bảo vệ dữ liệu
                      </h3>
                      <p>
                        Bảo vệ chống lại các ý định xâm nhập dữ liệu như tấn công, can thiệp sửa đổi cài đặt thiết bị/hệ thống.
                      </p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Mã hóa tài liệu đã lưu</li>
                        <li>Sử dụng chip TPM 2.0 để quản lý khóa mã hóa</li>
                        <li>Xóa cài đặt và thông tin tài liệu cùng lúc</li>
                      </ul>
                      <p>
                        Bảo vệ thông tin bằng mã hóa mạnh mẽ khi truyền giữa các thiết bị, máy chủ, v.v.
                      </p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Mã hóa đường dẫn giao tiếp bằng SSL/TLS hoặc IPsec</li>
                        <li>Mã hóa khi truyền qua SMBv3 và SFTP</li>
                        <li>Mã hóa tệp quét/chữ ký</li>
                        <li>Mã hóa email và chữ ký bởi S/MIME</li>
                        <li>Hạn chế phiên bản TLS</li>
                        <li>Mật mã học đường cong Elliptic</li>
                        <li>WPA3</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-semibold text-cyan-700 mb-2">
                        Bảo vệ khỏi truy cập trái phép
                      </h3>
                      <p>Bảo vệ cài đặt thiết bị ở nhiều cấp độ bằng cách phân vùng rõ ràng các hạn chế thay đổi cho các đối tượng mục tiêu khác nhau - Người dùng cuối, quản trị viên CNTT và Kỹ sư dịch vụ.</p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Thiết đặt thao tác đại diện dịch vụ</li>
                        <li>Khóa tài khoản để ngăn ngừa truy cập trái phép</li>
                        <li>Thông tin để thay đổi mật khẩu mặc định</li>
                        <li>Cảnh báo hiển thị khi sử dụng địa chỉ IP toàn cầu</li>
                      </ul>
                      <p >
                        Ngăn chặn cài đặt chương trình trái phép mà không cần thông báo. Hỗ trợ kiểm tra CNTT tiện lợi với nhật ký dữ liệu thiết bị để dễ dàng theo dõi.
                      </p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Xác minh chữ ký phần mềm</li>
                        <li>Hạn chế cập nhật từ xa</li>
                        <li>Lọc địa chỉ IP</li>
                        <li>Phát hiện can thiệp trái phép khi khởi động và tự động khôi phục khi phát hiện có can thiệp trái phép</li>
                        <li>Ngăn ngừa giả mạo khi vận hành</li>
                        <li>Nhật ký kiểm duyệt</li>
                        <li>Truyền hệ thống nhật ký kiểm duyệt</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-semibold text-cyan-700 mb-2">
                        Ngăn ngừa lỗi vận hành
                      </h3>
                      <p>
                        Ngăn chặn rò rỉ thông tin do những sai lầm vô tình của quản trị viên và người dùng.
                      </p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Quét tài liệu để gửi đến đích cố định</li>
                        <li>Nhập lại người nhận fax</li>
                        <li>Ghi chú</li>
                        <li>In văn bản ẩn</li>
                        <li>Chức năng nhúng và theo dõi mã số hóa</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-semibold text-cyan-700 mb-2">
                        Chứng nhận bảo mật
                      </h3>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Được chứng nhận ISO/IEC 15408, tuân thủ tiêu chuẩn quốc tế về việc thiết kế và vận hành bảo mật CNTT</li>
                      </ul>
                    </div>

                    <h2 className="text-[22px] font-bold text-black mb-6 uppercase">
                      Hệ thống hỗ trợ đáng tin cậy
                    </h2>
                    <div>
                      <h3 className="font-semibold text-cyan-700 mb-2">
                        Giải quyết vấn đề bằng chức năng Trợ giúp trên thiết bị
                      </h3>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Thông tin Tự trợ giúp có sẵn trên bảng điều khiển</li>
                        <li>Có thể truy cập thông tin Tự trợ giúp qua thiết bị di động bằng cách quét mã QR hiển thị trên bảng điều khiển</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-semibold text-cyan-700 mb-2">
                        Hỗ trợ từ xa với sự hỗ trợ của người vận hành
                      </h3>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Kết nối trực tiếp với Trung tâm trợ giúp</li>
                        <li>Người vận hành sẽ truy cập thiết bị đa chức năng từ xa để giải quyết vấn đề bằng cách hướng dẫn các bước trên bảng điều khiển chung</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-semibold text-cyan-700 mb-2">
                        Theo dõi chặt chẽ thiết bị đa chức năng của bạn hàng ngày
                      </h3>
                      <p>Giám sát tình trạng thiết bị đa chức năng để giảm thiểu thời gian ngừng hoạt động.</p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Xem tổng số trang in</li>
                        <li>Tự động cung cấp vật tư tiêu hao khi sắp hết mực</li>
                        <li>Phát hiện lỗi máy để can thiệp sớm cho việc khắc phục sự cố</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-semibold text-cyan-700 mb-2">
                        Sao lưu các cài đặt của thiết bị đa chức năng
                      </h3>
                      <p>Device Setup Editor là một công cụ miễn phí giúp bạn chỉnh sửa cài đặt thiết bị và tạo bản sao lưu thông tin cần thiết để đảm bảo việc kinh doanh được liên tục.</p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Có thể tạo một bản sao lưu cài đặt thiết bị/máy in trên PC</li>
                        <li>Quản trị viên có thể tối ưu hóa việc sử dụng thiết bị bằng cách xem/chỉnh sửa các cài đặt này, phù hợp nhất với môi trường của mình.</li>
                        <li>Khi cài đặt một thiết bị mới, các cài đặt này có thể được di chuyển (hoặc sao chép) từ thiết bị hiện có sang thiết bị mới</li>
                      </ul>
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