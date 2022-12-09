import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loader from '../../Shared/Loader/Loader';
import Product from '../../Shared/Products/Product';

const AllProducts = () => {
    // const products = useLoaderData();
    const {data:products = [], refetch, isLoading } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res =await fetch(`https://buy-sell-server-beta.vercel.app/products`)
            const data = await res.json();
            return data;
        }
    });

    if(isLoading){
        return <Loader></Loader>
    }
    return (
        <div>
            <h1 className='text-4xl font-bold text-center my-10'>All Mobile from Mobile Bazar</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    products.map(product => <Product
                    key={product._id}
                    product={product}
                    refetch={refetch}
                    isLoading={isLoading}
                    >
                    </Product>)
                }
            </div>
        </div>
    );
};

export default AllProducts;