"use client";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay"; 
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

const HeroSection = () => {
  const imgs = [
    "https://res.cloudinary.com/sameerkhan/image/upload/v1741689033/hhhardware/file5_nzoij8.jpg",
    "https://res.cloudinary.com/sameerkhan/image/upload/v1741689033/hhhardware/file1_g5xbbs.png",
    "https://res.cloudinary.com/sameerkhan/image/upload/v1741689033/hhhardware/file4_qvabe8.jpg",
    "https://res.cloudinary.com/sameerkhan/image/upload/v1741689033/hhhardware/file2_mnytg7.jpg",
    "https://res.cloudinary.com/sameerkhan/image/upload/v1741689033/hhhardware/file3_wxffyw.jpg"
  ];

  return (
    <div className="w-full overflow-hidden h-[90vh]">
      <Swiper
        spaceBetween={50}
        loop={true}
        pagination={{ clickable: true }}
        modules={[Pagination, Autoplay]} 
        slidesPerView={1}
        autoplay={{
          delay: 1000, // Set delay for autoplay (2 seconds)
          disableOnInteraction: false, // Ensures autoplay continues even after user interaction
        }}
        className="w-full h-full"
      >
        {imgs.map((img, index) => (
          <SwiperSlide key={index} className="w-full h-full overflow-hidden">
            <img
              src={img}
              alt={`Slide ${index + 1}`}
              className="object-contain h-full w-full overflow-hidden"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSection;
