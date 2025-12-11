"use client";

import { useEffect, useState, useRef } from 'react';

/**
 * StatsCounter Component
 * Displays animating statistics with a teal background and wavy divider.
 */
export default function StatsCounter() {
    const [counts, setCounts] = useState({
        teachers: 0,
        experience: 0,
        students: 0
    });

    const sectionRef = useRef(null);
    const hasAnimated = useRef(false);

    const stats = [
        { key: 'teachers', target: 18, label: 'Qualified Teachers', icon: '👩‍🏫' },
        { key: 'experience', target: 20, label: 'Years Of Experience', icon: '🎖️' },
        { key: 'students', target: 2850, label: 'Students Enrolled', icon: '🎓' }
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const [entry] = entries;
                if (entry.isIntersecting && !hasAnimated.current) {
                    hasAnimated.current = true;
                    animateNumbers();
                }
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) observer.unobserve(sectionRef.current);
        };
    }, []);

    const animateNumbers = () => {
        const duration = 2000; // 2 seconds
        const steps = 60;
        const interval = duration / steps;

        let currentStep = 0;

        const timer = setInterval(() => {
            currentStep++;
            const progress = currentStep / steps;

            // Ease out quart
            const ease = 1 - Math.pow(1 - progress, 4);

            setCounts(prev => ({
                teachers: Math.round(stats[0].target * ease),
                experience: Math.round(stats[1].target * ease),
                students: Math.round(stats[2].target * ease)
            }));

            if (currentStep >= steps) {
                clearInterval(timer);
                // Ensure final numbers are exact
                setCounts({
                    teachers: stats[0].target,
                    experience: stats[1].target,
                    students: stats[2].target
                });
            }
        }, interval);
    };

    return (
        <section className="bg-[#76Aebf] py-24 px-[5%] pb-40 relative overflow-hidden" ref={sectionRef}>
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    {stats.map((stat) => (
                        <div key={stat.key} className="flex flex-col items-center gap-4">
                            <div className="text-4xl text-[#C2185B] bg-white/20 w-20 h-20 flex items-center justify-center rounded-full mb-2 shadow-lg">
                                {stat.icon}
                            </div>
                            <div className="text-[3.5rem] font-extrabold text-[#1e3a8a] leading-none font-poppins">
                                {counts[stat.key]}{stat.key === 'experience' ? '+' : ''}
                            </div>
                            <div className="text-lg font-semibold text-[#1e3a8a] uppercase tracking-wider opacity-90">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Wavy Divider SVG */}
            <div className="absolute bottom-0 left-0 w-full rotate-180 leading-[0] overflow-hidden">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[60px]">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-white"></path>
                </svg>
            </div>
        </section>
    );
}
