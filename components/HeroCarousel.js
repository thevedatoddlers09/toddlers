"use client";

import { useState, useEffect, useRef, useCallback } from 'react';
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
    const carouselRef = useRef(null);
    const touchStartRef = useRef({ x: 0, y: 0 });
    const touchEndRef = useRef({ x: 0, y: 0 });
    const isSwiping = useRef(false);
    const autoPlayRef = useRef(null);

    const nextSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, []);

    const prevSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    }, []);

    const goToSlide = useCallback((index) => {
        setCurrentSlide(index);
    }, []);

    // Reset auto-play timer (restarts after user interaction)
    const resetAutoPlay = useCallback(() => {
        if (autoPlayRef.current) clearInterval(autoPlayRef.current);
        autoPlayRef.current = setInterval(() => {
            setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
        }, 5000);
    }, []);

    // Auto-play
    useEffect(() => {
        resetAutoPlay();
        return () => {
            if (autoPlayRef.current) clearInterval(autoPlayRef.current);
        };
    }, [resetAutoPlay]);

    // GSAP animation on slide change
    useEffect(() => {
        if (contentRef.current) {
            gsap.fromTo(
                contentRef.current,
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }
            );
        }
    }, [currentSlide]);

    // Touch/Swipe handlers for mobile
    const handleTouchStart = useCallback((e) => {
        touchStartRef.current = {
            x: e.touches[0].clientX,
            y: e.touches[0].clientY,
        };
        isSwiping.current = false;
    }, []);

    const handleTouchMove = useCallback((e) => {
        touchEndRef.current = {
            x: e.touches[0].clientX,
            y: e.touches[0].clientY,
        };
        const diffX = Math.abs(touchStartRef.current.x - touchEndRef.current.x);
        const diffY = Math.abs(touchStartRef.current.y - touchEndRef.current.y);
        // Only prevent scroll if horizontal swipe is dominant
        if (diffX > diffY && diffX > 10) {
            isSwiping.current = true;
            e.preventDefault();
        }
    }, []);

    const handleTouchEnd = useCallback(() => {
        if (!isSwiping.current) return;
        const diffX = touchStartRef.current.x - touchEndRef.current.x;
        const swipeThreshold = 50;
        if (Math.abs(diffX) > swipeThreshold) {
            if (diffX > 0) {
                nextSlide();
            } else {
                prevSlide();
            }
            resetAutoPlay();
        }
    }, [nextSlide, prevSlide, resetAutoPlay]);

    return (
        <div
            ref={carouselRef}
            className="relative w-full overflow-hidden bg-[#2a1b38]"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
        >
            {/* Aspect ratio wrapper: 16:9 on mobile, full viewport on large */}
            <div className="relative w-full aspect-[16/9] md:aspect-auto md:h-[80vh] lg:h-[calc(100vh-80px)] md:min-h-[500px]">
                {slides.map((slide, index) => {
                    const hasText = slide.title.main || slide.title.accent || slide.subtitle;
                    return (
                        <div
                            key={slide.id}
                            className={`absolute top-0 left-0 w-full h-full flex items-center justify-center text-center transition-opacity duration-700 ease-out ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 pointer-events-none'}`}
                        >
                            {/* Background Image — contain on mobile (full photo visible), cover on desktop */}
                            <img
                                src={slide.image}
                                alt={slide.title.main || "Carousel image"}
                                className="absolute inset-0 w-full h-full object-contain md:object-cover"
                                style={{ objectPosition: 'center center' }}
                                loading={index === 0 ? 'eager' : 'lazy'}
                                draggable={false}
                            />
                            {/* Overlay for text readability */}
                            {hasText && (
                                <div className="absolute inset-0 bg-gradient-to-b from-[rgba(62,42,79,0.5)] to-[rgba(42,27,56,0.7)]" />
                            )}
                            <div ref={index === currentSlide ? contentRef : null} className="relative z-20 max-w-3xl px-4 sm:px-[3%]">
                                <h1 className="text-2xl sm:text-3xl md:text-5xl text-white mb-3 sm:mb-5 font-bold font-poppins leading-tight">
                                    {slide.title.main} <span className="text-veda-accent">{slide.title.accent}</span>
                                </h1>
                                <p className="text-sm sm:text-base md:text-lg text-white/90 mb-5 sm:mb-8 font-opensans max-w-2xl mx-auto">
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

                {/* Navigation Arrows */}
                <button
                    className="flex absolute top-1/2 -translate-y-1/2 left-2 sm:left-4 md:left-6 bg-white/20 backdrop-blur-sm border-none w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-full md:rounded-xl items-center justify-center text-lg sm:text-xl cursor-pointer z-20 hover:bg-white/40 active:bg-white/50 transition-colors text-white"
                    onClick={() => { prevSlide(); resetAutoPlay(); }}
                    aria-label="Previous slide"
                >
                    &#8249;
                </button>
                <button
                    className="flex absolute top-1/2 -translate-y-1/2 right-2 sm:right-4 md:right-6 bg-white/20 backdrop-blur-sm border-none w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-full md:rounded-xl items-center justify-center text-lg sm:text-xl cursor-pointer z-20 hover:bg-white/40 active:bg-white/50 transition-colors text-white"
                    onClick={() => { nextSlide(); resetAutoPlay(); }}
                    aria-label="Next slide"
                >
                    &#8250;
                </button>

                {/* Dot Indicators */}
                <div className="absolute bottom-3 sm:bottom-6 left-1/2 -translate-x-1/2 flex gap-2.5 sm:gap-3 z-20">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            className={`rounded-full border-none cursor-pointer transition-all duration-300 ${index === currentSlide
                                    ? 'bg-veda-accent w-6 sm:w-7 h-2.5 sm:h-3 scale-100'
                                    : 'bg-white/40 w-2.5 sm:w-3 h-2.5 sm:h-3 hover:bg-white/60'
                                }`}
                            onClick={() => { goToSlide(index); resetAutoPlay(); }}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
