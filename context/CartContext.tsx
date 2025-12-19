"use client";
import { createContext, useContext, useState } from "react";

const CartContext = createContext<any>(null);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<any[]>([]);
  const [openCart, setOpenCart] = useState(false);

  const addToCart = (product: any) => {
    setCart((prev) => {
      const exist = prev.find((p) => p.name === product.name);
      if (exist) {
        return prev.map((p) =>
          p.name === product.name
            ? { ...p, qty: p.qty + 1 }
            : p
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
    setOpenCart(true);
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, openCart, setOpenCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
