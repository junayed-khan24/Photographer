import { createBrowserRouter } from "react-router";
import Home from "../Components/Home";
import Layout from "../layout/Layout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Home />
            }
        ]
    }
])

export default router;