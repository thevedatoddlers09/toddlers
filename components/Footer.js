import Link from 'next/link';
import { Facebook, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-veda-primary-dark text-white py-16 px-[5%] font-poppins">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                <div className="col-span-1">
                    <div className="mb-6">
                        <img src="/logo.jpg" alt="The Veda Toddlers Logo" className="h-28 w-auto object-contain bg-white rounded-xl p-2" />
                    </div>
                    <p className="opacity-90 leading-relaxed font-opensans text-sm">
                        Big Futures Start Small. Nurturing young minds with love and care.
                    </p>
                </div>

                <div className="col-span-1">
                    <h3 className="text-veda-accent mb-6 text-xl font-bold">Quick Links</h3>
                    <ul className="list-none space-y-3 font-opensans">
                        <li><Link href="/" className="text-white/90 hover:text-veda-accent transition-colors">Home</Link></li>
                        <li><Link href="/about" className="text-white/90 hover:text-veda-accent transition-colors">About Us</Link></li>
                        <li><Link href="/programs" className="text-white/90 hover:text-veda-accent transition-colors">Programs</Link></li>
                        <li><Link href="/contact" className="text-white/90 hover:text-veda-accent transition-colors">Contact</Link></li>
                    </ul>
                </div>

                <div className="col-span-1">
                    <h3 className="text-veda-accent mb-6 text-xl font-bold">Contact Us</h3>
                    <ul className="list-none space-y-3 font-opensans text-white/90 text-sm">
                        <li>123 Education Lane</li>
                        <li>+91 98765 43210</li>
                        <li>info@vedatoddlers.com</li>
                    </ul>
                </div>

                <div className="col-span-1">
                    <h3 className="text-veda-accent mb-6 text-xl font-bold">Follow Us</h3>
                    <div className="flex gap-4">
                        <a href="#" className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center hover:bg-veda-accent hover:text-veda-primary-dark cursor-pointer transition-colors">
                            <Facebook size={18} />
                        </a>
                        <a href="#" className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center hover:bg-veda-accent hover:text-veda-primary-dark cursor-pointer transition-colors">
                            <Instagram size={18} />
                        </a>
                        <a href="#" className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center hover:bg-veda-accent hover:text-veda-primary-dark cursor-pointer transition-colors">
                            <Youtube size={18} />
                        </a>
                    </div>
                </div>
            </div>

            <div className="border-t border-white/10 pt-8 text-center text-sm opacity-80 font-opensans">
                &copy; {new Date().getFullYear()} The Veda Toddlers. All rights reserved.
            </div>
        </footer>
    );
}
