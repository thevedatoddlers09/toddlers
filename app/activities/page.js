'use client';

import { useState } from 'react';

const allActivities = [
    // Thematic Learning
    { id: 1, title: 'Red Color Day', category: 'Thematic Learning', image: 'https://images.unsplash.com/photo-1544815610-1e5631247480?w=600&q=80' },
    { id: 2, title: 'Earth Day Planting', category: 'Thematic Learning', image: 'https://images.unsplash.com/photo-1503919545885-7f4ab0213719?w=600&q=80' },
    { id: 3, title: 'Basant Panchami', category: 'Thematic Learning', image: 'https://images.unsplash.com/photo-1502086223501-636a25424750?w=600&q=80' },
    // Excursions
    { id: 4, title: 'Rail Museum Visit', category: 'Excursions', image: 'https://images.unsplash.com/photo-1478131333786-8c7604f32997?w=600&q=80' },
    { id: 5, title: 'Day at the Zoo', category: 'Excursions', image: 'https://images.unsplash.com/photo-1534568759974-a2a5efbc647c?w=600&q=80' },
    // Skill Development
    { id: 6, title: 'Airport Pretend Play', category: 'Skill Development', image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&q=80' },
    { id: 7, title: 'Annual Sports Day', category: 'Skill Development', image: 'https://images.unsplash.com/photo-1545665277-5937bf8607e7?w=600&q=80' },
    { id: 8, title: 'Class Assembly', category: 'Skill Development', image: 'https://images.unsplash.com/photo-1587654780291-39c940483719?w=600&q=80' },
];

const categories = [
    'Thematic Learning',
    'Excursions',
    'Skill Development',
];

export default function ActivitiesPage() {
    const [activeFilter, setActiveFilter] = useState('Thematic Learning');

    const filteredActivities = allActivities.filter(activity => activity.category === activeFilter);

    return (
        <main className="bg-veda-background-DEFAULT min-h-screen">
            {/* Header */}
            <section className="pt-20 pb-10 px-4 text-center">
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
                            className={`py-2 px-5 rounded-full text-sm font-bold transition-all duration-300 border-2 cursor-pointer ${activeFilter === category
                                    ? 'bg-veda-primary text-white border-veda-primary shadow-md'
                                    : 'bg-white text-veda-text-muted border-veda-border hover:border-veda-primary hover:text-veda-primary'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </section>

            {/* Masonry Photo Grid */}
            <section className="px-4 pb-24">
                <div className="max-w-[1400px] mx-auto columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4">
                    {filteredActivities.map((activity) => (
                        <div
                            key={activity.id}
                            className="mb-4 break-inside-avoid group relative overflow-hidden rounded-2xl shadow-soft hover:shadow-softer transition-shadow duration-300"
                        >
                            <img
                                src={activity.image}
                                alt={activity.title}
                                className="w-full h-auto object-cover block group-hover:scale-105 transition-transform duration-500"
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
