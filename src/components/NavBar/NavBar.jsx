import css from './NavBar.module.css';
import React from 'react';
import logo from '../../assets/default-logo.png';
import { Link } from 'react-router-dom';

export const NavBar = () => {
  return (
    <div className={css.container}>
      <img src={logo} className={css.logo}/>
      <ul className={css.navButtons}>
        <li className={css.navLink}><Link to='/'>Inicio</Link></li>
        <li className={css.navLink}><Link to='/sobremi'>Sobre Mi</Link></li>
        <li className={css.navLink}><Link to='/curso'>Curso</Link></li>
        <li className={css.navLink}><Link to='/contacto'>Contacto</Link></li>
        <li className={css.navLink}><Link to='/podcast'>Podcast</Link></li>
      </ul>
    </div>
  )
}
