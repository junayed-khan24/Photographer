import { createBrowserRouter } from "react-router";
import Home from "../Components/Home";
import Layout from "../layout/Layout";
import About from "../Components/About";
import Booking from "../Components/BookingForm";

const router = createBrowserRouter([
    {
        path: "/",
        component: <Layout />,
        children: [
            {
                index: true,
                component: <Home />
            },
            {
                path: "/about",
                component: <About></About>
            },
            {
                path: "/booking",
                component: <BookingForm></BookingForm>
            }
        ]
    }
])

export default router;