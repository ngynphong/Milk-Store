import { Footer } from "antd/es/layout/layout";
import "./index.scss";
import { Link } from "react-router-dom";

function HeaderEnd() {
    return (
        <div className="foooter">
            <div className="header__end">
            <div className="shop">
                <h4>Shop Happy Mother&Baby</h4>
            </div>
            <div className="chamsoc">
                <h4>CHĂM SÓC KHÁCH HÀNG</h4>
                <div className="list__dichvu">
                    <li>
                        <Link to="/counsel">Tư vấn cá nhân</Link>
                    </li>
                    <li>Tra cứu háo đơn</li>
                    <li>Hotline 24/7</li>
                </div>
            </div>
            <div>
                <h4>Chấp Nhận Thanh Toán</h4>
                <div className="list__link">
                    <img src="https://cdn1.concung.com/themes/desktop4.1/image/v40/style/visa-pay.png"
                        height="24"
                        alt="Visa Pay" />

                    <img src="https://cdn1.concung.com/themes/desktop4.1/image/v40/style/mastercard-pay.png"
                        height="24"
                        alt="Visa Pay" />

                    <img src="https://cdn1.concung.com/themes/desktop4.1/image/v40/style/jcb-pay.png"
                        height="24"
                        alt="Visa Pay" />

                    <img src="https://cdn1.concung.com/themes/desktop4.1/image/v40/style/atm-pay.png"
                        height="24"
                        alt="Visa Pay" />

                    <img src="https://cdn1.concung.com/themes/desktop4.1/image/v40/style/cod.png"
                        height="24"
                        alt="Visa Pay" />

                    <br />

                    <img src="https://cdn1.concung.com/themes/desktop4.1/image/v40/style/vnpay.png"
                        height="24"
                        alt="Visa Pay" />

                    <img src="https://cdn1.concung.com/themes/desktop4.1/image/v40/style/zalo-pay.png"
                        height="24"
                        alt="" />

                    <img src="https://cdn1.concung.com/themes/desktop4.1/image/v40/style/momo-pay.png"
                        height="24"
                        alt="Visa Pay" />

                    <img src="https://cdn1.concung.com/themes/desktop4.1/image/v40/style/shoppe-pay.png"
                        height="24"
                        alt="Visa Pay" />

                    <img src="https://cdn1.concung.com/themes/desktop4.1/image/v40/style/kredivo-pay.png"
                        height="24"
                        alt="Visa Pay" />
                </div>
            </div>
            </div>
            <Footer style={{ textAlign: "center", backgroundColor: "#E3F2EE" }}>
                    Happy Mother&Baby ©{new Date().getFullYear()} Created by F4 đẹp trai
                </Footer>
        </div>
    )
}

export default HeaderEnd;
