"use client";

import { useEffect, useState, useRef } from 'react';
import { GraduationCap, Award, Users } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

/**
 * StatsCounter Component
 * Displays animating statistics with GSAP animations.
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
        { key: 'teachers', target: 18, label: 'Qualified Teachers', Icon: GraduationCap },
        { key: 'experience', target: 20, label: 'Years Of Experience', Icon: Award },
        { key: 'students', target: 2850, label: 'Students Enrolled', Icon: Users }
    ];

    useEffect(() => {
        if (!sectionRef.current) return;

        ScrollTrigger.create({
            trigger: sectionRef.current,
            start: 'top 80%',
            once: true,
            onEnter: () => {
                if (hasAnimated.current) return;
                hasAnimated.current = true;
                animateNumbers();
            },
        });
    }, []);

    const animateNumbers = () => {
        stats.forEach((stat) => {
            const obj = { value: 0 };
            gsap.to(obj, {
                value: stat.target,
                duration: 2,
                ease: 'power2.out',
                onUpdate: () => {
                    setCounts(prev => ({
                        ...prev,
                        [stat.key]: Math.floor(obj.value)
                    }));
                },
            });
        });
    };

    return (
        <section className="py-16 px-[5%] bg-veda-primary" ref={sectionRef}>
            <div className="max-w-5xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
                    {stats.map((stat) => (
                        <div key={stat.key} className="flex flex-col items-center">
                            <stat.Icon size={48} strokeWidth={1.5} className="text-veda-accent mb-4" />
                            <div className="text-5xl md:text-6xl font-bold text-white leading-none font-poppins mb-2">
                                {counts[stat.key].toLocaleString()}
                            </div>
                            <div className="text-base font-medium text-veda-accent uppercase tracking-wide">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
