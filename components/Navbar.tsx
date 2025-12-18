"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CiHeart, CiSearch } from "react-icons/ci";
import { MdManageAccounts } from "react-icons/md";
import { HiMenu, HiX } from "react-icons/hi";

const menu = [
  { name: "Home", path: "/" },
  { name: "Shop", path: "/shop" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <div className="max-w-[1320px] mx-auto px-4 py-5 flex items-center justify-between">
        <Image src="/images/logo.png" alt="logo" width={185} height={41} />

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-x-10">
          {menu.map((item) => (
            <li
              key={item.name}
              className="relative text-[16px] font-medium font-pop
              after:content-[''] after:absolute after:left-0 after:-bottom-1
              after:h-[3px] after:w-0 after:bg-black
              after:transition-all after:duration-300
              hover:after:w-full"
            >
              <Link href={item.path}>{item.name}</Link>
            </li>
          ))}
        </ul>

        {/* Desktop Icons */}
        <div className="hidden lg:flex items-center gap-x-6 text-[26px]">
          <MdManageAccounts />
          <CiSearch />
          <CiHeart />
          <AiOutlineShoppingCart />
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden text-[32px] cursor-pointer z-50">
          {open ? (
            <HiX onClick={() => setOpen(false)} />
          ) : (
            <HiMenu onClick={() => setOpen(true)} />
          )}
        </div>
      </div>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/40 transition-opacity duration-300 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setOpen(false)}
      />

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-[280px] bg-white z-50
        transform transition-transform duration-300 ease-in-out
        ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="p-6 flex flex-col gap-y-6">
          {menu.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              onClick={() => setOpen(false)}
              className="text-[18px] font-medium font-pop"
            >
              {item.name}
            </Link>
          ))}

          <div className="flex items-center gap-x-6 text-[26px] pt-6 border-t">
            <MdManageAccounts />
            <CiSearch />
            <CiHeart />
            <AiOutlineShoppingCart />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
