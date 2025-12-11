"use client";

import { useEffect, useState, useRef } from 'react';
import styles from './StatsCounter.module.css';

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
        <section className={styles.statsSection} ref={sectionRef}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    {stats.map((stat) => (
                        <div key={stat.key} className={styles.statItem}>
                            <div className={styles.iconWrapper}>
                                {stat.icon}
                            </div>
                            <div className={styles.number}>
                                {counts[stat.key]}{stat.key === 'experience' ? '+' : ''}
                            </div>
                            <div className={styles.label}>{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Wavy Divider SVG */}
            <div className={styles.waveDivider}>
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className={styles.shapeFill}></path>
                </svg>
            </div>
        </section>
    );
}
