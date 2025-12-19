import Link from 'next/link';

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
    const baseClass = "inline-flex items-center justify-center py-3 px-6 font-poppins font-semibold text-base border-none cursor-pointer transition-all duration-200 no-underline";

    const shapes = {
        pill: "rounded-full",
        rounded: "rounded-xl"
    };

    const variants = {
        primary: "bg-veda-accent text-veda-primary-dark shadow-soft hover:bg-veda-accent-dark hover:-translate-y-0.5 hover:shadow-softer",
        secondary: "bg-veda-primary text-white shadow-soft hover:bg-veda-primary-light hover:-translate-y-0.5 hover:shadow-softer",
        outline: "bg-transparent border-2 border-veda-primary text-veda-primary hover:bg-veda-secondary-light"
    };

    const widthClass = fullWidth ? "w-full" : "";
    const combinedClassName = `${baseClass} ${variants[variant]} ${shapes[shape]} ${widthClass} ${className}`;

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
