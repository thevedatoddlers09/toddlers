"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Button from './Button';

export default function Navbar() {
    const pathname = usePathname();

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'About Us', href: '/about' },
        { name: 'Programs', href: '/programs' },
        { name: 'Events', href: '/events' },
        { name: 'Activities', href: '/activities' },
        { name: 'Franchise', href: '/franchise' },
        { name: 'Admissions', href: '/admissions' },
    ];

    return (
        <nav className="flex justify-between items-center py-4 px-[5%] bg-veda-background-DEFAULT shadow-soft sticky top-0 z-[1000]">
            <Link href="/" className="flex items-center">
                <img src="/logo.jpg" alt="The Veda Toddlers Logo" className="h-24 w-auto object-contain" />
            </Link>

            <div className="hidden md:flex gap-8 items-center">
                {navLinks.map((link) => {
                    const isActive = pathname === link.href;
                    return (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`font-semibold uppercase text-base transition-colors hover:text-veda-primary ${isActive ? 'text-veda-primary border-b-2 border-veda-primary pb-1' : 'text-veda-text-DEFAULT'
                                }`}
                        >
                            {link.name}
                        </Link>
                    );
                })}

                <Button variant="primary" shape="pill" href="/contact">
                    Contact Us
                </Button>
            </div>
        </nav>
    );
}
