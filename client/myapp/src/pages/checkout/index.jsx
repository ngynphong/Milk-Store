import { Link } from "react-router-dom";
import "./index.scss";

function Checkout() {
  return (
    <div className="checkout">
      <div className="header__cart">
        <Link to="/">
          <img src="logo.png" alt="" width={150} />
        </Link>
        <div>
          <h1>Check Out</h1>
        </div>

      </div>
      <div className="checkout-body">
      <div className="cart">
        <div className="card-header">
          <h4>Basic Information</h4>
        </div>
        <div className="card-body">
          <div className="card-body-fname">
            <label> First Name</label>
            <input type="text" name="firstname" className="form-control" />

          </div>
          <div className="card-body-lname">
            <label> Last Name</label>
            <input type="text" name="lastname" className="form-control" />
          </div>
          <div className="card-body-phone">
            <label> Phone number</label>
            <input type="text" name="phone" className="form-control" />
          </div>
          <div className="card-body-email">
            <label> Email Address</label>
            <input type="text" name="email" className="form-control" />
          </div>
          <div className="card-body-address">
            <label> Full Address</label>
            <textarea rows="3" className="form-control"></textarea>
          </div>
          <div className="card-body-city">
            <label> City</label>
            <input type="text" name="city" className="form-control" />
          </div>
          <div className="card-body-state">
            <label> State</label>
            <input type="text" name="state" className="form-control" />
          </div>
          <div className="card-body-zipcode">
            <label> Zip Code</label>
            <input type="text" name="zipcode" className="form-control" />
          </div>
          <div className="card-body text-end">
            <button type="button" className="btn btn-primary">Place Order</button>
          </div>
        </div>
      </div>

      <div className="product-infor">
        <table>
          <thead>
            <tr>
              <th width="50%">Product</th>
              <th>Price</th>
              <th>Qty</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>trung oc cho</td>
              <td>200</td>
              <td>2</td>
              <td>400</td>
            </tr>

            <tr>
              <td colSpan="2" className="text-end">Grand Total</td>
            </tr>
          </tbody>
        </table>
      </div>


    </div>
    </div>
  )
}

export default Checkout;
