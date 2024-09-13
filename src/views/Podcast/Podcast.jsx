import css from './Podcast.module.css'
import { NavBar } from '../../components/NavBar/NavBar'
import { Footer } from '../../components/Footer/Footer'
import personahuh from '../../assets/personahuh.png';
import { Link } from 'react-router-dom';

export const Podcast = () => {

  return (
    <>
      <NavBar/>
      <section className={css.firstModule}>
        <div className={css.firstRight}>
          <h2 className={css.title}>Podcast</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, reprehenderit pariatur cupiditate nemo mollitia similique dicta voluptatem rem officiis, error libero accusamus repellendus quis quaerat! Obcaecati, vitae? Quas obcaecati expedita amet dolore debitis rerum, asperiores labore harum blanditiis, alias cum.<br/><br/> Dignissimos, commodi error. Suscipit perspiciatis veritatis, reprehenderit rerum, iure eligendi ducimus consequatur iusto fugiat voluptates doloremque necessitatibus illum praesentium est?</p>
        </div>
        <img src={personahuh} className={css.photo} />
      </section>
      <section className={css.secondModule}>
          <h2 className={css.title}>Ultimo Capítulo</h2>
          <iframe 
            src="https://player.twitch.tv/?channel=qwerstda&localhost:5173&muted=true"
            height="315"
            width="560"
            frameborder="0"
            allowfullscreen>
          </iframe>
          <Link to='https://www.twitch.tv/qwerstda' target='_blank' className={css.btnSeguir}>Sígueme</Link>
      </section>
      <Footer/>
    </>
  )
}
