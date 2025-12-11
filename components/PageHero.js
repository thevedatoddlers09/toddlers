import Link from 'next/link';
import styles from './PageHero.module.css';

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
        <section className={styles.hero}>
            <div className={styles.container}>
                <h1 className={styles.title}>{title}</h1>
                <div className={styles.breadcrumbs}>
                    <Link href="/" className={styles.crumbLink}>Home</Link>
                    {breadcrumbs.map((crumb, index) => (
                        <span key={index} className={styles.crumbItem}>
                            <span className={styles.separator}>/</span>
                            {crumb.href ? (
                                <Link href={crumb.href} className={styles.crumbLink}>
                                    {crumb.label}
                                </Link>
                            ) : (
                                <span className={styles.current}>{crumb.label}</span>
                            )}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}
