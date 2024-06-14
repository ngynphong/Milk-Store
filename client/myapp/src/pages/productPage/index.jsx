import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './index.scss'
function ProductPage() {
    // const [products, setProducts] = useState([]);
    const [listOfProduct, setListOfProduct] = useState([]);
    const productsPerPage = 4; 
    const totalPages = 20; // assume 20 pages
    const windowSize = 5; // display 5 page numbers
    const [currentPage, setCurrentPage] = useState(1);

    const [brands, setBrands] = useState([]);
    const [categories, setCategories] = useState([]);
    const [ageRanges, setAgeRanges] = useState([]);
    const [brandFilter, setBrandFilter] = useState('');
    const [categoryFilter, setCategoryFilter] = useState('');
    const [ageRangeFilter, setAgeRangeFilter] = useState('');

    let navigate = useNavigate();

    // const totalPages = Math.ceil(listOfProduct.length / productsPerPage);
    const startPage = Math.max(1, currentPage - Math.floor(windowSize / 2));
    const endPage = Math.min(totalPages, currentPage + Math.floor(windowSize / 2));
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

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

    const filteredProducts = listOfProduct.slice(
        (currentPage - 1) * productsPerPage,
        currentPage * productsPerPage
    );

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
                <ul>

                </ul>
            </div>

            <div className="body__background1">

                <div className="body">
                    <h1> Sản Phẩm   </h1>
                </div>
                <div className="body__1__product">
                    {filteredProducts.map(product => (
                        <div key={product.ProductID} onClick={() => {
                            navigate(`/product/${product.ProductID}`)
                        }} >
                            <div >
                                <img src={product.ImgProduct}
                                    alt="" />
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