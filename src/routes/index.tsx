import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/home";
import DetailPage from "../pages/detail";
import ErrorPage from "../pages/error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/detail/:day",
    element: <DetailPage />,
  },
]);

export default router;
