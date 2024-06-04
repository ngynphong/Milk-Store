import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MilksManagement from "./pages/milks-managemnet";
import HomePage from "./pages/home";
import Layout from "./components/layout";
import Cart from "./pages/cart";
import Register from "./pages/register";
import Login from "./pages/login";
import Promotion from "./pages/promotion";
import Product from "./pages/product";

import PromotionManagement from"./pages/promotion-management"

function App() {

  const router = createBrowserRouter([

    {
      path: "/",
      element: <Layout/>,
      children : [
        {
          path: "/",
          element: <HomePage/>, 
        },   {
          path: "/promotion",
          element: <Promotion/>
        },
        {
          path: "/product",
          element: <Product/>,  
        }

      ]
    },
    {
      path: "/milk-management",
      element: <MilksManagement/>,
    },
    {
      path: "/cart",
      element: <Cart/>
    },
    {
      path: "/login",
      element: <Login/>
    },
    {
      path:"/register",
      element:<Register/>
    },
    {
      path: "/promotion-management",
      element: <PromotionManagement/>
    },

     
  ]);
  
  return(
    

    <RouterProvider router={router} />
)
  

  }

export default App;

