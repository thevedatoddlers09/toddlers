import Link from 'next/link';
import styles from './Button.module.css';

/**
 * Button Component
 * @param {Object} props
 * @param {'primary' | 'secondary' | 'outline'} [props.variant='primary']
 * @param {'pill' | 'rounded'} [props.shape='pill']
 * @param {boolean} [props.fullWidth=false]
 * @param {string} [props.className='']
 * @param {string} [props.href] - If provided, renders as a Link
 * @param {React.ReactNode} props.children
 * @param {Object} props.rest - Other props (onClick, type, etc.)
 */
export default function Button({
    children,
    variant = 'primary',
    shape = 'pill',
    fullWidth = false,
    className = '',
    href,
    ...rest
}) {
    const variantClass = styles[variant] || styles.primary;
    const shapeClass = styles[shape] || styles.pill;
    const widthClass = fullWidth ? styles.fullWidth : '';
    const combinedClassName = `${styles.button} ${variantClass} ${shapeClass} ${widthClass} ${className}`;

    // If href is provided, render as a Link
    if (href) {
        return (
            <Link href={href} className={combinedClassName} {...rest}>
                {children}
            </Link>
        );
    }

    return (
        <button className={combinedClassName} {...rest}>
            {children}
        </button>
    );
}
