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
import Profile from "./pages/profile";
import Vieworder from "./pages/vieworder";

import Forgotpassword from "./pages/forgotpassword";
import Editpassword from "./pages/editpassword";
import { AuthContext } from "./contexts/AuthContext";
import { useState, useEffect } from "react";

import axios from "axios";
// import HeaderAdmin from "./components/header-admin";
import AdminHomePage from "./pages/home/AdminHomePage";
import CustomerManagement from "./pages/customer-management";




import ProductPage from "./pages/productPage";


function App() {

  const [authState, setAuthState] = useState({
    Email: "",
    UserID: 0,
    status: false,
  });

  useEffect(() => {
    axios
      .get("http://localhost:3001/auth/auth", {
        headers: {
          accessToken: localStorage.getItem("accessToken"),
        },
      })
      .then((response) => {
        if (response.data.error) {
          setAuthState({ ...authState, status: false });
        } else {
          setAuthState({
            Email: response.data.Email,
            FullName: response.data.FullName,
            UserID: response.data.UserID,
            Age: response.data.Age,
            Address: response.data.Address,
            status: true,
          });
        }
      });
  }, []);


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
          path: "/product/:ProductID",
          element: <Product />,
        },
        {
          path: "/profile/:UserID",
          element: <Profile />
        },
        {
          path: "/productFilter",
          element: <ProductPage />
        },

      ]
    },














    
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/adminHomePage",
          element: <AdminHomePage />,
        },
      ]
    },

    {
      path: "/milk-management",
      element: <MilksManagement />,
    },
    // {
    //   path: "/header-admin",
    //   element: <HeaderAdmin />,
    // },
    {
      path: "/cart",
      element: <Cart />
    },

    {
      path: "/customer-manager",
      element: <CustomerManagement/>
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
      path: "/editpassword",
      element: <Editpassword />
    },


  ]);

  return (
    <AuthContext.Provider value={{ authState, setAuthState }}>
      <RouterProvider router={router} />
    </AuthContext.Provider>
  )

}

export default App;

