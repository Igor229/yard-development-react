import Banner from "../home_components/Banner"
import WestCard from "../home_components/WestCard"
import BeskidCard from "../home_components/BeskidCard"
import Feedbacks from "../home_components/Feedbacks"
import BuildingStatus from "../home_components/BuldingStatus"
import News from "../home_components/News"
import './Home.scss'

const feedbacksData = [
  {
    icon: 'Bogdan-icon',
    name: 'Богдан',
    text: 'Наприкінці весни ми побачили рекламу від West Town в соц.мережах і зацікавились цим варіантом. На наступний день поїхали на огляд таун-хаусів і одразу на місці було прийнято рішення про купівлю. Нас дуже вразили темпи і якість будівництва, а також планування і дизайн будинків. І не останню роль зіграло вдале місцерозташування містечка. З нетерпінням чекаємо на початок ремонту і переїзд до West Town.'
  },
  {
    icon: 'Liliya-icon',
    name: 'Лілія',
    text: 'Обрали WEST TOWN тому що: Зручне розташування ,поруч школа ,дитячий садок ,близько до магазинів ,і дуже спокійно) Чудовий дизайн будиночків ,нагадує Америку ) +Класна ціна за такий будинок з подвір’ям (заднім та переднім )Для сім’ї з дітками ідеально ) Безліч місця ) Ми дуже задоволені ♥'
  },
  {
    icon: 'Nataliya-icon',
    name: 'Наталя',
    text: 'Обрали містечко Вест Таун, оскільки сподобалось все, починаючи від локації, закінчуючи ціною та вигідним розтермінування. Ми придбали таунхаус в розтермінування на 2 роки і сплачуємо за все готовий будинок, таким чином ми в безпеці та спокійні за своє житло. З нетерпінням чекаємо на ремонтні роботи у власному будинку.'
  },
  {
    icon: 'Olexandr-icon',
    name: 'Олександр',
    text: 'Наприкінці весни ми побачили рекламу від West Town в соц.мережах і зацікавились цим варіантом. На наступний день поїхали на огляд таун-хаусів і одразу на місці було прийнято рішення про купівлю. Нас дуже вразили темпи і якість будівництва, а також планування і дизайн будинків. І не останню роль зіграло вдале місцерозташування містечка. З нетерпінням чекаємо на початок ремонту і переїзд до West Town.'
  },
  {
    icon: 'Taras-icon',
    name: 'Тарас',
    text: 'Ціна, якість, розташування, відповідальність та порядність будівельної компанії. Рекомендую!👌'
  },
]

function Home() {
  return (
    <>
      <Banner/>
      <div className="wrapper">
        <section className="complexes section">
          <h1 className="main-title">Наші Комплекси</h1>
          <WestCard/>
          <BeskidCard/>
          <Feedbacks data={feedbacksData}/>
        </section>

        <section className="buildStatus section">
          <h1 className="main-title">Стан будівництва</h1>
          <BuildingStatus/>
        </section>

        <section className="news section">
          <h1 className="main-title">Новини</h1>
          <News/>
        </section>
      </div>
    </>
  )
}

export default Home