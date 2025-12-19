import React from "react";
import { FaAngleRight } from "react-icons/fa";

const ShopBanner = () => {
  return (
    <>
      <div
        className="w-full h-[200px] sm:h-[260px] lg:h-[316px] 
      bg-[url('/images/shopB.png')] bg-cover bg-center bg-no-repeat"
      >
        {/* Overlay (optional but looks premium) */}
        <div className="w-full h-full bg-white/60 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-[48px] font-medium font-pop text-black">
              Shop
            </h1>

            <div className="flex items-center justify-center gap-2 mt-2 text-sm sm:text-base text-black">
              <span className="font-medium">Home</span>
              <FaAngleRight className="text-xs mt-[2px]" />
              <span className="font-light">Shop</span>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#F9F1E7] border border-black/20 py-3 px-4">
        <div className="max-w-[1320px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Left Side */}
          <div className="flex items-center gap-4">
            {/* Filter */}
            <button className="flex items-center gap-2 text-[20px] font-pop text-[#000000]">
              <span>☰</span>
              Filter
            </button>

            {/* View Icons */}
            <div className="flex items-center gap-2 border-l pl-4">
              <button className="p-1 border">⬛⬛</button>
              <button className="p-1 border">▤</button>
            </div>

            {/* Result Count */}
            <p className="text-[16px] font-pop font-semibold border-l pl-4">
              Showing 1–16 of 32 results
            </p>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            {/* Show */}
            <div className="flex items-center gap-2">
              <span className="text-[20px] font-pop">Show</span>
              <select className="border px-2 py-1 text-[14px] bg-white">
                <option>16</option>
                <option>32</option>
                <option>48</option>
              </select>
            </div>

            {/* Sort */}
            <div className="flex items-center gap-2">
              <span className="text-[20px] font-pop">Short by</span>
              <select className="border px-3 py-1 text-[14px] bg-white">
                <option>Default</option>
                <option>Price</option>
                <option>Latest</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopBanner;
