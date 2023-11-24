import Image from 'next/image';
import React from 'react';

const Product = (product) => {
    const {name, price, discount, images } = product.product;
    
    
    return (
      <div className="card">
        <div className="group relative overflow-hidden">
          <Image
            className="overflow-hidden transition-transform duration-700 transform-gpu group-hover:scale-110"
            src={images}
            alt={name}
            width={200}
            height={200}
          />
        </div>
        <h3 className="line-clamp-1 font-montserrat hover:underline">
          {name}
        </h3>
        <p className="flex items-center">
          <span className="mr-2">৳{price}</span>
          <span className="text-red-500"> {discount}% OFF</span>
        </p>
        <button className="btn w-full items-center border border-black rounded-md py-2 hover:bg-[#E2E8F0]">
          Shop Now
        </button>
      </div>
    );
};

export default Product;