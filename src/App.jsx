import "./App.css";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/Signin";
import ForgotPassword from "./pages/ForgotPassword";
import Generate from "./pages/Generate";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Home from "./pages/home";
import PrivateRoutes from "./components/PrivateRoutes";
import Sample from "./pages/Sample";
import Layout from "./layout/Layout";
import EachBlogPage from "./pages/EachBlogPage";

const router = createBrowserRouter([
  {
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    path: "/sign-in",
    element: <SignIn />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />,
  },
  {
    path: "/sample",
    element: <Sample />,
  },

  {
    element: <PrivateRoutes />,
    children: [
      {
        path: "/",
        element: (
          <Layout>
            <Outlet />
          </Layout>
        ),
        children: [
          {
            index: true,
            element: <Home />,
          },
          {
            path: "/generate",
            element: <Generate />,
          },
          {
            path: "/contact",
            element: <Contact />,
          },
          {
            path: "/pricing",
            element: <Pricing />,
          },
          {
            path: "/blog",
            element: <Blog />,
          },
          {
            path: "/blog/:id",
            element: <EachBlogPage />,
          },
        ],
      },
    ],
  },
]);

function App() {
  return (
    <div className="max-w-[1800px] m-auto">
      <ToastContainer />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
