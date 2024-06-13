import { Link,} from "react-router-dom";
import { useEffect, useState } from "react";
import "./index.scss";
// import swal from 'sweetalert';
import axios from "axios";


function Cart() {
    // const [loading, setLoading] = useState(true);
    // const [cart, setCart] = useState([]);
    const [cartObject, setCartObject] = useState({}); 

    useEffect(() => {
        axios.get(`http://localhost:3001/Cart/`)
            .then((response) => {
                setCartObject(response.data); 
            })
            .catch((err) => {
                console.error("Error fetching cart data:", err);
            });
    }, []); 


    return (
        <div>
            <div className="header__cart">
                <Link to="/">
                    <img src="logo.png" alt="Logo" width={200} />
                </Link>
                <div>
                    <h1>Giỏ Hàng</h1>
                </div>


            </div>
            {cartObject.items ? (
            <div className="card__body">
                <table className="table-bordered">
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Product</th>
                            <th className="text-center">Price</th>
                            <th className="text-center">Quantity</th>
                            <th className="text-center">Total Price</th>
                            <th>Remove</th>
                        </tr>
                        <tr>{cartObject.data}</tr>s
                    </thead>
                    <tbody>
                            {cartObject.items && cartObject.items.map((item) => (
                                <tr key={item.id}>
                                    <td width="10%">
                                        <img src={item.ProductID.ImgProduct} alt={item.ProductName} width="50px" height="50px" />
                                    </td>
                                    <td>{item.ProductID.ProductName}</td>

                                    <td width="15%" className="text-center">{item.Price}</td>
                                    <td width="15%">
                                        <div className="input-group">
                                            <button type="button" className="input-group-test">-</button>
                                            <div className="form-control text-center">{item.Quantity}</div>
                                            <button type="button" className="input-group-test">+</button>
                                        </div>
                                    </td>
                                    <td width="15%" className="text-center">{item.Price * item.Quantity}</td>
                                    <td width="10%">
                                        <button type="button" className="btn-danger">Remove</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                            
                           

                </table>
                <div className="cart-checkout">
                    <div className="card card-body mt-3">
                        <h4>Sub Total:
                            <span>00</span>
                        </h4>
                        <h4>Grand Total:
                            <span>00</span>
                        </h4>
                        <Link to="/checkout" className="btn-primary">Check Out</Link>
                    </div>
                </div>
            </div>
             ) : (
          <div className="cart-empty">
            <h4>Your Shopping Cart is Empty</h4>
          </div>
        )} 
        </div>
    );
}

export default Cart;
