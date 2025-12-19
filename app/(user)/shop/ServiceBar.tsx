import React from "react";
import { GrDeliver } from "react-icons/gr";
import { HiOutlineBadgeCheck } from "react-icons/hi";
import { HiOutlineTrophy } from "react-icons/hi2";
import { MdSupportAgent } from "react-icons/md";

const services = [
  {
    id: 1,
    icon: HiOutlineTrophy,
    title: "High Quality",
    desc: "crafted from top materials",
  },
  {
    id: 2,
    icon: HiOutlineBadgeCheck,
    title: "Warranty Protection",
    desc: "Over 2 years",
  },
  {
    id: 3,
    icon: GrDeliver,
    title: "Free Shipping",
    desc: "Order over 150 $",
  },
  {
    id: 4,
    icon: MdSupportAgent,
    title: "24 / 7 Support",
    desc: "Dedicated support",
  },
];

const ServiceBar = () => {
  return (
    <div className="bg-[#FAF3EA] py-8">
  <div className="max-w-[1320px] mx-auto px-6">
    <div
      className="
        grid grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-4
        gap-y-10 gap-x-6
        place-items-center
        lg:place-items-start
      "
    >
      {services.map(({ id, icon: Icon, title, desc }) => (
        <div
          key={id}
          className="
            flex items-center gap-4
            w-full max-w-[280px]
             lg:text-left
          "
        >
          <Icon className="w-[48px] h-[48px] flex-shrink-0" />

          <div>
            <h3 className="text-xl font-semibold text-[#242424] font-pop">
              {title}
            </h3>
            <p className="text-[16px] text-[#898989] font-medium font-in">
              {desc}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>

  );
};

export default ServiceBar;
