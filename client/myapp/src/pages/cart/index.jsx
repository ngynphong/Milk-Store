import { Link } from "react-router-dom";
import { useState } from "react";
import "./index.scss";

function Cart() {

    const [quantity, setQuantity] = useState(1);

    const handleIncrease = () => {
        setQuantity(quantity + 1);
    }

    const handeDecreate = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    }

  
    return (
        <div>
            <div className="header__cart">
                <Link to="/">
                    <img src="logo.png" alt="" width={200} />
                </Link>
                <div>
                    <h1>Giỏ Hàng</h1>
                </div>
                
            </div>

            <div className="cart-item-1">
                <img src="https://cdn1.concung.com/2023/04/43262-99903-large_mobile/sua-similac-5g-so-4-900g-2-6-tuoi.png"
                    alt="" />
                <h4>Sữa Similac 5G số 4 900g (2-6 tuổi)</h4>
                <span>519.000 VND</span>
                <div className="quantity-controls">
                    <button onClick={handeDecreate}>-</button>
                    <span>{quantity}</span>
                    <button onClick={handleIncrease}>+</button>
                    <button className="delete-item">Xóa </button>

                </div>
            </div>
            <div className="cart-item-1">
                <img src="https://cdn1.concung.com/2022/07/58388-91241-large_mobile/sua-de-kabrita-so-3-800g-tu-2-tuoi.jpg"
                    alt="" />
                <h4>Sữa dê Kabrita Số 3 800g (từ 2 tuổi)</h4>
                <span>975.000 VND</span>
                <div className="quantity-controls">
                  <button onClick={handeDecreate}>-</button>
                  <span>{quantity}</span>
                  <button onClick={handleIncrease}>+</button>
                  <button className="delete-item">Xóa </button>
                </div>
            </div>
        </div>
    );
}

export default Cart;
