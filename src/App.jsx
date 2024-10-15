import "./App.css";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Signup from "./pages/Signup";
import SignIn from "./pages/Signin";
import ForgotPassword from "./pages/ForgotPassword";
import Generate from "./pages/Generate";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Home from "./pages/Home";
import PrivateRoutes from "./components/PrivateRoutes";
// import Sample from "./pages/Sample";
import Layout from "./layout/Layout";
import EachBlogPage from "./pages/EachBlogPage";
import SignedInLayout from "./layout/SignedInLayout";
import Settings from "./pages/Settings";
import Subscriptions from "./pages/Subscriptions";

const router = createBrowserRouter([
  {
    path: "/sign-up",
    element: <Signup />,
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
    element: (
      <SignedInLayout>
        <Outlet />
      </SignedInLayout>
    ),
    children: [
      {
        path: "/documents",
        element: <Generate />,
      },
      {
        path: "/settings",
        element: <Settings />,
      },
      {
        path: "/subscriptions",
        element: <Subscriptions />,
      },
    ],
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
          // {
          //   path: "/generate",
          //   element: <Generate />,
          // },
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
