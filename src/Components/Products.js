import React from "react";
import Product from "./Product";
import { IoIosArrowForward } from "react-icons/io";

const Products = ({ data }) => {
    const products = data?.productsCategories
  return (
    <div className="border-b-4 border-gray-300">
      <div className="max-w-[1028px] mx-auto mb-10">
        <div className="grid lg:grid-cols-5">
          <div className="hidden lg:block col-span-1">
            <p className="my-3 font-bold items-center">
              Categories{" "}
              <span className="ml-3 bg-black text-white py-1 px-1 rounded">
                {data?.productsCategories?.length}
              </span>
            </p>
            <ul className="list space-y-3">
              <li>IPHONE CASE</li>
              <li>AIRPODS PRO CASE</li>
              <li>LIGHTNING CABLE</li>
              <li>POWER BANK</li>
            </ul>
          </div>
          <div className="col-span-4">
            {products?.map((product) => (
              <div className="my-3" key={product?.id}>
                <div className="flex items-center justify-between">
                  <h2 className="my-3 font-bold">
                    {product?.category}
                    <span className="ml-3 bg-black text-white py-1 px-1 rounded">
                      {product?.products.length}
                    </span>
                  </h2>
                  <button className="btn flex items-center">
                    See All <IoIosArrowForward className="ml-2 text-xl" />
                  </button>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
                  {product?.products?.map((product) => (
                    <Product key={product?.id} product={product} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
