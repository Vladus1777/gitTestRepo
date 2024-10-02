import { useState } from 'react'
import Button from '../Button/Button'
import { Avatar } from '../Avatar'

const Dropdown = ({ className, label, ...props }) => {
	const [isOpen, setIsOpen] = useState(false)

	function handleToggle() {
		setIsOpen((prevState) => !prevState)
	}

	return (
		<>
			<div className="flex relative">
				{props.imgSrc ? (
					<button
						onBlur={() => {
							setIsOpen(false)
						}}
					>
						<Avatar
							className="imgH"
							src={props.imgSrc}
							onClick={handleToggle}
							onBlur={() => {
								console.log('blur')
							}}
						/>
					</button>
				) : (
					<Button
						onBlur={() => {
							setIsOpen(false)
						}}
						onClick={handleToggle}
						rightIcon={
							<svg
								className="w-2.5 h-2.5"
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 10 6"
							>
								<path
									stroke="currentColor"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="m1 1 4 4 4-4"
								/>
							</svg>
						}
					>
						{label}
					</Button>
				)}
				{isOpen && (
					<>
						<div
							id="dropdown"
							className="absolute right-0 top-[100%] mt-2 z-10 bg-white divide-y divide-gray-100 border border-gray-200 rounded-lg shadow w-44 dark:bg-gray-700"
						>
							{props.children}
						</div>
					</>
				)}
			</div>
		</>
	)
}

export default Dropdown
