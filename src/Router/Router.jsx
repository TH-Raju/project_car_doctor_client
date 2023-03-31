import { createBrowserRouter } from "react-router-dom";
import CheckOut from "../Components/Checkout/CheckOut";
import Home from "../Components/Home/Home";
import Login from "../Components/LogSign/Login";
import SignUp from "../Components/LogSign/SignUp";
import Orders from "../Components/Orders/Orders";
import Main from "../Layout/Main";

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
                path: '/checkout/:id',
                element: <CheckOut></CheckOut>,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path: '/orders',
                element: <Orders></Orders>
            }
        ]
    }
])

export default router;