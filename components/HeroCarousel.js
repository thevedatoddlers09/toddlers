"use client";

import { useState, useEffect } from 'react';
import Button from './Button';

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
    },
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
        <div className="relative w-full h-[calc(100vh-80px)] min-h-[600px] overflow-hidden bg-gray-100">
            {slides.map((slide, index) => (
                <div
                    key={slide.id}
                    className={`absolute top-0 left-0 w-full h-full flex items-center justify-center text-center px-[5%] transition-opacity duration-1000 ease-in-out bg-cover bg-center ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0'}`}
                    style={{
                        backgroundImage: slide.image ? `${slide.bgGradient}, url(${slide.image})` : slide.bgGradient,
                    }}
                >
                    <div className="relative z-20 max-w-4xl animate-[fadeInUp_0.8s_ease-out]">
                        <h1 className="text-4xl md:text-6xl text-white mb-6 drop-shadow-md font-extrabold font-poppins">
                            {slide.title.main} <span className="text-brand-red">{slide.title.accent}</span>
                        </h1>
                        <p className="text-lg md:text-2xl text-text-main mb-10 font-opensans bg-white/80 px-4 py-2 rounded-xl inline-block drop-shadow-sm">
                            {slide.subtitle}
                        </p>
                        <div>
                            <Button size="large" className="cta-button">
                                {slide.cta}
                            </Button>
                        </div>
                    </div>
                </div>
            ))}

            {/* Navigation Controls */}
            <button
                className="hidden md:flex absolute top-1/2 -translate-y-1/2 left-8 bg-white/50 border-none w-12 h-12 rounded-full items-center justify-center text-2xl cursor-pointer z-20 hover:bg-white/90 transition-colors text-brand-blue"
                onClick={prevSlide}
            >
                &#8249;
            </button>
            <button
                className="hidden md:flex absolute top-1/2 -translate-y-1/2 right-8 bg-white/50 border-none w-12 h-12 rounded-full items-center justify-center text-2xl cursor-pointer z-20 hover:bg-white/90 transition-colors text-brand-blue"
                onClick={nextSlide}
            >
                &#8250;
            </button>

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-4 z-20">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        className={`w-3 h-3 rounded-full border-none cursor-pointer transition-all duration-300 ${index === currentSlide ? 'bg-brand-red scale-125' : 'bg-black/20 hover:bg-black/40'}`}
                        onClick={() => goToSlide(index)}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}
