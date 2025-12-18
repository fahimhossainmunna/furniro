"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const rooms = [
  { image: "/images/s1.png", title: "Inner Peace", room: "Bed Room" },
  { image: "/images/s2.png", title: "Modern Living", room: "Living Room" },
  { image: "/images/s3.png", title: "Bright Space", room: "Dining Room" },
  { image: "/images/s1.png", title: "Inner Peace", room: "Bed Room" },
  { image: "/images/s2.png", title: "Modern Living", room: "Living Room" },
  { image: "/images/s3.png", title: "Bright Space", room: "Dining Room" },
];

const RoomSlider = () => {
  return (
    <div className="relative w-full max-w-[760px] mx-auto">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        centeredSlides={true}
        loop={true}
        navigation={{
          nextEl: ".room-next",
        }}
        pagination={{
          el: ".room-pagination",
          clickable: true,
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 1.2,
          },
          768: {
            slidesPerView: 1.4,
          },
          1024: {
            slidesPerView: 1.6,
          },
        }}
        className="room-swiper"
      >
        {rooms.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="relative overflow-hidden rounded-lg">
              <Image
                src={item.image}
                alt={item.title}
                width={404}
                height={582}
                className="object-cover w-full h-auto"
              />

              {/* Overlay Card */}
              <div className="absolute bottom-4 left-4 bg-white p-4 w-[200px] shadow md:p-6 md:w-[220px]">
                <p className="text-xs md:text-sm text-gray-500">
                  {`0${index + 1}`} — {item.room}
                </p>
                <h3 className="text-lg md:text-xl font-semibold text-[#3A3A3A]">
                  {item.title}
                </h3>

                <button className="absolute bottom-0 right-0 bg-[#B88E2F] w-10 h-10 md:w-12 md:h-12 flex items-center justify-center text-white">
                  →
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Arrow (Desktop only) */}
      <button className="room-next hidden md:flex absolute top-1/2 -right-6 z-10 w-12 h-12 bg-white rounded-full shadow items-center justify-center">
        ❯
      </button>

      {/* Pagination */}
      <div className="room-pagination flex gap-3 mt-6 justify-center md:justify-end md:pr-24" />
    </div>
  );
};

export default RoomSlider;
