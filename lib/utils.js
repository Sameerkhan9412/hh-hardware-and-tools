import {ClassValue, clsx} from 'clsx';
import {twMerge} from 'tailwind-merge';

export function cn (...inputs) {
  return twMerge (clsx (inputs));
}
export const productsList1 = [
  {
    name: 'Flat Bustard Files',
    description: `Flat Machinist file is rectangular in cross section and slightly taper towards point. This file is available in bastard, 2nd cut and smooth cut geometry. This file is used by machinists, machinery builders, ship & engine builders, by repairmen and others who require rapid removal of metal. It is mainly used for stock removal, but it is also used in workshops, maintenance shops and for almost all type of filing operations. It is very popular in DIY segment too. These flat files can be used as a substitute to sharpen tools with blades or for deburring. It is ideal for use on wood, metal and plastic.`,
    images: [
      'https://res.cloudinary.com/sameerkhan/image/upload/v1742218476/hhhardware/51tVfuXDuKL._SX522__qxa5li.jpg',
      'https://res.cloudinary.com/sameerkhan/image/upload/v1742218519/hhhardware/51NX6E25xjL._SX522__ucfac7.jpg',
      'https://res.cloudinary.com/sameerkhan/image/upload/v1742218601/hhhardware/612CSghj0yL._SX522__nplviy.jpg',
    ],
    // fileSizes:"https://res.cloudinary.com/sameerkhan/image/upload/v1742221514/hhhardware/Screenshot_2025-03-17_195337_pnf20q.png"
  },
  {
    name: 'Flat 2nd Cut Files',
    description: `JKSD 4”x12T TCT Blade Pro is engineered for exceptional performance
                and durability. This blade ensures long-lasting efficiency and
                reliability. Its unique profile precision sawing technology
                guarantees clean, accurate cuts with minimal effort, while the
                innovative design minimizes chip wastage, making the most out of
                every material. Ideal for professional carpenters and woodworkers,
                this blade enhances cutting precision and material efficiency,
                providing superior results for various cutting tasks. Upgrade your
                toolkit with the 4”x12T TCT Blade for superior cutting performance
                and reduced waste.`,
    images: [
      'https://res.cloudinary.com/sameerkhan/image/upload/v1742218827/hhhardware/61rxl1R8PtL._SX679__unxbsq.jpg',
      'https://res.cloudinary.com/sameerkhan/image/upload/v1742218878/hhhardware/61SHpq2Vs3L._SX679__lbjbss.jpg',
      'https://res.cloudinary.com/sameerkhan/image/upload/v1742218926/hhhardware/71BtI3GNR6L._SX679__b5u5bn.jpg',
    ],
  },
  {
    name: 'Flat Smooth Files',
    description: `Better to use wearing safety gloves`,
    images: [
      'https://res.cloudinary.com/sameerkhan/image/upload/v1742219123/hhhardware/51E6PCy7P2L._SX679__hfzxrx.jpg',
      'https://res.cloudinary.com/sameerkhan/image/upload/v1742219192/hhhardware/51QqYqOOOYL_o5dcco.jpg',
      'https://res.cloudinary.com/sameerkhan/image/upload/v1742219223/hhhardware/51E6PCy7P2L._SX679__zynb8k.jpg',
    ],
  },
];

