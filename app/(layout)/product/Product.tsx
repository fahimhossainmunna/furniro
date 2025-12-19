import Link from "next/link";
import ProductCard from "./ProCurd"; 
import { products } from "@/data/product";

const Product = () => {
  const productss = products.slice(0,8);
  return (
    <section className="py-20">
      <div className="max-w-[1320px] mx-auto px-4">
        
        <h2 className="text-[40px] font-bold text-center mb-4">
          Our Products
        </h2>

        <p className="text-center text-gray-500 mb-12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {productss.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
        <div className="text-center mt-10">
            <button className="bg-transparent border border-[#B88E2F] text-[16px] text-[#B88E2F] font-semibold font-bold py-[12px] px-[70px]">
              <Link href={"/shop"}>See More</Link>
            </button>
        </div>

      </div>
    </section>
  );
};

export default Product;
