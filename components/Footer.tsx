import React from "react";
import Link from "next/link";

const menu = [
  { name: "Home", path: "/" },
  { name: "Shop", path: "/shop" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const menuT = [
  { name: "Payment Options" },
  { name: "Returns" },
  { name: "Privacy Policies" },
];

const Footer = () => {
  return (
    <footer className="bg-[#F9F7F4] border-t border-black/20 overflow-x-hidden">
      {/* Top */}
      <div className="max-w-[1320px] mx-auto px-4 py-[50px]">
        <div className="flex flex-col md:flex-row justify-between gap-10 text-center md:text-left">

          {/* Logo & Address */}
          <div>
            <h1 className="text-2xl font-bold font-pop">Funiro.</h1>
            <p className="text-[16px] text-[#9f9f9f] max-w-[285px] mt-10 mx-auto md:mx-0">
              400 University Drive Suite 200 Coral Gables,
              <br />
              FL 33134 USA
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-[16px] text-[#9f9f9f] font-medium font-pop">
              Links
            </h3>
            <ul className="mt-8">
              {menu.map((item) => (
                <li
                  key={item.name}
                  className="mt-4 text-[16px] font-medium font-pop"
                >
                  <Link href={item.path}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="text-[16px] text-[#9f9f9f] font-medium font-pop">
              Help
            </h3>
            <ul className="mt-8">
              {menuT.map((item) => (
                <li key={item.name} className="mt-4 text-[16px] font-medium">
                  {item.name}
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="w-full md:w-auto">
            <h3 className="text-[16px] text-[#9f9f9f] font-medium font-pop">
              Newsletter
            </h3>

            <div className="mt-8 flex flex-col sm:flex-row items-center md:items-start gap-3 w-full">
              <input
                type="email"
                placeholder="Enter Your Email Address"
                className="border border-black/20 py-1 px-4 bg-transparent outline-none w-full sm:w-[220px]"
              />
              <button className="px-4 py-1 border border-black font-medium whitespace-nowrap">
                SUBSCRIBE
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-black/10">
        <div className="max-w-[1320px] mx-auto px-4 py-4">
          <p className="text-sm text-[#3A3A3A] text-center md:text-left">
            2023 funiro. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
