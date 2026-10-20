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
        <section className="bg-veda-background-muted py-8 px-4 text-center border-b border-veda-border sm:py-12 sm:px-[5%] md:py-14">
            <div className="max-w-7xl mx-auto">
                <h1 className="mb-2 font-poppins text-2xl font-bold text-veda-text-heading sm:mb-3 sm:text-3xl">{title}</h1>
                <div className="flex flex-wrap items-center justify-center gap-1.5 text-xs font-medium uppercase text-veda-text-muted font-opensans sm:gap-2 sm:text-sm">
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
