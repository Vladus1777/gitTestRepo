// let defaultStyle =
// 	'flex gap-2 items-center focus:outline-none focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5'

const darkStyle = 'darkBtn'
const lightStyle = 'lightBtn'

const Button = ({ className, ...props }) => {
    let buttonStyle = darkStyle

    if (props.dark) {
        buttonStyle = darkStyle
    } else if (props.light) {
        buttonStyle = lightStyle
    }

    return (
        <button
            type="button"
            className={`${buttonStyle} ${className}`}
            {...props}
        >
            {props.leftIcon}
            <div className="flex gap-2">{props.children}</div>
            {props.rightIcon}
        </button>
    )
}

export default Button
