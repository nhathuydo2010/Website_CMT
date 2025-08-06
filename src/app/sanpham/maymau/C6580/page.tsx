// pages/sanpham/maymau/C8180.tsx
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
  name: "Máy Photocopy Apeos C6580",
  price: "Liên Hệ",
  image: "/productsColor/Apeos C8180-C7580-C6580.png",
  specs: [
    "Kiểu: Bảng điều khiển",
    "Dung lượng bộ nhớ: 4 GB (Tối đa: 4 GB)",
    "Dung lượng lưu trữ: 128 GB SSD",
    "Tính năng màu: Đầy đủ màu sắc",
    "Độ phân giải quét: 600 x 600 dpi",
    "Độ phân giải in ấn: 2.400 x 2.400 dpi (Văn bản-Ảnh / Ảnh), 600 x 600 dpi (Văn bản / Bản đồ)",
    "Thời gian khởi động: 36 giây hoặc ít hơn (có kích hoạt), 30 giây hoặc ít hơn (không kích hoạt)",
    "Thời gian khôi phục từ chế độ nghỉ: 30 giây hoặc ít hơn",
    "Khổ giấy bản gốc: Tối đa A3, 11 x 17 inch, 297 x 432 mm",
    "Khổ giấy in: Tối đa 330 x 483 mm, tối thiểu A6",
    "Chiều rộng mất hình: Trên/dưới 4 mm, trái/phải 3 mm",
    "Trọng lượng giấy: 52 – 300 gsm (khay và khay tay)",
    "Thời gian cho ra bản sao chụp đầu tiên: Đen trắng 4.1 giây, Màu 5.4 giây (A4 LEF)",
    "Tốc độ sao chụp liên tục A4 LEF: Đen trắng/Màu 65 trang/phút",
    "Tốc độ sao chụp liên tục A4: Đen trắng/Màu 47 trang/phút",
    "Tốc độ sao chụp liên tục JIS B4: Đen trắng/Màu 39 trang/phút",
    "Tốc độ sao chụp liên tục A3: Đen trắng/Màu 34 trang/phút",
    "Dung lượng khay giấy: 520 tờ x 2 + 840 tờ + 1.230 tờ + khay tay 150 tờ",
    "Dung lượng khay giấy ra: 500 tờ (A4 LEF)",
    "Nguồn điện: AC220-240V ±10%, 10A, 50/60Hz",
    "Mức tiêu thụ điện: Tối đa 2.4 kW, chế độ nghỉ 0.5 W, sẵn sàng 193 W",
    "Kích thước: 700 x 793 x 1.154 mm",
    "Trọng lượng: 242 kg",

    // Chức năng in
    "Kiểu in: Tích hợp",
    "Tốc độ in: Đen trắng/Màu 65 trang/phút",
    "Độ phân giải in: Chuẩn & Chất lượng cao 2.400 x 2.400 dpi (PCL & Adobe PostScript 3)",
    "Ngôn ngữ mô tả trang: PCL5 / PCL6 (chuẩn), Adobe PostScript 3 (tùy chọn)",
    "Hệ điều hành hỗ trợ: Windows 10/8.1/Server 2019/2016/2012 R2/2012, macOS 11/10.15/10.14/10.13/10.12",
    "Kết nối in: Ethernet 1000BASE-T/100BASE-TX/10BASE-T, USB 3.0/2.0, Wi-Fi (tùy chọn)",

    // Chức năng quét
    "Chức năng quét: Màu",
    "Độ phân giải quét: 600, 400, 300, 200 dpi",
    "Tốc độ quét: Phù hợp với tốc độ bộ nạp gốc SPDF",
    "Kết nối quét: Ethernet (chuẩn), Wi-Fi (tùy chọn)",

    // Bộ nạp và đảo bản gốc tự động (SPDF)
    "Khổ giấy bản gốc: A6 – A3, tối đa 11 x 17 inch",
    "Trọng lượng giấy SPDF: 38 – 200 gsm (2 mặt: 50 – 200 gsm)",
    "Dung lượng SPDF: 250 tờ",
    "Tốc độ quét SPDF (1 mặt): Đen trắng/Màu: 135 trang/phút",
    "Tốc độ quét SPDF (2 mặt): Đen trắng/Màu: 270 trang/phút (quét 1 lần 2 mặt)",
    "Chức năng quét: Lưu trữ vào thư mục, email, PC, server"
  ]
};

