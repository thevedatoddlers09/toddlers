"use client";

import { useEffect, useState } from 'react';
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
        { name: 'Gallery', href: '/gallery' },
        { name: 'Locations', href: '/locations' },
        { name: 'Our Centres', href: '/franchisees' },
        { name: 'Franchise', href: '/franchise' },
        { name: 'Careers', href: '/careers' },
        { name: 'Admissions', href: '/admissions' },
    ];

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    useEffect(() => {
        if (!isMenuOpen) return;
        const prev = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = prev;
        };
    }, [isMenuOpen]);

    useEffect(() => {
        closeMenu();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pathname]);

    return (
        <>
            <nav className="sticky top-0 z-[1000] flex items-center justify-between border-b border-gray-100 bg-white/95 px-3 py-1.5 shadow-sm backdrop-blur-md sm:px-4 sm:py-2 md:px-[5%]">
                <Link href="/" className="flex items-center" onClick={closeMenu}>
                    <img
                        src="/logo.png"
                        alt="The Veda Toddlers Logo"
                        className="h-11 w-auto object-contain sm:h-14 md:h-16"
                    />
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden items-center gap-6 lg:flex">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`text-sm font-semibold uppercase tracking-wide transition-colors hover:text-veda-primary ${
                                    isActive
                                        ? 'border-b-2 border-veda-primary pb-0.5 text-veda-primary'
                                        : 'text-veda-text-DEFAULT'
                                }`}
                            >
                                {link.name}
                            </Link>
                        );
                    })}

                    <Button variant="primary" shape="pill" href="/contact" className="px-5 py-2 text-sm">
                        Contact Us
                    </Button>
                </div>

                <button
                    onClick={toggleMenu}
                    className="rounded-lg bg-veda-secondary/25 p-2 text-veda-primary transition-colors hover:bg-veda-secondary/40 lg:hidden"
                    aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                    aria-expanded={isMenuOpen}
                >
                    {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
            </nav>

            {/* Overlay */}
            <div
                className={`fixed inset-0 z-[999] bg-veda-primary-dark/40 backdrop-blur-[2px] transition-opacity duration-300 lg:hidden ${
                    isMenuOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
                }`}
                onClick={closeMenu}
                aria-hidden={!isMenuOpen}
            />

            {/* Mobile drawer */}
            <div
                className={`fixed inset-y-0 right-0 z-[1001] flex w-[min(100vw-3rem,280px)] flex-col bg-white shadow-2xl transition-transform duration-300 ease-out lg:hidden ${
                    isMenuOpen ? 'translate-x-0' : 'translate-x-full'
                }`}
                role="dialog"
                aria-modal="true"
                aria-label="Navigation menu"
            >
                <div className="flex items-center justify-between border-b border-veda-border px-3.5 py-3">
                    <div className="flex min-w-0 items-center gap-2.5">
                        <img src="/logo.png" alt="" className="h-8 w-auto object-contain" aria-hidden="true" />
                        <span className="font-poppins text-sm font-bold text-veda-primary">Menu</span>
                    </div>
                    <button
                        onClick={closeMenu}
                        className="flex h-8 w-8 items-center justify-center rounded-full bg-veda-background-muted text-veda-primary transition-colors hover:bg-veda-secondary/40"
                        aria-label="Close menu"
                    >
                        <X size={16} />
                    </button>
                </div>

                <nav className="flex-1 overflow-y-auto overscroll-contain px-2.5 py-2">
                    <ul className="space-y-0.5">
                        {navLinks.map((link) => {
                            const isActive = pathname === link.href;
                            return (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        onClick={closeMenu}
                                        className={`block rounded-lg px-3 py-2.5 text-[13px] font-semibold transition-all ${
                                            isActive
                                                ? 'bg-veda-primary text-white shadow-sm'
                                                : 'text-veda-text-DEFAULT hover:bg-veda-background-muted hover:text-veda-primary'
                                        }`}
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>

                <div className="border-t border-veda-border bg-veda-background-soft px-3.5 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3">
                    <Button
                        variant="primary"
                        shape="pill"
                        href="/contact"
                        fullWidth
                        onClick={closeMenu}
                        className="!py-2.5 !text-sm"
                    >
                        Contact Us
                    </Button>
                </div>
            </div>
        </>
    );
}
