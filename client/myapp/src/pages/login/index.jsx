import { Link } from "react-router-dom";
import "./login.scss";

function Login() {
    return (
        <div>
            <div className="header__login">
                <Link to="/">
                    <img src="logo.png" alt="" width={200} />
                </Link>
                <div>
                    <h1>Đăng Nhập</h1>
                </div>

            </div>
            <div className="login-container">
                <div className="login-wrapper">
                    <form className="login-form" action="">
                        <h1>Đăng nhập</h1>
                        <div className="input-group">
                            <input type="text" placeholder="Username" />
                        </div>
                        <div className="input-group">
                            <input type="password" placeholder="Your password" />
                        </div>

                        <div className="remember-forgot">
                            <label>
                                <input type="checkbox" />Ghi nhớ mật khẩu
                            </label>
                            <a href="#">Quên mật khẩu?</a>
                        </div>
                        <button className="login-button" type="submit">Đăng nhập</button>
                        <div className="register-link">
                            <p>Bạn chưa có tài khoản
                                <Link to="/register">
                                    <a>
                                        Đăng ký
                                    </a>
                                </Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
