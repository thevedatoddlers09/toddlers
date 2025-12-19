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
        <section className="bg-veda-background-muted py-14 px-[5%] text-center border-b border-veda-border">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-3xl text-veda-text-heading mb-3 font-poppins font-bold">{title}</h1>
                <div className="text-sm text-veda-text-muted uppercase font-medium font-opensans flex justify-center items-center flex-wrap gap-2">
                    <Link href="/" className="text-veda-text-muted hover:text-veda-primary no-underline transition-colors">Home</Link>
                    {breadcrumbs.map((crumb, index) => (
                        <span key={index} className="flex items-center">
                            <span className="mx-2 text-veda-border">/</span>
                            {crumb.href ? (
                                <Link href={crumb.href} className="text-veda-text-muted hover:text-veda-primary no-underline transition-colors">
                                    {crumb.label}
                                </Link>
                            ) : (
                                <span className="text-veda-primary">{crumb.label}</span>
                            )}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}
