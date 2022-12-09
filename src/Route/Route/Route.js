import { createBrowserRouter } from "react-router-dom";
import Main from "../../Pages/Layout/Main"
import Home from "../../Pages/Home/Home/Home"
import SignUp from "../../Pages/SignUp/SignUp";
import Login from "../../Pages/LogIn/Login";
import AllProducts from "../../Pages/AllProducts/AllProducts";
import CategoryProducts from "../../Pages/AllProducts/CategoryProducts";
import MyOrders from "../../Pages/MyOrders/MyOrders";
import AllSeller from "../../Pages/AllSeller/AllSeller";
import AllBuyer from "../../Pages/AllBuyer/AllBuyer";
import Blog from "../../components/Blog/Blog";
import AddProducts from "../../Pages/AddProducts/AddProducts";
import MyProducts from "../../Pages/Myproducts/MyProducts";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import AdminRoute from "../AdminRoute/AdminRoute";
import SellerRoute from "../SellerRoute/SellerRoute";
import DashBoard from "../../Pages/DashBoard/DashBoard";



const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/products',
                element: <AllProducts></AllProducts>
            },
            {
                path: '/dashboard/myorders',
                element: <PrivateRoute><MyOrders></MyOrders></PrivateRoute>
            },
            {
                path: '/dashboard',
                element: <PrivateRoute><DashBoard></DashBoard></PrivateRoute>
            },
            {
                path: '/dashboard/myproducts',
                element: <SellerRoute><MyProducts></MyProducts></SellerRoute>
            },
            {
                path: '/dashboard/addproducts',
                element: <SellerRoute><AddProducts></AddProducts></SellerRoute>
            },
            {
                path: '/dashboard/allseller',
                element: <AdminRoute><AllSeller></AllSeller></AdminRoute>
            },
            {
                path: '/dashboard/allbuyer',
                element: <AdminRoute><AllBuyer></AllBuyer></AdminRoute>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/category/:name',
                element: <CategoryProducts></CategoryProducts>,
                loader : ({params}) => fetch(`https://buy-sell-server-beta.vercel.app/category/${params.name}`)
            }
        ]
    },
    
])

export default router;