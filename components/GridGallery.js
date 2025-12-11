import styles from './GridGallery.module.css';

/**
 * GridGallery Component
 * Displays items in a responsive grid/masonry layout.
 * 
 * @param {Object} props
 * @param {Array<{id: string|number, title: string, image: string, category?: string}>} props.items
 */
export default function GridGallery({ items }) {
    return (
        <div className={styles.grid}>
            {items.map((item) => (
                <div key={item.id} className={styles.card}>
                    <div className={styles.imageWrapper}>
                        <img
                            src={item.image}
                            alt={item.title}
                            className={styles.image}
                            loading="lazy"
                        />
                        <div className={styles.overlay}>
                            <span className={styles.viewText}>View</span>
                        </div>
                    </div>
                    <div className={styles.content}>
                        {item.category && <span className={styles.category}>{item.category}</span>}
                        <h3 className={styles.title}>{item.title}</h3>
                    </div>
                </div>
            ))}
        </div>
    );
}
