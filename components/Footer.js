import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.column}>
                    <h3>The Veda Toddlers</h3>
                    <p style={{ opacity: 0.9, lineHeight: '1.6' }}>
                        Big Futures Start Small. Nurturing young minds with love and care.
                    </p>
                </div>

                <div className={styles.column}>
                    <h3>Quick Links</h3>
                    <ul className={styles.links}>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">Why Us</a></li>
                        <li><a href="/programs">Programs</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </div>

                <div className={styles.column}>
                    <h3>Contact Us</h3>
                    <ul className={styles.links}>
                        <li>123 Education Lane</li>
                        <li>+91 98765 43210</li>
                        <li>info@vedatoddlers.com</li>
                    </ul>
                </div>
            </div>

            <div className={styles.copyright}>
                &copy; {new Date().getFullYear()} The Veda Toddlers. All rights reserved.
            </div>
        </footer>
    );
}
