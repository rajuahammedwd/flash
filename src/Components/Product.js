import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Product = ({ data }) => {
  console.log(data)
  const { id, name, price, discount, images } = data;
  const discountAmount = (price * (100 - discount)) / 100;
  const discountPrice = Math.floor(discountAmount);

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
      <h3 className="line-clamp-1 font-montserrat hover:underline">{name}</h3>
      <small className="flex items-center">
        <span className="mr-2">৳{discountPrice}</span>
        <span className='mr-2'>
          <del>{price}</del>
        </span>
        <span className="text-red-500"> {discount}% OFF</span>
      </small>
        <button className="btn w-full items-center border border-black rounded-md py-2 hover:bg-[#E2E8F0]">
          Shop Now
        </button>
    </div>
  );
};

export default Product;