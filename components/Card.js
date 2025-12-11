import styles from './Card.module.css';

/**
 * Card Component
 * @param {Object} props
 * @param {string} [props.image] - Optional URL for card header image
 * @param {boolean} [props.hoverEffect=false] - Whether to show lift on hover
 * @param {'small' | 'normal' | 'large' | 'none'} [props.padding='normal']
 * @param {string} [props.className='']
 * @param {React.ReactNode} props.children
 */
export default function Card({
    children,
    image,
    hoverEffect = false,
    padding = 'normal',
    className = '',
    ...rest
}) {
    const hoverClass = hoverEffect ? styles.hoverEffect : '';
    const paddingClass = styles[`padding${padding.charAt(0).toUpperCase() + padding.slice(1)}`];

    return (
        <div
            className={`${styles.card} ${hoverClass} ${className}`}
            {...rest}
        >
            {image && (
                <div
                    className={styles.cardImage}
                    style={{ backgroundImage: `url(${image})` }}
                />
            )}
            <div className={paddingClass}>
                {children}
            </div>
        </div>
    );
}
