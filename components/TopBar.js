import { Clock, Phone, Mail, MapPin } from 'lucide-react';

export default function TopBar() {
    const items = [
        { Icon: Phone, text: '+91-8968688486' },
        { Icon: Mail, text: 'info@vedatoddlers.com' },
        { Icon: MapPin, text: 'CPM 61, Sector 105 Emaar, Mohali' },
        { Icon: Clock, text: '8:30 a.m. to 3:30 p.m.' },
        { Icon: Phone, text: '+91-8968688486' },
    ];

    // Duplicate items for seamless loop
    const marqueeItems = [...items, ...items, ...items];

    return (
        <div className="bg-veda-primary-dark overflow-hidden whitespace-nowrap">
            <div className="animate-marquee inline-flex py-2">
                {marqueeItems.map((item, idx) => (
                    <div key={idx} className="inline-flex items-center gap-2 mx-6 text-white text-sm font-medium">
                        <item.Icon size={14} strokeWidth={2.5} />
                        <span>{item.text}</span>
                        <span className="mx-4 text-white/40">•</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
