import css from './SobreMi.module.css';
import { NavBar } from '../../components/NavBar/NavBar';
import { Footer } from '../../components/Footer/Footer';
import persona from '../../assets/persona.png';

export const SobreMi = () => {

  return (
    <>
      <NavBar/>
      <section class={css.firstModule}>
        <img src={persona} className={css.photo} />
        <div>
          <h2>Sobre Mi</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, reprehenderit pariatur cupiditate nemo mollitia similique dicta voluptatem rem officiis, error libero accusamus repellendus quis quaerat! Obcaecati, vitae? Quas obcaecati expedita amet dolore debitis rerum, asperiores labore harum blanditiis, alias cum. Dignissimos, commodi error. Suscipit perspiciatis veritatis, reprehenderit rerum, iure eligendi ducimus consequatur iusto fugiat voluptates doloremque necessitatibus illum praesentium est?</p>
        </div>
      </section>
      <Footer/>
    </>
  )
}
