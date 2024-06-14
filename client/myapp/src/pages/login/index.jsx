import { useContext } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import "./login.scss";
import { AuthContext } from "../../contexts/AuthContext";
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from '../../conflig/firebase';

function Login() {
    const handelLoginGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                console.log(credential);
            }).catch((error) => {
                console.log(error);
            });
    };

    const { setAuthState } = useContext(AuthContext);
    let navigate = useNavigate();

    const adminRole = 1;

    const formik = useFormik({
        initialValues: {
            Email: '',
            Password: '',
        },
        validationSchema: Yup.object({
            Email: Yup.string().email('Email không hợp lệ').required('Email không được để trống'),
            Password: Yup.string().min(6, 'Password phải ít nhất 6 kí tự').required('Mật khẩu không được để trống'),
        }),
        onSubmit: values => {
            const data = { Email: values.Email, Password: values.Password };
            axios.post('http://localhost:3001/auth/login', data).then((response) => {
                if (response.data.error) {
                    alert(response.data.error);
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
                    console.log(response.data.RoleID);
                    if (response.data.RoleID !== adminRole) {
                        navigate('/');
                    } else {
                        navigate('/adminHomePage');
                    }
                }
            });
        },
    });



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
                    <form className="login-form" onSubmit={formik.handleSubmit}>
                        <input
                            className={`input-group ${formik.touched.Email && formik.errors.Email ? 'error' : ''}`}
                            placeholder="Email"
                            type="text"
                            name="Email"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.Email}
                        />
                        {formik.touched.Email && formik.errors.Email ? (
                            <p className="error-message">{formik.errors.Email}</p>
                        ) : null}
                        <br />
                        <input
                            className={`input-group ${formik.touched.Password && formik.errors.Password ? 'error' : ''}`}
                            placeholder="Your password"
                            type="password"
                            name="Password"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.Password}
                        />
                        {formik.touched.Password && formik.errors.Password ? (
                            <p className="error-message">{formik.errors.Password}</p>
                        ) : null}
                        <br />
                        <div className="remember-forgot">
                            <label>
                                <input type="checkbox" />Ghi nhớ mật khẩu
                            </label>
                            <a href="/forgotpassword">Quên mật khẩu?</a>
                        </div>

                        <button className="login-button" type="submit">Login</button>
                        <button className='login-google' onClick={handelLoginGoogle} type="button">
                            <img
                                src="https://th.bing.com/th/id/OIP.IcreJX7hnOjNYRnlo4DCWwHaE8?rs=1&pid=ImgDetMain"
                                alt=""
                                width={30}
                            />
                            <span>Đăng nhập với Google</span>
                        </button>
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
