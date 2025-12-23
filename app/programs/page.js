import { PersonStanding, BookOpen, Brain, Palette, Heart, Globe, Sparkles, Baby, Sprout, Footprints, PenTool, GraduationCap, Clock, Sun, Moon, Music, Mic, User, CircleDollarSign, Star, Rocket, Smile } from 'lucide-react';

export const metadata = {
    title: 'Curriculum & Programs - The Veda Toddlers',
    description: 'Explore our activity-based 7 Spectrum Curriculum and specialized programs like Pre-School, Daycare, and After-School activities.',
};

export default function ProgramsPage() {
    // 7 Spectrums of Development
    const spectrums = [
        { title: 'Physical Development', desc: 'Strength, coordination, and motor skills through active play.', Icon: PersonStanding, gradient: 'from-veda-playful-peach to-rose-400', bgGradient: 'from-veda-playful-peach/15 via-white to-rose-50' },
        { title: 'Language & Literacy', desc: 'Early reading, writing, and effective communication skills.', Icon: BookOpen, gradient: 'from-veda-playful-blue to-blue-500', bgGradient: 'from-veda-playful-blue/15 via-white to-blue-50' },
        { title: 'Cognitive Development', desc: 'Problem-solving, critical thinking, and intellectual exploration.', Icon: Brain, gradient: 'from-veda-accent to-amber-500', bgGradient: 'from-veda-accent/10 via-white to-amber-50' },
        { title: 'Aesthetic Development', desc: 'Art, music, dance, and creative self-expression.', Icon: Palette, gradient: 'from-veda-secondary-dark to-purple-600', bgGradient: 'from-veda-secondary/30 via-white to-purple-50' },
        { title: 'Socio-Emotional Growth', desc: 'Fostering teamwork, empathy, moral values, and emotional intelligence.', Icon: Heart, gradient: 'from-veda-playful-green to-green-600', bgGradient: 'from-veda-playful-green/15 via-white to-green-50' },
        { title: 'Cultural Awareness', desc: 'Understanding traditions, festivals, and diversity.', Icon: Globe, gradient: 'from-veda-primary to-veda-primary-dark', bgGradient: 'from-veda-secondary/20 via-white to-veda-secondary/10' },
        { title: 'Spiritual Development', desc: 'Mindfulness, values, and inner peace.', Icon: Sparkles, gradient: 'from-amber-400 to-veda-accent', bgGradient: 'from-amber-50 via-white to-veda-accent/5' },
    ];

    // Pre-School Levels
    const preschoolLevels = [
        { name: 'Seedling', age: '1 to 2 yrs', desc: 'Gentle socialization & sensory play', Icon: Baby, color: 'text-rose-600', bg: 'bg-rose-100', border: 'border-rose-200' },
        { name: 'Sprouts', age: '2 to 3 yrs', desc: 'Language, motor skills & curiosity', Icon: Sprout, color: 'text-green-600', bg: 'bg-green-100', border: 'border-green-200' },
        { name: 'Explorer', age: '3 to 4 yrs', desc: 'Independence & foundational concepts', Icon: Footprints, color: 'text-blue-600', bg: 'bg-blue-100', border: 'border-blue-200' },
        { name: 'Creator', age: '4 to 5 yrs', desc: 'Creativity, problem-solving & collaboration', Icon: PenTool, color: 'text-amber-600', bg: 'bg-amber-100', border: 'border-amber-200' },
        { name: 'UKG', age: '5 to 6 yrs', desc: 'Prep for formal schooling, confidence', Icon: GraduationCap, color: 'text-purple-600', bg: 'bg-purple-100', border: 'border-purple-200' },
    ];

    // After-School Activities
    const afterSchoolActivities = [
        { name: 'Art & Craft', Icon: Palette, color: 'text-rose-600', bg: 'bg-rose-50', hover: 'hover:bg-rose-100' },
        { name: 'Painting', Icon: Palette, color: 'text-orange-600', bg: 'bg-orange-50', hover: 'hover:bg-orange-100' },
        { name: 'Dance', Icon: Music, color: 'text-yellow-600', bg: 'bg-yellow-50', hover: 'hover:bg-yellow-100' },
        { name: 'Personality Dev', Icon: User, color: 'text-green-600', bg: 'bg-green-50', hover: 'hover:bg-green-100' },
        { name: 'Public Speaking', Icon: Mic, color: 'text-teal-600', bg: 'bg-teal-50', hover: 'hover:bg-teal-100' },
        { name: 'Right Brain', Icon: Brain, color: 'text-blue-600', bg: 'bg-blue-50', hover: 'hover:bg-blue-100' },
        { name: 'Tuition Support', Icon: BookOpen, color: 'text-indigo-600', bg: 'bg-indigo-50', hover: 'hover:bg-indigo-100' },
        { name: 'Financial Literacy', Icon: CircleDollarSign, color: 'text-purple-600', bg: 'bg-purple-50', hover: 'hover:bg-purple-100' },
    ];

    return (
        <main className="bg-white">
            {/* Hero Banner */}
            <section className="relative h-[45vh] min-h-[350px] bg-cover bg-center flex items-center justify-center text-center text-white"
                style={{ backgroundImage: "url('/programs-bg.png')" }}>
                <div className="absolute inset-0 bg-gradient-to-br from-veda-primary-dark/80 to-veda-primary-dark/90"></div>
                <div className="relative z-10 p-6 max-w-5xl">
                    <span className="inline-block py-1 px-4 rounded-full bg-white/20 text-white font-bold uppercase tracking-widest text-xs mb-4 border border-white/30">Our Methodology</span>
                    <h1 className="font-poppins text-4xl md:text-5xl font-bold mb-4 leading-tight drop-shadow-lg text-white">
                        The "7 Spectrums" Curriculum
                    </h1>
                    <p className="font-opensans text-xl md:text-2xl max-w-3xl mx-auto font-light text-white/95 drop-shadow-md">
                        At The Veda Toddlers, we follow a unique, activity-based curriculum designed to nurture every aspect of a child's growth.
                    </p>
                </div>
            </section>

            {/* 7 Spectrums Grid */}
            <section className="py-20 px-4 bg-veda-background-muted">
                <div className="max-w-[1400px] mx-auto flex flex-wrap justify-center gap-6">
                    {spectrums.map((item, idx) => (
                        <div key={idx} className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] xl:w-[calc(25%-18px)]">
                            <div className={`relative bg-gradient-to-br ${item.bgGradient} p-6 rounded-3xl shadow-soft border border-white/60 hover:shadow-lg hover:-translate-y-2 transition-all duration-300 h-full group overflow-hidden`}>
                                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-white/40 to-transparent rounded-full -translate-y-1/3 translate-x-1/3 blur-xl"></div>
                                <div className="relative z-10">
                                    <div className={`w-14 h-14 bg-gradient-to-br ${item.gradient} text-white rounded-2xl flex items-center justify-center mb-4 shadow-md group-hover:rotate-6 transition-transform`}>
                                        <item.Icon size={26} />
                                    </div>
                                    <h4 className="text-xl font-bold text-veda-text-heading mb-2 font-poppins">{item.title}</h4>
                                    <p className="text-sm text-veda-text-muted leading-relaxed font-medium">{item.desc}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Specialized Programs Intro */}
            <section className="pt-20 pb-12 px-4 text-center bg-white relative">
                <div className="absolute top-10 left-10 text-veda-playful-peach/20 animate-bounce delay-700"><Star size={48} /></div>
                <div className="absolute top-20 right-20 text-veda-playful-blue/20 animate-pulse"><Rocket size={56} /></div>

                <div className="max-w-4xl mx-auto relative z-10">
                    <h2 className="text-center font-poppins text-4xl md:text-5xl font-bold text-veda-text-heading mb-6">
                        Our Learning Worlds
                    </h2>
                    <p className="text-center text-veda-text-muted text-xl max-w-2xl mx-auto font-light">
                        Three unique environments designed to inspire, nurture, and grow with your child.
                    </p>
                </div>
            </section>

            <div className="max-w-[1400px] mx-auto px-4 pb-24 space-y-12">

                {/* 1. Pre-School World */}
                <section className="bg-gradient-to-br from-rose-50 to-white rounded-[3rem] p-8 md:p-12 shadow-soft border border-rose-100 relative overflow-hidden group hover:shadow-softer transition-shadow duration-500">
                    <div className="absolute -right-20 -top-20 w-96 h-96 bg-rose-100 rounded-full blur-3xl opacity-50 group-hover:scale-110 transition-transform duration-700"></div>

                    <div className="relative z-10">
                        <div className="flex flex-col md:flex-row gap-4 items-center mb-10">
                            <div className="bg-white p-4 rounded-2xl shadow-sm text-rose-500">
                                <Star size={40} className="fill-rose-100" />
                            </div>
                            <div>
                                <h3 className="text-3xl font-bold font-poppins text-veda-text-heading">Pre-School Program</h3>
                                <p className="text-rose-600 font-medium">For Little Learners (1 to 6 Years)</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6">
                            {preschoolLevels.map((level, idx) => (
                                <div key={idx} className="relative">
                                    {/* Line connector for desktop */}
                                    {idx < preschoolLevels.length - 1 && (
                                        <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-1 border-t-2 border-dashed border-rose-200 z-0"></div>
                                    )}

                                    <div className="bg-white rounded-2xl p-6 h-full border-2 border-transparent hover:border-rose-200 shadow-sm hover:shadow-md transition-all duration-300 relative z-10 flex flex-col items-center text-center group/card">
                                        <div className={`w-16 h-16 rounded-full ${level.bg} ${level.color} flex items-center justify-center mb-4 group-hover/card:scale-110 transition-transform`}>
                                            <level.Icon size={32} />
                                        </div>
                                        <span className={`text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-full ${level.bg} ${level.color} mb-3`}>
                                            {level.age}
                                        </span>
                                        <h4 className="text-lg font-bold text-veda-text-heading mb-2">{level.name}</h4>
                                        <p className="text-sm text-veda-text-muted leading-snug">{level.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 2. Daycare World */}
                <section className="bg-gradient-to-br from-amber-50 to-white rounded-[3rem] p-8 md:p-12 shadow-soft border border-amber-100 relative overflow-hidden group hover:shadow-softer transition-shadow duration-500">
                    <div className="absolute -left-20 -bottom-20 w-96 h-96 bg-amber-100 rounded-full blur-3xl opacity-50 group-hover:scale-110 transition-transform duration-700"></div>

                    <div className="relative z-10 flex flex-col lg:flex-row gap-12 items-center">
                        <div className="lg:w-2/5 w-full">
                            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-[2.5rem] shadow-sm border border-amber-200 text-center relative">
                                <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-amber-500 text-white p-3 rounded-2xl shadow-md">
                                    <Clock size={32} />
                                </div>
                                <h3 className="text-3xl font-bold font-poppins text-veda-text-heading mt-6 mb-2">Daycare</h3>
                                <p className="text-amber-600 font-medium mb-8">Home Away From Home</p>

                                <div className="space-y-4">
                                    <div className="bg-amber-50 p-4 rounded-2xl border border-amber-100 flex items-center gap-4 text-left">
                                        <div className="bg-white p-3 rounded-full text-amber-500 shadow-sm"><Sun size={24} /></div>
                                        <div>
                                            <div className="text-xs font-bold text-amber-400 uppercase">Full Day</div>
                                            <div className="font-bold text-veda-text-heading text-lg">9:00 AM - 6:00 PM</div>
                                        </div>
                                    </div>
                                    <div className="bg-indigo-50 p-4 rounded-2xl border border-indigo-100 flex items-center gap-4 text-left">
                                        <div className="bg-white p-3 rounded-full text-indigo-500 shadow-sm"><Moon size={24} /></div>
                                        <div>
                                            <div className="text-xs font-bold text-indigo-400 uppercase">Half Day</div>
                                            <div className="font-bold text-veda-text-heading text-lg">1:00 PM - 6:00 PM</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="lg:w-3/5 w-full">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {['Safe Environment', 'Caring Staff', 'Healthy Meals', 'Age-Appropriate Activities'].map((feat, i) => (
                                    <div key={i} className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm border border-amber-50 hover:border-amber-200 transition-colors">
                                        <div className="bg-amber-100 p-2 rounded-full text-amber-600">
                                            <Smile size={20} />
                                        </div>
                                        <span className="font-bold text-veda-text-heading">{feat}</span>
                                    </div>
                                ))}
                            </div>
                            <p className="mt-8 text-lg text-veda-text-muted leading-relaxed">
                                We provide a safe, caring, and engaging space for children from <strong className="text-amber-600">8 months onwards</strong>. Our environment ensures comfort, supervision, and joyful experiences throughout the day.
                            </p>
                        </div>
                    </div>
                </section>

                {/* 3. After-School World */}
                <section className="bg-gradient-to-br from-blue-50 to-white rounded-[3rem] p-8 md:p-12 shadow-soft border border-blue-100 relative overflow-hidden group hover:shadow-softer transition-shadow duration-500">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-blue-100/30 to-transparent opacity-50"></div>

                    <div className="relative z-10 text-center">
                        <div className="inline-flex items-center gap-3 bg-blue-100/50 px-6 py-2 rounded-full mb-8">
                            <Rocket size={24} className="text-blue-600" />
                            <h3 className="text-2xl font-bold font-poppins text-veda-text-heading">After-School Explorers</h3>
                        </div>

                        <p className="max-w-3xl mx-auto text-lg text-veda-text-muted mb-12">
                            Designed to enrich children beyond academics. Pick your passion and start building confidence!
                        </p>

                        <div className="flex flex-wrap justify-center gap-4">
                            {afterSchoolActivities.map((activity, idx) => (
                                <div key={idx} className={`group cursor-default`}>
                                    <div className={`
                                        flex items-center gap-3 pl-4 pr-6 py-3 rounded-full 
                                        bg-white shadow-soft border border-transparent 
                                        ${activity.hover} hover:shadow-md transition-all duration-300 transform hover:-translate-y-1
                                    `}>
                                        <div className={`w-10 h-10 rounded-full ${activity.bg} ${activity.color} flex items-center justify-center`}>
                                            <activity.Icon size={20} />
                                        </div>
                                        <span className="font-bold text-veda-text-heading">{activity.name}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

            </div>
        </main>
    );
}
