import React from "react";
import Product from "./Product";

const Products = ({ data }) => {
    const products = data?.productsCategories
  return (
    <div className="max-w-[1028px] mx-auto">
      <div className="grid lg:grid-cols-5">
        <div className="col-span-1">
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
            <div className="my-3 h-52 " key={product?.id}>
                  <p className="my-3 font-bold">{product?.name}</p>
                  <div className="grid lg:grid-cols-4">
                    {product?.products?.map((product) => (
                      <Product key={product?.id} product={product} />
                    ))}
                  </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
