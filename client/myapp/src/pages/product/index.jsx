import { useState } from "react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules"
import { Swiper } from "swiper/react"
import { SwiperSlide } from 'swiper/react';
import "./product1.scss";
function Product() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
   <div>
   <div className="swiper__product">
      <div className="swiper__item">
        <>
          <Swiper
            style={{
              '--swiper-navigation-color': '#fff',
              '--swiper-pagination-color': '#fff',
            }}
            spaceBetween={4}
            navigation={true}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper2"
          >
            <SwiperSlide>
              <img src="https://cdn1.concung.com/2022/02/43262-81584-large_mobile/sua-similac-5g-so-4-900g-2-6-tuoi.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://cdn1.concung.com/2022/02/43262-81586-large_mobile/sua-similac-5g-so-4-900g-2-6-tuoi.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://cdn1.concung.com/2022/02/43262-81591-large_mobile/sua-similac-5g-so-4-900g-2-6-tuoi.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://cdn1.concung.com/2022/02/43262-81592-large_mobile/sua-similac-5g-so-4-900g-2-6-tuoi.jpg" />
            </SwiperSlide>
          </Swiper>
          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={4}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src="https://cdn1.concung.com/2022/02/43262-81584-large_mobile/sua-similac-5g-so-4-900g-2-6-tuoi.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://cdn1.concung.com/2022/02/43262-81586-large_mobile/sua-similac-5g-so-4-900g-2-6-tuoi.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://cdn1.concung.com/2022/02/43262-81591-large_mobile/sua-similac-5g-so-4-900g-2-6-tuoi.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://cdn1.concung.com/2022/02/43262-81592-large_mobile/sua-similac-5g-so-4-900g-2-6-tuoi.jpg" />
            </SwiperSlide>
          </Swiper>
        </>
      </div>
      <div className="swiper__info">
        <h1>Sữa Similac 5G số 4 900g (2-6 tuổi)</h1>
        <span>519.000 VND</span>
        <div className="swiper__button">
          <button>Thêm giỏ hàng</button>
          <button>Mua Ngay</button>
        </div>
      </div>
      </div>
      <div className="info__detail">
        <h1>Chi tiết sản phẩm</h1>
        <div className="info__table">
            <tbody>
              <tr>
                <td>Tên sản phẩm</td>
                <td>Thực phẩm bổ sung cho trẻ 2-6 tuổi: Similac 4</td>
              </tr>
              <tr>
                <td>Thương hiệu</td>
                <td>Abbott</td>
              </tr>
              <tr>
                <td>Xuất xứ thương hiệu</td>
                <td>Hoa Kỳ</td>
              </tr>
              <tr>
                <td>Sản xuất tại</td>
                <td><td>Ireland</td></td>
              </tr>
              <tr>
                <td>Trọng lượng sản phẩm</td>
                <td>900g</td>
              </tr>
              <tr>
                <td>Nhà sản xuất</td>
                <td>Abbott Ireland, Cootehill, Co. Cavan, Ireland</td>
              </tr>
              <tr>
                <td>Hưỡng dẫn sử dụng</td>
                <td>
                  . Sử dụng theo hướng dẫn của nhân viên y tế.
                  <br />
                  . Khi pha cần vệ sinh sạch sẽ, pha và bảo quản đúng cách.
                  <br />
                  . Không tuân thủ các hướng dẫn này có thể sẽ gây ảnh hưởng không tốt cho sức khỏe của bé.
                  <br />
                  . Các loại sản phẩm dinh dưỡng công thức đều không tuyệt đối vô trùng, do đó khi dùng cho trẻ sinh non hoặc trẻ có vấn đề về miễn dịch cần phải theo sự hướng dẫn và theo dõi của bác sĩ.
                  <br />
                  . Nước dùng để pha phải được đun sôi 5 phút, để nguội và pha cẩn thận theo hướng dẫn kèm theo.
                  <br />
                  . Chỉ dùng muỗng có sẵn trong hộp để lường.
                  <br />
                  . Nếu pha hơn 1 lần dùng thì lượng pha dư phải giữ lạnh ở nhiệt độ 2-4 độ C và dùng trong 24h.
                  <br />
                  . Chỉ cho bé dùng tối đa trong vòng 1h, sau đó phải đổ bỏ phần còn thừa.
                </td>
                <br />
              </tr>
              <tr>
                  <td>Hướng dẫn bảo quản</td>
                  <td>
                  . Bảo quản hộp chưa mở nắp ở nhiệt độ phòng.
                  <br />
                  . Hộp đã mở nắp nên sử dụng trong vòng 3 tuần.
                  <br />
                  . Đậy nắp kín và bảo quản nơi khô mát (không để trong tủ lạnh).
                  </td>
                </tr>
            </tbody>
        </div>
      </div>
    </div>
  )
}

export default Product
