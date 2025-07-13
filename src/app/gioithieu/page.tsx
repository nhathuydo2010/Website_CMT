import Image from "next/image";
import Link from "next/link";


export default function GioiThieuPage() {
  const navItems = [
  { label: "TRANG CHỦ", href: "/" },
  { label: "GIỚI THIỆU", href: "/gioithieu" },
  {
    label: "SẢN PHẨM",
    href: "/sanpham",
    submenu: [
      { label: "Máy Photocopy Trắng Đen", href: "#maytrangden",
        },
      { label: "Máy Photocopy Màu", href: "#mau" },
    ],
  },
  { label: "TIN TỨC & SỰ KIỆN", href: "#" },
  { label: "DỊCH VỤ", href: "/dichvu" },
  { label: "TUYỂN DỤNG", href: "/tuyendung" },
  { label: "LIÊN HỆ", href: "/lienhe" },
];

  const productsBlackWhite = [
  {
    name: 'Máy Photocopy Apeos 5570',
    price: 'Liên Hệ ',
    code: '5570',
    image: '/productsBlackWhite/Apeos 5570 4570.png',
  },
  {
    name: 'Máy Photocopy Apeos 4570',
    price: 'Liên Hệ ',
    code: '4570',
    image: '/productsBlackWhite/Apeos 5570 4570.png',
  },
  {
    name: 'Máy Photocopy Apeos 7580',
    price: 'Liên Hệ',
    code: '7580',
    image: '/productsBlackWhite/Apeos 75806580.png',
  },
  {
    name: 'Máy Photocopy Apeos 6580',
    price: 'Liên Hệ',
    code: '6580',
    image: '/productsBlackWhite/Apeos 75806580.png',
  },
  
  {
    name: 'Máy Photocopy Apeos 3560',
    price: 'Liên Hệ',
    code: '3560',
    image: '/productsBlackWhite/Apeos 356030602560.png',
  },
  {
    name: 'Máy Photocopy Apeos 3060',
    price: 'Liên Hệ',
    code: '3060',
    image: '/productsBlackWhite/Apeos 356030602560.png',
  },
  {
    name: 'Máy Photocopy Apeos 2560',
    price: 'Liên Hệ',
    code: '2560',
    image: '/productsBlackWhite/Apeos 356030602560.png',
  },
  // Thêm các sản phẩm trắng đen khác...
];

const productsColor = [
  {
    name: 'Máy Photocopy Apeos C7071',
    price: 'Liên Hệ',
    code: 'C7071',
    image: '/productsColor/Apeos C7071  C6571  C5571  C4571.png',
  },
  {
    name: 'Máy Photocopy Apeos C6571',
    price: 'Liên Hệ',
    code: 'C6571',
    image: '/productsColor/Apeos C7071  C6571  C5571  C4571.png',
  },
  {
    name: 'Máy Photocopy Apeos C5571',
    price: 'Liên Hệ',
    code: 'C5571',
    image: '/productsColor/Apeos C7071  C6571  C5571  C4571.png',
  },
  {
    name: 'Máy Photocopy Apeos C4571',
    price: 'Liên Hệ',
    code: 'C4571',
    image: '/productsColor/Apeos C7071  C6571  C5571  C4571.png',
  },

  {
    name: 'Máy Photocopy Apeos C3061',
    price: 'Liên Hệ',
    code: 'C3061',
    image: '/productsColor/Apeos C3061  C2561  C2061.png',
  },
  {
    name: 'Máy Photocopy Apeos C2561',
    price: 'Liên Hệ',
    code: 'C2561',
    image: '/productsColor/Apeos C3061  C2561  C2061.png',
  },
  {
    name: 'Máy Photocopy Apeos C2061',
    price: 'Liên Hệ',
    code: 'C2061',
    image: '/productsColor/Apeos C3061  C2561  C2061.png',
  },
  {
    name: 'Máy Photocopy Apeos C8180',
    price: 'Liên Hệ',
    code: 'C8180',
    image: '/productsColor/Apeos C8180-C7580-C6580.png',
  },{
    name: 'Máy Photocopy Apeos C7580',
    price: 'Liên Hệ',
    code: 'C7580',
    image: '/productsColor/Apeos C8180-C7580-C6580.png',
  },{
    name: 'Máy Photocopy Apeos C6580',
    price: 'Liên Hệ',
    code: 'C6580',
    image: '/productsColor/Apeos C8180-C7580-C6580.png',
  },
  {
    name: 'Máy Photocopy Apeos C3567',
    price: 'Liên Hệ',
    code: 'C3567',
    image: '/productsColor/Apeos C3567.png',
  },
  // Thêm các sản phẩm màu khác...
];

  return (
    <div className="w-full">
          
      {/* Nội dung chính */}
      <main className="px-6 py-12 max-w-6xl mx-auto text-gray-800">
        {/* Banner với ảnh lớn */}
        <section className="mb-12 relative">
          {/* <Image
            src="/images/banner.jpg"
            alt="Ảnh xưởng in hoặc làm việc"
            width={1000}
            height={200}
            className="rounded-lg w-full h-auto object-cover"
          /> */}
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-white text-4xl md:text-5xl font-bold"></h1>
          </div>
        </section>

        {/* Giới thiệu công ty */}
        <section className="mb-12 grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4 text-red-600">Công ty Cổ Phần Máy Tính Việt Nam (CMT)</h2>
            <p className="leading-relaxed text-gray-700">
              <p className="text-xl leading-relaxed max-w-3xl  mt-2"><strong>Trụ sở:</strong> 26 Đường Lý Tự Trọng - Phường Sài Gòn - TP.Hồ Chí Minh</p>
              <p className="text-xl leading-relaxed max-w-3xl  mt-2">Công ty chúng tôi chuyên cung cấp các giải pháp về in ấn và quản lý trên các dòng máy thiết bị văn phòng đa chức năng của hãng Fujifilm. Các giải pháp tiên tiến về quản lý thiết bị giúp khách hàng nâng cao hiệu quả công việc và giảm thiểu chi phí…
Với đội ngũ kỹ thuật lành nghề trên 30 năm kinh nghiệm được đào tạo chuyên nghiệp từ hãng <strong>Fujifilm</strong> , chúng tôi cam kết chất lượng dịch vụ hoàn hảo , đạt được sự an tâm và tin tưởng Quý khách hàng khi sử dụng sản phẩm và dịch vụ kèm theo của hãng Fujifilm do chúng tôi cung cấp.  
Với phương châm : Mỗi khách hàng là một cơ hội khẳng định và niềm vui cống hiến của đội ngũ chúng tôi.</p>
            </p>
          </div>
          <div>
            <Image
              src="/images/cmt.png"
              alt="Đội ngũ nhân sự"
              width={600}
              height={400}
              className="rounded-lg shadow-md w-full h-auto object-cover"
            />
          </div>
        </section>

        {/* Lịch sử phát triển */}
        <section className="mb-12 grid md:grid-cols-2 gap-8">
          <div>
            <Image
              src="/images/cmt1.jpg"
              alt="Máy tính IBM ngày xưa"
              width={600}
              height={400}
              className="rounded-lg shadow-md w-full h-auto object-cover"
            />
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2">Lịch sử hình thành & phát triển</h2>
              <p className="text-xl leading-relaxed max-w-3xl">
              CMT ra đời từ cổ phần hóa doanh nghiệp nhà nước Công Ty Cổ Phần Máy Tính Việt Nam 2 năm 1999, 999. Là doanh nghiệp Nhà nước duy nhất trực thuộc Cục Máy Tính của Uy Ban Khoa Học và Kỹ Thuật Nhà Nước ( nay là Bộ Khoa Học và Công Nghệ) có nhiệm vụ duy trì hoạt động các dàn máy Mainframe IBM S/3, IBM 360/20; IBM 360/40; IBM360/50… còn lại sau năm 1975 tại khu vực phía nam phục vụ tất cả các ngành kinh tế, khoa học kỹ thuật, điện lực , an ninh, quốc phòng… 
            </p>
            <p className="text-xl leading-relaxed max-w-3xl mt-4">
            Trước năm 1975 chúng tôi là Công ty Máy Tính Điện Tử IBM của Mỹ tại miền nam trước năm 1975 ( IBM Vietnam Operations ). Đội ngũ kỹ thuật của công ty đã từng gây nên những ngạc nhiên , khâm phục kỳ thú cho những nhà chuyên môn am hiểu máy IBM , họ đã thành công trong việc duy trì hoạt động của các hệ thống máy IBM đến tận năm 1990 , trong điều kiện cấm vận, không nhập khẩu được linh kiện thay thế .

            </p>
          </div>
        </section>

        {/* Liên kết với Fujifilm */}
        <section className="mb-12 grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-2">Đối tác chiến lược - Fujifilm</h2>
            <p className="text-xl leading-relaxed">
              Hơn 30 năm là nhà phân phối ủy quyền của <strong>Fujifilm Business Innovation (Fuji Xerox)</strong>. Chúng tôi cung cấp sản phẩm chính hãng, dịch vụ tận tâm và giải pháp tối ưu cho doanh nghiệp trong thời kỳ số hóa.
            </p>
          </div>
          <div>
            <Image
              src="/images/fujifilm.jpeg"
              alt="Fujifilm photocopy"
              width={600}
              height={400}
              className="rounded-lg shadow-md w-full h-auto object-cover"
            />
          </div>
        </section>

        {/* Lời cam kết */}
        <section className="mt-8">
          <p className=" italic text-gray-600 text-lg">
            “Mỗi khách hàng là một cơ hội khẳng định và là niềm vui cống hiến của đội ngũ chúng tôi.”
          </p>
          <p className="mt-2 font-medium text-right">— Trân trọng,</p>
        </section>
      </main>
    </div>
  );
}
