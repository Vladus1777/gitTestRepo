export const Tag = ({ children, ...props }) => {
    return (
        <p
            className={`rounded px-2 py-1 text-xs font-bold uppercase text-white ${props.className}`}
        >
            {children}
        </p>
    )
}
