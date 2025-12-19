import React, { Suspense } from "react";
import ShopBanner from "./ShopBanner";
import ShopCard from "./ShopCard";
import ServiceBar from "./ServiceBar";

const Shop = () => {
  return (
    <>
      <Suspense>
        <ShopBanner />
        <ShopCard />
        <ServiceBar />
      </Suspense>
    </>
  );
};

export default Shop;
