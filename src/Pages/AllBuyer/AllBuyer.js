import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import Loader from '../../Shared/Loader/Loader';

const AllBuyer = () => {

    const {data:Buyers = [], refetch, isLoading } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res =await fetch(`https://buy-sell-server-beta.vercel.app/role/Buyer`)
            const data = await res.json();
            return data;
        }
    });
    // console.log(seller);

    const handleDeleteBuyer = id => {
        fetch(`https://buy-sell-server-beta.vercel.app/users/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.deletedCount > 0) {
                    refetch();
                    toast.success(`Buyer Deleted Successfully`)
                }
            })
    }

    if (isLoading) {
        return <Loader></Loader>
    }
    return (
        <div>
            <h3 className="text-3xl text-center mb-5">My Appointments</h3>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Buyers && 
                            Buyers?.map((Buyer, i) => <tr className="hover" key={Buyer._id}>
                            <th>{i+1}</th>
                            <td>{Buyer?.name}</td>
                            <td>{Buyer?.email}</td>
                            <td><button onClick={() => handleDeleteBuyer(Buyer?._id)} className='btn-sm btn-primary'>Delete Buyer</button></td>
                            
                        </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};


export default AllBuyer;