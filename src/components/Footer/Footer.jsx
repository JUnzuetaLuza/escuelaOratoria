import css from './Footer.module.css';
import React from "react";
import fbLogo from "../../assets/facebook.svg";
import waLogo from "../../assets/whatsapp.svg";
import ttLogo from "../../assets/tiktok.svg";
import igLogo from "../../assets/instagram.svg";

export const Footer = () => {
    return (
        <div className={css.container}>
            <div className={css.middleLeft}>
                <div className={css.quarterLeft}>
                    <b>Contacto</b>
                    <p>+51 999888777</p>
                    <p>dbarrutiac@gmail.com</p>
                </div>
                <div className={css.quarterRight}>
                    <b>Dirección</b>
                    <p>Jr. Lima 555 - Surco</p>
                    <p>Lima, Perú</p>
                </div>
            </div>
            <div className={css.middleRight}>
                <div className={css.socialMedia}>
                    <img className={css.smallLogo} src={fbLogo}/>
                    <img className={css.smallLogo} src={waLogo}/>
                    <img className={css.smallLogo} src={igLogo}/>
                    <img className={css.smallLogo} src={ttLogo}/>
                </div>
                <p>©2024 EscuelaOratoria. Todos los derechos reservados.</p>
            </div>
        </div>
    )
}