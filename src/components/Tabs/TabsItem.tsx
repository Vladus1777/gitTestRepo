import { NavLink } from 'react-router-dom'

const TabsItem = ({ className, to, leftIcon, ...props }) => {
    if (props.disabled) {
        return (
            <li>
                <p className="group inline-flex cursor-not-allowed items-center justify-center rounded-t-lg border-b border-transparent p-4 text-gray-400 dark:text-gray-500">
                    {leftIcon}
                    {props.children}
                </p>
            </li>
        )
    }
    return (
        <>
            <li>
                <NavLink
                    to={to}
                    className={({ isActive }) =>
                        `group inline-flex items-center justify-center rounded-t-lg border-b-2 border-transparent p-4 hover:border-gray-300 hover:text-gray-600 dark:hover:text-gray-300 ${
                            isActive
                                ? 'border-violet-300 font-medium'
                                : undefined
                        }`
                    }
                    end
                >
                    {leftIcon}
                    {props.children}
                </NavLink>
            </li>
        </>
    )
}

export default TabsItem
