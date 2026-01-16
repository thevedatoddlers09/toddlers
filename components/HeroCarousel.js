"use client";

import { useState, useEffect, useRef } from 'react';
import Button from './Button';
import gsap from 'gsap';

const slides = [
    {
        id: 1,
        title: { main: "", accent: "" },
        subtitle: "",
        cta: "",
        image: "/images/carousel-event-1.jpg",
    },
    {
        id: 2,
        title: { main: "", accent: "" },
        subtitle: "",
        cta: "",
        image: "/images/carousel-event-2.jpg",
    },
    {
        id: 3,
        title: { main: "", accent: "" },
        subtitle: "",
        cta: "",
        image: "/images/carousel-event-3.jpg",
    },
];

export default function HeroCarousel() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const contentRef = useRef(null);

    // Auto-play
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    // GSAP animation on slide change
    useEffect(() => {
        if (contentRef.current) {
            gsap.fromTo(
                contentRef.current,
                { opacity: 0, y: 30 },
                { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }
            );
        }
    }, [currentSlide]);

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
        <div className="relative w-full h-[calc(100vh-80px)] min-h-[500px] overflow-hidden bg-veda-background-muted">
            {slides.map((slide, index) => {
                const hasText = slide.title.main || slide.title.accent || slide.subtitle;
                return (
                    <div
                        key={slide.id}
                        className={`absolute top-0 left-0 w-full h-full flex items-center justify-center text-center px-[3%] transition-opacity duration-700 ease-out bg-cover bg-center ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0'}`}
                        style={{
                            backgroundImage: hasText
                                ? `linear-gradient(to bottom, rgba(62, 42, 79, 0.5), rgba(42, 27, 56, 0.7)), url(${slide.image})`
                                : `url(${slide.image})`,
                        }}
                    >
                        <div ref={index === currentSlide ? contentRef : null} className="relative z-20 max-w-3xl">
                            <h1 className="text-3xl md:text-5xl text-white mb-5 font-bold font-poppins leading-tight">
                                {slide.title.main} <span className="text-veda-accent">{slide.title.accent}</span>
                            </h1>
                            <p className="text-base md:text-lg text-white/90 mb-8 font-opensans max-w-2xl mx-auto">
                                {slide.subtitle}
                            </p>
                            {slide.cta && (
                                <div>
                                    <Button variant="primary" shape="pill">
                                        {slide.cta}
                                    </Button>
                                </div>
                            )}
                        </div>
                    </div>
                )
            })}

            {/* Navigation Controls */}
            <button
                className="hidden md:flex absolute top-1/2 -translate-y-1/2 left-6 bg-white/20 backdrop-blur-sm border-none w-11 h-11 rounded-xl items-center justify-center text-xl cursor-pointer z-20 hover:bg-white/40 transition-colors text-white"
                onClick={prevSlide}
            >
                &#8249;
            </button>
            <button
                className="hidden md:flex absolute top-1/2 -translate-y-1/2 right-6 bg-white/20 backdrop-blur-sm border-none w-11 h-11 rounded-xl items-center justify-center text-xl cursor-pointer z-20 hover:bg-white/40 transition-colors text-white"
                onClick={nextSlide}
            >
                &#8250;
            </button>

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        className={`w-2.5 h-2.5 rounded-full border-none cursor-pointer transition-all duration-300 ${index === currentSlide ? 'bg-veda-accent scale-125' : 'bg-white/30 hover:bg-white/50'}`}
                        onClick={() => goToSlide(index)}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}
