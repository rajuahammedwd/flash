import Image from 'next/image';
import React from 'react';

const Product = (product) => {
    console.log(product)
    
    return (
        <div className='card w-52'>
            <Image src={product.product.image} alt={product.product.name} width={200} height={200} />
            <h1>{product.product.name}</h1>
            <p></p>
      </div>
    );
};

export default Product;