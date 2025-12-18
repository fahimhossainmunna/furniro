import Image from "next/image";

interface Product {
  image: string;
  name: string;
  desc: string;
  price: string;
  badge?: string;
}

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="bg-white shadow-lg rounded overflow-hidden group">
      
      {/* Image Wrapper */}
      <div className="relative">
        <Image
          src={product.image}
          alt={product.name}
          width={300}
          height={300}
          className="w-full object-cover"
        />

        {/* Badge */}
        {product.badge && (
          <span className="absolute top-4 right-4 bg-red-500 text-white text-sm px-3 py-1 rounded-full">
            {product.badge}
          </span>
        )}

        {/* Hover Overlay */}
        <div className="
          absolute inset-0 
          bg-black/60 
          flex flex-col items-center justify-center
          opacity-0 
          group-hover:opacity-100 
          transition
          duration-300
        ">
          <button className="bg-white text-black px-6 py-2 mb-4 font-medium">
            Add to cart
          </button>

          <div className="flex gap-4 text-white text-sm">
            <span className="cursor-pointer">&lt; Share</span>
            <span className="cursor-pointer">⇄ Compare</span>
            <span className="cursor-pointer">♡ Like</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="text-sm text-gray-500 mt-1">{product.desc}</p>
        <p className="font-bold mt-3">{product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
