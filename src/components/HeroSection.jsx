"use client";

import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination,autoplay } from "swiper/modules";

const HeroSection = () => {
    const imgs=["https://res.cloudinary.com/sameerkhan/image/upload/v1741689033/hhhardware/file5_nzoij8.jpg","https://res.cloudinary.com/sameerkhan/image/upload/v1741689033/hhhardware/file1_g5xbbs.png","https://res.cloudinary.com/sameerkhan/image/upload/v1741689033/hhhardware/file4_qvabe8.jpg","https://res.cloudinary.com/sameerkhan/image/upload/v1741689033/hhhardware/file2_mnytg7.jpg","https://res.cloudinary.com/sameerkhan/image/upload/v1741689033/hhhardware/file3_wxffyw.jpg"]
  return (
    <div className="w-full  overflow-hidden h-96">
      <Swiper
        spaceBetween={50}
        loop={true}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        slidesPerView={1}
        className="w-full h-full"
        autoplay={{ delay: 3000, disableOnInteraction: false }}
      >
        {imgs.map((img, index) => (
          <SwiperSlide key={index} className="w-full h-full overflow-hidden">
            <img
              src={img}
              alt="hero image"
              className="object-contain h-full w-full overflow-hidden "
              priority

            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSection;
