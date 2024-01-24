import { useState } from 'react'
import ComplexCardSlider from './sliders/ComplexCardSlider'
import FormCard from './CardForm'
import chevronRightIcon from '../assets/icons/chevron-right.png'
import './ComplexCard.scss'

const beskedCardImages = [
  {
    src: '/beskid-home-card/0',
    alt: 'beskid-home'
  },
  {
    src: '/beskid-home-card/1',
    alt: 'beskid-home'
  },
  {
    src: '/beskid-home-card/2',
    alt: 'beskid-home'
  },
  {
    src: '/beskid-home-card/3',
    alt: 'beskid-home'
  },
  {
    src: '/beskid-home-card/4',
    alt: 'beskid-home'
  },
  {
    src: '/beskid-home-card/5',
    alt: 'beskid-home'
  },
  {
    src: '/beskid-home-card/6',
    alt: 'beskid-home'
  },
  {
    src: '/beskid-home-card/7',
    alt: 'beskid-home'
  },
  {
    src: '/beskid-home-card/8',
    alt: 'beskid-home'
  },
  {
    src: '/beskid-home-card/9',
    alt: 'beskid-home'
  },
  {
    src: '/beskid-home-card/10',
    alt: 'beskid-home'
  },
  {
    src: '/beskid-home-card/11',
    alt: 'beskid-home'
  },
  {
    src: '/beskid-home-card/12',
    alt: 'beskid-home'
  },
  {
    src: '/beskid-home-card/13',
    alt: 'beskid-home'
  },
  {
    src: '/beskid-home-card/14',
    alt: 'beskid-home'
  },
  {
    src: '/beskid-home-card/15',
    alt: 'beskid-home'
  },
  {
    src: '/beskid-home-card/16',
    alt: 'beskid-home'
  },
]

function BeskidCard() {
  const [isActive, setIsActive] = useState(true)
  const squareContent = isActive ? '117,94' : '121,27'
  const terraceContent = isActive ? '16,80' : '27,90'
  const handleClick = () => {
    setIsActive(!isActive)
  }
  return (
    <>
      <article className="complex">
        <div className="complex__slider-container">
          <ComplexCardSlider photos={beskedCardImages}/>
        </div>

        <div className="complex__info">
          <h1 className="complex__info-title">BESKID HOME RESORT (BUKOVEL)</h1>
          <h2 className="complex__info-subtitle">Комплекс розташований в с.Поляниця, урочище Вишня (BUKOVEL).</h2>

          <div className="complex__info-actions">
            <button className={isActive ? 'main-button actions-button' : 'main-button actions-button--noActive'} onClick={handleClick}>Тип 1</button>
            <button className={isActive ? 'main-button actions-button--noActive' : 'main-button actions-button'} onClick={handleClick}>Тип 2</button>
          </div>

          <nav>
            <p className="complex__info-text">- Площа - {squareContent} м<sup>2</sup></p>
            <p className="complex__info-text">- Тераса – {terraceContent} м<sup>2</sup></p>
          </nav>

          <p className="complex__info-text">
            Двоповерхові високоякісні котеджі продаються повністю укомплектовані до проживання – з ремонтом, меблями та побутовою технікою. 
            Будинок вміщує простору кухню-студію та спальню, а також санвузол на першому поверсі. Та ще дві окремі спальні з власними санвузлами на другому поверсі.
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

export default BeskidCard