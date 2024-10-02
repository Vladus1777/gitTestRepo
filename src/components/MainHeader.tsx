import { NavLink } from 'react-router-dom'
import LinkButton from './Button/LinkButton'
import Dropdown from './Dropdown/Dropdown'
import LinkDropdownItem from './Dropdown/LinkDropdownItem'
import { SideBar } from './SideBar'
import Button from './Button/Button'
import {
    authUser,
    sendUserEmailVerification,
    signInUser,
    signOutUser,
    unsubscribe,
    updateUserPassword,
} from '../../firebase/firebase'

export const MainHeader = () => {
    return (
        <>
            <header className="mainOutline border-b">
                <div className="mx-auto flex h-full max-w-screen-xl justify-between">
                    <NavLink
                        className="flex items-center whitespace-nowrap"
                        to="/"
                    >
                        {/* <svg
							className="h-16  mr-2"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							fill="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								fill-rule="evenodd"
								d="M20 10H4v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8ZM9 13v-1h6v1a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1Z"
								clip-rule="evenodd"
							/>
							<path d="M2 6a2 2 0 0 1 2-2h16a2 2 0 1 1 0 4H4a2 2 0 0 1-2-2Z" />
						</svg> */}
                        <img
                            src="/logo.png"
                            alt=""
                            className="my-2 mr-2 h-10"
                        />
                        <span className="text-xl font-semibold dark:text-white">
                            Collection DB App
                        </span>
                    </NavLink>
                    <div className="flex items-center gap-4">
                        <ul className="mr-8 flex gap-8 font-semibold sm:flex">
                            <li>
                                <NavLink
                                    to="/"
                                    className={({ isActive }) =>
                                        `${
                                            isActive
                                                ? 'text-violet-500 dark:text-violet-500'
                                                : 'text-black'
                                        }`
                                    }
                                    end
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to=
                                    className={({ isActive }) =>
                                        `${
                                            isActive
                                                ? 'text-violet-500 dark:text-violet-500'
                                                : 'text-black'
                                        }`
                                    }
                                    // end
                                >
                                    Collections
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="auth"
                                    className={({ isActive }) =>
                                        `${
                                            isActive
                                                ? 'text-violet-500 dark:text-violet-500'
                                                : 'text-black'
                                        }`
                                    }
                                    // end
                                >
                                    Auth
                                </NavLink>
                            </li>
                        </ul>
                        <Dropdown imgSrc="/design.jpeg" className="p-2">
                            <ul
                                className="py-2 text-sm text-gray-700 dark:text-gray-200"
                                aria-labelledby="dropdownDefaultButton"
                            >
                                <LinkDropdownItem to={'/collections'}>
                                    Home
                                </LinkDropdownItem>
                                <LinkDropdownItem to={'/'}>
                                    Settings
                                </LinkDropdownItem>
                            </ul>
                            <ul
                                className="py-2 text-sm text-gray-700 dark:text-gray-200"
                                aria-labelledby="dropdownDefaultButton"
                            >
                                <LinkDropdownItem to={'/'}>
                                    Separated Link
                                </LinkDropdownItem>
                            </ul>
                        </Dropdown>
                    </div>
                </div>
            </header>
            {/* <SideBar /> */}
        </>
    )
}
