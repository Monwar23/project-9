import { createBrowserRouter } from "react-router-dom";
import Root from "../components/Root";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ErrorPage from "../pages/ErrorPage";
import DetailsHome from "../pages/DetailsHome";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";
import UpdateProfile from "../PrivateRoutes/UpdateProfilePrivate";
import UpdateProfilePrivate from "../PrivateRoutes/UpdateProfilePrivate";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement:<ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader:()=>fetch('data.json')
            },
            {
                path:"/home/:id",
                element:<PrivateRoutes><DetailsHome></DetailsHome></PrivateRoutes>,
                loader:()=>fetch('data.json')
            },
            {
                path: '/login',
                element: <Login></Login>,
            },
            {
                path:'/updateProfile',
                element:<UpdateProfilePrivate><UpdateProfile></UpdateProfile></UpdateProfilePrivate>
            },
            {
                path: '/register',
                element: <Register></Register>,
            },
        ]
    },
]);

export default router;