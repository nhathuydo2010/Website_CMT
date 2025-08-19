// components/data/productsBlackWhite.ts

export interface Product {
  name: string;
  price: string;
  code: string;
  image: string;
  category?: string;
}

export const productsprinter: Product[] = [
  {
    name: 'Toner Cartridge / Drum Cartridge Apeos A1860/A2560/A3060/A3560',
    price: 'Liên Hệ ',
    code: 'A1860',
    image: '/muc/A1860.png',
  },
  {
    name: 'Toner Cartridge A3570',
    price: 'Liên Hệ ',
    code: 'A3570',
    image: '/muc/a3570.png',
  },
  {
    name: 'Toner Cartridge / Drum Cartridge Apeos A4570/A5570',
    price: 'Liên Hệ',
    code: 'A4570',
    image: '/muc/a4570.png',
  },
  {
    name: 'Toner Cartridge / Drum Cartridge Apeos C2060/C2360/C2560/C3060',
    price: 'Liên Hệ',
    code: 'C2060',
    image: '/muc/C2060.png',
  },

  {
    name: 'Waste Toner Cartridge Apeos C2061/C2561/C2567/C3061/C3067/C3567',
    price: 'Liên Hệ',
    code: 'C2061',
    image: '/muc/C2061.png',
  },
  {
    name: 'Toner Cartridge Apeos C2061/C2561/C2567/C3061/C3067/C3567',
    price: 'Liên Hệ',
    code: 'C3061',
    image: '/muc/C3061.png',
  },
  {
    name: 'Toner Cartridge / Drum Cartridge Apeos C3070/C3570/C4570/C5570/C6570/C7070',
    price: 'Liên Hệ',
    code: 'C3070',
    image: '/muc/C3070.png',
  },
];
