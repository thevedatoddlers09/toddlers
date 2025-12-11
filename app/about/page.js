export const metadata = {
    title: 'About Us - The Veda Toddlers',
    description: 'Learn about our vision, mission, and journey from 2008 to today.',
};

export default function AboutPage() {
    // Core Values Data
    const values = [
        {
            title: 'Vision',
            icon: '👁️',
            borderClass: 'border-brand-red',
            iconBg: 'bg-brand-red text-white',
            text: 'To be the leading early education provider, enabling every child to become a lifelong learner and a leader of tomorrow.',
        },
        {
            title: 'Mission',
            icon: '🎯',
            borderClass: 'border-brand-blue',
            iconBg: 'bg-brand-blue text-white',
            text: 'To provide a culturally appropriate environment assuring moral values, love, and protection for every child.',
        },
        {
            title: 'Philosophy',
            icon: '💛',
            borderClass: 'border-brand-yellow',
            iconBg: 'bg-brand-yellow text-white',
            text: 'We believe in a scientific, play-based curriculum that nurtures the unique potential of every child.',
        },
    ];

    // Timeline Data
    const timeline = [
        { year: '2008', text: 'Roots to Wings was born, staring our journey in early childhood education.', icon: '🐝', side: 'left' },
        { year: '2012', text: 'Rebranded to "The Veda Toddlers", setting a new standard for preschools.', icon: '🦒', side: 'right' },
        { year: '2015', text: 'Launched the first Veda Toddlers Marathon, a unique community event.', icon: '🪁', side: 'left' },
        { year: '2020', text: 'Pivoted to Online Learning seamlessly during the pandemic.', icon: '🧱', side: 'right' },
        { year: '2025', text: 'Expanded to 900+ Centres across the country.', icon: '🚀', side: 'left' },
    ];

    // Leadership Data
    const leaders = [
        { name: 'Sajid Ali', role: 'Chief Executive Officer', image: '/images/leader1.jpg' },
        { name: 'Rani Abrol', role: 'Chief Financial Officer', image: '/images/leader2.jpg' },
        { name: 'Geetika Bahuguna', role: 'COO - Academics', image: '/images/leader3.jpg' },
    ];

    // Awards Data
    const awards = [
        { icon: '🏆', label: 'Leading Preschool of India 2024' },
        { icon: '⭐', label: 'Best Curriculum Design 2025' },
        { icon: '🎖️', label: 'Innovation in Early Education 2024' },
        { icon: '🏅', label: 'Business World Education Award' },
        { icon: '🌟', label: 'ET Education Excellence' },
    ];

    return (
        <main>
            {/* Section A: Hero Banner */}
            <section className="relative h-[50vh] min-h-[400px] bg-cover bg-center flex items-center justify-center text-center text-white"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&q=80')" }}>
                <div className="absolute inset-0 bg-gradient-to-br from-black/30 to-black/60"></div>
                <div className="relative z-10 p-6 max-w-4xl">
                    <h1 className="font-poppins text-5xl md:text-5xl font-extrabold mb-4 leading-tight drop-shadow-md">
                        At The Veda Toddlers, the early years count.
                    </h1>
                    <p className="font-opensans text-lg md:text-xl max-w-2xl mx-auto font-medium drop-shadow-sm">
                        A scientific, play-based approach to early childhood education.
                    </p>
                </div>
            </section>

            {/* Section B: Vision, Mission, Philosophy */}
            <section className="py-14 px-4 bg-white relative overflow-hidden">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {values.map((value, idx) => (
                            <div key={idx}
                                className={`bg-white p-10 rounded-xl shadow-lg border border-gray-100 text-center relative transition-transform duration-300 hover:scale-105 hover:shadow-2xl border-t-[5px] ${value.borderClass.replace('border-', 'border-')}`}>
                                <div className={`w-[90px] h-[90px] mx-auto mb-6 rounded-full flex items-center justify-center text-4xl shadow-sm ${value.iconBg}`}>
                                    {value.icon}
                                </div>
                                <h3 className="text-xl font-extrabold mb-3 text-gray-800 uppercase tracking-wide font-poppins">{value.title}</h3>
                                <p className="text-gray-600 text-[0.95rem] leading-relaxed max-w-[90%] mx-auto">{value.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section C: The Journey Timeline */}
            <section className="py-14 px-4 bg-blue-50/50">
                <h2 className="text-center font-poppins text-4xl font-bold text-[#1a1a2e] mb-12 relative uppercase tracking-wide after:content-[''] after:block after:w-[50px] after:h-[3px] after:bg-brand-red after:mx-auto after:mt-3 after:rounded">
                    Our Journey
                </h2>
                <div className="relative max-w-4xl mx-auto py-5">
                    {/* Dotted Line */}
                    <div className="absolute top-0 bottom-0 left-1/2 w-0 border-l-[3px] border-dotted border-timeline-line -translate-x-1/2 hidden md:block"></div>

                    {timeline.map((item, idx) => (
                        <div key={idx} className={`relative md:w-1/2 w-full mb-8 md:mb-12 box-border ${item.side === 'left' ? 'md:mr-auto md:pr-12 md:text-right' : 'md:ml-auto md:pl-12 md:text-left'} text-center md:text-right`}>
                            {/* Specific adjustments for right side text alignment */}
                            <div className={`relative ${item.side === 'right' ? 'md:text-left' : ''}`}>
                                <div className="bg-white p-6 rounded-lg shadow-sm relative z-10 inline-block text-left md:inline-block md:w-full">
                                    <div className="font-poppins text-3xl font-extrabold text-timeline-year mb-1 leading-none">{item.year}</div>
                                    <p className="text-gray-600 text-[0.95rem] leading-relaxed">{item.text}</p>
                                </div>
                            </div>

                            {/* Icon Bubble */}
                            <div className={`hidden md:flex absolute top-0 w-10 h-10 items-center justify-center text-4xl z-20 drop-shadow-sm ${item.side === 'left' ? '-right-[65px]' : '-left-[65px]'}`}>
                                {item.icon}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Section D: Leadership Team */}
            <section className="py-14 px-4 bg-white">
                <h2 className="text-center font-poppins text-4xl font-bold text-[#1a1a2e] mb-12 relative uppercase tracking-wide after:content-[''] after:block after:w-[50px] after:h-[3px] after:bg-brand-red after:mx-auto after:mt-3 after:rounded">
                    Leadership Team
                </h2>
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                        {leaders.map((leader, idx) => (
                            <div key={idx} className="bg-transparent transition-transform duration-300 hover:-translate-y-2">
                                <div className="w-[130px] h-[130px] bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center text-5xl text-white font-bold shadow-md bg-gradient-to-br from-[#a29bfe] to-[#6c5ce7] overflow-hidden">
                                    {/* Placeholder */}
                                    {leader.name.charAt(0)}
                                </div>
                                <h3 className="text-lg font-bold text-brand-blue mb-1">{leader.name}</h3>
                                <p className="text-sm text-gray-400 font-medium uppercase tracking-wider">{leader.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section E: Awards & Recognition */}
            <section className="py-14 px-4 bg-gray-50">
                <h2 className="text-center font-poppins text-4xl font-bold text-[#1a1a2e] mb-12 relative uppercase tracking-wide after:content-[''] after:block after:w-[50px] after:h-[3px] after:bg-brand-red after:mx-auto after:mt-3 after:rounded">
                    Recognition
                </h2>
                <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto">
                    {awards.map((award, idx) => (
                        <div key={idx} className="bg-white py-4 px-8 rounded-lg border border-gray-200 flex flex-col items-center justify-center gap-2 text-center w-[180px] transition-transform duration-200 hover:-translate-y-1 hover:border-gray-300">
                            <span className="text-3xl mb-1">{award.icon}</span>
                            <span className="text-sm font-semibold text-gray-700 leading-snug">{award.label}</span>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}
