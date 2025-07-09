import Image from "next/image";
import Link from "next/link";

export default function GioiThieuPage() {
  return (
    <div className="">
      {/* Thanh thông báo */}
      <div className="w-full text-red-700 text-[14px] font-medium text-center px-4 py-2 bg-red-50">
        <div className="animate-marquee">
          Quý khách có nhu cầu tư vấn Mua & Thuê máy Photocopy vui lòng liên hệ: 0936.140.456 Ms Mai - 0907.311.050 Ms Mỹ - Hotline: 0908.113.933 Mr Sang
        </div>
      </div>

      {/* Header */}
      <header className="w-full flex items-center justify-between px-8 py-4 border-b border-gray-200 shadow-sm">
        <div className="flex items-center space-x-2">
          <Image src="/logo.png" alt="Logo" width={150} height={25} />
          <span className="text-[15px] font-semibold text-red-600">
            CÔNG TY CỔ PHẦN MÁY TÍNH VIỆT NAM
          </span>
        </div>

        <nav className="hidden md:flex space-x-6 text-sm font-medium text-gray-700">
          <Link href="/" className="nav-link">Trang chủ</Link>
          <Link href="/bando" className="nav-link">Bản đồ</Link>
          <Link href="/gioithieu" className="nav-link text-red-600 font-bold">Giới thiệu</Link>
          <Link href="/dichvu" className="nav-link">Dịch vụ</Link>
          <Link href="/lienhe" className="nav-link">Liên hệ</Link>
          <span className="nav-link">Hotline: 081.932.9999</span>
        </nav>
      </header>

      {/* Nội dung chính */}
      <main className="px-6 py-12 max-w-6xl mx-auto text-gray-800">
        {/* Banner với ảnh lớn */}
        <section className="mb-12 relative">
          <Image
            src="/images/banner-workshop.jpg"
            alt="Ảnh xưởng in hoặc làm việc"
            width={1200}
            height={500}
            className="rounded-lg w-full h-[400px] object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <h1 className="text-white text-4xl md:text-5xl font-bold">Giới Thiệu Về Chúng Tôi</h1>
          </div>
        </section>

        {/* Giới thiệu công ty */}
        <section className="mb-12 grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4 text-red-600">Công ty Cổ Phần Máy Tính Việt Nam (CMT)</h2>
            <p className="leading-relaxed text-gray-700">
              Trụ sở: 26 Đường Lý Tự Trọng - Phường Sài Gòn - TP.Hồ Chí Minh<br /><br />
              Chuyên cung cấp máy tính, máy văn phòng, máy photocopy đa chức năng, giải pháp in ấn, scan, quản lý tài liệu tích hợp cho cá nhân, doanh nghiệp và dự án.
            </p>
          </div>
          <div>
            <Image
              src="/images/office-team.jpg"
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
              src="/images/ibm-legacy.jpg"
              alt="Máy tính IBM ngày xưa"
              width={600}
              height={400}
              className="rounded-lg shadow-md w-full h-auto object-cover"
            />
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">Lịch sử hình thành & phát triển</h2>
            <p className="leading-relaxed">
              CMT ra đời từ cổ phần hóa doanh nghiệp nhà nước vào năm 1999, là đơn vị duy nhất duy trì hệ thống IBM Mainframe sau năm 1975. Đội ngũ kỹ thuật đã khiến giới chuyên môn ngạc nhiên khi duy trì máy IBM hoạt động đến tận năm 1990 trong thời kỳ cấm vận.
            </p>
          </div>
        </section>

        {/* Liên kết với Fujifilm */}
        <section className="mb-12 grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-semibold mb-2">Đối tác chiến lược - Fujifilm</h2>
            <p className="leading-relaxed">
              Hơn 30 năm là nhà phân phối ủy quyền của <strong>Fujifilm Business Innovation (Fuji Xerox)</strong>. Chúng tôi cung cấp sản phẩm chính hãng, dịch vụ tận tâm và giải pháp tối ưu cho doanh nghiệp trong thời kỳ số hóa.
            </p>
          </div>
          <div>
            <Image
              src="/images/fujifilm-partner.jpg"
              alt="Fujifilm photocopy"
              width={600}
              height={400}
              className="rounded-lg shadow-md w-full h-auto object-cover"
            />
          </div>
        </section>

        {/* Lời cam kết */}
        <section className="mt-8">
          <p className="italic text-gray-600 text-lg">
            “Mỗi khách hàng là một cơ hội khẳng định và là niềm vui cống hiến của đội ngũ chúng tôi.”
          </p>
          <p className="mt-2 font-medium text-right">— Trân trọng,</p>
        </section>
      </main>
    </div>
  );
}
