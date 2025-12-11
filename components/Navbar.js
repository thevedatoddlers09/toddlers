import Link from 'next/link';
import Button from './Button';


export default function Navbar() {
    return (
        <nav className="flex justify-between items-center py-4 px-[5%] bg-white shadow-sm sticky top-0 z-[1000]">
            <div className="font-poppins font-bold text-2xl text-brand-secondary tracking-tighter">
                The Veda <span className="text-brand-primary">Toddlers</span>
            </div>

            <div className="hidden md:flex gap-8 items-center">
                <Link href="/" className="font-semibold text-text-main uppercase text-sm transition-colors hover:text-brand-primary">Home</Link>
                <Link href="/about" className="font-semibold text-text-main uppercase text-sm transition-colors hover:text-brand-primary">About Us</Link>
                <Link href="/programs" className="font-semibold text-text-main uppercase text-sm transition-colors hover:text-brand-primary">Programs</Link>
                <Link href="/events" className="font-semibold text-text-main uppercase text-sm transition-colors hover:text-brand-primary">Events</Link>
                <Link href="/activities" className="font-semibold text-text-main uppercase text-sm transition-colors hover:text-brand-primary">Activities</Link>
                <Link href="/admissions" className="font-semibold text-text-main uppercase text-sm transition-colors hover:text-brand-primary">Admissions</Link>

                <Button variant="primary" shape="pill" href="/contact">
                    Contact Us
                </Button>
            </div>
        </nav>
    );
}
