import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import useAdmin from '../../components/Hook/useAdmin';
import useSeller from '../../components/Hook/useSeller';
import { AuthContext } from '../../Context/AuthProvider';

const DashBoard = () => {
    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email);
    const [isSeller] = useSeller(user?.email);
    return (
        <div>
            <h1 className="text-center font-bold text-4xl my-10">DashBoard</h1>
            <div className='flex justify-center'>
            
            {
                user?.uid && <>
                    <Link to="/dashboard/myorders"><button className='btn btn-primary btn-sm mr-4'>My Orders</button></Link>

                </>
            }
            {
                isSeller && <>
                    <Link to="/dashboard/myproducts"><button className='btn btn-primary btn-sm mr-4'>My Products</button></Link>
                    <Link to="/dashboard/addproducts"><button className='btn btn-primary btn-sm mr-4'>Add Products</button></Link>
                </>
            }

            {
                isAdmin && <>
                    <Link to="/dashboard/allseller"><button className='btn btn-primary btn-sm mr-4'>All Seller</button></Link>
                    <Link to="/dashboard/allbuyer"><button className='btn btn-primary btn-sm mr-4'>All Buyer</button></Link>
                </>
            }
        </div>
        </div>
    );
};

export default DashBoard;