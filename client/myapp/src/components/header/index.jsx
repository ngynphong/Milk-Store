
import { Link, useNavigate } from "react-router-dom";
import { SearchOutlined, UserOutlined, ShoppingCartOutlined, CloseOutlined } from '@ant-design/icons';
import "./index.scss";
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

    const [searchQuery, setSearchQuery] = useState("");
    const [productData, setProductData] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {

        // Fetch product data
        axios.get(`http://localhost:3001/product`)
            .then((response) => {
                setProductData(response.data);
                setFilteredProducts(response.data);
            })
            .catch((error) => {
                console.error("Error fetching product data:", error);
            });

        // fetch auth  
        axios.get(`http://localhost:3001/auth/auth`, {
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

    // Function to handle search
    useEffect(() => {
        const filteredProducts = productData.filter(Product =>
            Product.ProductName.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredProducts(filteredProducts);
    }, [searchQuery, productData]);

    const handleSearch = (value) => {
        setSearchQuery(value);
    };

    // logout function 
    const logout = () => {
        localStorage.removeItem("accessToken");
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
                    <div className="row">
                    <input
                        type="text"
                        placeholder="Search a milk..."
                        value={searchQuery}
                        onChange={(e) => handleSearch(e.target.value)}
                    />
                    <CloseOutlined onClick={() => {
                        setIsOpenSearch(false);
                        setSearchQuery("");
                        setFilteredProducts([]);
                    }} />
                    </div>
                    
                    {searchQuery  && (
                        <ul className="search-results">
                            {filteredProducts.map(product => (
                                <li key={product.ProductID}>
                                    <Link to={`/product/${product.ProductID}`}>{product.ProductName}</Link>
                                </li>
                            ))}
                        </ul>
                    )}

                    
                </div>
            </AuthContext.Provider>
        </header>
    )


}

export default Header;