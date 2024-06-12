
import "./index.scss";


function ApplicationManagement() {
   
    return (
        <div className="order-list">
            <div className="order-list__header">
                <h2>Danh sách đơn hàng</h2>

            </div>
            
            <table className="order-table">
                <thead>
                    <tr>
                        <th>Mã</th>
                        <th>Ngày tạo</th>
                        <th>Khách hàng</th>
                        <th>Trạng thái đơn hàng</th>
                        <th>Thanh toán</th>
                        <th>Giao hàng</th>
                        <th>COD</th>
                        <th>Tổng tiền</th>
                        <th>Kênh</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>#M103578</td>
                        <td>01/04/2022 16:31 CH</td>
                        <td>Lan</td>
                        <td className="status in-progress">Tự giao</td>
                        <td className="payment pending">Chờ xử lý</td>
                        <td className="delivery delivered">Đã giao</td>
                        <td className="cod received">Đã nhận</td>
                        <td>1,150,000 ₫</td>
                        <td>Web</td>
                    </tr>
                    <tr className="cancelled">
                        <td>#M103577</td>
                        <td>01/04/2022 16:30 CH</td>
                        <td>TRÂM ĐẶNG</td>
                        <td className="status cancelled">Hủy</td>
                        <td className="payment pending">Chờ xử lý</td>
                        <td className="delivery cancelled">Hủy</td>
                        <td className="cod not-received">Chưa nhận</td>
                        <td>1,150,000 ₫</td>
                        <td>Web</td>
                    </tr>
                    {/* Add more rows as needed */}
                </tbody>
            </table>
        </div>
    )
}

export default ApplicationManagement