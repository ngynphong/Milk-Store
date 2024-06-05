import { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import "./login.scss";

function Login() {

    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");

    let navigate = useNavigate();

    const login = () => {
        const data = { Email: Email, Password: Password }
        axios.post('http://localhost:3001/auth/login', data).then((response) => {
            if (response.data.error) {
                alert(response.data.error)
            } else {
                sessionStorage.setItem('accessToken', response.data);
                navigate('/');
            }
        }
        )
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
                    {/* <form className="login-form"> */}
                    <h1>Đăng nhập</h1>
                    {/* <div className="input-group">
                            <input type="email" placeholder="Email" name="Email" onChange={(event) => { setEmail(event.target.value) }} />
                        </div>
                        <div className="input-group">
                            <input type="password" placeholder="Your password" name="Password" onChange={(event) => { setPassword(event.target.value) }}/>
                        </div> */}

                    <div className="login-form">
                        <input className="input-group" placeholder="Email" type="text" onChange={(event) => { setEmail(event.target.value) }} /> <br />
                        <input className="input-group" placeholder="Your password" type="password" onChange={(event) => { setPassword(event.target.value) }} /> <br />

                        <div className="remember-forgot">
                            <label>
                                <input type="checkbox" />Ghi nhớ mật khẩu
                            </label>
                            <a href="#">Quên mật khẩu?</a>
                        </div>
                        <button className="login-button" onClick={login}>Login</button>
                        {/* <button className="login-button" type='submit' onClick={login} >Đăng nhập</button> */}
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

                    {/* </form> */}
                </div>
            </div>
        </div>

    );
}

export default Login;
