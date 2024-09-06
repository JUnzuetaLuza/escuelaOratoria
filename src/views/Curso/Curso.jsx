import css from './Curso.module.css';
import { NavBar } from '../../components/NavBar/NavBar'
import { Footer } from '../../components/Footer/Footer'
import persona from '../../assets/persona.png';
import inspiration from '../../assets/inspiration.png';
import think from '../../assets/think.png';


export const Curso = () => {

  return (
    <>
      <NavBar/>
      <section className={css.firstModule}>
        <div className={css.firstRight}>
          <h2 className={css.title}>Curso</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, reprehenderit pariatur cupiditate nemo mollitia similique dicta voluptatem rem officiis, error libero accusamus repellendus quis quaerat! Obcaecati, vitae? Quas obcaecati expedita amet dolore debitis rerum, asperiores labore harum blanditiis, alias cum. Dignissimos, commodi error. Suscipit perspiciatis veritatis, reprehenderit rerum, iure eligendi ducimus consequatur iusto fugiat voluptates doloremque necessitatibus illum praesentium est?</p>
        </div>
        <img src={persona} className={css.photo} />
      </section>
      <section className={css.firstModule}>
        <img src={persona} className={css.photo} />
        <div className={css.firstRight}>
          <h2 className={css.title}>Curso</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, reprehenderit pariatur cupiditate nemo mollitia similique dicta voluptatem rem officiis, error libero accusamus repellendus quis quaerat! Obcaecati, vitae? Quas obcaecati expedita amet dolore debitis rerum, asperiores labore harum blanditiis, alias cum. Dignissimos, commodi error. Suscipit perspiciatis veritatis, reprehenderit rerum, iure eligendi ducimus consequatur iusto fugiat voluptates doloremque necessitatibus illum praesentium est?</p>
          <button className={css.btnCurso}>Curso</button>
        </div>
      </section>
      <Footer/>
    </>
  )
}
