import css from './NavBar.module.css';
import React from 'react';
import logo from '../../assets/default-logo.png';

export const NavBar = () => {
  return (
    <div className={css.container}>
      <img src={logo} />
      <ul>
        <li>Inicio</li>
        <li>Sobre Mi</li>
        <li>Curso</li>
        <li>Contacto</li>
        <li>Podcast</li>
      </ul>
    </div>
  )
}
