import { useState } from 'react'
import Modal from './Modal'
import mainLogo from '../assets/images/main-logo-white.png'
import menuOpen from '../assets/icons/menu-open.svg'
import menuClose from '../assets/icons/menu-close.svg'
import tiktokIcon from '../assets/icons/tiktok.svg'
import icons from '../assets/icons/sprite.svg'
import './Header.scss'
import '../App.scss'

function Header() {
  const [burger_class, setBurgerClass] = useState("burger__menu")
  const [burger_icon, setBurgerIcon] = useState(menuOpen)
  const [isClicked, setIsClicked] = useState(false)
  const showBurger = () => {
      if (!isClicked) {
          setBurgerClass("burger__menu showMenu")
          setIsClicked(true)
          setBurgerIcon(menuClose)
          document.body.style.overflow = 'hidden'
          setColor(true)
      } else {
          setBurgerClass("burger__menu")
          setIsClicked(false)
          setBurgerIcon(menuOpen)
          document.body.style.overflow = 'auto'
      }
  }

  const [modalActive, setModalActive] = useState(false)
  const [color, setColor] = useState(false) // for background color while scrolling
  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor(true)
    } else {
      setColor(false)
    }
  }
  window.addEventListener('scroll', changeColor)
  
  return (
    <>
      <Modal active={modalActive} setActive={setModalActive}/>
      <header className={color ? 'header header--active' : 'header'}>

      {/* ============= B U R G E R    M E N U ============= */}
      <div className='burger'>
        <div className="burger__items">
          <div className="humburger">
            <img src={burger_icon} alt="menu-open" className="burger__items-icon menuIcon" onClick={showBurger}/>
            <img src={burger_icon} alt="menu-close" className="burger__items-icon closeIcon" onClick={showBurger}/>
          </div> 
          <a href='#'><img src={mainLogo} alt="main-logo" className="header__items-logo"/></a>
        </div>

        <div className={burger_class}>
          <div className="burger__container">
            <h4 className="burger__menu-title">Замовити індивідуальну консультацію</h4>

            <form className="burger__menu-actions">
              <input className="burger-input" type="tel" name="phone" maxLength="13" placeholder="Номер телефону" required/>
              <button className="burger-button main-button">Замовити</button>
            </form>

            <div className="burger__menu-contacts">
              <div className="contacts__container">
                <h4 className="contacts__container-title">Yard Development</h4>
                <a href="#" className="contacts__container-text burger-link" onClick={showBurger}>Головна</a>
                <a href="#beskid-home" className="contacts__container-text burger-link" onClick={showBurger}>BESKID HOME RESORT</a>
                <a href="#west-town" className="contacts__container-text burger-link" onClick={showBurger}>WEST TOWN</a>
                <a className="contacts__container-text burger-link">Стан будівництва</a>
                <a className="contacts__container-text burger-link">Новини</a>
              </div>

              <div className="contacts__container">
                <h4 className="contacts__container-title">Контактна інформація</h4>
                <a href="#" className="contacts__container-text">+380 (98) 22 55 800 (Viber, Telegram, Messenger)</a>
                <a href="#" className="contacts__container-text">yarddevelopment34@gmail.com</a>

                <div className="footer__actions-socials burger__socials">
                  <a href="https://www.instagram.com/yard.development/" target="_blank" onClick={showBurger}>
                      <svg className="social-icon">
                          <use href={icons + '#instagram'}></use>
                      </svg>
                  </a>

                  <a href="https://www.facebook.com/profile.php?id=100093522396873" target="_blank" onClick={showBurger}>
                      <svg className="social-icon">
                          <use href={icons + '#facebook'}></use>
                      </svg>
                  </a>

                  <a href="https://www.tiktok.com/@yarddevelopment?_t=8eAdRa2Vt5B&_r=1" target="_blank" onClick={showBurger}>
                      <img src={tiktokIcon} alt='tiktok' className="tiktok-icon" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>


      {/* ============= N A T I V E    M E N U ============= */}
      <div className='header__items'>
        <img src={mainLogo} alt='main-logo' className='header__logo'/>

        <nav className='header__nav'>
          <li className='header__nav-item'><a href='/#'>ГОЛОВНА</a></li>
          <li className='header__nav-item'><a href='/#'>WEST TOWN</a></li>
          <li className='header__nav-item'><a href='/#'>BESKID HOME RESORTE</a></li>
          <li className='header__nav-item'><a href='/#'>СТАН БУДІВНИЦТВА</a></li>
          <li className='header__nav-item'><a href='/#'>НОВИНИ</a></li>
        </nav>

        <div className="header__actions">
          <a href='tel:+380982255800' className="header__phoneNumber">+380 (98) 22 55 800</a>
          <button className="main-button header__actions-button" onClick={() => setModalActive(true)}>Замовити дзвінок</button>
        </div>
      </div>
    </header>
    </>
  )
}

export default Header