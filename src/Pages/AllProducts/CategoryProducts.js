import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Product from '../../Shared/Products/Product';



const CategoryProducts = () => {
    const categoryProducts = useLoaderData()

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                categoryProducts.map(product => <Product
                key={product._id}
                product={product}
                ></Product>)
            }
        </div>
    );
};

export default CategoryProducts;