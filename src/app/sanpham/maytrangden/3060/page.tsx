// pages/sanpham/maytrangden/2560.tsx
'use client';

import Image from 'next/image';

import { useState } from 'react';
import RelatedProductSlider from '../../../components/RelatedProductSlider'
// Example productsBlackWhite array, replace with your actual data or import
// const productsBlackWhite = [
//   {
//     name: 'Máy Photocopy Apeos A3060',
//     image: '/productsBlackWhite/Apeos 356030602560.png',
//     price: 'Liên Hệ',
//   },
//   {
//     name: 'Máy Photocopy Apeos 3570',
//     image: '/productsBlackWhite/Apeos 3570.png',
//     price: 'Liên Hệ',
//   },
//   // Add more products as needed
// ];

const product = {
  name: 'Máy Photocopy Apeos A3060',
  price: 'Liên Hệ',
  image: '/productsBlackWhite/Apeos 356030602560.png',
specs: [
  'Kiểu: Bảng điều khiển',
  'Dung lượng bộ nhớ: 4 GB (Tối đa: 4 GB)',
  'Dung lượng thiết bị lưu trữ: 128 GB',
  'Độ phân giải quét: 600 x 600 dpi',
  'Độ phân giải in ấn: Chuẩn 1.200 x 1.200 dpi, 600 x 600 dpi (Văn bản / Văn bản-Ảnh / Ảnh / Bản đồ)',
  'Thời gian khởi động: 28 giây hoặc ít hơn (nhiệt độ phòng là 23°C)',
  'Khổ giấy bản gốc: Tối đa A3, 11 x 17”, 297 x 432 mm cho cả Tờ bản in và Sách',
  'Khổ giấy: Tối đa 13 x 19 inch (330 x 483 mm), 12,6 x 19,2 inch (320 x 488 mm), A3; Tối thiểu A6, Bưu thiếp (100 x 148 mm); Chiều rộng mặt hình: Mép trên 4,0 mm, Mép dưới 4,0 mm, Mép trái/phải 3,0 mm',
  'Thời gian ra bản sao chụp đầu tiên: 4,5 giây (A4 LEF)',
  'Tốc độ sao in: 30 trang/phút (A4 LEF)',
  'Dung lượng khay giấy: Kiểu máy 2 khay: 500 tờ x 2 - Khay + Khay tay 96 tờ; Kiểu máy 4 khay: 500 tờ x 4 - Khay + Khay tay 96 tờ (tùy chọn)',
  'Dung lượng khay giấy ra: 500 tờ (A4 LEF)',
  'Nguồn điện: AC220–240V ±10%, 10A, 50/60Hz',
  'Mức tiêu thụ điện: Tối đa 1,76 kW (Chế độ nghỉ: 0,4 W, Chế độ sẵn sàng: 93 W)',
  'Kích thước: Kiểu máy 2 khay: Rộng 590 x Sâu 659 x Cao 885 mm',
  'Trọng lượng: Kiểu máy 2 khay: 65 kg',
  'Độ phân giải in (PCL): 1.200 x 1.200 dpi (chuẩn, chất lượng cao, độ phân giải cao)',
  'Độ phân giải in: 1.200 x 1.200 dpi (chuẩn, chất lượng cao, độ phân giải cao)',
  'Hệ điều hành hỗ trợ (PCL/Mac OS X): Windows 11 (64 bit), Windows 10 (32/64 bit), Windows Server 2025/2022/2019/2016 (64 bit), MacOS 15/14/13/12/11',
  'Hệ điều hành hỗ trợ (PostScript): Windows 11 (64 bit), Windows 10 (32/64 bit), Windows Server 2025/2022/2019/2016 (64 bit), MacOS 15/14/13/12/11',
  'Kết nối: Ethernet 1000BASE-T / 100BASE-TX / 10BASE-T, USB 3.0 / USB 2.0, LAN không dây (tùy chọn)',
  'Kiểu quét: Màu',
  'Độ phân giải quét: 600 x 600 dpi, 400 x 400 dpi, 300 x 300 dpi, 200 x 200 dpi',
  'Tốc độ quét: Phù hợp với tốc độ bộ nạp và đảo bản gốc tự động',
  'Khổ giấy bản gốc (DADF): Tối đa A3, 11 x 17 inch; Tối thiểu A6',
  'Trọng lượng giấy (DADF): 38–128 gsm (2 mặt: 50–128 gsm)',
  'Dung lượng nạp (DADF): 110 tờ',
  'Tốc độ sao chụp qua DADF (A4 LEF, 1 mặt): 30 trang/phút',
  'Tốc độ quét (DADF): Đen trắng: 55 trang/phút, Màu: 55 trang/phút (Tài liệu tiêu chuẩn A4 LEF, 200 dpi, lưu trữ vào thư mục)'
],

};
export default function Product7580Page() {
  // const relatedProducts = productsBlackWhite.filter(
  //   (product) => product.name !== 'Máy Photocopy Apeos A3060'
  // );

  const [showFullDescription, setShowFullDescription] = useState(false);
  const [showFullSpecs, setShowFullSpecs] = useState(false);
  return (
    <div className="bg-white/90 max-w-[1300px] mx-auto rounded-2xl shadow-xl p-4 md:p-6 mt-10">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="relative w-full lg:w-1/2 p-4">
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
            <li>02 khay tự động & 01 khay tay .</li>
            <li>Trọng lượng giấy: 60 - 256 gsm.</li>
            <li>Bộ nạp và đảo bản gốc tự động (DADF).</li>
            <li>Bộ đảo bản sao (Duplex).</li>
            <li>Bộ nhớ: Tối đa 4GB. SSD: 128GB.</li>
            <li>Màn hình cảm ứng màu 7 inch.</li>
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
          <h3 className="text-[30px] font-bold text-blue-700 mb-2">
            Máy Photocopy Apeos A3060
          </h3>
          <h4 className="text-lg font-semibold text-blue-700 mb-2">
            Nhỏ gọn – Hiệu suất cao – Bảo mật toàn diện – Hỗ trợ làm việc từ xa
          </h4>
          <p className="text-black text-justify mb-4">
            <strong>Apeos A3060</strong> là dòng thiết bị đa chức năng đen trắng A3 đến từ <strong>FUJIFILM Business Innovation</strong>,
            mang đến khả năng vận hành nhanh chóng, chất lượng in ấn vượt trội và độ bảo mật cao.
            Thiết bị hỗ trợ làm việc linh hoạt trong môi trường văn phòng hiện đại hoặc từ xa, với giao diện dễ sử dụng và khả năng tích hợp mạnh mẽ
            với các dịch vụ điện toán đám mây và thiết bị di động.
          </p>

          <div className="w-full flex justify-center my-6">
            <Image
              src="/images/5530.png"
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
                    Năng suất cao cho hiệu quả công việc cao hơn
                  </h2>

                  <div className="space-y-6 text-[15px] text-black leading-relaxed">
                    <div>
                      <h3 className="font-semibold text-cyan-700 mb-2">
                        Thiết kế nhỏ gọn – Thiết lập dễ dàng
                      </h3>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Kích thước máy chỉ rộng 590 mm x sâu 659 mm</li>
                        <li>Linh hoạt chọn cấu hình: 2 khay hoặc 4 khay</li>
                        <li>Chiều cao phù hợp với người dùng khuyết tật (đáp ứng ADA)</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-semibold text-cyan-700 mb-2">
                        Chất lượng hình ảnh vượt trội
                      </h3>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Độ phân giải in lên đến 1.200 x 1.200 dpi sử dụng đầu in LED</li>
                        <li>Bộ xử lý nâng cao tái tạo mịn các ký tự, không răng cưa</li>
                        <li>Sử dụng mực EA-Eco LGK thân thiện môi trường, bóng thấp</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-semibold text-cyan-700 mb-2">
                        Khởi động nhanh – Hiệu suất cao
                      </h3>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Màn hình thao tác hiển thị trong 6 giây</li>
                        <li>In bản đầu tiên chỉ trong 4,5 giây</li>
                        <li>Khởi động toàn hệ thống dưới 28 giây</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-semibold text-cyan-700 mb-2">
                        Quét nhanh và thông minh
                      </h3>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Quét 2 mặt 1 lượt lên đến 80 trang/phút</li>
                        <li>Tự động chuyển khổ giấy nhỏ thành chuẩn để in/quét</li>
                        <li>Hỗ trợ nạp tài liệu nhiều khổ giấy, từ 38 – 209 gsm</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-semibold text-cyan-700 mb-2">
                        Hỗ trợ quét/in trực tiếp qua USB
                      </h3>
                      <p>Có thể lưu file quét trực tiếp hoặc in từ USB mà không cần máy tính.</p>
                    </div>

                    <div>
                      <h3 className="font-semibold text-cyan-700 mb-2">
                        Nhiều tùy chọn hoàn thiện tài liệu
                      </h3>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Bộ hoàn thiện A2 và B4/B5 hỗ trợ chia bộ, dập ghim, gập đôi, dập lỗ</li>
                        <li>Hỗ trợ dập không ghim lên đến 10 tờ</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-semibold text-cyan-700 mb-2">
                        Vận hành dễ dàng – Điều khiển di động
                      </h3>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Điện thoại thông minh trở thành bảng điều khiển bằng app Print Utility</li>
                        <li>Truy cập nhanh các tính năng thường dùng</li>
                        <li>Kết nối nhanh bằng mã QR, Wi-Fi Direct</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-semibold text-cyan-700 mb-2">
                        Hỗ trợ làm việc từ xa – Bảo mật mạnh mẽ
                      </h3>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>In từ xa với Cloud On-Demand Print</li>
                        <li>Nhận Fax không giấy qua email</li>
                        <li>Hỗ trợ xác thực người dùng bằng thẻ, mã hóa dữ liệu, TPM 2.0</li>
                        <li>Tuân thủ chuẩn bảo mật ISO/IEC 15408</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-semibold text-cyan-700 mb-2">
                        Tối ưu năng lượng và bảo vệ môi trường
                      </h3>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Tiết kiệm điện năng nhờ đầu in LED</li>
                        <li>Dập không ghim giảm rác thải văn phòng</li>
                        <li>Đạt chứng nhận Green Value – hạng Silver</li>
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
                      <p>Giao diện màu nền đen và xám mang đến độ tương phản cao hơn, giúp nhận diện dễ dàng.</p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Xác thực cục bộ</li>
                        <li>Xác thực bởi Máy chủ từ xa*</li>
                        <li>Xác thực thẻ IC*</li>
                        <li>Quyền truy cập tính năng của người dùng cụ thể</li>
                        <li>In xác thực cá nhân</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-semibold text-cyan-700 mb-2">
                        Bảo vệ khỏi truy cập trái phép
                      </h3>
                      <p>
                        Bảo vệ cài đặt thiết bị ở nhiều cấp độ bằng cách phân vùng rõ
                        ràng các hạn chế thay đổi cho các đối tượng mục tiêu khác nhau
                        - Người dùng cuối, quản trị viên CNTT và Kỹ sư dịch vụ.
                      </p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Thiết đặt thao tác đại diện dịch vụ</li>
                        <li>Khóa tài khoản để ngăn ngừa truy cập trái phép</li>
                        <li>Thông tin để thay đổi mật khẩu mặc định</li>
                        <li>Cảnh báo hiển thị khi sử dụng địa chỉ IP toàn cầu</li>
                      </ul>
                      <p>
                        Ngăn chặn cài đặt chương trình trái phép mà không cần thông
                        báo. Hỗ trợ kiểm tra CNTT tiện lợi với nhật ký dữ liệu thiết bị để
                        dễ dàng theo dõi.
                      </p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Xác minh chữ ký phần mềm</li>
                        <li>Hạn chế cập nhật từ xa</li>
                        <li>Lọc địa chỉ IP</li>
                        <li>Phát hiện can thiệp trái phép khi khởi động và tự động khôi phục khi phát
                          hiện có can thiệp trái phép</li>
                        <li>Ngăn ngừa giả mạo khi vận hành</li>
                        <li>Nhật ký kiểm duyệt</li>
                        <li>Truyền hệ thống nhật ký kiểm duyệt</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-semibold text-cyan-700 mb-2">
                        Bảo vệ dữ liệu
                      </h3>
                      <p>Bảo vệ chống lại các ý định xâm nhập dữ liệu như tấn công, can
                        thiệp sửa đổi cài đặt thiết bị/hệ thống</p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Mã hóa tài liệu đã lưu</li>
                        <li>Sử dụng chip TPM* 2.0 để quản lý khóa mã hóa</li>
                        <li>Xóa cài đặt và thông tin tài liệu cùng lúc</li>
                      </ul>
                      <p>
                        Bảo vệ thông tin bằng mã hóa mạnh mẽ khi truyền giữa các thiết
                        bị, máy chủ, v.v.
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
                        Ngăn ngừa lỗi vận hành
                      </h3>
                      <p>
                        Ngăn chặn rò rỉ thông tin do những sai lầm vô tình của quản trị
                        viên và người dùng.
                      </p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Quét tài liệu để gửi đến đích cố định</li>
                        <li>Nhập lại người nhận fax</li>
                        <li>Ghi chú</li>
                        <li>In văn bản ẩn*</li>
                        <li>Chức năng nhúng và theo dõi mã số hóa*</li>
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