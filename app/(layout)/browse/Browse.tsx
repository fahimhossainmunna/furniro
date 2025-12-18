import Image from "next/image";
import React from "react";

const Browse = () => {
  return (
    <>
      <div className="max-w-[1320px] mx-auto py-12 px-4">
        <div className="text-center">
          <h1 className="text-[32px] font-bold font-pop">Browse The Range</h1>
          <p className="text-[20px] text-[#666666] font-pop">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-15 justify-items-center">
          <div className="overflow-hidden text-center">
            <Image
              src="/images/one.png"
              alt="one.png"
              width={381}
              height={480}
            />
            <h3 className="text-2xl text-[#333333] font-semibold font-pop mt-3">
              Dining
            </h3>
          </div>
          <div className="overflow-hidden  text-center">
            <Image
              src="/images/two.png"
              alt="two.png"
              width={381}
              height={480}
            />
            <h3 className="text-2xl text-[#333333] font-semibold font-pop mt-3">
              Living
            </h3>
          </div>
          <div className="overflow-hidden  text-center">
            <Image
              src="/images/four.png"
              alt="four.png"
              width={381}
              height={480}
            />
            <h3 className="text-2xl text-[#333333] font-semibold font-pop mt-3">
              Bedroom
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Browse;
