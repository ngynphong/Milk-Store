import { Link } from "react-router-dom";
import { SearchOutlined, UserOutlined, ShoppingCartOutlined, CloseOutlined } from '@ant-design/icons';
import "./index.scss";
import { AuthContext } from "../../contexts/AuthContext";
import { useState, useEffect } from "react";
import axios from "axios";

function Header() {

    const [isOpenSearch, setIsOpenSearch] = useState(false);
 
    const [authState, setAuthState] = useState({
        Email: "",
        UserID: 0,
        status: false,
});

    useEffect(() => {
        axios
            .get(`http://localhost:3001/auth/auth`, {
                headers: {
                    accessToken: sessionStorage.getItem("accessToken"),
                },
            })
            .then((response) => {
                console.log(response.data); 
                if (response.data.error) {
                    setAuthState({ ...authState, status: false });
                } else {
                    setAuthState({
                        Email: response.data.Email,
                        FullName: response.data.FullName,
                        UserID: response.data.UserID,
                        status: true,
                    });
                    console.log(response.data)
                }
            });
    }, []);

    const logout = () => {
        sessionStorage.removeItem("accessToken");
        setAuthState({ Email: "", UserID: 0, status: false });
    };


    return (
        <header className="header">
            <AuthContext.Provider value={{ authState, setAuthState }}>
                <div className="header__logo">
                    <Link to="/">
                        <img src="logo.png"
                            alt=""
                            width={200}
                        />
                    </Link>
                </div>

                <nav className="header__nav">
                    <ul>
                        <div className="sbv">
                            <li>
                                <Link to="/">Sản phẩm</Link>
                            </li>
                            <li>
                                <Link to="/promotion">Khuyến mãi</Link>
                            </li>
                            <li>
                                <Link to="/">Về chúng tôi</Link>
                            </li>

                            <li>
                                <Link to="/milk-management">Quản lý sữa {authState.FullName}</Link>
                            </li>
                        </div>
                        <div className="header__icon">
                            <li onClick={() => setIsOpenSearch(true)}>
                                <SearchOutlined />
                            </li>
                            <Link to="/cart">
                                <li>
                                    <ShoppingCartOutlined />
                                </li>
                            </Link>
                            <li className="header__userdropdow">
                            {authState.status && (
                                <li>
                                     {authState.FullName}
                                </li>
                            )}
                                <UserOutlined /> 
                                <ul className="userdropdow">
                                    {/* <li>{authState.FullName} </li> */}
                                    <Link to="/vieworder">
                                        <li>Xem đơn</li>
                                    </Link>
                                    <hr />
                                    <Link to="/profile/:UserID">
                                        <li>Hồ sơ của tôi</li>
                                    </Link>
                                    <hr />
                                    {/* <Link to="/login">
                                        <li>Đăng Nhập</li>
                                    </Link> */}
                                    {!authState.status && (
                                        <>
                                            <Link to="/login">
                                                <li>Đăng Nhập</li>
                                            </Link>
                                            <Link to="/register">
                                                <li>Đăng Ký</li>
                                            </Link>
                                        </>
                                    )}
                                    {/* <Link to="/logout"> */}
                                     <li>{authState.status && <button onClick={logout}> Đăng Xuất</button>}</li>                                      
                                    {/* </Link> */}
                                    
                                </ul>
                            </li>
                        </div>
                    </ul>
                </nav>
                <div className={`header__search ${isOpenSearch ? "active" : " "}`}>
                    <input type="text" placeholder="Search a milk..." />
                    <CloseOutlined onClick={() => setIsOpenSearch(false)} />
                </div>
            </AuthContext.Provider>
        </header>
    )


}

export default Header;