import { createBrowserRouter } from "react-router-dom";
import Root from "../components/Root";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ErrorPage from "../pages/ErrorPage";
import DetailsHome from "../pages/DetailsHome";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";
import PrivateProfile from "../PrivateRoutes/PrivateProfile";
import ProfileUpdate from "../pages/ProfileUpdate";
import About from "../pages/About";
import Loans from "../pages/Loans";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement:<ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader:()=>fetch('/data.json')
            },
            {
                path:"/home/:id",
                element:<PrivateRoutes><DetailsHome></DetailsHome></PrivateRoutes>,
                loader:()=>fetch('/data.json')
            },
            {
                path: '/login',
                element: <Login></Login>,
            },
            {
                path:'/profileUpdate',
                element:<PrivateProfile><ProfileUpdate></ProfileUpdate></PrivateProfile>
            },
            {
                path: '/register',
                element: <Register></Register>,
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/loans',
                element: <PrivateRoutes><Loans></Loans></PrivateRoutes>
            },
            
        ]
    },
]);

export default router;