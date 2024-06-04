import { Table } from "antd";
import { useState } from "react";
import Header from "../../components/header-admin";
import "./index.scss";


function PromotionManagement() {
   
   const [dataSource, setDataSource] = useState([]);
    const columns =[
    {
        title:"Promotion",
        dataIndex: "name",
        key:"name",
    },

   ]
   
    return (
        <div>
        <Header />
        <div className="table">
          <Table columns={columns} dataSource={dataSource} />
        </div>
      </div>    
    );

}

export default PromotionManagement;