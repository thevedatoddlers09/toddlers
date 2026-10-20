
import Button from '@/components/Button';
import { Building2, Wallet, GraduationCap, Heart, HardHat, Users, Megaphone, FlaskConical, Puzzle, PartyPopper } from 'lucide-react';

export const metadata = {
    title: 'Franchise Opportunity - The Veda Toddlers',
    description: 'Partner with us to start your own The Veda Toddlers preschool. Comprehensive support, proven model, and a legacy of excellence.',
};

export default function FranchisePage() {
    const requirements = [
        { label: 'Space Area', value: '2000 - 3000 Sq. Ft.', Icon: Building2, gradient: 'from-veda-accent to-amber-500', bgGradient: 'from-veda-accent/10 via-white to-amber-50' },
        { label: 'Investment', value: 'Moderate', Icon: Wallet, gradient: 'from-veda-playful-green to-green-600', bgGradient: 'from-veda-playful-green/15 via-white to-green-50' },
        { label: 'Staffing', value: '1:10 Teacher Ratio', Icon: GraduationCap, gradient: 'from-veda-primary to-veda-primary-dark', bgGradient: 'from-veda-secondary/20 via-white to-veda-secondary/10' },
        { label: 'Passion', value: 'Love for Education', Icon: Heart, gradient: 'from-veda-playful-peach to-rose-400', bgGradient: 'from-veda-playful-peach/15 via-white to-rose-50' },
    ];

    const support = [
        { title: 'Setup Assistance', desc: 'Site selection, interior design guidance, and licensing support.', Icon: HardHat, gradient: 'from-veda-accent to-amber-500' },
        { title: 'Recruitment & Training', desc: 'Hiring support, background checks, and comprehensive training.', Icon: Users, gradient: 'from-veda-primary to-veda-primary-dark' },
        { title: 'Marketing Support', desc: 'High-quality creatives, brochures, banners, and social media toolkits.', Icon: Megaphone, gradient: 'from-veda-playful-peach to-rose-400' },
        { title: 'R&D & Academics', desc: 'Continuous curriculum updates, manuals for safety, HR, and admin.', Icon: FlaskConical, gradient: 'from-veda-playful-blue to-blue-500' },
        { title: 'Material Supply', desc: 'Provision of furniture, Montessori tools, activity kits, and uniforms.', Icon: Puzzle, gradient: 'from-veda-playful-green to-green-600' },
        { title: 'Event Planning', desc: 'Guidance for Baby Shows, Sports Days, Annual Days, and festivals.', Icon: PartyPopper, gradient: 'from-veda-secondary-dark to-purple-600' },
    ];

    const steps = [
        'Research & Plan', 'Select Location', 'Get Licenses', 'Choose Curriculum', 'Hire Staff',
        'Set Up Infrastructure', 'Arrange Materials', 'Marketing & Admissions', 'Safety Checks', 'Launch & Monitor'
    ];

    return (
        <main className="bg-veda-background-DEFAULT">

            {/* Intro */}
            <section className="py-10 sm:py-16 px-3 text-center">
                <div className="max-w-5xl mx-auto">
                    <span className="inline-block py-1 px-3 rounded-full bg-veda-accent/20 text-veda-primary font-bold uppercase tracking-widest text-xs mb-4 border border-veda-accent/30">Franchise Opportunity</span>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-poppins text-veda-text-heading mb-6">Start Your Own "The Veda Toddlers" Preschool</h2>
                    <p className="text-sm sm:text-lg text-veda-text-DEFAULT leading-relaxed mb-10 max-w-3xl mx-auto">
                        Join our mission to revolutionize early childhood education. We offer a proven franchise model for aspiring education entrepreneurs with comprehensive support at every step.
                    </p>

                    {/* Requirements Cards - Redesigned */}
                    <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-5 mt-8">
                        {requirements.map((req, idx) => (
                            <div key={idx} className="w-[calc(50%-10px)] md:w-[calc(25%-15px)]">
                                <div className={`relative bg-gradient-to-br ${req.bgGradient} p-6 rounded-2xl border border-white/50 shadow-soft hover:shadow-softer hover:-translate-y-2 transition-all duration-300 group overflow-hidden h-full`}>
                                    <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-white/30 to-transparent rounded-full -translate-y-1/2 translate-x-1/2"></div>
                                    <div className="relative z-10 text-center">
                                        <div className={`w-14 h-14 bg-gradient-to-br ${req.gradient} text-white rounded-xl flex items-center justify-center mb-4 mx-auto shadow-lg group-hover:scale-110 transition-transform`}>
                                            <req.Icon size={26} />
                                        </div>
                                        <h3 className="font-bold text-veda-text-heading text-base mb-1 font-poppins">{req.label}</h3>
                                        <p className="text-veda-primary font-semibold text-base">{req.value}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 10 Steps Timeline - Enhanced */}
            <section className="py-14 px-3 bg-veda-primary text-white overflow-hidden relative">
                <div className="absolute top-10 left-10 w-32 h-32 bg-veda-accent rounded-full blur-[80px] opacity-30"></div>
                <div className="absolute bottom-10 right-10 w-40 h-40 bg-white rounded-full blur-[80px] opacity-10"></div>
                <div className="max-w-[1400px] mx-auto relative z-10">
                    <h2 className="text-center font-poppins text-2xl sm:text-3xl font-bold mb-4">10 Steps to Launch</h2>
                    <p className="text-center text-veda-secondary-light text-sm sm:text-lg mb-10 max-w-2xl mx-auto">Your roadmap to becoming a successful franchise partner</p>
                    <div className="flex flex-wrap justify-center gap-3">
                        {steps.map((step, idx) => (
                            <div key={idx} className="flex items-center">
                                <div className="bg-white/10 backdrop-blur-sm px-5 py-3 rounded-xl border border-white/20 hover:bg-veda-accent hover:text-veda-primary-dark hover:border-veda-accent transition-all duration-300 cursor-default group shadow-lg">
                                    <span className="font-bold text-veda-accent mr-2 group-hover:text-veda-primary-dark">{idx + 1}.</span>
                                    <span className="font-medium text-base">{step}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Support System - Redesigned */}
            <section className="py-12 sm:py-16 md:py-20 px-3 bg-veda-background-muted">
                <div className="max-w-[1400px] mx-auto">
                    <h2 className="text-center font-poppins text-2xl sm:text-4xl font-bold text-veda-text-heading mb-4">
                        Our Multi-Layer Support System
                    </h2>
                    <p className="text-center text-veda-text-muted text-sm sm:text-lg mb-8 sm:mb-14 max-w-2xl mx-auto">Comprehensive assistance at every stage of your journey</p>
                    <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6">
                        {support.map((item, idx) => (
                            <div key={idx} className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]">
                                <div className="bg-white p-6 rounded-2xl shadow-soft hover:shadow-softer hover:-translate-y-2 transition-all duration-300 group h-full border border-veda-border">
                                    <div className={`w-14 h-14 bg-gradient-to-br ${item.gradient} text-white rounded-xl flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform`}>
                                        <item.Icon size={26} />
                                    </div>
                                    <h3 className="text-xl font-bold mb-2 font-poppins text-veda-text-heading">{item.title}</h3>
                                    <p className="text-veda-text-muted text-base leading-relaxed">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Existing partners teaser */}
            <section className="relative overflow-hidden py-12 sm:py-16 px-3 bg-veda-background-soft">
                <div className="pointer-events-none absolute -left-16 top-8 h-40 w-40 rounded-full bg-veda-accent/15 blur-3xl" />
                <div className="pointer-events-none absolute -right-12 bottom-4 h-48 w-48 rounded-full bg-veda-secondary/40 blur-3xl" />
                <div className="relative max-w-4xl mx-auto">
                    <div className="rounded-3xl border border-veda-border/80 bg-white p-6 sm:p-10 md:p-12 text-center shadow-softer">
                        <div className="mx-auto mb-5 h-1 w-16 rounded-full bg-gradient-to-r from-veda-accent to-veda-playful-peach" />
                        <span className="inline-block py-1 px-3 rounded-full bg-veda-playful-green/15 text-green-800 font-bold uppercase tracking-widest text-xs mb-4 border border-veda-playful-green/30">
                            Already thriving
                        </span>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-poppins text-veda-text-heading mb-4">
                            Meet Centres Already Running
                        </h2>
                        <p className="text-sm sm:text-lg text-veda-text-muted leading-relaxed mb-8 max-w-2xl mx-auto">
                            Explore existing franchisee profiles — Centre Directors, personal notes, centre photographs, activities, and parent voices from our operational learning homes.
                        </p>
                        <Button
                            variant="primary"
                            shape="pill"
                            href="/franchisees"
                            className="bg-veda-primary hover:bg-veda-primary-dark text-white font-bold px-8 py-4 shadow-lg hover:scale-[1.02] transition-transform"
                        >
                            View franchisee profiles
                        </Button>
                    </div>
                </div>
            </section>

            {/* CTA Strip */}
            <section id="enquire" className="py-12 px-4 bg-veda-primary text-white">
                <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
                    <p className="text-base sm:text-xl md:text-2xl font-bold font-poppins text-white">
                        Get in touch with us to discuss franchise opportunities in your city.
                    </p>
                    <Button variant="primary" href="/contact" className="bg-veda-accent hover:bg-veda-accent-dark text-veda-primary-dark border-none font-bold px-8 py-4 shadow-lg shrink-0 rounded-full hover:scale-105 transition-transform">
                        Enquire Now
                    </Button>
                </div>
            </section>
        </main>
    );
}

