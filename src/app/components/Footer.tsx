export default function Footer() {
    return (
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
                        📞 <a href="tel:02838226166" className="block hover:underline">028.382.261.66</a>

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
    );
}