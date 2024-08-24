import css from './Carrousel.module.css';
import React, { useState } from 'react';
import SobreMi from "../../assets/SobreMi.jpg";
import Curso from "../../assets/Curso.jpg";
import Contacto from "../../assets/Contacto.jpg";
import Podcast from "../../assets/Podcast.jpg";

export const Carrousel = () => {

    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        SobreMi,
        Curso,
        Contacto,
        Podcast
    ]

    const showSlide = (index) => {
        if(index >= slides.length){
            setCurrentSlide(0);
        } else if(index < 0){
            setCurrentSlide(slides.length - 1);
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

    return (
        <div className={css.container}>
            <div className={css.carouselInner} style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                {slides.map((slide, index) => (
                    <div className={css.carouselItem} key={index}>
                        <img src={slide} alt={`Imagen ${index + 1}`} />
                    </div>
                ))}
            </div>
            <button className={css.carouselControl} onClick={prevSlide}>&#10094;</button>
            <button className={css.carouselControl} onClick={nextSlide}>&#10095;</button>
        </div>
    )
}