import { Palette, Handshake, ShieldCheck, Rocket, BookOpen, GraduationCap, Baby } from 'lucide-react';

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
            borderClass: 'border-veda-accent',
            iconBg: 'bg-veda-accent text-veda-primary-dark',
            text: 'Balancing academics, creativity, physical activity, and socio-emotional growth.',
        },
        {
            title: 'Respect & Empathy',
            Icon: Handshake,
            borderClass: 'border-veda-primary',
            iconBg: 'bg-veda-primary text-white',
            text: 'Teaching kindness, patience, and understanding to every child.',
        },
        {
            title: 'Care & Safety',
            Icon: ShieldCheck,
            borderClass: 'border-veda-playful-green',
            iconBg: 'bg-veda-playful-green text-white',
            text: 'Prioritizing a warm, secure emotional atmosphere for learning.',
        },
        {
            title: 'Creativity & Exploration',
            Icon: Rocket,
            borderClass: 'border-veda-secondary-dark',
            iconBg: 'bg-veda-secondary text-veda-primary',
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
        { name: 'Mandeep Sharma', role: 'Founder & Director', image: '/images/leader1.jpg' },
        { name: 'Jatinder Pal', role: 'Marketing & Support', image: '/images/leader2.jpg' },
        { name: 'Parul', role: 'Legal & Policy Advisor', image: '/images/leader3.jpg' },
        { name: 'Pooja Chauhan', role: 'Admission & Outreach', image: '/images/leader4.jpg' },
        { name: 'Kanika', role: 'Pedagogy & Training Head', image: '/images/leader5.jpg' },
        { name: 'Sukhmani Kaur', role: 'Academic Learning & Development Head', image: '/images/leader6.jpg' },
        { name: 'Drishti Chugh', role: 'Parenting & Child Development Coach', image: '/images/leader7.jpg' },
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

            {/* Section B: Core Values */}
            <section className="py-16 px-4 bg-veda-background-muted">
                <h2 className="text-center font-poppins text-3xl font-bold text-veda-text-heading mb-12 relative after:content-[''] after:block after:w-12 after:h-1 after:bg-veda-accent after:mx-auto after:mt-4 after:rounded-full">
                    Core Values
                </h2>
                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-wrap justify-center gap-6">
                        {values.map((value, idx) => (
                            <div key={idx}
                                className={`w-full md:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] bg-veda-background-DEFAULT p-6 rounded-2xl shadow-soft border-t-4 ${value.borderClass} text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-softer`}>
                                <div className={`w-14 h-14 mx-auto mb-4 rounded-xl flex items-center justify-center ${value.iconBg}`}>
                                    <value.Icon size={28} />
                                </div>
                                <h3 className="text-lg font-bold mb-2 text-veda-text-heading font-poppins">{value.title}</h3>
                                <p className="text-veda-text-muted text-sm leading-relaxed">{value.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section C: The Journey Timeline */}
            <section className="py-16 px-4 bg-veda-secondary-light/30">
                <h2 className="text-center font-poppins text-3xl font-bold text-veda-text-heading mb-12 relative after:content-[''] after:block after:w-12 after:h-1 after:bg-veda-accent after:mx-auto after:mt-4 after:rounded-full">
                    Our History & Growth
                </h2>
                <div className="relative max-w-4xl mx-auto py-5">
                    {/* Dotted Line */}
                    <div className="absolute top-0 bottom-0 left-1/2 w-0 border-l-2 border-dashed border-veda-primary/30 -translate-x-1/2 hidden md:block"></div>

                    {timeline.map((item, idx) => (
                        <div key={idx} className={`relative md:w-1/2 w-full mb-8 md:mb-12 box-border ${item.side === 'left' ? 'md:mr-auto md:pr-12 md:text-right' : 'md:ml-auto md:pl-12 md:text-left'} text-center md:text-right`}>
                            <div className={`relative ${item.side === 'right' ? 'md:text-left' : ''}`}>
                                <div className="bg-veda-background-DEFAULT p-5 rounded-xl shadow-soft relative z-10 inline-block text-left md:inline-block md:w-full">
                                    <div className="font-poppins text-2xl font-bold text-veda-primary mb-1 leading-none">{item.year}</div>
                                    <p className="text-veda-text-DEFAULT text-sm leading-relaxed">{item.text}</p>
                                </div>
                            </div>

                            {/* Icon Bubble */}
                            <div className={`hidden md:flex absolute top-0 w-10 h-10 items-center justify-center z-20 bg-veda-accent text-veda-primary-dark rounded-xl shadow-soft ${item.side === 'left' ? '-right-[60px]' : '-left-[60px]'}`}>
                                <item.Icon size={18} />
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Section D: Leadership Team */}
            <section className="py-16 px-4 bg-veda-background-DEFAULT">
                <h2 className="text-center font-poppins text-3xl font-bold text-veda-text-heading mb-12 relative after:content-[''] after:block after:w-12 after:h-1 after:bg-veda-accent after:mx-auto after:mt-4 after:rounded-full">
                    Leadership Team
                </h2>
                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-wrap justify-center gap-6 text-center">
                        {leaders.map((leader, idx) => (
                            <div key={idx} className="w-[calc(50%-12px)] sm:w-[calc(33.333%-16px)] lg:w-[calc(25%-18px)] transition-all duration-300 hover:-translate-y-1 group">
                                <div className="w-24 h-24 bg-veda-secondary-light rounded-2xl mx-auto mb-3 flex items-center justify-center text-3xl text-veda-primary font-bold shadow-soft overflow-hidden border-2 border-transparent group-hover:border-veda-accent transition-colors">
                                    <span className="group-hover:text-veda-accent transition-colors">{leader.name.charAt(0)}</span>
                                </div>
                                <h3 className="text-base font-bold text-veda-text-heading mb-1">{leader.name}</h3>
                                <p className="text-xs text-veda-text-muted font-medium uppercase tracking-wider px-2">{leader.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section E: Awards & Recognition */}
            <section className="py-20 px-4 bg-veda-background-soft relative overflow-hidden">
                <div className="max-w-6xl mx-auto relative z-10">
                    <div className="text-center mb-12">
                        <h2 className="font-poppins text-3xl font-bold mb-4 text-veda-text-heading">
                            Our Awards
                        </h2>
                        <p className="text-veda-text-DEFAULT max-w-2xl mx-auto">
                            We're proud to be recognized as one of India's most trusted preschool brands. Our accolades reflect the trust parents place in us.
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-6">
                        {[
                            { text: 'Top Ranked Early Years School in Mohali.', image: 'https://images.unsplash.com/photo-1610214959124-76229c1fb29a?auto=format&fit=crop&q=80' },
                            { text: 'Advita Women Entrepreneur Award.', image: 'https://images.unsplash.com/photo-1549576490-b0b4831ef60a?auto=format&fit=crop&q=80' },
                            { text: 'Star Education Award 2024 (Best Preschool Mohali).', image: 'https://images.unsplash.com/photo-1601004562473-b7899be4a9a0?auto=format&fit=crop&q=80' },
                            { text: 'Visionary Leader Award.', image: 'https://images.unsplash.com/photo-1521406699684-2cdad2529ab8?auto=format&fit=crop&q=80' }
                        ].map((award, idx) => (
                            <div key={idx} className="w-[calc(50%-12px)] md:w-[calc(25%-18px)] flex flex-col group">
                                <div className="relative aspect-[3/4] bg-veda-background-DEFAULT rounded-2xl overflow-hidden shadow-soft mb-4 transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-softer border border-veda-border">
                                    <img
                                        src={award.image}
                                        alt="Award"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <p className="text-center font-poppins text-veda-text-heading font-medium text-sm leading-snug">
                                    {award.text}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
