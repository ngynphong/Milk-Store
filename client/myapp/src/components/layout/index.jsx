import { Outlet } from "react-router-dom";
import Header from "../header";
import HeaderEnd from "../header-end";


function Layout() {
  return (
    <div>
        <Header/>
        <Outlet/>
        <HeaderEnd/>
      
    </div>
  )
}

export default Layout;
