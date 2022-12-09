import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import Product from '../../Shared/Products/Product';

const MyProducts = () => {
    const {user} = useContext(AuthContext);
    console.log(user?.email);

    const url = `https://buy-sell-server-beta.vercel.app/myproducts?email=${user?.email}`;

    const { data: products = [] , refetch, isLoading} = useQuery({
        queryKey: ['products', user?.email],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            return data;
        }
    })
    return (
        <div>
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
    );
};

export default MyProducts;