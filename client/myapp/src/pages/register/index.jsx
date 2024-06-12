import { useState } from 'react';
import { Link } from 'react-router-dom';
import './register.scss';

function Register() {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [dob, setDob] = useState('');
    const [gender, setGender] = useState('');
    const [address, setAddress] = useState('');
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        const newErrors = {};
        if (!fullName) newErrors.fullName = 'Họ và tên is required';
        if (!email) newErrors.email = 'Email is required';
        if (!password) newErrors.password = 'Mật Khẩu is required';
        if (!confirmPassword) newErrors.confirmPassword = 'Xác nhận mật Khẩu is required';
        if (password !== confirmPassword) newErrors.confirmPassword = 'Passwords do not match';
        if (!dob) newErrors.dob = 'Date of birth is required';

        if (!address) newErrors.address = 'Địa chỉ is required';
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
            <div className="header__register">
                <Link to="/">
                    <img src="logo.png" alt="Logo" width={200} />
                </Link>
                <div>
                    <h1>Đăng Ký</h1>
                </div>
            </div>
            <div className="register">
                <div className="wrapper">
                    <form className="register__form" onSubmit={handleSubmit}>
                        <h1>Đăng kí</h1>
                        <div className="input-box">
                            <input
                                type="text"
                                placeholder="Họ và tên"
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
                            />
                            {errors.fullName && <p className="error">{errors.fullName}</p>}
                        </div>
                        <div className="input-box">
                            <input
                                type="text"
                                placeholder="Email của bạn"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            {errors.email && <p className="error">{errors.email}</p>}
                        </div>
                        <div className="input-box">
                            <input
                                type="password"
                                placeholder="Mật Khẩu"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            {errors.password && <p className="error">{errors.password}</p>}
                        </div>
                        <div className="input-box">
                            <input
                                type="password"
                                placeholder="Xác nhận mật Khẩu"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                            {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
                        </div>
                        <div className="input-box sex">
                            <input
                                type="number"
                                placeholder="tuổi"
                                value={dob}
                                onChange={(e) => setDob(e.target.value)}
                            />
                            {errors.dob && <p className="error">{errors.dob}</p>}

                        </div>
                        <div className="input-box">
                            <input
                                type="text"
                                placeholder="Địa chỉ"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                            />
                            {errors.address && <p className="error">{errors.address}</p>}
                        </div>
                        <div className="remeber-forgot">
                            <label>
                                <input type="checkbox" />Ghi nhớ mật khẩu
                            </label>
                            <Link to="/forgotpassword">Quên mật khẩu?</Link>
                        </div>
                        <button className="done" type="submit">Đăng ký</button>
                        <p>Bạn đã có tài khoản
                            <Link to="/login">Đăng nhập</Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>

    );
}

export default Register;
