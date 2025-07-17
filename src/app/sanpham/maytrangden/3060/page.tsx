// pages/sanpham/maytrangden/3060.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import RelatedProductSlider from '../../../components/RelatedProductSlider'
const productsBlackWhite = [
  {
    name: 'Máy Photocopy Apeos 2560',
    image: '/productsBlackWhite/Apeos 356030602560.png',
    price: 'Liên Hệ',
  },
  {
    name: 'Máy Photocopy Apeos 3570',
    image: '/productsBlackWhite/Apeos 3570.png',
    price: 'Liên Hệ',
  },
  // Add more products as needed
];
const product = {
  name: "Máy Photocopy Apeos 3060",
  price: "Liên Hệ",
  image: "/productsBlackWhite/Apeos 356030602560.png",
  specs: [
    "Máy Photocopy kỹ thuật số, Laser trắng đen",
    "Chức năng: Copy + In trắng đen + Scan màu qua mạng",
    "Bộ nạp và đảo 2 mặt bản gốc tự động (ARDF)",
    "Bộ đảo 2 mặt bản sao tự động (Duplex)",
    "Tốc độ: 50 bản/phút. Khổ giấy lớn nhất: A3, nhỏ nhất: A5",
    "Khay giấy vào: 2 khay x 550 tờ",
    "Khay giấy tay: 100 tờ",
    "Khay giấy ra bản sao: 500 tờ",
    "Thu Nhỏ / Phóng to: 25% – 400%",
    "Độ phân giải: 600 dpi",
    "Dung lượng bộ nhớ: 1 GB + ổ cứng 128 GB",
    "Màn hình cảm ứng màu thông minh",
    "Tiết kiệm điện năng, tái sử dụng mực thải",
    "Sử dụng mực: 4500s (~ 20.000 Trang)",
    "Tuổi thọ Drum: 500.000 bản",
    "Công suất trung bình: 30.000 bản/tháng",
    "Tối đa: 100.000 bản/tháng",
    "Khởi động: 10s, Chụp liên tục: 999 bản",
    "Tiêu thụ: 2.0 kW, Nguồn điện: 110V",
    "Kích thước: 670 x 682 x 895 mm, Trọng lượng: 97 Kg"
  ]
};

