import css from './Curso.module.css';
import { NavBar } from '../../components/NavBar/NavBar'
import { Footer } from '../../components/Footer/Footer'
import personamic from '../../assets/personamic.png';
import persons from '../../assets/persons.png';
import { Link } from 'react-router-dom';


export const Curso = () => {

  return (
    <>
      <NavBar/>
      <section className={css.firstModule}>
        <div className={css.firstRight}>
          <h2 className={css.title}>Curso</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, reprehenderit pariatur cupiditate nemo mollitia similique dicta voluptatem rem officiis, error libero accusamus repellendus quis quaerat! Obcaecati, vitae? Quas obcaecati expedita amet dolore debitis rerum, asperiores labore harum blanditiis, alias cum.<br/><br/> Dignissimos, commodi error. Suscipit perspiciatis veritatis, reprehenderit rerum, iure eligendi ducimus consequatur iusto fugiat voluptates doloremque necessitatibus illum praesentium est?</p>
        </div>
        <img src={personamic} className={css.photo} />
      </section>
      <section className={css.firstModule}>
        <img src={persons} className={css.photo} />
        <div className={css.firstRight}>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, reprehenderit pariatur cupiditate nemo mollitia similique dicta voluptatem rem officiis, error libero accusamus repellendus quis quaerat! Obcaecati, vitae? Quas obcaecati expedita amet dolore debitis rerum, asperiores labore harum blanditiis, alias cum. <br/><br/>Dignissimos, commodi error. Suscipit perspiciatis veritatis, reprehenderit rerum, iure eligendi ducimus consequatur iusto fugiat voluptates doloremque necessitatibus illum praesentium est?</p>
          <br/>
          <Link to='/contacto' className={css.btnContacto}>Contacto</Link>
        </div>
      </section>
      <Footer/>
    </>
  )
}
