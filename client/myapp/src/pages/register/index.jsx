import { Link } from "react-router-dom";
import "./register.scss";

function Register() {
    return (
        <div>
            <div className="header__register">
                <Link to="/">
                    <img src="logo.png" alt="" width={200} />
                </Link>
                <div>
                    <h1>Đăng Ký</h1>
                </div>

            </div>
            <div className="register">
                <div className="wrapper">
                    <form className="register__form" action="">
                        <h1>Đăng kí</h1>
                        <div className="input-box">
                            <input type="text" placeholder="Họ và tên" />
                        </div>
                        <div className="input-box">
                            <input type="text" placeholder="Email của bạn" />
                        </div>
                        <div className="input-box">
                            <input type="password" placeholder="Mật Khẩu" />
                        </div>
                        <div className="input-box">
                            <input type="password" placeholder="Xác nhận mật Khẩu" />
                        </div>
                        <div className="input-box sex">
                            <input type="text" placeholder="dd/mm/yyyy" />
                            <select className="gender">
                                <option selected="selected" value="giớ tính">Giới tính</option>
                                <option value="nam">Nam</option>
                                <option value="nữ">Nữ</option>
                            </select>
                        </div>
                        <div className="input-box">
                            <input type="text" placeholder="Địa chỉ" />
                        </div>
                        <div className="remeber-forgot">
                            <label>
                                <input type="checkbox" />Ghi nhớ mật khẩu
                            </label>
                            <a href="#">Quên mật khẩu?</a>
                        </div>
                        <button className="done" type="submit">Đăng ký </button>
                        <p>Bạn đã có tài khoản
                            <Link to="/login">
                                <a>
                                    Đăng nhập
                                </a>
                            </Link>
                        </p>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register;