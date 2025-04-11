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

export const productList = [
  {
    category: 'Flat Files',
    products: [
      {
        name: 'Flat bustard file',
        description: `At H.H. Hardware & Tools, we bring generations of experience into every tool we make — and our Flat Bastard File is no exception. Precision-crafted from high-grade carbon steel, this file is designed for effective material removal, durability, and consistent performance.
        With a bastard (medium-coarse) cut, it’s ideal for general-purpose filing — from deburring and smoothing to shaping and sharpening. Its flat profile with parallel edges and a tapered tip allows easy access to tight spots while maintaining control over broader surfaces.
        `,
        images: [
          'https://res.cloudinary.com/dyhv34cil/image/upload/v1744329495/Flat_Bastard_File__23709.1570196993_dau1sx.jpg',
          'https://res.cloudinary.com/dyhv34cil/image/upload/v1744329495/21WX5D_r59L_yic3qa.jpg',
          'https://res.cloudinary.com/dyhv34cil/image/upload/v1744329496/Hand-Machinist-with-Handle_rz1vr4.jpg',
        ],
        features:["Made from premium-grade steel to ensure strength, long life, and consistent performance.","Heat-Treated & Hardened: Uniform hardness up to 62 HRC for enhanced wear resistance and edge retention.","Medium-Coarse (Bastard) Cut: Balanced for effective material removal without compromising on control or finish.","Dual-Cut Design: Single-cut faces for smooth finishes; double-cut edges for faster filing in tight or narrow areas.","Versatile Usage: Ideal for shaping and smoothing metal, wood, and plastic — suitable for workshops, garages, and industrial use."]
      },
      {
        name: 'Flat 2nd Cut Files',
        description: `By H.H. Hardware & Tools When precision meets tradition, you get tools that stand the test of time. Our Flat Second Cut File is crafted with care and expertise, designed for tasks that demand finer control and smoother finishes.
        Made from high-quality, heat-treated carbon steel, this file features a second (medium) cut, making it the perfect in-between tool — coarser than a smooth cut but finer than a bastard cut. It’s ideal for general shaping, finishing work, and surface refinement on metal, wood, and plastic.At H.H. Hardware & Tools, every file carries our legacy of craftsmanship, durability, and precision — forged over three generations. Whether you’re working on a detailed finish or general filing, this second cut file helps you get the job done right.
        `,
        images: [
          'https://res.cloudinary.com/dyhv34cil/image/upload/v1744330074/IMG_8028_-_Mohd_Anas_Ibrahim_f6njfe.jpg',
          'https://res.cloudinary.com/dyhv34cil/image/upload/v1744330126/IMG_8032_-_Mohd_Anas_Ibrahim_dvglmi.jpg',
          'https://res.cloudinary.com/dyhv34cil/image/upload/v1744330129/IMG_8034_-_Mohd_Anas_Ibrahim_ko64tf.jpg',
        ],
        features:["High-Quality Carbon Steel: Ensures strength, durability, and long-lasting performance.","Uniform Hardness (Up to 62 HRC): Heat-treated for consistent filing and wear resistance.","Second Cut Teeth: Ideal for moderate material removal with a smoother finish than bastard cut.","Versatile Flat Design: Tapered end allows easy access to corners and flat surfaces in metal, wood, or plastic."]
      },
      {
        name: 'Handle bustard abd 2nd cut file| Farmer Own files ',
        description: `By H.H. Hardware & Tools , Designed with the working hands of farmers and local craftsmen in mind, our Farmer Own Files bring together strength, comfort, and performance in one rugged tool. Whether you’re sharpening blades, leveling surfaces, or shaping tough materials, these files are built to last – and built for you.`,
        images: [
          'https://res.cloudinary.com/dyhv34cil/image/upload/v1744330961/16589662_whatsappimage20221215at3_26_10pm_jpeg_jpeg4150d399894a61107cba63d469967869_hdrlan.jpg',
          'https://res.cloudinary.com/dyhv34cil/image/upload/v1744330795/Farmers-Own-2_jlxjfq.jpg',
          'https://res.cloudinary.com/dyhv34cil/image/upload/v1744330885/IMG_8038_-_Mohd_Anas_Ibrahim_qhtued.jpg',
        ],
        features:["Durable Wooden/Plastic Handle: Offers a solid, non-slip grip for long hours of work.","Hardened Carbon Steel Body: Uniform hardness up to 62 HRC ensures strength and longevity.","Efficient Cut Patterns:Bastard Cut: Coarse teeth for quick stock removal,	Second Cut: Medium teeth for finer shaping.","Farmer-Tested Design: Lightweight, durable, and tailored to the daily needs of agricultural workers."],
        price:55
      },
    ],
    size: 'https://res.cloudinary.com/sameerkhan/image/upload/v1742221514/hhhardware/Screenshot_2025-03-17_195337_pnf20q.png',
  },
  {
    category: 'Half Round Files',
    products: [
      {
        name: 'Half round busterd file',
        description: `By H.H. Hardware & Tools , Built for versatility and power, our Half Round Bastard File is the perfect blend of strength and flexibility. Whether you’re working with concave surfaces, flat edges, or general-purpose shaping, this file does it all with ease. Its half-round profile makes it ideal for both curved and flat surfaces, while the bastard cut delivers aggressive material removal when speed matters most.From workshops to field repairs, this tool is trusted by professionals, farmers, and mechanics alike.`,
        images: [
          'https://res.cloudinary.com/dyhv34cil/image/upload/v1744331345/IMG_8102_-_Mohd_Anas_Ibrahim_suewdc.jpg',
          'https://res.cloudinary.com/dyhv34cil/image/upload/v1744331408/IMG_8104_-_Mohd_Anas_Ibrahim_ixmn5f.jpg',
          'https://res.cloudinary.com/dyhv34cil/image/upload/v1744331409/IMG_8103_-_Mohd_Anas_Ibrahim_omcrjy.jpg',
        ],
        features:["Dual Surface Advantage – Flat side for leveling surfaces; curved side perfect for filing inside curves and contours.",'Aggressive Bastard Cut – Fast stock removal for quick shaping and sharpening.',"Hardened Carbon Steel – Uniformly hardened up to 62 HRC for long-lasting cutting power.","Precision-Cut Teeth – Designed for smooth cutting action and reduced clogging, even with tough metals."]
      },
      {
        name: 'Half round 2nd cut',
        description: `Crafted for craftsmen, the Farmer Own Half Round Second Cut File is the perfect blend of control and cutting precision. With one flat side and one curved, this file is made for shaping, smoothing, and fine-tuning metal, wood, and plastic surfaces. Whether you’re refining a concave groove or dressing a flat edge, the second cut gives you a balanced aggressiveness for smoother results without sacrificing efficiency. Each file is made from high-carbon steel and hardened to perfection—so it not only performs, but lasts. Built for workshops, toolboxes, and farms alike, this is your go-to tool for daily finishing work.`,
        images: [
          'https://res.cloudinary.com/dyhv34cil/image/upload/v1744331712/8AB9E760-5C42-4133-9D84-040FE412559B_-_Mohd_Anas_Ibrahim_qwpkoy.jpg',
          'https://res.cloudinary.com/dyhv34cil/image/upload/v1744331712/166B0CFE-9AFD-4245-8D31-C4EA1C38A9C0_-_Mohd_Anas_Ibrahim_glker5.jpg',
          'https://res.cloudinary.com/dyhv34cil/image/upload/v1744331712/C730F037-5817-4AA3-805B-6286FB0AE482_-_Mohd_Anas_Ibrahim_kdtxjl.jpg',
        ],
        features:["Dual Surface Design:Features a flat side for filing straight edges and a curved side for working on rounded or concave surfaces—giving you versatility in one tool.","Second Cut Precision Teeth:Milled with medium-cut teeth for smoother, controlled filing—ideal for fine-tuning and finishing work on metal, wood, and plastic.","Induction Hardened for Durability:Crafted from high-carbon steel and heat-treated for extra hardness, ensuring long-lasting performance even with regular use.","Ergonomic Compatibility:Designed to fit comfortably with standard file handles, offering better grip and reduced hand fatigue during extended use."]
      },
      {
        name: 'Smooth Cut Half Round File ',
        description: `Precision meets finesse with the Farmer Own Smooth Cut Half Round File—specially designed for delicate finishing and fine detailing. This file features a dual-surface profile: a flat side for straight edges and a curved side for contoured surfaces, making it the perfect tool for smoothing, polishing, and final shaping tasks.
        Engineered from premium high-carbon steel and heat-treated for superior durability, it ensures a consistent cut with minimal effort. Whether you’re refining metal, plastic, or wood, this file delivers a silky-smooth finish where it matters most.From seasoned professionals to detailed craftsmen, this file is the go-to choice when only a perfect finish will do.`,
        images: [
          'https://res.cloudinary.com/dyhv34cil/image/upload/v1744331964/4C57BF54-1D3E-4E82-A608-78EAE89FABD0_-_Mohd_Anas_Ibrahim_eqksjt.jpg',
          'https://res.cloudinary.com/dyhv34cil/image/upload/v1744331963/C4578855-2AF8-4A43-ADBB-087ED0F857EC_-_Mohd_Anas_Ibrahim_hyajnz.jpg',
          'https://res.cloudinary.com/dyhv34cil/image/upload/v1744331963/31914DA9-BD92-432F-A7FB-83212478572E_-_Mohd_Anas_Ibrahim_m41tvy.jpg',
        ],
        features:["Designed with a fine-tooth pattern for detailed finishing, deburring, and polishing without removing excess material.","Half-round shape combines a flat and curved surface, allowing seamless work on both flat and contoured profiles.","Made from high-carbon steel and hardened for long-lasting sharpness, wear resistance, and consistent filing performance.","Perfect for jewelers, metalworkers, woodworkers, and craftsmen who demand a clean, smooth finish on delicate surfaces."]
      },
    ],
    size: 'https://res.cloudinary.com/sameerkhan/image/upload/v1742221514/hhhardware/Screenshot_2025-03-17_195337_pnf20q.png',
  },
  {
    category: 'Round Files',
    products: [
      {
        name: 'Bastard Cut Round File ',
        description: `Built for speed and strength, the Farmer Own Bastard Cut Round File is your trusted companion for aggressive material removal. Designed with coarse, uniformly cut teeth, this round file is ideal for enlarging holes, shaping curved surfaces, and refining internal contours in metal, wood, or plastic ,Its round profile allows access to tight, circular spaces while maintaining control and consistency. Forged from high-carbon steel and induction-hardened for superior durability, it’s made to last through the toughest workshop or field use. Whether you’re a machinist, metalworker, or craftsman on the move, this file delivers raw performance with the reliability you expect from Farmer Own.`,
        images: [
          'https://res.cloudinary.com/dyhv34cil/image/upload/v1744332270/E07CDD36-707D-42F3-B92A-3B4B07604FA4_-_Mohd_Anas_Ibrahim_z9chyl.jpg',
          'https://res.cloudinary.com/dyhv34cil/image/upload/v1744332270/2FFFDC24-C3ED-4342-9BFC-1C87AEFA4123_-_Mohd_Anas_Ibrahim_a95wzo.jpg',
          'https://res.cloudinary.com/dyhv34cil/image/upload/v1744332271/127D9279-BA09-4EF9-9FD4-DBB5380A3EBD_-_Mohd_Anas_Ibrahim_sjzy7w.jpg',
        ],
        features:["Designed for rapid stock removal, making it perfect for rough shaping, enlarging holes, or removing burrs.","Allows for effective filing inside round holes, curves, and hard-to-reach internal surfaces with control and consistency.","Heat-treated for strength and longevity, offering excellent resistance to wear and deformation during heavy-duty use.","Effective on metal, wood, and plastic—ideal for both industrial applications and general workshop tasks."]
      },
      {
        name: 'Second Cut Round File ',
        description: `The Farmer Own Second Cut Round File is designed for balance—delivering both efficiency and precision in every stroke. With a medium-grade tooth pattern, it’s perfect for smoothing, shaping, and refining curved surfaces, circular holes, and internal contours across metal, wood, and plastic materials.Its round profile offers excellent access to tight or rounded spaces, while the sharp, uniformly cut teeth ensure clean, controlled filing. Manufactured from high-carbon steel and induction-hardened for durability, this file is a must-have for professionals and serious DIYers who demand reliability with every pass.Whether you’re in the workshop or on-site, this file works hard so you don’t have to.`,
        images: [
          'https://res.cloudinary.com/dyhv34cil/image/upload/v1744332615/IMG_8118_-_Mohd_Anas_Ibrahim_1_trsoos.jpg',
          'https://res.cloudinary.com/dyhv34cil/image/upload/v1744332614/B12A4315-0E49-4805-B6FD-796A6DD2CAB1_-_Mohd_Anas_Ibrahim_1_jqz5nn.jpg',
          'https://res.cloudinary.com/dyhv34cil/image/upload/v1744332615/IMG_8118_-_Mohd_Anas_Ibrahim_1_trsoos.jpg',
        ],
        features:[" This round second cut file from Faithfull is designed for refining circular openings and concave surfaces."," A 200mm second cut round file ideal for smoothing and shaping metal surfaces. ","This 150mm round engineers file with a soft-grip handle is suitable for precision work.","Designed for deburring and removing material from inner surfaces of cylindrical projects, this file is ideal for wood, metal, and plastic."]
      },
      {
        name: 'Flat Smooth Round Files',
        description: `The Flat Smooth Round Files from HH Hardware and Tools are precision-engineered tools designed for fine filing and detailed shaping tasks. Whether you're smoothing curved surfaces, enlarging holes, or refining metal and wood edges, these files deliver consistent results with minimal effort. Ideal for both professionals and DIY enthusiasts, they offer durability and precision you can trust.`,
        images: [
          'https://res.cloudinary.com/dyhv34cil/image/upload/v1744333319/616bN9_IBlL_xf3ve1.jpg',
          'https://res.cloudinary.com/dyhv34cil/image/upload/v1744333318/s-l1200_cwjmlm.jpg',
          'https://res.cloudinary.com/dyhv34cil/image/upload/v1744333319/jpg_600_b518550_ljukqf.jpg',
        ],
        features:["Designed with a fine cut for clean, detailed filing and minimal surface marks.","Perfect for shaping and enlarging holes or working on concave surfaces.","Comfortable handle ensures secure grip and control during use.","Made from high-carbon steel for long-lasting performance and resistance to wear."]
      },
    ],
    size: 'https://res.cloudinary.com/sameerkhan/image/upload/v1742221514/hhhardware/Screenshot_2025-03-17_195337_pnf20q.png',
  },
  {
    category: 'Hand Files',
    products: [
      {
        name: 'Hand Bustard Files',
        description: `The Bastard Hand File is a versatile and essential tool for shaping, smoothing, and finishing metal, wood, and plastic surfaces. Designed for durability and precision, this file features a medium-grade cut, making it ideal for general-purpose work in workshops, garages, and job sites. Whether you're a professional craftsman or a DIY enthusiast, this file delivers reliable performance every time.`,
        images: [
          'https://res.cloudinary.com/dyhv34cil/image/upload/v1744335151/Hand-Machinist-with-Handle_hy9jsy.jpg',
          'https://res.cloudinary.com/dyhv34cil/image/upload/v1744335184/Hand-Machinist-File-1-1_lc7iuf.jpg',
          'https://res.cloudinary.com/dyhv34cil/image/upload/v1744335201/Hand-Machinist-File-3-1_sdmctq.jpg',
        ],
        features:["Provides a balanced material removal rate—aggressive enough for shaping, yet smooth enough for finishing tasks.","Comfortable grip for extended use, reducing hand fatigue and improving control.","Ensures long-lasting sharpness and resistance to wear, even under heavy-duty use.","Effective on metal, wood, and plastic, making it suitable for a wide range of trades and projects."]
      },
      {
        name: '2nd Cut Hand Files',
        description: `The 2nd Cut Hand File is a versatile tool designed for general-purpose metalworking and woodworking tasks. With a medium-coarse cut, it strikes the perfect balance between material removal and finish quality. Ideal for shaping, deburring, and smoothing surfaces, this file is a reliable addition to any toolbox—whether you're a professional or a DIY enthusiast.`,
        images: [
          'https://res.cloudinary.com/dyhv34cil/image/upload/v1744335314/Flat-Super-Light-2nd-Cut-1_n5ciif.jpg',
          'https://res.cloudinary.com/dyhv34cil/image/upload/v1744335319/Super-Light-1_uzqqyg.jpg',
          'hhttps://res.cloudinary.com/dyhv34cil/image/upload/v1744335335/Super-Light-2_q20ooc.jpg',
        ],
        features:["Provides a balanced finish with efficient material removal for metal, wood, and plastic surfaces.","Made from high-quality carbon steel for long-lasting performance and resistance to wear.","Comfortable grip for better control and reduced hand fatigue during extended use.","Suitable for filing flat, concave, and convex surfaces across various materials."]
      },
      {
        name: 'Hand Smooth Files',
        description: `Hand Smooth Files are essential tools for precision metalworking, woodworking, and general smoothing applications. Designed for durability and efficiency, these files provide a consistent finish on rough surfaces, helping you achieve clean, professional results every time. Ideal for both DIY enthusiasts and professionals, they are a must-have in any toolbox.`,
        images: [
          'https://res.cloudinary.com/sameerkhan/image/upload/v1742219123/hhhardware/51E6PCy7P2L._SX679__hfzxrx.jpg',
          'https://res.cloudinary.com/sameerkhan/image/upload/v1742219192/hhhardware/51QqYqOOOYL_o5dcco.jpg',
          'https://res.cloudinary.com/sameerkhan/image/upload/v1742219223/hhhardware/51E6PCy7P2L._SX679__zynb8k.jpg',
        ],
        features:[" Offers smooth and accurate material removal for fine finishing tasks.","Ensures a comfortable and secure grip during extended use."," Built for strength, longevity, and resistance to wear."," Suitable for metal, wood, and plastic applications."]
      },
    ],
    productSize: 'https://res.cloudinary.com/sameerkhan/image/upload/v1742221514/hhhardware/Screenshot_2025-03-17_195337_pnf20q.png',
  },
  {
    category: 'Square Files',
    products: [
      {
        name: 'Square Bustard Files',
        description: `The Square Bustard File is a precision-engineered hand tool designed for heavy-duty filing, shaping, and finishing of metal, wood, and plastic surfaces. Its square cross-section makes it ideal for enlarging rectangular holes, smoothing internal angles, and working on flat surfaces with accuracy. Built for durability and control, this file is a go-to tool for both professionals and DIY enthusiasts.`,
        images: [
          'https://res.cloudinary.com/dyhv34cil/image/upload/v1744335766/Square-Machinist-with-Handle_d5hqjo.jpg',
          'https://res.cloudinary.com/dyhv34cil/image/upload/v1744335795/Square-Machinist-File-2_pmoelm.jpg',
          'https://res.cloudinary.com/dyhv34cil/image/upload/v1744335824/Square-Machinist-File-1_ve7led.jpg',
        ],
        features:["Perfect for filing corners, slots, and square holes with precision and control.","Made from hardened steel for long-lasting sharpness and excellent wear resistance.","Provides a coarser cut for quick material removal, ideal for rough shaping.","Can be fitted with most standard handles for a secure, comfortable grip during extended use."]
      },
      {
        name: 'Square 2nd Cut Files',
        description: `Square 2nd Cut Files are precision-engineered tools ideal for shaping, deburring, and finishing flat surfaces, sharp corners, and internal slots. With their medium-coarse teeth, these files strike the perfect balance between material removal and surface smoothness, making them a go-to choice for metalworkers, machinists, and general repair professionals.`,
        images: [
          'https://res.cloudinary.com/dyhv34cil/image/upload/v1744336074/Ecomm_Large-0-22-458_1_c2wfiw.jpg',
          'https://res.cloudinary.com/dyhv34cil/image/upload/v1744336074/Ecomm_Large-0-22-458_1_c2wfiw.jpg',
          'https://res.cloudinary.com/dyhv34cil/image/upload/v1744336074/Ecomm_Large-0-22-458_1_c2wfiw.jpg',
        ],
        features:["Built for longevity and consistent performance on a variety of metals and materials.","Provides controlled stock removal with a smoother finish than rough-cut files."," Ideal for filing corners, slots, and keyways with high accuracy.","Designed to fit most standard file handles for better grip and control."]
      },
      {
        name: 'dfdfdfd Smooth Files',
        description: `Hand Smooth Files are essential tools for precision metalworking, woodworking, and general smoothing applications. Designed for durability and efficiency, these files provide a consistent finish on rough surfaces, helping you achieve clean, professional results every time. Ideal for both DIY enthusiasts and professionals, they are a must-have in any toolbox.`,
        images: [
          'https://res.cloudinary.com/sameerkhan/image/upload/v1742219123/hhhardware/51E6PCy7P2L._SX679__hfzxrx.jpg',
          'https://res.cloudinary.com/sameerkhan/image/upload/v1742219192/hhhardware/51QqYqOOOYL_o5dcco.jpg',
          'https://res.cloudinary.com/sameerkhan/image/upload/v1742219223/hhhardware/51E6PCy7P2L._SX679__zynb8k.jpg',
        ],
        features:[" Offers smooth and accurate material removal for fine finishing tasks.","Ensures a comfortable and secure grip during extended use."," Built for strength, longevity, and resistance to wear."," Suitable for metal, wood, and plastic applications."]
      },
    ],
    productSize: 'https://res.cloudinary.com/sameerkhan/image/upload/v1742221514/hhhardware/Screenshot_2025-03-17_195337_pnf20q.png',
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
