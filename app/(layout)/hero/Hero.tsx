import React from "react";

const Hero = () => {
  return (
    <>
      <div className="bg-[url('/images/banner.jpg')] bg-no-repeat bg-cover bg-center w-full min-h-[600px] lg:h-[700px]">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-0 flex items-center justify-center lg:justify-end min-h-[600px] lg:h-[700px]">
          
          <div className="bg-[#FFF3E3] 
            p-6 sm:p-8 lg:p-[40px] 
            rounded-[5px]
            w-full sm:max-w-[520px] lg:max-w-[600px]
            mt-0 lg:mt-[160px]"
          >
            <h3 className="text-[14px] sm:text-[16px] text-[#333333] font-semibold font-pop">
              New Arrival
            </h3>

            <h1 className="text-[28px] sm:text-[36px] lg:text-[52px] 
              text-[#b88e2f] font-bold font-pop 
              leading-[38px] sm:leading-[46px] lg:leading-[65px] 
              mt-3 sm:mt-4"
            >
              Discover Our New Collection
            </h1>

            <p className="text-[14px] sm:text-[16px] lg:text-[18px] 
              text-[#333333] font-medium font-pop 
              leading-[22px] sm:leading-[24px] 
              mt-4"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Ut elit tellus, luctus nec ullamcorper mattis.
            </p>

            <button
              className="bg-[#B88E2F] 
                py-3 sm:py-4 lg:py-[25px] 
                px-8 sm:px-10 lg:px-[72px] 
                text-[14px] sm:text-[16px] 
                font-bold text-white font-pop 
                mt-6 sm:mt-8 lg:mt-[46px] 
                hover:bg-[#e1b348] 
                transition-all duration-300"
            >
              Buy Now
            </button>
          </div>

        </div>
      </div>
    </>
  );
};

export default Hero;
