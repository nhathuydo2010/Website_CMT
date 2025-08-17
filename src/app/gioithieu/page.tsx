import Image from "next/image";

export default function GioiThieuPage() {
  return (
    <div className="bg-white/90 max-w-[1100px] mx-auto rounded-2xl shadow-xl p-4 md:p-6 mt-10">

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
        <section className="mb-12 flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-4 text-red-600">
              Công ty Cổ Phần Máy Tính Việt Nam (CMT)
            </h2>
            <p className="text-xl leading-relaxed max-w-3xl mt-2">
              <strong>Trụ sở:</strong> 26 Đường Lý Tự Trọng - Phường Sài Gòn - TP.Hồ Chí Minh
            </p>
            <p className="text-xl leading-relaxed max-w-3xl  mt-2">Công ty chúng tôi chuyên cung cấp các giải pháp về in ấn và quản lý trên các dòng máy thiết bị văn phòng đa chức năng của hãng Fujifilm. Các giải pháp tiên tiến về quản lý thiết bị giúp khách hàng nâng cao hiệu quả công việc và giảm thiểu chi phí…
                Với đội ngũ kỹ thuật lành nghề trên 30 năm kinh nghiệm được đào tạo chuyên nghiệp từ hãng <strong>Fujifilm</strong> , chúng tôi cam kết chất lượng dịch vụ hoàn hảo , đạt được sự an tâm và tin tưởng Quý khách hàng khi sử dụng sản phẩm và dịch vụ kèm theo của hãng Fujifilm do chúng tôi cung cấp.
                Với phương châm : Mỗi khách hàng là một cơ hội khẳng định và niềm vui cống hiến của đội ngũ chúng tôi.</p>
          </div>
          <div className="flex-1 flex justify-center">
            <Image
              src="/images/cmt.png"
              alt="Đội ngũ nhân sự"
              width={600}
              height={400}
              className="rounded-lg shadow-md object-cover"
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
              CMT ra đời từ cổ phần hóa doanh nghiệp nhà nước của Công Ty Cổ Phần Máy Tính Việt Nam 2 năm 1999. Là doanh nghiệp Nhà nước duy nhất trực thuộc Cục Máy Tính của Uy Ban Khoa Học và Kỹ Thuật Nhà Nước ( nay là Bộ Khoa Học và Công Nghệ) có nhiệm vụ duy trì hoạt động các dàn máy Mainframe IBM S/3, IBM 360/20; IBM 360/40; IBM360/50… còn lại sau năm 1975 tại khu vực phía nam phục vụ tất cả các ngành kinh tế, khoa học kỹ thuật, điện lực , an ninh, quốc phòng…
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
              src="/images/fujifilm.png"
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
