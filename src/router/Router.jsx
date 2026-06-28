import { createBrowserRouter } from "react-router";
import Home from "../Components/Home";
import Layout from "../layout/Layout";
import About from "../Components/About";
import Contact from "../Components/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/about",
        element: <About></About>
      },
      {
        path: "/contact",
        element: <Contact></Contact>
      }
    ],
  },
]);

export default router;