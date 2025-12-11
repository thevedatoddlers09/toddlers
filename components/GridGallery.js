
/**
 * GridGallery Component
 * Displays items in a responsive grid/masonry layout.
 * 
 * @param {Object} props
 * @param {Array<{id: string|number, title: string, image: string, category?: string}>} props.items
 */
export default function GridGallery({ items }) {
    return (
        <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-8 py-8">
            {items.map((item) => (
                <div key={item.id} className="bg-white rounded-xl overflow-hidden shadow-sm transition-all duration-300 border border-black/5 hover:-translate-y-1 hover:shadow-lg group">
                    <div className="relative w-full pt-[66%] overflow-hidden bg-gray-100">
                        <img
                            src={item.image}
                            alt={item.title}
                            className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            loading="lazy"
                        />
                        <div className="absolute top-0 left-0 w-full h-full bg-black/30 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                            <span className="text-white font-semibold py-2 px-6 border-2 border-white rounded-full uppercase text-xs tracking-wider">View</span>
                        </div>
                    </div>
                    <div className="p-6 text-center">
                        {item.category && <span className="inline-block text-xs uppercase tracking-wider text-brand-primary font-bold mb-2">{item.category}</span>}
                        <h3 className="text-lg text-brand-secondary m-0 font-semibold">{item.title}</h3>
                    </div>
                </div>
            ))}
        </div>
    );
}
