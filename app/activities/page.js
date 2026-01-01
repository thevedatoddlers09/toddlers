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
    { id: 104, title: 'First Day Balloons', category: 'First Day', image: '/images/activities/first-day-5.jpg' },
    { id: 105, title: 'First Day Class', category: 'First Day', image: '/images/activities/first-day-6.jpg' },
    { id: 106, title: 'First Day Excitement', category: 'First Day', image: '/images/activities/first-day-7.jpg' },
    // Easter Bunny
    { id: 6, title: 'Easter Art', category: 'Easter Bunny', image: '/images/activities/easter-bunny-1.jpg' },
    { id: 7, title: 'Easter Painting', category: 'Easter Bunny', image: '/images/activities/easter-bunny-2.jpg' },
    { id: 8, title: 'Easter Craft', category: 'Easter Bunny', image: '/images/activities/easter-bunny-3.jpg' },
    { id: 107, title: 'Easter Bunny Art', category: 'Easter Bunny', image: '/images/activities/easter-bunny-4.jpg' },
    { id: 108, title: 'Easter Creation', category: 'Easter Bunny', image: '/images/activities/easter-bunny-5.jpg' },
    { id: 109, title: 'Easter Chick', category: 'Easter Bunny', image: '/images/activities/easter-bunny-6.jpg' },
    { id: 110, title: 'Easter Egg Card', category: 'Easter Bunny', image: '/images/activities/easter-bunny-7.jpg' },
    // Summer Camp
    { id: 111, title: 'Summer Camp Craft', category: 'Summer Camp', image: '/images/activities/summer-camp-1.jpg' },
    { id: 112, title: 'Summer Camp Space Theme', category: 'Summer Camp', image: '/images/activities/summer-camp-2.jpg' },
    { id: 113, title: 'Summer Camp Astronaut', category: 'Summer Camp', image: '/images/activities/summer-camp-3.jpg' },
    { id: 114, title: 'Summer Camp Group', category: 'Summer Camp', image: '/images/activities/summer-camp-4.jpg' },
    { id: 115, title: 'Summer Camp Yoga', category: 'Summer Camp', image: '/images/activities/summer-camp-5.jpg' },
    { id: 116, title: 'Summer Camp Activity', category: 'Summer Camp', image: '/images/activities/summer-camp-6.jpg' },
    { id: 117, title: 'Summer Camp Dance', category: 'Summer Camp', image: '/images/activities/summer-camp-7.jpg' },
    { id: 118, title: 'Summer Camp Earth Day', category: 'Summer Camp', image: '/images/activities/summer-camp-8.jpg' },
    { id: 119, title: 'Summer Camp Fun', category: 'Summer Camp', image: '/images/activities/summer-camp-9.jpg' },
    { id: 120, title: 'Summer Camp Baking', category: 'Summer Camp', image: '/images/activities/summer-camp-10.jpg' },
    { id: 121, title: 'Summer Camp Dinosaur', category: 'Summer Camp', image: '/images/activities/summer-camp-11.jpg' },
    { id: 122, title: 'Summer Camp Jurassic', category: 'Summer Camp', image: '/images/activities/summer-camp-12.jpg' },
    // Van Mahotsav
    { id: 123, title: 'Van Mahotsav Tree Craft', category: 'Van Mahotsav', image: '/images/activities/van-mahotsav-1.jpg' },
    { id: 124, title: 'Van Mahotsav Art', category: 'Van Mahotsav', image: '/images/activities/van-mahotsav-2.jpg' },
    { id: 125, title: 'Van Mahotsav Drawings', category: 'Van Mahotsav', image: '/images/activities/van-mahotsav-3.jpg' },
    { id: 126, title: 'Van Mahotsav Plant', category: 'Van Mahotsav', image: '/images/activities/van-mahotsav-4.jpg' },
    { id: 127, title: 'Van Mahotsav Leaf Art', category: 'Van Mahotsav', image: '/images/activities/van-mahotsav-5.jpg' },
    // Friendship Day
    { id: 128, title: 'Friendship Day Best Friends', category: 'Friendship Day', image: '/images/activities/friendship-day-1.jpg' },
    { id: 129, title: 'Friendship Day Boys', category: 'Friendship Day', image: '/images/activities/friendship-day-2.jpg' },
    { id: 130, title: 'Friendship Day Together', category: 'Friendship Day', image: '/images/activities/friendship-day-3.jpg' },
    { id: 131, title: 'Friendship Day Class', category: 'Friendship Day', image: '/images/activities/friendship-day-4.jpg' },
    { id: 132, title: 'Friendship Day Hearts', category: 'Friendship Day', image: '/images/activities/friendship-day-5.jpg' },
    { id: 133, title: 'Friendship Day Card', category: 'Friendship Day', image: '/images/activities/friendship-day-6.jpg' },
    { id: 134, title: 'Friendship Day Bands', category: 'Friendship Day', image: '/images/activities/friendship-day-7.jpg' },
];

const categories = [
    'Bloomer Camp',
    'First Day',
    'Easter Bunny',
    'Summer Camp',
    'Van Mahotsav',
    'Friendship Day',
    'Visit to MRIS',
    'Messy Play',
    'Shadow Play',
    'World Food Day',
    'World Post Day',
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
                            className="anim-photo-card aspect-[9/16] group relative overflow-hidden rounded-2xl shadow-soft hover:shadow-softer transition-shadow duration-300 bg-gray-100"
                        >
                            <img
                                src={activity.image}
                                alt={activity.title}
                                className="w-full h-full object-contain block group-hover:scale-105 transition-transform duration-500"
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
