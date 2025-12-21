/**
 * GridGallery Component
 * Displays items in a responsive grid/masonry layout with premium styling.
 * 
 * @param {Object} props
 * @param {Array<{id: string|number, title: string, image: string, category?: string}>} props.items
 */
export default function GridGallery({ items }) {
    // Color gradients for category badges
    const gradients = [
        'from-veda-accent to-amber-500',
        'from-veda-primary to-veda-primary-dark',
        'from-veda-playful-green to-green-600',
        'from-veda-playful-peach to-rose-400',
        'from-veda-playful-blue to-blue-500',
        'from-veda-secondary-dark to-purple-600',
    ];

    return (
        <div className="flex flex-wrap justify-center gap-6 py-8">
            {items.map((item, idx) => (
                <div key={item.id} className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] group">
                    <div className="relative bg-white rounded-3xl overflow-hidden shadow-soft hover:shadow-softer transition-all duration-300 hover:-translate-y-2">
                        {/* Image Container */}
                        <div className="relative w-full pt-[75%] overflow-hidden">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                loading="lazy"
                            />
                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-veda-primary-dark/80 via-veda-primary-dark/30 to-transparent"></div>

                            {/* Content Overlay */}
                            <div className="absolute bottom-0 left-0 right-0 p-5">
                                {item.category && (
                                    <span className={`inline-block bg-gradient-to-r ${gradients[idx % gradients.length]} text-white py-1.5 px-4 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg mb-3`}>
                                        {item.category}
                                    </span>
                                )}
                                <h3 className="text-lg text-white font-bold font-poppins leading-snug drop-shadow-md">
                                    {item.title}
                                </h3>
                            </div>

                            {/* Hover View Button */}
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-veda-primary-dark/20">
                                <span className="bg-white text-veda-primary-dark font-bold py-2.5 px-6 rounded-full text-sm shadow-lg transform scale-90 group-hover:scale-100 transition-transform">
                                    View Details
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

