import PageHero from '@/components/PageHero';
import { PersonStanding, BookOpen, Brain, Palette, Heart, Globe, Sparkles } from 'lucide-react';

export const metadata = {
    title: 'Curriculum & Programs - The Veda Toddlers',
    description: 'Explore our activity-based 7 Spectrum Curriculum and specialized programs like Robotics, LEGO learning, and more.',
};

export default function ProgramsPage() {
    // 7 Spectrums of Development
    const spectrums = [
        { title: 'Physical Development', desc: 'Strength, coordination, and motor skills through active play.', Icon: PersonStanding, color: 'bg-veda-playful-peach' },
        { title: 'Language & Literacy', desc: 'Early reading, writing, and effective communication skills.', Icon: BookOpen, color: 'bg-veda-playful-blue' },
        { title: 'Cognitive Development', desc: 'Problem-solving, critical thinking, and intellectual exploration.', Icon: Brain, color: 'bg-veda-accent' },
        { title: 'Aesthetic Development', desc: 'Art, music, dance, and creative self-expression.', Icon: Palette, color: 'bg-veda-secondary-dark' },
        { title: 'Socio-Emotional Growth', desc: 'Fostering teamwork, empathy, moral values, and emotional intelligence.', Icon: Heart, color: 'bg-veda-playful-green' },
        { title: 'Cultural Awareness', desc: 'Understanding traditions, festivals, and diversity.', Icon: Globe, color: 'bg-veda-primary' },
        { title: 'Spiritual Development', desc: 'Mindfulness, values, and inner peace.', Icon: Sparkles, color: 'bg-veda-primary-light' },
    ];

    // Specialized Programs
    const programs = [
        {
            title: 'Robotics',
            desc: 'Introduces technology through hands-on activities using "ROBOTIME" kits. Focuses on coding basics, problem-solving, and STEM foundations (Starter and Beginner levels).',
            image: 'https://images.unsplash.com/photo-1561557944-6e7860d1a7eb?auto=format&fit=crop&q=80',
            tags: ['STEM', 'Coding', 'Innovation']
        },
        {
            title: 'LEGO Learning',
            desc: 'Uses LEGO blocks to develop spatial awareness, fine motor skills, and engineering concepts through structured play.',
            image: 'https://images.unsplash.com/photo-1585366119957-e9730b6d0f60?auto=format&fit=crop&q=80',
            tags: ['Creativity', 'Engineering', 'Motor Skills']
        },
        {
            title: 'Pretend & Play',
            desc: 'Role-playing activities (doctors, chefs, astronauts) that develop imagination, language, and social interaction skills.',
            image: 'https://images.unsplash.com/photo-1545558014-8692077e9b5c?auto=format&fit=crop&q=80',
            tags: ['Imagination', 'Social Skills', 'Role Play']
        },
        {
            title: 'Skill Brew',
            desc: 'A unique initiative to nurture essential life skills through fun, engaging everyday activities.',
            image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&q=80',
            tags: ['Life Skills', 'Independence', 'Confidence']
        },
        {
            title: 'EduPrime',
            desc: 'An advanced learning platform integrating modern teaching methods with digital tools for enhanced learning.',
            image: 'https://images.unsplash.com/photo-1555436169-20e93ee6638b?auto=format&fit=crop&q=80',
            tags: ['Digital Learning', 'Future Ready', 'Smart Class']
        },
    ];

    return (
        <main className="bg-veda-background-DEFAULT">
            {/* PageHero removed as per request */}

            {/* Curriculum Introduction */}
            <section className="py-16 px-4 text-center">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-veda-primary text-sm font-bold uppercase tracking-widest mb-2">Our Methodology</h2>
                    <h3 className="font-poppins text-3xl font-bold text-veda-text-heading mb-6">The "7 Spectrums" Curriculum</h3>
                    <p className="text-base text-veda-text-DEFAULT leading-relaxed">
                        At The Veda Toddlers, we follow a unique, activity-based curriculum designed to nurture every aspect of a child's growth. Our 7 Spectrums approach ensures a balanced and holistic development journey.
                    </p>
                </div>
            </section>

            {/* 7 Spectrums Grid */}
            <section className="py-12 px-4 bg-veda-background-muted">
                <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-5">
                    {spectrums.map((item, idx) => (
                        <div key={idx} className="w-full md:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)] xl:w-[calc(25%-15px)] bg-veda-background-DEFAULT p-5 rounded-2xl shadow-soft border border-veda-border hover:shadow-softer hover:-translate-y-1 transition-all duration-300">
                            <div className={`w-12 h-12 ${item.color} text-veda-primary rounded-xl flex items-center justify-center mb-4`}>
                                <item.Icon size={24} />
                            </div>
                            <h4 className="text-lg font-bold text-veda-text-heading mb-2 font-poppins">{item.title}</h4>
                            <p className="text-sm text-veda-text-muted">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Specialized Programs */}
            <section className="py-20 px-4">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-center font-poppins text-3xl font-bold text-veda-text-heading mb-16 relative after:content-[''] after:block after:w-12 after:h-1 after:bg-veda-accent after:mx-auto after:mt-4 after:rounded-full">
                        Specialized Programs
                    </h2>

                    <div className="space-y-12">
                        {programs.map((program, idx) => (
                            <div key={idx} className={`flex flex-col md:flex-row gap-8 items-center ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                                <div className="w-full md:w-1/2">
                                    <div className="relative rounded-2xl overflow-hidden shadow-softer aspect-[4/3] group">
                                        <img src={program.image} alt={program.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                                    </div>
                                </div>
                                <div className="w-full md:w-1/2 space-y-3">
                                    <div className="flex gap-2 flex-wrap mb-2">
                                        {program.tags.map((tag, tIdx) => (
                                            <span key={tIdx} className="bg-veda-secondary-light text-veda-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">{tag}</span>
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
