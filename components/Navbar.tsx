"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CiHeart, CiSearch } from "react-icons/ci";
import { MdManageAccounts } from "react-icons/md";
import { HiMenu, HiX } from "react-icons/hi";
import { useCart } from "@/context/CartContext";

const menu = [
  { name: "Home", path: "/" },
  { name: "Shop", path: "/shop" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { cart, setOpenCart } = useCart();

  const totalQty = cart.reduce(
    (sum: number, item: any) => sum + item.qty,
    0
  );

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <div className="max-w-[1320px] mx-auto px-4 py-5 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <Image src="/images/logo.png" alt="logo" width={185} height={41} />
        </Link>

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

          {/* Cart */}
          <div
            className="relative cursor-pointer"
            onClick={() => setOpenCart(true)}
          >
            <AiOutlineShoppingCart />
            {totalQty > 0 && (
              <span className="absolute -top-2 -right-3 bg-black text-white text-[12px] font-semibold w-5 h-5 rounded-full flex items-center justify-center">
                {totalQty}
              </span>
            )}
          </div>
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

      {/* ================= MOBILE OVERLAY ================= */}
      <div
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setOpen(false)}
      />

      {/* ================= MOBILE SIDEBAR ================= */}
      <div
        className={`fixed top-0 right-0 h-full w-[280px] bg-white z-50
        transform transition-transform duration-300
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

          {/* Mobile Icons */}
          <div className="flex items-center gap-x-6 text-[26px] pt-6 border-t">
            <MdManageAccounts />
            <CiSearch />
            <CiHeart />

            {/* Mobile Cart */}
            <div
              className="relative cursor-pointer"
              onClick={() => {
                setOpen(false);
                setOpenCart(true);
              }}
            >
              <AiOutlineShoppingCart />
              {totalQty > 0 && (
                <span className="absolute -top-2 -right-3 bg-black text-white text-[12px] font-semibold w-5 h-5 rounded-full flex items-center justify-center">
                  {totalQty}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