export const productList= [
  {
    category: 'Flat Files',
    products: [
      {
        name: 'Flat Bustard Files',
        description: `Flat Machinist file is rectangular in cross section and slightly taper towards point. This file is available in bastard, 2nd cut and smooth cut geometry. This file is used by machinists, machinery builders, ship & engine builders, by repairmen and others who require rapid removal of metal. It is mainly used for stock removal, but it is also used in workshops, maintenance shops and for almost all type of filing operations. It is very popular in DIY segment too. These flat files can be used as a substitute to sharpen tools with blades or for deburring. It is ideal for use on wood, metal and plastic.`,
        images: [
          'https://res.cloudinary.com/sameerkhan/image/upload/v1742218476/hhhardware/51tVfuXDuKL._SX522__qxa5li.jpg',
          'https://res.cloudinary.com/sameerkhan/image/upload/v1742218519/hhhardware/51NX6E25xjL._SX522__ucfac7.jpg',
          'https://res.cloudinary.com/sameerkhan/image/upload/v1742218601/hhhardware/612CSghj0yL._SX522__nplviy.jpg',
        ],
      },
      {
        name: 'Flat 2nd Cut Files',
        description: `JKSD 4”x12T TCT Blade Pro is engineered for exceptional performance
                and durability. This blade ensures long-lasting efficiency and
                reliability. Its unique profile precision sawing technology
                guarantees clean, accurate cuts with minimal effort, while the
                innovative design minimizes chip wastage, making the most out of
                every material. Ideal for professional carpenters and woodworkers,
                this blade enhances cutting precision and material efficiency,
                providing superior results for various cutting tasks. Upgrade your
                toolkit with the 4”x12T TCT Blade for superior cutting performance
                and reduced waste.`,
        images: [
          'https://res.cloudinary.com/sameerkhan/image/upload/v1742218827/hhhardware/61rxl1R8PtL._SX679__unxbsq.jpg',
          'https://res.cloudinary.com/sameerkhan/image/upload/v1742218878/hhhardware/61SHpq2Vs3L._SX679__lbjbss.jpg',
          'https://res.cloudinary.com/sameerkhan/image/upload/v1742218926/hhhardware/71BtI3GNR6L._SX679__b5u5bn.jpg',
        ],
      },
      {
        name: 'Flat Smooth Files',
        description: `Better to use wearing safety gloves`,
        images: [
          'https://res.cloudinary.com/sameerkhan/image/upload/v1742219123/hhhardware/51E6PCy7P2L._SX679__hfzxrx.jpg',
          'https://res.cloudinary.com/sameerkhan/image/upload/v1742219192/hhhardware/51QqYqOOOYL_o5dcco.jpg',
          'https://res.cloudinary.com/sameerkhan/image/upload/v1742219223/hhhardware/51E6PCy7P2L._SX679__zynb8k.jpg',
        ],
      },
    ],
    size:"https://res.cloudinary.com/sameerkhan/image/upload/v1742221514/hhhardware/Screenshot_2025-03-17_195337_pnf20q.png"
  },{
    category: 'hand Files',
    products: [
      {
        name: 'Hand Bustard Files',
        description: `Ultra Touch Flat Bastard Cut File – Precision at Your Fingertips The Ultra Touch Flat Bastard Cut File is a high-performance hand tool crafted from superior high carbon hardened steel, designed to meet the needs of professionals, hobbyists, and DIY enthusiasts. Featuring durable, sharp teeth and an ergonomic, anti-slip handle, this file is perfect for tasks like filing, deburring, trimming, and polishing a wide variety of materials including wood, metal, and plastic. The Precision-milled teeth ensure long-lasting cutting performance, even in tough environments. The ergonomic handle offers a comfortable grip, making it easy to maintain control during precision work, even in oily or wet conditions. With its versatility and durability, the Ultra Touch file is an essential addition to any toolbox, whether you’re in a workshop, factory, or garage.`,
        images: [
          'https://res.cloudinary.com/sameerkhan/image/upload/v1742226077/hhhardware/21OnZEkCP9L_qqzvqp.jpg',
          'https://res.cloudinary.com/sameerkhan/image/upload/v1742226194/hhhardware/213bMEuqFKL_ccuvj4.jpg',
          'https://res.cloudinary.com/sameerkhan/image/upload/v1742226238/hhhardware/31LFhgkHpJL_q0yuvb.jpg',
        ],
      },
      {
        name: 'hand 2nd Cut Files',
        description: `JKSD 4”x12T TCT Blade Pro is engineered for exceptional performance
                and durability. This blade ensures long-lasting efficiency and
                reliability. Its unique profile precision sawing technology
                guarantees clean, accurate cuts with minimal effort, while the
                innovative design minimizes chip wastage, making the most out of
                every material. Ideal for professional carpenters and woodworkers,
                this blade enhances cutting precision and material efficiency,
                providing superior results for various cutting tasks. Upgrade your
                toolkit with the 4”x12T TCT Blade for superior cutting performance
                and reduced waste.`,
        images: [
          'https://res.cloudinary.com/sameerkhan/image/upload/v1742226489/hhhardware/R1611475-01_becxb2.webp',
          'https://res.cloudinary.com/sameerkhan/image/upload/v1742226520/hhhardware/F1611475-02_stzgfl.webp',
          'https://res.cloudinary.com/sameerkhan/image/upload/v1742226560/hhhardware/F1611475-03_cz6mu5.webp',
        ],
      },
      {
        name: 'Flat Smooth Files',
        description: `Python's file tool set roughly shapes wood, leather, soft metals and soft plastics. The files' coarse patterns quickly remove material. They are of a durable construction to support regular use and get the job done powerfully. These file tools set are designed using quality materials for a quicker and better workmanship.`,
        images: [
          'https://res.cloudinary.com/sameerkhan/image/upload/v1742226746/hhhardware/21HZ4O8VMyL_buz1d7.jpg',
          'https://res.cloudinary.com/sameerkhan/image/upload/v1742219192/hhhardware/51QqYqOOOYL_o5dcco.jpg',
          'https://res.cloudinary.com/sameerkhan/image/upload/v1742219223/hhhardware/51E6PCy7P2L._SX679__zynb8k.jpg',
        ],
      },
    ],
    size:"https://res.cloudinary.com/sameerkhan/image/upload/v1742221514/hhhardware/Screenshot_2025-03-17_195337_pnf20q.png"
  },{
    category: 'Flat Files',
    products: [
      {
        name: 'Flat Bustard Files',
        description: `Flat Machinist file is rectangular in cross section and slightly taper towards point. This file is available in bastard, 2nd cut and smooth cut geometry. This file is used by machinists, machinery builders, ship & engine builders, by repairmen and others who require rapid removal of metal. It is mainly used for stock removal, but it is also used in workshops, maintenance shops and for almost all type of filing operations. It is very popular in DIY segment too. These flat files can be used as a substitute to sharpen tools with blades or for deburring. It is ideal for use on wood, metal and plastic.`,
        images: [
          'https://res.cloudinary.com/sameerkhan/image/upload/v1742218476/hhhardware/51tVfuXDuKL._SX522__qxa5li.jpg',
          'https://res.cloudinary.com/sameerkhan/image/upload/v1742218519/hhhardware/51NX6E25xjL._SX522__ucfac7.jpg',
          'https://res.cloudinary.com/sameerkhan/image/upload/v1742218601/hhhardware/612CSghj0yL._SX522__nplviy.jpg',
        ],
      },
      {
        name: 'Flat 2nd Cut Files',
        description: `JKSD 4”x12T TCT Blade Pro is engineered for exceptional performance
                and durability. This blade ensures long-lasting efficiency and
                reliability. Its unique profile precision sawing technology
                guarantees clean, accurate cuts with minimal effort, while the
                innovative design minimizes chip wastage, making the most out of
                every material. Ideal for professional carpenters and woodworkers,
                this blade enhances cutting precision and material efficiency,
                providing superior results for various cutting tasks. Upgrade your
                toolkit with the 4”x12T TCT Blade for superior cutting performance
                and reduced waste.`,
        images: [
          'https://res.cloudinary.com/sameerkhan/image/upload/v1742218827/hhhardware/61rxl1R8PtL._SX679__unxbsq.jpg',
          'https://res.cloudinary.com/sameerkhan/image/upload/v1742218878/hhhardware/61SHpq2Vs3L._SX679__lbjbss.jpg',
          'https://res.cloudinary.com/sameerkhan/image/upload/v1742218926/hhhardware/71BtI3GNR6L._SX679__b5u5bn.jpg',
        ],
      },
      {
        name: 'Flat Smooth Files',
        description: `Better to use wearing safety gloves`,
        images: [
          'https://res.cloudinary.com/sameerkhan/image/upload/v1742219123/hhhardware/51E6PCy7P2L._SX679__hfzxrx.jpg',
          'https://res.cloudinary.com/sameerkhan/image/upload/v1742219192/hhhardware/51QqYqOOOYL_o5dcco.jpg',
          'https://res.cloudinary.com/sameerkhan/image/upload/v1742219223/hhhardware/51E6PCy7P2L._SX679__zynb8k.jpg',
        ],
      },
    ],
    size:"https://res.cloudinary.com/sameerkhan/image/upload/v1742221514/hhhardware/Screenshot_2025-03-17_195337_pnf20q.png"
  },{
    category: 'Flat Files',
    products: [
      {
        name: 'Flat Bustard Files',
        description: `Flat Machinist file is rectangular in cross section and slightly taper towards point. This file is available in bastard, 2nd cut and smooth cut geometry. This file is used by machinists, machinery builders, ship & engine builders, by repairmen and others who require rapid removal of metal. It is mainly used for stock removal, but it is also used in workshops, maintenance shops and for almost all type of filing operations. It is very popular in DIY segment too. These flat files can be used as a substitute to sharpen tools with blades or for deburring. It is ideal for use on wood, metal and plastic.`,
        images: [
          'https://res.cloudinary.com/sameerkhan/image/upload/v1742218476/hhhardware/51tVfuXDuKL._SX522__qxa5li.jpg',
          'https://res.cloudinary.com/sameerkhan/image/upload/v1742218519/hhhardware/51NX6E25xjL._SX522__ucfac7.jpg',
          'https://res.cloudinary.com/sameerkhan/image/upload/v1742218601/hhhardware/612CSghj0yL._SX522__nplviy.jpg',
        ],
      },
      {
        name: 'Flat 2nd Cut Files',
        description: `JKSD 4”x12T TCT Blade Pro is engineered for exceptional performance
                and durability. This blade ensures long-lasting efficiency and
                reliability. Its unique profile precision sawing technology
                guarantees clean, accurate cuts with minimal effort, while the
                innovative design minimizes chip wastage, making the most out of
                every material. Ideal for professional carpenters and woodworkers,
                this blade enhances cutting precision and material efficiency,
                providing superior results for various cutting tasks. Upgrade your
                toolkit with the 4”x12T TCT Blade for superior cutting performance
                and reduced waste.`,
        images: [
          'https://res.cloudinary.com/sameerkhan/image/upload/v1742218827/hhhardware/61rxl1R8PtL._SX679__unxbsq.jpg',
          'https://res.cloudinary.com/sameerkhan/image/upload/v1742218878/hhhardware/61SHpq2Vs3L._SX679__lbjbss.jpg',
          'https://res.cloudinary.com/sameerkhan/image/upload/v1742218926/hhhardware/71BtI3GNR6L._SX679__b5u5bn.jpg',
        ],
      },
      {
        name: 'Flat Smooth Files',
        description: `Better to use wearing safety gloves`,
        images: [
          'https://res.cloudinary.com/sameerkhan/image/upload/v1742219123/hhhardware/51E6PCy7P2L._SX679__hfzxrx.jpg',
          'https://res.cloudinary.com/sameerkhan/image/upload/v1742219192/hhhardware/51QqYqOOOYL_o5dcco.jpg',
          'https://res.cloudinary.com/sameerkhan/image/upload/v1742219223/hhhardware/51E6PCy7P2L._SX679__zynb8k.jpg',
        ],
      },
    ],
    productSize:"https://res.cloudinary.com/sameerkhan/image/upload/v1742221514/hhhardware/Screenshot_2025-03-17_195337_pnf20q.png"
  },
];

