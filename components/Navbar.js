import Link from 'next/link';
import Button from './Button';

export default function Navbar() {
    return (
        <nav className="flex justify-between items-center py-4 px-[5%] bg-veda-background-DEFAULT shadow-soft sticky top-0 z-[1000]">
            <Link href="/" className="flex items-center">
                <img src="/logo.jpg" alt="The Veda Toddlers Logo" className="h-24 w-auto object-contain" />
            </Link>

            <div className="hidden md:flex gap-8 items-center">
                <Link href="/" className="font-semibold text-veda-text-DEFAULT uppercase text-sm transition-colors hover:text-veda-primary">Home</Link>
                <Link href="/about" className="font-semibold text-veda-text-DEFAULT uppercase text-sm transition-colors hover:text-veda-primary">About Us</Link>
                <Link href="/programs" className="font-semibold text-veda-text-DEFAULT uppercase text-sm transition-colors hover:text-veda-primary">Programs</Link>
                <Link href="/events" className="font-semibold text-veda-text-DEFAULT uppercase text-sm transition-colors hover:text-veda-primary">Events</Link>
                <Link href="/activities" className="font-semibold text-veda-text-DEFAULT uppercase text-sm transition-colors hover:text-veda-primary">Activities</Link>
                <Link href="/franchise" className="font-semibold text-veda-text-DEFAULT uppercase text-sm transition-colors hover:text-veda-primary">Franchise</Link>
                <Link href="/admissions" className="font-semibold text-veda-text-DEFAULT uppercase text-sm transition-colors hover:text-veda-primary">Admissions</Link>

                <Button variant="primary" shape="pill" href="/contact">
                    Contact Us
                </Button>
            </div>
        </nav>
    );
}
