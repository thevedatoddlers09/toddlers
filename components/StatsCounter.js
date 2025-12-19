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
        <section className="bg-veda-primary py-20 px-[5%] pb-32 relative overflow-hidden" ref={sectionRef}>
            <div className="max-w-5xl mx-auto relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    {stats.map((stat) => (
                        <div key={stat.key} className="flex flex-col items-center gap-3">
                            <div className="w-16 h-16 bg-veda-accent text-veda-primary-dark flex items-center justify-center rounded-xl mb-2 shadow-soft">
                                <stat.Icon size={28} />
                            </div>
                            <div className="text-4xl md:text-5xl font-bold text-white leading-none font-poppins">
                                {counts[stat.key].toLocaleString()}{stat.key === 'experience' ? '+' : ''}
                            </div>
                            <div className="text-sm font-medium text-white/80 uppercase tracking-wider">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Soft wave divider */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
                <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-14">
                    <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="fill-veda-background-soft"></path>
                    <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="fill-veda-background-soft"></path>
                    <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="fill-veda-background-soft"></path>
                </svg>
            </div>
        </section>
    );
}
