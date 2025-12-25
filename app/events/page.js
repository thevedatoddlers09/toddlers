'use client';

import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const allEvents = [
    { id: 1, title: 'Baisakhi Celebration', category: 'Baisakhi', image: '/images/events/baisakhi-1.jpg', rotate: 270 },
    { id: 101, title: 'Baisakhi Dance', category: 'Baisakhi', image: '/images/events/baisakhi-2.jpg', rotate: 270 },
    { id: 102, title: 'Baisakhi Dhol', category: 'Baisakhi', image: '/images/events/baisakhi-3.jpg', rotate: 270 },
    { id: 103, title: 'Baisakhi Group Photo', category: 'Baisakhi', image: '/images/events/baisakhi-4.jpg', rotate: 270 },
    { id: 104, title: 'Baisakhi Performance', category: 'Baisakhi', image: '/images/events/baisakhi-5.jpg', rotate: 270 },
    { id: 105, title: 'Baisakhi Girl', category: 'Baisakhi', image: '/images/events/baisakhi-6.jpg' },
    { id: 108, title: 'Baisakhi Class Group', category: 'Baisakhi', image: '/images/events/baisakhi-9.jpg' },
    { id: 109, title: 'Baisakhi Bangles', category: 'Baisakhi', image: '/images/events/baisakhi-10.jpg' },
    { id: 110, title: 'Baisakhi Little Star', category: 'Baisakhi', image: '/images/events/baisakhi-11.jpg' },
    { id: 111, title: 'Baisakhi Mother Child', category: 'Baisakhi', image: '/images/events/baisakhi-12.jpg', rotate: 270 },
    { id: 112, title: 'Baisakhi Pink Dress', category: 'Baisakhi', image: '/images/events/baisakhi-13.jpg', rotate: 270 },
    { id: 113, title: 'Baisakhi Art', category: 'Baisakhi', image: '/images/events/baisakhi-14.jpg' },
    { id: 2, title: 'Sports Day Warmup', category: 'Sports Day', image: '/images/events/sports-1.jpg' },
    { id: 201, title: 'Sports Day Guests', category: 'Sports Day', image: '/images/events/sports-2.jpg' },
    { id: 202, title: 'Sports Day Race', category: 'Sports Day', image: '/images/events/sports-3.jpg' },
    { id: 203, title: 'Sports Day Parachute', category: 'Sports Day', image: '/images/events/sports-4.jpg' },
    { id: 204, title: 'Sports Day Hurdles', category: 'Sports Day', image: '/images/events/sports-5.jpg' },
    { id: 205, title: 'Sports Day Smile', category: 'Sports Day', image: '/images/events/sports-6.jpg' },
    { id: 206, title: 'Sports Day Parents', category: 'Sports Day', image: '/images/events/sports-7.jpg' },
    { id: 207, title: 'Sports Day Family', category: 'Sports Day', image: '/images/events/sports-8.jpg' },
    { id: 208, title: 'Sports Day Group', category: 'Sports Day', image: '/images/events/sports-9.jpg' },
    { id: 209, title: 'Sports Day Fun', category: 'Sports Day', image: '/images/events/sports-10.jpg' },
    { id: 210, title: 'Sports Day Crowd', category: 'Sports Day', image: '/images/events/sports-11.jpg' },
    { id: 211, title: 'Sports Day Finish', category: 'Sports Day', image: '/images/events/sports-12.jpg' },
    { id: 212, title: 'Sports Day Hoops', category: 'Sports Day', image: '/images/events/sports-13.jpg' },
    { id: 213, title: 'Sports Day March', category: 'Sports Day', image: '/images/events/sports-14.jpg' },
    { id: 214, title: 'Sports Day Football', category: 'Sports Day', image: '/images/events/sports-15.jpg' },
    { id: 215, title: 'Sports Day Team', category: 'Sports Day', image: '/images/events/sports-16.jpg' },
    { id: 3, title: '20th Birthday Celebration', category: 'Birthday Celebration', image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&q=80' },
    { id: 4, title: 'Alphabet Ramp Walk', category: 'Annual Day', image: 'https://images.unsplash.com/photo-1503919545885-7f4ab0213719?w=600&q=80' },
    { id: 5, title: 'Annual Day', category: 'Annual Day', image: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=600&q=80' },
    { id: 6, title: 'Baby Show', category: 'Baby Show', image: 'https://images.unsplash.com/photo-1545665277-5937bf8607e7?w=600&q=80' },
    { id: 7, title: 'Birthday Celebration', category: 'Birthday Celebration', image: 'https://images.unsplash.com/photo-1464349153735-7db50ed83c84?w=600&q=80' },
    { id: 8, title: 'Dandiya Dhamaal', category: 'Dandiya Dhamaal', image: 'https://images.unsplash.com/photo-1596464716127-f9a0639b9de0?w=600&q=80' },
    { id: 9, title: 'Graduation Day', category: 'Graduation Day', image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&q=80' },
    { id: 10, title: 'Grand Parents Day', category: 'Grand Parents Day', image: 'https://images.unsplash.com/photo-1542036720-bc2f605a6a20?w=600&q=80' },
    { id: 11, title: 'Parent Teacher Meeting', category: 'Parent Teacher Meeting', image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&q=80' },
    { id: 12, title: 'Ram Mandir Inauguration', category: 'Cultural', image: 'https://images.unsplash.com/photo-1516083151740-1addfa71761e?w=600&q=80' },
    { id: 13, title: 'Christmas Carnival', category: 'Christmas Carnival', image: 'https://images.unsplash.com/photo-1512389142860-9c449e58a814?w=600&q=80' },
    { id: 14, title: 'Dussehra Celebration', category: 'Dussehra Celebration', image: 'https://images.unsplash.com/photo-1574095010310-6e4e4eacf03d?w=600&q=80' },
    { id: 15, title: 'Halloween Party', category: 'Halloween Party', image: 'https://images.unsplash.com/photo-1509557965875-b88c97052f0e?w=600&q=80' },
    { id: 16, title: 'Independence Day', category: 'Independence Day', image: 'https://images.unsplash.com/photo-1532375810709-75b1da00537c?w=600&q=80' },
    { id: 17, title: 'Janmashtami Celebration', category: 'Janmashtami Celebration', image: 'https://images.unsplash.com/photo-1596464716070-c8b39f9f0839?w=600&q=80' },
    { id: 18, title: 'The Great Indian Kids Festival', category: 'Festival', image: 'https://images.unsplash.com/photo-1559818454-1b46997bfe30?w=600&q=80' },
    { id: 19, title: 'Utsav The Diwali Fest', category: 'Diwali', image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&q=80' },
];

const categories = [
    'Baisakhi',
    'Sports Day',
    'Birthday Celebration',
    'Annual Day',
    'Baby Show',
    'Dandiya Dhamaal',
    'Graduation Day',
    'Grand Parents Day',
    'Parent Teacher Meeting',
    'Diwali',
];

export default function EventsPage() {
    const mainRef = useRef(null);
    const [activeFilter, setActiveFilter] = useState('Baisakhi');

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
                { y: 0, opacity: 1, duration: 0.6, stagger: 0.04, delay: 0.4, ease: 'power2.out' }
            );

            // Photo grid items - smoother
            gsap.fromTo('.anim-photo-card',
                { y: 30, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.7,
                    stagger: 0.05,
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

    const filteredEvents = allEvents.filter(event => event.category === activeFilter);

    return (
        <main ref={mainRef} className="bg-veda-background-DEFAULT min-h-screen">
            {/* Header */}
            <section className="anim-header pt-20 pb-10 px-4 text-center">
                <h1 className="text-4xl md:text-5xl font-bold font-poppins text-veda-primary mb-4">
                    Our Events
                </h1>
                <p className="text-veda-text-muted text-lg max-w-2xl mx-auto">
                    Celebrating joyful moments, festivals, and milestones with our little stars.
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
                    {filteredEvents.map((event) => (
                        <div
                            key={event.id}
                            className="anim-photo-card group relative overflow-hidden rounded-2xl shadow-soft hover:shadow-softer transition-shadow duration-300 aspect-[4/3]"
                        >
                            <img
                                src={event.image}
                                alt={event.title}
                                className="w-full h-full object-cover block group-hover:scale-105 transition-transform duration-500"
                                style={event.rotate ? { transform: `rotate(${event.rotate}deg)` } : {}}
                            />
                        </div>
                    ))}
                </div>
                {filteredEvents.length === 0 && (
                    <p className="text-center text-veda-text-muted py-12 text-lg">No events found for this category.</p>
                )}
            </section>
        </main>
    );
}
