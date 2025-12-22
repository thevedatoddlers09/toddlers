import { Palette, Handshake, ShieldCheck, Rocket, BookOpen, GraduationCap, Baby, Trophy } from 'lucide-react';

export const metadata = {
    title: 'About Us - The Veda Toddlers',
    description: 'Learn about our vision, mission, and journey from 2008 to today.',
};

export default function AboutPage() {
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
        { year: '2009', text: 'Established "The Veda Coaching"', Icon: BookOpen, side: 'left' },
        { year: '2017', text: 'Established "The Veda Tuitions"', Icon: GraduationCap, side: 'right' },
        { year: '2022', text: 'Established "The Veda Toddlers"', Icon: Baby, side: 'left' },
    ];

    // Leadership Data
    const leaders = [
        { name: 'Mandeep Sharma', role: 'Founder & Director', color: 'from-veda-accent to-amber-500' },
        { name: 'Jatinder Pal', role: 'Marketing & Support', color: 'from-veda-primary to-veda-primary-dark' },
        { name: 'Parul', role: 'Legal & Policy Advisor', color: 'from-veda-playful-green to-green-600' },
        { name: 'Pooja Chauhan', role: 'Admission & Outreach', color: 'from-veda-playful-peach to-rose-400' },
        { name: 'Kanika', role: 'Pedagogy & Training Head', color: 'from-veda-playful-blue to-blue-500' },
        { name: 'Sukhmani Kaur', role: 'Academic Learning & Development', color: 'from-veda-secondary-dark to-purple-600' },
        { name: 'Drishti Chugh', role: 'Parenting & Child Development Coach', color: 'from-veda-accent to-amber-500' },
    ];

    return (
        <main>
            {/* Section A: Hero Banner */}
            <section className="relative h-[45vh] min-h-[350px] bg-cover bg-center flex items-center justify-center text-center text-white"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&q=80')" }}>
                <div className="absolute inset-0 bg-gradient-to-br from-veda-primary-dark/80 to-veda-primary-dark/90"></div>
                <div className="relative z-10 p-6 max-w-4xl">
                    <h1 className="font-poppins text-4xl md:text-5xl font-bold mb-4 leading-tight drop-shadow-lg">
                        About The Veda Toddlers
                    </h1>
                    <p className="font-opensans text-lg md:text-xl max-w-3xl mx-auto font-light text-white/95 drop-shadow-md">
                        A "new-age" preschool and daycare for children aged 1.5 to 6 years, emphasizing joyful, holistic, and experiential learning.
                    </p>
                </div>
            </section>

            {/* Overview & Philosophy */}
            <section className="py-16 px-4 bg-veda-background-DEFAULT text-center">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold font-poppins text-veda-text-heading mb-6">Our Philosophy</h2>
                    <p className="text-lg text-veda-text-DEFAULT leading-relaxed">
                        We blend global early education standards with rich Indian values, aiming to nurture confident, kind, and creative learners through a child-centered philosophy.
                    </p>
                </div>
            </section>

            {/* Section B: Core Values - Redesigned */}
            <section className="py-16 px-4 bg-veda-background-muted">
                <h2 className="text-center font-poppins text-3xl font-bold text-veda-text-heading mb-4">
                    Core Values
                </h2>
                <p className="text-center text-veda-text-muted mb-12 max-w-2xl mx-auto">The principles that guide everything we do</p>
                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-wrap justify-center gap-6">
                        {values.map((value, idx) => (
                            <div key={idx} className="w-full md:w-[calc(50%-12px)] lg:w-[calc(25%-18px)]">
                                <div className={`relative bg-gradient-to-br ${value.bgGradient} rounded-2xl p-6 h-full border ${value.borderColor} shadow-soft hover:shadow-softer hover:-translate-y-2 transition-all duration-300 group overflow-hidden`}>
                                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-white/20 to-transparent rounded-full -translate-y-1/2 translate-x-1/2"></div>
                                    <div className="relative z-10 text-center">
                                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${value.gradient} text-white mx-auto mb-5 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                                            <value.Icon size={30} />
                                        </div>
                                        <h3 className="text-lg font-bold mb-3 text-veda-text-heading font-poppins">{value.title}</h3>
                                        <p className="text-veda-text-muted text-sm leading-relaxed">{value.text}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section C: The Journey Timeline - Enhanced */}
            <section className="py-16 px-4 bg-veda-secondary-light/30">
                <h2 className="text-center font-poppins text-3xl font-bold text-veda-text-heading mb-4">
                    Our History & Growth
                </h2>
                <p className="text-center text-veda-text-muted mb-12 max-w-2xl mx-auto">A decade of excellence in education</p>
                <div className="relative max-w-4xl mx-auto py-5">
                    {/* Dotted Line */}
                    <div className="absolute top-0 bottom-0 left-1/2 w-0 border-l-2 border-dashed border-veda-primary/30 -translate-x-1/2 hidden md:block"></div>

                    {timeline.map((item, idx) => (
                        <div key={idx} className={`relative md:w-1/2 w-full mb-8 md:mb-12 box-border ${item.side === 'left' ? 'md:mr-auto md:pr-12 md:text-right' : 'md:ml-auto md:pl-12 md:text-left'} text-center md:text-right`}>
                            <div className={`relative ${item.side === 'right' ? 'md:text-left' : ''}`}>
                                <div className="bg-white p-6 rounded-2xl shadow-soft relative z-10 inline-block text-left md:inline-block md:w-full border border-veda-border hover:shadow-softer hover:-translate-y-1 transition-all duration-300 group">
                                    <div className="font-poppins text-3xl font-bold text-veda-primary mb-2 leading-none group-hover:text-veda-accent transition-colors">{item.year}</div>
                                    <p className="text-veda-text-DEFAULT text-base leading-relaxed">{item.text}</p>
                                </div>
                            </div>

                            {/* Icon Bubble */}
                            <div className={`hidden md:flex absolute top-3 w-12 h-12 items-center justify-center z-20 bg-gradient-to-br from-veda-accent to-amber-500 text-white rounded-xl shadow-lg ${item.side === 'left' ? '-right-[66px]' : '-left-[66px]'}`}>
                                <item.Icon size={22} />
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Section D: Leadership Team - Redesigned */}
            <section className="py-16 px-4 bg-veda-background-DEFAULT">
                <h2 className="text-center font-poppins text-3xl font-bold text-veda-text-heading mb-4">
                    Leadership Team
                </h2>
                <p className="text-center text-veda-text-muted mb-12 max-w-2xl mx-auto">Meet the passionate people behind The Veda</p>
                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-wrap justify-center gap-6 text-center">
                        {leaders.map((leader, idx) => (
                            <div key={idx} className="w-[calc(50%-12px)] sm:w-[calc(33.333%-16px)] lg:w-[calc(25%-18px)] bg-white rounded-2xl p-5 shadow-soft border border-veda-border hover:shadow-softer hover:-translate-y-2 transition-all duration-300 group">
                                <div className={`w-20 h-20 bg-gradient-to-br ${leader.color} rounded-2xl mx-auto mb-4 flex items-center justify-center text-2xl text-white font-bold shadow-lg group-hover:scale-110 transition-transform`}>
                                    <span>{leader.name.charAt(0)}</span>
                                </div>
                                <h3 className="text-base font-bold text-veda-text-heading mb-1 font-poppins">{leader.name}</h3>
                                <p className="text-xs text-veda-text-muted font-medium uppercase tracking-wider">{leader.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section E: Awards & Recognition - Redesigned */}
            <section className="py-20 px-4 bg-veda-background-soft relative overflow-hidden">
                <div className="max-w-6xl mx-auto relative z-10">
                    <div className="text-center mb-12">
                        <h2 className="font-poppins text-3xl font-bold mb-4 text-veda-text-heading">
                            Our Awards
                        </h2>
                        <p className="text-veda-text-DEFAULT max-w-2xl mx-auto">
                            We're proud to be recognized as one of India's most trusted preschool brands.
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-6">
                        {[
                            { text: 'AIP – Association of Indian Principals: Top Ranked Early Years School in Mohali', image: '/images/aip-award.jpg' },
                            { text: 'Indian School Award: Best Pre School with Holistic Development', image: '/images/indian-school-award.jpg' },
                            { text: 'Advita Women Entrepreneur Award', image: '/images/advita-award.jpg' },
                            { text: 'Star Education Award 2024', image: '/images/star-education-award.jpg' },
                            { text: 'Visionary Leader Award', image: '/images/visionary-leader-award.jpg' }
                        ].map((award, idx) => (
                            <div key={idx} className="w-[calc(50%-12px)] md:w-[calc(25%-18px)] group">
                                <div className="relative bg-white rounded-3xl overflow-hidden shadow-soft hover:shadow-softer transition-all duration-300 hover:-translate-y-2">
                                    {/* Image Container */}
                                    <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-veda-secondary-light via-white to-veda-accent/10">
                                        <img
                                            src={award.image}
                                            alt={award.text}
                                            className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>
                                    {/* Text Label */}
                                    <div className="p-4 bg-gradient-to-r from-veda-primary to-veda-primary-dark">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 bg-veda-accent rounded-xl flex items-center justify-center shadow-lg flex-shrink-0">
                                                <Trophy size={20} className="text-veda-primary-dark" />
                                            </div>
                                            <p className="text-white font-poppins font-medium text-sm leading-snug">
                                                {award.text}
                                            </p>
                                        </div>
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

