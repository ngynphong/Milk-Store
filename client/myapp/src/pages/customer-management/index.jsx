// import { faker } from '@faker-js/faker';
import { Button, Popconfirm, Table } from 'antd';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../../components/header-admin';
//import axios from 'axios';

function CustomerManagement() {

  const [dataSource, setDataSource] = useState([]);


  const handleDeleteCustomer = async (UserID) => {
    console.log("Delete User", UserID);
    await axios.delete(`http://localhost:3001/product/${UserID}`);
    const listAfterDelete = dataSource.filter((User) => User.UserID !== UserID);
    setDataSource(listAfterDelete);

  }

  const columns = [
    {
      dataIndex: 'UserID',
      title: 'UserID',
      key: 'UserID',
    },
    {
      dataIndex: 'FullName',
      title: 'Full Name',
      key: 'FullName',
    },
    {
      dataIndex: 'Email',
      title: 'Email',
      key: 'Email',
    },
    {
      dataIndex: 'id',
      title: 'Action',
      key: 'id',
      render: (id) => (
        <Popconfirm
          title="Delete the task"
          description="Are you sure to delete this task?"
          onConfirm={() => handleDeleteCustomer(id)}
          okText="Yes"
          cancelText="No"
        >
          <Button type='primary' danger>Delete</Button>
        </Popconfirm>
      )
    }
  ];
  async function fetchUser() {
    const response = await axios.get('http://localhost:3001/auth');
    setDataSource(response.data);
  }


  useEffect(() => {

    fetchUser();

  }, []);
  // const data = generateData();
  return (
    <div>
      <Header />
      <div className="table">
        <Table columns={columns} dataSource={dataSource} />
      </div>
    </div>
  );
}

export default CustomerManagement;
