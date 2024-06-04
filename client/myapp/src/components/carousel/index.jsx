
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './carousel.scss';
import { Autoplay, Pagination } from 'swiper/modules';
import { Link } from "react-router-dom";


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
          <img src="https://beecare.com.vn/storage/me-bau-uong-sua-tuoi-thay-sua-bau-duoc-khong3-1.jpg" 
          alt="" 
          />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://concung.com/img/news/2022/2072-1670318106-cover.png" 
          alt="" 
          />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://vimed.org/wp-content/uploads/2020/11/sua-tot-cho-be-1-3-tuoi-4.jpg" 
          alt="" 
          />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://www.thmilk.vn/wp-content/uploads/2020/09/Banner_TH-MILK-Canh-dong-huong-duong.jpg" 
          alt="" 
          />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://kiemsat.1cdn.vn/2019/04/25/anh-1(1).jpg" 
          alt="" 
          />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://nhathuoc365.vn/upload_images/images/sua-bot-dang-goi-nho-cho-tre-so-sinh.jpg" 
          alt="" 
          />
        </SwiperSlide>
      </Swiper>
      </div>
      <div className='carousel__wellcome' >
        <h3>CHÀO MỪNG BẠN ĐẾN VỚI</h3>
        <h1>HAPPY MOTHER&BABY</h1>
        <Link to="/aboutme">
        <button>KHÁM PHÁ NGAY</button>
        </Link>
      </div>
    </>
  );
}
