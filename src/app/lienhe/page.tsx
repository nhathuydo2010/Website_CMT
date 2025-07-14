import Image from "next/image";
import Link from "next/link";
import React from "react";


export default function LienHe() {
  return (
    <div className="">
      {/* Nội dung trang Liên hệ */}
      <main className="p-6 sm:p-10">
        <h1 className="text-2xl font-bold text-red-600 mb-4">Liên hệ với chúng tôi</h1>

        {/* Khối flex chia 2 bên: Thông tin & Bản đồ */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Thông tin liên hệ */}
          <div className="flex-1 text-gray-800 space-y-2 text-[16px]">
            <p><strong>CÔNG TY CỔ PHẦN MÁY TÍNH VIỆT NAM </strong></p>
            <p>Địa chỉ: 26 Lý Tự Trọng, Phường Sài Gòn,TP.HCM</p>
            {/* <p>Điện thoại: 0908.100.201 – 028.382.261.66</p> */}
            <p>Hotline: <strong className="text-red-600"> 0908.100.201 – 028.382.261.66</strong></p>
            <p>Email: <a href="mailto:info@trongnhansolutions.com" className="text-blue-600 underline">cmtfujifilm@cmt.vn</a></p>
            
            <p>Mã số thuế: <strong>0313896779</strong></p>
          </div>

          {/* Bản đồ Google */}
          <div className="flex-1 h-[400px]">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.5008162012673!2d106.7003386!3d10.7782564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f47e034caa3%3A0xed52e7103d821b4e!2zMjYgTMO9IFThu6sgVHLhu41uZywgQsOqbiBOZ2jhu4ssIFF14bqtbiAxLCBI4buTIENow60gTWluaCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2sus!4v1719400176436!5m2!1svi!2sus"
              width="90%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </main>
    </div>
  );
}
