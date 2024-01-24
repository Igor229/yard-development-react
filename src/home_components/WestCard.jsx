import ComplexCardSlider from './sliders/ComplexCardSlider'
import FormCard from './CardForm'
import chevronRightIcon from '../assets/icons/chevron-right.png'
import './ComplexCard.scss'
const westCardImages = [
  {
    src: '/west-town-card/west1',
    alt: 'west-town'
  },
  {
    src: '/west-town-card/west2',
    alt: 'west-town'
  },
  {
    src: '/west-town-card/west3',
    alt: 'west-town'
  },
  {
    src: '/west-town-card/west4',
    alt: 'west-town'
  },
  {
    src: '/west-town-card/west5',
    alt: 'west-town'
  },
  {
    src: '/west-town-card/west6',
    alt: 'west-town'
  },
  {
    src: '/west-town-card/west7',
    alt: 'west-town'
  },
  {
    src: '/west-town-card/west8',
    alt: 'west-town'
  },
  {
    src: '/west-town-card/west9',
    alt: 'west-town'
  },
  {
    src: '/west-town-card/west10',
    alt: 'west-town'
  },
]


function WestCard() {
  return (
    <>
      <article className="complex">
        <div className="complex__slider-container">
          <ComplexCardSlider photos={westCardImages}/>
        </div>

        <div className="complex__info">
          <h1 className="complex__info-title">West Town</h1>
          <p className="complex__info-text">
            Одне з найбільших котеджних містечок таунхаусів в Івано-Франківську WEST TOWN. Таунхаус - це найкраща альтернатива квартирі у новобудові, адже практично за ті самі кошти, ви отримуєте повноцінний будинок площею 120 м² із власною земельною ділянкою та двома паркомісцями або гаражем. Ми пропонуємо вигідні умови розтермінування до двох років з початковим внеском 30%. Більше інформації можна отримати на сторінці комплексу.
          </p>
          <div className="complex__info-detailes">
            <a href="/#" className="complex__info-link">Детальніше про комплекс</a>
            <img src={chevronRightIcon} alt="chevron-right" className="action-chevron"/>
          </div>
        </div>
      </article>

      <FormCard/>
    </>
  )
}

export default WestCard