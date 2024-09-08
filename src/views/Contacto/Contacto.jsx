import css from './Contacto.module.css';
import { NavBar } from '../../components/NavBar/NavBar'
import { Footer } from '../../components/Footer/Footer'
import personaapunta from '../../assets/personaapunta.png';
import email from '../../assets/email.png';
import fbLogo from "../../assets/facebook.svg";
import waLogo from "../../assets/whatsapp.svg";
import ttLogo from "../../assets/tiktok.svg";
import igLogo from "../../assets/instagram.svg";
import { Link } from 'react-router-dom';

export const Contacto = () => {

  return (
    <>
      <NavBar/>
      <section className={css.firstModule}>
        <img src={personaapunta} className={css.photo} />
        <div className={css.firstRight}>
          <h2 className={css.title}>Contacto</h2>
          <div className={css.blockRedes}>
            <div className={css.red}>
              <img className={css.logo} src={fbLogo}/>
              <h6>Facebook</h6>
            </div>
            <div className={css.red}>
              <img className={css.logo} src={waLogo}/>
              <h6>WhatsApp</h6>
            </div>
            <div className={css.red}>
              <img className={css.logo} src={ttLogo}/>
              <h6>TikTok</h6>
            </div>
            <div className={css.red}>
              <img className={css.logo} src={igLogo}/>
              <h6>Instagram</h6>
            </div>
          </div>
        </div>
      </section>
      <section className={css.firstModule}>
        <div className={css.firstRight}>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, reprehenderit pariatur cupiditate nemo mollitia similique dicta voluptatem rem officiis, error libero accusamus repellendus quis quaerat! Obcaecati, vitae? Quas obcaecati expedita amet dolore debitis rerum, asperiores labore harum blanditiis, alias cum. <br/><br/>Dignissimos, commodi error. Suscipit perspiciatis veritatis, reprehenderit rerum, iure eligendi ducimus consequatur iusto fugiat voluptates doloremque necessitatibus illum praesentium est?</p>
          <br/>
          <Link to='/contacto' className={css.btnContacto}>Contacto</Link>
        </div>
        <img src={email} className={css.email} />
      </section>
      <Footer/>
    </>
  )
}
