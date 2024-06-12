import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MilksManagement from "./pages/milks-managemnet";
import HomePage from "./pages/home";
import Layout from "./components/layout";
import Cart from "./pages/cart";
import Register from "./pages/register";
import Login from "./pages/login";
import Promotion from "./pages/promotion";
import Product from "./pages/product";

import PromotionManagement from "./pages/promotion-management"
import Vieworder from "./pages/vieworder";
import Profile from "./pages/profile";
import Productcategory from "./pages/productcategory";
import Forgotpassword from "./pages/forgotpassword";
import Aboutme from "./pages/aboutme";
import Editpassword from "./pages/editpassword";
import Dashboardpage from "./pages/dashboardpage/dashboardpage";
import Checkout from "./pages/checkout";





function App() {

  const router = createBrowserRouter([

    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        }, {
          path: "/promotion",
          element: <Promotion />
        },
        {
          path: "/aboutme",
          element: <Aboutme />
        },
        {
          path: "/vieworder",
          element: <Vieworder />
        },

        {
          path: "/product",
          element: <Product />,
        }

      ]
    },
    {
      path: "/dashboardpage",
      element: <Dashboardpage/>
    },
    
    {
      path: "/milk-management",
      element: <MilksManagement />,
    },
    {
      path: "/cart",
      element: <Cart />
    },
    {
      path: "/login",
      element: <Login />
    },
    {
      path: "/register",
      element: <Register />
    },
    {
      path: "/forgotpassword",
      element: <Forgotpassword />
    },
    
    {
      path: "/promotion-management",
      element: <PromotionManagement />
    },

    {
      path: "/vieworder",
      element: <Vieworder />
    },
    {
      path: "/profile",
      element: <Profile />
    },
    {
      path: "/productcategory",
      element: <Productcategory />
    },
    {
      path: "/editpassword",
      element: <Editpassword/>
    },
    {
      path: "/checkout",
      element: <Checkout/>
    },
    


  ]);

  return (


    <RouterProvider router={router} />
  )


}

export default App;

