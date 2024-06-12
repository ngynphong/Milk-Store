import { Link } from "react-router-dom";
import { SearchOutlined, UserOutlined, ShoppingCartOutlined,CloseOutlined } from '@ant-design/icons';
import "./index.scss";
import { useState } from "react";
function Header() {

    const [isOpenSearch, setIsOpenSearch] =  useState(false);

    return (
        <header className="header">
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
        </header>
    )


}

export default Header;