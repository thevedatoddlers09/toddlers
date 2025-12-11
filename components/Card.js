
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
    const baseClass = "bg-white rounded-[24px] shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] transition-all duration-400 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] border border-black/5 overflow-hidden flex flex-col";
    const hoverClass = hoverEffect ? "hover:-translate-y-2 hover:shadow-[0_20px_60px_-10px_rgba(0,0,0,0.12)]" : "";

    const paddings = {
        none: "p-0",
        small: "p-6",
        normal: "p-10",
        large: "p-14"
    };

    return (
        <div
            className={`${baseClass} ${hoverClass} ${className}`}
            {...rest}
        >
            {image && (
                <div
                    className="w-full h-[220px] bg-cover bg-center border-b border-black/5"
                    style={{ backgroundImage: `url(${image})` }}
                />
            )}
            <div className={paddings[padding]}>
                {children}
            </div>
        </div>
    );
}
