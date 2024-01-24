import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Autoplay } from 'swiper/modules';
import '../BuildingStatus.scss'
function BuildStatusCard(props) {
  const {src, date, title, text, subText} = props

  return (
    <div className="statusCard">
      <img src={require('../../assets/images/building-status' + src)} alt="status-image" className="statusCard__img" />
      <div className="statusCard__info">
        <p className="statusCard__info-date">{date}</p>
        <h3 className="statusCard__info-title">{title}</h3>
        <p className="statusCard__info-text">{text}</p>
        <p className="statusCard__info-text">{subText}</p>
      </div>
    </div>
  )
}

export default function StatusSlider( {photos} ) {

  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={false}
        autoHeight = {true}
        autoplay = {true}

        breakpoints={{
            279: {
                slidesPerView: 1,
            },
            620: {
                slidesPerView: 2,
            },
            821: {
                slidesPerView: 3,
            },
            1461: {
                slidesPerView: 4,
            },

        }}

        modules={[FreeMode, Autoplay]}
        className="status__slider"
      >
          {photos.map((item, index) => {
            return (
            <SwiperSlide>
              <BuildStatusCard key={index} {...item} />
            </SwiperSlide>)
          })}
      </Swiper>
    </>
  );
}