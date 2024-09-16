import { NavLink } from 'react-router-dom'

import classes from './MainHeader.module.css'

export const MainHeader = () => {
	return (
		<header>
			<nav>
				<ul>
					<li>
						<NavLink
							className={({ isActive }) =>
								isActive ? classes['active-page'] : undefined
							}
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
							className={({ isActive }) =>
								isActive ? classes['active-page'] : undefined
							}
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
