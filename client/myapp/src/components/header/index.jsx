
import { Link, useNavigate } from "react-router-dom";
import { SearchOutlined, UserOutlined, ShoppingCartOutlined, CloseOutlined } from '@ant-design/icons';
import "./index.scss";
<<<<<<< HEAD
import { useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
function Header() {

    const [isOpenSearch, setIsOpenSearch] =  useState(false);
    const [authState,setAuthState] = useState([]);
=======
import { AuthContext } from "../../contexts/AuthContext";
import { useState, useEffect } from "react";
import axios from "axios";

function Header() {

    const [isOpenSearch, setIsOpenSearch] = useState(false);
    const navigate = useNavigate();
    const [authState, setAuthState] = useState({
        Email: "",
        UserID: 0,
        status: false,
    });

    useEffect(() => {
        axios
            .get(`http://localhost:3001/auth/auth`, {
                headers: {
                    accessToken: localStorage.getItem("accessToken"),
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
        localStorage.removeItem("accessToken");
        setAuthState({ Email: "", UserID: 0, status: false });
    };

>>>>>>> 9980fb2c02aecbc5380c35433e0195c980072104

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
                                <Link to="/abouttme">Về chúng tôi</Link>
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

                                <UserOutlined />
                                <ul className="userdropdow">
                                    <li>{authState.status && (
                                        <li>
                                            {authState.FullName}
                                        </li>
                                    )}</li>
                                    <hr />
                                    <Link to="/vieworder">
                                        <li>Xem đơn</li>
                                    </Link>
                                    <hr />
                                    {authState.status ?
                                        <div >
                                            <li onClick={() => {
                                                navigate(`/profile/${authState.UserID}`);
                                            }} >Profile</li>
                                            <hr />
                                            <li>{authState.status && <button onClick={logout}> Đăng Xuất</button>}</li>
                                        </div>

                                        : <>
                                            <Link to="/login">
                                                <li>Đăng Nhập</li>
                                            </Link>
                                            <hr />
                                            <Link to="/register">
                                                <li>Đăng Ký</li>
                                            </Link>
                                        </>
                                    }
                                    <hr />

                                </ul>
                            </li>
                        </div>
                    </ul>
                </nav>
                <div className={`header__search ${isOpenSearch ? "active" : " "}`}>
<<<<<<< HEAD
                    <div className="row">
                    <input
                        type="text"
                        placeholder="Search a milk..."
                        value={searchQuery}
                        onChange={(e) => handleSearch(e.target.value)}
                    />
                </div>
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
                            <Link to="/aboutme">Về chúng tôi</Link>
                        </li>

                        <li>
                            <Link to="/milk-management">Quản lý sữa</Link>
                        </li>
                    </div>
                    <div className="header__icon">
                        <li onClick={() =>setIsOpenSearch(true)}>
                            <SearchOutlined />
                        </li>
                        <Link to="/cart">
                        <li>
                            <ShoppingCartOutlined />
                        </li>
                        </Link>
                       
                        <li className="header__userdropdow">
                            <UserOutlined />
                           <ul className="userdropdow">
                            <Link to="/vieworder">
                           <li>Xem đơn</li>
                           </Link>
                           <hr />
                            <Link to="/profile">
                            <li>Hồ sơ của tôi</li>
                            </Link>
                            <hr/>
                            <Link to="/login">
                            <li>Đăng xuất</li>
                            </Link>
                           </ul>
                        </li>
                        
                    </div>
                </ul>
            </nav>
            <div className={`header__search ${isOpenSearch ? "active" : " "}`}>
                <input type="text" placeholder="Search a milk..." />
                <CloseOutlined onClick={() => setIsOpenSearch(false)} />
            </div>
            
=======
                    <input type="text" placeholder="Search a milk..." />
                    <CloseOutlined onClick={() => setIsOpenSearch(false)} />
                </div>
>>>>>>> 9980fb2c02aecbc5380c35433e0195c980072104
            </AuthContext.Provider>
        </header>
    )


}

export default Header;