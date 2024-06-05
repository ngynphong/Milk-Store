import Header from "../../components/header"
import HeaderEnd from "../../components/header-end"
import "./index.scss"

function Vieworder() {
    return (
        <div className="vieworder-list">
            <Header />
            <div className="vieworder-list__header">
                <h2>Danh sách đơn</h2>
            </div>
            <div>
                <table className="vieworder-list__table">
                    <tr>
                        <th>Mã</th>
                        <th>Tên</th>
                        <th>Ngày mua</th>
                        <th>Sản phẩm</th>
                        <th>Tổng tiền</th>
                        <th>Trạng thái</th>
                    </tr>
                    <tr>
                        <td>#M103578</td>
                        <td>Nguyễn Thanh Lan</td>
                        <td>01/04/2022</td>
                        <td>Combo 4 Sữa Nan Optipro PLUS</td>
                        <td>1,150,000</td>
                        <td className="cod received">Đã nhận</td>
                    </tr>
                    <tr>
                        <td>#M103577</td>
                        <td>Nguyễn Thanh Lan</td>
                        <td>29/03/2022</td>
                        <td>Combo 3 Sữa Nan Optipro PLUS</td>
                        <td>850,000</td>
                        <td className="cod notreceived">Chưa nhận</td>
                    </tr>
                    <tr>
                        <td>#M103576</td>
                        <td>DAO DUONG TRAM DANG</td>
                        <td>26/03/2022</td>
                        <td>Combo 2 Sữa Nan Optipro PLUS</td>
                        <td>550,000</td>
                        <td className="cod cancelled">Hủy</td>
                    </tr>
                </table>
            </div>
           
       
        <div>
             <HeaderEnd />
        </div>
        </div>  
    )
}

export default Vieworder