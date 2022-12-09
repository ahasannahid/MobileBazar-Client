import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import Loader from '../../Shared/Loader/Loader';


const AddProducts = () => {
    const {user} = useContext(AuthContext);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [loading, setLoading] = useState(false);

    // const imageHostKey = '788c5ee298fe3a075bdcb0784c8ed0fd';
    const imageHostKey = process.env.REACT_APP_imgbb_key;
    console.log(imageHostKey);

    const navigate = useNavigate();

    const handleAddProduct = data => {
        // console.log(data.image[0]);
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        // const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`

        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(imgData  => {
            // console.log(imgData)
            if(imgData.success){
                // console.log(imgData.data.url);
                const doctor = {
                    name: data.name,
                    Price: data.price,
                    photo: imgData.data.url,
                    Condition: data.condition,
                    phone: data.phone,
                    category: data.category,
                    location: data.location,
                    description: data.description,
                    purchase_year: data.year,
                    email: data.email,
                }
                // save doctor information to the database
                fetch('https://buy-sell-server-beta.vercel.app/products', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(doctor)
                })
                .then(res => res.json())
                .then(result => {
                    console.log(result);
                    toast.success(`${data.name} is Added Successfully`);
                    navigate('/dashboard/myproducts')
                })
            }
        })
    }
    if (loading) {
        setLoading(<Loader></Loader>);
    }
    return (
        <div className='w-96 p-7 mx-auto'>
            <h2 className="text-4xl">Add A Product</h2>

            <form onSubmit={handleSubmit(handleAddProduct)}>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Product Name</span>
                    </label>
                    <input type="text" {...register("name", {
                        required: 'Name is required'
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.name && <p className='text-red-600' role="alert">{errors.name?.message}</p>}
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <input type="text" {...register("price", {
                        required: 'Email Address is required'
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.email && <p className='text-red-600' role="alert">{errors.email?.message}</p>}
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" defaultValue={user.email} readOnly {...register("email", {
                        required: 'Email Address is required'
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.email && <p className='text-red-600' role="alert">{errors.email?.message}</p>}
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Category</span>
                    </label>
                    <select
                        {...register('category')}
                        className="select input-bordered w-full max-w-xs">
                        <option>Iphone</option>
                        <option>Samsung</option>
                        <option>OnePlus</option>
                    </select>
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Photo</span>
                    </label>
                    <input type="file" {...register("image", {
                        required: 'Photo is required'
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.img && <p className='text-red-600' role="alert">{errors.img?.message}</p>}
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Condition</span>
                    </label>
                    <input type="text" {...register("condition", {
                        required: 'this is required'
                    })} className="input input-bordered w-full max-w-xs" />
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Phone Number</span>
                    </label>
                    <input type="number" {...register("phone", {
                        required: 'this is required'
                    })} className="input input-bordered w-full max-w-xs" />
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Location</span>
                    </label>
                    <input type="text" {...register("location", {
                        required: 'this is required'
                    })} className="input input-bordered w-full max-w-xs" />
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <input type="text" {...register("description", {
                        required: 'this is required'
                    })} className="input input-bordered w-full max-w-xs" />
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Purchase Year</span>
                    </label>
                    <input type="text" {...register("year", {
                        required: 'this is required'
                    })} className="input input-bordered w-full max-w-xs" />
                </div>

                <input className=' mt-4 btn btn-accent w-full' value="Add Product" type="submit" />
            </form>
        </div>
    );
};


/**
 * Three place to store Image
1. Third party Image hosting server(best way)
2. File system of own server
3. MongoDB (database)
*/

export default AddProducts;