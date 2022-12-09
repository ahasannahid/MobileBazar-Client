import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider';

const MyOrders = () => {
    const {user} = useContext(AuthContext);

    const [payment, setPayment] = useState(false)

    

    const url = `https://buy-sell-server-beta.vercel.app/bookings?email=${user?.email}`;

    const { data: bookings = [] } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            return data;
        }
    })


    return (
        <div>
            <h3 className="text-3xl text-center mb-5">My Orders</h3>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Product Name</th>
                            <th>Phone</th>
                            <th>Email</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings && 
                            bookings?.map((booking, i) => <tr className="hover" key={booking._id}>
                            <th>{i+1}</th>
                            <td>{booking?.customer}</td>
                            <td>{booking?.product}</td>
                            <td>{booking?.phone}</td>
                            <td>{booking?.email}</td>
                            <td><button onClick={() => setPayment(!payment)} className='btn-sm btn-primary'>{payment? 'Paid' : 'Payment'}</button></td>
                        </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;