export const categoryList = [
  {
    categoryImage: 'https://res.cloudinary.com/sameerkhan/image/upload/v1742129278/hhhardware/Flat_Bastard_File__56812.1570197550_jdhqdo.jpg',
    title: 'Flat Files',
    path: 'flat-files',
  },
  {
    categoryImage: 'https://res.cloudinary.com/sameerkhan/image/upload/v1742129413/hhhardware/169ff4560acb473f_bvp9tq.png',
    title: 'Hand Files',
    path: 'hand-files',
  },
  {
    categoryImage: 'https://res.cloudinary.com/sameerkhan/image/upload/v1742129535/hhhardware/image_12777_oolofi.jpg',
    title: 'Half Round Files',
    path: 'half-round-files',
  },
  {
    categoryImage: 'https://res.cloudinary.com/sameerkhan/image/upload/v1742129616/hhhardware/31rvBUAaldL._AC_UF894_1000_QL80__xzmoax.jpg',
    title: 'Round Files',
    path: 'round-files',
  },
  {
    categoryImage: 'https://res.cloudinary.com/sameerkhan/image/upload/v1742129710/hhhardware/Th.Square-Machinist-with-Handle_qymd3g.jpg',
    title: 'Square Files',
    path: 'square-files',
  },
  {
    categoryImage: 'https://res.cloudinary.com/sameerkhan/image/upload/v1742129797/hhhardware/51eKeT6V5SL_vxmbtm.jpg',
    title: 'Triangle Files',
    path: 'triangle-files',
  },
  {
    categoryImage: 'https://res.cloudinary.com/sameerkhan/image/upload/v1742130035/hhhardware/230-326_a04ytw.jpg',
    title: 'Pillar Narrow Files',
    path: 'pillar-narrow-files',
  },
  {
    categoryImage: 'https://res.cloudinary.com/sameerkhan/image/upload/v1742130107/hhhardware/NIC_16663_FRNT_MAIN_hjx35r.jpg',
    title: 'Warding Files',
    path: 'warding-files',
  },
  {
    categoryImage: 'https://res.cloudinary.com/sameerkhan/image/upload/v1742130171/hhhardware/knife-edge-jewelry-file-31.182__27383.1658872014_qwnaji.jpg',
    title: 'Knife Files',
    path: 'knife-files',
  },
];
