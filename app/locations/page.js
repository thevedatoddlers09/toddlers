import Button from '@/components/Button';
import { MapPin, Phone, Clock, Users, Heart, Sparkles, GraduationCap, ArrowRight } from 'lucide-react';

export const metadata = {
    title: 'Our Locations - The Veda Toddlers',
    description: 'Find a Veda Toddlers preschool near you. Explore our learning homes across Mohali, Zirakpur, Panchkula, and Ambala.',
};

export default function LocationsPage() {
    const locations = [
        {
            name: 'Sector 105',
            city: 'Mohali',
            status: 'Operational',
            href: '/franchisees#sector-105',
            ctaLabel: 'Meet the team',
            iconColor: 'text-purple-500',
            bgColor: 'bg-gradient-to-br from-purple-50 to-purple-100',
            borderColor: 'border-purple-200',
            accentColor: 'bg-purple-500',
            description: 'Our flagship center in the heart of Mohali, featuring state-of-the-art facilities.',
        },
        {
            name: 'Sector 79',
            city: 'Mohali',
            status: 'Operational',
            href: '/franchisees#sector-79',
            ctaLabel: 'Meet the team',
            iconColor: 'text-amber-500',
            bgColor: 'bg-gradient-to-br from-amber-50 to-amber-100',
            borderColor: 'border-amber-200',
            accentColor: 'bg-amber-500',
            description: 'A vibrant learning space designed to inspire creativity and curiosity.',
        },
        {
            name: 'Sector 127',
            city: 'Mohali',
            status: 'Coming Soon',
            iconColor: 'text-sky-500',
            bgColor: 'bg-gradient-to-br from-sky-50 to-sky-100',
            borderColor: 'border-sky-200',
            accentColor: 'bg-sky-500',
            description: 'Modern infrastructure with dedicated play areas and learning zones.',
        },
        {
            name: 'Zirakpur',
            city: 'Punjab',
            status: 'Coming Soon',
            iconColor: 'text-pink-500',
            bgColor: 'bg-gradient-to-br from-pink-50 to-pink-100',
            borderColor: 'border-pink-200',
            accentColor: 'bg-pink-500',
            description: 'Bringing quality early education to the growing community of Zirakpur.',
        },
        {
            name: 'Panchkula',
            city: 'Haryana',
            status: 'Coming Soon',
            iconColor: 'text-emerald-500',
            bgColor: 'bg-gradient-to-br from-emerald-50 to-emerald-100',
            borderColor: 'border-emerald-200',
            accentColor: 'bg-emerald-500',
            description: 'Expanding our reach to provide world-class preschool education in Haryana.',
        },
        {
            name: 'Ambala',
            city: 'Haryana',
            status: 'Coming Soon',
            iconColor: 'text-rose-500',
            bgColor: 'bg-gradient-to-br from-rose-50 to-rose-100',
            borderColor: 'border-rose-200',
            accentColor: 'bg-rose-500',
            description: 'A nurturing environment for little learners in the historic city of Ambala.',
        },
    ];

    const features = [
        { title: 'Expert Teachers', desc: 'Qualified and caring educators', Icon: GraduationCap, color: 'from-veda-primary to-veda-primary-dark' },
        { title: 'Safe Environment', desc: 'CCTV monitored & secure', Icon: Heart, color: 'from-veda-playful-green to-green-600' },
        { title: 'Flexible Timings', desc: 'School & Daycare options', Icon: Clock, color: 'from-veda-accent to-amber-500' },
        { title: 'Small Class Sizes', desc: '1:15 teacher-student ratio', Icon: Users, color: 'from-veda-playful-peach to-rose-400' },
    ];

    return (
        <main className="bg-veda-background-DEFAULT">
            {/* Hero Section */}
            <section className="relative py-12 sm:py-16 md:py-24 px-[3%] bg-gradient-to-br from-veda-primary via-veda-primary to-veda-primary-dark text-white overflow-hidden">
                {/* Decorative Elements */}
                <div className="absolute top-10 left-10 w-32 h-32 bg-veda-accent rounded-full blur-[80px] opacity-40"></div>
                <div className="absolute bottom-10 right-10 w-40 h-40 bg-white rounded-full blur-[80px] opacity-20"></div>
                <div className="absolute top-1/2 left-[15%] w-4 h-4 bg-veda-accent rounded-full opacity-60"></div>
                <div className="absolute top-[30%] right-[20%] w-6 h-6 border-2 border-white/30 rounded-full"></div>

                <div className="max-w-5xl mx-auto text-center relative z-10">
                    <div className="inline-flex items-center gap-2 py-2 px-5 rounded-full bg-white/10 backdrop-blur-sm text-white font-medium text-sm mb-6 border border-white/20">
                        <MapPin size={16} />
                        <span>Find Us Near You</span>
                    </div>
                    <h1 className="font-poppins text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                        Our <span className="text-veda-accent">Learning Homes</span>
                    </h1>
                    <p className="text-sm sm:text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-10">
                        Building playful spaces for little learners across Punjab and Haryana. Find the perfect Veda Toddlers center for your child.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Button variant="primary" shape="pill" href="/admissions" className="bg-veda-accent hover:bg-veda-accent-dark text-veda-primary-dark font-bold px-8 py-4 shadow-lg">
                            Apply for Admission
                        </Button>
                        <Button variant="outline" shape="pill" href="/contact" className="border-white text-white hover:bg-white/10 px-8">
                            Contact Us
                        </Button>
                    </div>
                </div>
            </section>

            {/* What Makes Us Special */}
            <section className="py-10 sm:py-16 px-[3%] bg-white">
                <div className="max-w-[1400px] mx-auto">
                    <div className="text-center mb-8 sm:mb-12">
                        <h2 className="font-poppins text-2xl sm:text-3xl md:text-4xl font-bold text-veda-text-heading mb-4">
                            What Every Veda Center Offers
                        </h2>
                        <p className="text-veda-text-muted text-sm sm:text-lg max-w-2xl mx-auto">
                            Consistent quality and care across all our locations
                        </p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
                        {features.map((feature, idx) => (
                            <div key={idx} className="text-center p-5 sm:p-6 rounded-2xl bg-veda-background-soft border border-veda-border hover:shadow-lg transition-all duration-300 group">
                                <div className={`w-14 h-14 bg-gradient-to-br ${feature.color} text-white rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                                    <feature.Icon size={26} />
                                </div>
                                <h3 className="font-bold text-veda-text-heading font-poppins mb-1">{feature.title}</h3>
                                <p className="text-veda-text-muted text-sm">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Locations Grid */}
            <section className="py-12 sm:py-16 md:py-20 px-[3%] bg-gradient-to-b from-amber-50 via-pink-50 to-sky-50 relative overflow-hidden">
                {/* Playful Background Elements */}
                <div className="absolute top-10 left-[5%] text-6xl opacity-20 animate-bounce" style={{ animationDuration: '3s' }}>🏠</div>
                <div className="absolute top-20 right-[10%] text-5xl opacity-20 animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}>⭐</div>
                <div className="absolute bottom-20 left-[15%] text-4xl opacity-20 animate-bounce" style={{ animationDuration: '3.5s', animationDelay: '0.5s' }}>🌈</div>
                <div className="absolute bottom-10 right-[8%] text-5xl opacity-20 animate-bounce" style={{ animationDuration: '4.5s', animationDelay: '2s' }}>🎈</div>

                {/* Cloud decorations */}
                <div className="absolute top-16 left-[20%] w-20 h-8 bg-white rounded-full opacity-60"></div>
                <div className="absolute top-14 left-[22%] w-10 h-6 bg-white rounded-full opacity-60"></div>
                <div className="absolute top-32 right-[25%] w-16 h-6 bg-white rounded-full opacity-50"></div>
                <div className="absolute top-30 right-[27%] w-8 h-4 bg-white rounded-full opacity-50"></div>

                <div className="max-w-[1400px] mx-auto relative z-10">
                    {/* Header */}
                    <div className="text-center mb-8 sm:mb-12 md:mb-14">
                        <div className="inline-flex items-center gap-2 py-2 px-6 rounded-full bg-white shadow-md text-veda-primary font-bold text-sm mb-6 border-2 border-dashed border-veda-accent">
                            <span className="text-xl">🌟</span>
                            <span>Coming Soon Near You!</span>
                            <span className="text-xl">🌟</span>
                        </div>
                        <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold font-poppins text-veda-primary mb-4">
                            Explore Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">Centers</span>
                        </h2>
                        <p className="text-veda-text-muted text-sm sm:text-lg max-w-xl mx-auto">
                            Each center is designed with love, keeping your child's growth and happiness in mind.
                        </p>
                    </div>

                    {/* Locations Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {locations.map((location, index) => (
                            <div key={index} className="group">
                                <div className={`relative ${location.bgColor} rounded-3xl p-5 sm:p-8 border-2 ${location.borderColor} shadow-lg hover:shadow-2xl transform hover:-translate-y-3 transition-all duration-300 h-full`}>
                                    {/* Status Badge */}
                                    <div className={`absolute -top-3 right-6 ${location.accentColor} text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg flex items-center gap-1`}>
                                        <Sparkles size={12} />
                                        {location.status}
                                    </div>

                                    {/* Location Pin Icon */}
                                    <div className={`${location.iconColor} mb-5 transform group-hover:scale-110 transition-transform duration-300`}>
                                        <svg className="w-14 h-14 drop-shadow-md" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                                        </svg>
                                    </div>

                                    {/* Location Info */}
                                    <h3 className="font-bold font-poppins text-gray-800 text-xl sm:text-2xl mb-1">{location.name}</h3>
                                    <p className="text-gray-500 text-sm font-medium mb-4">{location.city}</p>
                                    <p className="text-gray-600 text-base leading-relaxed mb-6">{location.description}</p>

                                    {/* Contact / profile Button */}
                                    <Button
                                        variant="outline"
                                        shape="rounded"
                                        href={location.href || '/contact'}
                                        className="w-full border-gray-300 text-gray-700 hover:bg-white hover:border-veda-primary hover:text-veda-primary transition-all group-hover:border-veda-primary group-hover:text-veda-primary"
                                    >
                                        <span>{location.ctaLabel || 'Get Notified'}</span>
                                        <ArrowRight size={16} className="ml-2" />
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Franchise CTA */}
            <section className="py-10 sm:py-16 px-[3%] bg-white">
                <div className="max-w-5xl mx-auto">
                    <div className="bg-gradient-to-br from-veda-secondary/20 via-white to-veda-secondary/10 rounded-3xl p-5 sm:p-10 md:p-14 text-center border border-veda-secondary/30 shadow-soft">
                        <h2 className="font-poppins text-2xl sm:text-3xl md:text-4xl font-bold text-veda-text-heading mb-4">
                            Want a Veda School in Your Neighborhood?
                        </h2>
                        <p className="text-veda-text-muted text-sm sm:text-lg mb-8 max-w-2xl mx-auto">
                            Partner with us to bring quality early childhood education to your community. We provide complete support from setup to launch.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Button variant="primary" shape="pill" href="/franchise" className="bg-veda-primary hover:bg-veda-primary-dark text-white font-bold px-8 py-4 shadow-lg">
                                🤝 Become a Partner
                            </Button>
                            <Button variant="outline" shape="pill" href="/about" className="border-veda-primary text-veda-primary hover:bg-veda-primary hover:text-white px-8">
                                Learn About Us
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact CTA Strip */}
            <section className="py-12 px-4 bg-veda-primary text-white">
                <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
                    <div>
                        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold font-poppins mb-2">Ready to Visit Us?</h3>
                        <p className="text-white/80 text-sm sm:text-lg">Schedule a tour at our nearest center today.</p>
                    </div>
                    <div className="flex gap-4">
                        <Button variant="primary" href="/contact" className="bg-veda-accent hover:bg-veda-accent-dark text-veda-primary-dark border-none font-bold px-8 py-4 shadow-lg rounded-full hover:scale-105 transition-transform">
                            <Phone size={18} className="mr-2" />
                            Contact Us
                        </Button>
                    </div>
                </div>
            </section>
        </main>
    );
}
