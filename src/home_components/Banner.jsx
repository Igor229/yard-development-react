import mainVideo from '../assets/videos/main-video.MP4'
import './Banner.scss'

function Banner() {

  return (
    <section className="home-banner">
      <video src={mainVideo} poster typeof='video/mp4' className='home-banner__video' autoPlay playsInline loop muted/>

      <div className="home-banner__info">
        <h1 className="home-banner__info-title">Yard Development</h1>
        <p className="home-banner__info-text">БУДУЄМО КОТЕДЖНЕ МІСТЕЧКО ТАУНХАУСІВ У <br/> КРИХІВЦЯХ - WEST TOWNТА КОМПЛЕКС BESKID <br/> HOME RESORT У БУКОВЕЛІ.</p>

        <div className="home-banner__info-actions">
          <button className="main-button home-banner__info-button">BESKID HOME RESORT</button>
          <button className="west-button home-banner__info-button">WEST TOWN</button>
        </div>
      </div>
    </section>
  )
}

export default Banner