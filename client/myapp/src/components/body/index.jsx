import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { useState, useEffect } from "react";
import "./index.scss";
function Body() {

    let navigate = useNavigate();
    const [listOfProduct, setListOfProduct] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:3001/product').then((response) => {
            setListOfProduct(response.data);
        })


    }, [])
    return (
        <div>
            <div className="body__background1">

                <div className="body">
                    <h1> Sản Phẩm Bán Chạy  </h1>
                </div>
                <div className="body__1__product">
                    {listOfProduct.map((value, key) => {
                        return (
                            <div key={key} onClick={() => {
                                navigate(`/product/${value.ProductID}`);
                            }}>
                                <div >
                                    <img src={value.ImgProduct}
                                        alt="" />
                                    <h4>{value.ProductName}</h4>
                                    <span>{value.Price}</span>
                                    <div>
                                        <button>MUA NGAY</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })}


                </div>
            </div>
        </div>

    )
}

export default Body;
