import { Clock, Phone, Mail, MapPin } from 'lucide-react';

export default function TopBar() {
    const items = [
        { Icon: Phone, text: '+91-8968688486' },
        { Icon: Mail, text: 'thevedatoddlers09@gmail.com' },
        { Icon: MapPin, text: 'Sector 105 Emaar, Mohali' },
        { Icon: MapPin, text: 'Sector 79, Mohali' },
        { Icon: MapPin, text: 'Sector 127, Mohali' },
        { Icon: MapPin, text: 'Zirakpur, Punjab' },
        { Icon: MapPin, text: 'Panchkula, Haryana' },
        { Icon: MapPin, text: 'Ambala, Haryana' },
        { Icon: Clock, text: 'School: 9:00 a.m. to 2:00 p.m.' },
        { Icon: Clock, text: 'Daycare: 9:00 a.m. to 6:00 p.m.' },
        { Icon: Phone, text: '+91-8728000886' },
    ];

    // Duplicate items for seamless loop
    const marqueeItems = [...items, ...items, ...items];

    return (
        <div className="bg-veda-primary-dark overflow-hidden whitespace-nowrap">
            <div className="animate-marquee inline-flex py-1 sm:py-2">
                {marqueeItems.map((item, idx) => (
                    <div
                        key={idx}
                        className="inline-flex items-center gap-1 mx-3 text-[11px] font-medium text-white sm:mx-6 sm:gap-2 sm:text-sm md:text-base"
                    >
                        <item.Icon className="h-3 w-3 shrink-0 sm:h-4 sm:w-4" strokeWidth={2.5} />
                        <span>{item.text}</span>
                        <span className="mx-2 text-white/40 sm:mx-4">•</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
