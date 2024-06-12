import { useState } from 'react';
import { Link } from 'react-router-dom';
import './login.scss';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        const newErrors = {};
        if (!username) {
            newErrors.username = 'Username is required';
        }
        if (!password) {
            newErrors.password = 'Password is required';
        }
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formErrors = validateForm();
        if (Object.keys(formErrors).length === 0) {
            // Submit the form
            console.log('Form submitted successfully');
            // You can also handle form submission here
        } else {
            setErrors(formErrors);
        }
    };

    return (
        <div>
            <div className="header__login">
                <Link to="/">
                    <img src="logo.png" alt="Logo" width={200} />
                </Link>
                <div>
                    <h1>Đăng Nhập</h1>
                </div>
            </div>
            <div className="login-container">
                <div className="login-wrapper">
                    <form className="login-form" onSubmit={handleSubmit}>
                        <h1>Đăng nhập</h1>
                        <div className="input-group">
                            <input
                                type="text"
                                placeholder="Username"
                                
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                            {errors.username && <p className="error">{errors.username}</p>}
                        </div>
                        <div className="input-group">
                            <input
                                type="password"
                                placeholder="Your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            {errors.password && <p className="error">{errors.password}</p>}
                        </div>
                        <div className="remember-forgot">
                            <label>
                                <input type="checkbox" /> Ghi nhớ mật khẩu
                            </label>
                            <Link to="/forgotpassword">Quên mật khẩu?</Link>
                        </div>
                        <button className="login-button" type="submit">Đăng nhập</button>
                        <div className="register-link">
                            <p>Bạn chưa có tài khoản
                                <Link to="/register">Đăng ký</Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
