import React from "react";
import Product from "./Product";
import { IoIosArrowForward } from "react-icons/io";
import Link from "next/link";

const Products = ({ data }) => {
  const products = data?.products;
  const phoneCase = products?.filter((item) => item.category === "phoneCase");
  const airPodCase = products?.filter((item) => item.category === "airPodCase");
  const lightningCable = products?.filter(
    (item) => item.category === "lightningCable"
  );
  const powerBank = products?.filter((item) => item.category === "powerBank");
  const allCategory = [phoneCase, airPodCase, lightningCable, powerBank];
  return (
    <div className="border-b-4 border-gray-300">
      <div className="max-w-[1028px] mx-auto mb-10">
        <div className="grid lg:grid-cols-5">
          <div className="hidden lg:block col-span-1">
            <p className="my-3 font-bold items-center">
              Categories{" "}
              <span className="ml-3 bg-black text-white py-1 px-1 rounded">
                {allCategory?.length}
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
            <div>
              {allCategory?.map((item, index) => (
                <div key={index}>
                  <div className="flex items-center justify-between">
                    <h2 className="my-3 font-bold uppercase">
                      {item?.category}
                      <span className="ml-3 bg-black text-white py-1 px-1 rounded">
                        {item?.length}
                      </span>
                    </h2>
                    <button className="btn flex items-center">
                      See All <IoIosArrowForward className="ml-2 text-xl" />
                    </button>
                  </div>
                  <div>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
                      {item?.map((data, index) => (
                        <Link href={`/details/${data.id}`} key={index}>
                          <Product data={data} />
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
