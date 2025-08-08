'use client';

import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export default function LienHePage() {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    try {
      await emailjs.sendForm(
        'service_lgnh1gk',
        'template_z8vvk2l',
        formRef.current,
        'oXtLWqMs8Dt9Xji-y' // Your user ID
      );
      alert('Gửi liên hệ thành công!');
      formRef.current.reset();
    } catch (error) {
      console.error(error);
      alert('Lỗi khi gửi. Vui lòng thử lại sau.');
    }
  };

  return (
    <main className="bg-white/90 max-w-[1100px] mx-auto rounded-2xl shadow-xl p-4 md:p-6 mt-10">
      <div className="grid md:grid-cols-2 rounded-lg shadow-md overflow-hidden">
        {/* LEFT: Form */}
        <div className="bg-white p-8 text-black">
          <h2 className="text-2xl font-semibold mb-6">Thông tin khách hàng</h2>
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Họ</label>
                <input type="text" name="first_name" required className="w-full border px-4 py-2 rounded" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Tên</label>
                <input type="text" name="last_name" required className="w-full border px-4 py-2 rounded" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input type="email" name="email" required className="w-full border px-4 py-2 rounded" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Số điện thoại</label>
                <input type="text" name="phone" className="w-full border px-4 py-2 rounded" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Nội dung</label>
              <textarea name="message" rows={5} className="w-full border px-4 py-2 rounded" placeholder="Nhập nội dung..."></textarea>
            </div>
            <button type="submit" className="bg-green-900 text-white px-6 py-2 rounded hover:bg-green-800 transition">
              Gửi liên hệ
            </button>
          </form>
        </div>

        {/* RIGHT: Map + Company Info */}
        <div className="bg-gray-50 p-0 flex flex-col justify-between">
          {/* Google Map */}
          <div className="h-64 md:h-80 w-full">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.5008162012673!2d106.7003386!3d10.7782564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f47e034caa3%3A0xed52e7103d821b4e!2zMjYgTMO9IFThu6sgVHLhu41uZywgQsOqbiBOZ2jhu4ssIFF14bqtbiAxLCBI4buTIENow60gTWluaCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2sus!4v1719400176436!5m2!1svi!2sus"
              className="w-full h-full border-0 rounded-t-lg"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Thông tin liên hệ */}
          <div className="p-6 text-gray-700 space-y-3 text-sm">
            <h2 className="text-xl font-semibold mb-2">Thông tin liên hệ</h2>
            <p><strong>CÔNG TY CỔ PHẦN MÁY TÍNH VIỆT NAM</strong></p>
            <p className="flex items-center gap-2"><FaMapMarkerAlt className="text-red-600" /> 26 Lý Tự Trọng, Phường Sài Gòn, Tp.HCM</p>
            <p className="flex items-center gap-2"><FaPhoneAlt className="text-red-600" /> 083.8226.166</p>
            <p className="flex items-center gap-2"><FaEnvelope className="text-red-600" /> cmt-market@cmt.vn</p>
            <p className="flex items-start gap-2"> </p>
          </div>
        </div>
      </div>
    </main>
  );
}