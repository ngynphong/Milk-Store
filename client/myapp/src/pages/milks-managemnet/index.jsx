import { Button, Form, Image, Input, Modal, Popconfirm, Select, Table, Upload } from "antd";
import { useEffect, useState } from "react";
import Header from "../../components/header-admin";
import "./index.scss";
import axios from "axios";
import { PlusOutlined } from '@ant-design/icons';
import uploadFile from "../../utils/upload";
import TextArea from "antd/es/input/TextArea";
import { useForm } from "antd/es/form/Form";



function MilksManagement() {

  const [form] = useForm();

  const [dataSource, setDataSource] = useState([]);

  const [isOpen, setIsOpen] = useState(false);

  const handleDeleteMilk = async (id) => {
    console.log("delete milk", id);
    await axios.delete(`http://localhost:3001/productItem/${id}`);
    const listAfterDelete = dataSource.filter((movie) => movie.id !== id);
    setDataSource(listAfterDelete);
  };

  const columns = [
    {
      title: "Movie name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Image",
      dataIndex: "img_product",
      key: "img_product",
      render: (img_product) => <Image src={img_product} width={200} />
    },
    {
      title: "Action",
      dataIndex: "id",
      key: "id",
      render: (id) => (
        <Popconfirm
          title="Delete the task"
          description="Are you sure to delete this task?"
          onConfirm={() => handleDeleteMilk(id)}
          okText="Yes"
          cancelText="No"
        >
          <Button danger>Delete</Button>
        </Popconfirm>
      ),
    },
  ];

  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [fileList, setFileList] = useState([]);

  const getBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
  };

  const handleChane = ({ fileList: newFileList }) => setFileList(newFileList);
  const uploatButton = (
    <button
      style={{
        border: 0,
        background: 'none',
      }}
      type="button"
    >
      <PlusOutlined />
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>

    </button>
  );

  async function fetchMovie() {
    const response = await axios.get('http://localhost:3001/productItem');
    setDataSource(response.data);
  }
  function handleShowModal() {
    setIsOpen(true);
  }
  function handleHideModal() {
    setIsOpen(false);
  }

  async function handleSubmit(values) {
    console.log(values);
    console.log(values.img_product.file.originFileObj);
    const url = await uploadFile(values.img_product.file.originFileObj);
    values.img_product = url;
    console.log(values);

    const response = await axios.post('http://localhost:3001/productItem');
    setDataSource([...dataSource, values]);

    //clear form
    form.resetFields();

    //Hide modal
    handleHideModal();
  }

  function handleOk() {
    form.submit();
  }

  //khi nào mà cso async function thì phải viết function như thế này
  //function
  useEffect(() => {
    fetchMovie();
  }, []);

  return (
    <div>
      <Header />
      <div className="table">
        <Button type="primary" onClick={handleShowModal}>Add new milk</Button>

        <Table columns={columns} dataSource={dataSource} />;

        <Modal
          open={isOpen}
          title="Add new milk"
          onCancel={handleHideModal}
          onOk={handleOk}
        >
          <Form labelCol={{
            span: 24,
          }}
            fomr={form}
            onFinish={handleSubmit}
          >
            <Form.Item label="ID" name="id">
              <Input />
            </Form.Item>
            <Form.Item label="Product name" name="name">
              <Input />
            </Form.Item>
            <Form.Item label="Price" name="price">
              <Input />
            </Form.Item>
            <Form.Item label="Quantity" name="quantity">
              <Input />
            </Form.Item>
            <Form.Item label="Image" name="img_product">
              <Upload
                action="http://localhost:3001/productItem"
                listType="picture-card"
                fileList={fileList}
                onPreview={handlePreview}
                onChange={handleChane}
              >
                {fileList.length >= 8 ? null : uploatButton}
              </Upload>
            </Form.Item>
            <Form.Item label="Desciption" name="desciption">
              <TextArea rows={4} />
            </Form.Item>
            <Form.Item label="Brand" name="brand">
              <Select
                options={[
                  { value: "Similac", label: <span>Similac</span> },
                  { value: "Vinamilk", label: <span>Vinamilk</span> },
                  { value: "YOKOGOLD", label: <span>YOKOGOLD</span> },
                  { value: "Grow", label: <span>Grow</span> },
                  { value: "Nutifood", label: <span>Nutifood</span> },
                  { value: "Pediasure", label: <span>Pediasure</span> },
                  { value: "EnfamilA+", label: <span>EnfamilA</span> },
                  { value: "Meiji", label: <span>Meiji</span> },
                  { value: "Aptamil", label: <span>Aptamil</span> },
                  { value: "Bubs", label: <span>Bubs</span> },
                  { value: "Nan", label: <span>Nan</span> },
                  { value: "Frisolac", label: <span>Frisolac</span> },

                ]}
              />

            </Form.Item>
            <Form.Item label="AgeRangeID" name="ageRangeID">
              <Input />
            </Form.Item>
          </Form>
        </Modal>
        {previewImage && (
          <Image
          wrapperStyle={{
            display: 'none',
          }}
          preview={{
            visible: previewOpen,
            onVisibleChange: (visible) => setPreviewOpen(visible),
            afterOpenChange: (visible) => !visible && setPreviewImage(''),
          }}
          src={previewImage}
          />
        )}
      </div>
    </div>
  );

}

export default MilksManagement;