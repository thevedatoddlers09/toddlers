"use client";

import { useState, useEffect } from 'react';
import Button from './Button';
import styles from './HeroCarousel.module.css';

const slides = [
    {
        id: 1,
        title: { main: "Big Futures", accent: "Start Small" },
        subtitle: "Nurturing young minds with a blend of modern curriculum and traditional values.",
        cta: "Find a Center",
        image: "https://images.unsplash.com/photo-1545665277-5937bf8607e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80", // Happy kid running
        bgGradient: "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3))"
    },
    {
        id: 2,
        title: { main: "Award Winning", accent: "Curriculum" },
        subtitle: "Our Seven Petal approach ensures holistic development for every child.",
        cta: "Explore Programs",
        image: "https://images.unsplash.com/photo-1503919545885-7f4ab0213719?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80", // Kids painting/learning
        bgGradient: "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3))"
    },
    {
        id: 3,
        title: { main: "Safe & Secure", accent: "Environment" },
        subtitle: "CCTV monitored campuses with child-safe infrastructure and loving teachers.",
        cta: "Visit Us",
        image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80", // Teacher with kids
        bgGradient: "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3))"
    }
];

export default function HeroCarousel() {
    const [currentSlide, setCurrentSlide] = useState(0);

    // Auto-play
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    return (
        <div className={styles.carouselContainer}>
            {slides.map((slide, index) => (
                <div
                    key={slide.id}
                    className={`${styles.slide} ${index === currentSlide ? styles.active : ''}`}
                    style={{
                        backgroundImage: slide.image ? `${slide.bgGradient}, url(${slide.image})` : slide.bgGradient,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}
                >
                    <div className={styles.content}>
                        <h1 className={styles.title}>
                            {slide.title.main} <span>{slide.title.accent}</span>
                        </h1>
                        <p className={styles.subtitle}>{slide.subtitle}</p>
                        <Button size="large" className="cta-button">
                            {slide.cta}
                        </Button>
                    </div>
                </div>
            ))}

            {/* Navigation Controls */}
            <button className={`${styles.arrow} ${styles.prev}`} onClick={prevSlide}>&#8249;</button>
            <button className={`${styles.arrow} ${styles.next}`} onClick={nextSlide}>&#8250;</button>

            <div className={styles.controls}>
                {slides.map((_, index) => (
                    <button
                        key={index}
                        className={`${styles.dot} ${index === currentSlide ? styles.active : ''}`}
                        onClick={() => goToSlide(index)}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}
