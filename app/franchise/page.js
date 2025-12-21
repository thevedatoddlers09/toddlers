
import Button from '@/components/Button';
import { Building2, Wallet, GraduationCap, Heart, HardHat, Users, Megaphone, FlaskConical, Puzzle, PartyPopper } from 'lucide-react';

export const metadata = {
    title: 'Franchise Opportunity - The Veda Toddlers',
    description: 'Partner with us to start your own The Veda Toddlers preschool. Comprehensive support, proven model, and a legacy of excellence.',
};

export default function FranchisePage() {
    const requirements = [
        { label: 'Space Area', value: '2000 - 3000 Sq. Ft.', Icon: Building2 },
        { label: 'Investment', value: 'Moderate', Icon: Wallet },
        { label: 'Staffing', value: 'Qualified Educators (1:10 Ratio)', Icon: GraduationCap },
        { label: 'Passion', value: 'Love for Education', Icon: Heart },
    ];

    const support = [
        { title: 'Setup Assistance', desc: 'Site selection, interior design guidance, and licensing support.', Icon: HardHat },
        { title: 'Recruitment & Training', desc: 'Hiring support, background checks, and comprehensive training (webinars & on-site).', Icon: Users },
        { title: 'Marketing Support', desc: 'High-quality creatives, brochures, banners, and social media toolkits.', Icon: Megaphone },
        { title: 'R&D & Academics', desc: 'Continuous curriculum updates, manuals for safety, HR, and administration.', Icon: FlaskConical },
        { title: 'Material Supply', desc: 'Provision of furniture, Montessori tools, activity kits, books, and uniforms.', Icon: Puzzle },
        { title: 'Event Planning', desc: 'Guidance for Baby Shows, Sports Days, Annual Days, and festivals.', Icon: PartyPopper },
    ];

    const steps = [
        'Research & Plan', 'Select Location', 'Get Licenses', 'Choose Curriculum', 'Hire Staff',
        'Set Up Infrastructure', 'Arrange Materials', 'Marketing & Admissions', 'Safety Checks', 'Launch & Monitor'
    ];

    return (
        <main className="bg-veda-background-DEFAULT">


            {/* Intro */}
            <section className="py-16 px-4 text-center">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl md:text-3xl font-bold font-poppins text-veda-text-heading mb-6">Start Your Own "The Veda Toddlers" Preschool</h2>
                    <p className="text-base text-veda-text-DEFAULT leading-relaxed mb-8">
                        Join our mission to revolutionize early childhood education. We offer a proven franchise model for aspiring education entrepreneurs with comprehensive support at every step.
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
                        {requirements.map((req, idx) => (
                            <div key={idx} className="bg-veda-secondary-light/30 p-5 rounded-xl border border-veda-border">
                                <div className="w-11 h-11 bg-veda-primary/10 text-veda-primary rounded-xl flex items-center justify-center mb-3 mx-auto">
                                    <req.Icon size={22} />
                                </div>
                                <h3 className="font-bold text-veda-text-heading text-sm mb-1">{req.label}</h3>
                                <p className="text-veda-primary font-semibold text-sm">{req.value}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 10 Steps Timeline */}
            <section className="py-14 px-4 bg-veda-primary text-white overflow-hidden relative">
                <div className="max-w-5xl mx-auto relative z-10">
                    <h2 className="text-center font-poppins text-2xl font-bold mb-10">10 Steps to Launch</h2>
                    <div className="flex flex-wrap justify-center gap-3">
                        {steps.map((step, idx) => (
                            <div key={idx} className="flex items-center">
                                <div className="bg-white/10 backdrop-blur-sm px-5 py-2.5 rounded-xl border border-white/20 hover:bg-veda-accent hover:text-veda-primary-dark hover:border-veda-accent transition-colors cursor-default">
                                    <span className="font-bold text-veda-accent mr-2">{idx + 1}.</span>
                                    <span className="font-medium text-sm">{step}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Support System */}
            <section className="py-20 px-4 bg-veda-background-muted">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-center font-poppins text-3xl font-bold text-veda-text-heading mb-14 relative after:content-[''] after:block after:w-12 after:h-1 after:bg-veda-accent after:mx-auto after:mt-4 after:rounded-full">
                        Our Multi-Layer Support System
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {support.map((item, idx) => (
                            <div key={idx} className="bg-veda-background-DEFAULT p-6 rounded-2xl shadow-soft hover:shadow-softer hover:-translate-y-1 transition-all duration-300 group">
                                <div className="w-12 h-12 bg-veda-secondary text-veda-primary rounded-xl flex items-center justify-center mb-5 group-hover:bg-veda-accent transition-colors">
                                    <item.Icon size={24} />
                                </div>
                                <h3 className="text-lg font-bold mb-2 font-poppins text-veda-text-heading">{item.title}</h3>
                                <p className="text-veda-text-muted text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 px-4 text-center">
                <div className="max-w-3xl mx-auto bg-veda-primary p-10 rounded-2xl text-white shadow-softer">
                    <h2 className="text-2xl font-bold font-poppins mb-4">Ready to Start Your Journey?</h2>
                    <p className="text-base mb-8 opacity-90">Get in touch with us to discuss franchise opportunities in your city.</p>
                    <Button variant="primary" href="/contact">
                        Enquire Now
                    </Button>
                </div>
            </section>
        </main>
    );
}
