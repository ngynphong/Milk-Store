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

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> dbb869297cac897a02815ce6461e2d9fcc844471
    const handleSubmit = (e) => {
        e.preventDefault();
        const formErrors = validateForm();
        if (Object.keys(formErrors).length === 0) {
            // Submit the form
            console.log('Form submitted successfully');
            // You can also handle form submission here
        } else {
            setErrors(formErrors);
<<<<<<< HEAD
=======
=======
    const adminRole = 1;

    const login = () => {
        if (validate()) {
            const data = { Email: Email, Password: Password }
            axios.post('http://localhost:3001/auth/login', data).then((response) => {
                if (response.data.error) {
                    alert(response.data.error)
                } else {
                    localStorage.setItem("accessToken", response.data.token);
                    setAuthState({
                        Email: response.data.Email,
                        FullName: response.data.FullName,
                        UserID: response.data.UserID,
                        Age: response.data.Age,
                        Address: response.data.Address,
                        status: true,
                    });
                    // console.log(response.data.RoleID);
                    if(response.data.RoleID !== adminRole){
                        navigate('/');
                    } else {
                        navigate('/adminHomePage');
                    }
                    
                }
            })
>>>>>>> ae8f8b3e9968a07e2fd14d7e03ead17eac839bdf
>>>>>>> dbb869297cac897a02815ce6461e2d9fcc844471
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
<<<<<<< HEAD
                        <button className="login-button" type="submit">Đăng nhập</button>
=======
                        <button className="login-button" onClick={login}>Login</button>
                        
>>>>>>> ae8f8b3e9968a07e2fd14d7e03ead17eac839bdf
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
