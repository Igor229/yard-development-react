import './FeedbackCard.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Autoplay } from 'swiper/modules';

function FeedbackCard(props) {
  const {icon, name, text} = props
  return (
    <div className="feedback">
      <div className="feedback__pid">
        <img src={require('../assets/images/feedback-icons/' + icon + '.png')} alt="person-img" className="feedback__pid-img" />
        <h3 className="feedback__pid-name">{name}</h3>
      </div>

      <p className="feedback__text">{text}</p>
    </div>
  )
}

function Feedbacks( {data} ) {
  return (
    <section className="feedbacks section">
      <h1 className="main-title">Відгуки наших клієнтів</h1>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={false}
        autoHeight={true}
        autoplay={true}
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
          1441: {
            slidesPerView: 4,
          },
        }}
        modules={[FreeMode, Autoplay]}
        className="feedback-slider"
      >
        {data.map((item, index) => {
          return (
            <SwiperSlide>
              <FeedbackCard key={index} {...item} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}

export default Feedbacks