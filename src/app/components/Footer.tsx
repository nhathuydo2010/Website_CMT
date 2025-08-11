import Image from "next/image";
export default function Footer() {
    return (
        <footer
            id="footer"  // ← Thêm dòng này để BannerWrapper nhận diện đúng vị trí
            className="bg-white  mt-12 text-sm text-gray-700">
            <div className="max-w-screen-xl mx-auto py-8 px-4 grid grid-cols-1 md:grid-cols-4 gap-x-8">

                {/* Cột 1: Thông tin liên hệ */}
                <div>
                    <h3 className="font-bold text-blue-900 mb-2">Thông tin liên hệ</h3>
                    <div className="mb-2 flex items-center space-x-1 font-semibold text-red-600">
                        <Image
                            src="/images/Logo.png"
                            alt="Logo"
                            width={40}
                            height={40}
                            priority // nếu là logo nên ưu tiên tải sớm
                        />
                        <span className="text-[14px]">Công Ty Cổ Phần Máy Tính Việt Nam</span>
                    </div>
                    <p className="mb-2">Kinh doanh máy photocopy & cho thuê máy photocopy.</p>
                    <p className="mb-2">Trụ sở: 26 Lý Tự Trọng, Phường Sài Gòn, TP.HCM</p>
                    <p className="mb-2">📞 028.382.261.66 - 0944.333.986 </p>
                    <p className="mb-2">
                        ✉️ <a href="mailto:cmt-market@cmt.vn" className="text-blue-600 underline">
                            cmt-market@cmt.vn
                        </a>
                    </p>
                    <p className="mb-2">
                        🔗 <a href="https://cmt.vn/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                            https://cmt.vn/
                        </a>
                    </p>
                </div>

                {/* Cột 2: Hỗ trợ khách hàng */}
                <div className="border-0 pl-0">
                    <h3 className="font-bold text-blue-900 mb-2">Hỗ trợ khách hàng</h3>
                    <ul className="space-y-1 list-disc list-inside text-gray-800">
                        <li><a href="#" className="hover:underline">Tìm kiếm</a></li>
                        <li><a href="/gioithieu" className="hover:underline">Giới thiệu</a></li>
                        <li><a href="/dichvu" className="hover:underline">Chính sách bảo hành</a></li>
                        <li><a href="/dichvu" className="hover:underline">Chính sách bảo trì</a></li>
                        <li><a href="/dichvu" className="hover:underline">Cho thuê máy Photocopy</a></li>
                        <li><a href="/lienhe" className="hover:underline">Liên hệ</a></li>
                    </ul>
                </div>
                {/* Cột 4: Sơ đồ đường đi */}
                <div className="border-0 pl-0">
                    <h3 className="font-bold text-blue-900 mb-2">Sơ đồ đường đi</h3>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.5008162012673!2d106.7003386!3d10.7782564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f47e034caa3%3A0xed52e7103d821b4e!2zMjYgTMO9IFThu6sgVHLhu41uZywgQsOqbiBOZ2jhu4ssIFF14bqtbiAxLCBI4buTIENow60gTWluaCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2sus!4v1719400176436!5m2!1svi!2sus"
                        width="100%"
                        height="200"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="rounded"
                    ></iframe>
                </div>
                {/* Cột 3: Chăm sóc khách hàng */}
                <div className="border-0  pl-0">
                    <h3 className="font-bold text-blue-900 mb-2">Chăm sóc khách hàng</h3>
                    <p className="text-blue-700 font-bold text-lg">
                        📞 <a href="tel:02838226166" className="hover:underline">028.382.261.66</a>

                    </p>
                    <p className="text-blue-700 font-bold text-lg">
                        📞 <a href="tel:02838296594" className="hover:underline">028.382.965.94</a>

                    </p>
                </div>
            </div>

                {/* Dòng bản quyền
                <div className="text-center text-xs text-gray-500 border-t py-3">
                    Copyright © 2025 Ezone. Powered by Haravan
                </div> */}
        </footer>
    );
}
