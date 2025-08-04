// pages/sanpham/maymau/C3567.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import RelatedProductSliderColor from '../../../components/RelatedProductSliderColor'
export const productsColor = [
  {
    name: 'Máy Photocopy Apeos C7071',
    price: 'Liên Hệ',
    code: 'C7071',
    image: '/productsColor/Apeos C7071-C6571-C5571-C4571.png',
  },
  {
    name: 'Máy Photocopy Apeos C6571',
    price: 'Liên Hệ',
    code: 'C6571',
    image: '/productsColor/Apeos C7071-C6571-C5571-C4571.png',
  },
  // Add more products as needed
];
const product = {
  name: "Máy Photocopy Apeos C3567",
  price: "Liên Hệ",
  image: "/productsColor/Apeos C3567.png",
  specs: [
    "Thương hiệu: Fujifilm",
    "Model: Apeos C3067",
    "Chức năng: Copy / In mạng / Scan mạng màu, SPDF, Duplex",
    "Tốc độ copy/in: 30 trang/phút (Màu, Đen trắng)",
    "Tốc độ scan: 80 trang/phút (Quét 1 lần 2 mặt: 160 trang/phút)",
    "Bộ nhớ: 6 GB",
    "Ổ cứng SSD: 256 GB",
    "Độ phân giải in: 1.200 x 2.400 dpi",
    "Khay giấy chính: 520 tờ",
    "Khay giấy tay: 96 tờ",
    "Kích thước giấy hỗ trợ: A5 – A3",
    "Sao chụp liên tục: Tối đa 999 tờ",
    "Tỉ lệ thu phóng: 25% – 400%",
    "Bộ nạp và đảo bản gốc tự động: SPDF (130 tờ) – Có sẵn",
    "Bộ đảo bản sao tự động (Duplex): Có",
    "Chia bộ điện tử: Có sẵn",
    "Giao diện điều khiển: LCD màu 10,1 inch",
    "Chuẩn kết nối: Ethernet 10/100/1000Base-TX, USB 3.0",
    "Tốc độ tối đa: 35 trang/phút",
    "Thời gian in bản đầu tiên: Đen trắng 4,6 giây, Màu 6,0 giây",
    "Thời gian khởi động: 20 giây hoặc ít hơn (có thể thay đổi tùy điều kiện sử dụng)",
    "Khay giấy: Khay bypass",
    "Ngôn ngữ in: Chuẩn PCL5 / PCL6, Tùy chọn Adobe PostScript 3",
    "Độ phân giải scan: 600 x 600 dpi, 400 x 400 dpi, 300 x 300 dpi, 200 x 200 dpi",
    "Kích thước máy (Rộng x Sâu x Cao): 587 x 671 x 1.136 mm (4 khay)"
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
            <li>04 khay tự động (520 tờ/ khay) & 01 khay tay (96 tờ). (Trọng lượng giấy : 52 - 300 gsm).</li>
            <li>Bộ nạp và đảo bản gốc tự động (DADF).</li>
            <li>Bộ đảo bản sao (Duplex).</li>
            <li>Khay chia bộ điên tử (lệch hướng).</li>
            <li>Bộ nhớ: 6 GB (Bộ nhớ Hệ thống: 4 GB, Bộ nhớ Trang: 2 GB, Tối đa: 6 GB). 256GB SSD storage</li>
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
            Máy Photocopy Apeos C3567
          </h3>
          <h4 className="text-lg font-semibold text-blue-700 mb-2">
            Thời đại mới, Apeos mới
          </h4>
          <p className="text-black text-justify mb-4">
            <strong>Apeos 3567</strong> Máy photocopy Fujifilm Apeos C3067 là một lựa chọn tuyệt vời dành cho các văn phòng và doanh nghiệp hiện đại. Với khả năng in, sao chép và quét mạng màu, model này mang đến hiệu suất vượt trội cùng chất lượng hình ảnh sắc nét.
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
                    Làm việc ở mọi nơi với FUJIFILM IWpro
                  </h2>

                  <div className="space-y-6 text-[15px] text-black leading-relaxed">
                    <div>
                      <h3 className="font-semibold text-cyan-700 mb-2">
                        Nâng cấp hiệu quả kinh doanh của bạn lên một tầm cao mới
                      </h3>
                      <p>Bằng cách liên kết Apeos C3567 / C3067 / C2567 với FUJIFILM IWpro*, bạn có thể tự động hóa quy trình làm việc đã được chuẩn hóa như quét tài liệu, sắp xếp, xử lý, chia sẻ, quản lý và xuất dữ liệu trên đám mây. Các dịch vụ bên thứ ba cũng có thể được tích hợp liền mạch với FUJIFILM IWpro.<br />
                        Hơn nữa, nhóm có thể cộng tác từ xa bằng cách sử dụng Không gian làm việc trên đám mây. Có thể xuất an toàn các tài liệu đã đăng ký tại các văn phòng từ xa, cho phép áp dụng các hình thức làm việc kết hợp để có thể làm việc linh hoạt hơn.</p>
                      <p className="text-sm italic mt-1">* Dịch vụ đám mây do FUJIFILM Business Innovation cung cấp. Cần có hợp đồng riêng cho dịch vụ này.</p>
                      <img src="/images/c3567_vanhanh.jpg" alt="Vận hành c3567_1" className="mx-auto rounded-lg shadow mt-3" />

                    </div>

                    <div>
                      <h2 className="text-[22px] font-bold text-black mb-6 uppercase">
                        Thiết kế đơn giản cho nhu cầu công việc hằng ngày
                      </h2>
                      <h3 className="font-semibold text-cyan-700 mb-2">
                        Bảng điều khiển mới với kích thước lớn 10,1 inch mang lại trải nghiệm trực quan và phù hợp với cá nhân người dùng
                      </h3>
                      <img src="/images/c3567_vanhanh1.png" alt="Vận hành c3567" className="mx-auto rounded-lg shadow mt-3" />
                      <ul className="list-disc pl-5 space-y-1">
                        <ul>
                          <li>Hiển thị tên đăng nhập</li>
                          <li>Đèn LED nút Home sẽ sáng lên</li>
                          <li>Vùng cảm ứng NFC</li>
                          <li>
                            Dễ dàng kết nối với các thiết bị di động. Sử dụng <strong>Print Utility</strong>*<sup>1</sup>, bạn có thể thực hiện các thao tác cơ bản với thiết bị đa chức năng*<sup>2</sup> từ điện thoại thông minh.
                            <ul>
                              <li>*1: Kết nối với máy qua môi trường không dây hoặc kết nối Wi-Fi Direct. Có thể tải xuống miễn phí từ Google Play™ hoặc App Store.</li>
                              <li>*2: Sao chụp, fax, in, quét.</li>
                              <li><strong>Ghi chú:</strong> Hỗ trợ in hoặc quét bằng thiết bị di động bằng AirPrint, Mopria® Print Service và Mopria Scan.</li>
                            </ul>
                          </li>
                          <li>Bạn sẽ thấy ánh sáng dịu nhẹ báo hiệu hoàn thành thao tác hoặc có lỗi xảy ra</li>
                          <li>Kết nối ngay lập tức với các nút ứng dụng</li>
                          <li>Truy cập nhanh các cài đặt thường dùng</li>
                          <li>
                            Trên màn hình Ghim, bạn có thể bắt đầu lại tác vụ từ lịch sử tác vụ. Các cài đặt thường dùng có thể &quot;ghim&quot; lại được để tiết kiệm thời gian.
                          </li>
                          <li>
                            Màn hình trang chính thân thiện với người dùng<br />
                            → Các nút ứng dụng thường dùng có thể được sắp xếp và tùy chỉnh dựa trên sở thích của từng người dùng.
                          </li>
                          <li>
                            <strong>Bảng điều khiển từ xa</strong><br />
                            → Người quản trị thiết bị có thể thiết lập và quản lý thiết bị đa chức năng từ xa.<br />
                            <em>Ghi chú:</em> Trong cùng mạng nội bộ. Khi Bảng điều khiển từ xa đang hoạt động, bạn sẽ không thể thao tác trên bảng điều khiển của thiết bị đa chức năng. Ngoài ra, không thể khởi chạy Bảng điều khiển từ xa khi người dùng đang vận hành thiết bị đa chức năng.
                          </li>
                        </ul>

                      </ul>
                    </div>

                    <div>
                      <h2 className="text-[22px] font-bold text-black mb-6 uppercase">Tăng tốc độ số hóa bằng máy quét hiệu suất cao</h2>
                      <h3 className="font-semibold text-cyan-700 mb-2">
                        Quét hình 1 lượt, 2 mặt lên đến 160 trang/phút
                      </h3>
                      <p>Bộ nạp và đảo bản gốc tự động 1 lượt, quét 2 mặt tự động hiệu suất cao chứa được đến 130 tờ* và quét tài liệu 2 mặt trong một lần nạp, cho phép bạn số hóa các tài liệu lớn nhanh chóng và dễ dàng.</p>
                      <p className="text-sm italic mt-1">* 70 gsm</p>
                    </div>

                    <div>
                      <h3 className="font-semibold text-cyan-700 mb-2">
                        Quét hiệu quả các tài liệu có kích thước không theo chuẩn như biên lai
                      </h3>
                      <p>Tự động quét đến kích thước tiêu chuẩn gần nhất, loại bỏ yêu cầu nhập kích thước thủ công cho các tài liệu kích thước không theo chuẩn hoặc có kích thước nhỏ*. Các loại séc dày và biên lai giấy mỏng* cũng có thể được số hóa và quản lý dễ dàng trên máy tính.</p>
                      <p className="text-sm italic mt-1">*  Kích thước không theo chuẩn lên đến 49 x 85 mm. Đối với kích thước từ 49 x 85 mm đến 55 x 91 mm, hỗ trợ định lượng giấy từ 38 đến 209 gsm.</p>
                    </div>

                    <div>
                      <h2 className="text-[22px] font-bold text-black mb-6 uppercase">Bảo vệ hành trình chuyển đổi số (DX) của bạn với giải pháp bảo mật hàng đầu thị trường</h2>
                      <p>Là thiết bị thông tin được kết nối mạng, thiết bị đa chức năng được trang bị các tính năng bảo mật tiên tiến để bảo vệ tài sản thông tin có giá trị của bạn khỏi các cuộc tấn công mạng và các mối đe dọa bảo mật đang phát triển nhanh chóng.</p>
                      <h3 className="font-semibold text-cyan-700 mb-2">
                        Bảo vệ khỏi người dùng trái phép
                      </h3>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Các hoạt động và truy cập trái phép được ngăn chặn nhờ việc xác thực người dùng và các hạn chế sử dụng.</li>
                        <li>Mở rộng với Ethernet phụ* cho phép sử dụng một thiết bị đa chức năng duy nhất trên một mạng riêng biệt, v.v.</li>
                      </ul>
                      <p className="text-sm italic mt-1">* Tùy chọn</p>
                    </div>

                    <div>
                      <h3 className="font-semibold text-cyan-700 mb-2">
                        Bảo vệ dữ liệu
                      </h3>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Mã hóa đường dẫn liên lạc bằng TLS và IPsec</li>
                        <li>Bảo vệ các tệp được quét và e-mail thông qua mã hóa/chữ ký điện tử</li>
                        <li>Dữ liệu ghi vào SSD được mã hóa bằng mã hóa AES-256 mạnh mẽ, v.v.</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-semibold text-cyan-700 mb-2">
                        Bảo vệ khỏi truy cập trái phép
                      </h3>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Chức năng khóa tài khoản</li>
                        <li>Hạn chế địa chỉ IP có thể truy cập</li>
                        <li>Ngăn chặn can thiệp trái phép phần mềm trong quá trình khởi động và vận hành thiết bị đa chức năng</li>
                        <li>Chức năng sửa chữa tự động khi phát hiện hành vi can thiệp trái phép khi khởi động, v.v.</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-semibold text-cyan-700 mb-2">
                        Ngăn chặn rò rỉ thông tin do lỗi vận hành
                      </h3>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Cố định điểm gửi đến của tài liệu được quét</li>
                        <li>Nhập 2 lần địa chỉ gửi fax cùng lúc, v.v.</li>
                      </ul>
                    </div>
                  </div>
                </div>


                {/* 🔻 An toàn và bảo mật */}
                <div className="mt-12">
                  <h2 className="text-[22px] font-bold text-black mb-6 uppercase">
                    Hỗ trợ doanh nghiệp ở hiện tại và trong tương lai
                  </h2>

                  <div className="space-y-6 text-[15px] text-black leading-relaxed">
                    <div>
                      <h3 className="font-semibold text-cyan-700 mb-2">
                        Tạo ấn tượng với mỗi bản in
                      </h3>
                      <p>Mực in mới phát triển tạo ra màu sắc đặc biệt với mọi tông màu và hình thái, cùng với độ phân giải cao 1.200 x 2.400 dpi, tạo ra đường nét và văn bản chính xác, mang lại sự chuyên nghiệp cho mỗi bản in.</p>
                    </div>

                    <div>
                      <h3 className="font-semibold text-cyan-700 mb-2">
                        Sản xuất tài liệu quảng cáo nội bộ và theo yêu cầu
                      </h3>
                      <p>
                        Hỗ trợ nhiều kích thước và định lượng giấy khác nhau<><sup>*1</sup></>, cho bạn sự linh hoạt trong việc cá nhân hóa và in trên phong bì, thư trực tiếp, áp phích, biểu ngữ quảng cáo hoặc màn hình POP dài<sup>*2</sup>.
                      </p>
                      <p className="text-sm italic mt-1">
                        *1: Định lượng giấy từ 52 đến 300 gsm<br />
                        *2: Giấy dài lên tới 297 x 1.200 mm
                      </p>
                    </div>

                    <div>
                      <h3 className="font-semibold text-cyan-700 mb-2">
                        Kích thước nhỏ gọn phù hợp với mọi không gian văn phòng
                      </h3>
                      <p>Thiết kế nhỏ gọn với chiều rộng 577 mm và chiều sâu 671 mm* phù hợp với mọi không gian, kể cả những không gian chật hẹp, giúp tối đa hóa việc sử dụng không gian văn phòng.</p>
                      <p className="text-sm italic mt-1">
                        * Đối với cấu hình 1 Khay tiêu chuẩn.
                      </p>
                    </div>

                    <div>
                      <h2 className="text-[22px] font-bold text-black mb-6 uppercase">
                        Thiệt bị đa chức năng của tương lai
                      </h2>
                      <p>FUJIFILM Business Innovation hướng đến giải quyết các vấn đề môi trường thông qua các nỗ lực giảm thiểu biến đổi khí hậu và lưu thông tài nguyên trong các hoạt động kinh doanh. Sản phẩm của chúng tôi được phát triển với những cải tiến và công nghệ độc đáo, giúp cân bằng giữa khả năng sử dụng và giảm tác động đến môi trường.</p>
                      <h3 className="font-semibold text-cyan-700 mb-2">
                        Mực in mới và bộ phận sấy mực có nhiệt độ cố định thấp và cho chất lượng hình ảnh cao
                      </h3>
                      <p>
                        Sử dụng mực in mới và bộ phận sấy mực cho phép giảm mức tiêu thụ điện năng trong quá trình sấy mực, quy trình tiêu tốn nhiều điện năng nhất đối với các thiết bị đa chức năng.
                        <br />
                        Bằng cách sử dụng nhựa resin chức năng, loại mực mới được phát triển của chúng tôi đạt nhiệt độ*1 cố định thấp hàng đầu trong ngành, thấp hơn 15 độ so với mực được sử dụng trong các mẫu trước đó*2.
                        <br />
                        Ngoài ra, việc sử dụng bộ phận sấy mực mới sẽ giúp đạt được cả nhiệt độ cố định thấp và chất lượng hình ảnh vượt trội.
                      </p>
                      <p className="text-sm italic mt-1">*1: Tính đến tháng 7 năm 2024, theo khảo sát của chúng tôi. <br />
                        *2: Mực sử dụng trong Apeos C3060 / C2560 / C2060</p>
                    </div>

                    <div>
                      <h3 className="font-semibold text-cyan-700 mb-2">
                        Thiết kế cho hiện tại và tương lai
                      </h3>
                      <p>
                        Trong nỗ lực thúc đẩy tái chế tài nguyên, vật liệu nhựa tái chế được sử dụng* cho các bộ phận như nắp trước và khay. Chúng tôi đã khắc phục được trở ngại để tìm ra những cách ngăn chặn tình trạng không đều màu của nhựa tái chế, vốn được cho là khó tạo khuôn. Và bằng cách cải thiện độ bền và độ cứng của các bộ phận, chúng tôi đảm bảo chất lượng của sản phẩm.
                        <br />
                        Hơn nữa, sản phẩm đã được thiết kế lại để có thể dễ dàng tháo rời và làm sạch, hỗ trợ việc tái sử dụng và tái chế chúng trong tương lai.
                      </p>
                      <p className="text-sm italic mt-1">* Trong trường hợp cấu hình 4 khay với Bộ nạp và đảo bản gốc tự động, 15 % tổng trọng lượng nhựa của thiết bị là vật liệu tái chế.</p>
                    </div>

                    <div>
                      <h3 className="font-semibold text-cyan-700 mb-2">
                        Công nghệ tiết kiệm năng lượng
                      </h3>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Tiêu thụ ít năng lượng hơn và nhỏ gọn hơn với khả năng in độ phân giải cao với đầu in LED.</li>
                        <li>Tiết kiệm điện năng với tính năng khởi động nhanh và tiết kiệm năng lượng thông minh, chỉ cấp nguồn cho các bộ phận cần thiết tùy theo chức năng mà người dùng đang sử dụng.</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-semibold text-cyan-700 mb-2">
                        Góp phần giảm lượng khí CO2 thải ra nhờ thân máy nhẹ
                      </h3>
                      <p>Bằng cách tối ưu hóa nhựa và tấm kim loại bằng công nghệ làm mỏng và sửa đổi cấu trúc khung, chúng tôi đã giảm được 27 %* trọng lượng máy trong khi vẫn duy trì độ bền và góp phần giảm lượng khí CO2 thải ra trong quá trình vận chuyển.</p>
                      <p className="text-sm italic mt-1">* Đối với Model-CPS cấu hình 4 Khay. So với mẫu Apeos C3070 Model-CPS với cấu hình 4 Khay trước đây, không bao gồm mực.</p>
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