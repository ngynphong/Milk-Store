
import "./index.scss";
import Header from '../../components/header';

const Productcategory = () => {
    const milkTypes = [
        { id: 'suaMy', label: 'Sữa Mỹ' },
        { id: 'suaNhat', label: 'Sữa Nhật' },
        { id: 'suaUc', label: 'Sữa Úc' },
        { id: 'chauAu', label: 'Châu Âu' },
        { id: 'suaKhac', label: 'Sữa Khác' },
    ];

    const ageGroups = [
        { id: '0-1', label: '0-1 tuổi' },
        { id: '1-2', label: '1-2 tuổi' },
        { id: '2+', label: '>2 tuổi' },
        { id: 'suaBau', label: 'Sữa bầu' },
    ];

    return (
        <div>
            <Header />
            <form>
                <div className='list-product'>
                    <span>Loại sữa</span>
                        <div className="list-product-item">
                            {milkTypes.map(item => (
                                <div key={item.id}>
                                    <input type="checkbox" id={item.id} name={item.id} />
                                    <h3>{item.label}</h3>
                                </div>
                            ))}
                        </div>
                        <span>Theo tuổi</span>
                        <div className="list-product-item">
                            {ageGroups.map(item => (
                                <div key={item.id}>
                                    <input type="checkbox" id={item.id} name={item.id} />
                                    <h3>{item.label}</h3>
                                </div>
                            ))}
                        </div>
                    </div>
                {/* <div className="list-produc"> 
                    <li>Phù hợp</li>
                    <li></li>        
                </div> */}
            </form>
        </div>
    );
};

export default Productcategory;
