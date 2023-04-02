import { createBrowserRouter } from "react-router-dom";
import CheckOut from "../Components/Checkout/CheckOut";
import Home from "../Components/Home/Home";
import Login from "../Components/LogSign/Login";
import SignUp from "../Components/LogSign/SignUp";
import Orders from "../Components/Orders/Orders";
import Main from "../Layout/Main";
import PrivateRoute from "../Route/PrivateRoute";
import ProductCheckOut from "../Components/Checkout/ProductCheckOut";
import ServiceRoute from "../Components/Home/ServiceRoute";
import Errorpage from "../Components/Shared/Errorpage";
import Contact from "../Components/Contact";
import Faq from "../Components/Faq";

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
                path: '/faq',
                element: <Faq></Faq>
            },
            {
                path: '/services',
                element: <ServiceRoute></ServiceRoute>
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
                element: <PrivateRoute><CheckOut></CheckOut></PrivateRoute>,
                loader: ({ params }) => fetch(`https://car-doctor-server-eta.vercel.app/services/${params.id}`)
            },
            {
                path: '/productCheckout/:id',
                element: <PrivateRoute><ProductCheckOut></ProductCheckOut> </PrivateRoute>,
                loader: ({ params }) => fetch(`https://car-doctor-server-eta.vercel.app/product/${params.id}`)
            },
            {
                path: '/orders',
                element: <PrivateRoute><Orders></Orders></PrivateRoute>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            }
        ]
    },
    {
        path: '*',
        element: <Errorpage></Errorpage>
    }
])

export default router;