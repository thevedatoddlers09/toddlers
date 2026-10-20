import Link from 'next/link';
import { Facebook, Instagram, Youtube, MapPin, Clock, Mail, User, Headphones } from 'lucide-react';

export default function Footer() {
    const quickLinks = [
        { name: 'Home', href: '/' },
        { name: 'About Us', href: '/about' },
        { name: 'Programmes', href: '/programs' },
        { name: 'Gallery', href: '/gallery' },
        { name: 'Locations', href: '/locations' },
        { name: 'Contact Us', href: '/contact' },
        { name: 'Admission Form', href: '/admissions' },
        { name: 'Careers', href: '/careers' },
    ];

    return (
        <footer className="bg-veda-primary-dark font-poppins text-white">
            <div className="px-4 py-8 sm:px-[5%] sm:py-12">
                <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-10">
                    <div>
                        <div className="mb-4 inline-block rounded-xl bg-white p-3 sm:mb-5 sm:rounded-2xl sm:p-4">
                            <img
                                src="/logo.png"
                                alt="The Veda Toddlers Logo"
                                className="h-14 w-auto object-contain sm:h-20"
                            />
                        </div>
                        <p className="font-opensans text-sm leading-relaxed text-veda-secondary-light sm:text-base">
                            We enrich and expand our student&apos;s educational horizons well beyond to ensure students are working at their personal best level of achievement.
                        </p>
                    </div>

                    <div>
                        <h3 className="mb-3 text-base font-bold text-veda-accent sm:mb-5 sm:text-lg">
                            Quick Links
                        </h3>
                        <ul className="space-y-2 font-opensans text-sm sm:space-y-2.5 sm:text-base">
                            {quickLinks.map((link, idx) => (
                                <li key={idx}>
                                    <Link
                                        href={link.href}
                                        className="flex items-center gap-2 text-white/80 transition-colors hover:text-veda-accent"
                                    >
                                        <span className="text-[10px] text-veda-playful-peach sm:text-xs">●</span>
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="mb-3 text-base font-bold text-veda-accent sm:mb-5 sm:text-lg">
                            Head office
                        </h3>
                        <div className="space-y-3 font-opensans text-sm sm:space-y-4 sm:text-base">
                            <div className="flex items-start gap-2.5 sm:gap-3">
                                <MapPin size={18} className="mt-0.5 flex-shrink-0 text-veda-playful-peach sm:h-5 sm:w-5" />
                                <p className="leading-relaxed text-white">
                                    CPM 61 Ground, Second & Third Floor,<br />
                                    Sector 105 Emaar, Mohali
                                </p>
                            </div>
                        </div>

                        <h3 className="mb-3 mt-5 text-base font-bold text-veda-accent sm:mb-4 sm:mt-6 sm:text-lg">
                            Timings
                        </h3>
                        <div className="space-y-2 font-opensans text-sm sm:text-base">
                            <div className="flex items-center gap-2.5 sm:gap-3">
                                <Clock size={18} className="flex-shrink-0 text-veda-playful-peach" />
                                <p className="text-white"><span className="font-medium">School:</span> 9:00 a.m. to 2:00 p.m.</p>
                            </div>
                            <div className="flex items-center gap-2.5 sm:gap-3">
                                <Clock size={18} className="flex-shrink-0 text-veda-playful-peach" />
                                <p className="text-white"><span className="font-medium">Daycare:</span> 9:00 a.m. to 6:00 p.m.</p>
                            </div>
                        </div>

                        <h3 className="mb-3 mt-5 text-base font-bold text-veda-accent sm:mb-4 sm:mt-6 sm:text-lg">
                            Email
                        </h3>
                        <div className="flex items-center gap-2.5 font-opensans text-sm sm:gap-3 sm:text-base">
                            <Mail size={18} className="flex-shrink-0 text-veda-playful-peach" />
                            <a
                                href="mailto:thevedatoddlers09@gmail.com"
                                className="break-all text-white transition-colors hover:text-veda-accent"
                            >
                                thevedatoddlers09@gmail.com
                            </a>
                        </div>
                    </div>

                    <div>
                        <h3 className="mb-3 text-base font-bold text-veda-accent sm:mb-5 sm:text-lg">
                            Contact Numbers
                        </h3>
                        <div className="space-y-3 font-opensans text-sm sm:space-y-4 sm:text-base">
                            <div className="flex items-start gap-2.5 sm:gap-3">
                                <User size={18} className="mt-0.5 flex-shrink-0 text-veda-playful-peach" />
                                <div>
                                    <p className="mb-1 text-[11px] uppercase tracking-wider text-white/60 sm:text-sm">Outreach Coordinator</p>
                                    <a href="tel:8968688486" className="font-medium text-white/90 transition-colors hover:text-veda-accent">
                                        8968688486
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start gap-2.5 sm:gap-3">
                                <Headphones size={18} className="mt-0.5 flex-shrink-0 text-veda-playful-peach" />
                                <div>
                                    <p className="mb-1 text-[11px] uppercase tracking-wider text-white/60 sm:text-sm">Reception</p>
                                    <a href="tel:7657800886" className="block font-medium text-white/90 transition-colors hover:text-veda-accent">
                                        7657800886
                                    </a>
                                    <a href="tel:8728000886" className="font-medium text-white/90 transition-colors hover:text-veda-accent">
                                        8728000886
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="mt-5 sm:mt-6">
                            <div className="flex gap-2.5 sm:gap-3">
                                <a
                                    href="https://www.facebook.com/thevedatoddlers"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-all hover:bg-veda-accent hover:text-veda-primary-dark sm:h-10 sm:w-10"
                                >
                                    <Facebook size={18} />
                                </a>
                                <a
                                    href="https://www.instagram.com/thevedatoddlers_sector105/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-all hover:bg-veda-playful-peach hover:text-white sm:h-10 sm:w-10"
                                >
                                    <Instagram size={18} />
                                </a>
                                <a
                                    href="#"
                                    className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-all hover:bg-red-500 hover:text-white sm:h-10 sm:w-10"
                                >
                                    <Youtube size={18} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-black/20 px-4 py-3 text-center font-opensans text-xs text-white/70 sm:px-[5%] sm:py-4 sm:text-base">
                &copy; {new Date().getFullYear()} All rights reserved | The Veda Toddlers
            </div>
        </footer>
    );
}
