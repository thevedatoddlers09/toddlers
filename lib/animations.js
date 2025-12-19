'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

/**
 * Fade in elements from below
 */
export function useFadeInUp(ref, options = {}) {
    const { delay = 0, duration = 0.6, y = 30 } = options;

    useEffect(() => {
        if (!ref.current) return;

        gsap.fromTo(
            ref.current,
            { opacity: 0, y },
            {
                opacity: 1,
                y: 0,
                duration,
                delay,
                ease: 'power2.out',
            }
        );
    }, [ref, delay, duration, y]);
}

/**
 * Fade in elements on scroll
 */
export function useScrollFadeIn(ref, options = {}) {
    const { delay = 0, duration = 0.6, y = 40, stagger = 0 } = options;

    useEffect(() => {
        if (!ref.current) return;

        const elements = stagger ? ref.current.children : ref.current;

        gsap.fromTo(
            elements,
            { opacity: 0, y },
            {
                opacity: 1,
                y: 0,
                duration,
                delay,
                stagger: stagger || 0,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: ref.current,
                    start: 'top 85%',
                    once: true,
                },
            }
        );
    }, [ref, delay, duration, y, stagger]);
}

/**
 * Animate a number counting up
 */
export function animateCountUp(element, endValue, duration = 2) {
    const obj = { value: 0 };
    gsap.to(obj, {
        value: endValue,
        duration,
        ease: 'power1.out',
        onUpdate: () => {
            element.textContent = Math.floor(obj.value).toLocaleString();
        },
    });
}

/**
 * Hook for count-up animation on scroll
 */
export function useCountUp(ref, endValue, options = {}) {
    const { duration = 2, suffix = '' } = options;
    const hasAnimated = useRef(false);

    useEffect(() => {
        if (!ref.current) return;

        ScrollTrigger.create({
            trigger: ref.current,
            start: 'top 85%',
            once: true,
            onEnter: () => {
                if (hasAnimated.current) return;
                hasAnimated.current = true;

                const obj = { value: 0 };
                gsap.to(obj, {
                    value: endValue,
                    duration,
                    ease: 'power1.out',
                    onUpdate: () => {
                        ref.current.textContent = Math.floor(obj.value).toLocaleString() + suffix;
                    },
                });
            },
        });
    }, [ref, endValue, duration, suffix]);
}
