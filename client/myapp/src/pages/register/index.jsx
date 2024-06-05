
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './register.scss';

function Register() {
    let navigate = useNavigate();

    const initialValues = {
        Role: 2,
        Email: "",
        Password: "",
        ConfirmPassword: "",
        FullName: "",
        Age: "",
        Address: "",
    };

    const validationSchema = Yup.object().shape({
        Email: Yup.string().email('Invalid email format').required('Email is required'),
        Password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
        ConfirmPassword: Yup.string().oneOf([Yup.ref('Password'), null], 'Passwords must match').required('Confirm Password is required'),
        FullName: Yup.string().required('Full Name is required'),
        Age: Yup.number().positive('Age must be a positive number').integer('Age must be an integer').required('Age is required'),
        Address: Yup.string().required('Address is required'),
    });

    const onSubmit = (data) => {
        axios.post('http://localhost:3001/auth', data).then(() => {
            console.log(data);
            navigate('/login');
        });
    };

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
                    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                        <Form className="register__form">
                            <h1>Đăng kí</h1>
                            <div className="input-box">
                                <Field type="hidden" name="Role" value={2} />
                            </div>
                            <div className="input-box">
                                <Field type="email" name="Email" placeholder="Email của bạn" />
                                <ErrorMessage name="Email" component="div" className="error-message" />
                            </div>
                            <div className="input-box">
                                <Field type="password" name="Password" placeholder="Mật Khẩu" />
                                <ErrorMessage name="Password" component="div" className="error-message" />
                            </div>
                            <div className="input-box">
                                <Field type="password" name="ConfirmPassword" placeholder="Xác nhận mật Khẩu" />
                                <ErrorMessage name="ConfirmPassword" component="div" className="error-message" />
                            </div>
                            <div className="input-box">
                                <Field type="text" name="FullName" placeholder="Họ và tên" />
                                <ErrorMessage name="FullName" component="div" className="error-message" />
                            </div>
                            <div className="input-box">
                                <Field type="number" name="Age" placeholder="Tuổi" />
                                <ErrorMessage name="Age" component="div" className="error-message" />
                            </div>
                            <div className="input-box">
                                <Field type="text" name="Address" placeholder="Địa chỉ" />
                                <ErrorMessage name="Address" component="div" className="error-message" />
                            </div>
                            <button className="done" type="submit">Đăng ký </button>
                            <p>Bạn đã có tài khoản
                                <Link to="/login">
                                    <a>Đăng nhập</a>
                                </Link>
                            </p>
                        </Form>
                    </Formik>
                </div>
            </div>
        </div>
    );
}

export default Register;
