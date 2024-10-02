import { LinkProps, useNavigate } from 'react-router-dom'

const LinkDropdownItem: React.FC<LinkProps> = ({ to, children, ...props }) => {
	const navigate = useNavigate()
	return (
		<li
			className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
			onMouseDown={() => {
				console.log('AAAA')
				navigate(to)
			}}
			{...props}
		>
			{children}
		</li>
	)
}

export default LinkDropdownItem
