import { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import "./login.scss";

function Login() {

    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    let navigate = useNavigate();

    const validate = () => {
        let isValid = true;

        if (!Email) {
            setEmailError("Email không được để trống");
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(Email)) {
            setEmailError("Email không hợp lệ");
            isValid = false;
        } else {
            setEmailError("");
        }

        if (!Password) {
            setPasswordError("Mật khẩu không được để trống");
            isValid = false;
        } else {
            setPasswordError("");
        }

        return isValid;
    };

    const login = () => {
        if (validate()) {
            const data = { Email: Email, Password: Password }
            axios.post('http://localhost:3001/auth/login', data).then((response) => {
                if (response.data.error) {
                    alert(response.data.error)
                } else {
                    sessionStorage.setItem('accessToken', response.data);
                    navigate('/');
                }
            })
        }
    };

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
                    <h1>Đăng nhập</h1>
                    <div className="login-form">
                        <input
                            className={`input-group ${emailError ? 'error' : ''}`}
                            placeholder="Email"
                            type="text"
                            onChange={(event) => { setEmail(event.target.value) }}
                        />
                        {emailError && <p className="error-message">{emailError}</p>}
                        <br />
                        <input
                            className={`input-group ${passwordError ? 'error' : ''}`}
                            placeholder="Your password"
                            type="password"
                            onChange={(event) => { setPassword(event.target.value) }}
                        />
                        {passwordError && <p className="error-message">{passwordError}</p>}
                        <br />
                        <div className="remember-forgot">
                            <label>
                                <input type="checkbox" />Ghi nhớ mật khẩu
                            </label>
                            <a href="#">Quên mật khẩu?</a>
                        </div>
                        <button className="login-button" onClick={login}>Login</button>
                        <div className="register-link">
                            <p>Bạn chưa có tài khoản
                                <Link to="/register">
                                    <a>
                                        Đăng ký
                                    </a>
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
