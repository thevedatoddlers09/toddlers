'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Palette, Handshake, ShieldCheck, Rocket, BookOpen, GraduationCap, Baby, Trophy } from 'lucide-react';

export default function AboutPage() {
    const mainRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
            // Hero animation
            gsap.from('.anim-hero-content', {
                y: 50,
                opacity: 0,
                duration: 1,
                ease: 'power3.out'
            });

            // Core Values cards stagger
            gsap.from('.anim-value-card', {
                y: 60,
                opacity: 0,
                duration: 0.6,
                stagger: 0.15,
                scrollTrigger: {
                    trigger: '.anim-values-section',
                    start: 'top 80%',
                }
            });

            // Timeline cards stagger
            gsap.from('.anim-timeline-card', {
                x: -50,
                opacity: 0,
                duration: 0.7,
                stagger: 0.2,
                scrollTrigger: {
                    trigger: '.anim-timeline-section',
                    start: 'top 75%',
                }
            });

            // Leadership cards stagger
            gsap.fromTo('.anim-leader-card',
                { scale: 0.8, opacity: 0 },
                {
                    scale: 1,
                    opacity: 1,
                    duration: 0.5,
                    stagger: 0.1,
                    scrollTrigger: {
                        trigger: '.anim-leaders-section',
                        start: 'top 85%',
                    }
                }
            );

            // Awards cards stagger
            gsap.from('.anim-award-card', {
                y: 40,
                opacity: 0,
                duration: 0.6,
                stagger: 0.15,
                scrollTrigger: {
                    trigger: '.anim-awards-section',
                    start: 'top 80%',
                }
            });

            // Section headers fade in
            gsap.from('.anim-section-header', {
                y: 30,
                opacity: 0,
                duration: 0.8,
                scrollTrigger: {
                    trigger: '.anim-section-header',
                    start: 'top 85%',
                }
            });
        }, mainRef);

        return () => ctx.revert();
    }, []);


    // Core Values Data
    const values = [
        {
            title: 'Holistic Development',
            Icon: Palette,
            gradient: 'from-veda-accent to-amber-500',
            bgGradient: 'from-veda-accent/10 via-white to-veda-accent/5',
            borderColor: 'border-veda-accent/20',
            text: 'Balancing academics, creativity, physical activity, and socio-emotional growth.',
        },
        {
            title: 'Respect & Empathy',
            Icon: Handshake,
            gradient: 'from-veda-primary to-veda-primary-dark',
            bgGradient: 'from-veda-secondary/30 via-white to-veda-secondary/10',
            borderColor: 'border-veda-secondary',
            text: 'Teaching kindness, patience, and understanding to every child.',
        },
        {
            title: 'Care & Safety',
            Icon: ShieldCheck,
            gradient: 'from-veda-playful-green to-green-600',
            bgGradient: 'from-veda-playful-green/15 via-white to-veda-playful-green/5',
            borderColor: 'border-veda-playful-green/20',
            text: 'Prioritizing a warm, secure emotional atmosphere for learning.',
        },
        {
            title: 'Creativity & Exploration',
            Icon: Rocket,
            gradient: 'from-veda-playful-peach to-rose-400',
            bgGradient: 'from-veda-playful-peach/15 via-white to-rose-50',
            borderColor: 'border-veda-playful-peach/20',
            text: 'Encouraging creativity, independence, and curiosity.',
        },
    ];

    // Timeline Data
    const timeline = [
        {
            year: '2009',
            title: 'The Veda Coaching',
            text: 'The Veda Coaching, established in 2009, has been dedicated to guiding students with expert mentorship and a focus on consistent growth and success.',
            Icon: BookOpen
        },
        {
            year: '2017',
            title: 'The Veda Tuitions',
            text: 'The Veda Tuitions, established in 2017, has been focused on providing quality learning support and personalized guidance to help students excel academically.',
            Icon: GraduationCap
        },
        {
            year: '2022',
            title: 'The Veda Toddlers',
            text: 'The Veda Toddlers, established in 2022, has been committed to nurturing young minds with care, creativity, and a strong foundation for lifelong learning.',
            Icon: Baby
        },
    ];

    // Leadership Data
    const leaders = [
        { name: 'Mandeep Sharma', role: 'Founder & Director', color: 'from-veda-accent to-amber-500', image: '/images/team/mandeep-sharma.png' },
        { name: 'Jatinder Pal', role: 'Marketing & Support', color: 'from-veda-primary to-veda-primary-dark', image: '/images/team/jatinder-pal.png' },
        { name: 'Parul', role: 'Legal & Policy Advisor', color: 'from-veda-playful-green to-green-600', image: '/images/team/parul.jpg' },
        { name: 'Pooja Chauhan', role: 'Admission & Outreach', color: 'from-veda-playful-peach to-rose-400', image: '/images/team/pooja-chauhan.jpg' },

        { name: 'Drishti Chugh', role: 'Parenting & Child Development Coach', color: 'from-veda-accent to-amber-500', image: '/images/team/drishti-chugh.jpg?v=2' },
    ];

    return (
        <main ref={mainRef}>
            {/* Section A: Hero Banner */}
            <section className="relative h-[45vh] min-h-[350px] bg-cover bg-center flex items-center justify-center text-center text-white"
                style={{ backgroundImage: "url('/philosophy-bg.png')" }}>
                <div className="absolute inset-0 bg-gradient-to-br from-veda-primary-dark/80 to-veda-primary-dark/90"></div>
                <div className="anim-hero-content relative z-10 p-6 max-w-5xl">
                    <h1 className="font-poppins text-4xl md:text-5xl font-bold mb-4 leading-tight drop-shadow-lg text-white">
                        Our Philosophy
                    </h1>
                    <p className="font-opensans text-xl md:text-2xl max-w-3xl mx-auto font-light text-white/95 drop-shadow-md">
                        We blend global early education standards with rich Indian values, aiming to nurture confident, kind, and creative learners through a child-centered philosophy.
                    </p>
                </div>
            </section>

            {/* Section B: Core Values - Redesigned */}
            <section className="anim-values-section py-16 px-3 bg-veda-background-muted">
                <h2 className="text-center font-poppins text-4xl font-bold text-veda-text-heading mb-4">
                    Core Values
                </h2>
                <p className="text-center text-veda-text-muted text-lg mb-12 max-w-2xl mx-auto">The principles that guide everything we do</p>
                <div className="max-w-[1400px] mx-auto">
                    <div className="flex flex-wrap justify-center gap-6">
                        {values.map((value, idx) => (
                            <div key={idx} className="anim-value-card w-full md:w-[calc(50%-12px)] lg:w-[calc(25%-18px)]">
                                <div className={`relative bg-gradient-to-br ${value.bgGradient} rounded-2xl p-6 h-full border ${value.borderColor} shadow-soft hover:shadow-softer hover:-translate-y-2 transition-all duration-300 group overflow-hidden`}>
                                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-white/20 to-transparent rounded-full -translate-y-1/2 translate-x-1/2"></div>
                                    <div className="relative z-10 text-center">
                                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${value.gradient} text-white mx-auto mb-5 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                                            <value.Icon size={30} />
                                        </div>
                                        <h3 className="text-xl font-bold mb-3 text-veda-text-heading font-poppins">{value.title}</h3>
                                        <p className="text-veda-text-muted text-base leading-relaxed">{value.text}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section C: VEDA GROWTH JOURNEY - Redesigned */}
            <section className="anim-timeline-section py-20 px-3 bg-gradient-to-b from-veda-secondary-light/30 via-white to-veda-background-soft relative overflow-hidden">
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-veda-accent/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-72 h-72 bg-veda-primary/5 rounded-full blur-3xl"></div>

                <div className="max-w-7xl mx-auto relative z-10">
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 bg-veda-primary/10 px-3 py-2 rounded-full mb-4">
                            <Rocket size={18} className="text-veda-primary" />
                            <span className="text-veda-primary font-medium text-base uppercase tracking-wider">Our Journey</span>
                        </div>
                        <h2 className="font-poppins text-4xl md:text-5xl font-bold text-veda-text-heading mb-4">
                            VEDA GROWTH JOURNEY
                        </h2>
                        <p className="text-veda-text-muted max-w-2xl mx-auto text-xl">
                            A decade of excellence in education
                        </p>
                    </div>

                    {/* Timeline Cards - Horizontal Layout */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                        {timeline.map((item, idx) => (
                            <div key={idx} className="anim-timeline-card group">
                                <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 h-full border border-veda-border/50">
                                    {/* Year Header */}
                                    <div className="bg-gradient-to-r from-veda-primary via-veda-primary to-veda-primary-dark p-6 relative">
                                        <div className="absolute top-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                                            <item.Icon size={24} className="text-white" />
                                        </div>
                                        <span className="text-veda-accent font-bold text-5xl font-poppins">{item.year}</span>
                                        <h3 className="text-white font-poppins font-semibold text-2xl mt-2">
                                            {item.title}
                                        </h3>
                                    </div>

                                    {/* Description */}
                                    <div className="p-6">
                                        <p className="text-veda-text-DEFAULT leading-relaxed text-lg">
                                            "{item.text}"
                                        </p>
                                    </div>

                                    {/* Decorative connector line */}
                                    {idx < 2 && (
                                        <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-veda-primary to-veda-accent z-10"></div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Franchise Support Message */}
                    <div className="bg-gradient-to-br from-veda-primary via-veda-primary to-veda-primary-dark rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
                        {/* Decorative circles */}
                        <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                        <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>

                        <div className="relative z-10">
                            <div className="w-16 h-16 bg-veda-accent rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl">
                                <Handshake size={32} className="text-veda-primary-dark" />
                            </div>
                            <p className="text-white text-lg md:text-xl leading-relaxed max-w-5xl mx-auto font-light">
                                At The Veda Toddlers, our core team is the driving force behind your success. With unmatched expertise and dedication, they provide complete franchise support – from setup, recruitment, and training to marketing and day-to-day operations. Beyond preschool setup, our team also focuses on sustainable growth strategies, ensuring that every partner not only launches smoothly but also scales with confidence. With The Veda Toddlers by your side, you gain the knowledge, resources, and continuous guidance needed to build and expand a thriving preschool business.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section D: Leadership Team - Redesigned */}
            <section className="anim-leaders-section py-16 px-3 bg-veda-background-DEFAULT">
                <h2 className="text-center font-poppins text-4xl font-bold text-veda-text-heading mb-4">
                    Leadership Team
                </h2>
                <p className="text-center text-veda-text-muted text-lg mb-12 max-w-2xl mx-auto">Meet the passionate people behind The Veda</p>
                <div className="max-w-[1400px] mx-auto">
                    <div className="flex flex-wrap justify-center gap-6">
                        {leaders.map((leader, idx) => (
                            <div
                                key={idx}
                                className="anim-leader-card w-[280px] overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-300 group"
                            >
                                <div className="relative h-[380px] overflow-hidden">
                                    {leader.image ? (
                                        <img
                                            src={leader.image}
                                            alt={leader.name}
                                            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                                        />
                                    ) : (
                                        <div className={`w-full h-full bg-gradient-to-br ${leader.color} flex items-center justify-center`}>
                                            <span className="text-8xl text-white font-bold opacity-80">{leader.name.charAt(0)}</span>
                                        </div>
                                    )}
                                    {/* Semi-transparent overlay at bottom - 1/5th height */}
                                    <div
                                        className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent"
                                        style={{ height: '30%' }}
                                    >
                                        <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
                                            <h3 className="text-xl font-bold text-white mb-1 font-poppins drop-shadow-lg">
                                                {leader.name}
                                            </h3>
                                            <p className="text-sm text-white/90 font-medium uppercase tracking-wider drop-shadow-md">
                                                {leader.role}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="anim-awards-section py-24 px-3 bg-gradient-to-b from-veda-background-soft via-white to-veda-secondary-light/20 relative overflow-hidden">
                {/* Decorative Background Elements */}
                <div className="absolute top-0 left-0 w-72 h-72 bg-veda-accent/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-veda-primary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
                <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-veda-secondary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>

                <div className="max-w-7xl mx-auto relative z-10">
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 bg-veda-accent/10 px-3 py-2 rounded-full mb-4">
                            <Trophy size={18} className="text-veda-accent" />
                            <span className="text-veda-accent font-medium text-base uppercase tracking-wider">Recognition</span>
                        </div>
                        <h2 className="font-poppins text-4xl md:text-5xl font-bold mb-4 text-veda-text-heading">
                            Our Awards & Achievements
                        </h2>
                        <p className="text-veda-text-muted max-w-2xl mx-auto text-xl">
                            We're proud to be recognized as one of India's most trusted preschool brands
                        </p>
                    </div>

                    {/* Awards Grid */}
                    <div className="flex flex-wrap justify-center gap-6 lg:gap-8">
                        {[
                            { text: 'AIP – Association of Indian Principals', subtitle: 'Top Ranked Early Years School in Mohali', image: '/images/aip-award.jpg' },
                            { text: 'Indian School Award', subtitle: 'Best Pre School with Holistic Development', image: '/images/indian-school-award.jpg' },
                            { text: 'Advaita Women Entrepreneur Award', subtitle: 'Most Promising Startup Award', image: '/images/advita-award.jpg' },
                            { text: 'Star Education Award 2024', subtitle: 'Best Pre-School - Mohali', image: '/images/star-education-award.jpg' },
                            { text: 'Visionary Leader Award', subtitle: 'Tricity Women Entrepreneurs', image: '/images/visionary-leader-award.jpg' }
                        ].map((award, idx) => (
                            <div
                                key={idx}
                                className="anim-award-card w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-22px)] group"
                            >
                                <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 h-full border border-veda-border/50 flex flex-col">
                                    {/* Image Container */}
                                    <div className="relative h-56 sm:h-64 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-100 flex-shrink-0">
                                        <img
                                            src={award.image}
                                            alt={award.text}
                                            className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-700"
                                        />
                                        {/* Subtle overlay on hover */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-veda-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    </div>

                                    {/* Content Section */}
                                    <div className="p-5 bg-gradient-to-br from-veda-primary via-veda-primary to-veda-primary-dark relative flex-grow flex flex-col justify-center">
                                        {/* Trophy Badge */}
                                        <div className="absolute -top-5 right-5 w-10 h-10 bg-veda-accent rounded-xl flex items-center justify-center shadow-xl">
                                            <Trophy size={18} className="text-veda-primary-dark" />
                                        </div>

                                        <h3 className="text-white font-poppins font-semibold text-lg leading-tight mb-1 pr-8">
                                            {award.text}
                                        </h3>
                                        <p className="text-white/70 text-base font-light">
                                            {award.subtitle}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}

