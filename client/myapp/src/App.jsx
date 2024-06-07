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
import { AuthContext } from "./contexts/AuthContext";
import { useState, useEffect } from "react";
import axios from "axios";
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
        }

      ]
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
      path: "/promotion-management",
      element: <PromotionManagement />
    },
    {
      path: "/vieworder",
      element: <Vieworder />
    },
    {
      path: "/profile/:UserID",
      element: <Profile />
    },


  ]);

  return (
    <AuthContext.Provider value={{ authState, setAuthState }}>
      <RouterProvider router={router} />
    </AuthContext.Provider>
  )

}

export default App;

