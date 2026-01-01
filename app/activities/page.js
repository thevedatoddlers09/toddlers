'use client';

import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const allActivities = [
    // Bloomer Camp
    { id: 1, title: 'Pirate Party Day 10', category: 'Bloomer Camp', image: '/images/activities/bloomer-camp-1.jpg' },
    { id: 2, title: 'Pirate Party Kids', category: 'Bloomer Camp', image: '/images/activities/bloomer-camp-2.jpg' },
    { id: 3, title: 'Pirate Party Fun', category: 'Bloomer Camp', image: '/images/activities/bloomer-camp-3.jpg' },
    { id: 101, title: 'Pirate Party Group', category: 'Bloomer Camp', image: '/images/activities/bloomer-camp-4.jpg' },
    // First Day
    { id: 4, title: 'First Day Welcome', category: 'First Day', image: '/images/activities/first-day-1.jpg' },
    { id: 5, title: 'First Day Fun', category: 'First Day', image: '/images/activities/first-day-2.jpg' },
    { id: 102, title: 'First Day Kids', category: 'First Day', image: '/images/activities/first-day-3.jpg' },
    { id: 103, title: 'First Day Hug', category: 'First Day', image: '/images/activities/first-day-4.jpg' },
    // Skill Development
    { id: 6, title: 'Airport Pretend Play', category: 'Skill Development', image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&q=80' },
    { id: 7, title: 'Annual Sports Day', category: 'Skill Development', image: 'https://images.unsplash.com/photo-1545665277-5937bf8607e7?w=600&q=80' },
    { id: 8, title: 'Class Assembly', category: 'Skill Development', image: 'https://images.unsplash.com/photo-1587654780291-39c940483719?w=600&q=80' },
];

const categories = [
    'Bloomer Camp',
    'First Day',
    'Skill Development',
];

export default function ActivitiesPage() {
    const mainRef = useRef(null);
    const [activeFilter, setActiveFilter] = useState('Bloomer Camp');

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
            // Header animation - smoother
            gsap.fromTo('.anim-header',
                { y: 30, opacity: 0 },
                { y: 0, opacity: 1, duration: 1, ease: 'power2.out' }
            );

            // Filter pills stagger - smoother
            gsap.fromTo('.anim-filter-pill',
                { y: 15, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.6, stagger: 0.08, delay: 0.4, ease: 'power2.out' }
            );

            // Photo grid items - smoother
            gsap.fromTo('.anim-photo-card',
                { y: 30, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.7,
                    stagger: 0.06,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: '.anim-photo-grid',
                        start: 'top 90%',
                    }
                }
            );
        }, mainRef);

        return () => ctx.revert();
    }, []);

    const filteredActivities = allActivities.filter(activity => activity.category === activeFilter);

    return (
        <main ref={mainRef} className="bg-veda-background-DEFAULT min-h-screen">
            {/* Header */}
            <section className="anim-header pt-20 pb-10 px-4 text-center">
                <h1 className="text-4xl md:text-5xl font-bold font-poppins text-veda-primary mb-4">
                    Our Activities
                </h1>
                <p className="text-veda-text-muted text-lg max-w-2xl mx-auto">
                    There is much more to our school than our unique approach. Our daily activities involve exploration of visual arts, drama, technology, and physical education.
                </p>
            </section>

            {/* Filter Pills */}
            <section className="px-4 pb-12">
                <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-3">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveFilter(category)}
                            className={`anim-filter-pill py-2 px-5 rounded-full text-sm font-bold transition-all duration-300 border-2 cursor-pointer ${activeFilter === category
                                ? 'bg-veda-primary text-white border-veda-primary shadow-md'
                                : 'bg-white text-veda-text-muted border-veda-border hover:border-veda-primary hover:text-veda-primary'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </section>

            <section className="px-4 pb-24">
                <div className="anim-photo-grid max-w-[1400px] mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                    {filteredActivities.map((activity) => (
                        <div
                            key={activity.id}
                            className="anim-photo-card aspect-[3/4] group relative overflow-hidden rounded-2xl shadow-soft hover:shadow-softer transition-shadow duration-300"
                        >
                            <img
                                src={activity.image}
                                alt={activity.title}
                                className="w-full h-full object-cover object-top block group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                    ))}
                </div>
                {filteredActivities.length === 0 && (
                    <p className="text-center text-veda-text-muted py-12 text-lg">No activities found for this category.</p>
                )}
            </section>
        </main>
    );
}
