'use client';
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Product5570Page() {
  const [showFullDescription, setShowFullDescription] = useState(false);
  const navItems = [
    { label: "TRANG CHỦ", href: "/" },
    { label: "GIỚI THIỆU", href: "/gioithieu" },
    {
      label: "SẢN PHẨM",
      href: "/sanpham",
      submenu: [
        {
          label: "Máy Photocopy Trắng Đen",
          href: "/sanpham/trangden",
          submenu: [
            { label: "Máy Photocopy Apeos 5570", href: "/sanpham/maytrangden/5570" },
            { label: "Máy Photocopy Apeos 4570", href: "/sanpham/maytrangden/4570" },
            { label: "Máy Photocopy Apeos 7580", href: "/sanpham/maytrangden/7580" },
            { label: "Máy Photocopy Apeos 6580", href: "/sanpham/maytrangden/6580" },
            { label: "Máy Photocopy Apeos 3560", href: "/sanpham/maytrangden/3560" },
            { label: "Máy Photocopy Apeos 2560", href: "/sanpham/maytrangden/2560" },
            { label: "Máy Photocopy Apeos 3060", href: "/sanpham/maytrangden/3060" },

          ],
        },
        {
          label: "Máy Photocopy Màu",
          href: "/sanpham/mau",
          submenu: [
            { label: "Máy Photocopy Apeos 5570", href: "/sanpham/maytrangden/5570" },
            { label: "Máy Photocopy Apeos 4570", href: "/sanpham/maytrangden/4570" },
            { label: "Máy Photocopy Apeos 7580", href: "/sanpham/maytrangden/7580" },
            { label: "Máy Photocopy Apeos 6580", href: "/sanpham/maytrangden/6580" },
            { label: "Máy Photocopy Apeos 3560", href: "/sanpham/maytrangden/3560" },
            { label: "Máy Photocopy Apeos 2560", href: "/sanpham/maytrangden/2560" },
            { label: "Máy Photocopy Apeos 3060", href: "/sanpham/maytrangden/3060" },

          ],
        },
      ],
    },
    { label: "TIN TỨC & SỰ KIỆN", href: "#" },
    { label: "DỊCH VỤ", href: "/dichvu" },
    { label: "TUYỂN DỤNG", href: "/tuyendung" },
    { label: "LIÊN HỆ", href: "/lienhe" },
  ];


  const product = {
    name: "Máy Photocopy Apeos C2561",
    price: "Liên Hệ",
    image: "/productsColor/ApeosC3061C2561C2061.png",
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

  return (
    <div className="w-full">
      {/* Dòng chữ phía trên logo */}
      <div className="w-full text-red-700 text-[14px] font-medium text-center px-4 py-2">
        <div className="animate-marquee">
          Quý khách hàng có nhu cầu tư vấn Mua & Thuê máy Photocopy vui lòng liên hệ phòng kinh doanh 0908.100.201 - Hoặc Hotline: 028.382.261.66 - 028.382.965.94
        </div>
      </div>
      <div className="flex justify-between items-center px-90 py-2 bg-white shadow">
        {/* Logo và tên công ty */}
        <div className="flex items-center space-x-3">
          <Image src="/logo.png" alt="Logo" width={90} height={50} />
          <span className="text-orange-600 text-xl font-bold uppercase">
            Công Ty CỔ PHẦN MÁY TÍNH VIỆT NAM
          </span>
        </div>
        {/* Thanh tìm kiếm */}
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
      {/* 🔻 Navigation */}
      <nav className="bg-red-600 text-white font-semibold text-sm relative z-50">
        <ul className="flex justify-center space-x-10 py-3 relative">
          {navItems.slice(0, 2).map((item, index) => (
            <li key={index}>
              <Link href={item.href} className="hover:underline">{item.label}</Link>
            </li>
          ))}

          {/* Dropdown SẢN PHẨM */}
          <li className="relative group">
            <button className="hover:underline">SẢN PHẨM</button>

            {/* Dropdown cấp 1 */}
            <ul className="absolute top-[calc(100%+8px)] left-0 bg-white text-black shadow-md min-w-[200px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-200 z-50">

              {/* Mục có submenu cấp 2 */}
              <li className="relative group/trangden px-4 py-2 hover:bg-gray-100">
                <div className="flex items-center justify-between">
                  <Link href="/sanpham/trangden">Máy Photocopy Trắng Đen</Link>
                  <span className="ml-2">&#9656;</span>
                </div>

                {/* Submenu cấp 2 */}
                <ul className="absolute top-0 left-full bg-white text-black shadow-md min-w-[180px] opacity-0 invisible group-hover/trangden:opacity-100 group-hover/trangden:visible transition duration-200 z-50">
                  <li className="hover:bg-gray-100 px-4 py-2">
                    <Link href="/sanpham/maytrangden/5570">Máy Photocopy Apeos 5570</Link>
                  </li>
                  <li className="hover:bg-gray-100 px-4 py-2">
                    <Link href="/sanpham/maytrangden/4570">Máy Photocopy Apeos 4570</Link>
                  </li>
                  <li className="hover:bg-gray-100 px-4 py-2">
                    <Link href="/sanpham/maytrangden/7580">Máy Photocopy Apeos 7580</Link>
                  </li>
                  <li className="hover:bg-gray-100 px-4 py-2">
                    <Link href="/sanpham/maytrangden/6580">Máy Photocopy Apeos 6580</Link>
                  </li>
                  <li className="hover:bg-gray-100 px-4 py-2">
                    <Link href="/sanpham/maytrangden/3060">Máy Photocopy Apeos 3060</Link>
                  </li>
                  <li className="hover:bg-gray-100 px-4 py-2">
                    <Link href="/sanpham/maytrangden/2560">Máy Photocopy Apeos 2560</Link>
                  </li>
                  <li className="hover:bg-gray-100 px-4 py-2">
                    <Link href="/sanpham/maytrangden/3560">Máy Photocopy Apeos 3560</Link>
                  </li>
                </ul>
              </li>

              {/* Máy Photocopy Màu (submenu cấp 2) */}
              <li className="relative group/mau px-4 py-2 hover:bg-gray-100">
                <div className="flex items-center justify-between">
                  <Link href="/sanpham/mau">Máy Photocopy Màu</Link>
                  <span className="ml-2">&#9656;</span>
                </div>

                <ul className="absolute top-0 left-full bg-white text-black shadow-md min-w-[180px] opacity-0 invisible group-hover/mau:opacity-100 group-hover/mau:visible transition duration-200 z-50">
                  <li className="hover:bg-gray-100 px-4 py-2">
                    <Link href="/sanpham/maymau/C7071">Máy Photocopy Apeos C7071</Link>
                  </li>
                  <li className="hover:bg-gray-100 px-4 py-2">
                    <Link href="/sanpham/maymau/C6571">Máy Photocopy Apeos C6571</Link>
                  </li>
                  <li className="hover:bg-gray-100 px-4 py-2">
                    <Link href="/sanpham/maymau/C5571">Máy Photocopy Apeos C5571</Link>
                  </li>
                  <li className="hover:bg-gray-100 px-4 py-2">
                    <Link href="/sanpham/maymau/C4571">Máy Photocopy Apeos C4571</Link>
                  </li>
                  <li className="hover:bg-gray-100 px-4 py-2">
                    <Link href="/sanpham/maymau/C3061">Máy Photocopy Apeos C3061</Link>
                  </li>
                  <li className="hover:bg-gray-100 px-4 py-2">
                    <Link href="/sanpham/maymau/C2561">Máy Photocopy Apeos C2561</Link>
                  </li>
                  <li className="hover:bg-gray-100 px-4 py-2">
                    <Link href="/sanpham/maymau/C2061">Máy Photocopy Apeos C2061</Link>
                  </li>
                  <li className="hover:bg-gray-100 px-4 py-2">
                    <Link href="/sanpham/maymau/C8180">Máy Photocopy Apeos C8180</Link>
                  </li>
                  <li className="hover:bg-gray-100 px-4 py-2">
                    <Link href="/sanpham/maymau/C7580">Máy Photocopy Apeos C7580</Link>
                  </li>
                  <li className="hover:bg-gray-100 px-4 py-2">
                    <Link href="/sanpham/maymau/C6580">Máy Photocopy Apeos C6580</Link>
                  </li>
                  <li className="hover:bg-gray-100 px-4 py-2">
                    <Link href="/sanpham/maymau/C3567">Máy Photocopy Apeos C3567</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </li>

          {/* Các mục còn lại */}
          {navItems.slice(3).map((item, index) => (
            <li key={index + 3}>
              <Link href={item.href} className="hover:underline">{item.label}</Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* 🔻 Nội dung sản phẩm */}
      <div className="max-w-6xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-6">
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="relative w-full lg:w-1/2 border p-4">
            <Image
              src={product.image}
              alt={product.name}
              width={500}
              height={400}
              className="w-full h-auto object-contain"
            />
            <span className="absolute top-2 left-2 bg-red-600 text-white text-sm px-2 py-1 rounded-full font-bold">
              Mới 95%+
            </span>
          </div>
          <div className="w-full lg:w-1/2">
            <h1 className="text-2xl font-bold text-red-600 mb-2">{product.name}</h1>
            <p className="text-xl text-green-600 font-semibold mb-3">Giá: {product.price}</p>
            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1 mb-4">
              <li>{product.specs[0]}</li>
              <li>{product.specs[1]}</li>
              <li>{product.specs[4]}</li>
            </ul>
            <button className="mt-4 px-6 py-2 bg-red-600 text-white font-bold rounded hover:bg-red-700 transition">
              THÊM VÀO GIỎ HÀNG
            </button>
          </div>
        </div>

        {/* 🔻 Thông số kỹ thuật */}
        <div className="mt-10 border-t pt-6">
          <h2 className="text-xl font-bold text-black mb-4 uppercase text-center">Thông Số Kỹ Thuật</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto border border-gray-300 text-sm text-black">
              <tbody>
                {product.specs.map((line, index) => {
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
          </div>
        </div>

        {/* 🔻 Mô tả sản phẩm */}
        <div className="mt-12">
          <h2 className="text-xl font-bold text-black mb-4 uppercase">Mô Tả Sản Phẩm</h2>

          <h3 className="	text-[35px] font-bold text-red-500  text-center mb-1">
            Máy Photocopy Apeos 5570
          </h3>
          <h3 className="text-lg font-bold text-blue-700 text-center  mb-1">
            Hiệu suất vượt trội, vận hành thông minh
          </h3>

          <p className="text-black text-justify mb-4">
            <strong>Apeos 5570</strong> là dòng máy photocopy kỹ thuật số cao cấp, được thiết kế cho môi trường văn phòng hiện đại
            với yêu cầu xử lý tài liệu nhanh, bảo mật cao và khả năng tùy biến linh hoạt. Thiết bị mang đến sự kết hợp hoàn hảo
            giữa tốc độ vận hành mạnh mẽ, tính năng tự động hóa thông minh và giao diện điều khiển dễ sử dụng.
          </p>
          <div className="w-full flex justify-center my-6">
            <Image
              src="/images/5530.png"  // ← sửa lại đường dẫn đúng của bạn
              alt="Máy Photocopy Apeos 5570 minh họa"
              width={800}
              height={500}
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

        </div>
        <footer className="bg-white border-t mt-12 text-sm text-gray-700">
          <div className="max-w-screen-xl mx-auto py-8 px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Cột 1: Về công ty */}
            <div>
              <h3 className="font-bold text-blue-900 mb-2">Công ty Cổ Phần Máy Tính Việt Nam (CMT)</h3>
              <p className="mb-2">
                Là doanh nghiệp chuyên ngành máy tính, máy thiết bị văn phòng, Máy photocopy đa chức năng. Chúng tôi cung cấp các giải pháp về photocopy, in ấn, quản lý, thiết bị máy tính, laptop... dùng cho cá nhân, văn phòng, công ty và  dự án….

              </p>
              <img src="/logo-dathongbao.png" alt="Đã Thông Báo" className="w-32 mt-2" />
            </div>

            {/* Cột 2: Hỗ trợ khách hàng */}
            <div>
              <h3 className="font-bold text-blue-900 mb-2">Hỗ trợ khách hàng</h3>
              <ul className="space-y-1 list-disc list-inside text-gray-800">
                <li><a href="#" className="hover:underline">Tìm kiếm</a></li>
                <li><a href="#" className="hover:underline">Giới thiệu</a></li>
                <li><a href="#" className="hover:underline">Chính sách đổi trả</a></li>
                <li><a href="#" className="hover:underline">Chính sách bảo mật</a></li>
                <li><a href="#" className="hover:underline">Điều khoản dịch vụ</a></li>
                <li><a href="#" className="hover:underline">Liên hệ</a></li>
              </ul>
            </div>

            {/* Cột 3: Chăm sóc khách hàng */}
            <div>
              <h3 className="font-bold text-blue-900 mb-2">Chăm sóc khách hàng</h3>
              <p className="flex items-center space-x-2 text-blue-700 font-bold text-lg">
                📞 <span>028.382.261.66</span>

              </p>
              <p className="mt-1">
                <a href="mailto:cmtfujifilm@cmt.vn" className="text-blue-600 hover:underline">
                  cmtfujifilm@cmt.vn
                </a>
              </p>
              {/* <div className="mt-3">
                                   <p className="mb-1 font-semibold">Follow Us</p>
                                   <div className="flex space-x-2">
                                     <a href="#"><i className="fab fa-facebook border p-2 rounded hover:bg-gray-100"></i></a>
                                     <a href="#"><i className="fab fa-twitter border p-2 rounded hover:bg-gray-100"></i></a>
                                     <a href="#"><i className="fab fa-instagram border p-2 rounded hover:bg-gray-100"></i></a>
                                     <a href="#"><i className="fab fa-google-plus-g border p-2 rounded hover:bg-gray-100"></i></a>
                                     <a href="#"><i className="fab fa-youtube border p-2 rounded hover:bg-gray-100"></i></a>
                                   </div>
                                 </div> */}
            </div>
          </div>

          {/* Dòng bản quyền */}
          <div className="text-center text-xs text-gray-500 border-t py-3">
            Copyright © 2025 Ezone. Powered by Haravan
          </div>
        </footer>

      </div>
    </div>
  );
}


