import css from './Carousel.module.css';
import React, { useState } from 'react';
import SobreMi from "../../assets/SobreMi.jpg";
import Curso from "../../assets/Curso.jpg";
import Contacto from "../../assets/Contacto.jpg";
import Podcast from "../../assets/Podcast.jpg";
import { dataInicio } from "../../data/InicioData";
import { Link } from 'react-router-dom';

export const Carousel = () => {

    const [currentSlide, setCurrentSlide] = useState(0);

    const showSlide = (index) => {
        if(index >= dataInicio.length){
            setCurrentSlide(0);
        } else if(index < 0){
            setCurrentSlide(dataInicio.length - 1);
        } else {
            setCurrentSlide(index);
        }
    }

    const nextSlide = () => {
        showSlide(currentSlide + 1);
    }
    const prevSlide = () => {
        showSlide(currentSlide - 1);
    }

    const containerBackground = {
        backgroundImage: `url(${dataInicio[currentSlide].photo})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        filter: 'blur(10px)',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
    }

    return (
        <div className={css.container} >
            <div style={containerBackground}></div>
            <div className={css.carouselInner} style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                {dataInicio.map((slide, index) => (
                    <div className={css.carouselItem} key={index}>
                        <img src={slide.photo} alt={`Imagen ${index + 1}`} />
                        <div className={css.card} style={{left: `${(currentSlide % 2) * 25 + 25}%`}}>
                            <h2 className={css.titleCard}>{slide.title}</h2>
                            <p className={css.contentCard}>{slide.description}</p>
                            <Link to={`/${slide.link}`} className={css.buttonCard}>Conoce más</Link>
                        </div>
                    </div>
                ))}
            </div>
            <button className={css.carouselControl} onClick={prevSlide}>&#10094;</button>
            <button className={css.carouselControl} onClick={nextSlide}>&#10095;</button>
        </div>
    )
}