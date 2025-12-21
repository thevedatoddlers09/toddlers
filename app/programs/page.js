import PageHero from '@/components/PageHero';
import { PersonStanding, BookOpen, Brain, Palette, Heart, Globe, Sparkles } from 'lucide-react';

export const metadata = {
    title: 'Curriculum & Programs - The Veda Toddlers',
    description: 'Explore our activity-based 7 Spectrum Curriculum and specialized programs like Robotics, LEGO learning, and more.',
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

    // Specialized Programs
    const programs = [
        {
            title: 'Robotics',
            desc: 'Introduces technology through hands-on activities using "ROBOTIME" kits. Focuses on coding basics, problem-solving, and STEM foundations (Starter and Beginner levels).',
            image: 'https://images.unsplash.com/photo-1561557944-6e7860d1a7eb?auto=format&fit=crop&q=80',
            tags: ['STEM', 'Coding', 'Innovation'],
            gradient: 'from-veda-playful-blue to-blue-600'
        },
        {
            title: 'LEGO Learning',
            desc: 'Uses LEGO blocks to develop spatial awareness, fine motor skills, and engineering concepts through structured play.',
            image: 'https://images.unsplash.com/photo-1585366119957-e9730b6d0f60?auto=format&fit=crop&q=80',
            tags: ['Creativity', 'Engineering', 'Motor Skills'],
            gradient: 'from-veda-accent to-amber-500'
        },
        {
            title: 'Pretend & Play',
            desc: 'Role-playing activities (doctors, chefs, astronauts) that develop imagination, language, and social interaction skills.',
            image: 'https://images.unsplash.com/photo-1545558014-8692077e9b5c?auto=format&fit=crop&q=80',
            tags: ['Imagination', 'Social Skills', 'Role Play'],
            gradient: 'from-veda-playful-peach to-rose-400'
        },
        {
            title: 'Skill Brew',
            desc: 'A unique initiative to nurture essential life skills through fun, engaging everyday activities.',
            image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&q=80',
            tags: ['Life Skills', 'Independence', 'Confidence'],
            gradient: 'from-veda-playful-green to-green-600'
        },
        {
            title: 'EduPrime',
            desc: 'An advanced learning platform integrating modern teaching methods with digital tools for enhanced learning.',
            image: 'https://images.unsplash.com/photo-1555436169-20e93ee6638b?auto=format&fit=crop&q=80',
            tags: ['Digital Learning', 'Future Ready', 'Smart Class'],
            gradient: 'from-veda-primary to-veda-primary-dark'
        },
    ];

    return (
        <main className="bg-veda-background-DEFAULT">
            {/* Curriculum Introduction */}
            <section className="py-16 px-4 text-center">
                <div className="max-w-4xl mx-auto">
                    <span className="inline-block py-1 px-4 rounded-full bg-veda-accent/20 text-veda-primary font-bold uppercase tracking-widest text-xs mb-4 border border-veda-accent/30">Our Methodology</span>
                    <h3 className="font-poppins text-3xl font-bold text-veda-text-heading mb-6">The "7 Spectrums" Curriculum</h3>
                    <p className="text-base text-veda-text-DEFAULT leading-relaxed max-w-3xl mx-auto">
                        At The Veda Toddlers, we follow a unique, activity-based curriculum designed to nurture every aspect of a child's growth. Our 7 Spectrums approach ensures a balanced and holistic development journey.
                    </p>
                </div>
            </section>

            {/* 7 Spectrums Grid - Redesigned */}
            <section className="py-12 px-4 bg-veda-background-muted">
                <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-5">
                    {spectrums.map((item, idx) => (
                        <div key={idx} className="w-full md:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)] xl:w-[calc(25%-15px)]">
                            <div className={`relative bg-gradient-to-br ${item.bgGradient} p-6 rounded-2xl shadow-soft border border-white/50 hover:shadow-softer hover:-translate-y-2 transition-all duration-300 h-full group overflow-hidden`}>
                                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-white/30 to-transparent rounded-full -translate-y-1/2 translate-x-1/2"></div>
                                <div className="relative z-10">
                                    <div className={`w-14 h-14 bg-gradient-to-br ${item.gradient} text-white rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                                        <item.Icon size={26} />
                                    </div>
                                    <h4 className="text-lg font-bold text-veda-text-heading mb-2 font-poppins">{item.title}</h4>
                                    <p className="text-sm text-veda-text-muted leading-relaxed">{item.desc}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Specialized Programs - Redesigned */}
            <section className="py-20 px-4">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-center font-poppins text-3xl font-bold text-veda-text-heading mb-4">
                        Specialized Programs
                    </h2>
                    <p className="text-center text-veda-text-muted mb-16 max-w-2xl mx-auto">Unique learning experiences that prepare children for the future</p>

                    <div className="space-y-16">
                        {programs.map((program, idx) => (
                            <div key={idx} className={`flex flex-col md:flex-row gap-10 items-center ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                                <div className="w-full md:w-1/2">
                                    <div className="relative rounded-3xl overflow-hidden shadow-softer group">
                                        <img src={program.image} alt={program.title} className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-110" />
                                        <div className={`absolute inset-0 bg-gradient-to-t ${program.gradient} opacity-20 group-hover:opacity-30 transition-opacity`}></div>
                                        <div className="absolute top-4 left-4">
                                            <span className="bg-white/90 backdrop-blur-sm text-veda-primary-dark py-1.5 px-4 rounded-full text-xs font-bold shadow-lg">{program.title}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full md:w-1/2 space-y-4">
                                    <div className="flex gap-2 flex-wrap">
                                        {program.tags.map((tag, tIdx) => (
                                            <span key={tIdx} className={`bg-gradient-to-r ${program.gradient} text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-soft`}>{tag}</span>
                                        ))}
                                    </div>
                                    <h3 className="text-2xl font-bold font-poppins text-veda-text-heading">{program.title}</h3>
                                    <p className="text-base text-veda-text-DEFAULT leading-relaxed">{program.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}

