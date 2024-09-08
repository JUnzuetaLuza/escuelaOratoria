import { NavBar } from '../../components/NavBar/NavBar'
import { Footer } from '../../components/Footer/Footer'

export const Podcast = () => {

  return (
    <>
      <NavBar/>
      <section className={css.firstModule}>
        <img src={personahuh} className={css.photo} />
        <div className={css.firstRight}>
          <h2 className={css.title}>Curso</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, reprehenderit pariatur cupiditate nemo mollitia similique dicta voluptatem rem officiis, error libero accusamus repellendus quis quaerat! Obcaecati, vitae? Quas obcaecati expedita amet dolore debitis rerum, asperiores labore harum blanditiis, alias cum.<br/><br/> Dignissimos, commodi error. Suscipit perspiciatis veritatis, reprehenderit rerum, iure eligendi ducimus consequatur iusto fugiat voluptates doloremque necessitatibus illum praesentium est?</p>
        </div>
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
