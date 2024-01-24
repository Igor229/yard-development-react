import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Autoplay } from 'swiper/modules';
import './News.scss'

const newsData = [
  {
    image: '/news/special-offer.jpg',
    date:'15.11.23',
    title: "АКЦІЙНІ ПРОПОЗИЦІЇ У МІСТЕЧКУ WEST TOWN",
    subtitle: '',
    text: "У містечку таунхаусів WEST TOWN діють вигідні АКЦІЙНІ ПРОПОЗИЦІЇ - ціна таунхауса на розтермінування дорівнює ціні 100% оплати, а також ви отримуєте ДИЗАЙН-ПРОЕКТ у подарунок! Акції діють до Нового року! Встигніть скористатись пропозицією!",
  },
  {
    image: '/news/gas-heating.jpg',
    date:'15.11.23',
    title: "Газове опалення у BESKID HOME RESORT",
    subtitle: 'У комплексі BESKID HOME RESORT буде газове опалення!',
    text: "Газове опалення у Карпатах - це рідкість та водночас «розкіш», оскільки має багато переваг, як для власників нерухомості, так і для майбутніх мешканців: не залежить від перебоїв світла, економніше, є можливість дистанційного налаштування - smart-технології, двоконтурні котли дозволяють не тільки обігрівати будинок, але й підігрівають воду.",
  },
  {
    image: '/news/alternateTown.jpg',
    date:'10.09.23',
    title: "Таунхаус, як альтернатива квартирі - тільки краще, адже вони мають приватне подвір'я!",
    text: "Таунхаус - це відмінна альтернатива 3-кімнатній квартирі, тільки тут значною перевагою є наявність власного подвір'я, де ви зможете гратись з дітками на свіжому повітрі, пити свою ранкову каву та насолоджуватись заходами сонця чи світанком або ж влаштувати вечірку-барбекю з друзями. Наші таунхауси мають ділянку від 1,65 до 2,5 сотих.",
  },
  {
    image: '/news/west-town_news.jpg',
    date:'29.06.23',
    title: 'Старт продажу нової черги (№9) у містечку WEST TOWN',
    text: "Стартував продаж таунхаусів у черзі №9 у найбільшому котеджному містечку таунхаусів WEST TOWN! У даній черзі можна придбати внутрішні та крайні таунхауси, як і у попередніх чергах. Доступні до продажу 24 таунхауси. Станьте частинкою нашого великого котеджного містечка WEST TOWN!",
  },
  {
    image: '/news/spa-news.jpg',
    date:'15.05.23',
    title: 'Чудова новина для мешканців комплексу BESKID HOME RESORT',
    text: "Комплекс матиме власну відпочинкову SPA-зону, яка сприятиме покращенню вашого самопочуття, а також зробить ваш відпочинок у нас незабутнім! Сезонний басейн із підігрівом, критий басейн, сауна, хамам та тропічний душ - все це зовсім незабаром у нашому комплексі.",
  },
  {
    image: '/news/besked-news.jpg',
    date:'15.05.23',
    title: 'Що нового у комплексі BESKID HOME RESORT?',
    text: "- на даний момент вже збудовані повністю три котеджі ТИПУ 1, надалі приступаємо до будівництва котеджу №4 ТИПУ 2; - розпочинаємо будівництво SPA-зони; - розпочинаємо дорожні роботи для ще зручнішого заїзду до містечка.",
  }
]

function NewsCard(props) {
  const {image, date, title, subTitle, text} = props

  return (
    <div className="newsCard">
      <img src={require('../assets/images' + image)} alt="status-image" className="newsCard__img" />
      <div className="newsCard__info">
        <p className="newsCard__info-date">{date}</p>
        <h3 className="newsCard__info-title">{title}</h3>
        <h3 className="newsCard__info-text">{subTitle}</h3>
        <p className="newsCard__info-text">{text}</p>
      </div>
    </div>
  )
}

function News() {
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
            1440: {
              slidesPerView: 4,
          },

        }}

        modules={[FreeMode, Autoplay]}
        className="news-slider"
      >
          {newsData.map((item, index) => {
            return (
            <SwiperSlide>
              <NewsCard key={index} {...item} />
            </SwiperSlide>)
          })}
      </Swiper>
    </>
  )
}

export default News