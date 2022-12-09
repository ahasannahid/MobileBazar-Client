import React, { useState } from 'react';
import BookingModal from '../../Pages/BookingProducts/BookingModal';

const Product = ({ product, refetch, isLoading }) => {

    const { name, Price, Condition, phone, category, location, description, purchase_year, photo } = product;

    const [addProduct, setAddProduct] = useState(null);


    // console.log(addProduct);
    if (isLoading) {
        return <p>Loading....</p>
    }

    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl my-5">
            <figure><img src={photo} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <div>
                    <p>{description}</p>
                </div>
                <div className='flex'>
                    <p>price: ${Price}</p>
                    <p>Condition:{Condition}</p>
                    <p>Category:{category}</p>
                </div>
                <div className='flex font-bold'>
                    <p>Phone: {phone}</p>
                    <p>Phone: {location}</p>
                </div>
                <p>Purchase Year: {purchase_year}</p>
                <div className="card-actions justify-end">
                    <label
                        htmlFor="booking-modal"
                        className="btn btn-primary text-white"
                        onClick={() => setAddProduct(product)}
                    >Book Product</label>
                </div>
            </div>


            {addProduct &&
                <BookingModal
                    product={product}
                    refetch={refetch}
                    addProduct={addProduct}
                    setAddProduct={setAddProduct}
                    isLoading={isLoading}
                ></BookingModal>
            }

        </div>
    );
};

export default Product;