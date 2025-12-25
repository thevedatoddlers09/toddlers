"use client";

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Button from './Button';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'About Us', href: '/about' },
        { name: 'Programs', href: '/programs' },
        { name: 'Events', href: '/events' },
        { name: 'Activities', href: '/activities' },
        { name: 'Franchise', href: '/franchise' },
        { name: 'Admissions', href: '/admissions' },
    ];

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    return (
        <>
            <nav className="flex justify-between items-center py-2 px-4 md:px-[5%] bg-white/95 backdrop-blur-md shadow-sm sticky top-0 z-[1000] border-b border-gray-100">
                {/* Logo - Smaller on mobile */}
                <Link href="/" className="flex items-center">
                    <img src="/logo.png" alt="The Veda Toddlers Logo" className="h-14 md:h-16 w-auto object-contain" />
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex gap-6 items-center">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`font-semibold text-sm uppercase tracking-wide transition-colors hover:text-veda-primary ${isActive ? 'text-veda-primary border-b-2 border-veda-primary pb-0.5' : 'text-veda-text-DEFAULT'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        );
                    })}

                    <Button variant="primary" shape="pill" href="/contact" className="text-sm py-2 px-5">
                        Contact Us
                    </Button>
                </div>

                {/* Hamburger Menu Button - Mobile */}
                <button
                    onClick={toggleMenu}
                    className="lg:hidden p-2 rounded-xl bg-veda-secondary/20 text-veda-primary hover:bg-veda-secondary/40 transition-colors"
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </nav>

            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
                <div
                    className="lg:hidden fixed inset-0 bg-black/50 z-[999] animate-fade-in"
                    onClick={closeMenu}
                />
            )}

            {/* Mobile Menu Slide-out */}
            <div className={`lg:hidden fixed top-0 right-0 h-full w-[280px] bg-white shadow-2xl z-[1001] transform transition-transform duration-300 ease-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                {/* Close Button */}
                <div className="flex justify-between items-center p-4 border-b border-gray-100">
                    <span className="font-poppins font-bold text-veda-primary text-lg">Menu</span>
                    <button
                        onClick={closeMenu}
                        className="p-2 rounded-xl bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors"
                        aria-label="Close menu"
                    >
                        <X size={20} />
                    </button>
                </div>

                {/* Mobile Nav Links */}
                <div className="p-4 space-y-1">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={closeMenu}
                                className={`block py-3 px-4 rounded-xl font-semibold text-base transition-all ${isActive
                                    ? 'bg-veda-secondary/20 text-veda-primary'
                                    : 'text-gray-700 hover:bg-gray-50'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        );
                    })}
                </div>

                {/* Mobile CTA */}
                <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-100 bg-gray-50">
                    <Button variant="primary" shape="pill" href="/contact" fullWidth onClick={closeMenu}>
                        Contact Us
                    </Button>
                </div>
            </div>
        </>
    );
}
