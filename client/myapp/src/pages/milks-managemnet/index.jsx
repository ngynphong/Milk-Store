import { Button, Form, Image, Input, Modal, Popconfirm, Select, Table, Upload } from "antd";
import { useEffect, useState } from "react";
import Header from "../../components/header-admin";
import "./index.scss";
import axios from "axios";
import { PlusOutlined } from '@ant-design/icons';
import uploadFile from "../../utils/upload";
// import TextArea from "antd/es/input/TextArea";
import { useForm } from "antd/es/form/Form";



function MilksManagement() {

  const [form] = useForm();

  const [dataSource, setDataSource] = useState([]);

  const [isOpen, setIsOpen] = useState(false);

  const handleDeleteMilk = async (ProductID) => {
    console.log("delete milk", ProductID);
    await axios.delete(`http://localhost:3001/product/${ProductID}`);
    const listAfterDelete = dataSource.filter((Product) => Product.ProductID !== ProductID);
    setDataSource(listAfterDelete);
  };

  const columns = [
    {
      title: "Product Name",
      dataIndex: "ProductName",
      key: "ProductName",
    },
    {
      title: "Image",
      dataIndex: "ImgProduct",
      key: "ImgProduct",
      render: (ImgProduct) => <Image src={ImgProduct} width={200} />
    },
    {
      title: "Action",
      dataIndex: "ProductID",
      key: "ProductID",
      render: (ProductID) => (
        <Popconfirm
          title="Delete the product"
          description="Are you sure to delete this product?"
          onConfirm={() => handleDeleteMilk(ProductID)}
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

  async function fetchProduct() {
    const response = await axios.get('http://localhost:3001/product');
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
    console.log(values.ImgProduct.file.originFileObj);
    const url = await uploadFile(values.ImgProduct.file.originFileObj);
    values.ImgProduct = url;
    console.log(values);

    const response = await axios.post('http://localhost:3001/product', values);
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
    fetchProduct();
  }, []);

  return (
    <div>
      <Header />
      <div className="table">
        <Button type="primary" onClick={handleShowModal}>Add New Milk</Button>

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
            form={form}
            onFinish={handleSubmit}
          >
            <Form.Item label="Category" name="CategoryID">
              <Select

                options={[
                  { value: 1, label: <span>Sữa cho mẹ</span> },
                  { value: 2, label: <span>Sữa cho bé</span> }
                ]}
              />
            </Form.Item>
            <Form.Item label="Brand" name="BrandID">
              <Select

                options={[
                  { value: 1, label: <span>Similac</span> },
                  { value: 2, label: <span>Vinamilk</span> },
                  { value: 3, label: <span>YOKOGOLD</span> },
                  { value: 4, label: <span>Grow</span> },
                  { value: 5, label: <span>Nutifood</span> },
                  { value: 6, label: <span>Pediasure</span> },
                  { value: 7, label: <span>EnfamilA</span> },
                  { value: 8, label: <span>Meiji</span> },
                  { value: 9, label: <span>Aptamil</span> },
                  { value: 10, label: <span>Bubs</span> },
                  { value: 11, label: <span>Nan</span> },
                  { value: 12, label: <span>Frisolac</span> },

                ]}
              />

            </Form.Item>
            <Form.Item label="AgeRange" name="AgeRangeID">
              <Select

                options={[
                  { value: 1, label: <span>0-2 years</span> },
                  { value: 2, label: <span>2-5years</span> },
                  { value: 3, label: <span>5-8 years</span> },
                  { value: 4, label: <span>8-12 years</span> },
                ]}
              />
            </Form.Item>

            <Form.Item label="Product Name" name="ProductName" rules={[{ required: true, message: 'Please input the product name!' }]}>
              <Input />
            </Form.Item>
            <Form.Item label="Price" name="Price" rules={[{ required: true, message: 'Please input the price!' }]}>
              <Input />
            </Form.Item>
            {/* <Form.Item label="Quantity" name="quantity">
              <Input />
            </Form.Item> */}
            <Form.Item label="Image" name="ImgProduct">
              <Upload
            
                listType="picture-card"
                fileList={fileList}
                onPreview={handlePreview}
                onChange={handleChane}
              >
                {fileList.length >= 8 ? null : uploatButton}
              </Upload>
            </Form.Item>
            {/* <Form.Item label="Desciption" name="desciption">
              <TextArea rows={4} />
            </Form.Item> */}
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