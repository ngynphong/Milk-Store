import { Link, useHistory } from "react-router-dom";
import "./index.scss";
import axios from "axios";
import swal from 'sweetalert';
import { useEffect, useState } from "react";

function Cart() {
    const history = useHistory();
    const [loading, setLoading] = useState(true);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        if (!localStorage.getItem('auth_token')) {
            history.push('/');
            swal("Warning", "Login to go to Cart Page", "error");
            return;
        }

        let isMounted = true;

        axios.get(`http://localhost:3001/Cart`).then(res => {
            if (isMounted) {
                if (res.data.status === 200) {
                    setCart(res.data.cart);     
                    setLoading(false);
                } else if (res.data.status === 401) {
                    history.push('/');
                    swal("Warning", "Login to go to Cart Page", "error");
                }
            }
        });

        return () => {
            isMounted = false;
        };
    }, [history]);

    if (loading) {
        return <h4>Loading Product Detail...</h4>;
    }

    let cart_HTML = '';
    if (cart.length > 0) {
        cart_HTML = (
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
                    </thead>
                    <tbody>
                        {cart.map((item) => (
                            <tr key={item.id}>
                                <td width="10%">
                                    <img src={`http://localhost:5173/${item.ImgProduct}`} alt={item.ProductName} width="50px" height="50px" />
                                </td>
                                <td>{item.product_name}</td>
                                <td width="15%" className="text-center">{item.Price}</td>
                                <td width="15%">
                                    <div className="input-group">
                                        <button type="button" className="input-group-text">-</button>
                                        <div className="form-control text-center">{item.Quantity}</div>
                                        <button type="button" className="input-group-text">+</button>
                                    </div>
                                </td>
                                <td width="15%" className="text-center">{item.Product.Price * item.Quantity}</td>
                                <td width="10%">
                                    <button type="button" className="btn-danger">Remove</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="cart-checkout">
                    <div className="card card-body mt-3">
                        <h4>Sub Total: <span>{/* Calculate Sub Total */}</span></h4>
                        <h4>Grand Total: <span>{/* Calculate Grand Total */}</span></h4>
                        <Link to="/checkout" className="btn-primary">Check Out</Link>
                    </div>
                </div>
            </div>
        );
    } else {
        cart_HTML = (
            <div className="cart-empty">
                <h4>Your Shopping Cart is Empty</h4>
            </div>
        );
    }

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
            {cart_HTML}
        </div>
    );
}

export default Cart;
