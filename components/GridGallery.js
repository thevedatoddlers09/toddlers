/**
 * GridGallery Component
 * Displays items in a responsive grid/masonry layout.
 * 
 * @param {Object} props
 * @param {Array<{id: string|number, title: string, image: string, category?: string}>} props.items
 */
export default function GridGallery({ items }) {
    return (
        <div className="flex flex-wrap justify-center gap-6 py-8">
            {items.map((item) => (
                <div key={item.id} className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] bg-veda-background-soft rounded-2xl overflow-hidden shadow-soft transition-all duration-300 border border-veda-border hover:-translate-y-1 hover:shadow-softer group flex flex-col">
                    <div className="relative w-full pt-[66%] overflow-hidden bg-veda-secondary-light flex-shrink-0">
                        <img
                            src={item.image}
                            alt={item.title}
                            className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            loading="lazy"
                        />
                        <div className="absolute top-0 left-0 w-full h-full bg-veda-primary-dark/40 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                            <span className="text-white font-semibold py-2 px-5 border-2 border-white rounded-xl uppercase text-xs tracking-wider">View</span>
                        </div>
                    </div>
                    <div className="p-5 text-center flex-grow flex flex-col justify-center">
                        {item.category && <span className="inline-block text-xs uppercase tracking-wider text-veda-primary font-bold mb-2">{item.category}</span>}
                        <h3 className="text-base text-veda-text-heading m-0 font-semibold">{item.title}</h3>
                    </div>
                </div>
            ))}
        </div>
    );
}
