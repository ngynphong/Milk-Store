import { Link } from "react-router-dom";
import "./index.scss";
// import { useHistory } from "react-router-dom";
// import axios from "axios";
// import swal from 'sweetalert';
// import { useEffect, useState } from "react";

function Cart() {

    // const history = useHistory();
    // const [loading,setLoading]= useState(true);
    // const [cart,setCart]= useState();

    // if(!localStorage.getItem('auth_token')){
    //     history.push('/');
    //     swal("Warning","Login to goto Cart Page","error");
    // }

    // useEffect(() =>{
    //     let isMounted = true;

    //     axios.get(`/api/cart /}`).then(res=>{
    //         if(isMounted){
    //             if(res.data.status === 200){
    //                 setCart(res.data.cart);
    //                 setLoading(false);
    //             }
    //             else if(res.data.status == 401){
    //                 history.push('/');
    //                 swal("Warning","Login to goto Cart Page","error");
    //             }
    //         }
    //     });
    //     return () =>{
    //         isMounted = false
    //     };
    // }, [history]);
    // if(loading){
    //     return <h4>Loading Product Detail...</h4>
    // }

    // var cart_HTML='';
    // if(cart.lenght > 0){
    //         cart_HTML =  <div className="card__body">

    //         <table className="table-bordered">
    //             <thead>
    //                 <tr>
    //                     <th>Image</th>
    //                     <th>Product</th>
    //                     <th className="text-center">Price</th>
    //                     <th className="text-center">Quantity</th>
    //                     <th className="text-center">Total Price</th>
    //                     <th >remove</th>

    //                 </tr>
    //             </thead>
    //             <tbody>
    //                 {/* {cart.map( (item) => {
    //                     return ( */}

    //                         <tr>
    //                             <td width="10%">
    //                                 <img src="" alt="Prod Image" width="50px" height="50px" />
    //                                 {/* <img src={`link localhost ${item.product_image}`} alt={item.product_name} width="50px" height="50px" /> */}

    //                             </td>
    //                             <td>Prod Name</td> 
    //                             {/* <td>{item.product_name}</td> Thay cái này cho Prod Name */}
    //                             {/* <td width="15%" className="text-center">{item.product.price}</td> */}
    //                             <td width="15%" className="text-center">500</td>

    //                             <td width="15%">
    //                                 <div className="input-group">
    //                                     <button type="button" className="input-group-test">-</button>
    //                                     {/* <div className="form-control test-center">{item.product.quantity}</div> */}
    //                                     <div className="form-control test-center">2</div>

    //                                     <button type="button" className="input-group-test">+</button>
    //                                 </div>
    //                             </td>
    //                             <td width="15%" className="test-center">100</td>
    //                             {/* <td width="15%" className="test-center">{item.product.price * item.product.quantity}</td> */}

    //                             <td width="10%">
    //                                 <button type="button" className="btn-danger">Remove</button>
    //                             </td>
    //                         </tr>
    //                     {/* )
    //                 })} */}
    //             </tbody>
    //         </table>


    //         <div className="cart-checkout">
    //             <div className="card card-body nt-3">
    //                 <h4>Sub Total:
    //                     <span>00</span>
    //                 </h4>
    //                 <h4>Grand Total:
    //                     <span>00</span>
    //                 </h4>
    //                 <Link to="/checkout" className="btn-primary">Check Out</Link>
    //             </div>
    //         </div>
    //     </div>
    // }

    // else{
    //     cart_HTML = <div>
    //         <div className="cart-empty">
    //             <h4>Your Shopping Cart is Empty</h4>
    //         </div>
    //     </div>
    // }
    return (
        <div >
            <div className="header__cart">
                <Link to="/">
                    <img src="logo.png" alt="" width={200} />
                </Link>
                <div>
                    <h1>Giỏ Hàng</h1>
                </div>
            </div>
            {/* {cart_HTML} */}
            <div className="card__body">

                <table className="table-bordered">
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Product</th>
                            <th className="text-center">Price</th>
                            <th className="text-center">Quantity</th>
                            <th className="text-center">Total Price</th>
                            <th >remove</th>

                        </tr>
                    </thead>
                    <tbody>
                        {/* {cart.map( (item) => {
                            return ( */}

                                <tr>
                                    <td width="10%">
                                        <img src="" alt="Prod Image" width="50px" height="50px" />
                                        {/* <img src={`link localhost ${item.product_image}`} alt={item.product_name} width="50px" height="50px" /> */}

                                    </td>
                                    <td>Prod Name</td> 
                                    {/* <td>{item.product_name}</td> Thay cái này cho Prod Name */}
                                    {/* <td width="15%" className="text-center">{item.product.price}</td> */}
                                    <td width="15%" className="text-center">500</td>

                                    <td width="15%">
                                        <div className="input-group">
                                            <button type="button" className="input-group-test">-</button>
                                            {/* <div className="form-control test-center">{item.product.quantity}</div> */}
                                            <div className="form-control test-center">2</div>

                                            <button type="button" className="input-group-test">+</button>
                                        </div>
                                    </td>
                                    <td width="15%" className="test-center">100</td>
                                    {/* <td width="15%" className="test-center">{item.product.price * item.product.quantity}</td> */}

                                    <td width="10%">
                                        <button type="button" className="btn-danger">Remove</button>
                                    </td>
                                </tr>
                            {/* )
                        })} */}
                    </tbody>
                </table>


                <div className="cart-checkout">
                    <div className="card card-body nt-3">
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
        </div>
    );
}

export default Cart;
