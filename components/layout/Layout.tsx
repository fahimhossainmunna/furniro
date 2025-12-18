import Room from "@/app/(layout)/room/Room";
import Browse from "@/app/(layout)/browse/Browse";
import Hero from "@/app/(layout)/hero/Hero";
import Product from "@/app/(layout)/product/Product";

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
