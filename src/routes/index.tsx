import {
    createBrowserRouter,
} from "react-router-dom";
import HomePage from "../pages/home";
import Error from "../pages/error";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
        errorElement: <Error />
    },
]);

export default router