export default function Product7580Page() {
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [showFullSpecs, setShowFullSpecs] = useState(false);
  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8">
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
      <RelatedProductSlider />
      {/* 🔻 Mô tả & Thông số kỹ thuật trong cùng 1 hàng */}
      <div className="mt-12 flex flex-col lg:flex-row gap-8">

        {/* Cột trái: Mô tả sản phẩm */}
        <div className="lg:w-2/3 w-full">
          <h2 className="text-xl font-bold text-black mb-4 uppercase">Mô Tả Sản Phẩm</h2>
          <h3 className="text-[30px] font-bold text-blue-700 mb-2">
            Máy Photocopy Apeos 5570
          </h3>
          <h4 className="text-lg font-semibold text-blue-700 mb-2">
            Hiệu suất vượt trội, vận hành thông minh
          </h4>
          <p className="text-black text-justify mb-4">
            <strong>Apeos 5570</strong> là dòng máy photocopy kỹ thuật số cao cấp, được thiết kế cho môi trường văn phòng hiện đại
            với yêu cầu xử lý tài liệu nhanh, bảo mật cao và khả năng tùy biến linh hoạt. Thiết bị mang đến sự kết hợp hoàn hảo
            giữa tốc độ vận hành mạnh mẽ, tính năng tự động hóa thông minh và giao diện điều khiển dễ sử dụng.
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
                        Giảm thiểu thời gian chờ đợi cho năng suất cao hơn
                      </h3>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Thời gian cho ra bản sao chụp đầu tiên chỉ trong 3,6*¹ giây</li>
                        <li>Thời gian khởi động máy chưa đầy 30 giây*² và thời gian khôi phục là 11 giây</li>
                        <li>Smart WelcomeEyes phát hiện người dùng và tự động “đánh thức” máy từ chế độ nghỉ</li>
                      </ul>
                      <p className="text-sm italic mt-1">*1: A4 LEF – *2: Tính chỉnh khi hợp sẵn / Dịch vụ tùy chỉnh: Khi được kích hoạt.</p>
                    </div>

                    <div>
                      <h3 className="font-semibold text-cyan-700 mb-2">
                        Giảm thiểu rủi ro bảo mật thông tin không chủ ý với các cảnh báo rõ ràng
                      </h3>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Nhắc người dùng lấy tài liệu góc hoặc tài liệu in bị bỏ lại trên các khay</li>
                        <li>Hạn chế khả năng quên tài liệu tại Khay giữa hoặc Khay nạp</li>
                        <li>Đèn ở Khay giữa thông báo thêm khi nhận được bản trên Khay hỏng</li>
                        <li>Phát âm báo khi có các tài liệu bản gốc bỏ quên trên mặt kính quét</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-semibold text-cyan-700 mb-2">
                        Hoạt động dễ dàng với cơ chế khay có thể thu vào
                      </h3>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Đẩy nhẹ để đóng</li>
                        <li>Thu vào một cách nhẹ nhàng</li>
                        <li>Kéo ra là dễ dàng</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-semibold text-cyan-700 mb-2">
                        Trích xuất thông tin nhanh chóng cho các quy trình công việc khối lượng lớn
                      </h3>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Có thể đọc lên đến 160 trang/phút* ở tốc độ cao khi Quét</li>
                        <li>Bộ nạp bản gốc có thể quét đồng thời một lần một hoặc hai mặt tài liệu khối lượng lớn</li>
                        <li>Bộ nạp bản gốc có khả năng phát hiện nhiều loại giấy – Có thể nạp giấy từ 38 đến 209 gsm</li>
                        <li>Thiết kế nạp dễ dàng, hỗ trợ nhiều khổ giấy tùy chỉnh</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-semibold text-cyan-700 mb-2">
                        Thao tác nhanh chóng với tính năng quét Bộ nạp và đảo bản gốc tự động cho các tài liệu có kích thước tùy chỉnh
                      </h3>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Hỗ trợ kích cỡ tối thiểu 49 mm (R) x 85 mm (D)*</li>
                        <li>Quét ngay lập tức mà không cần nhập thủ công từng kích thước gốc</li>
                        <li>Tự động chuyển đổi bản gốc có kích thước tùy chỉnh thành khổ tiêu chuẩn</li>
                        <li>Nạp và tải nhiều tờ gốc cùng nhau</li>
                      </ul>
                      <p className="text-sm italic mt-1">* Áp dụng cho giấy có trọng lượng 38 – 209 gsm.</p>
                    </div>

                    <div>
                      <h3 className="font-semibold text-cyan-700 mb-2">
                        Nhiều tùy chọn hoàn thiện khác nhau sẵn sàng để đáp ứng nhu cầu của bạn
                      </h3>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Hỗ trợ Dập không ghim*¹ đơn và đôi</li>
                        <li>Dập ghim*² / Đục lỗ / Dập ghim lồng / Gập chéo / Gập làm ba / Gập đôi sách</li>
                        <li>Nhiều bộ hoàn thiện: A2 / B4-B5 / C4-C5 / C4-C5 + CD3</li>
                      </ul>
                      <p className="text-sm italic mt-1">
                        *1: Các mẫu khung đơn: Bộ hoàn thiện B5, Bộ hoàn thiện C5 và Bộ hoàn thiện C5 có bộ đóng sách.
                        <br />*2: Sẽ cần bộ hoàn thiện B5 và B6.
                      </p>
                    </div>
                  </div>
                </div>


                {/* 🔻 An toàn và bảo mật */}
                <div className="mt-12">
                  <h2 className="text-[22px] font-bold text-black mb-6 uppercase">
                    An toàn và bảo mật
                  </h2>

                  <div className="space-y-6 text-[15px] text-black leading-relaxed">
                    <div>
                      <h3 className="font-semibold text-cyan-700 mb-2">
                        Bố cục đơn giản với menu điều hướng dễ dàng
                      </h3>
                      <p>Giao diện màu nền đen và xám mang đến độ tương phản cao hơn, giúp nhận diện dễ dàng.</p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Các biểu tượng được dán trái đều giúp nhận diện dễ dàng</li>
                        <li>Các bước vận hành nhất quán của từng chức năng giúp dễ dàng lặp lại</li>
                        <li>Khả năng tùy chỉnh màn hình chính theo sở thích cá nhân cho phép truy cập dễ dàng các chức năng thường xuyên sử dụng</li>
                        <li>Các cài đặt ghim nhanh cho các tác vụ sử dụng thường xuyên có thể lưu lại</li>
                        <li>Hiển thị ánh sáng để nhận thấy báo hiệu công việc hoàn tất hoặc có lỗi</li>
                        <li>Thông báo bằng âm thanh nhẹ để cảnh báo và thu hút sự chú ý</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-semibold text-cyan-700 mb-2">
                        Điện thoại thông minh trở thành “bảng điều khiển di động”
                      </h3>
                      <p>
                        Kết nối liền mạch với các thiết bị di động cho các tác vụ sao chụp, Fax, In, Quét*¹ bằng cách sử dụng ứng dụng Print Utility*².
                      </p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Thiết bị di động có thể được sử dụng làm bảng điều khiển thay thế để kiểm soát hoạt động nhằm giảm tiếp xúc không cần thiết</li>
                        <li>Các cài đặt thường xuyên sử dụng có thể được lưu dưới dạng “Yêu thích”</li>
                        <li>Gửi fax hoặc email trực tiếp từ tất cả các chức năng từ trong điện thoại thông minh</li>
                        <li>Hạn chế tiếp xúc với máy in để đảm bảo vệ sinh</li>
                        <li>Thiết lập kết nối Wi-Fi trực tiếp nhanh chóng bằng cách quét mã QR trên bảng điều khiển</li>
                      </ul>
                      <p className="text-sm italic mt-1">
                        *1: Email, Quét vào thư mục <br />
                        *2: Tải xuống miễn phí từ Google Play™ hoặc App Store
                      </p>
                    </div>

                    <div>
                      <h3 className="font-semibold text-cyan-700 mb-2">
                        Tính linh hoạt trong bố cục văn phòng
                      </h3>
                      <p>Hỗ trợ môi trường LAN không dây*¹.</p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Hỗ trợ từ cổng di chuyển thiết bị trong văn phòng nhỏ kết nối Wi-Fi</li>
                        <li>Có thể kết nối với tối đa 5 thiết bị đa chức với tính năng kết nối wi-fi trực tiếp (Wi-Fi Direct) cùng lúc</li>
                        <li>Hỗ trợ in trực tiếp qua thiết bị di động*²</li>
                        <li>Hỗ trợ Print Utility, AirPrint và Mopria® Print Service</li>
                      </ul>
                      <p className="text-sm italic mt-1">
                        *1: Tùy chọn <br />
                        *2: Khi kết nối Wi-Fi Direct
                      </p>
                    </div>

                    <div>
                      <h3 className="font-semibold text-cyan-700 mb-2">
                        In từ mọi thiết bị đa chức năng trong văn phòng
                      </h3>
                      <p>
                        Với Server-less On-Demand Print (In theo nhu cầu không qua máy chủ)*, bạn có thể in và nhận bản in từ mọi bản thiết bị đa chức năng được kết nối.
                      </p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Cải thiện năng suất bằng cách in từ mọi thiết bị đa chức năng khác khi đang được sử dụng</li>
                        <li>Có thể liên kết đến 100 thiết bị</li>
                        <li>Có thể sửa đổi các cài đặt tác vụ cụ thể để đáp ứng để tiết kiệm thời gian (1 mặt đến 2 mặt, thêm dập ghim, tất cả đều đen trắng)</li>
                      </ul>
                      <p className="text-sm italic mt-1">* Tùy chọn</p>
                    </div>

                    <div>
                      <h3 className="font-semibold text-cyan-700 mb-2">
                        Quản lý thiết bị đơn giản với Xác thực không cần máy chủ
                      </h3>
                      <p>
                        Xác thực không qua máy chủ* cho phép thông tin người dùng được đồng bộ hóa giữa các thiết bị đa chức năng trong cùng một nhóm, giúp giảm khối lượng công việc của quản trị viên.
                      </p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Chỉ cần chạm thẻ của bạn để liên kết ID người dùng với thiết bị đa chức năng</li>
                        <li>Thông tin ID được chia sẻ sử dụng được với các thiết bị đa chức năng khác trong cùng một mạng</li>
                        <li>Xác thực có thể được thực hiện với bất kỳ thiết bị nào trong văn phòng</li>
                      </ul>
                      <p className="text-sm italic mt-1">* Tùy chọn</p>
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