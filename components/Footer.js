import Link from 'next/link';
import { Facebook, Instagram, Youtube, MapPin, Clock, Mail, Phone, User, Headphones } from 'lucide-react';

export default function Footer() {
    const quickLinks = [
        { name: 'Home', href: '/' },
        { name: 'About Us', href: '/about' },
        { name: 'Programmes', href: '/programs' },
        { name: 'Events', href: '/events' },
        { name: 'Activities', href: '/activities' },
        { name: 'Locations', href: '/locations' },
        { name: 'Contact Us', href: '/contact' },
        { name: 'Admission Form', href: '/admissions' },
    ];

    return (
        <footer className="bg-veda-primary-dark text-white font-poppins">
            {/* Main Footer Content */}
            <div className="py-12 px-[5%]">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

                    {/* Column 1: Logo & Tagline */}
                    <div>
                        <div className="bg-white rounded-2xl p-4 inline-block mb-5">
                            <img src="/logo.png" alt="The Veda Toddlers Logo" className="h-20 w-auto object-contain" />
                        </div>
                        <p className="text-veda-secondary-light text-base leading-relaxed font-opensans">
                            We enrich and expand our student's educational horizons well beyond to ensure students are working at their personal best level of achievement.
                        </p>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h3 className="text-veda-accent text-lg font-bold mb-5">
                            Quick Links
                        </h3>
                        <ul className="space-y-2.5 font-opensans text-base">
                            {quickLinks.map((link, idx) => (
                                <li key={idx}>
                                    <Link href={link.href} className="text-white/80 hover:text-veda-accent transition-colors flex items-center gap-2">
                                        <span className="text-veda-playful-peach text-xs">●</span>
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Address & Timings */}
                    <div>
                        <h3 className="text-veda-accent text-lg font-bold mb-5">
                            Head office
                        </h3>
                        <div className="space-y-4 font-opensans text-base">
                            <div className="flex items-start gap-3">
                                <MapPin size={20} className="text-veda-playful-peach mt-0.5 flex-shrink-0" />
                                <p className="text-white leading-relaxed">
                                    CPM 61 Ground, Second & Third Floor,<br />
                                    Sector 105 Emaar, Mohali
                                </p>
                            </div>
                        </div>

                        <h3 className="text-veda-accent text-lg font-bold mt-6 mb-4">
                            Timings
                        </h3>
                        <div className="space-y-2 font-opensans text-base">
                            <div className="flex items-center gap-3">
                                <Clock size={20} className="text-veda-playful-peach flex-shrink-0" />
                                <p className="text-white"><span className="font-medium">School:</span> 9:00 a.m. to 2:00 p.m.</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <Clock size={20} className="text-veda-playful-peach flex-shrink-0" />
                                <p className="text-white"><span className="font-medium">Daycare:</span> 9:00 a.m. to 6:00 p.m.</p>
                            </div>
                        </div>

                        <h3 className="text-veda-accent text-lg font-bold mt-6 mb-4">
                            Email
                        </h3>
                        <div className="flex items-center gap-3 font-opensans text-base">
                            <Mail size={20} className="text-veda-playful-peach flex-shrink-0" />
                            <a href="mailto:info@vedatoddlers.com" className="text-white hover:text-veda-accent transition-colors">
                                info@vedatoddlers.com
                            </a>
                        </div>
                    </div>

                    {/* Column 4: Contact Numbers */}
                    <div>
                        <h3 className="text-veda-accent text-lg font-bold mb-5">
                            Contact Numbers
                        </h3>
                        <div className="space-y-4 font-opensans text-base">
                            <div className="flex items-start gap-3">
                                <User size={20} className="text-veda-playful-peach mt-0.5 flex-shrink-0" />
                                <div>
                                    <p className="text-white/60 text-sm uppercase tracking-wider mb-1">Outreach Coordinator</p>
                                    <a href="tel:8968688486" className="text-white/90 hover:text-veda-accent transition-colors font-medium">
                                        8968688486
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <Headphones size={20} className="text-veda-playful-peach mt-0.5 flex-shrink-0" />
                                <div>
                                    <p className="text-white/60 text-sm uppercase tracking-wider mb-1">Reception</p>
                                    <a href="tel:7657800886" className="text-white/90 hover:text-veda-accent transition-colors font-medium block">
                                        7657800886
                                    </a>
                                    <a href="tel:8728000886" className="text-white/90 hover:text-veda-accent transition-colors font-medium">
                                        8728000886
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Social Icons */}
                        <div className="mt-6">
                            <div className="flex gap-3">
                                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-veda-accent hover:text-veda-primary-dark transition-all">
                                    <Facebook size={20} />
                                </a>
                                <a href="https://www.instagram.com/thevedatoddlers_sector105/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-veda-playful-peach hover:text-white transition-all">
                                    <Instagram size={20} />
                                </a>
                                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-red-500 hover:text-white transition-all">
                                    <Youtube size={20} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Copyright Bar */}
            <div className="bg-black/20 py-4 px-[5%] text-center font-opensans text-base text-white/70">
                &copy; {new Date().getFullYear()} All rights reserved | The Veda Toddlers
            </div>
        </footer>
    );
}
