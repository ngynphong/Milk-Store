import { Table } from "antd";
import { useState } from "react";
import Header from "../../components/header-admin";
import "./index.scss";


function MilksManagement() {
   
   const [dataSource, setDataSource] = useState([]);
    const columns =[
    {
        title:"Milk Name",
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

export default MilksManagement;