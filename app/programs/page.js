import { PersonStanding, BookOpen, Brain, Palette, Heart, Globe, Sparkles, Baby, Sprout, Footprints, PenTool, GraduationCap, Clock, Sun, Moon, Music, Mic, User, CircleDollarSign, Star } from 'lucide-react';

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
        { name: 'Seedling', age: '1 to 2 years', desc: 'A gentle start to socialization and sensory exploration.', Icon: Baby, color: 'bg-veda-playful-peach', text: 'text-rose-600' },
        { name: 'Sprouts', age: '2 to 3 years', desc: 'Focus on language, motor skills, and curiosity.', Icon: Sprout, color: 'bg-veda-playful-green', text: 'text-green-700' },
        { name: 'Explorer', age: '3 to 4 years', desc: 'Building independence and early foundational concepts.', Icon: Footprints, color: 'bg-veda-playful-blue', text: 'text-blue-600' },
        { name: 'Creator', age: '4 to 5 years', desc: 'Encouraging creativity, problem-solving, and collaboration.', Icon: PenTool, color: 'bg-veda-accent', text: 'text-amber-700' },
        { name: 'UKG', age: '5 to 6 years', desc: 'Preparing for formal schooling with confidence.', Icon: GraduationCap, color: 'bg-veda-secondary', text: 'text-purple-700' },
    ];

    // After-School Activities
    const afterSchoolActivities = [
        { name: 'Art & Craft', Icon: Palette, color: 'bg-rose-100 text-rose-600' },
        { name: 'Painting', Icon: Palette, color: 'bg-orange-100 text-orange-600' },
        { name: 'Dance', Icon: Music, color: 'bg-yellow-100 text-yellow-600' },
        { name: 'Personality Development', Icon: User, color: 'bg-green-100 text-green-600' },
        { name: 'Public Speaking', Icon: Mic, color: 'bg-teal-100 text-teal-600' },
        { name: 'Right Brain Exercises', Icon: Brain, color: 'bg-blue-100 text-blue-600' },
        { name: 'Tuition & Academic Support', Icon: BookOpen, color: 'bg-indigo-100 text-indigo-600' },
        { name: 'Financial Literacy', Icon: CircleDollarSign, color: 'bg-purple-100 text-purple-600' },
    ];

    return (
        <main className="bg-veda-background-DEFAULT">
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
                        At The Veda Toddlers, we follow a unique, activity-based curriculum designed to nurture every aspect of a child's growth. Our 7 Spectrums approach ensures a balanced and holistic development journey.
                    </p>
                </div>
            </section>

            {/* 7 Spectrums Grid */}
            <section className="py-16 px-4 bg-veda-background-muted">
                <div className="max-w-[1400px] mx-auto flex flex-wrap justify-center gap-6">
                    {spectrums.map((item, idx) => (
                        <div key={idx} className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] xl:w-[calc(25%-18px)]">
                            <div className={`relative bg-gradient-to-br ${item.bgGradient} p-6 rounded-2xl shadow-soft border border-white/50 hover:shadow-softer hover:-translate-y-2 transition-all duration-300 h-full group overflow-hidden`}>
                                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-white/30 to-transparent rounded-full -translate-y-1/2 translate-x-1/2"></div>
                                <div className="relative z-10">
                                    <div className={`w-14 h-14 bg-gradient-to-br ${item.gradient} text-white rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                                        <item.Icon size={26} />
                                    </div>
                                    <h4 className="text-xl font-bold text-veda-text-heading mb-2 font-poppins">{item.title}</h4>
                                    <p className="text-base text-veda-text-muted leading-relaxed">{item.desc}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Specialized Programs Intro */}
            <section className="pt-20 pb-10 px-4 text-center">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-center font-poppins text-4xl font-bold text-veda-text-heading mb-4">
                        Our Specialized Programs
                    </h2>
                    <p className="text-center text-veda-text-muted text-lg max-w-2xl mx-auto">
                        Unique learning experiences that prepare children for the future
                    </p>
                </div>
            </section>

            {/* 1. Pre-School Program */}
            <section className="py-10 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-col md:flex-row gap-8 items-start mb-12">
                        <div className="md:w-1/3">
                            <h3 className="text-3xl font-bold font-poppins text-veda-primary mb-4 flex items-center gap-3">
                                <span className="bg-veda-playful-peach/20 p-2 rounded-lg"><Star className="text-veda-playful-peach w-8 h-8" /></span>
                                Pre-School Program
                            </h3>
                            <p className="text-veda-text-muted leading-relaxed text-lg">
                                Our pre-school program caters to children from 1 year to 6 years. The curriculum focuses on early learning, social skills, creativity, and holistic development in a nurturing environment.
                            </p>
                        </div>
                        <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {preschoolLevels.map((level, idx) => (
                                <div key={idx} className="bg-white p-5 rounded-2xl shadow-soft border border-veda-border hover:shadow-lg transition-all hover:-translate-y-1">
                                    <div className="flex items-center justify-between mb-3">
                                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${level.color} text-white`}>
                                            <level.Icon size={20} />
                                        </div>
                                        <span className={`text-sm font-bold px-2 py-1 rounded-full bg-gray-100 ${level.text}`}>{level.age}</span>
                                    </div>
                                    <h4 className="text-xl font-bold text-veda-text-heading mb-1">{level.name}</h4>
                                    <p className="text-sm text-veda-text-muted">{level.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. Daycare Program */}
            <section className="py-16 px-4 bg-veda-secondary-light/30 rounded-[3rem] my-10 max-w-[1400px] mx-auto">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-center">
                    <div className="md:w-1/2 order-2 md:order-1">
                        <div className="bg-white p-8 rounded-3xl shadow-softer relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-veda-playful-peach/20 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                            <h4 className="text-xl font-bold text-veda-text-heading mb-6 flex items-center gap-2">
                                <Clock className="text-veda-accent-dark" />
                                Operational Timings
                            </h4>
                            <div className="space-y-4">
                                <div className="flex items-center p-4 bg-amber-50 rounded-xl border border-amber-100">
                                    <div className="bg-amber-100 p-3 rounded-full mr-4 text-amber-600">
                                        <Sun size={24} />
                                    </div>
                                    <div>
                                        <span className="block text-xs font-bold uppercase text-amber-500 tracking-wider">Full Day</span>
                                        <span className="text-lg font-bold text-veda-text-heading">9:00 am to 6:00 pm</span>
                                    </div>
                                </div>
                                <div className="flex items-center p-4 bg-indigo-50 rounded-xl border border-indigo-100">
                                    <div className="bg-indigo-100 p-3 rounded-full mr-4 text-indigo-600">
                                        <Moon size={24} />
                                    </div>
                                    <div>
                                        <span className="block text-xs font-bold uppercase text-indigo-500 tracking-wider">Half Day</span>
                                        <span className="text-lg font-bold text-veda-text-heading">1:00 pm to 6:00 pm</span>
                                    </div>
                                </div>
                            </div>
                            <p className="mt-6 text-sm text-veda-text-muted italic text-center">
                                *Available Monday to Saturday for children 8 months onwards.
                            </p>
                        </div>
                    </div>
                    <div className="md:w-1/2 order-1 md:order-2 text-center md:text-left">
                        <span className="inline-block py-1 px-3 rounded-full bg-veda-accent-light/50 text-veda-accent-dark font-bold text-sm mb-3">Home away from Home</span>
                        <h3 className="text-4xl font-bold font-poppins text-veda-primary mb-6">Daycare Program</h3>
                        <p className="text-veda-text-muted leading-relaxed text-lg mb-6">
                            We provide a safe, caring, and engaging space for children, ensuring comfort, supervision, and age-appropriate activities throughout the day. Our environment is designed to be a "home away from home" where children feel secure and happy.
                        </p>
                        <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                            {['Safe Environment', 'Caring Staff', 'Engaging Activities', 'Healthy Meals'].map((tag, i) => (
                                <span key={i} className="px-4 py-2 bg-white rounded-full text-veda-text-DEFAULT text-sm shadow-sm border border-veda-border">{tag}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. After-School Program */}
            <section className="py-16 px-4 mb-20">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h3 className="text-3xl font-bold font-poppins text-veda-primary mb-4">After-School Program</h3>
                        <p className="text-veda-text-muted max-w-2xl mx-auto text-lg">
                            Designed to enrich children beyond academics, helping them build confidence, creativity, and essential life skills.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                        {afterSchoolActivities.map((activity, idx) => (
                            <div key={idx} className={`p-4 rounded-xl flex flex-col items-center justify-center text-center gap-3 transition-transform hover:scale-105 ${activity.color} bg-opacity-20`}>
                                <div className={`w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center`}>
                                    <activity.Icon size={24} className="opacity-80" />
                                </div>
                                <span className="font-bold text-sm md:text-base leading-tight">{activity.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}

