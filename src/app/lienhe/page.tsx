'use client';
import Image from "next/image";
import Link from "next/link";
import React from "react";
import emailjs from 'emailjs-com';
import { useRef } from 'react';

export default function LienHe() {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) return;

    try {
      const result = await emailjs.sendForm(
        'service_zz85lyo',     // 🟢 Thay bằng Service ID thật
        'template_0gg4hec',    // 🟢 Thay bằng Template ID thật
        formRef.current,
        'EFOXIg-6SSEw0pj4W'      // 🟢 Thay bằng Public Key thật
      );

      console.log('Email gửi thành công:', result.text);
      alert('Gửi liên hệ thành công!');
      formRef.current.reset();
    } catch (error) {
      console.error('Lỗi gửi email:', error);
      alert('Không thể gửi email. Vui lòng thử lại sau.');
    }
  };
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
            <p>Địa chỉ: 26 Lý Tự Trọng, Phường Sài Gòn, Tp.HCM</p>
            {/* <p>Điện thoại: 0888 186 238 – 0706 888 606</p> */}
            <p>Hotline: <strong className="text-red-600">083.8226.166</strong></p>
            <p>Email: <a href="mailto:info@trongnhansolutions.com" className="text-blue-600 underline">ktxerox@cmt.vn</a></p>
            <p>
              Website:{" "}
              <a href="https://trongnhansolutions.com" target="_blank" className="text-blue-600 underline">trongnhansolutions.com</a>,{" "}
              <a href="https://mayphotocopyricoh.vn" target="_blank" className="text-blue-600 underline">mayphotocopyricoh.vn</a>,{" "}
              <a href="https://mayphotocopyricoh.info" target="_blank" className="text-blue-600 underline">mayphotocopyricoh.info</a>,{" "}
              <a href="https://mayphotocopyricoh.com.vn" target="_blank" className="text-blue-600 underline">mayphotocopyricoh.com.vn</a>
            </p>
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
        {/* Form Submit */}
        <section className="p-6 sm:p-10 max-w-xl mx-auto">
          <h2 className="text-2xl font-semibold text-red-600 mb-4">Gửi thông tin liên hệ</h2>
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="hoten" className="block text-sm font-medium mb-1">Họ tên</label>
              <input type="text" name="hoten" id="hoten" required className="w-full border rounded px-4 py-2" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
              <input type="email" name="email" id="email" required className="w-full border rounded px-4 py-2" />
            </div>
            <div>
              <label htmlFor="noidung" className="block text-sm font-medium mb-1">Nội dung</label>
              <textarea name="noidung" id="noidung" rows={5} required className="w-full border rounded px-4 py-2" />
            </div>
            <button type="submit" className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition">
              Gửi liên hệ
            </button>
          </form>
        </section>
      </main>
    </div>
  );
}
