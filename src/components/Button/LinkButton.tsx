import { Link } from 'react-router-dom'

const darkStyle = 'darkBtn'
const lightStyle = 'lightBtn'

const LinkButton = ({ className, ...props }) => {
    let buttonStyle = darkStyle

    if (props.dark) {
        buttonStyle = darkStyle
    } else if (props.light) {
        buttonStyle = lightStyle
    }

    return (
        // <Link className={`${buttonStyle} ${className}`} to={props.to}>
        <Link className={`${buttonStyle} ${className}`} {...props}>
            {props.children}
        </Link>
    )
}

export default LinkButton
