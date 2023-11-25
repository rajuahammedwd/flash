import Image from "next/image";
import React from "react";
import { CiHeart } from "react-icons/ci";
import { IoIosArrowForward } from "react-icons/io";
import { RiShoppingBag3Line } from "react-icons/ri";

const page = () => {
  return (
    <div className="border-b-2 px-5">
      <div className="max-w-[1028px] mx-auto">
        <div className="grid lg:grid-cols-3 mb-20">
          <div className="col-span-2 grid lg:grid-cols-5 gap-5">
            <div className="space-y-3 flex items-center lg:block">
              <Image
                className=""
                src={"https://i.ibb.co/rtdbvHF/1-z4-Ud449.jpg"}
                width={100}
                height={100}
                alt="img"
              />
              <Image
                className=""
                src={"https://i.ibb.co/sK9gyg2/2-Iv-FVG3u.jpg"}
                width={100}
                height={100}
                alt="img"
              />
            </div>
            <div className="col-span-4">
              <Image
                className="w-full"
                src={"https://i.ibb.co/C758kTb/3-d-JQr-Ifp.jpg"}
                width={700}
                height={700}
                alt="sass"
              />
            </div>
          </div>
          <div className="ml-8 space-y-5">
            <div className="space-y-3">
              <h1>FOX IPHONE CASE</h1>
              <p className="flex items-center text-xl font-bold">
                <span className="mr-2">৳1500</span>
                <span className="mr-2">
                  <del>1500</del>
                </span>
                <span className="text-green-500"> 5% OFF</span>
              </p>
              <p>
                <small>inclusive of all taxes</small>
              </p>
            </div>

            <div>
              <h1 className="mb-5">QTY : 100</h1>
              <div>
                <h2 className="uppercase font-bold">
                  Select Color <span className="text-red-500">*</span>
                </h2>
                <div className="gap-x-3 flex items-center py-3">
                  <button className="w-10 h-10 bg-black rounded-full"></button>
                  <button className="w-10 h-10 bg-gray-300 rounded-full"></button>
                </div>
              </div>
              <div className="flex items-center gap-x-3">
                <button className="btn w-full items-center border border-black bg-black rounded-md py-2 flex justify-center font-bold text-white uppercase">
                  <RiShoppingBag3Line className="mr-2 text-xl text-white" />
                  add to bag
                </button>
                <button className="btn w-full items-center border border-black rounded-md py-2 flex justify-center font-bold uppercase">
                  <CiHeart className="mr-2 text-xl" />
                  buy now
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="my-3">
          <div className="flex items-center justify-between">
            <h2 className="my-3 font-bold">
              Phone Category
              <span className="ml-3 bg-black text-white py-1 px-1 rounded">
                4
              </span>
            </h2>
            <button className="btn flex items-center">
              See All <IoIosArrowForward className="ml-2 text-xl" />
            </button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
            {/* CArd */}
            <div className="card">
              <div className="group relative overflow-hidden">
                <Image
                  className="overflow-hidden transition-transform duration-700 transform-gpu group-hover:scale-110"
                  src={"https://i.ibb.co/C758kTb/3-d-JQr-Ifp.jpg"}
                  alt={"img"}
                  width={200}
                  height={200}
                />
              </div>
              <h3 className="line-clamp-1 font-montserrat hover:underline">
                Phone Name
              </h3>
              <p className="flex items-center">
                <span className="mr-2">৳1500</span>
                <span className="text-red-500"> 7% OFF</span>
              </p>

              
            </div>
            {/* CArd */}
            <div className="card">
              <div className="group relative overflow-hidden">
                <Image
                  className="overflow-hidden transition-transform duration-700 transform-gpu group-hover:scale-110"
                  src={"https://i.ibb.co/C758kTb/3-d-JQr-Ifp.jpg"}
                  alt={"img"}
                  width={200}
                  height={200}
                />
              </div>
              <h3 className="line-clamp-1 font-montserrat hover:underline">
                Phone Name
              </h3>
              <p className="flex items-center">
                <span className="mr-2">৳1500</span>
                <span className="text-red-500"> 7% OFF</span>
              </p>

              
            </div>
            {/* CArd */}
            <div className="card">
              <div className="group relative overflow-hidden">
                <Image
                  className="overflow-hidden transition-transform duration-700 transform-gpu group-hover:scale-110"
                  src={"https://i.ibb.co/C758kTb/3-d-JQr-Ifp.jpg"}
                  alt={"img"}
                  width={200}
                  height={200}
                />
              </div>
              <h3 className="line-clamp-1 font-montserrat hover:underline">
                Phone Name
              </h3>
              <p className="flex items-center">
                <span className="mr-2">৳1500</span>
                <span className="text-red-500"> 7% OFF</span>
              </p>

              
            </div>
            {/* CArd */}
            <div className="card">
              <div className="group relative overflow-hidden">
                <Image
                  className="overflow-hidden transition-transform duration-700 transform-gpu group-hover:scale-110"
                  src={"https://i.ibb.co/C758kTb/3-d-JQr-Ifp.jpg"}
                  alt={"img"}
                  width={200}
                  height={200}
                />
              </div>
              <h3 className="line-clamp-1 font-montserrat hover:underline">
                Phone Name
              </h3>
              <p className="flex items-center">
                <span className="mr-2">৳1500</span>
                <span className="text-red-500"> 7% OFF</span>
              </p>

            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
