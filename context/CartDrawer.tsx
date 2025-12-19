"use client";

import Image from "next/image";
import { HiX } from "react-icons/hi";
import { useCart } from "@/context/CartContext";

const CartDrawer = () => {
  const { cart, openCart, setOpenCart } = useCart();

  const getPrice = (price: any): number => {
    if (!price) return 0;
    if (typeof price === "string") {
      const num = parseFloat(price.replace(/[^0-9.]/g, ""));
      return isNaN(num) ? 0 : num;
    }
    return isNaN(price) ? 0 : Number(price);
  };

  const totalPrice = cart.reduce(
    (sum: number, item: any) =>
      sum + getPrice(item.price) * (item.qty || 1),
    0
  );

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          openCart ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setOpenCart(false)}
      />

      {/* Drawer */}
      <aside
        className={`fixed top-0 right-0 h-full w-[420px] bg-white z-50
        transform transition-transform duration-300 ease-out
        shadow-2xl
        ${openCart ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Header */}
        <header className="px-6 py-5 border-b flex items-center justify-between">
          <h2 className="text-lg font-semibold tracking-tight">
            Shopping Cart
          </h2>
          <HiX
            onClick={() => setOpenCart(false)}
            className="text-2xl cursor-pointer hover:text-gray-500 transition"
          />
        </header>

        {/* Table Head */}
        <div className="grid grid-cols-6 px-6 py-3 text-xs font-semibold text-gray-400 uppercase border-b">
          <span className="col-span-3">Product</span>
          <span className="text-center">Qty</span>
          <span className="text-right col-span-2">Total</span>
        </div>

        {/* Items */}
        <div className="px-6 py-4 space-y-5 overflow-y-auto h-[calc(100%-220px)]">
          {cart.length === 0 && (
            <p className="text-center text-gray-400 py-12 text-sm">
              Your cart is empty
            </p>
          )}

          {cart.map((item: any) => {
            const price = getPrice(item.price);

            return (
              <div
                key={item.name}
                className="grid grid-cols-6 items-center gap-4"
              >
                {/* Product */}
                <div className="col-span-3 flex items-center gap-4">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={60}
                    height={60}
                    className="rounded-lg border bg-gray-50"
                  />
                  <div>
                    <p className="text-sm font-medium leading-tight">
                      {item.name}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      ${price.toFixed(2)}
                    </p>
                  </div>
                </div>

                {/* Qty */}
                <span className="text-center text-sm font-medium">
                  {item.qty}
                </span>

                {/* Total */}
                <span className="text-right text-sm font-semibold col-span-2">
                  ${(price * item.qty).toFixed(2)}
                </span>
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <footer className="border-t px-6 py-5 bg-white">
          <div className="flex justify-between items-center mb-5">
            <span className="text-sm text-gray-500">
              Subtotal
            </span>
            <span className="text-xl font-semibold">
              ${totalPrice.toFixed(2)}
            </span>
          </div>

          <button className="w-full bg-black text-white py-3 rounded-lg text-sm font-medium hover:bg-gray-900 transition active:scale-[0.98]">
            Proceed to Checkout
          </button>

          <p className="text-[11px] text-gray-400 text-center mt-3">
            Taxes & shipping calculated at checkout
          </p>
        </footer>
      </aside>
    </>
  );
};
export default CartDrawer;
