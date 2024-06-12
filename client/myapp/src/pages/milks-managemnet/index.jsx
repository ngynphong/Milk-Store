import { Button, Form, Image, Input, Modal, Popconfirm, Select, Table, Upload } from "antd";
import { useEffect, useState, useContext } from "react";
import "./index.scss";
import axios from "axios";
import { PlusOutlined } from '@ant-design/icons';
import uploadFile from "../../utils/upload";
import { AuthContext } from "../../contexts/AuthContext";
// import TextArea from "antd/es/input/TextArea";
import { useForm } from "antd/es/form/Form";
import { useNavigate } from "react-router-dom";
import HeaderAdmin from "../../components/header-admin";


function MilksManagement() {

  const navigate = useNavigate();
  const [form] = useForm();
  const { authState } = useContext(AuthContext); // Access authentication state from context
  
  const [dataSource, setDataSource] = useState([]);
  const [isEditing, setEditing] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [fileList, setFileList] = useState([]);

  const handleDeleteMilk = async (ProductID) => {
    console.log("delete milk", ProductID);
    await axios.delete(`http://localhost:3001/product/${ProductID}`);
    const listAfterDelete = dataSource.filter((Product) => Product.ProductID !== ProductID);
    setDataSource(listAfterDelete);
  };

  const handleUpdateMilk = async (ProductID) => {
    console.log("Update Milk", ProductID);
    const productToUpdate = dataSource.find((Product) => Product.ProductID === ProductID);
    console.log(productToUpdate);
    setCurrentProduct(productToUpdate);
    setEditing(true);
    setIsOpen(true);
    setFileList([{
      uid: '-1',
      name: 'image.png',
      status: 'done',
      url: productToUpdate.ImgProduct,
    }]);

    form.setFieldValue({
      CategoryID: productToUpdate.CategoryID,
      BrandID: productToUpdate.BrandID,
      AgeRangeID: productToUpdate.AgeRangeID,
      ProductName: productToUpdate.ProductName,
      Price: productToUpdate.Price,
      ImgProduct: {
        fileList: [{
          uid: '-1',
          name: 'image.png',
          status: 'done',
          url: productToUpdate.ImgProduct,
        }],
      },
    });


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
        <div>
          <Button type="primary" onClick={() => handleUpdateMilk(ProductID)}>Update</Button>
          <Popconfirm
            title="Delete the product"
            description="Are you sure to delete this product?"
            onConfirm={() => handleDeleteMilk(ProductID)}
            okText="Yes"
            cancelText="No"
          >
            <Button danger>Delete</Button>
          </Popconfirm>
        </div>
      ),
    },
  ];

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
    setEditing(false);
    setCurrentProduct(null);
    form.resetFields();
    setFileList([]);
    setIsOpen(true);
  }

  function handleHideModal() {
    setIsOpen(false);
    setFileList([]);
  }


  async function handleSubmit(values) {

    console.log(values);
    let url = '';

    // Check if ImgProduct is defined and has a file property
    if (values.ImgProduct && values.ImgProduct.file) {
      url = await uploadFile(values.ImgProduct.file.originFileObj);
      values.ImgProduct = url;
    } else if (values.ImgProduct && values.ImgProduct.fileList && values.ImgProduct.fileList[0]?.url) {
      url = values.ImgProduct.fileList[0].url;
      values.ImgProduct = url;
    } else if (currentProduct) {
      // If no new image is selected, retain the existing image URL
      values.ImgProduct = currentProduct.ImgProduct;
    }

    if (isEditing) {
      const response = await axios.put(`http://localhost:3001/product/${currentProduct.ProductID}`, values);
      console.log(response.data);
      setDataSource(dataSource.map((product) =>
        product.ProductID === currentProduct.ProductID ? { ...product, ...values } : product

      ));
    } else {
      const response = await axios.post('http://localhost:3001/product', values);
      setDataSource([...dataSource, values]);
    }

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

      <HeaderAdmin />
      <div className="table">
        <Button type="primary" onClick={handleShowModal}>Add New Milk</Button>

        <Table columns={columns} dataSource={dataSource} />;

        <Modal
          open={isOpen}
          title={isEditing ? "Update Milk" : "Add nwe milk"}
          onCancel={handleHideModal}
          onOk={handleOk}
        >
          <Form labelCol={{
            span: 24,
          }}
            form={form}
            onFinish={handleSubmit}
          >
            <Form.Item label="Category" name="CategoryID" initialValue={currentProduct?.CategoryID}>
              <Select

                options={[
                  { value: 1, label: <span>Sữa cho mẹ</span> },
                  { value: 2, label: <span>Sữa cho bé</span> }
                ]}
              />
            </Form.Item>
            <Form.Item label="Brand" name="BrandID" initialValue={currentProduct?.BrandID}>
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
            <Form.Item label="AgeRange" name="AgeRangeID" initialValue={currentProduct?.AgeRangeID}>
              <Select

                options={[
                  { value: 1, label: <span>0-2 years</span> },
                  { value: 2, label: <span>2-5years</span> },
                  { value: 3, label: <span>5-8 years</span> },
                  { value: 4, label: <span>8-12 years</span> },
                ]}
              />
            </Form.Item>

            <Form.Item label="Product Name" name="ProductName" initialValue={currentProduct?.ProductName} rules={[{ required: true, message: 'Please input the product name!' }]}>
              <Input />
            </Form.Item>
            <Form.Item label="Price" name="Price" initialValue={currentProduct?.Price} rules={[{ required: true, message: 'Please input the price!' }]}>
              <Input />
            </Form.Item>

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
            <Form.Item label="Quantity" name="Quantity" initialValue={currentProduct?.Quantity}>
              <Input />
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