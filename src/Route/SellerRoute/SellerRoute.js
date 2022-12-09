import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useSeller from '../../components/Hook/useSeller';
import { AuthContext } from '../../Context/AuthProvider';
import Loader from '../../Shared/Loader/Loader';




const SellerRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const [isSeller, isSellerLoading] = useSeller(user?.email);
    const location = useLocation();
    
    if(loading || isSellerLoading){
        // return <progress className="progress w-56"></progress>
        return <Loader></Loader>
    }

    if(user && isSeller){
        return children;
    }

    return <Navigate to='/login' state={{from: location}} replace></Navigate>
    
};

export default SellerRoute;