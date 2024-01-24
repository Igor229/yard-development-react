import { useState } from 'react'
import StatusSlider from './sliders/BuildStatusSlider'
import './BuildingStatus.scss'

const que8Data = [
  {
    src: '/west-status/queue8/november5.jpg',
    date: 'Січень',
    title: 'West Town',
    text: ''
  },
  {
    src: '/west-status/queue8/november6.jpg',
    date: 'Січень',
    title: 'West Town',
    text: ''
  },
  {
    src: '/west-status/queue8/west12.jpg',
    date: 'Грудень',
    title: 'West Town',
    text: ''
  },
  {
    src: '/west-status/queue8/west13.jpg',
    date: 'Грудень',
    title: 'West Town',
    text: ''
  },
  {
    src: '/west-status/queue8/november1.png',
    date: 'Листопад',
    title: 'West Town',
    text: ''
  },
  {
    src: '/west-status/queue8/november2.png',
    date: 'Листопад',
    title: 'West Town',
    text: ''
  },
  {
    src: '/west-status/queue8/november3.jpg',
    date: 'Листопад',
    title: 'West Town',
    text: ''
  },
  {
    src: '/west-status/queue8/november4.png',
    date: 'Листопад',
    title: 'West Town',
    text: ''
  },
  {
    src: '/west-status/queue8/west11.jpg',
    date: 'Жовтень',
    title: 'West Town',
    text: ''
  },
  {
    src: '/west-status/queue8/west10.jpg',
    date: 'Жовтень',
    title: 'West Town',
    text: ''
  },
  {
    src: '/west-status/queue8/status-west1.jpg',
    date: 'Жовтень',
    title: 'West Town',
    text: '- Таунхауси 13-24 - повністю готові.'
  },
  {
    src: '/west-status/queue8/status-west2.jpg',
    date: 'Жовтень',
    title: 'West Town',
    text: '- Таунхауси 13-24 - повністю готові.'
  },
  {
    src: '/west-status/queue8/west3.jpg',
    date: 'Жовтень',
    title: 'West Town',
    text: '- Таунхауси 1-12 - триває монтаж деревʼяних балок дахового накриття з подальшим перекриттям металочерепицею.'
  },
  {
    src: '/west-status/queue8/west4.jpg',
    date: 'Жовтень',
    title: 'West Town',
    text: '- у таунхаусах 1-6 завершуються мурування зовнішніх та внутрішніх стін;',
    subText: '- у таунхаусах 7-12 - здійснюється перекриття даху.'
  },
  {
    src: '/west-status/queue8/west5.jpg',
    date: 'Жовтень',
    title: 'West Town',
    text: '-у таунхаусах 13-24 (черга 8) - здійснюються фасадні роботи.'
  },
]
const que9Data = [
  {
    src: '/west-status/queue9/november1.jpg',
    date: 'Січень',
    title: 'West Town',
    text: ''
  },
  {
    src: '/west-status/queue9/november2.jpg',
    date: 'Січень',
    title: 'West Town',
    text: ''
  },
  {
    src: '/west-status/queue9/november3.jpg',
    date: 'Січень',
    title: 'West Town',
    text: ''
  },
  {
    src: '/west-status/queue9/que9-11.jpg',
    date: 'Січень',
    title: 'West Town',
    text: ''
  },
  {
    src: '/west-status/queue9/que9-12.jpg',
    date: 'Січень',
    title: 'West Town',
    text: ''
  },
  {
    src: '/west-status/queue9/que9-1.jpg',
    date: 'Січень',
    title: 'West Town',
    text: ''
  },
  {
    src: '/west-status/queue9/que9-2.jpg',
    date: 'Січень',
    title: 'West Town',
    text: ''
  },
  {
    src: '/west-status/queue9/que9-3.jpg',
    date: 'Січень',
    title: 'West Town',
    text: ''
  },
  {
    src: '/west-status/queue9/que9-4.jpg',
    date: 'Січень',
    title: 'West Town',
    text: ''
  },
  {
    src: '/west-status/queue9/que9-5.jpg',
    date: 'Січень',
    title: 'West Town',
    text: ''
  },
  {
    src: '/west-status/queue9/que9-6.jpg',
    date: 'Січень',
    title: 'West Town',
    text: ''
  },
  {
    src: '/west-status/queue9/que9-7.jpg',
    date: 'Січень',
    title: 'West Town',
    text: ''
  },
  {
    src: '/west-status/queue9/que9-8.jpg',
    date: 'Січень',
    title: 'West Town',
    text: ''
  },
  {
    src: '/west-status/queue9/que9-9.jpg',
    date: 'Січень',
    title: 'West Town',
    text: ''
  },
  {
    src: '/west-status/queue9/que9-10.jpg',
    date: 'Січень',
    title: 'West Town',
    text: ''
  },
  {
    src: '/west-status/queue9/west13.jpg',
    date: 'Січень',
    title: 'West Town',
    text: ''
  },
  {
    src: '/west-status/queue9/west12.jpg',
    date: 'Січень',
    title: 'West Town',
    text: ''
  },
  {
    src: '/west-status/queue9/west9.jpg',
    date: 'Січень',
    title: 'West Town',
    text: ''
  },
  {
    src: '/west-status/queue9/west8.jpg',
    date: 'Січень',
    title: 'West Town',
    text: ''
  },
  {
    src: '/west-status/queue9/west7.jpg',
    date: 'Січень',
    title: 'West Town',
    text: ''
  },
]
const que10Data = [
  {
    src: '/west-status/queue10/november1.jpg',
    date: 'Січень',
    title: 'West Town',
    text: ''
  },
  {
    src: '/west-status/queue10/november2.jpg',
    date: 'Січень',
    title: 'West Town',
    text: ''
  },
  {
    src: '/west-status/queue10/november3.jpg',
    date: 'Січень',
    title: 'West Town',
    text: ''
  },
  {
    src: '/west-status/queue10/november4.jpg',
    date: 'Січень',
    title: 'West Town',
    text: ''
  },
  {
    src: '/west-status/queue10/que10-1.jpg',
    date: 'Січень',
    title: 'West Town',
    text: ''
  },
  {
    src: '/west-status/queue10/que10-2.jpg',
    date: 'Січень',
    title: 'West Town',
    text: ''
  },
  {
    src: '/west-status/queue10/que10-3.jpg',
    date: 'Січень',
    title: 'West Town',
    text: ''
  },
]
const beskidData = [
  {
    src: '/beskid-status/beskid-november1.jpg',
    date: 'Січень',
    title: 'BESKID HOME RESORT',
    text: '- КОТЕДЖ №2 - (січень) - виконуються внутрішні ремонтні роботи.'
  },
  {
    src: '/beskid-status/beskid-november2.jpg',
    date: 'Січень',
    title: 'BESKID HOME RESORT',
    text: '- КОТЕДЖ №3 - (січень) - виконуються внутрішні ремонтні роботи.'
  },
  {
    src: '/beskid-status/beskid-november3.jpg',
    date: 'Січень',
    title: 'BESKID HOME RESORT',
    text: '- стан будівництва за січень котеджі №4-9.'
  },
  {
    src: '/beskid-status/beskid-november4.jpg',
    date: 'Січень',
    title: 'BESKID HOME RESORT',
    text: '- стан будівництва за січень котеджі №4-9.'
  },
  {
    src: '/beskid-status/beskid-november5.jpg',
    date: 'Січень',
    title: 'BESKID HOME RESORT',
    text: '- стан будівництва за січень котеджі №4-9.'
  },
  {
    src: '/beskid-status/beskid-november6.jpg',
    date: 'Січень',
    title: 'BESKID HOME RESORT',
    text: '- стан будівництва за січень котеджі №4-9.'
  },
  {
    src: '/beskid-status/status-beskid1.jpg',
    date: 'Серпень',
    title: 'BESKID HOME RESORT',
    text: '- завершення фасадних робіт, монтаж перил та балконів у будинку №3.'
  },
  {
    src: '/beskid-status/status-beskid2.jpg',
    date: 'Серпень',
    title: 'BESKID HOME RESORT',
    text: '- встановлення підпірних колон під монолітну плиту - будинок №4-7.'
  },
  {
    src: '/beskid-status/status-beskid3.jpg',
    date: 'Серпень',
    title: 'BESKID HOME RESORT',
    text: '- здійснюються внутрішні ремонтні роботи у котеджі №2 (тип 1).'
  },
  {
    src: '/beskid-status/status-beskid4.jpg',
    date: 'Серпень',
    title: 'BESKID HOME RESORT',
    text: '- здійснюються електромонтажні роботи у котеджі №3 (тип 1).'
  },
]
function BuildingStatus() {
  const [isActive, setIsActive] = useState(true)
  const [firstSlider, setFirstSlider] = useState(false)
  const [secondSlider, setSecondSlider] = useState(false)
  const [thirdSlider, setThirdSlider] = useState(false)
  const [togglerBeskid, setTogglerBeskid] = useState(false)
  const [activeSlider, setActiveSlider] = useState(1)

  const handleClick = () => {
    setIsActive(!isActive)
  }
  const showSlider = (sliderNumber) => {
    setActiveSlider(sliderNumber)
  }

  const activeButtonClass = isActive ? 'status__button--active' : 'status__button'
  const buttonClass = isActive ? 'status__button' : 'status__button--active'

  const westTypeActive = isActive ? 'status__west' : 'status__west--hidden'
  const beskidTypeActive = isActive ? 'status__beskid--hidden' : 'status__beskid'

  return (
    <div className="status">
      <div className="status__types">
        <button className={activeButtonClass} onClick={handleClick}>West Town</button>
        <button className={buttonClass} onClick={handleClick}>Beskid Home Resort</button>
      </div>
      <div className={westTypeActive}>
        <div className="status__que">
          <p className="status__que-text">Черга:</p>
          <button className={activeSlider === 1 ? 'status__que-num--active' : 'status__que-num'} onClick={() => showSlider(1)}>8</button>
          <button className={activeSlider === 2 ? 'status__que-num--active' : 'status__que-num'} onClick={() => showSlider(2)}>9</button>
          <button className={activeSlider === 3 ? 'status__que-num--active' : 'status__que-num'} onClick={() => showSlider(3)}>10</button>
        </div>
        <div className={activeSlider === 1 ? '' : 'slider-hidden'} onClick={() => {setFirstSlider(!firstSlider)}}>
          <StatusSlider photos={que8Data}/>
        </div>
        <div className={activeSlider === 2 ? '' : 'slider-hidden'} onClick={() => {setSecondSlider(!secondSlider)}}>
          <StatusSlider photos={que9Data}/>
        </div>
        <div className={activeSlider === 3 ? '' : 'slider-hidden'} onClick={() => {setThirdSlider(!thirdSlider)}}>
          <StatusSlider photos={que10Data}/>
        </div>
        <div className={activeSlider === 4 ? '' : 'slider-hidden'} onClick={() => {setTogglerBeskid(!togglerBeskid)}}>
          <StatusSlider photos={que10Data}/>
        </div>
      </div>

      <div className={beskidTypeActive}>
        <StatusSlider photos={beskidData}/>
      </div>
    </div>
  )
}

export default BuildingStatus