import Link from 'next/link';
import Button from './Button';
import styles from './Navbar.module.css';

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                The Veda <span>Toddlers</span>
            </div>

            <div className={styles.navLinks}>
                <Link href="/" className={styles.link}>Home</Link>
                <Link href="/about" className={styles.link}>About Us</Link>
                <Link href="/programs" className={styles.link}>Programs</Link>
                <Link href="/events" className={styles.link}>Events</Link>
                <Link href="/activities" className={styles.link}>Activities</Link>
                <Link href="/admissions" className={styles.link}>Admissions</Link>

                <Button variant="primary" shape="pill" href="/contact">
                    Contact Us
                </Button>
            </div>
        </nav>
    );
}
