import './Footer.scss'
import footerLogo from '../assets/images/footer-logo.png'
import facebookIcon from '../assets/icons/Facebook.png'
import instagramIcon from '../assets/icons/instagram.png'
import tikTokIcon from '../assets/icons/Tiktok.png'

const cardData = [
  {
    title: 'Наші комплекси',
    firstLink: 'BESKID HOME RESORT',
    secondLink: 'WEST TOWN'
  },
  {
    title: 'Yard Development',
    firstLink: 'Новини',
    secondLink: 'Стан будівництва'
  },
  {
    title: 'Контактна інформація',
    firstLink: '+380 (98) 22 55 800 (Viber, Telegram, Messenger)',
    secondLink: 'yarddevelopment34@gmail.com'
  },
]

function FooterCard(props) {
  const {title, firstLink, secondLink} = props
  return (
    <div className="footer__card">
      <h4 className="footer__card-title">{title}</h4>
      <a href='/' className="footer__card-link">{firstLink}</a>
      <a href='/' className="footer__card-link">{secondLink}</a>
  </div>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="wrapper">
      <div className="footer__content">
        <div className="footer__card">
          <img src={footerLogo} alt="footer-logo" className="footer__logo" />
        </div>
        {cardData.map((item, index) => {
          return (
            <FooterCard key = {index} {...item}/>
          )
        })}
      </div>

      <div className="footer__content">
        <p className="footer__rights">© 2023 | Всі права захищено</p>
        <div className="footer__socials">
          <a href="https://www.instagram.com/yard.development/" target='_blank' className="footer__socials-link"><img src={facebookIcon} alt="facebook-icon" className="social-link" /></a>
          <a href="https://www.facebook.com/people/YARD-development/100093522396873/" target='_blank' className="footer__socials-link"><img src={instagramIcon} alt="instagram-icon" className="social-link" /></a>
          <a href="https://www.tiktok.com/@yarddevelopment?_t=8eAdRa2Vt5B&_r=1" target='_blank' className="footer__socials-link"><img src={tikTokIcon} alt="tik-tok-icon" className="social-link" /></a>
        </div>
      </div>
      </div>
    </footer>
  )
}

export default Footer