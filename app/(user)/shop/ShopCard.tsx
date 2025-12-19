"use client";
import ProductCard from '@/app/(layout)/product/ProCurd'
import { products } from '@/data/product'
import React from 'react'
import { useRouter, useSearchParams } from "next/navigation";

const ShopCard = () => {

  const itemsPerPage = 16;
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;
  const totalProducts = products.length;
  const totalPages = Math.ceil(totalProducts / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProducts = products.slice(startIndex, endIndex);
  const changePage = (page: number) => {
    router.push(`?page=${page}`);
  };

  return (
    <div className="max-w-[1320px] mx-auto px-4 py-[50px]">

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {currentProducts.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-4 mt-12">

        {/* Prev */}
        <button
          onClick={() => changePage(Math.max(currentPage - 1, 1))}
          disabled={currentPage === 1}
          className="px-4 h-10 rounded-md bg-[#F9F1E7] text-[14px]
                     hover:bg-[#eedecc] disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Prev
        </button>

        {/* Page Numbers */}
        {[...Array(totalPages)].map((_, index) => {
          const page = index + 1;
          return (
            <button
              key={page}
              onClick={() => changePage(page)}
              className={`w-10 h-10 rounded-md text-[14px] border
                ${currentPage === page
                  ? "bg-[#B88E2F] text-white border-[#B88E2F]"
                  : "bg-[#F9F1E7] hover:bg-[#eedecc]"
                }`}
            >
              {page}
            </button>
          );
        })}

        {/* Next */}
        <button
          onClick={() => changePage(Math.min(currentPage + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="px-4 h-10 rounded-md bg-[#F9F1E7] text-[14px]
                     hover:bg-[#eedecc] disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default ShopCard;
