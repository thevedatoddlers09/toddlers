
import Link from 'next/link';

/**
 * PageHero Component
 * Displays a simple banner with title and breadcrumbs.
 * 
 * @param {Object} props
 * @param {string} props.title - The main page title
 * @param {Array<{label: string, href: string}>} [props.breadcrumbs] - Array of breadcrumb items
 */
export default function PageHero({ title, breadcrumbs = [] }) {
    return (
        <section className="bg-[#f5f5f5] py-12 px-[5%] text-center border-b border-black/5">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl text-brand-blue mb-2 font-poppins font-bold">{title}</h1>
                <div className="text-sm text-gray-500 uppercase font-semibold font-opensans flex justify-center items-center flex-wrap gap-2">
                    <Link href="/" className="text-gray-500 hover:text-brand-red no-underline transition-colors">Home</Link>
                    {breadcrumbs.map((crumb, index) => (
                        <span key={index} className="flex items-center">
                            <span className="mx-2 text-[#ccc]">/</span>
                            {crumb.href ? (
                                <Link href={crumb.href} className="text-gray-500 hover:text-brand-red no-underline transition-colors">
                                    {crumb.label}
                                </Link>
                            ) : (
                                <span className="text-brand-red">{crumb.label}</span>
                            )}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}
