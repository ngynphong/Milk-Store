
import axios from "axios";
import "./register.scss";
import { useNavigate, Link } from 'react-router-dom';


function Register() {

    // const inittialValues = {
    //     RoleID: 2,
    //     Email: "",
    //     Password: "",
    //     FullName: "",
    //     Age: "",
    //     Address: "",
    // };
    let navigate = useNavigate();
    const onSubmit = (data) => {
        axios.post('http://localhost:3001/auth', data).then(() => {
            console.log(data);
            navigate('/login');
        });
    }
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
                <div className="wrapper" onSubmit={onSubmit}>
                    <form className="register__form"  >
                        <h1>Đăng kí</h1>
                        <div className="input-box">
                            <input className="none" type="number" name="Role" value={2} />
                        </div>
                        <div className="input-box">
                            <input type="email" name="Email" placeholder="Email của bạn" />
                        </div>
                        <div className="input-box">
                            <input type="password" name="Password" placeholder="Mật Khẩu" />
                        </div>
                        <div className="input-box">
                            <input type="password" name="Password" placeholder="Xác nhận mật Khẩu" />
                        </div>
                        <div className="input-box">
                            <input type="text" name="FullName" placeholder="Họ và tên" />
                        </div>
                        <div className="input-box">
                            <input type="number" name="Age" placeholder="Tuổi" />
                        </div>
                        <div className="input-box">
                            <input type="text" name="Address" placeholder="Địa chỉ" />
                        </div>
                       
                        {/* <div className="input-box sex">
                            <input type="text" placeholder="dd/mm/yyyy" />
                            <select className="gender">
                                <option selected="selected" value="giớ tính">Giới tính</option>
                                <option value="nam">Nam</option>
                                <option value="nữ">Nữ</option>
                            </select>
                        </div> */}
                        
                        {/* <div className="remeber-forgot">
                            <label>
                                <input type="checkbox" />Ghi nhớ mật khẩu
                            </label>
                            <a href="#">Quên mật khẩu?</a>
                        </div> */}
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