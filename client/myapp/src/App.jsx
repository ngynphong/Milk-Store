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
import Profile from "./pages/profile";
import Vieworder from "./pages/vieworder";
import Forgotpassword from "./pages/forgotpassword";
import Editpassword from "./pages/editpassword";

function App() {

  const router = createBrowserRouter([

    {
      path: "/",
      element: <Layout/>,
      children : [
        {
          path: "/",
          element: <HomePage/>, 
        },   
        {
          path: "/promotion",
          element: <Promotion/>
        },
        {
          path:"/vieworder",
          element:<Vieworder/>
        },
        {
          path: "/product/:ProductID",
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
   
    {
      path:"/profile",
      element:<Profile/>
    },
    {
      path:"/forgotpassword",
      element:<Forgotpassword/>
    },
    {
      path:"/editpassword",
      element:<Editpassword/>
    },

     
  ]);
  
  return(
    

    <RouterProvider router={router} />
)
  

  }

export default App;