export default function Product7580Page() {
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [showFullSpecs, setShowFullSpecs] = useState(false);

  return (
    <div className="bg-white/90 max-w-[1100px] mx-auto rounded-2xl shadow-xl p-4 md:p-6 mt-10">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="relative w-full lg:w-1/2 border p-4">
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
            <li>02 khay tự động (500 tờ/khay) & 01 khay tay (96 tờ)</li>
            <li>Trọng lượng giấy: 60 – 256 gsm</li>
            <li>Bộ nạp và đảo bản gốc tự động (DADF)</li>
            <li>Bộ đảo bản sao (Duplex)</li>
            <li>Bộ nhớ: Tối đa 4GB. SSD: 128GB</li>
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
            Máy photocopy màu FUJIFILM Apeos C6580
          </h3>
          <h4 className="text-lg font-semibold text-blue-700 mb-2">
            Thời đại mới, Apeos mới
          </h4>
          <p className="text-black text-justify mb-4">
            <strong>Máy photocopy màu FUJIFILM Apeos C6580</strong> không chỉ đơn thuần là một thiết bị in ấn mà còn là một hệ thống quản lý tài liệu toàn diện. Với tốc độ in vượt trội, khả năng bảo mật cao và tích hợp công nghệ hiện đại, máy là giải pháp lý tưởng cho các doanh nghiệp cần tối ưu hóa quy trình làm việc và đảm bảo chất lượng in ấn cao nhất.
          </p>

          <div className="w-full flex justify-center my-6">
            <Image
              src="/images/C8180C7580C6580.png"
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
                    Chất lượng hình ảnh vượt trội với độ bền cao
                  </h2>

                  <div className="space-y-6 text-[15px] text-black leading-relaxed">
                    <div>
                      <h3 className="font-semibold text-cyan-700 mb-2">
                        Độ bền cao và công suất lớn
                      </h3>
                      <p>
                        Kết hợp năng suất cao và độ bền cao để đáp ứng nhu cầu in số lượng lớn liên tục.
                      </p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Trống quang dẫn có độ mòn thấp với tuổi thọ dài giúp giảm tần suất thay trống</li>
                        <li>Nạp giấy trữ lượng lớn lên đến 7.360 tờ<sup>*1</sup></li>
                        <li>Hộp mực<sup>*2</sup> trữ lượng lớn và khay giấy lớn giúp giảm số lần thay</li>
                        <li>Thay mực và thêm giấy mà không cần dừng công việc in đang chạy</li>
                        <li>Độ bền vượt trội và khả năng xử lý bản in ra lõi và in khối lượng lớn</li>
                      </ul>
                      <p className="text-sm italic mt-1">*1: 80 gsm giấy. Khi đã lắp đặt Khay tay và Bộ nạp trữ lượng lớn C3-DS tuỳ chọn.<br />
                        *2: Hộp mực trữ lượng lớn có thể in khoảng 75.200 trang (37.600 trang x 2) đối với mực K và khoảng 39.700 trang đối với mỗi màu của mực CMY. Đây là giá trị tham khảo khi sử dụng bản gốc A4 với mật độ hình ảnh 5% cho mỗi màu. Số lượng tờ có thể in trên thực tế sẽ tùy thuộc vào cách sử dụng, loại bản gốc và mật độ in, vì vậy những giá trị này chỉ mang tính chất tham khảo.</p>
                    </div>

                    <div>
                      <h3 className="font-semibold text-cyan-700 mb-2">
                        Hoạt động nhanh và hiệu quả
                      </h3>
                      <p>Khởi động nhanh và in nhanh chóng. Giảm thời gian chờ đợi.</p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Tốc độ in cao, lên đến 81 trang/phút<sup>*1</sup></li>
                        <li>Smart WelcomEyes phát hiện người dùng đang đến gần và tự động khởi động từ trạng thái tiết kiệm năng lượng</li>
                        <li>Model cao cấp, khởi động từ chế độ nghỉ trong vòng 30 giây</li>
                        <li>Thời gian cho ra bản sao chụp đầu tiên 5,4 giây<sup>*2</sup></li>
                        <li>Dự đoán thời gian hoàn thành tác vụ in để quản lý công việc hiệu quả hơn</li>
                      </ul>
                      <p className="text-sm italic mt-1">
                        *1: Dành cho model C8180. C7580 là 75 trang/phút và C6580 là 65 trang/phút.<br />
                        *2: Chế độ ưu tiên màu sắc.
                      </p>
                    </div>

                    <div>
                      <h3 className="font-semibold text-cyan-700 mb-2">
                        In từ mọi thiết bị đa chức năng trong văn phòng
                      </h3>
                      <p>Với Server-less On-Demand Print (In theo nhu cầu không qua máy chủ)*, bạn có thể in và nhận bản in từ mọi bản thiết bị đa chức năng được kết nối.</p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Cải thiện năng suất bằng cách in từ mọi thiết bị đa chức năng khả dụng khác khi thiết bị hiện tại đang được sử dụng</li>
                        <li>Có thể liên kết đến 100 thiết bị</li>
                        <li>Có thể sửa đổi cài đặt tác vụ cụ thể ở cấp thiết bị để tiết kiệm thời gian (1 mặt đến 2 mặt, thêm dập ghim, tất cả đều đen trắng)</li>
                      </ul>
                      <p className="text-sm italic mt-1">* Tùy chọn</p>
                    </div>

                    <div>
                      <h2 className="text-[22px] font-bold text-black mb-6 uppercase">
                        Chia sẻ liền mạch và quản lý tài liệu
                      </h2>
                      <h3 className="font-semibold text-cyan-700 mb-2">
                        Trích xuất thông tin nhanh chóng cho các quy trình công việc khối lượng lớn
                      </h3>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Được trang bị Bộ nạp và đảo bản gốc tự động (DADF) màu một lượt quét</li>
                        <li>Có thể đạt quy trình công việc nhanh hơn và liên tục với tốc độ quét khoảng 270 trang/phút<sup>*1</sup> và dung lượng khay chứa giấy DADF 250 tờ<sup>*2</sup></li>
                        <li>Quy trình công việc yêu cầu với DADF có thể trở nên linh hoạt hơn, hỗ trợ nhiều loại giấy, từ 38<sup>*3</sup> đến 200 gsm</li>
                        <li>Cải thiện mức độ hiệu quả của quy trình công việc bằng cách tự động quét các tài liệu có kích thước tùy chọn, hoặc kích thước nhỏ như hóa đơn, về kích thước gần với tiêu chuẩn nhất</li>
                      </ul>
                      <p className="text-sm italic mt-1">*1: Quét hình 1 lượt, 2 mặt. Tài liệu tiêu chuẩn (A4 LEF), 200 dpi, Lưu trữ vào thư mục.<br />
                        *2: 80 gsm giấy. <br />
                        *3: Cho bản gốc in một mặt. 50 gsm cho bản gốc in hai mặt.</p>
                    </div>

                    <div>
                      <h3 className="font-semibold text-cyan-700 mb-2">
                        Các tính năng khác nhau giúp tiết kiệm thời gian và công sức trong hoạt động quét
                      </h3>
                      <p>Dữ liệu đã quét có thể được truyền qua nhiều phương thức bao gồm Email, URL và gửi tới PC (SMB/FTP/SFTP).</p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Dữ liệu có thể được gửi bằng cách sử dụng nhiều tính năng cùng một lúc</li>
                        <li>Cải thiện quy trình số hóa của bạn với các tính năng bao gồm tự động xoay chiều trang được quét về hướng thẳng đứng, sửa trang bị lệch hoặc xóa các trang trống</li>
                        <li>Bên cạnh định dạng TIFF và JPEG, dữ liệu được quét có thể được chuyển đổi sang tệp PDF hoặc DocuWorks có bật OCR* hoặc nén ở mức cao / có màu cụ thể. Ngoài ra, tài liệu còn có thể được chuyển đổi dang tài liệu Excel/Word có thể chỉnh sửa được*</li>
                        <li>Với ScanAuto, bạn có thể dễ dàng gửi dữ liệu đã quét đến địa chỉ e-mail của mình bằng cách chỉ cần nhấn một nút</li>
                      </ul>
                      <p className="text-sm italic mt-1">
                        * Tùy chọn.
                      </p>
                    </div>

                    <div>
                      <h3 className='font-semibold text-cyan-700 mb-2'>
                        Số hóa tài liệu giấy giúp quản lý tài liệu dễ dàng mà chẳng hề tốn công
                      </h3>
                      <p>Với tính năng Scan Delivery (Phân phối bản quét đến thư mục lưu trữ định sẵn)*, bạn có thể tự động xử lý và lưu trữ hình ảnh được quét chỉ bằng một nút ấn thao tác cài sẵn dành cho mỗi quy trình công việc hoặc một loại tài liệu nhất định.</p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Tự động hóa để đặt định dạng tập tin, tên tập tin, OCR*, v.v.</li>
                        <li>Tự động lưu trữ tài liệu đã quét và xử lý tại đúng điểm đến định sẵn</li>
                        <li>Chỉ định từ ngữ hoặc ký tự cụ thể trong tài liệu làm tên thư mục hoặc tên tập tin</li>
                        <li>Có thể đọc chính xác 0̸ và các ký tự hay bị nhận diện nhầm khác</li>
                      </ul>
                      <p className="text-sm italic mt-1">
                        * Tùy chọn.
                      </p>
                    </div>
                  </div>
                </div>


                {/* 🔻 An toàn và bảo mật */}
                <div className="mt-12">
                  <h2 className="text-[22px] font-bold text-black mb-6 uppercase">
                    Chất lượng bản in chuyên nghiệp
                  </h2>

                  <div className="space-y-6 text-[15px] text-black leading-relaxed">
                    <div>
                      <h3 className="font-semibold text-cyan-700 mb-2">
                        Đầu in LED có độ phân giải cao đầu tiên trên thế giới
                      </h3>
                      <p>Công nghệ hiện đại nhất giúp mang đến hình ảnh có chất lượng chuyên nghiệp và bản in có độ phân giải cao.</p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Đầu in LED đầu tiên trên thế giới* với độ phân giải 2.400 dpi.</li>
                        <li>Màu sắc sống động với mực Super EA Eco và các hạt mực nhỏ nhất giúp phân cấp màu sắc liền mạch.</li>
                        <li>Tái tạo lại hình ảnh rõ nét có đường nét mịn và văn bản nhỏ.</li>
                        <li>Tính năng Gloss mang lại một độ bóng đẹp tuyệt vời cho bài in. (ví dụ như ảnh.)</li>
                      </ul>
                      <p className="text-sm italic mt-1">
                        * Phương pháp chụp ảnh quang điện khô. Kể từ tháng 3 năm 2021. Theo nghiên cứu của chúng tôi.
                      </p>
                    </div>

                    <div>
                      <h3 className="font-semibold text-cyan-700 mb-2">
                        Năng suất cao cùng với khả năng vận hành liên tục
                      </h3>
                      <p>
                        Độ bền vượt trội và khả năng xử lý bản in cốt lõi và in khối lượng lớn.
                      </p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Tốc độ in cao, lên đến 81 trang/phút<sup>*1</sup></li>
                        <li>Trống quang dẫn có độ mòn thấp với tuổi thọ dài giúp giảm tần suất thay trống</li>
                        <li>Nạp giấy trữ lượng lớn lên đến 7.360 tờ<sup>*2</sup></li>
                        <li>Thay mực và thêm giấy mà không cần dừng công việc in đang chạy và tăng thời gian vận hành máy lên mức tối đa</li>
                      </ul>
                      <p className="text-sm italic mt-1">
                        *1: Dành cho model C8180. C7580 là 75 trang/phút và C6580 là 65 trang/phút.<br />
                        *2: Giấy 80 gsm. Khi lắp đặt Bộ nạp trữ lượng lớn C3-DS.
                      </p>
                    </div>

                    <div>
                      <h3 className="font-semibold text-cyan-700 mb-2">
                        Duy trì chất lượng in với cân chỉnh dễ dàng
                      </h3>
                      <p>Sử dụng tính năng SIQA* tích hợp để điều chỉnh chất lượng in dễ dàng và nhanh chóng.</p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Chỉ cần quét biểu đồ chuyên dụng để tự động tính giá trị điều chỉnh phù hợp cho cả cân chỉnh trước sau, cân chỉnh độ đều màu và cân chỉnh hình ảnh</li>
                        <li>Người dùng có thể vận hành nhanh chóng và đơn giản mà không cần nhớ các giá trị tinh chỉnh</li>
                        <li>Ngoài chất lượng in, tốc độ sử dụng máy cũng được cải thiện</li>
                      </ul>
                      <p className="text-sm italic mt-1">
                        * Simple Image Quality Adjustment
                      </p>
                    </div>

                    <div>
                      <h3 className="font-semibold text-cyan-700 mb-2">
                        Mạnh mẽ, yên tĩnh, tiết kiệm không gian
                      </h3>
                      <p>
                        Chúng tôi cũng đã thiết kế cho khả năng sử dụng hàng ngày và cài đặt dễ dàng.
                      </p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Khay tay tiêu chuẩn được đặt gọn gàng trong thiết bị chính của thiết bị đa năng</li>
                        <li>Bộ fax tích hợp* trong thiết bị đa năng để tiết kiệm không gian</li>
                        <li>Để cải thiện khả năng giảm tiếng ồn, thiết kế quạt và vận chuyển giấy đã được tối ưu hóa</li>
                      </ul>
                      <p className="text-sm italic mt-1">* Tùy chọn</p>
                    </div>

                    <div>
                      <h2 className="text-[22px] font-bold text-black mb-6 uppercase">Sắp xếp các hoạt động phù hợp với phong cách hoạt động từ xa</h2>
                      <h3 className="font-semibold text-cyan-700 mb-2">
                        Không bỏ lỡ bất kỳ fax nào khi bạn làm việc từ xa
                      </h3>
                      <p>
                        Chức năng fax không giấy tự động lưu trữ các fax nhận được vào thư mục có thể chuyển đến máy tính cá nhân hoặc gửi dưới dạng email.
                      </p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Có thể chuyển tiếp fax đã nhận đến thiết bị di động của bạn qua email</li>
                        <li>Có thể sắp xếp theo số fax, ngày nhận được và người phụ trách*</li>
                        <li>Có thể chuyển đổi thao tác xử lý fax đang đến theo thời gian, ngày trong tuần và khoảng thời gian*</li>
                        <li>Có thể đặt chỉ bằng một cú chạm*</li>
                      </ul>
                      <p className="text-sm italic mt-1">* Tùy chọn</p>
                    </div>

                    <div>
                      <h3 className="font-semibold text-cyan-700 mb-2">
                        Tính linh hoạt trong bố cục văn phòng
                      </h3>
                      <p>
                        Hỗ trợ môi trường LAN không dây<sup>*1</sup>.
                      </p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Hỗ trợ tự do di chuyển thiết bị trong văn phòng nhờ kết nối Wi-Fi.</li>
                        <li>Có thể kết nối với tối đa 5 thiết bị đa chức với tính năng kết nối wi-fi trực tiếp (Wi-Fi Direct) cùng lúc</li>
                        <li>Hỗ trợ in trực tiếp qua thiết bị di động<sup>*2</sup></li>
                        <li>Hỗ trợ Print Utility, AirPrint và Mopria® Print Service</li>
                      </ul>
                      <p className="text-sm italic mt-1">*1: Tùy chọn. <br />
                        *2: Khi kết nối Wi-Fi Direct.</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-cyan-700 mb-2">
                        Hỗ trợ Universal Print của Microsoft
                      </h3>
                      <p>
                        Bằng cách đăng ký trước các thiết bị đa chức năng với Universal Print của Microsoft, người dùng<sup>*1</sup> được xác thực bằng Microsoft Entra ID<sup>*2</sup> có thể in từ mọi nơi qua đám mây.
                      </p>
                      <p className="text-sm italic mt-1">*1: Các tổ chức có hoặc đăng ký Microsoft Windows Enterprise hoặc Microsoft 365. <br />
                        *2: Trước đây là Azure Active Directory.</p>
                    </div>

                    <div>
                      <h3 className="font-semibold text-cyan-700 mb-2">
                        In ấn dễ dàng và bảo mật ngay cả khi bạn đang làm việc từ xa
                      </h3>
                      <p>
                        FUJIFILM IWpro* là giải pháp nền tảng an toàn đáp ứng mọi nhu cầu cho số hóa doanh nghiệp, cung cấp không gian làm việc để cộng tác, tối ưu hóa quy trình làm việc, quản lý tài liệu và siêu dữ liệu hiệu quả cũng như khả năng in linh hoạt trên nền tảng đám mây.
                      </p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Người dùng có thể truy cập FUJIFILM IWpro* qua một trình duyệt web từ bất kỳ vị trí nào có dịch vụ internet, chẳng hạn như từ văn phòng chi nhánh hoặc khi đang di chuyển</li>
                        <li>Môi trường in bảo mật và chất lượng cao luôn sẵn sàng bất kể vị trí của bạn, dù trong hay ngoài văn phòng của bạn</li>
                        <li>Người dùng có thể chọn và in tài liệu được lưu trên đám mây bằng thiết bị đa năng ngoài văn phòng</li>
                      </ul>
                      <p className="text-sm italic mt-1">* Các dịch vụ đám mây do FUJIFILM Business Innovation cung cấp. Yêu cầu hợp đồng riêng.</p>
                    </div>

                    <div>
                      <h3 className="font-semibold text-cyan-700 mb-2">
                        Tích hợp đám mây tập trung
                      </h3>
                      <p>
                        Cloud Service Hub* cho phép đăng nhập đơn vào nhiều dịch vụ lưu trữ đám mây.
                      </p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Có thể chỉ định vị trí lưu trữ cụ thể cho tài liệu quét trực tiếp từ thiết bị đa chức năng</li>
                        <li>Hỗ trợ tìm kiếm tài liệu từ nhiều dịch vụ đám mây</li>
                        <li>Có thể tiến hành tìm kiếm toàn văn trên tài liệu đã quét OCR</li>
                      </ul>
                      <p className="text-sm italic mt-1">* Các dịch vụ đám mây do FUJIFILM Business Innovation cung cấp. Yêu cầu hợp đồng riêng.</p>
                    </div>

                    <div>
                      <h2 className="text-[22px] font-bold text-black mb-6 uppercase">Có thể in cho nhiều loại tài liệu</h2>
                      <h3 className="font-semibold text-cyan-700 mb-2">
                        Thúc đẩy xuất bản các ấn phẩm truyền thông nội bộ ấn tượng
                      </h3>
                      <p>
                        Hỗ trợ nhiều khổ giấy và định lượng giấy để tạo nên nhiều
                        thành phẩm. Bạn có thể dễ dàng tạo tờ rơi, danh thiếp và
                        áp phích để mở rộng kinh doanh.
                      </p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Hỗ trợ nhiều khổ giấy từ bưu thiếp đến giấy dài (330 x 1.300 mm<sup>1</sup>)</li>
                        <li>Hỗ trợ nhiều định lượng giấy từ giấy mỏng 52 gsm đến giấy bìa 350 gsm<sup>2</sup></li>
                        <li>Đổi mới công nghệ lõi để có hình chữ và bản in đẹp ngay cả trên phong bì và giấy gân có bề mặt không bằng phẳng</li>
                      </ul>
                      <p className="text-sm italic mt-1">*1: Khi nạp giấy từ Khay tay được lắp trực tiếp vào máy in hoặc từ Bộ chèn trang để in Biểu ngữ. Khi in trên một cạnh.
                        In 2 mặt lên đến 330 x 762 mm. <br />
                        *2: Khi lắp đặt tuỳ chọn Bộ nạp trữ lượng lớn C3-DS. Lên đến 300 gsm trong cấu hình tiêu chuẩn.</p>
                    </div>

                    <div>
                      <h3 className="font-semibold text-cyan-700 mb-2">
                        Bản in đẹp trên nhiều loại giấy
                      </h3>
                      <p>
                        Hỗ trợ nhiều đặc điểm của giấy, cho bản in ra có độ chính xác cao.
                      </p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Bằng cách điều chỉnh lực áp lên giấy theo độ dày của giấy, giấy sẽ được nạp ổn định ngay cả với giấy bìa và đạt được độ chính xác chồng màu cao</li>
                        <li>Mô-đun làm thẳng giấy tích hợp sẽ làm thẳng giấy và ổn định hoạt động nạp giấy</li>
                        <li>Khi đánh giá độ cong của giấy, có thể tiến hành điều chỉnh giấy cong trong thời gian thực*</li>
                      </ul>
                      <p className="text-sm italic mt-1">* Tùy chọn.</p>
                    </div>

                    <div>
                      <h3 className="font-semibold text-cyan-700 mb-2">
                        Tùy chọn Hoàn thiện nâng cao
                      </h3>
                      <p>
                        Bạn có thể thực hiện tất cả cùng một lúc, từ in cho đến gia công sau in.
                      </p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Hỗ trợ các chức năng văn phòng thường dùng như Đục lỗ, Dập ghim ngang, Dập ghim lồng và Gập đôi</li>
                        <li>Bộ hoàn thiện-C4/C5 có thể được đặt trong văn phòng với kích cỡ gọn gàng, đồng thời cải thiện hiệu suất như khổ giấy tối thiểu và số lượng tờ cho Dập ghim giữa</li>
                        <li>Bộ hoàn thiện D6 có thể thực hiện gia công sau in cho bản in đầu ra ở khối lượng lớn hơn, đồng thời chèn các trang bìa và các trang phân tách</li>
                        <li>Mô-đun giao diện D1* loại mỏng cũng có ở dạng mô-đun kết nối Bộ hoàn thiện D6</li>
                      </ul>
                      <p className="text-sm italic mt-1"> Ghi chú: Tùy chọn. Xem (Tùy chọn)để biết chi tiết về các tùy chọn đầu ra và gia công sau in. <br />
                        * Khi mô-đun này được sử dụng, không thể kết nối với Bộ chèn trang D1.</p>
                    </div>

                    <div>
                      <h2 className="text-[22px] font-bold text-black mb-6 uppercase">Bảo vệ thông tin quan trọng</h2>
                      <h3 className="font-semibold text-cyan-700 mb-2">
                        Bảo vệ khỏi người dùng trái phép
                      </h3>
                      <p>
                        Nhiều tùy chọn cài đặt ủy quyền người dùng cho phép quản trị viên chọn kết hợp phù hợp theo từng hoàn cảnh môi trường.
                      </p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Xác thực cục bộ</li>
                        <li>Xác thực bởi Máy chủ từ xa*</li>
                        <li>Xác thực thẻ IC*</li>
                        <li>Quyền truy cập tính năng của người dùng cụ thể</li>
                        <li>In xác thực cá nhân</li>
                      </ul>
                      <p className="text-sm italic mt-1">* Tùy chọn.</p>
                    </div>

                    <div>
                      <h3 className="font-semibold text-cyan-700 mb-2">
                        Có thể tạo thêm lớp truy cập không mong muốn cho những người dùng cụ thể (ví dụ: khách).
                      </h3>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Bộ Ethernet phụ*</li>
                      </ul>
                      <p className="text-sm italic mt-1">* Tùy chọn.</p>
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
                        <li>Sử dụng chip TPM* 2.0 để quản lý khóa mã hóa</li>
                        <li>Xóa cài đặt và thông tin tài liệu cùng lúc</li>
                      </ul>
                      <p className="text-sm italic mt-1">* Trusted Platform Module (Mô-đun nền tảng đáng tin cậy)</p>
                      <p>Bảo vệ thông tin bằng mã hóa mạnh mẽ khi truyền giữa các thiết bị, máy chủ, v.v.</p>
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
                      <p>
                        Bảo vệ cài đặt thiết bị ở nhiều cấp độ bằng cách phân vùng rõ ràng các hạn chế thay đổi cho các đối tượng mục tiêu khác nhau - Người dùng cuối, quản trị viên CNTT và Kỹ sư dịch vụ.
                      </p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Thiết đặt thao tác đại diện dịch vụ</li>
                        <li>Khóa tài khoản để ngăn ngừa truy cập trái phép</li>
                        <li>Thông tin để thay đổi mật khẩu mặc định</li>
                        <li>Cảnh báo hiển thị khi sử dụng địa chỉ IP toàn cầu</li>
                      </ul>
                      <p>Ngăn chặn cài đặt chương trình trái phép mà không cần thông báo. Hỗ trợ kiểm tra CNTT tiện lợi với nhật ký dữ liệu thiết bị để dễ dàng theo dõi.</p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Xác minh chữ ký phần mềm</li>
                        <li>Hạn chế cập nhật từ xa</li>
                        <li>Lọc địa chỉ IP</li>
                        <li>Phát hiện can thiệp trái phép khi khởi động và tự đng khôi phục khi phát hiện có can thiệp trái phép</li>
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
                        <li>In văn bản ẩn*</li>
                        <li>Chức năng nhúng và theo dõi mã số hóa*</li>
                      </ul>
                      <p className="text-sm italic mt-1">* Tùy chọn</p>
                    </div>

                    <div>
                      <h3 className="font-semibold text-cyan-700 mb-2">
                        Chứng nhận bảo mật
                      </h3>

                      <ul className="list-disc pl-5 space-y-1">
                        <li>Được chứng nhận ISO/IEC 15408, tuân thủ tiêu chuẩn quốc tế về việc thiết kế và vận hành bảo mật CNTT</li>
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