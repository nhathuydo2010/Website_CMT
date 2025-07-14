import Image from "next/image";
import Link from "next/link";
import Head from 'next/head';

export default function DichVu() {
  return (
    <div className="w-full bg-white text-gray-800 px-6 py-12 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Dịch vụ bảo hành và sửa chữa</h1>

      {/* Dịch vụ bảo hành */}
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-3">1. Dịch vụ bảo hành</h2>
        <p className="text-lg leading-relaxed mb-2">
          Tất cả sản phẩm do công ty CMT bán ra đều được bảo hành đầy đủ theo chính sách của nhà sản xuất.
        </p>
        <p className="text-lg leading-relaxed mb-2">
          Dịch vụ bảo hành dành cho tất cả các sản phẩm mua tại công ty CMT và còn trong thời gian bảo hành.
          Khi xảy ra sự cố sản phẩm, khách hàng có thể yên tâm và liên hệ trực tiếp đến công ty CMT, cung cấp thông tin khách hàng, số điện thoại và số seri sản phẩm cần bảo hành.
        </p>
        <p className="text-lg leading-relaxed mb-2">
          Bộ phận hỗ trợ kỹ thuật sẽ tiếp nhận thông tin và cử kỹ thuật viên chuyên nghiệp đến tận nơi kiểm tra sự cố.
          CMT sẽ cập nhật thông tin cho khách hàng nếu có vấn đề phát sinh trong quá trình xử lý bảo hành.
        </p>
      </section>

      {/* Dịch vụ bảo trì */}
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-3">2. Dịch vụ bảo trì</h2>
        <p className="text-lg leading-relaxed mb-2">
          Khi sản phẩm hết hạn bảo hành, để đáp ứng nhu cầu cần thiết của khách hàng, công ty CMT cung cấp dịch vụ bảo trì nhằm đảm bảo sản phẩm luôn hoạt động ổn định.
        </p>
        <p className="text-lg leading-relaxed mb-2">
          Hàng tháng, kỹ thuật viên CMT sẽ đến địa điểm khách hàng để bảo trì định kỳ sản phẩm.
          Trong thời gian hợp đồng, nếu sản phẩm gặp sự cố kỹ thuật, khách hàng sẽ thông báo để CMT cử kỹ thuật viên đến sửa chữa.
        </p>
        <p className="text-lg leading-relaxed">
          Nếu cần thay thế phụ tùng, CMT sẽ báo giá chi tiết cho khách hàng trước và khách hàng sẽ thanh toán chi phí đó.
        </p>
      </section>

      {/* Dịch vụ sửa chữa tận nơi */}
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-3">3. Dịch vụ sửa chữa tận nơi</h2>
        <p className="text-lg leading-relaxed mb-2">
          CMT cung cấp dịch vụ sửa chữa tận nơi dành cho khách hàng có nhu cầu. Nhân viên kỹ thuật sẽ đến địa chỉ mà khách hàng cung cấp để tiếp nhận sản phẩm.
        </p>
        <p className="text-lg leading-relaxed">
          Sau khi kiểm tra sự cố, kỹ thuật viên sẽ cung cấp thông tin chi tiết về lỗi và chi phí sửa chữa cụ thể cho khách hàng.
        </p>
      </section>

      {/* Dịch vụ cho thuê máy Photocopy */}
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-3">4. Cho thuê máy Photocopy</h2>
        <p className="text-lg leading-relaxed mb-2">
          Đối với khách hàng muốn tiết kiệm chi phí và không muốn đầu tư một khoản tiền lớn để trang bị máy photocopy cho văn phòng, công ty…
          nhưng vẫn muốn sử dụng máy photocopy kỹ thuật số đời mới nhất để phục vụ công việc, CMT cung cấp dịch vụ cho thuê máy photocopy.
        </p>
        <p className="text-lg leading-relaxed mb-2">
          CMT sẽ tư vấn và cung cấp dịch vụ cho thuê phù hợp với nhu cầu thực tế của khách hàng.
        </p>
        <h3 className="text-lg font-semibold mt-4 mb-2">Lợi ích khi thuê máy photocopy tại CMT:</h3>
        <ul className="list-disc pl-6 space-y-1 text-lg">
          <li>Máy mới, đa chức năng đáp ứng đầy đủ theo nhu cầu của khách hàng</li>
          <li>Không cần bỏ ra số tiền lớn để mua sản phẩm</li>
          <li>Hỗ trợ xử lý sự cố tận nơi nhanh chóng</li>
          <li>Miễn phí lắp đặt, vận chuyển và sử dụng máy ngay</li>
          <li>Thời gian thuê máy linh hoạt theo nhu cầu</li>
        </ul>
      </section>
    </div>
  );
}