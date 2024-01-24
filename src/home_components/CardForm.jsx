import './ComplexCard.scss'

function FormCard() {
  return (
    <form className='form'>
      <h1 className="form-title">Отримати розрахунок розтермінування</h1>
      <div className="form__container">
        <input type="tel" className="form__container-input form__container-item" placeholder='Номер телефону'/>
        <input type="name" className="form__container-input form__container-item" placeholder="Ваше ім'я"/>
        <button className="main-button form-button form__container-item">Відправити</button>
      </div>
    </form>
  )
}

export default FormCard