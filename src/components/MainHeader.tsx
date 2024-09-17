import { NavLink } from 'react-router-dom'

export const MainHeader = () => {
	return (
		<header className="h-[44] w-[100%] bg-fuchsia-600 text-white ">
			<nav className="h-full w-[85%]  flex justify-between items-center  mx-auto">
				<span className="text-[20px] w-[100px] h-[100px] flex items-center justify-center bg-fuchsia-700">
					CApp
				</span>
				<ul className="grid h-full w-[30%] grid-cols-2 gap-[10px]">
					<li>
						<NavLink
							// className={({ isActive }) =>
							// 	isActive ? classes.active : undefined
							// }
							to="/"
							// end
						>
							Home
						</NavLink>
					</li>
					<li>
						<NavLink
							// className={({ isActive }) =>
							// 	isActive ? classes.active : undefined
							// }
							to="collections"
						>
							Collections
						</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	)
}
