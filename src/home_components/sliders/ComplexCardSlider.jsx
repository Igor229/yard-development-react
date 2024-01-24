import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './slider.scss';

export default function ComplexCardSlider({photos}) {
  
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        navigation={true}
        modules={[Navigation, Pagination]}
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#527246",
          "--swiper-navigation-size": "8px",
        }}
        className="complex__slider"
      >

        {photos.map((item, index) => {
          return(
            <SwiperSlide>
              <img src={require('../../assets/images' + item.src + '.jpg')} alt={item.alt} key={index} className='complex__slider-image' />
              <div className="shadow"></div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </>
  );
}
