
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './index.scss';
import { useEffect, useState } from 'react';

function ProductPage() {
    const [listOfProduct, setListOfProduct] = useState([]);
    const productsPerPage = 32; // Display 16 products per page
    const [currentPage, setCurrentPage] = useState(1);

    const [brands, setBrands] = useState([]);
    const [categories, setCategories] = useState([]);
    const [ageRanges, setAgeRanges] = useState([]);
    const [brandFilter, setBrandFilter] = useState([]);
    const [categoryFilter, setCategoryFilter] = useState([]);
    const [ageRangeFilter, setAgeRangeFilter] = useState([]);

    let navigate = useNavigate();


    useEffect(() => {
        axios.get('http://localhost:3001/product').then((response) => {
            setListOfProduct(response.data);
        });

        axios.get('http://localhost:3001/brand')
            .then(response => {
                setBrands(response.data);
            })
            .catch(error => {
                console.error(error);
            });

        axios.get('http://localhost:3001/category')
            .then(response => {
                setCategories(response.data);
            })
            .catch(error => {
                console.error(error);
            });

        axios.get('http://localhost:3001/ageRange')
            .then(response => {
                setAgeRanges(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    const handleFilterChange = (event, filterType) => {
        switch (filterType) {
            case 'brand':
                setBrandFilter(Array.from(event.target.checked ? [...brandFilter, event.target.value] : brandFilter.filter(item => item !== event.target.value)));
                break;
            case 'category':
                setCategoryFilter(Array.from(event.target.checked ? [...categoryFilter, event.target.value] : categoryFilter.filter(item => item !== event.target.value)));
                break;
            case 'ageRange':
                setAgeRangeFilter(Array.from(event.target.checked ? [...ageRangeFilter, event.target.value] : ageRangeFilter.filter(item => item !== event.target.value)));
                break;
            default:
                break;
        }
    };

    const filteredProducts = listOfProduct.filter(product => {
        if (brandFilter.length > 0 && !brandFilter.includes(product.BrandID.toString())) return false;
        if (categoryFilter.length > 0 && !categoryFilter.includes(product.CategoryID.toString())) return false;
        if (ageRangeFilter.length > 0 && !ageRangeFilter.includes(product.AgeRangeID.toString())) return false;

        return true;
    });

    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    const displayedProducts = filteredProducts.slice(startIndex, endIndex);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <div className="product-page">
            <div className='leftzone'>
                <h1>Filter Product</h1>
                <form>
                    <label>Brand:</label>
                    <div>
                        {brands.map(brand => (
                            <div key={brand.BrandID}>
                                <input
                                    type="checkbox"
                                    value={brand.BrandID}
                                    onChange={event => handleFilterChange(event, 'brand')}
                                />
                                <span>{brand.Name}</span>
                            </div>
                        ))}
                    </div>
                    <br />
                    <label>Category:</label>
                    <div>
                        {categories.map(category => (
                            <div key={category.CategoryID}>
                                <input
                                    type="checkbox"
                                    value={category.CategoryID}
                                    onChange={event => handleFilterChange(event, 'category')}
                                />
                                <span>{category.NameMilk}</span>
                            </div>
                        ))}
                    </div>
                    <br />
                    <label>Age Range:</label>
                    <div>
                        {ageRanges.map(ageRange => (
                            <div key={ageRange.AgeRangeID}>
                                <input
                                    type="checkbox"
                                    value={ageRange.AgeRangeID}
                                    onChange={event => handleFilterChange(event, 'ageRange')}
                                />
                                <span>{ageRange.Age}</span>
                            </div>
                        ))}
                    </div>
                </form>
            </div>

            <div className="body__background1">
                <div className="body">
                    <h1>Sản Phẩm</h1>
                </div>
                <div className="body__1__product">
                    {displayedProducts.map(product => (
                        <div key={product.ProductID} onClick={() => {
                            navigate(`/product/${product.ProductID}`)
                        }}>
                            <div>
                                <img src={product.ImgProduct} alt="" />
                                <h4>{product.ProductName}</h4>
                                <span>{product.Price}</span>
                                <div>
                                    <button>MUA NGAY</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='switch-page'>
                    <Pagination totalPages={totalPages} currentPage={currentPage} handlePageChange={handlePageChange} />
                </div>
            </div>
        </div>
    );

    function Pagination({ totalPages, currentPage, handlePageChange }) {
        const startPage = Math.max(1, currentPage - Math.floor(5 / 2));
        const endPage = Math.min(totalPages, currentPage + Math.floor(5 / 2));

        return (
            <div className="pagination">
                {startPage > 1 && (
                    <button onClick={() => handlePageChange(1)}>First</button>
                )}
                {Array(endPage - startPage + 1)
                    .fill(0)
                    .map((_, index) => (
                        <button
                            key={index + startPage}
                            onClick={() => handlePageChange(index + startPage)}
                            className={index + startPage === currentPage ? 'active' : ''}
                        >
                            {index + startPage}
                        </button>
                    ))}
                {endPage < totalPages && (
                    <button onClick={() => handlePageChange(totalPages)}>Last</button>
                )}
            </div>
        );
    }
}

export default ProductPage;
