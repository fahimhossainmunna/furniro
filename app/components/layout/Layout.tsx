import Room from "@/app/(layout)/room/Room";
import Browse from "../../(layout)/browse/Browse";
import Hero from "../../(layout)/hero/Hero";
import Product from "../../(layout)/product/Product";

const Layout = () => {
  return (
    <>
      <Hero />
      <Browse />
      <Product />
      <Room/>
    </>
  );
};

export default Layout;
