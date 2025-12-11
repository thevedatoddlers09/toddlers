
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-brand-navy text-white py-16 px-[5%] font-poppins">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                <div className="col-span-1">
                    <h3 className="text-brand-yellow mb-6 text-xl font-bold">The Veda Toddlers</h3>
                    <p className="opacity-90 leading-relaxed font-opensans text-sm">
                        Big Futures Start Small. Nurturing young minds with love and care.
                    </p>
                </div>

                <div className="col-span-1">
                    <h3 className="text-brand-yellow mb-6 text-xl font-bold">Quick Links</h3>
                    <ul className="list-none space-y-3 font-opensans">
                        <li><Link href="/" className="text-white/90 hover:text-white hover:underline transition-opacity">Home</Link></li>
                        <li><Link href="/about" className="text-white/90 hover:text-white hover:underline transition-opacity">About Us</Link></li>
                        <li><Link href="/programs" className="text-white/90 hover:text-white hover:underline transition-opacity">Programs</Link></li>
                        <li><Link href="/contact" className="text-white/90 hover:text-white hover:underline transition-opacity">Contact</Link></li>
                    </ul>
                </div>

                <div className="col-span-1">
                    <h3 className="text-brand-yellow mb-6 text-xl font-bold">Contact Us</h3>
                    <ul className="list-none space-y-3 font-opensans text-white/90 text-sm">
                        <li>123 Education Lane</li>
                        <li>+91 98765 43210</li>
                        <li>info@vedatoddlers.com</li>
                    </ul>
                </div>

                <div className="col-span-1">
                    <h3 className="text-brand-yellow mb-6 text-xl font-bold">Follow Us</h3>
                    <div className="flex gap-4">
                        {/* Social Icons placeholders */}
                        <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 cursor-pointer transition-colors">FB</div>
                        <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 cursor-pointer transition-colors">IG</div>
                        <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 cursor-pointer transition-colors">YT</div>
                    </div>
                </div>
            </div>

            <div className="border-t border-white/10 pt-8 text-center text-sm opacity-80 font-opensans">
                &copy; {new Date().getFullYear()} The Veda Toddlers. All rights reserved.
            </div>
        </footer>
    );
}
