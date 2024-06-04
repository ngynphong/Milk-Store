
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './carousel.scss';
import { Autoplay, Pagination } from 'swiper/modules';

//Props
//NumberOfSlide

//Carousel =>numberOfSlide = 1 +> hiện 1 thằng
//Carousel =>numberOfSlide = 6 +> hiện 6 thằng


export default function Carousel({numberOfSlide}) {
  return (
    <>
      <div className='carousel__swiper'>
      <Swiper 
      slidesPerView={numberOfSlide}
      spaceBetween={30}
      pagination={true} 
      modules={[Pagination,Autoplay]} 
      className="carousel" 
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}>
        <SwiperSlide>
          <img src="https://alltop.vn/backend/media/images/posts/2071/Sieu_Thi_Con_Cung-153381.jpg" 
          alt="" 
          />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://www.thmilk.vn/wp-content/uploads/2019/11/Banner-2-1.jpg" 
          alt="" 
          />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://www.thmilk.vn/wp-content/uploads/2023/08/Banner-all-1.jpg" 
          alt="" 
          />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://www.thmilk.vn/wp-content/uploads/2020/09/Banner_TH-MILK-Canh-dong-huong-duong.jpg" 
          alt="" 
          />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://suabottot.com/wp-content/uploads/2015/09/sua-vinamilk.jpg" 
          alt="" 
          />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://th.bing.com/th/id/OIP.yslKaperjRmmsdgBWH5lhQHaD1?w=321&h=180&c=7&r=0&o=5&pid=1.7" 
          alt="" 
          />
        </SwiperSlide>
      </Swiper>
      </div>
      <div className='carousel__wellcome' >
        <h3>CHÀO MỪNG BẠN ĐẾN VỚI</h3>
        <h1>HAPPY MOTHER&BABY</h1>
        <button>KHÁM PHÁ NGAY</button>
      </div>
    </>
  );
}
