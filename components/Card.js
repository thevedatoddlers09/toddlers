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
    const baseClass = "bg-veda-background-soft rounded-2xl shadow-soft transition-all duration-300 ease-out border border-veda-border overflow-hidden flex flex-col";
    const hoverClass = hoverEffect ? "hover:-translate-y-1 hover:shadow-softer" : "";

    const paddings = {
        none: "p-0",
        small: "p-4 sm:p-5",
        normal: "p-5 sm:p-8",
        large: "p-6 sm:p-10 md:p-12"
    };

    return (
        <div
            className={`${baseClass} ${hoverClass} ${className}`}
            {...rest}
        >
            {image && (
                <div
                    className="w-full h-[160px] bg-cover bg-center border-b border-veda-border sm:h-[200px]"
                    style={{ backgroundImage: `url(${image})` }}
                />
            )}
            <div className={paddings[padding]}>
                {children}
            </div>
        </div>
    );
}
