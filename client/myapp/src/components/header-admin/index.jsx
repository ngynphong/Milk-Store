import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { SearchOutlined, UserOutlined, CloseOutlined} from '@ant-design/icons';
import axios from "axios";
import "./index.scss";
function HeaderAdmin() {
<<<<<<< HEAD
=======

    const [isOpenSearch, setIsOpenSearch] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [productData, setProductData] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const navigate = useNavigate();
    const [authState, setAuthState] = useState({
        Email: "",
        UserID: 0,
        status: false,
    });

    
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
>>>>>>> ae8f8b3e9968a07e2fd14d7e03ead17eac839bdf


    const logout = () => {
        localStorage.removeItem("accessToken");
        setAuthState({ Email: "", UserID: 0, status: false });
    };  

    return (
<<<<<<< HEAD
        <header className="header-admin">
=======
<<<<<<< HEAD
        <header className="header-admin">
=======
        <header className="header">
            <AuthContext.Provider value={{ authState, setAuthState }}>
>>>>>>> ae8f8b3e9968a07e2fd14d7e03ead17eac839bdf
>>>>>>> dbb869297cac897a02815ce6461e2d9fcc844471
            <div className="header__logo">
                <Link to="/adminHomePage">
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
                            <Link to="/adminHomePage">Sản phẩm</Link>
                        </li>
                        <li>
                            <Link to="/promotion-management">Quản lý khuyến mãi</Link>
                        </li>
                        <li>
                            <Link to="/milk-management">Quản lý sữa</Link>
                        </li>
                        <li>
                            <Link to="/adminHomePage">Quản lý đơn</Link>
                        </li>
                    </div>
                    <div className="header__icon">
                            <li onClick={() => setIsOpenSearch(true)}>
                                <SearchOutlined />
                            </li>
                           
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
                </ul>
            </nav>
<<<<<<< HEAD
            
=======
<<<<<<< HEAD
            
=======
            </AuthContext.Provider>
>>>>>>> ae8f8b3e9968a07e2fd14d7e03ead17eac839bdf
>>>>>>> dbb869297cac897a02815ce6461e2d9fcc844471
        </header>
    )


}

export default HeaderAdmin;