import css from './SobreMi.module.css';
import { NavBar } from '../../components/NavBar/NavBar';
import { Footer } from '../../components/Footer/Footer';
import persona from '../../assets/persona.png';
import inspiration from '../../assets/inspiration.png';
import think from '../../assets/think.png';
import { Link } from 'react-router-dom';

export const SobreMi = () => {

  return (
    <>
      <NavBar/>
      <section className={css.firstModule}>
        <img src={persona} className={css.photo} />
        <div className={css.firstRight}>
          <h2 className={css.title}>Sobre Mi</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, reprehenderit pariatur cupiditate nemo mollitia similique dicta voluptatem rem officiis, error libero accusamus repellendus quis quaerat! Obcaecati, vitae? Quas obcaecati expedita amet dolore debitis rerum, asperiores labore harum blanditiis, alias cum. Dignissimos, commodi error. Suscipit perspiciatis veritatis, reprehenderit rerum, iure eligendi ducimus consequatur iusto fugiat voluptates doloremque necessitatibus illum praesentium est?</p>
        </div>
      </section>
      <section className={css.secondModule}>
        <div className={css.subModule}>
          <img src={inspiration} className={css.subPhoto} />
          <p className={css.sideText}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe quisquam ipsa nam reprehenderit ipsum eligendi iste deleniti ullam, reiciendis ea.</p>
        </div>
        <div className={css.subModule}>
          <p className={css.sideText}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe quisquam ipsa nam reprehenderit ipsum eligendi iste deleniti ullam, reiciendis ea.</p>
          <img src={think} className={css.subPhoto} />
        </div>
        <Link to='/curso' className={css.btnCurso}>Curso</Link>
      </section>
      <Footer/>
    </>
  )
}
