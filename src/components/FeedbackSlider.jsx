import React, { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import axios from "axios";

function FeedbackSlider() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchReviews = async () => {
    try {
      const response = await axios.get("/api/reviews");
      console.log("feedback response", response);
      if (response.data.success) {
        setReviews(response.data.reviews);
      } else {
        console.error("Failed to fetch reviews");
      }
    } catch (error) {
      console.error("Error fetching reviews:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  return (
    <div className="my-4 p-2">
      <h2 className="font-semibold text-2xl lg:text-4xl text-center text-gray-400">
        What Our Customers Say
      </h2>
      <div>
        {loading ? (
          <p className="text-center text-gray-400 mt-4">Loading reviews...</p>
        ) : reviews.length > 0 ? (
          <Swiper
            slidesPerView={1}
            spaceBetween={24}
            loop={true}
            freeMode={true}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 24 },
              768: { slidesPerView: 3, spaceBetween: 24 },
              1024: { slidesPerView: 4, spaceBetween: 24 },
            }}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            modules={[Pagination, Autoplay, Navigation]}
            className="mx-4 mt-6"
          >
            {reviews.map((review, i) => (
              <SwiperSlide
                key={i}
                className="bg-gray-700 text-white rounded-md p-4 shadow-lg"
              >
                <div className="flex items-center gap-3 mb-2">
                  <img
                    src={`https://api.dicebear.com/5.x/initials/svg?seed=${review.username}`}
                    alt="Profile Pic"
                    className="h-10 w-10 object-cover rounded-full"
                  />
                  <div>
                    <p className="font-medium">{review.username}</p>
                    <p className="text-sm text-gray-300">{review.email}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-200">
                  {review.review.length > 120
                    ? review.review.slice(0, 120) + "..."
                    : review.review}
                </p>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <p className="text-center text-gray-400 mt-4">
            No reviews available
          </p>
        )}
      </div>
    </div>
  );
}

export default FeedbackSlider;
