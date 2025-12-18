import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <>
    <div className="bg-[#c4bdbd] text-white">

    
      <div className="max-w-[1320px] mx-auto flex items-center justify-between py-5">
        <div className="">
          <Image src="/images/logo.png" alt="logo" width={130} height={40} />
        <p>400 University Drive Suite 200 Coral Gables, FL 33134 USA</p>
        </div>
      </div>
      </div>
    </>
  );
};

export default Footer;
