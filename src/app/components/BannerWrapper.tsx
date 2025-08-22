'use client';

import Image from 'next/image';
import Link from 'next/link'; // thêm vào
import { useEffect, useState } from 'react';

export default function BannerWrapper() {
  const [hideBanner, setHideBanner] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const footer = document.getElementById('footer');
      if (!footer) return;

      const footerTop = footer.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (footerTop < windowHeight) {
        setHideBanner(true);
      } else {
        setHideBanner(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Banner Trái */}
      <div
        className={`hidden xl:block fixed left-[90px] top-[220px] z-60 transition-opacity duration-300 ${
          hideBanner ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
      >
        <Link href="sanpham\maytrangden\3560">
          <Image
            src="/skybanner1.png"
            alt="Banner Trái"
            width={160}
            height={600}
            className="rounded shadow-lg cursor-pointer"
          />
        </Link>
      </div>

      {/* Banner Phải */}
      <div
        className={`hidden xl:block fixed right-[90px] top-[220px] z-60 transition-opacity duration-300 ${
          hideBanner ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
      >
        <Link href="sanpham\maymau\C8180">
          <Image
            src="/skybanner.png"
            alt="Banner Phải"
            width={160}
            height={600}
            className="rounded shadow-lg cursor-pointer"
          />
        </Link>
      </div>
    </>
  );
}
