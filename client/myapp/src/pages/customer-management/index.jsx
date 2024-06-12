import { faker } from '@faker-js/faker';
import { Button, Popconfirm, Table } from 'antd';
import Header from '../../components/header-admin';
//import axios from 'axios';

//fake data
const generateData = () => {
  const dat = [];

  for (let i = 0; i < 34; i++) {
    dat.push({
      key: faker.datatype.uuid(),  // Use uuid for a unique key
      id: faker.datatype.number({ min: 1, max: 1000 }),
      name: faker.name.fullName(), // Correct method is fullName
      email: faker.internet.email(),
    });
  }
  return dat;
};

const handleDeleteCustomer = async (id) => {
  console.log("deleta customer", id);
  // await axios.delete();

}

const columns = [
  {
    dataIndex: 'id',
    title: 'ID',
    key: 'id',
  },
  {
    dataIndex: 'name',
    title: 'Name',
    key: 'name',
  },
  {
    dataIndex: 'email',
    title: 'Email',
    key: 'email',
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

const data = generateData();

function CustomerManagement() {
  return (
    <div>
      <Header />
      <div className="table">
        <Table columns={columns} dataSource={data} />
      </div>
    </div>
  );
}

export default CustomerManagement;
