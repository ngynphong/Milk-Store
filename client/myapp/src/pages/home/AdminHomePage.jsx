import Body from "../../components/body";
import Carousel from "../../components/carousel";

import HeaderAdmin from "../../components/header-admin";


function AdminHomePage(){
    return(
        <div>
            <HeaderAdmin/>
            <Carousel numberOfSlide={1}/>
            <Body/>
        </div>

    )

}
export default AdminHomePage;